import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { Suspense } from "react"

import { CategoryBadge } from "@/components/category-badge"
import { RichText } from "@/components/rich-text"
import { Button } from "@/components/ui/button"
import { formatDay, scheduledDay, thoughtBySlug, thoughtForDay } from "@/content"
import { getToday } from "@/lib/data"

/** A thought only gets a public page once its day is over, so future ones stay a surprise. */
function pastThought(slug: string, today: string) {
  const thought = thoughtBySlug(slug)
  return thought && scheduledDay(slug) < today ? thought : null
}

export async function generateMetadata({ params }: PageProps<"/thoughts/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const thought = pastThought(slug, await getToday())
  if (!thought) return {}
  return {
    title: thought.title,
    description: thought.hook,
    alternates: { canonical: `/thoughts/${slug}` },
    openGraph: { siteName: "Just a thought", type: "article", title: thought.title, description: thought.hook },
  }
}

export default function ThoughtPage({ params }: PageProps<"/thoughts/[slug]">) {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-muted" />}>
      <ThoughtArticle params={params} />
    </Suspense>
  )
}

async function ThoughtArticle({ params }: { params: PageProps<"/thoughts/[slug]">["params"] }) {
  const { slug } = await params
  const today = await getToday()
  // Today's thought is played on the home page, not read here.
  if (thoughtForDay(today)?.slug === slug) redirect("/")
  const thought = pastThought(slug, today)
  if (!thought) notFound()

  return (
    <article>
      <Link href="/thoughts" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> Past thoughts
      </Link>

      <header className="mt-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <CategoryBadge category={thought.category} />
            <span className="text-xs font-medium text-muted-foreground">
              {formatDay(scheduledDay(slug))}
            </span>
          </div>
          <div className="mt-8 text-6xl">{thought.emoji}</div>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
            {thought.title}
          </h1>
          <p className="mt-3 text-lg text-pretty text-muted-foreground">{thought.hook}</p>
        </div>
      </header>

      <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-foreground/80">
        {thought.body.map((p, i) => (
          <p key={i}>
            <RichText text={p} />
          </p>
        ))}
      </div>

      <blockquote className="mt-10 border-l-4 border-foreground pl-5">
        <div className="mb-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">Remember this</div>
        <p className="font-display text-xl leading-snug font-medium">{thought.takeaway}</p>
      </blockquote>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold">Quick facts</h2>
        <dl className="mt-3 divide-y border-y">
          {thought.facts.map((f) => (
            <div key={f.q} className="py-3">
              <dt className="font-semibold">{f.q}</dt>
              <dd className="mt-0.5 text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {thought.sources && (
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span>Learn more:</span>
          {thought.sources.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">
              {s.label}
            </a>
          ))}
        </div>
      )}

      <div className="mt-14 text-center">
        <p className="font-display text-xl font-semibold">A new idea every day</p>
        <p className="mt-1 text-sm text-muted-foreground">Read it, play a few tiny games, and remember it. Takes about 3 minutes.</p>
        <Button asChild size="lg" className="mt-4">
          <Link href="/">Play today&apos;s thought</Link>
        </Button>
      </div>
    </article>
  )
}
