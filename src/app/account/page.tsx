import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

import { AccountActions } from "@/components/account-actions"
import { PageHeader } from "@/components/page-header"
import { SignInPrompt } from "@/components/sign-in-prompt"
import { getUser } from "@/lib/data"

export const metadata: Metadata = { title: "Account", robots: { index: false } }

export default function AccountPage() {
  return (
    <>
      <PageHeader title="Account" subtitle="Your sign-in and your data." />
      <Suspense fallback={<div className="h-64 animate-pulse rounded-3xl border bg-card" />}>
        <Account />
      </Suspense>
    </>
  )
}

async function Account() {
  const user = await getUser()
  if (!user) return <SignInPrompt>Sign in to see your account.</SignInPrompt>

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border bg-card p-6 shadow-sm">
        <div className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Signed in as</div>
        <div className="mt-1 text-lg font-medium break-all">{user.email}</div>
        <div className="mt-1 text-sm text-muted-foreground">
          Member since{" "}
          {user.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}
        </div>
      </div>
      <AccountActions />
      <p className="text-center text-sm text-muted-foreground">
        See what we store in the{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
          privacy note
        </Link>
        .
      </p>
    </div>
  )
}
