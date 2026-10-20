import { Logo } from "@/components/logo"
import { SignInForm } from "@/components/sign-in-form"

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-sm pt-6">
      <div className="text-center">
        <Logo className="mx-auto size-14" />
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight">Keep your thoughts</h1>
        <p className="mt-1 text-muted-foreground">Track what you learn and unlock memory quizzes.</p>
      </div>
      <SignInForm />
    </div>
  )
}
