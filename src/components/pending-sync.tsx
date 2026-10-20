"use client"

import { useEffect } from "react"
import { toast } from "sonner"

import { completeThought } from "@/app/actions"
import { takePending } from "@/lib/pending"

/** Saves a thought the user finished as a guest, once they've signed in. */
export function PendingSync({ slug }: { slug: string }) {
  useEffect(() => {
    const pending = takePending()
    if (!pending || pending.slug !== slug) return
    void completeThought(pending).then((res) => {
      if (res.ok) toast.success("Saved today's thought to your library")
    })
  }, [slug])

  return null
}
