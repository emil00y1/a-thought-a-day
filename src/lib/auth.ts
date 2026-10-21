import "server-only"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import { emailOTP } from "better-auth/plugins/email-otp"

import { db } from "@/db"
import * as schema from "@/db/schema"
import { sendSignInCode } from "@/lib/email"

const google =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? { clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }
    : undefined

/** Google login shows up only when its keys are set. */
export const googleEnabled = Boolean(google)

// No passwords: sign in with a one-time email code, or Google.
export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg", schema }),
  socialProviders: google ? { google } : {},
  plugins: [
    emailOTP({
      storeOTP: "hashed",
      sendVerificationOTP: ({ email, otp }) => sendSignInCode(email, otp),
    }),
    nextCookies(), // must stay last
  ],
})
