import { AccountLink } from "@/components/nav-links"
import { SignInButton } from "@/components/sign-in-button"
import { getUser } from "@/lib/data"

export async function UserMenu() {
  const user = await getUser()
  return user ? <AccountLink email={user.email} /> : <SignInButton />
}
