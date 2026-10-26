"use client"

import { Check, X } from "lucide-react"
import { AnimatePresence, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import type { TrueFalseActivity } from "@/content/types"
import { cn } from "@/lib/utils"
import { ActivityTitle, Feedback, type Result } from "./shared"

const SWIPE = 90

function SwipeCard({
  text,
  answer,
  correct,
  onChoose,
}: {
  text: string
  answer: boolean | null
  correct: boolean
  onChoose: (value: boolean) => void
}) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-14, 14])
  const trueOpacity = useTransform(x, [15, SWIPE], [0, 1])
  const falseOpacity = useTransform(x, [-SWIPE, -15], [1, 0])
  const answered = answer !== null

  return (
    <motion.div
      drag={answered ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={(_, info) => {
        if (info.offset.x > SWIPE) onChoose(true)
        else if (info.offset.x < -SWIPE) onChoose(false)
      }}
      style={{ x, rotate }}
      initial={{ scale: 0.92, opacity: 0, y: 16 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ x: answer ? 360 : -360, opacity: 0, rotate: answer ? 18 : -18, transition: { duration: 0.35 } }}
      className={cn(
        "absolute inset-0 flex touch-pan-y items-center justify-center rounded-3xl border-2 bg-card p-6 text-center shadow-md select-none",
        !answered && "cursor-grab active:cursor-grabbing",
        answered && (correct ? "border-success" : "border-destructive")
      )}
    >
      <motion.span
        style={{ opacity: trueOpacity }}
        className="absolute top-4 left-4 -rotate-12 rounded-lg border-2 border-success px-2 py-0.5 text-sm font-bold text-success"
      >
        TRUE
      </motion.span>
      <motion.span
        style={{ opacity: falseOpacity }}
        className="absolute top-4 right-4 rotate-12 rounded-lg border-2 border-destructive px-2 py-0.5 text-sm font-bold text-destructive"
      >
        FALSE
      </motion.span>
      <p className="font-display text-xl leading-snug font-medium text-balance sm:text-2xl">{text}</p>
      {answered && (
        <motion.span
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
          className={cn(
            "absolute -bottom-4 grid size-9 place-items-center rounded-full text-white shadow-md",
            correct ? "bg-success" : "bg-destructive"
          )}
        >
          {correct ? <Check className="size-5" strokeWidth={3} /> : <X className="size-5" strokeWidth={3} />}
        </motion.span>
      )}
    </motion.div>
  )
}

export function TrueFalse({ activity, onDone }: { activity: TrueFalseActivity; onDone: (r: Result) => void }) {
  const { statements } = activity
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const statement = statements[index]
  const isLast = index === statements.length - 1

  function choose(value: boolean) {
    if (answer !== null) return
    const newScore = score + (value === statement.answer ? 1 : 0)
    setAnswer(value)
    setScore(newScore)
    if (isLast) onDone({ correct: newScore, total: statements.length })
  }

  // Keep keyboard focus moving forward instead of dropping to the page.
  const nextRef = useRef<HTMLButtonElement>(null)
  const falseRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (answer !== null) nextRef.current?.focus({ preventScroll: true })
    else if (index > 0) falseRef.current?.focus({ preventScroll: true })
  }, [answer, index])

  function next() {
    setIndex(index + 1)
    setAnswer(null)
  }

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <ActivityTitle>True or false?</ActivityTitle>
        <div className="flex gap-1.5">
          {statements.map((_, i) => (
            <span
              key={i}
              className={cn(
                "size-2 rounded-full transition-colors",
                i < index || (i === index && answer !== null) ? "bg-foreground" : "bg-muted"
              )}
            />
          ))}
        </div>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">Swipe right for true, left for false. Or tap below.</p>

      <div className="relative mt-6 h-52">
        {index < statements.length - 1 && (
          <div className="absolute inset-x-4 inset-y-0 translate-y-3 rounded-3xl border bg-card/60" />
        )}
        <AnimatePresence>
          <SwipeCard
            key={index}
            text={statement.text}
            answer={answer}
            correct={answer === statement.answer}
            onChoose={choose}
          />
        </AnimatePresence>
      </div>

      {answer === null && (
        <div className="mt-8 grid grid-cols-2 gap-3">
          <Button ref={falseRef} variant="outline" size="lg" onClick={() => choose(false)} className="hover:border-destructive hover:text-destructive">
            <X /> False
          </Button>
          <Button variant="outline" size="lg" onClick={() => choose(true)} className="hover:border-success hover:text-success">
            <Check /> True
          </Button>
        </div>
      )}
      <div className="mt-4">
        <Feedback show={answer !== null} correct={answer === statement.answer}>
          {statement.explain}
        </Feedback>
      </div>
      {answer !== null && (
        <div>
          {!isLast && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <Button ref={nextRef} variant="secondary" onClick={next} className="mt-4 w-full">
                Next statement
              </Button>
            </motion.div>
          )}
          {isLast && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {score} of {statements.length} right
            </p>
          )}
        </div>
      )}
    </div>
  )
}
