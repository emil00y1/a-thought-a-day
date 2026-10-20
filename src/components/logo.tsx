"use client"

import { motion } from "motion/react"

/** A thought bubble whose little bubbles drift upward. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <motion.circle
        cx="9"
        cy="33"
        r="2.5"
        className="fill-current"
        animate={{ cy: [33, 31.5, 33] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="14"
        cy="26"
        r="3.5"
        className="fill-current"
        animate={{ cy: [26, 24.5, 26] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.path
        d="M24 4c4.2 0 7.6 2.6 8.4 6.1 3.2.6 5.6 3.2 5.6 6.4 0 3.6-3 6.5-6.8 6.5H17.6c-3.6 0-6.6-2.8-6.6-6.2 0-3 2.3-5.5 5.4-6.1C17.3 6.8 20.4 4 24 4Z"
        className="fill-current"
        animate={{ y: [0, -1.2, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  )
}
