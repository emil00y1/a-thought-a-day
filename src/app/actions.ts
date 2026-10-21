"use server"

import { saveableDay, todayKey } from "@/content"
import { db } from "@/db"
import { learnedThought } from "@/db/schema"
import { getStats, getUser, type Stats } from "@/lib/data"

type Result = { ok: true; stats: Stats } | { ok: false; error: string }

function clampInt(value: number, min: number, max: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, Math.round(value))) : min
}

/** Marks a thought as learned. Only today's thought can be saved (or yesterday's, just after midnight). */
export async function completeThought(input: { slug: string; correct: number; total: number }): Promise<Result> {
  const user = await getUser()
  if (!user) return { ok: false, error: "Sign in to save your progress." }

  const day = saveableDay(input.slug)
  if (!day) return { ok: false, error: "That's no longer today's thought." }

  const total = clampInt(input.total, 0, 100)
  const correct = clampInt(input.correct, 0, total)

  await db
    .insert(learnedThought)
    .values({ userId: user.id, thoughtSlug: input.slug, day, correct, total })
    .onConflictDoNothing()

  // No refresh() here: just after midnight it would swap the page to the new thought mid-celebration.
  return { ok: true, stats: await getStats(user.id, todayKey()) }
}
