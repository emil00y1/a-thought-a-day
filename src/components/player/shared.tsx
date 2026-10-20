"use client"

import { Check, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

export type Result = { correct: number; total: number }

export type OptionState = "idle" | "selected" | "correct" | "wrong" | "dim"

const optionStyles: Record<OptionState, string> = {
  idle: "border-border bg-card hover:border-foreground/30 hover:bg-accent/50",
  selected: "border-foreground bg-accent",
  correct: "border-success bg-success/12 text-foreground",
  wrong: "border-destructive bg-destructive/10 text-foreground",
  dim: "border-border bg-card opacity-50",
}

/** A big tappable answer button that pops when right and shakes when wrong. */
export function OptionButton({
  state,
  index,
  onClick,
  disabled,
  children,
  marker,
}: {
  state: OptionState
  index: number
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
  marker?: React.ReactNode
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      initial={{ opacity: 0, y: 12 }}
      animate={
        state === "wrong"
          ? { opacity: 1, y: 0, x: [0, -8, 8, -6, 6, -3, 0] }
          : state === "correct"
            ? { opacity: 1, y: 0, scale: [1, 1.03, 1] }
            : { opacity: 1, y: 0 }
      }
      transition={{ delay: state === "idle" ? index * 0.06 : 0, duration: state === "wrong" ? 0.45 : 0.3 }}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={cn(
        "flex w-full cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left text-[15px] font-medium transition-colors disabled:cursor-default",
        optionStyles[state]
      )}
    >
      <span
        className={cn(
          "grid size-7 shrink-0 place-items-center rounded-full border text-xs font-semibold transition-colors",
          state === "correct" && "border-success bg-success text-white",
          state === "wrong" && "border-destructive bg-destructive text-white",
          (state === "idle" || state === "dim" || state === "selected") && "border-border text-muted-foreground"
        )}
      >
        {state === "correct" ? (
          <Check className="size-4" strokeWidth={3} />
        ) : state === "wrong" ? (
          <X className="size-4" strokeWidth={3} />
        ) : (
          (marker ?? String.fromCharCode(65 + index))
        )}
      </span>
      <span className="flex-1">{children}</span>
    </motion.button>
  )
}

/** Slides open under an answer to explain it. */
export function Feedback({
  show,
  correct,
  title,
  children,
}: {
  show: boolean
  correct?: boolean
  title?: string
  children: React.ReactNode
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="overflow-hidden"
        >
          <div
            className={cn(
              "mt-4 rounded-2xl px-4 py-3 text-sm leading-relaxed",
              correct === undefined && "bg-muted",
              correct === true && "bg-success/12",
              correct === false && "bg-destructive/10"
            )}
          >
            <p className="mb-0.5 font-semibold">
              {title ?? (correct === undefined ? "Good to know" : correct ? "Correct!" : "Not quite.")}
            </p>
            <p className="text-muted-foreground">{children}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ActivityTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-2xl leading-tight font-semibold text-balance sm:text-[1.7rem]">{children}</h3>
}
