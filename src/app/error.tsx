"use client"

import Link from "next/link"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function ErrorPage({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="py-12 text-center">
      <div className="text-6xl">🌧️</div>
      <h1 className="mt-5 font-display text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">We couldn&apos;t load this page. It&apos;s probably temporary.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button size="lg" onClick={() => retry()}>
          Try again
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  )
}
