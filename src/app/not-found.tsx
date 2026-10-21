import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="rounded-3xl border bg-card p-10 text-center shadow-sm">
      <div className="text-6xl">🧭</div>
      <h1 className="mt-5 font-display text-3xl font-semibold">This thought got lost</h1>
      <p className="mt-2 text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button asChild size="lg" className="mt-6">
        <Link href="/">Today&apos;s thought</Link>
      </Button>
    </div>
  )
}
