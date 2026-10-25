"use client"

import confetti from "canvas-confetti"
import {
  ArrowRight,
  ArrowUpDown,
  BookOpen,
  Check,
  CircleHelp,
  Clock,
  Gauge,
  Layers,
  Link2,
  RotateCcw,
  Share2,
  Sparkles,
  ThumbsUp,
  Vote,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react"
import { toast } from "sonner"

import { completeThought } from "@/app/actions"
import { CategoryBadge, CategoryGlow } from "@/components/category-badge"
import { Countdown } from "@/components/countdown"
import { RichText } from "@/components/rich-text"
import { StatsStrip } from "@/components/stats-strip"
import { Button } from "@/components/ui/button"
import type { Activity, Thought } from "@/content/types"
import type { Stats } from "@/lib/data"
import { parsePending, pendingSnapshot, savePending } from "@/lib/pending"
import { cn } from "@/lib/utils"
import { Choice } from "./choice"
import { Estimate } from "./estimate"
import { FactCards } from "./fact-cards"
import { Match } from "./match"
import { Order } from "./order"
import { Poll } from "./poll"
import type { Result } from "./shared"
import { TrueFalse } from "./true-false"

type Step = { kind: "intro" } | { kind: "read" } | { kind: "facts" } | { kind: "activity"; activity: Activity } | { kind: "done" }

const activityMeta: Record<Activity["type"], { label: string; icon: typeof Clock }> = {
  choice: { label: "Quick quiz", icon: CircleHelp },
  truefalse: { label: "Swipe it", icon: ThumbsUp },
  order: { label: "Put in order", icon: ArrowUpDown },
  match: { label: "Match them", icon: Link2 },
  estimate: { label: "Guess the number", icon: Gauge },
  poll: { label: "What do you think?", icon: Vote },
}

type Props = {
  thought: Thought
  number: number
  dateLabel: string
  signedIn: boolean
  /** Null for guests. */
  stats: Stats | null
  unlockAt: number
  /** Dev preview: never saves progress. */
  preview?: boolean
}

export function ThoughtPlayer({ thought, number, dateLabel, signedIn, stats: serverStats, unlockAt, preview }: Props) {
  const steps: Step[] = [
    { kind: "intro" },
    { kind: "read" },
    { kind: "facts" },
    ...thought.activities.map((activity) => ({ kind: "activity" as const, activity })),
    { kind: "done" },
  ]
  const [round, setRound] = useState(0)
  const [index, setIndex] = useState(0)
  const [ready, setReady] = useState<Record<number, boolean>>({})
  const [results, setResults] = useState<Record<number, Result>>({})
  const [savedStats, setSavedStats] = useState<Stats | null>(null)
  const stats = savedStats ?? serverStats
  // A guest's result lives in this browser until they sign in. The server can't see it, so it's null there.
  const pending = parsePending(useSyncExternalStore(subscribeNever, pendingSnapshot, () => null))
  const guestResult = !signedIn && !preview && pending?.slug === thought.slug ? pending : null
  const moved = useRef(false)

  // Move focus to each new step, so keyboard and screen reader users start at the top of it.
  const focusStep = useCallback((el: HTMLDivElement | null) => {
    if (el && moved.current) el.focus({ preventScroll: true })
  }, [])

  const step = steps[index]
  const isReady = step.kind === "read" || ready[index]
  const isLastActivity = index === steps.length - 2
  const score = Object.values(results).reduce((sum, r) => ({ correct: sum.correct + r.correct, total: sum.total + r.total }), {
    correct: 0,
    total: 0,
  })

  function markReady(i: number, result?: Result) {
    setReady((r) => ({ ...r, [i]: true }))
    if (result) setResults((r) => ({ ...r, [i]: result }))
  }

  function go(to: number) {
    moved.current = true
    setIndex(to)
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (steps[to].kind === "done") void finish()
  }

  function restart() {
    setRound((r) => r + 1)
    setReady({})
    setResults({})
    go(1)
  }

  async function finish() {
    if (preview) return
    if (!signedIn) {
      savePending({ slug: thought.slug, ...score })
      return
    }
    const res = await completeThought({ slug: thought.slug, ...score })
    if (res.ok) setSavedStats(res.stats)
    else toast.error(res.error)
  }

  return (
    <div>
      {index > 0 && step.kind !== "done" && <Progress total={steps.length - 2} current={index} />}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${round}-${index}`}
          ref={focusStep}
          tabIndex={-1}
          role="group"
          aria-label={stepLabel(step, thought)}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="outline-none"
        >
          {step.kind === "intro" && (
            <Intro
              thought={thought}
              number={number}
              dateLabel={dateLabel}
              learned={stats?.learnedToday ?? guestResult !== null}
              result={guestResult}
              onStart={() => go(1)}
            />
          )}

          {step.kind === "read" && (
            <StepCard thought={thought} label="The idea" icon={BookOpen}>
              <h2 className="font-display text-3xl leading-tight font-semibold text-balance">{thought.title}</h2>
              <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-foreground/80">
                {thought.body.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.25 }}
                  >
                    <RichText text={p} />
                  </motion.p>
                ))}
              </div>
            </StepCard>
          )}

          {step.kind === "facts" && (
            <StepCard thought={thought} label="Quick facts" icon={Sparkles}>
              <h2 className="mb-5 font-display text-3xl leading-tight font-semibold">Tap to flip</h2>
              <FactCards facts={thought.facts} onAllFlipped={() => markReady(index)} />
            </StepCard>
          )}

          {step.kind === "activity" && (
            <StepCard thought={thought} label={activityMeta[step.activity.type].label} icon={activityMeta[step.activity.type].icon}>
              <ActivityView
                activity={step.activity}
                onDone={(r) => markReady(index, r)}
                slug={thought.slug}
                activityIndex={thought.activities.indexOf(step.activity)}
                preview={preview}
              />
            </StepCard>
          )}

          {step.kind === "done" && (
            <Done
              thought={thought}
              score={score}
              stats={stats}
              signedIn={signedIn}
              preview={preview}
              unlockAt={unlockAt}
              onReplay={restart}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Games show their own next step, so Continue only appears once they're done. */}
      {(step.kind === "read" || step.kind === "facts" || (step.kind === "activity" && isReady)) && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {isReady ? "" : `Flip all ${thought.facts.length} cards to continue`}
          </p>
          <motion.div
            key={isReady ? "ready" : "waiting"}
            initial={isReady ? { scale: 0.8 } : false}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <Button size="lg" disabled={!isReady} onClick={() => go(index + 1)} className="group">
              {isLastActivity ? "Finish" : "Continue"}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      )}

      {step.kind === "intro" && (
        <IntroFooter signedIn={signedIn} stats={stats} unlockAt={unlockAt} preview={preview} />
      )}
    </div>
  )
}

function ActivityView({
  activity,
  onDone,
  slug,
  activityIndex,
  preview,
}: {
  activity: Activity
  onDone: (r: Result) => void
  slug: string
  activityIndex: number
  preview?: boolean
}) {
  switch (activity.type) {
    case "choice":
      return <Choice activity={activity} onDone={onDone} />
    case "truefalse":
      return <TrueFalse activity={activity} onDone={onDone} />
    case "order":
      return <Order activity={activity} onDone={onDone} />
    case "match":
      return <Match activity={activity} onDone={onDone} />
    case "estimate":
      return <Estimate activity={activity} onDone={onDone} />
    case "poll":
      return <Poll activity={activity} onDone={onDone} slug={slug} pollIndex={activityIndex} record={!preview} />
  }
}

const subscribeNever = () => () => {}

function stepLabel(step: Step, thought: Thought) {
  switch (step.kind) {
    case "intro":
      return thought.title
    case "read":
      return "The idea"
    case "facts":
      return "Quick facts"
    case "activity":
      return activityMeta[step.activity.type].label
    case "done":
      return "Done"
  }
}

function Progress({ total, current }: { total: number; current: number }) {
  return (
    <div className="mb-4 flex gap-1.5" aria-label={`Step ${current} of ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-foreground"
            initial={false}
            animate={{ width: i < current ? "100%" : "0%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>
      ))}
    </div>
  )
}

function StepCard({
  thought,
  label,
  icon: Icon,
  children,
}: {
  thought: Thought
  label: string
  icon: typeof Clock
  children: React.ReactNode
}) {
  return (
    <div className="relative overflow-clip rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
      <CategoryGlow category={thought.category} className="opacity-15 dark:opacity-15" />
      <div className="relative">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          <Icon className="size-4" />
          {label}
          <span className="ml-auto text-lg">{thought.emoji}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

function Intro({
  thought,
  number,
  dateLabel,
  learned,
  result,
  onStart,
}: {
  thought: Thought
  number: number
  dateLabel: string
  learned: boolean
  /** A guest's score from earlier today. */
  result: Result | null
  onStart: () => void
}) {
  return (
    <div className="relative overflow-clip rounded-3xl border bg-card p-6 shadow-sm sm:p-10">
      <CategoryGlow category={thought.category} />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CategoryBadge category={thought.category} />
          <span className="text-xs font-medium text-muted-foreground">
            Thought #{number} · {dateLabel}
          </span>
        </div>

        <motion.div
          className="mt-8 inline-block text-7xl"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0, y: [0, -8, 0] }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 12 },
            rotate: { type: "spring", stiffness: 300, damping: 12 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
          }}
        >
          {thought.emoji}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl"
        >
          {thought.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-lg text-pretty text-muted-foreground"
        >
          {thought.hook}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground"
        >
          <Chip icon={Clock}>~3 min</Chip>
          <Chip icon={Layers}>{thought.activities.length} mini games</Chip>
          {learned && (
            <Chip icon={Check} className="bg-success/15 text-foreground">
              Learned today
              {result && result.total > 0 && ` · ${result.correct}/${result.total} right`}
            </Chip>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" onClick={onStart} className="group mt-8 h-12 px-7 text-base">
            {learned ? "Play again" : "Start"}
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

function Chip({ icon: Icon, className, children }: { icon: typeof Clock; className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5", className)}>
      <Icon className="size-3.5" />
      {children}
    </span>
  )
}

function IntroFooter({
  signedIn,
  stats,
  unlockAt,
  preview,
}: {
  signedIn: boolean
  stats: Stats | null
  unlockAt: number
  preview?: boolean
}) {
  return (
    <div className="mt-6 space-y-4">
      {preview && (
        <p className="rounded-2xl border border-dashed px-4 py-3 text-center text-sm text-muted-foreground">
          Preview mode. Progress is not saved.
        </p>
      )}
      {signedIn && stats ? (
        <StatsStrip learned={stats.learned} streak={stats.streak} unlockAt={unlockAt} />
      ) : (
        !preview && (
          <p className="text-center text-sm text-muted-foreground">
            <Link href="/sign-in" className="font-medium text-foreground underline underline-offset-4">
              Sign in
            </Link>{" "}
            to keep a streak and unlock memory quizzes after {unlockAt} thoughts.
          </p>
        )
      )}
      <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Clock className="size-4" /> Next thought in <Countdown />
      </p>
    </div>
  )
}

function Done({
  thought,
  score,
  stats,
  signedIn,
  preview,
  unlockAt,
  onReplay,
}: {
  thought: Thought
  score: Result
  stats: Stats | null
  signedIn: boolean
  preview?: boolean
  unlockAt: number
  onReplay: () => void
}) {
  useEffect(() => {
    const opts = { particleCount: 70, spread: 70, startVelocity: 45, disableForReducedMotion: true }
    void confetti({ ...opts, angle: 60, origin: { x: 0, y: 0.7 } })
    void confetti({ ...opts, angle: 120, origin: { x: 1, y: 0.7 } })
  }, [])

  return (
    <div className="space-y-5">
      <div className="relative overflow-clip rounded-3xl border bg-card p-6 text-center shadow-sm sm:p-10">
        <CategoryGlow category={thought.category} />
        <div className="relative">
          <motion.div
            initial={{ scale: 0, rotate: -40 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 12, delay: 0.1 }}
            className="relative mx-auto inline-block text-7xl"
          >
            {thought.emoji}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 14, delay: 0.5 }}
              className="absolute -right-3 -bottom-1 grid size-9 place-items-center rounded-full bg-success text-white shadow-lg ring-4 ring-card"
            >
              <Check className="size-5" strokeWidth={3} />
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-display text-4xl font-semibold tracking-tight"
          >
            {signedIn || preview ? "Thought learned!" : "All done!"}
          </motion.h2>
          {score.total > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-2 text-muted-foreground"
            >
              You got <span className="font-semibold text-foreground">{score.correct}</span> of {score.total} right
            </motion.p>
          )}

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-8 max-w-md rounded-2xl bg-muted px-5 py-4 text-left"
          >
            <div className="mb-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">Remember this</div>
            <p className="font-display text-xl leading-snug font-medium">{thought.takeaway}</p>
          </motion.blockquote>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <Button variant="outline" size="lg" onClick={() => shareThought(thought, score)} className="mt-6">
              <Share2 /> Share
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="space-y-5">
        {preview ? (
          <p className="text-center text-sm text-muted-foreground">Preview mode. Nothing was saved.</p>
        ) : signedIn ? (
          stats && <StatsStrip learned={stats.learned} streak={stats.streak} unlockAt={unlockAt} />
        ) : (
          <div className="border-t pt-6 text-center">
            <p className="font-display text-xl font-semibold">Don&apos;t let it fade</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Create a free account to save it, keep a streak and unlock memory quizzes.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/sign-in">Save my progress</Link>
            </Button>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Clock className="size-4" /> Next thought in <Countdown />
          </span>
          <Button variant="ghost" size="sm" onClick={onReplay}>
            <RotateCcw /> Play again
          </Button>
        </div>

        {thought.sources && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>Learn more:</span>
            {thought.sources.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">
                {s.label}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

async function shareThought(thought: Thought, score: Result) {
  const result = score.total > 0 ? ` and got ${score.correct}/${score.total}` : ""
  const text = `${thought.emoji} I learned about ${thought.title} on Just a thought${result}.`
  const url = window.location.origin
  if (navigator.share) {
    // Closing the share sheet throws, which is fine.
    await navigator.share({ text, url }).catch(() => {})
    return
  }
  try {
    await navigator.clipboard.writeText(`${text} ${url}`)
    toast.success("Copied. Paste it anywhere.")
  } catch {
    toast.error("Couldn't copy. Try again.")
  }
}
