import { eq } from "drizzle-orm"
import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

import { DeleteAccount, ReminderToggle, SignOutButton } from "@/components/account-actions"
import { PageHeader } from "@/components/page-header"
import { SignInPrompt } from "@/components/sign-in-prompt"
import { db } from "@/db"
import { user as userTable } from "@/db/schema"
import { getUser } from "@/lib/data"

export const metadata: Metadata = { title: "Account", robots: { index: false } }

export default function AccountPage() {
  return (
    <>
      <PageHeader title="Account" subtitle="Your sign-in and your data." />
      <Suspense fallback={<div className="h-32 animate-pulse rounded-xl bg-muted" />}>
        <Account />
      </Suspense>
    </>
  )
}

async function Account() {
  const user = await getUser()
  if (!user) return <SignInPrompt>Sign in to see your account.</SignInPrompt>
  const [settings] = await db.select({ reminders: userTable.reminders }).from(userTable).where(eq(userTable.id, user.id))

  return (
    <div>
      <dl className="divide-y border-y">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 py-4">
          <dt className="text-sm text-muted-foreground">Email</dt>
          <dd className="font-medium break-all">{user.email}</dd>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 py-4">
          <dt className="text-sm text-muted-foreground">Member since</dt>
          <dd className="font-medium">
            {user.createdAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4 py-4">
          <div>
            <p className="font-medium">Daily reminder</p>
            <p className="text-sm text-muted-foreground">An email around midday, only if you haven&apos;t played yet.</p>
          </div>
          <ReminderToggle initial={settings?.reminders ?? false} />
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <SignOutButton />
        <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
          What we store
        </Link>
      </div>
      <DeleteAccount />
    </div>
  )
}
