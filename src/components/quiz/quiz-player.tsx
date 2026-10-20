"use client"

import confetti from "canvas-confetti"
import { ArrowRight, Check, RotateCcw } from "lucide-react"
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "motion/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { CategoryBadge } from "@/components/category-badge"
import { OptionButton } from "@/components/player/shared"
import { Button } from "@/components/ui/button"
import type { QuizQuestion } from "@/lib/quiz"

export function QuizPlayer({ questions }: { questions: QuizQuestion[] }) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const q = questions[index]
  const answered = picked !== null

  function choose(i: number) {
    if (answered) return
    setPicked(i)
    if (i === q.answer) setScore(score + 1)
  }

  function next() {
    if (index + 1 === questions.length) {
      setFinished(true)
    } else {
      setIndex(index + 1)
      setPicked(null)
    }
  }

  if (finished) return <QuizResult score={score} total={questions.length} />

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-foreground"
            initial={false}
            animate={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>
        <span className="flex items-center gap-1 text-sm font-semibold tabular-nums">
          <Check className="size-4 text-success" strokeWidth={3} />
          <motion.span key={score} initial={{ scale: 1.6 }} animate={{ scale: 1 }}>
            {score}
          </motion.span>
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Question {index + 1} of {questions.length}
          </div>
          <h2 className="mt-3 font-display text-2xl leading-tight font-semibold text-balance sm:text-[1.7rem]">
            {q.question}
          </h2>
          <div className="mt-6 grid gap-2.5">
            {q.options.map((option, i) => (
              <OptionButton
                key={i}
                index={i}
                disabled={answered}
                onClick={() => choose(i)}
                state={!answered ? "idle" : i === q.answer ? "correct" : i === picked ? "wrong" : "dim"}
              >
                {option}
              </OptionButton>
            ))}
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="overflow-hidden"
              >
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-muted p-4">
                  <span className="text-3xl">{q.thought.emoji}</span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold">{q.thought.title}</span>
                      <CategoryBadge category={q.thought.category} className="px-2 py-0.5 text-[10px]" />
                    </div>
                    <p className="text-sm text-muted-foreground">{q.thought.takeaway}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 flex justify-end">
        <Button size="lg" disabled={!answered} onClick={next} className="group">
          {index + 1 === questions.length ? "See results" : "Next"}
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}

function QuizResult({ score, total }: { score: number; total: number }) {
  const router = useRouter()
  const ratio = score / total
  const r = 52
  const circumference = 2 * Math.PI * r
  const count = useMotionValue(0)
  const shown = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, score, { duration: 1.2, ease: "easeOut" })
    if (ratio >= 0.7) void confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 }, disableForReducedMotion: true })
    return () => controls.stop()
  }, [count, score, ratio])

  const message =
    ratio === 1
      ? "Perfect recall. Your brain is a vault."
      : ratio >= 0.7
        ? "Great memory! Those thoughts are sticking."
        : ratio >= 0.4
          ? "Not bad. A few more rounds will lock them in."
          : "Forgetting is normal. Every quiz flattens the curve."

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-3xl border bg-card p-8 text-center shadow-sm sm:p-10"
    >
      <div className="relative mx-auto size-40">
        <svg viewBox="0 0 120 120" className="size-full -rotate-90">
          <circle cx="60" cy="60" r={r} className="fill-none stroke-muted" strokeWidth="10" />
          <motion.circle
            cx="60"
            cy="60"
            r={r}
            className="fill-none stroke-success"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference * (1 - ratio) }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="font-display text-4xl font-semibold tabular-nums">
            <motion.span>{shown}</motion.span>
            <span className="text-xl text-muted-foreground">/{total}</span>
          </div>
        </div>
      </div>
      <p className="mt-6 font-display text-2xl font-semibold text-balance">{message}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button size="lg" onClick={() => router.refresh()}>
          <RotateCcw /> New quiz
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/library">Library</Link>
        </Button>
      </div>
    </motion.div>
  )
}
