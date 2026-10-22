"use client"

import { Brain, Flame, Lock, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

import { cn } from "@/lib/utils"

type Props = {
  learned: number
  streak: number
  unlockAt: number
  className?: string
}

export function StatsStrip({ learned, streak, unlockAt, className }: Props) {
  const unlocked = learned >= unlockAt
  const items = [
    {
      icon: <Flame className={cn("size-5", streak > 0 ? "text-orange-500" : "text-muted-foreground")} />,
      value: streak,
      label: "day streak",
    },
    { icon: <Brain className="size-5 text-sky-500" />, value: learned, label: "learned" },
  ]

  return (
    <div className={cn("grid grid-cols-3 gap-2", className)}>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08 }}
          className="flex flex-col items-center gap-1 rounded-2xl border bg-card/70 px-2 py-3"
        >
          <motion.span
            initial={{ scale: 0.4, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.2 + i * 0.08 }}
          >
            {item.icon}
          </motion.span>
          <span className="font-display text-2xl leading-none font-semibold tabular-nums">{item.value}</span>
          <span className="text-xs text-muted-foreground">{item.label}</span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26 }}
      >
        {unlocked ? (
          <Link
            href="/review"
            className="group flex h-full flex-col items-center justify-center gap-1 rounded-2xl bg-primary px-2 py-3 text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            <Sparkles className="size-5 transition-transform group-hover:rotate-12" />
            <span className="text-sm font-semibold">Memory quiz</span>
            <span className="text-xs opacity-70">10 questions</span>
          </Link>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed bg-card/40 px-2 py-3">
            <Lock className="size-4 text-muted-foreground" />
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-sky-500"
                initial={{ width: 0 }}
                animate={{ width: `${(learned / unlockAt) * 100}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.4 }}
              />
            </div>
            <span className="text-center text-xs text-muted-foreground">
              {unlockAt - learned} more to unlock the memory quiz
            </span>
          </div>
        )}
      </motion.div>
    </div>
  )
}
