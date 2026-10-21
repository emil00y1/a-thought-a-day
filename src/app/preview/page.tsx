import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { CategoryBadge } from "@/components/category-badge"
import { PageHeader } from "@/components/page-header"
import { formatDay, scheduledDay, thoughts } from "@/content"

export const metadata: Metadata = { title: "Preview" }

// Dev-only: browse every thought, including future ones.
export default function PreviewIndex() {
  if (process.env.NODE_ENV !== "development") notFound()

  return (
    <>
      <PageHeader title="Preview" subtitle="Dev only. Every scheduled thought, in order." />
      <ol className="space-y-2">
        {thoughts.map((t, i) => (
          <li key={t.slug}>
            <Link
              href={`/preview/${t.slug}`}
              className="flex items-center gap-3 rounded-2xl border bg-card p-3 transition-colors hover:bg-accent"
            >
              <span className="w-8 text-center text-sm text-muted-foreground tabular-nums">#{i + 1}</span>
              <span className="text-2xl">{t.emoji}</span>
              <span className="flex-1 font-medium">{t.title}</span>
              <CategoryBadge category={t.category} className="hidden sm:inline-flex" />
              <span className="w-24 text-right text-sm text-muted-foreground">{formatDay(scheduledDay(t.slug))}</span>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}
