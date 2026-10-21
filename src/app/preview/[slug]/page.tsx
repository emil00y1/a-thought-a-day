import { notFound } from "next/navigation"
import { Suspense } from "react"

import { ThoughtPlayer } from "@/components/player/thought-player"
import { formatDay, scheduledDay, thoughtBySlug, thoughtNumber } from "@/content"
import { QUIZ_UNLOCK } from "@/lib/data"

// Dev-only: play any thought without saving progress.
export default function PreviewPage({ params }: PageProps<"/preview/[slug]">) {
  if (process.env.NODE_ENV !== "development") notFound()

  return (
    <Suspense>
      <Preview params={params} />
    </Suspense>
  )
}

async function Preview({ params }: { params: PageProps<"/preview/[slug]">["params"] }) {
  const { slug } = await params
  const thought = thoughtBySlug(slug)
  if (!thought) notFound()

  return (
    <ThoughtPlayer
      key={slug}
      thought={thought}
      number={thoughtNumber(slug)}
      dateLabel={formatDay(scheduledDay(slug))}
      signedIn={false}
      stats={null}
      unlockAt={QUIZ_UNLOCK}
      preview
    />
  )
}
