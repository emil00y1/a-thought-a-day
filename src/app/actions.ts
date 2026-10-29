"use server"

import { and, count, eq, gt, sql } from "drizzle-orm"
import { headers } from "next/headers"

import { saveableDay, thoughtBySlug, todayKey } from "@/content"
import { db } from "@/db"
import { learnedThought, pollTally, quizResult, submission, thoughtPlays, user } from "@/db/schema"
import { auth } from "@/lib/auth"
import { sendToOwner } from "@/lib/email"
import { getStats, getTimeZone, getUser, type Stats } from "@/lib/data"

type Result = { ok: true; stats: Stats } | { ok: false; error: string }

function clampInt(value: number, min: number, max: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, Math.round(value))) : min
}

/** Marks a thought as learned. Only today's thought can be saved (or yesterday's, just after midnight). */
export async function completeThought(input: { slug: string; correct: number; total: number }): Promise<Result> {
  const current = await getUser()
  if (!current) return { ok: false, error: "Sign in to save your progress." }

  const timeZone = await getTimeZone()
  const day = saveableDay(input.slug, timeZone)
  if (!day) return { ok: false, error: "That's no longer today's thought." }

  const total = clampInt(input.total, 0, 100)
  const correct = clampInt(input.correct, 0, total)

  await db
    .insert(learnedThought)
    .values({ userId: current.id, thoughtSlug: input.slug, day, correct, total })
    .onConflictDoNothing()
  // Keep the time zone current, so a reminder arrives at their midday.
  await db.update(user).set({ timeZone }).where(eq(user.id, current.id))

  // No refresh() here: just after midnight it would swap the page to the new thought mid-celebration.
  return { ok: true, stats: await getStats(current.id, todayKey(new Date(), timeZone)) }
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

/**
 * Saves feedback or a thought suggestion and emails it to the owner.
 * `website` is a hidden field only bots fill in.
 */
export async function sendMessage(input: {
  kind: "feedback" | "thought"
  message: string
  email: string
  mayContact: boolean
  website: string
}): Promise<{ ok: boolean }> {
  const message = input.message.trim().slice(0, 2000)
  const email = input.email.trim().slice(0, 200)
  if (input.website || !message || !["feedback", "thought"].includes(input.kind)) return { ok: !!input.website }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false }

  // A loose cap, so a flood can't eat the daily email allowance.
  const [{ recent }] = await db
    .select({ recent: count() })
    .from(submission)
    .where(gt(submission.createdAt, new Date(Date.now() - 60 * 60 * 1000)))
  if (recent >= 30) return { ok: false }

  const mayContact = Boolean(email) && input.mayContact
  await db.insert(submission).values({ kind: input.kind, message, email: email || null, mayContact })

  const label = input.kind === "feedback" ? "Feedback" : "Thought idea"
  const from = email ? `${email} (${mayContact ? "you may contact them" : "do NOT contact them"})` : "anonymous"
  try {
    await sendToOwner(`${label}: ${message.slice(0, 60)}`, `${message}\n\nFrom: ${from}`, mayContact ? email : undefined)
  } catch (error) {
    // It's saved in the database either way.
    console.error("Couldn't email the message", error)
  }
  return { ok: true }
}

/** Counts a start or finish of a thought. The player sends each one once per browser. */
export async function countPlay(input: { slug: string; kind: "started" | "finished" }) {
  if (!thoughtBySlug(input.slug) || (input.kind !== "started" && input.kind !== "finished")) return
  const column = thoughtPlays[input.kind]
  await db
    .insert(thoughtPlays)
    .values({ thoughtSlug: input.slug, [input.kind]: 1 })
    .onConflictDoUpdate({ target: thoughtPlays.thoughtSlug, set: { [input.kind]: sql`${column} + 1` } })
}

/** Turns the daily reminder email on or off, saving the time zone it's sent in. */
export async function setReminders(on: boolean): Promise<{ ok: boolean }> {
  const current = await getUser()
  if (!current) return { ok: false }
  await db
    .update(user)
    .set({ reminders: on === true, timeZone: await getTimeZone() })
    .where(eq(user.id, current.id))
  return { ok: true }
}
