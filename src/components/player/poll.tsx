"use client"

import { motion } from "motion/react"
import { useState } from "react"

import type { PollActivity } from "@/content/types"
import { cn } from "@/lib/utils"
import { ActivityTitle, Feedback, type Result } from "./shared"

export function Poll({ activity, onDone }: { activity: PollActivity; onDone: (r: Result) => void }) {
  const [picked, setPicked] = useState<number | null>(null)
  const answered = picked !== null
  const note = answered ? activity.options[picked].note : undefined

  function choose(i: number) {
    if (answered) return
    setPicked(i)
    onDone({ correct: 0, total: 0 })
  }

  return (
    <div>
      <ActivityTitle>{activity.question}</ActivityTitle>
      <p className="mt-1 text-sm text-muted-foreground">No wrong answers here.</p>
      <div className="mt-6 grid gap-2.5">
        {activity.options.map((option, i) => (
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
            {answered && option.pct !== undefined && (
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: `${option.pct}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 + i * 0.1 }}
                className={cn("absolute inset-y-0 left-0", picked === i ? "bg-primary/15" : "bg-muted")}
              />
            )}
            <span className="relative flex-1">{option.text}</span>
            {answered && picked === i && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="relative rounded-full bg-foreground px-2 py-0.5 text-[11px] font-semibold text-background"
              >
                You
              </motion.span>
            )}
            {answered && option.pct !== undefined && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="relative w-10 text-right font-semibold tabular-nums"
              >
                {option.pct}%
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>
      <Feedback show={answered} title={note ? "Your take" : "Interesting!"}>
        {[note, activity.explain].filter(Boolean).join(" ")}
      </Feedback>
    </div>
  )
}
