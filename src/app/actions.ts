"use server"

import { and, eq, sql } from "drizzle-orm"
import { headers } from "next/headers"

import { saveableDay, thoughtBySlug, todayKey } from "@/content"
import { db } from "@/db"
import { learnedThought, pollTally, quizResult, user } from "@/db/schema"
import { auth } from "@/lib/auth"
import { getStats, getTimeZone, getUser, type Stats } from "@/lib/data"

type Result = { ok: true; stats: Stats } | { ok: false; error: string }

function clampInt(value: number, min: number, max: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, Math.round(value))) : min
}

/** Marks a thought as learned. Only today's thought can be saved (or yesterday's, just after midnight). */
export async function completeThought(input: { slug: string; correct: number; total: number }): Promise<Result> {
  const user = await getUser()
  if (!user) return { ok: false, error: "Sign in to save your progress." }

  const timeZone = await getTimeZone()
  const day = saveableDay(input.slug, timeZone)
  if (!day) return { ok: false, error: "That's no longer today's thought." }

  const total = clampInt(input.total, 0, 100)
  const correct = clampInt(input.correct, 0, total)

  await db
    .insert(learnedThought)
    .values({ userId: user.id, thoughtSlug: input.slug, day, correct, total })
    .onConflictDoNothing()

  // No refresh() here: just after midnight it would swap the page to the new thought mid-celebration.
  return { ok: true, stats: await getStats(user.id, todayKey(new Date(), timeZone)) }
}

/** Saves a finished memory quiz score. */
export async function saveQuizResult(input: { correct: number; total: number }) {
  const user = await getUser()
  if (!user) return
  const total = clampInt(input.total, 1, 50)
  await db.insert(quizResult).values({ userId: user.id, correct: clampInt(input.correct, 0, total), total })
}

/** Permanently deletes the signed-in user. Sessions, logins and learned thoughts go with it (cascade). */
export async function deleteAccount(): Promise<{ ok: boolean }> {
  const current = await getUser()
  if (!current) return { ok: false }

  // Sign out first so the session cookie is cleared, then remove the user.
  await auth.api.signOut({ headers: await headers() })
  await db.delete(user).where(eq(user.id, current.id))
  return { ok: true }
}

/**
 * Records an anonymous poll vote and returns the vote count for each option.
 * Votes only count on today's thought; with `record: false` it just reads the counts.
 */
export async function votePoll(input: {
  slug: string
  pollIndex: number
  option: number
  record: boolean
}): Promise<number[] | null> {
  const poll = thoughtBySlug(input.slug)?.activities[input.pollIndex]
  if (poll?.type !== "poll" || !Number.isInteger(input.option) || input.option < 0 || input.option >= poll.options.length) {
    return null
  }

  const where = and(eq(pollTally.thoughtSlug, input.slug), eq(pollTally.pollIndex, input.pollIndex))
  try {
    if (input.record && saveableDay(input.slug, await getTimeZone())) {
      await db
        .insert(pollTally)
        .values({ thoughtSlug: input.slug, pollIndex: input.pollIndex, option: input.option, votes: 1 })
        .onConflictDoUpdate({
          target: [pollTally.thoughtSlug, pollTally.pollIndex, pollTally.option],
          set: { votes: sql`${pollTally.votes} + 1` },
        })
    }
    const rows = await db.select({ option: pollTally.option, votes: pollTally.votes }).from(pollTally).where(where)
    return poll.options.map((_, i) => rows.find((r) => r.option === i)?.votes ?? 0)
  } catch (error) {
    console.error("Poll vote failed", error)
    return null
  }
}
