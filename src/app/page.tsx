import type { Metadata } from "next"
import { Clock } from "lucide-react"
import { Suspense } from "react"

import { Countdown } from "@/components/countdown"
import { PendingSync } from "@/components/pending-sync"
import { ThoughtPlayer } from "@/components/player/thought-player"
import { dayIndex, formatDay, thoughtForDay, thoughtNumber } from "@/content"
import { getStats, getToday, getUser, QUIZ_UNLOCK } from "@/lib/data"

export async function generateMetadata(): Promise<Metadata> {
  const thought = thoughtForDay(await getToday())
  return {
    title: { absolute: "Just a thought · Learn one new idea every day" },
    alternates: { canonical: "/" },
    // Shared links show today's thought instead of the generic card.
    ...(thought && {
      openGraph: {
        siteName: "Just a thought",
        type: "website",
        images: [{ url: `/thoughts/${thought.slug}/opengraph-image`, width: 1200, height: 630, alt: thought.title }],
      },
    }),
  }
}

export default function Home() {
  return (
    <Suspense fallback={<TodaySkeleton />}>
      <Today />
    </Suspense>
  )
}

async function Today() {
  const user = await getUser()
  const today = await getToday()
  const thought = thoughtForDay(today)

  if (!thought) return <NoThought beforeLaunch={dayIndex(today) < 0} />

  const stats = user ? await getStats(user.id, today) : null

  return (
    <>
      {stats && !stats.learnedToday && <PendingSync />}
      {/* Keyed so a tab left open past midnight starts fresh on the new thought */}
      <ThoughtPlayer
        key={thought.slug}
        thought={thought}
        number={thoughtNumber(thought.slug)}
        dateLabel={formatDay(today)}
        signedIn={user !== null}
        stats={stats}
        unlockAt={QUIZ_UNLOCK}
      />
    </>
  )
}

function NoThought({ beforeLaunch }: { beforeLaunch: boolean }) {
  return (
    <div className="rounded-3xl border bg-card p-10 text-center shadow-sm">
      <div className="text-6xl">{beforeLaunch ? "🌱" : "🌙"}</div>
      <h1 className="mt-5 font-display text-3xl font-semibold">
        {beforeLaunch ? "The first thought is on its way" : "No new thought today"}
      </h1>
      <p className="mt-2 text-muted-foreground">
        {beforeLaunch ? "Come back soon." : "The thought well is being refilled. Check back tomorrow."}
      </p>
      <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Clock className="size-4" /> Next check in <Countdown />
      </p>
    </div>
  )
}

function TodaySkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border bg-card p-6 sm:p-10">
      <div className="h-6 w-24 rounded-full bg-muted" />
      <div className="mt-8 size-20 rounded-2xl bg-muted" />
      <div className="mt-6 h-10 w-3/4 rounded-xl bg-muted" />
      <div className="mt-3 h-5 w-full rounded-lg bg-muted" />
      <div className="mt-10 h-12 w-32 rounded-full bg-muted" />
    </div>
  )
}
