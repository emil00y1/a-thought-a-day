"use client"

import { BookOpen, Brain, House } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

// On phones the logo doubles as the Today link, so that one only shows from `sm` up.
const links = [
  { href: "/", label: "Today", icon: House, phone: false },
  { href: "/library", label: "Library", icon: BookOpen, phone: true },
  { href: "/review", label: "Quiz", icon: Brain, phone: true },
]

export function NavLinks() {
  return <NavLinksView pathname={usePathname()} />
}

/** The links themselves. Without a pathname (while loading) none is marked active. */
export function NavLinksView({ pathname }: { pathname: string | null }) {
  return (
    <nav className="flex items-center self-stretch">
      {links.map(({ href, label, icon: Icon, phone }) => {
        const active = pathname !== null && (href === "/" ? pathname === "/" : pathname.startsWith(href))
        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative items-center gap-1.5 self-stretch px-2 text-sm transition-colors sm:px-2.5",
              active ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground",
              phone ? "flex" : "hidden sm:flex"
            )}
          >
            <Icon className="size-4" strokeWidth={active ? 2.25 : 2} />
            <span className="hidden sm:inline">{label}</span>
            {/* An ink bar on the header's bottom edge, like a tab. It slides between links. */}
            {active && (
              <motion.span
                layoutId="nav-active"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
                className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-foreground"
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
