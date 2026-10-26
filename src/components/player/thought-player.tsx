"use client"

import {
  ArrowRight,
  ArrowUpDown,
  BookOpen,
  Check,
  CircleHelp,
  Clock,
  Gauge,
  Link2,
  RotateCcw,
  Share2,
  Sparkles,
  ThumbsUp,
  Vote,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react"
import { toast } from "sonner"

import { completeThought } from "@/app/actions"
import { HOME_EVENT } from "@/components/nav-links"
import { CategoryBadge, CategoryGlow } from "@/components/category-badge"
import { Countdown } from "@/components/countdown"
import { RichText } from "@/components/rich-text"
import { StatsStrip } from "@/components/stats-strip"
import { Button } from "@/components/ui/button"
import type { Activity, Thought } from "@/content/types"
import type { Stats } from "@/lib/data"
import { parsePending, pendingSnapshot, savePending } from "@/lib/pending"
import type { Result } from "./shared"

// The games load when a player gets to them, so the first screen stays light.
const loadGames = {
  facts: () => import("./fact-cards").then((m) => m.FactCards),
  choice: () => import("./choice").then((m) => m.Choice),
  truefalse: () => import("./true-false").then((m) => m.TrueFalse),
  order: () => import("./order").then((m) => m.Order),
  match: () => import("./match").then((m) => m.Match),
  estimate: () => import("./estimate").then((m) => m.Estimate),
  poll: () => import("./poll").then((m) => m.Poll),
}
const FactCards = dynamic(loadGames.facts)
const Choice = dynamic(loadGames.choice)
const TrueFalse = dynamic(loadGames.truefalse)
const Order = dynamic(loadGames.order)
const Match = dynamic(loadGames.match)
const Estimate = dynamic(loadGames.estimate)
const Poll = dynamic(loadGames.poll)

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
  dateLabel: string
  signedIn: boolean
  /** Null for guests. */
  stats: Stats | null
  unlockAt: number
  /** Dev preview: never saves progress. */
  preview?: boolean
}

export function ThoughtPlayer({ thought, dateLabel, signedIn, stats: serverStats, unlockAt, preview }: Props) {
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

  // Fetch the games in the background once the page is idle, so Start still feels instant.
  useEffect(() => {
    const warm = () => {
      for (const load of Object.values(loadGames)) void load()
    }
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(warm, { timeout: 4000 })
      return () => cancelIdleCallback(id)
    }
    const id = setTimeout(warm, 2000)
    return () => clearTimeout(id)
  }, [])

  // The logo or Today link, clicked mid-game, takes you back to the first screen.
  useEffect(() => {
    function backToStart() {
      setRound((r) => r + 1)
      setReady({})
      setResults({})
      setIndex(0)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    window.addEventListener(HOME_EVENT, backToStart)
    return () => window.removeEventListener(HOME_EVENT, backToStart)
  }, [])

  function restart() {
    setRound((r) => r + 1)
    setReady({})
    setResults({})
    go(1)
  }

  async function finish() {
    if (preview) return
    if (!signedIn) {
      // The first play counts, like for signed-in players; replays don't overwrite it.
      if (parsePending(pendingSnapshot())?.slug !== thought.slug) savePending({ slug: thought.slug, ...score })
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
          data-step={index}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="outline-none"
        >
          {step.kind === "intro" && (
            <Intro
              thought={thought}
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
  dateLabel,
  learned,
  result,
  onStart,
}: {
  thought: Thought
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
            {dateLabel}
          </span>
        </div>

        <motion.div
          className="mt-8 inline-block text-7xl"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
        >
          <span className="inline-block animate-[bob_3s_ease-in-out_0.6s_infinite]">{thought.emoji}</span>
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

        {learned && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 flex items-center gap-1.5 text-sm font-medium text-success"
          >
            <Check className="size-4" strokeWidth={3} />
            Learned today
            {result && result.total > 0 && ` · ${result.correct}/${result.total} right`}
          </motion.p>
        )}

        {learned ? (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Button size="lg" onClick={() => shareThought(thought, result)} className="mt-8 h-12 w-full rounded-2xl text-base">
              <Share2 /> Share today&apos;s thought
            </Button>
            <button
              type="button"
              onClick={onStart}
              className="mt-3 flex w-full cursor-pointer items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="size-3.5" /> Play again
            </button>
          </motion.div>
        ) : (
        <motion.button
          type="button"
          onClick={onStart}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-8 flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-cta py-3.5 pr-3.5 pl-6 text-left text-cta-foreground transition-[filter] hover:brightness-105"
        >
          <span>
            <span className="block font-display text-xl leading-tight font-semibold">
              Start today&apos;s thought
            </span>
            <span className="mt-0.5 flex items-center gap-1.5 text-sm">
              <Clock className="size-3.5" /> ~3 min · {thought.activities.length} mini games
            </span>
          </span>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
            {/* A small nudge every few seconds, inviting a tap. */}
            <span className="animate-[nudge_4.4s_ease-in-out_1.5s_infinite]">
              <ArrowRight className="size-5" />
            </span>
          </span>
        </motion.button>
        )}
      </div>
    </div>
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
  const lowScore = score.total > 0 && score.correct / score.total < 0.4

  useEffect(() => {
    if (lowScore) return
    void import("canvas-confetti").then(({ default: confetti }) => {
      const opts = { particleCount: 70, spread: 70, startVelocity: 45, disableForReducedMotion: true }
      void confetti({ ...opts, angle: 60, origin: { x: 0, y: 0.7 } })
      void confetti({ ...opts, angle: 120, origin: { x: 1, y: 0.7 } })
    })
  }, [lowScore])

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
            {lowScore ? "A tricky one!" : signedIn || preview ? "Thought learned!" : "All done!"}
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

async function shareThought(thought: Thought, score: Result | null) {
  const result = score && score.correct > 0 ? ` I got ${score.correct}/${score.total}.` : ""
  const text = `${thought.emoji} ${thought.title}: ${thought.hook}${result}`
  // The thought's own page: today it opens the game, later it's the readable archive page.
  const url = `${window.location.origin}/thoughts/${thought.slug}`
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
