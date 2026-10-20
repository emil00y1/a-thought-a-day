"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import type { EstimateActivity } from "@/content/types"
import { ActivityTitle, Feedback, type Result } from "./shared"

const THUMB = 28

function format(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 1 })
}

export function Estimate({ activity, onDone }: { activity: EstimateActivity; onDone: (r: Result) => void }) {
  const { min, max, step, answer, tolerance, unit } = activity
  const snap = (v: number) => Math.round(v / step) * step
  const [guess, setGuess] = useState(() => snap((min + max) / 2))
  const [locked, setLocked] = useState(false)
  const shown = useMotionValue(guess)
  const shownText = useTransform(shown, (v) => format(snap(v)))

  const pct = (v: number) => ((Math.min(max, Math.max(min, v)) - min) / (max - min)) * 100
  // Thumb centers travel from THUMB/2 to width - THUMB/2.
  const at = (v: number) => `calc(${THUMB / 2}px + (100% - ${THUMB}px) * ${pct(v) / 100})`
  const off = Math.abs(guess - answer)
  const correct = off <= tolerance

  function lockIn() {
    setLocked(true)
    shown.set(guess)
    animate(shown, answer, { duration: 1.4, ease: [0.16, 1, 0.3, 1] })
    onDone({ correct: correct ? 1 : 0, total: 1 })
  }

  return (
    <div>
      <ActivityTitle>{activity.question}</ActivityTitle>

      <div className="mt-8 text-center">
        <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {locked ? "The answer" : "Your guess"}
        </div>
        <motion.div
          key={locked ? "answer" : "guess"}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="mt-1 font-display text-5xl font-semibold tabular-nums"
        >
          {locked ? <motion.span>{shownText}</motion.span> : format(guess)}
          {unit && <span className="ml-2 text-xl font-normal text-muted-foreground">{unit}</span>}
        </motion.div>
        {locked && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-1 text-sm text-muted-foreground">
            You guessed {format(guess)}
          </motion.p>
        )}
      </div>

      <div className="relative mt-8 pt-6">
        {locked && (
          <>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-[calc(1.5rem+2px)] h-2 rounded-full bg-success/40"
              style={{
                left: at(answer - tolerance),
                width: `calc((100% - ${THUMB}px) * ${(pct(answer + tolerance) - pct(answer - tolerance)) / 100})`,
              }}
            />
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 14, delay: 1.2 }}
              className="absolute top-0 -translate-x-1/2"
              style={{ left: at(answer) }}
            >
              <div className="size-3 rotate-45 rounded-[3px] bg-success" />
            </motion.div>
          </>
        )}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={guess}
          disabled={locked}
          onChange={(e) => setGuess(Number(e.target.value))}
          aria-label="Your guess"
          className="h-3 w-full cursor-pointer appearance-none rounded-full disabled:cursor-default [&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-background [&::-moz-range-thumb]:bg-primary [&::-webkit-slider-thumb]:size-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform active:[&::-webkit-slider-thumb]:scale-125"
          style={{
            background: `linear-gradient(to right, var(--primary) ${pct(guess)}%, var(--muted) ${pct(guess)}%)`,
          }}
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground tabular-nums">
          <span>{format(min)}</span>
          <span>{format(max)}</span>
        </div>
      </div>

      {!locked && (
        <Button size="lg" onClick={lockIn} className="mt-6 w-full">
          Lock it in
        </Button>
      )}
      <Feedback
        show={locked}
        correct={correct}
        title={correct ? "Spot on!" : off <= tolerance * 3 ? "Close!" : "Way off!"}
      >
        {activity.explain}
      </Feedback>
    </div>
  )
}
