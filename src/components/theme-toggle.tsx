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

  // Both icons render; CSS shows the right one, so server and client always match.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Light or dark"
      className="relative grid size-8 cursor-pointer place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground active:scale-90"
    >
      <Moon className="size-4 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Sun className="absolute size-4 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
    </button>
  )
}
