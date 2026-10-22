import type { Metadata } from "next"
import Link from "next/link"

import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = { title: "Privacy" }

// The sender address doubles as the contact address, e.g. "Just a thought <hello@example.com>".
const contact = process.env.EMAIL_FROM?.match(/<([^>]+)>/)?.[1] ?? process.env.EMAIL_FROM

const sections = [
  {
    title: "What we store",
    items: [
      "Your email address. If you sign in with Google, also your name and profile picture.",
      "Which thoughts you've learned, on which day, and your score.",
      "Poll answers, counted anonymously. We only store the total votes per option, not who voted.",
      "Your sign-in sessions, including the IP address and browser they came from, so you stay signed in and we can spot abuse.",
      "Sign-in codes, stored scrambled (hashed). They expire after 5 minutes.",
      "Short counters per IP address that limit how many sign-in emails can be requested.",
    ],
  },
  {
    title: "What we don't do",
    items: ["No ads.", "No tracking cookies.", "We never sell or share your data with anyone else."],
  },
  {
    title: "Cookies and storage",
    items: [
      "One cookie keeps you signed in.",
      "Your browser remembers your light or dark mode choice, and which polls you've voted in.",
      "If you play without an account, your result is kept in your browser until you sign in, so it can be saved.",
      "We count visits with Vercel Web Analytics. It uses no cookies and doesn't follow you across other sites.",
    ],
  },
  {
    title: "Who helps us run it",
    items: [
      "Our database provider stores the data above.",
      "Vercel hosts the app and counts visits.",
      "Resend sends the sign-in emails.",
      "Google, only if you choose to sign in with Google.",
    ],
  },
  {
    title: "Deleting your data",
    items: [
      "Go to Account and choose Delete my account. Your account, progress and sessions are deleted right away.",
      "Copies can stay in our database provider's backups for a short time before they expire.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy" subtitle="Short version: we store as little as possible, and you can delete it all." />
      <div className="space-y-8">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-xl font-semibold">{s.title}</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-foreground/80">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
        <p className="border-t pt-6 text-sm text-muted-foreground">
          {contact ? (
            <>
              Questions or requests? Write to{" "}
              <a href={`mailto:${contact}`} className="underline underline-offset-4 hover:text-foreground">
                {contact}
              </a>
              .{" "}
            </>
          ) : null}
          Your account is on the{" "}
          <Link href="/account" className="underline underline-offset-4 hover:text-foreground">
            Account
          </Link>{" "}
          page. Last updated 22 October 2026.
        </p>
      </div>
    </>
  )
}
