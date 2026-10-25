import type { MetadataRoute } from "next"
import { connection } from "next/server"

import { pastThoughts, scheduledDay, todayKey } from "@/content"
import { siteUrl } from "@/lib/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Past thoughts change every day, so build this per request.
  await connection()
  const url = (path: string) => new URL(path, siteUrl).toString()
  return [
    { url: url("/"), changeFrequency: "daily", priority: 1 },
    { url: url("/thoughts"), changeFrequency: "daily", priority: 0.8 },
    ...pastThoughts(todayKey()).map((t) => ({
      url: url(`/thoughts/${t.slug}`),
      lastModified: scheduledDay(t.slug),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: url("/privacy"), changeFrequency: "yearly", priority: 0.2 },
  ]
}
