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
    <div>
      {current && (
        <Link href="/" className="group flex items-center gap-4 border-t py-4">
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
        <ul className="divide-y border-y">
          {past.map((t) => (
            <li key={t.slug}>
              <Link href={`/thoughts/${t.slug}`} className="group flex items-center gap-4 py-4">
                <Tile thought={t} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-lg font-semibold group-hover:underline group-hover:underline-offset-4">
                    {t.title}
                  </span>
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
      aria-hidden
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
    <div className="space-y-4">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-16 animate-pulse rounded-xl bg-muted" />
      ))}
    </div>
  )
}
