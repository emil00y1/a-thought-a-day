import "server-only"

import type { Thought } from "./types"
import { blueSky } from "./thoughts/blue-sky"
import { fermiParadox } from "./thoughts/fermi-paradox"
import { forgettingCurve } from "./thoughts/forgetting-curve"
import { greatStink } from "./thoughts/great-stink"
import { leftAndRight } from "./thoughts/left-and-right"
import { marshmallowTest } from "./thoughts/marshmallow-test"
import { octopus } from "./thoughts/octopus"
import { shipOfTheseus } from "./thoughts/ship-of-theseus"
import { trolleyProblem } from "./thoughts/trolley-problem"
import { weirdTime } from "./thoughts/weird-time"

/** The day thought #1 goes live (UTC). Each following thought unlocks one day later. */
export const LAUNCH_DATE = "2026-10-20"

/** The schedule. Only ever append to the end once a thought has gone live. */
export const thoughts: Thought[] = [
  forgettingCurve,
  fermiParadox,
  shipOfTheseus,
  octopus,
  trolleyProblem,
  greatStink,
  blueSky,
  weirdTime,
  leftAndRight,
  marshmallowTest,
]

const bySlug = new Map(thoughts.map((t) => [t.slug, t]))
if (bySlug.size !== thoughts.length) throw new Error("Duplicate thought slug in src/content/index.ts")

const DAY_MS = 86_400_000

/** Today's date as YYYY-MM-DD in UTC. */
export function todayKey(now = new Date()) {
  return now.toISOString().slice(0, 10)
}

export function addDays(day: string, days: number) {
  return todayKey(new Date(Date.parse(day) + days * DAY_MS))
}

/** Index of the thought scheduled for `day`. Negative before launch. */
export function dayIndex(day: string) {
  return Math.round((Date.parse(day) - Date.parse(LAUNCH_DATE)) / DAY_MS)
}

export function thoughtForDay(day: string) {
  const i = dayIndex(day)
  return i >= 0 ? (thoughts[i] ?? null) : null
}

export function thoughtBySlug(slug: string) {
  return bySlug.get(slug) ?? null
}

/** 1-based number shown as "Thought #n". */
export function thoughtNumber(slug: string) {
  return thoughts.findIndex((t) => t.slug === slug) + 1
}

export function scheduledDay(slug: string) {
  return addDays(LAUNCH_DATE, thoughtNumber(slug) - 1)
}

/** "Tue 20 Oct" */
export function formatDay(day: string) {
  return new Date(day).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  })
}
