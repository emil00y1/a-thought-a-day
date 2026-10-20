"use client"

import { Check } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

import type { MatchActivity } from "@/content/types"
import { cn, shuffle } from "@/lib/utils"
import { ActivityTitle, Feedback, type Result } from "./shared"

type Side = "left" | "right"

export function Match({ activity, onDone }: { activity: MatchActivity; onDone: (r: Result) => void }) {
  const { pairs } = activity
  // Right column shows the same pair indexes in a scrambled order.
  const [rightOrder] = useState(() => {
    const order = shuffle(
      pairs.map((_, i) => i),
      activity.prompt
    )
    return order.every((v, i) => v === i) ? [...order.slice(1), order[0]] : order
  })
  const [selected, setSelected] = useState<{ side: Side; index: number } | null>(null)
  const [matched, setMatched] = useState<number[]>([])
  const [wrong, setWrong] = useState<{ side: Side; index: number }[]>([])
  const [mistakes, setMistakes] = useState(0)
  const done = matched.length === pairs.length

  function pick(side: Side, index: number) {
    if (matched.includes(index) || wrong.length) return
    if (!selected || selected.side === side) {
      setSelected(selected?.side === side && selected.index === index ? null : { side, index })
      return
    }
    setSelected(null)
    if (selected.index === index) {
      const next = [...matched, index]
      setMatched(next)
      if (next.length === pairs.length) {
        onDone({ correct: Math.max(0, pairs.length - mistakes), total: pairs.length })
      }
    } else {
      setMistakes(mistakes + 1)
      setWrong([selected, { side, index }])
      setTimeout(() => setWrong([]), 550)
    }
  }

  function tile(side: Side, index: number, text: string, order: number) {
    const isMatched = matched.includes(index)
    const isSelected = selected?.side === side && selected.index === index
    const flagged = wrong.some((w) => w.side === side && w.index === index)
    return (
      <motion.button
        key={`${side}-${index}`}
        type="button"
        onClick={() => pick(side, index)}
        disabled={isMatched}
        initial={{ opacity: 0, y: 10 }}
        animate={
          flagged
            ? { opacity: 1, y: 0, x: [0, -6, 6, -4, 4, 0] }
            : isMatched
              ? { opacity: 1, y: 0, scale: [1, 1.06, 1] }
              : { opacity: 1, y: 0, scale: isSelected ? 1.03 : 1 }
        }
        transition={{ delay: matched.length || wrong.length ? 0 : order * 0.05, duration: 0.35 }}
        whileTap={isMatched ? undefined : { scale: 0.96 }}
        className={cn(
          "relative flex min-h-14 cursor-pointer items-center justify-center rounded-2xl border-2 bg-card px-3 py-2.5 text-center text-sm leading-snug font-medium transition-colors disabled:cursor-default",
          !isMatched && !isSelected && !flagged && "hover:border-foreground/30",
          isSelected && "border-foreground bg-accent",
          flagged && "border-destructive bg-destructive/10",
          isMatched && "border-success/60 bg-success/10 text-muted-foreground"
        )}
      >
        {text}
        {isMatched && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            className="absolute -top-2 -right-2 grid size-5 place-items-center rounded-full bg-success text-white"
          >
            <Check className="size-3" strokeWidth={3} />
          </motion.span>
        )}
      </motion.button>
    )
  }

  return (
    <div>
      <ActivityTitle>{activity.prompt}</ActivityTitle>
      <p className="mt-1 text-sm text-muted-foreground">Tap one on each side to pair them up.</p>
      <div className="mt-6 grid grid-cols-2 gap-2.5">
        <div className="grid gap-2.5">{pairs.map(([left], i) => tile("left", i, left, i))}</div>
        <div className="grid gap-2.5">{rightOrder.map((i, n) => tile("right", i, pairs[i][1], n))}</div>
      </div>
      <Feedback
        show={done}
        correct={mistakes === 0}
        title={mistakes === 0 ? "Flawless!" : `All matched, with ${mistakes} slip${mistakes === 1 ? "" : "s"}`}
      >
        {mistakes === 0 ? "Every pair on the first try." : "Each wrong guess costs a point, but you got there."}
      </Feedback>
    </div>
  )
}
