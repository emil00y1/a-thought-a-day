import "server-only"

import type { Thought } from "./types"
import { antikythera } from "./thoughts/antikythera"
import { birthdayParadox } from "./thoughts/birthday-paradox"
import { blueSky } from "./thoughts/blue-sky"
import { dunningKruger } from "./thoughts/dunning-kruger"
import { fermiParadox } from "./thoughts/fermi-paradox"
import { forgettingCurve } from "./thoughts/forgetting-curve"
import { gpsRelativity } from "./thoughts/gps-relativity"
import { greatStink } from "./thoughts/great-stink"
import { leftAndRight } from "./thoughts/left-and-right"
import { marshmallowTest } from "./thoughts/marshmallow-test"
import { milgram } from "./thoughts/milgram"
import { montyHall } from "./thoughts/monty-hall"
import { octopus } from "./thoughts/octopus"
import { paleBlueDot } from "./thoughts/pale-blue-dot"
import { paperFolding } from "./thoughts/paper-folding"
import { penicillin } from "./thoughts/penicillin"
import { platosCave } from "./thoughts/platos-cave"
import { prisonersDilemma } from "./thoughts/prisoners-dilemma"
import { shipOfTheseus } from "./thoughts/ship-of-theseus"
import { stoicControl } from "./thoughts/stoic-control"
import { survivorshipBias } from "./thoughts/survivorship-bias"
import { tardigrades } from "./thoughts/tardigrades"
import { trolleyProblem } from "./thoughts/trolley-problem"
import { tulipMania } from "./thoughts/tulip-mania"
import { veilOfIgnorance } from "./thoughts/veil-of-ignorance"
import { weirdTime } from "./thoughts/weird-time"
import { validateThoughts } from "./validate"

/** The day thought #1 goes live, at midnight in each player's time zone. Each following thought unlocks one day later. */
export const LAUNCH_DATE = "2026-10-26"

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
  montyHall,
  paleBlueDot,
  survivorshipBias,
  platosCave,
  tardigrades,
  milgram,
  gpsRelativity,
  veilOfIgnorance,
  penicillin,
  paperFolding,
  antikythera,
  stoicControl,
  birthdayParadox,
  prisonersDilemma,
  tulipMania,
  dunningKruger,
]

validateThoughts(thoughts)

const bySlug = new Map(thoughts.map((t) => [t.slug, t]))

const DAY_MS = 86_400_000

/** The date as YYYY-MM-DD in a time zone. */
export function todayKey(now = new Date(), timeZone = "UTC") {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now)
  const part = (type: string) => parts.find((p) => p.type === type)?.value
  return `${part("year")}-${part("month")}-${part("day")}`
}

export function addDays(day: string, days: number) {
  return new Date(Date.parse(day) + days * DAY_MS).toISOString().slice(0, 10)
}

/** Index of the thought scheduled for `day`. Negative before launch. */
export function dayIndex(day: string) {
  return Math.round((Date.parse(day) - Date.parse(LAUNCH_DATE)) / DAY_MS)
}

export function thoughtForDay(day: string) {
  const i = dayIndex(day)
  return i >= 0 ? (thoughts[i] ?? null) : null
}

/** How long after midnight yesterday's thought can still be saved, for anyone mid-play at midnight. */
const GRACE_MS = 60 * 60 * 1000

/** The day a finished thought counts for: today's thought, or yesterday's just after midnight. Otherwise null. */
export function saveableDay(slug: string, timeZone: string, now = new Date()) {
  const today = todayKey(now, timeZone)
  if (thoughtForDay(today)?.slug === slug) return today
  // An hour ago it may still have been yesterday.
  const earlier = todayKey(new Date(now.getTime() - GRACE_MS), timeZone)
  if (thoughtForDay(earlier)?.slug === slug) return earlier
  return null
}

/** Thoughts whose day is over, newest first. Today's is left out: it's still being played. */
export function pastThoughts(today: string) {
  const index = Math.min(dayIndex(today), thoughts.length)
  return index > 0 ? thoughts.slice(0, index).reverse() : []
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
