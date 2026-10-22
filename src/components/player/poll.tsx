"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { votePoll } from "@/app/actions"
import type { PollActivity } from "@/content/types"
import { cn } from "@/lib/utils"
import { ActivityTitle, Feedback, type Result } from "./shared"

function plural(n: number, word: string) {
  return `${n.toLocaleString("en-US")} ${word}${n === 1 ? "" : "s"}`
}

export function Poll({
  activity,
  onDone,
  slug,
  pollIndex,
  record,
}: {
  activity: PollActivity
  onDone: (r: Result) => void
  slug: string
  /** The poll's position in the thought's activities. */
  pollIndex: number
  /** False in preview: show results without voting. */
  record: boolean
}) {
  const [picked, setPicked] = useState<number | null>(null)
  const [counts, setCounts] = useState<number[] | null>(null)
  const answered = picked !== null
  const note = answered ? activity.options[picked].note : undefined

  const total = counts?.reduce((a, b) => a + b, 0) ?? 0
  const share = (n: number) => (total ? Math.round((n / total) * 100) : 0)
  const top = counts ? Math.max(...counts) : 0
  const verdict =
    !counts || picked === null || total === 0
      ? null
      : total === 1 && counts[picked] === 1
        ? "🌱 You're the first to answer"
        : counts[picked] !== top
          ? "🦄 You're in the minority"
          : counts.filter((c) => c === top).length > 1
            ? "⚖️ It's a tie at the top"
            : "🙌 You're with the majority"

  async function choose(i: number) {
    if (answered) return
    setPicked(i)
    onDone({ correct: 0, total: 0 })

    // One vote per poll per browser. Replays just show the results.
    const key = `jat:voted:${slug}:${pollIndex}`
    let alreadyVoted = false
    try {
      alreadyVoted = localStorage.getItem(key) !== null
    } catch {}
    const result = await votePoll({ slug, pollIndex, option: i, record: record && !alreadyVoted })
    if (!result) return
    if (record) {
      try {
        localStorage.setItem(key, "1")
      } catch {}
    }
    setCounts(result)
  }

  return (
    <div>
      <ActivityTitle>{activity.question}</ActivityTitle>
      <p className="mt-1 text-sm text-muted-foreground">No wrong answers. See how others voted.</p>
      <div className="mt-6 grid gap-2.5">
        {activity.options.map((option, i) => {
          const n = counts?.[i] ?? 0
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => choose(i)}
              disabled={answered}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={answered ? undefined : { y: -2 }}
              whileTap={answered ? undefined : { scale: 0.98 }}
              className={cn(
                "relative flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-2xl border-2 bg-card px-4 py-3.5 text-left text-[15px] font-medium transition-colors disabled:cursor-default",
                !answered && "hover:border-foreground/30",
                picked === i && "border-foreground"
              )}
            >
              {counts && total > 0 && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: `${share(n)}%` }}
                  transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 + i * 0.1 }}
                  className={cn("absolute inset-y-0 left-0", picked === i ? "bg-amber-300/40 dark:bg-amber-300/20" : "bg-muted")}
                />
              )}
              <span className="relative flex-1">{option.text}</span>
              {picked === i && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative rounded-full bg-foreground px-2 py-0.5 text-[11px] font-semibold text-background"
                >
                  You
                </motion.span>
              )}
              {counts && total > 0 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="relative flex w-14 flex-col items-end leading-tight"
                >
                  <span className="font-semibold tabular-nums">{share(n)}%</span>
                  <span className="text-[11px] font-normal text-muted-foreground tabular-nums">{plural(n, "vote")}</span>
                </motion.span>
              )}
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence>
        {verdict && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.5 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center"
          >
            <span className="rounded-full bg-foreground px-3 py-1 text-sm font-semibold text-background">{verdict}</span>
            <span className="text-xs text-muted-foreground">{plural(total, "answer")} so far</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Feedback show={answered} title={note ? "Your take" : "Interesting!"}>
        {[note, activity.explain].filter(Boolean).join(" ")}
      </Feedback>
    </div>
  )
}
