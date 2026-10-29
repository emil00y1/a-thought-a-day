import * as motion from "motion/react-client"

import { categories } from "@/content/categories"
import type { Category } from "@/content/types"
import { cn } from "@/lib/utils"

/** The category as colored small caps after a small dot. No pill. */
export function CategoryBadge({ category, className }: { category: Category; className?: string }) {
  const style = categories[category]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase",
        style.badge,
        "bg-transparent",
        className
      )}
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.15 }}
        className={cn("size-1.5 rounded-full", style.solid)}
      />
      {style.label}
    </span>
  )
}

/** A soft, slowly drifting color blob for card backgrounds. */
export function CategoryGlow({ category, className }: { category: Category; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -top-24 -right-24 size-72 animate-[drift_14s_ease-in-out_infinite] rounded-full bg-gradient-to-br opacity-30 blur-3xl dark:opacity-25",
        categories[category].gradient,
        className
      )}
    />
  )
}
