import { UserRound } from "lucide-react"
import Link from "next/link"

/** "Sign in" on wider screens, a person icon on phones to save header space. */
export function SignInButton() {
  return (
    <Link
      href="/sign-in"
      aria-label="Sign in"
      className="ml-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform hover:bg-primary/90 active:scale-95 sm:ml-1 sm:flex sm:w-auto sm:px-3.5 sm:text-sm sm:font-medium"
    >
      <UserRound className="size-4 sm:hidden" />
      <span className="hidden sm:inline">Sign in</span>
    </Link>
  )
}
