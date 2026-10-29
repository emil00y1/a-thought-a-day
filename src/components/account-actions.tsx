"use client"

import { LogOut } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

import { deleteAccount, setReminders } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export function SignOutButton() {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  async function signOut() {
    setPending(true)
    await authClient.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <Button variant="outline" onClick={signOut} disabled={pending}>
      <LogOut /> Sign out
    </Button>
  )
}

/** A small link at the bottom of the page, so it doesn't take focus. Asks once before deleting. */
export function DeleteAccount() {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [pending, setPending] = useState(false)

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

  const link = "cursor-pointer underline underline-offset-4 disabled:cursor-default"

  return (
    <div className="pt-16 text-xs text-muted-foreground">
      <AnimatePresence mode="wait" initial={false}>
        {confirming ? (
          <motion.p key="confirm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            Delete your account and all your progress for good?{" "}
            <button type="button" onClick={remove} disabled={pending} className={`${link} font-semibold text-destructive`}>
              {pending ? "Deleting..." : "Yes, delete"}
            </button>
            {" · "}
            <button
              type="button"
              onClick={() => setConfirming(false)}
              disabled={pending}
              className={`${link} hover:text-foreground`}
            >
              Cancel
            </button>
          </motion.p>
        ) : (
          <motion.button
            key="ask"
            type="button"
            onClick={() => setConfirming(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${link} hover:text-destructive`}
          >
            Delete account
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

/** Opt-in switch for the midday reminder email. */
export function ReminderToggle({ initial }: { initial: boolean }) {
  const [on, setOn] = useState(initial)
  const [pending, setPending] = useState(false)

  async function toggle() {
    setPending(true)
    const res = await setReminders(!on)
    setPending(false)
    if (!res.ok) {
      toast.error("Couldn't save that. Try again.")
      return
    }
    setOn(!on)
    toast.success(on ? "Reminders off." : "Reminders on. See you at midday.")
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Daily reminder"
      onClick={toggle}
      disabled={pending}
      className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors disabled:opacity-60 ${on ? "bg-foreground" : "bg-muted-foreground/30"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-background shadow transition-transform ${on ? "translate-x-5" : ""}`}
      />
    </button>
  )
}
