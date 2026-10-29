import { eq } from "drizzle-orm"

import { db } from "@/db"
import { user } from "@/db/schema"
import { validUnsubscribe } from "@/lib/reminders"

async function unsubscribe(request: Request) {
  const params = new URL(request.url).searchParams
  const userId = params.get("u") ?? ""
  if (!validUnsubscribe(userId, params.get("t") ?? "")) {
    return new Response("This unsubscribe link isn't valid.", { status: 400 })
  }
  await db.update(user).set({ reminders: false }).where(eq(user.id, userId))
  return new Response("Done. You won't get daily reminders anymore. You can turn them back on from your account page.", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}

// GET is the link in the email; POST is the one-click unsubscribe button some mail apps show.
export const GET = unsubscribe
export const POST = unsubscribe
