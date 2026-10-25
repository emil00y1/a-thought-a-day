import Link from "next/link"
import { Suspense } from "react"

import { Wordmark } from "@/components/logo"
import { HomeLink, NavLinks, NavLinksView } from "@/components/nav-links"
import { UserMenu } from "@/components/user-menu"
import { UserMenuBoundary } from "@/components/user-menu-boundary"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-2xl items-center gap-1 px-4 sm:gap-2">
        <Suspense
          fallback={
            <Link href="/" aria-label="Just a thought, home" className="group mr-auto">
              <Wordmark className="flex items-center gap-2" />
            </Link>
          }
        >
          <HomeLink aria-label="Just a thought, home" className="group mr-auto">
            <Wordmark className="flex items-center gap-2" />
          </HomeLink>
        </Suspense>
        <Suspense fallback={<NavLinksView pathname={null} />}>
          <NavLinks />
        </Suspense>
        <UserMenuBoundary>
          <Suspense fallback={<div className="size-8 animate-pulse rounded-full bg-muted" />}>
            <UserMenu />
          </Suspense>
        </UserMenuBoundary>
      </div>
    </header>
  )
}
