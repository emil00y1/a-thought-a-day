import { BookOpen, Brain, House } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

import { Wordmark } from "@/components/logo"
import { UserMenu } from "@/components/user-menu"
import { UserMenuBoundary } from "@/components/user-menu-boundary"
import { cn } from "@/lib/utils"

// On phones the logo doubles as the Today link, so that one only shows from `sm` up.
const links = [
  { href: "/", label: "Today", icon: House, phone: false },
  { href: "/library", label: "Library", icon: BookOpen, phone: true },
  { href: "/review", label: "Quiz", icon: Brain, phone: true },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-2xl items-center gap-1 px-4 sm:gap-2">
        <Link href="/" aria-label="Just a thought, home" className="group mr-auto">
          <Wordmark className="flex items-center gap-2" />
        </Link>
        <nav className="flex items-center">
          {links.map(({ href, label, icon: Icon, phone }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={cn(
                "items-center gap-1.5 rounded-full px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-2.5",
                phone ? "flex" : "hidden sm:flex"
              )}
            >
              <Icon className="size-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </nav>
        <UserMenuBoundary>
          <Suspense fallback={<div className="size-8 animate-pulse rounded-full bg-muted" />}>
            <UserMenu />
          </Suspense>
        </UserMenuBoundary>
      </div>
    </header>
  )
}
