"use client"

import { catchError } from "next/error"

import { SignInButton } from "@/components/sign-in-button"

/** If the session can't be read (e.g. the database is down), show "Sign in" instead of breaking the whole page. */
export const UserMenuBoundary = catchError(() => <SignInButton />)
