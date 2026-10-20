"use server"

import { refresh } from "next/cache"

import { thoughtForDay, todayKey } from "@/content"
import { db } from "@/db"
import { learnedThought } from "@/db/schema"
import { getUser } from "@/lib/data"

type Result = { ok: true } | { ok: false; error: string }

function clampInt(value: number, min: number, max: number) {
  return Number.isFinite(value) ? Math.min(max, Math.max(min, Math.round(value))) : min
}

/** Marks today's thought as learned. Only today's thought can be saved. */
export async function completeThought(input: { slug: string; correct: number; total: number }): Promise<Result> {
  const user = await getUser()
  if (!user) return { ok: false, error: "Sign in to save your progress." }

  const today = todayKey()
  const thought = thoughtForDay(today)
  if (!thought || thought.slug !== input.slug) {
    return { ok: false, error: "That's no longer today's thought." }
  }

  const total = clampInt(input.total, 0, 100)
  const correct = clampInt(input.correct, 0, total)

  await db
    .insert(learnedThought)
    .values({ userId: user.id, thoughtSlug: thought.slug, day: today, correct, total })
    .onConflictDoNothing()

  refresh()
  return { ok: true }
}
