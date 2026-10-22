"use client"

import { AnimatePresence, motion } from "motion/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function nextMidnight() {
  const next = new Date()
  next.setHours(24, 0, 0, 0)
  return next.getTime()
}

function Digit({ value }: { value: string }) {
  return (
    <span className="relative inline-block h-[1.2em] w-[0.62em] overflow-hidden text-center tabular-nums">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute inset-0"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/** Time until the next thought (local midnight). Refreshes the page when it hits zero. */
export function Countdown() {
  const router = useRouter()
  const [left, setLeft] = useState<number | null>(null)

  useEffect(() => {
    let target = nextMidnight()
    const tick = () => {
      const ms = target - Date.now()
      if (ms <= 0) {
        target = nextMidnight()
        router.refresh()
      }
      setLeft(Math.max(0, ms))
    }
    const first = setTimeout(tick, 0)
    const id = setInterval(tick, 1000)
    return () => {
      clearTimeout(first)
      clearInterval(id)
    }
  }, [router])

  const text =
    left === null
      ? "--:--:--"
      : [left / 3_600_000, (left / 60_000) % 60, (left / 1000) % 60]
          .map((n) => String(Math.floor(n)).padStart(2, "0"))
          .join(":")

  return (
    <span className="inline-flex font-mono font-medium" aria-label={`Next thought in ${text}`}>
      {text.split("").map((ch, i) =>
        ch === ":" ? (
          <span key={i} className="px-px opacity-50">
            :
          </span>
        ) : (
          <Digit key={i} value={ch} />
        )
      )}
    </span>
  )
}
