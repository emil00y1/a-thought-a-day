import Link from "next/link"

import { Button } from "@/components/ui/button"
import { getUser } from "@/lib/data"

export async function UserMenu() {
  const user = await getUser()

  if (!user) {
    return (
      <Button asChild size="sm" className="ml-1">
        <Link href="/sign-in">Sign in</Link>
      </Button>
    )
  }

  return (
    <Link
      href="/account"
      title={`Signed in as ${user.email}`}
      aria-label="Account"
      className="ml-1 grid size-8 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
    >
      {user.name.slice(0, 1).toUpperCase()}
    </Link>
  )
}
