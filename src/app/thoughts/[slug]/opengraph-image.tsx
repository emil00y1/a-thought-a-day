import { scheduledDay, thoughtBySlug, thoughtNumber } from "@/content"
import { getToday } from "@/lib/data"
import { ogImage, ogSize } from "@/lib/og"

export const size = ogSize
export const contentType = "image/png"
export const alt = "A thought from Just a thought"

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const thought = thoughtBySlug(slug)
  // Future thoughts stay a surprise, so they get the plain brand card.
  if (!thought || scheduledDay(slug) > (await getToday())) return ogImage(null)
  return ogImage(thought, thoughtNumber(slug))
}
