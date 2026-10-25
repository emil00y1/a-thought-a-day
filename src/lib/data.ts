import "server-only"
import { getSessionCookie } from "better-auth/cookies"
import { desc, eq } from "drizzle-orm"
import { cookies, headers } from "next/headers"
import { connection } from "next/server"
import { cache } from "react"

import { addDays, thoughtBySlug, todayKey } from "@/content"
import { db } from "@/db"
import { learnedThought, quizResult } from "@/db/schema"
import { auth } from "@/lib/auth"

/** Learned thoughts needed before memory quizzes unlock. */
export const QUIZ_UNLOCK = 7

export type Stats = {
  learned: number
  streak: number
  learnedToday: boolean
}

function isTimeZone(zone: string) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: zone })
    return true
  } catch {
    return false
  }
}

/** The visitor's time zone: from their browser (a cookie), else Vercel's guess from their IP, else UTC. */
export async function getTimeZone() {
  const [cookieStore, requestHeaders] = await Promise.all([cookies(), headers()])
  const zone = [cookieStore.get("tz")?.value, requestHeaders.get("x-vercel-ip-timezone")].find((z) => z && isTimeZone(z))
  return zone ?? "UTC"
}

/** Today's date in the visitor's time zone, read at request time. */
export async function getToday() {
  await connection()
  return todayKey(new Date(), await getTimeZone())
}

export const getUser = cache(async () => {
  const requestHeaders = await headers()
  // Guests have no session cookie, so skip auth (and its database lookup) entirely.
  if (!getSessionCookie(requestHeaders)) return null
  const session = await auth.api.getSession({ headers: requestHeaders })
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

/** The user's latest memory quiz scores, oldest first. */
export async function getQuizHistory(userId: string, limit = 7) {
  const rows = await db
    .select({ correct: quizResult.correct, total: quizResult.total })
    .from(quizResult)
    .where(eq(quizResult.userId, userId))
    .orderBy(desc(quizResult.createdAt), desc(quizResult.id))
    .limit(limit)
  return rows.reverse()
}

/**
 * Learned days in the current streak, ending today (or yesterday if today isn't done yet).
 * One missed day is forgiven; two in a row end the streak.
 */
export function streakFrom(days: string[], today: string) {
  const set = new Set(days)
  let day = set.has(today) ? today : addDays(today, -1)
  let streak = 0
  let missed = 0
  while (missed < 2) {
    if (set.has(day)) {
      streak++
      missed = 0
    } else {
      missed++
    }
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
