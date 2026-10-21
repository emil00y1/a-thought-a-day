"use client"

import { LogOut, Trash2 } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

import { deleteAccount } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export function AccountActions() {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [pending, setPending] = useState(false)

  async function signOut() {
    setPending(true)
    await authClient.signOut()
    router.push("/")
    router.refresh()
  }

  async function remove() {
    setPending(true)
    const res = await deleteAccount()
    if (!res.ok) {
      setPending(false)
      toast.error("Couldn't delete your account. Try again.")
      return
    }
    toast.success("Your account and data are deleted.")
    router.push("/")
    router.refresh()
  }

  return (
    <>
      <Button variant="outline" size="lg" onClick={signOut} disabled={pending} className="w-full">
        <LogOut /> Sign out
      </Button>

      <div className="rounded-3xl border border-destructive/30 p-6">
        <p className="font-medium">Delete account</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Removes your account, every thought you&apos;ve learned and your streak. This can&apos;t be undone.
        </p>
        <AnimatePresence mode="wait" initial={false}>
          {confirming ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              <Button variant="destructive" onClick={remove} disabled={pending}>
                <Trash2 /> {pending ? "Deleting..." : "Yes, delete everything"}
              </Button>
              <Button variant="ghost" onClick={() => setConfirming(false)} disabled={pending}>
                Cancel
              </Button>
            </motion.div>
          ) : (
            <motion.div key="ask" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
              <Button variant="outline" onClick={() => setConfirming(true)} className="mt-4 text-destructive hover:text-destructive">
                <Trash2 /> Delete my account
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
