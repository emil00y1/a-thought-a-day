"use client"

import { BookOpen, Brain, House, UserRound } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/** Sent when a home link is clicked while already home, so the game goes back to its first screen. */
export const HOME_EVENT = "jat:home"

/** A link to the home page that also resets the game when you're already on it. */
export function HomeLink(props: Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname()
  return (
    <Link
      {...props}
      href="/"
      onClick={(e) => {
        props.onClick?.(e)
        if (pathname === "/") window.dispatchEvent(new Event(HOME_EVENT))
      }}
    />
  )
}

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
            onClick={() => href === "/" && pathname === "/" && window.dispatchEvent(new Event(HOME_EVENT))}
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
            {active && <ActiveBar />}
          </Link>
        )
      })}
    </nav>
  )
}

/** The account icon, marked active like the other menu links. */
export function AccountLink({ email }: { email: string }) {
  const active = usePathname().startsWith("/account")
  return (
    <Link
      href="/account"
      title={`Signed in as ${email}`}
      aria-label="Account"
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative ml-0.5 flex items-center self-stretch px-2 transition-colors",
        active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
      )}
    >
      <UserRound className="size-4" strokeWidth={active ? 2.25 : 1.75} />
      {active && <ActiveBar />}
    </Link>
  )
}

/** An ink bar on the header's bottom edge, like a tab. It slides between links. */
function ActiveBar() {
  return (
    <motion.span
      layoutId="nav-active"
      transition={{ type: "spring", stiffness: 500, damping: 38 }}
      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-foreground"
    />
  )
}
