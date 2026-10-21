import { BookOpen, Brain, Sun } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

import { Logo } from "@/components/logo"
import { UserMenu } from "@/components/user-menu"
import { UserMenuBoundary } from "@/components/user-menu-boundary"

const links = [
  { href: "/", label: "Today", icon: Sun },
  { href: "/library", label: "Library", icon: BookOpen },
  { href: "/review", label: "Review", icon: Brain },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-2xl items-center gap-2 px-4">
        <Link href="/" className="group mr-auto flex items-center gap-2">
          <Logo className="size-7 text-foreground transition-transform group-hover:scale-110 group-hover:-rotate-6" />
          <span className="font-display text-lg font-semibold tracking-tight">
            a thought <span className="text-muted-foreground">a day</span>
          </span>
        </Link>
        <nav className="flex items-center">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
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
