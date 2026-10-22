import Link from "next/link"

import { SignInButton } from "@/components/sign-in-button"
import { getUser } from "@/lib/data"

export async function UserMenu() {
  const user = await getUser()

  if (!user) return <SignInButton />

  return (
    <Link
      href="/account"
      title={`Signed in as ${user.email}`}
      aria-label="Account"
      className="ml-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
    >
      {user.name.slice(0, 1).toUpperCase()}
    </Link>
  )
}
