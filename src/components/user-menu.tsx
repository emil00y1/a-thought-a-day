import { UserRound } from "lucide-react"
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
      className="ml-0.5 grid size-8 shrink-0 place-items-center rounded-full text-foreground/80 transition-colors hover:bg-accent hover:text-foreground active:scale-95"
    >
      <UserRound className="size-4" strokeWidth={1.75} />
    </Link>
  )
}
