import Link from "next/link"

import { SignOutButton } from "@/components/sign-out-button"
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

  return <SignOutButton name={user.name} />
}
