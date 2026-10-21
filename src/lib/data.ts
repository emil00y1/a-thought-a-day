import "server-only"
import { desc, eq } from "drizzle-orm"
import { headers } from "next/headers"
import { connection } from "next/server"
import { cache } from "react"

import { addDays, thoughtBySlug, todayKey } from "@/content"
import { db } from "@/db"
import { learnedThought } from "@/db/schema"
import { auth } from "@/lib/auth"

/** Learned thoughts needed before memory quizzes unlock. */
export const QUIZ_UNLOCK = 7

export type Stats = {
  learned: number
  streak: number
  learnedToday: boolean
}

/** Today's UTC date, read at request time. */
export async function getToday() {
  await connection()
  return todayKey()
}

export const getUser = cache(async () => {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) return null
  const { id, name, email, createdAt } = session.user
  // Email-code sign-ups have no name, so fall back to the email.
  return { id, name: name || email, email, createdAt }
})

/** The user's learned thoughts, newest first, joined with their content. */
export async function getLearned(userId: string) {
  const rows = await db
    .select()
    .from(learnedThought)
    .where(eq(learnedThought.userId, userId))
    .orderBy(desc(learnedThought.day), desc(learnedThought.createdAt))

  return rows.flatMap((row) => {
    const thought = thoughtBySlug(row.thoughtSlug)
    return thought ? [{ ...row, thought }] : []
  })
}

/** Consecutive days with a learned thought, ending today (or yesterday if today isn't done yet). */
export function streakFrom(days: string[], today: string) {
  const set = new Set(days)
  let day = set.has(today) ? today : addDays(today, -1)
  let streak = 0
  while (set.has(day)) {
    streak++
    day = addDays(day, -1)
  }
  return streak
}

export async function getStats(userId: string, today: string): Promise<Stats> {
  const rows = await db
    .select({ day: learnedThought.day })
    .from(learnedThought)
    .where(eq(learnedThought.userId, userId))
  const days = rows.map((r) => r.day)
  return {
    learned: rows.length,
    streak: streakFrom(days, today),
    learnedToday: days.includes(today),
  }
}
