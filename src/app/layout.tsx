import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Fraunces, Geist, Grandstander } from "next/font/google"
import Link from "next/link"

import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
import { themeScript, timeZoneScript } from "@/lib/theme-script"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

// The playful brand font, used for the name only.
const grandstander = Grandstander({
  variable: "--font-grandstander",
  subsets: ["latin"],
  weight: "700",
})

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
})

export const metadata: Metadata = {
  // Absolute base for share image links. Without it, Next uses the Vercel production URL.
  metadataBase: process.env.BETTER_AUTH_URL ? new URL(process.env.BETTER_AUTH_URL) : undefined,
  title: { default: "Just a thought", template: "%s · Just a thought" },
  description: "One new idea every day. A few minutes, a few tiny games, and memory quizzes to make it stick.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The theme script adds the "dark" class before React loads, hence suppressHydrationWarning.
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} ${grandstander.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: timeZoneScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Providers>
          <SiteHeader />
          <main className="mx-auto w-full max-w-2xl flex-1 px-4 pt-4 pb-12 sm:pt-8">{children}</main>
          <footer className="pb-8 text-center text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground hover:underline">
              Privacy
            </Link>
          </footer>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
