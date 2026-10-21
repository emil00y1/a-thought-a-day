"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

import { completeThought } from "@/app/actions"
import { takePending } from "@/lib/pending"

/** Saves a thought the user finished as a guest, once they've signed in. */
export function PendingSync() {
  const router = useRouter()

  useEffect(() => {
    const pending = takePending()
    if (!pending) return
    // The server decides if it's still saveable; stale ones are just dropped.
    void completeThought(pending).then((res) => {
      if (!res.ok) return
      toast.success("Saved today's thought to your library")
      router.refresh()
    })
  }, [router])

  return null
}
