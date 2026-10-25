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
  // On in production only. Stored in the database because serverless instances don't share memory.
  rateLimit: { storage: "database" },
  // Keep the session in a signed cookie for 5 minutes, so pages don't hit the database just to check who's signed in.
  session: { cookieCache: { enabled: true, maxAge: 5 * 60 } },
  plugins: [
    emailOTP({
      storeOTP: "hashed",
      // Per IP: at most 5 code emails (and 5 sign-in attempts) per 10 minutes.
      rateLimit: { window: 600, max: 5 },
      sendVerificationOTP: ({ email, otp }) => sendSignInCode(email, otp),
    }),
    nextCookies(), // must stay last
  ],
})
