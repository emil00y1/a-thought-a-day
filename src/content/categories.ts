import type { Category } from "./types"

type Style = {
  label: string
  /** Soft badge background + text. */
  badge: string
  /** Gradient stops for blobs and accents. */
  gradient: string
  /** Solid accent color. */
  solid: string
}

export const categories: Record<Category, Style> = {
  science: {
    label: "Science",
    badge: "bg-teal-500/12 text-teal-700 dark:text-teal-300",
    gradient: "from-teal-300 to-emerald-500",
    solid: "bg-teal-500",
  },
  history: {
    label: "History",
    badge: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
    gradient: "from-amber-300 to-orange-500",
    solid: "bg-amber-500",
  },
  facts: {
    label: "Facts",
    badge: "bg-lime-500/15 text-lime-800 dark:text-lime-300",
    gradient: "from-lime-300 to-green-500",
    solid: "bg-lime-500",
  },
  ideologies: {
    label: "Ideologies",
    badge: "bg-rose-500/12 text-rose-700 dark:text-rose-300",
    gradient: "from-rose-300 to-pink-500",
    solid: "bg-rose-500",
  },
  experiments: {
    label: "Experiments",
    badge: "bg-fuchsia-500/12 text-fuchsia-700 dark:text-fuchsia-300",
    gradient: "from-fuchsia-300 to-purple-500",
    solid: "bg-fuchsia-500",
  },
  space: {
    label: "Space",
    badge: "bg-indigo-500/12 text-indigo-700 dark:text-indigo-300",
    gradient: "from-indigo-400 to-violet-600",
    solid: "bg-indigo-500",
  },
  research: {
    label: "Research",
    badge: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
    gradient: "from-sky-300 to-blue-500",
    solid: "bg-sky-500",
  },
  philosophy: {
    label: "Philosophy",
    badge: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
    gradient: "from-violet-300 to-purple-600",
    solid: "bg-violet-500",
  },
  ethics: {
    label: "Ethics",
    badge: "bg-orange-500/12 text-orange-700 dark:text-orange-300",
    gradient: "from-orange-300 to-red-500",
    solid: "bg-orange-500",
  },
  curious: {
    label: "Curious",
    badge: "bg-yellow-500/15 text-yellow-800 dark:text-yellow-300",
    gradient: "from-yellow-200 to-amber-500",
    solid: "bg-yellow-500",
  },
}
