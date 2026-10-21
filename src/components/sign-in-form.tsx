"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { ArrowLeft, Mail } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"

const RESEND_AFTER = 30

const codeErrors: Record<string, string> = {
  INVALID_OTP: "That code isn't right. Try again.",
  OTP_EXPIRED: "That code has expired. Send a new one.",
  TOO_MANY_ATTEMPTS: "Too many tries. Send a new code.",
}

export function SignInForm({ googleEnabled }: { googleEnabled: boolean }) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [step, setStep] = useState<"email" | "code">("email")
  const [code, setCode] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return
    const id = setTimeout(() => setCooldown(cooldown - 1), 1000)
    return () => clearTimeout(id)
  }, [cooldown])

  async function sendCode() {
    setPending(true)
    setError(null)
    const { error } = await authClient.emailOtp.sendVerificationOtp({ email, type: "sign-in" })
    setPending(false)
    if (error) return setError(error.message ?? "Couldn't send the code. Try again.")
    setStep("code")
    setCode("")
    setCooldown(RESEND_AFTER)
  }

  async function verify(otp: string) {
    if (pending) return
    setPending(true)
    setError(null)
    const { error } = await authClient.signIn.emailOtp({ email, otp })
    if (error) {
      setPending(false)
      setCode("")
      return setError((error.code && codeErrors[error.code]) ?? "That code didn't work. Try again.")
    }
    router.push("/")
    router.refresh()
  }

  async function google() {
    setPending(true)
    const { error } = await authClient.signIn.social({ provider: "google", callbackURL: "/" })
    if (error) {
      setPending(false)
      setError(error.message ?? "Google sign-in failed. Try again.")
    }
  }

  return (
    <div className="mt-8 overflow-clip rounded-3xl border bg-card p-6 shadow-sm">
      <AnimatePresence mode="wait" initial={false}>
        {step === "email" ? (
          <motion.div
            key="email"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            {googleEnabled && (
              <>
                <Button variant="outline" size="lg" onClick={google} disabled={pending} className="w-full">
                  <GoogleIcon /> Continue with Google
                </Button>
                <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
                </div>
              </>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                void sendCode()
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <ErrorText error={error} />
              <Button type="submit" size="lg" disabled={pending} className="w-full">
                <Mail /> {pending ? "Sending..." : "Email me a code"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">No password needed. New here? This creates your account.</p>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
              className="mx-auto grid size-12 place-items-center rounded-full bg-muted"
            >
              <Mail className="size-5" />
            </motion.div>
            <p className="mt-4 font-display text-xl font-semibold">Check your inbox</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We sent a 6-digit code to <span className="font-medium text-foreground">{email}</span>
            </p>

            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={code}
              onChange={setCode}
              onComplete={verify}
              autoFocus
              containerClassName="mt-6 justify-center"
              aria-label="Sign-in code"
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }, (_, i) => (
                  <InputOTPSlot key={i} index={i} aria-invalid={Boolean(error)} />
                ))}
              </InputOTPGroup>
            </InputOTP>

            <div className="mt-4">
              <ErrorText error={error} />
            </div>

            <div className="mt-6 flex items-center justify-between text-sm">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setStep("email")
                  setError(null)
                }}
              >
                <ArrowLeft /> Other email
              </Button>
              <Button variant="ghost" size="sm" disabled={cooldown > 0 || pending} onClick={sendCode}>
                {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ErrorText({ error }: { error: string | null }) {
  return (
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
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9Z" />
    </svg>
  )
}
