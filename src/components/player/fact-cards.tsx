"use client"

import { Hand } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

import { cn } from "@/lib/utils"

export function FactCards({ facts, onAllFlipped }: { facts: { q: string; a: string }[]; onAllFlipped: () => void }) {
  const [flipped, setFlipped] = useState(() => facts.map(() => false))

  function flip(i: number) {
    const next = flipped.map((f, j) => (j === i ? !f : f))
    setFlipped(next)
    if (!flipped.every(Boolean) && next.every(Boolean)) onAllFlipped()
  }

  return (
    <div className="grid gap-3 perspective-distant">
      {facts.map((fact, i) => (
        <motion.button
          key={i}
          type="button"
          onClick={() => flip(i)}
          initial={{ opacity: 0, y: 16, rotateY: 0 }}
          animate={{ opacity: 1, y: 0, rotateY: flipped[i] ? 180 : 0 }}
          transition={{
            opacity: { delay: i * 0.1 },
            y: { delay: i * 0.1 },
            rotateY: { type: "spring", stiffness: 260, damping: 22 },
          }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          className="grid cursor-pointer text-left transform-3d [grid-template-areas:'card']"
          aria-label={flipped[i] ? `${fact.q} ${fact.a}` : `${fact.q} (tap to reveal)`}
        >
          <div className="flex items-center gap-4 rounded-2xl border-2 bg-card px-5 py-4 backface-hidden [grid-area:card]">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-muted font-display text-lg font-semibold">
              {i + 1}
            </span>
            <span className="flex-1 font-display text-lg leading-snug font-medium">{fact.q}</span>
            <motion.span
              animate={{ rotate: [0, -14, 10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 + i * 0.4 }}
            >
              <Hand className="size-4 text-muted-foreground" />
            </motion.span>
          </div>
          <div
            className={cn(
              "flex rotate-y-180 flex-col justify-center gap-1 rounded-2xl border-2 border-foreground bg-primary px-5 py-4 text-primary-foreground backface-hidden [grid-area:card]"
            )}
          >
            <span className="text-xs font-semibold opacity-70">{fact.q}</span>
            <span className="text-[15px] leading-relaxed">{fact.a}</span>
          </div>
        </motion.button>
      ))}
    </div>
  )
}
