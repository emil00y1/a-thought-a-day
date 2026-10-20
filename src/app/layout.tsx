import type { Metadata } from "next"
import { Fraunces, Geist } from "next/font/google"

import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
})

export const metadata: Metadata = {
  title: "A Thought a Day",
  description: "One new idea every day. Five minutes, a few tiny games, and memory quizzes to make it stick.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Providers>
          <SiteHeader />
          <main className="mx-auto w-full max-w-2xl flex-1 px-4 pt-4 pb-16 sm:pt-8">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
