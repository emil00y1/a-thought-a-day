"use client"

import { AnimatePresence, motion } from "motion/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

type Mode = "sign-in" | "sign-up"

export function SignInForm() {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>("sign-up")
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = String(form.get("email"))
    const password = String(form.get("password"))
    setPending(true)
    setError(null)

    const { error } =
      mode === "sign-up"
        ? await authClient.signUp.email({ name: String(form.get("name")), email, password })
        : await authClient.signIn.email({ email, password })

    if (error) {
      setError(error.message ?? "Something went wrong. Try again.")
      setPending(false)
      return
    }
    router.push("/")
    router.refresh()
  }

  return (
    <div className="mt-8 rounded-3xl border bg-card p-6 shadow-sm">
      <div className="relative grid grid-cols-2 rounded-full bg-muted p-1 text-sm font-medium">
        {(["sign-up", "sign-in"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => {
              setMode(m)
              setError(null)
            }}
            className={cn(
              "relative z-10 cursor-pointer rounded-full py-2 transition-colors",
              mode === m ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {mode === m && (
              <motion.span
                layoutId="auth-tab"
                className="absolute inset-0 -z-10 rounded-full bg-card shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {m === "sign-up" ? "Create account" : "Sign in"}
          </button>
        ))}
      </div>

      <form onSubmit={submit} className="mt-6 space-y-4">
        <AnimatePresence initial={false}>
          {mode === "sign-up" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-2 pb-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
            minLength={8}
            required
          />
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0, x: [0, -6, 6, -3, 3, 0] }}
              exit={{ opacity: 0 }}
              className="rounded-xl bg-destructive/10 px-3 py-2 text-sm text-destructive"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <Button type="submit" size="lg" disabled={pending} className="w-full">
          {pending ? "One moment..." : mode === "sign-up" ? "Create account" : "Sign in"}
        </Button>
      </form>
    </div>
  )
}
