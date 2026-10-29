import { and, eq, isNotNull } from "drizzle-orm"

import { thoughtForDay, todayKey } from "@/content"
import { db } from "@/db"
import { learnedThought, user } from "@/db/schema"
import { sendReminder } from "@/lib/email"
import { localHour, unsubscribeUrl } from "@/lib/reminders"

// The scheduler can run late or skip an hour, so anyone between 12:00 and 15:00 local time is due.
const FROM_HOUR = 12
const TO_HOUR = 15

/**
 * Called every hour by a scheduled GitHub Action. Emails everyone with reminders on
 * whose midday it is and who hasn't played today's thought yet. Each person gets at most one a day.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 })
  }

  const now = new Date()
  const people = await db
    .select({ id: user.id, email: user.email, timeZone: user.timeZone, remindedOn: user.remindedOn })
    .from(user)
    .where(and(eq(user.reminders, true), isNotNull(user.timeZone)))

  let sent = 0
  for (const person of people) {
    const timeZone = person.timeZone!
    let hour: number
    try {
      hour = localHour(timeZone, now)
    } catch {
      continue
    }
    if (hour < FROM_HOUR || hour >= TO_HOUR) continue

    const today = todayKey(now, timeZone)
    const thought = thoughtForDay(today)
    if (!thought || person.remindedOn === today) continue

    const [played] = await db
      .select({ day: learnedThought.day })
      .from(learnedThought)
      .where(and(eq(learnedThought.userId, person.id), eq(learnedThought.day, today)))
      .limit(1)
    if (played) continue

    try {
      await sendReminder(person.email, thought.title, thought.emoji, unsubscribeUrl(person.id))
      await db.update(user).set({ remindedOn: today }).where(eq(user.id, person.id))
      sent++
    } catch (error) {
      console.error("Reminder failed", error)
    }
  }

  return Response.json({ sent })
}
