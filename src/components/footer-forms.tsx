"use client"

import { Check, Send, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { Dialog } from "radix-ui"
import { useState } from "react"

import { sendMessage } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type Kind = "feedback" | "thought"

const copy: Record<Kind, { link: string; title: string; intro: string; label: string; placeholder: string; done: string }> = {
  feedback: {
    link: "Feedback",
    title: "Give feedback",
    intro: "What's working, what isn't? Short is fine.",
    label: "Your feedback",
    placeholder: "I loved... / It was confusing when...",
    done: "Thanks! Every message gets read.",
  },
  thought: {
    link: "Suggest a thought",
    title: "Suggest a thought",
    intro: "Know an idea worth a day? I read every suggestion and pick the thoughts by hand, so not all of them make it in.",
    label: "The idea, and why it's interesting",
    placeholder: "The Mpemba effect: hot water can sometimes freeze faster than cold...",
    done: "Thanks! I'll take a look.",
  },
}

/** A footer link that opens a short form in a bottom sheet. */
export function FooterForm({ kind }: { kind: Kind }) {
  const [open, setOpen] = useState(false)
  // Bumped on every open, so the form starts empty each time.
  const [round, setRound] = useState(0)
  const text = copy[kind]

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (next) setRound((r) => r + 1)
        setOpen(next)
      }}
    >
      <Dialog.Trigger className="cursor-pointer hover:text-foreground hover:underline">{text.link}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content
          className={cn(
            "fixed inset-x-0 bottom-0 z-50 max-h-[90dvh] overflow-y-auto rounded-t-3xl bg-background p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl outline-none",
            "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=open]:duration-300",
            "sm:inset-x-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:w-full sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl sm:data-[state=closed]:slide-out-to-bottom-8 sm:data-[state=open]:slide-in-from-bottom-8"
          )}
        >
          <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-muted-foreground/25 sm:hidden" />
          <Dialog.Close
            aria-label="Close"
            className="absolute top-4 right-4 grid size-8 cursor-pointer place-items-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <X className="size-4" />
          </Dialog.Close>
          <Form key={round} kind={kind} onDone={() => setOpen(false)} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function Form({ kind, onDone }: { kind: Kind; onDone: () => void }) {
  const text = copy[kind]
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [mayContact, setMayContact] = useState(false)
  const [website, setWebsite] = useState("")
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!message.trim()) return
    setState("sending")
    const res = await sendMessage({ kind, message, email, mayContact, website }).catch(() => ({ ok: false }))
    setState(res.ok ? "sent" : "error")
    if (res.ok) setTimeout(onDone, 1800)
  }

  if (state === "sent") {
    return (
      <div className="py-8 text-center" role="status">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="mx-auto grid size-14 place-items-center rounded-full bg-success text-white"
        >
          <Check className="size-7" strokeWidth={3} />
        </motion.div>
        <Dialog.Title className="mt-4 font-display text-2xl font-semibold">Sent</Dialog.Title>
        <Dialog.Description className="mt-1 text-muted-foreground">{text.done}</Dialog.Description>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="pr-8">
        <Dialog.Title className="font-display text-2xl font-semibold">{text.title}</Dialog.Title>
        <Dialog.Description className="mt-1 text-sm text-muted-foreground">{text.intro}</Dialog.Description>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${kind}-message`}>{text.label}</Label>
        <textarea
          id={`${kind}-message`}
          required
          autoFocus
          rows={4}
          maxLength={2000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={text.placeholder}
          className="w-full resize-none rounded-xl border border-input bg-transparent px-4 py-3 text-base shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${kind}-email`}>
          Email <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id={`${kind}-email`}
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <AnimatePresence initial={false}>
          {email.trim() && (
            <motion.label
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex cursor-pointer items-start gap-2.5 overflow-hidden pt-1 text-sm"
            >
              <input
                type="checkbox"
                checked={mayContact}
                onChange={(e) => setMayContact(e.target.checked)}
                className="mt-0.5 size-4 shrink-0 cursor-pointer accent-foreground"
              />
              <span>You may contact me about this</span>
            </motion.label>
          )}
        </AnimatePresence>
      </div>

      {/* Hidden from people; bots fill it in. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        aria-hidden
      />

      {state === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Couldn&apos;t send it. Check the email address, or try again in a bit.
        </p>
      )}

      <Button type="submit" size="lg" disabled={!message.trim() || state === "sending"} className="w-full">
        <Send /> {state === "sending" ? "Sending..." : "Send"}
      </Button>
    </form>
  )
}
