import "server-only"
import { createHmac, timingSafeEqual } from "node:crypto"

import { siteUrl } from "@/lib/site"

/** Signs the user id, so an unsubscribe link only works for its own account. */
function sign(userId: string) {
  return createHmac("sha256", process.env.BETTER_AUTH_SECRET ?? "").update(`unsubscribe:${userId}`).digest("base64url")
}

export function unsubscribeUrl(userId: string) {
  return `${siteUrl}/api/reminders/unsubscribe?u=${encodeURIComponent(userId)}&t=${sign(userId)}`
}

export function validUnsubscribe(userId: string, token: string) {
  const expected = Buffer.from(sign(userId))
  const given = Buffer.from(token)
  return expected.length === given.length && timingSafeEqual(expected, given)
}

/** The hour of day (0-23) in a time zone. */
export function localHour(timeZone: string, now = new Date()) {
  return Number(new Intl.DateTimeFormat("en-US", { timeZone, hour: "numeric", hourCycle: "h23" }).format(now))
}
