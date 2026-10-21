"use client"

import { catchError } from "next/error"
import Link from "next/link"

import { Button } from "@/components/ui/button"

/** If the session can't be read (e.g. the database is down), show "Sign in" instead of breaking the whole page. */
export const UserMenuBoundary = catchError(() => (
  <Button asChild size="sm" className="ml-1">
    <Link href="/sign-in">Sign in</Link>
  </Button>
))
