"use client"

import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  function toggle() {
    const dark = !document.documentElement.classList.contains("dark")
    document.documentElement.classList.toggle("dark", dark)
    try {
      localStorage.setItem("theme", dark ? "dark" : "light")
    } catch {}
  }

  // Both labels render; CSS shows the right one, so server and client always match.
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex cursor-pointer items-center gap-1 hover:text-foreground hover:underline"
    >
      <Moon className="size-3 dark:hidden" />
      <Sun className="hidden size-3 dark:inline" />
      <span className="dark:hidden">Dark mode</span>
      <span className="hidden dark:inline">Light mode</span>
    </button>
  )
}
