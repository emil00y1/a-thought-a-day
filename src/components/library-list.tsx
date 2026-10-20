"use client"

import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { CategoryBadge } from "@/components/category-badge"
import { RichText } from "@/components/rich-text"
import { categories } from "@/content/categories"
import type { Thought } from "@/content/types"
import { cn } from "@/lib/utils"

type Item = Pick<Thought, "slug" | "title" | "emoji" | "category" | "takeaway" | "body" | "facts"> & {
  day: string
  score: string | null
}

export function LibraryList({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === item.slug
        return (
          <motion.li
            key={item.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, layout: { type: "spring", stiffness: 300, damping: 30 } }}
            className="overflow-hidden rounded-3xl border bg-card shadow-sm"
          >
            <motion.button
              layout="position"
              type="button"
              onClick={() => setOpen(isOpen ? null : item.slug)}
              className="flex w-full cursor-pointer items-center gap-4 p-4 text-left sm:p-5"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-2xl",
                  categories[item.category].gradient
                )}
              >
                {item.emoji}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-lg font-semibold">{item.title}</span>
                <span className="text-xs text-muted-foreground">
                  {item.day}
                  {item.score && ` · ${item.score} right`}
                </span>
              </span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDown className="size-5 text-muted-foreground" />
              </motion.span>
            </motion.button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 32 }}
                >
                  <div className="space-y-4 border-t px-5 pt-4 pb-6">
                    <CategoryBadge category={item.category} />
                    <p className="font-display text-xl leading-snug font-medium">{item.takeaway}</p>
                    <div className="space-y-3 leading-relaxed text-foreground/80">
                      {item.body.map((p, j) => (
                        <p key={j}>
                          <RichText text={p} />
                        </p>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {item.facts.map((f) => (
                        <li key={f.q} className="rounded-2xl bg-muted px-4 py-3 text-sm">
                          <span className="font-semibold">{f.q}</span>{" "}
                          <span className="text-muted-foreground">{f.a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        )
      })}
    </ul>
  )
}
