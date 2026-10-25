import { LogIn } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function SignInPrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto grid size-12 place-items-center rounded-full bg-muted">
        <LogIn className="size-5" />
      </div>
      <p className="mx-auto mt-4 max-w-sm text-muted-foreground">{children}</p>
      <Button asChild size="lg" className="mt-5">
        <Link href="/sign-in">Sign in</Link>
      </Button>
    </div>
  )
}
