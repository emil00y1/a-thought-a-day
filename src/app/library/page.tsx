import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

import { LibraryList } from "@/components/library-list"
import { PageHeader } from "@/components/page-header"
import { SignInPrompt } from "@/components/sign-in-prompt"
import { StatsStrip } from "@/components/stats-strip"
import { Button } from "@/components/ui/button"
import { formatDay } from "@/content"
import { getLearned, getToday, getUser, QUIZ_UNLOCK, streakFrom } from "@/lib/data"

export const metadata: Metadata = { title: "Your library", robots: { index: false } }

export default function LibraryPage() {
  return (
    <>
      <PageHeader title="Your library" subtitle="Every thought you've learned, in one place." />
      <Suspense fallback={<ListSkeleton />}>
        <Library />
      </Suspense>
    </>
  )
}

async function Library() {
  const user = await getUser()
  if (!user) return <SignInPrompt>Sign in to collect every thought you learn in your own library.</SignInPrompt>

  const [learned, today] = await Promise.all([getLearned(user.id), getToday()])
  if (learned.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-5xl">📚</div>
        <p className="mt-4 font-display text-2xl font-semibold">Nothing here yet</p>
        <p className="mt-1 text-muted-foreground">Learn today&apos;s thought to start your collection.</p>
        <Button asChild size="lg" className="mt-5">
          <Link href="/">Today&apos;s thought</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <StatsStrip
        learned={learned.length}
        streak={streakFrom(
          learned.map((l) => l.day),
          today
        )}
        unlockAt={QUIZ_UNLOCK}
      />
      <LibraryList
        items={learned.map(({ thought, day, correct, total }) => ({
          slug: thought.slug,
          title: thought.title,
          emoji: thought.emoji,
          category: thought.category,
          takeaway: thought.takeaway,
          body: thought.body,
          facts: thought.facts,
          day: formatDay(day),
          score: total > 0 ? `${correct}/${total}` : null,
        }))}
      />
    </div>
  )
}

function ListSkeleton() {
  return (
    <div className="space-y-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-16 animate-pulse rounded-xl bg-muted" />
      ))}
    </div>
  )
}
