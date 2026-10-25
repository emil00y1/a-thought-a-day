import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Fraunces, Geist, Grandstander } from "next/font/google"
import Link from "next/link"

import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
import { ThemeToggle } from "@/components/theme-toggle"
import { indexable, siteUrl } from "@/lib/site"
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
  metadataBase: new URL(siteUrl),
  title: { default: "Just a thought", template: "%s · Just a thought" },
  description:
    "Learn one new idea every day in a few minutes. Science, history, philosophy and curious facts, with tiny games and memory quizzes to make it stick.",
  // The default share image. The home page and past thoughts swap in a card for their own thought.
  openGraph: {
    siteName: "Just a thought",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Just a thought: one new idea every day" }],
  },
  twitter: { card: "summary_large_image" },
  robots: indexable ? undefined : { index: false, follow: false },
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
          <footer className="flex justify-center gap-4 pb-8 text-xs text-muted-foreground">
            <Link href="/thoughts" className="hover:text-foreground hover:underline">
              Past thoughts
            </Link>
            <Link href="/privacy" className="hover:text-foreground hover:underline">
              Privacy
            </Link>
            <ThemeToggle />
          </footer>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
