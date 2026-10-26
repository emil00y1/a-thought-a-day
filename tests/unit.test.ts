// Fast checks for content and day logic. Run with `npm test`.
import assert from "node:assert/strict"
import { describe, test } from "node:test"

import { addDays, LAUNCH_DATE, pastThoughts, saveableDay, thoughtForDay, thoughts, todayKey } from "@/content"
import { validateThoughts } from "@/content/validate"
import { streakFrom } from "@/lib/data"

describe("content", () => {
  test("every thought passes the content checks, in schedule order", () => {
    assert.doesNotThrow(() => validateThoughts(thoughts))
  })

  test("the right answer isn't usually the longest option", () => {
    const questions = thoughts.flatMap((t) => [
      ...t.activities.flatMap((a) => (a.type === "choice" ? [a] : [])),
      ...t.recall,
    ])
    const longest = questions.filter(({ options, answer }) => {
      const len = options.map((o) => o.length)
      const max = Math.max(...len)
      return len[answer] === max && len.filter((l) => l === max).length === 1
    })
    assert.ok(longest.length / questions.length <= 0.25, `${longest.length} of ${questions.length} are the longest`)
  })

  test("no em dashes in any thought", () => {
    assert.ok(!JSON.stringify(thoughts).includes("—"))
  })

  test("there are at least two weeks of thoughts left", (t) => {
    const lastDay = addDays(LAUNCH_DATE, thoughts.length - 1)
    const left = (Date.parse(lastDay) - Date.parse(todayKey())) / 86_400_000
    if (left < 14) t.diagnostic(`Only ${left} days of thoughts left (last: ${lastDay}). Time to write more.`)
    assert.ok(left >= 0, `Thoughts ran out on ${lastDay}`)
  })
})

describe("days", () => {
  // Tokyo has no daylight saving, so the clock math below never shifts. 15:30 UTC is 00:30 the next day there.
  const day1 = addDays(LAUNCH_DATE, 1)
  const day2 = addDays(LAUNCH_DATE, 2)
  const justAfterMidnight = new Date(`${day1}T15:30:00Z`)
  const graceOver = new Date(`${day1}T16:30:00Z`)

  test("today follows the player's time zone", () => {
    assert.equal(todayKey(justAfterMidnight, "UTC"), day1)
    assert.equal(todayKey(justAfterMidnight, "Asia/Tokyo"), day2)
    assert.equal(todayKey(justAfterMidnight, "America/New_York"), day1)
  })

  test("only today's thought can be saved, plus yesterday's for an hour after midnight", () => {
    const yesterday = thoughtForDay(day1)!.slug
    const today = thoughtForDay(day2)!.slug
    assert.equal(saveableDay(today, "Asia/Tokyo", justAfterMidnight), day2)
    assert.equal(saveableDay(yesterday, "Asia/Tokyo", justAfterMidnight), day1)
    assert.equal(saveableDay(yesterday, "Asia/Tokyo", graceOver), null)
    assert.equal(saveableDay(today, "America/New_York", justAfterMidnight), null)
  })

  test("past thoughts never include today's or future ones", () => {
    const today = addDays(LAUNCH_DATE, 3)
    const past = pastThoughts(today).map((t) => t.slug)
    assert.equal(past.length, 3)
    assert.ok(!past.includes(thoughtForDay(today)!.slug))
  })
})

describe("streaks", () => {
  const today = "2026-11-10"
  const cases: [string, string[], number][] = [
    ["nothing learned", [], 0],
    ["only today", ["2026-11-10"], 1],
    ["yesterday, today not played yet", ["2026-11-09"], 1],
    ["three in a row", ["2026-11-08", "2026-11-09", "2026-11-10"], 3],
    ["one missed day is forgiven", ["2026-11-07", "2026-11-08", "2026-11-10"], 3],
    ["two missed days end it", ["2026-11-06", "2026-11-07", "2026-11-10"], 1],
  ]
  for (const [name, days, want] of cases) test(name, () => assert.equal(streakFrom(days, today), want))
})
