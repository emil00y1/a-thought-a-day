import { UserRound } from "lucide-react"
import Link from "next/link"

/** "Sign in" on wider screens, a person icon on phones to save header space. */
export function SignInButton() {
  return (
    <Link
      href="/sign-in"
      aria-label="Sign in"
      className="ml-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-foreground/20 text-foreground/80 transition-colors hover:border-foreground/50 hover:text-foreground active:scale-95 sm:ml-1 sm:flex sm:w-auto sm:px-3.5 sm:text-sm sm:font-medium"
    >
      <UserRound className="size-4 sm:hidden" strokeWidth={1.75} />
      <span className="hidden sm:inline">Sign in</span>
    </Link>
  )
}
