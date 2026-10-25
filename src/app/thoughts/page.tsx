import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

import { PageHeader } from "@/components/page-header"
import { formatDay, pastThoughts, scheduledDay, thoughtForDay } from "@/content"
import { categories } from "@/content/categories"
import type { Thought } from "@/content/types"
import { getToday } from "@/lib/data"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Past thoughts",
  description: "Every idea so far: science, history, philosophy and curious facts. Read any thought you missed.",
  alternates: { canonical: "/thoughts" },
}

export default function ThoughtsPage() {
  return (
    <>
      <PageHeader title="Past thoughts" subtitle="Missed one? Read it here. Only today's thought can be played." />
      <Suspense fallback={<ListSkeleton />}>
        <Archive />
      </Suspense>
    </>
  )
}

async function Archive() {
  const today = await getToday()
  const current = thoughtForDay(today)
  const past = pastThoughts(today)

  return (
    <div className="space-y-3">
      {current && (
        <Link
          href="/"
          className="group flex items-center gap-4 rounded-3xl border-2 border-foreground bg-card p-4 shadow-sm sm:p-5"
        >
          <Tile thought={current} />
          <span className="min-w-0 flex-1">
            <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Today</span>
            <span className="block truncate font-display text-lg font-semibold">{current.title}</span>
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold">
            Play <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      )}

      {past.length === 0 ? (
        <p className="py-10 text-center text-muted-foreground">Past thoughts show up here from tomorrow.</p>
      ) : (
        <ul className="space-y-3">
          {past.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/thoughts/${t.slug}`}
                className="flex items-center gap-4 rounded-3xl border bg-card p-4 shadow-sm transition-colors hover:bg-accent sm:p-5"
              >
                <Tile thought={t} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-lg font-semibold">{t.title}</span>
                  <span className="line-clamp-1 text-sm text-muted-foreground">{t.hook}</span>
                </span>
                <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">
                  {formatDay(scheduledDay(t.slug))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Tile({ thought }: { thought: Thought }) {
  return (
    <span
      className={cn(
        "grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-2xl",
        categories[thought.category].gradient
      )}
    >
      {thought.emoji}
    </span>
  )
}

function ListSkeleton() {
  return (
    <div className="space-y-3">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-20 animate-pulse rounded-3xl border bg-card" />
      ))}
    </div>
  )
}
