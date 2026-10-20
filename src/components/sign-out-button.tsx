"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

import { authClient } from "@/lib/auth-client"

export function SignOutButton({ name }: { name: string }) {
  const router = useRouter()

  async function signOut() {
    await authClient.signOut()
    router.refresh()
  }

  return (
    <button
      onClick={signOut}
      title={`Signed in as ${name}. Click to sign out.`}
      className="group relative ml-1 grid size-8 cursor-pointer place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform active:scale-95"
    >
      <span className="transition-opacity group-hover:opacity-0">{name.slice(0, 1).toUpperCase()}</span>
      <LogOut className="absolute size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="sr-only">Sign out</span>
    </button>
  )
}
