"use client"

import { motion } from "motion/react"

const BUBBLE =
  "M24 4.5c4.2 0 7.6 2.6 8.4 6.1 3.2.6 5.6 3.2 5.6 6.4 0 3.6-3 6.5-6.8 6.5H17.6c-3.6 0-6.6-2.8-6.6-6.2 0-3 2.3-5.5 5.4-6.1C17.3 7.3 20.4 4.5 24 4.5Z"

/** A yellow thought bubble with an ink outline, whose little bubbles drift upward. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      {/* Always an ink outline, also in dark mode, so the bubble stays yellow and black. */}
      <g stroke="#161b24" strokeWidth="2.4" strokeLinejoin="round" fill="#ffc83d">
        <motion.circle
          cx="8.5"
          cy="34"
          r="2.6"
          animate={{ cy: [34, 32.5, 34] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="14"
          cy="27"
          r="3.6"
          animate={{ cy: [27, 25.5, 27] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d={BUBBLE}
          animate={{ y: [0, -1.2, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>
    </svg>
  )
}

/** Logo plus the name, in the brand font. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <Logo className="size-7 shrink-0 text-foreground transition-transform group-hover:scale-110 group-hover:-rotate-6 sm:size-8" />
      <span className="font-brand text-lg leading-none font-bold tracking-tight whitespace-nowrap sm:text-xl">
        Just a thought
      </span>
    </span>
  )
}
