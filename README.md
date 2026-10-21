# A Thought a Day

One new idea every day. A short read, a few flip cards, two or three mini games, about 5 minutes.
Sign in to track what you've learned. After 7 thoughts, memory quizzes unlock and mix questions from all of them.

Next.js 16, Better Auth, Drizzle + Postgres, Tailwind v4, shadcn/ui, Motion.

## Setup

```bash
npm install
cp .env.example .env   # fill in DATABASE_URL and BETTER_AUTH_SECRET
npm run db:push        # create tables
npm run dev
```

Any Postgres works (Neon's free tier is easiest for Vercel).
Without a database you can still play today's thought as a guest and use `/preview`.

## Sign-in

No passwords. People sign in with a 6-digit code sent to their email, or with Google.

- **Email codes** are sent with [Resend](https://resend.com). In local dev, leave `RESEND_API_KEY` empty
  and the code is printed in the terminal running `npm run dev`. In production, set `RESEND_API_KEY`
  and `EMAIL_FROM` (an address on a domain you've verified in Resend).
- **Google** is optional. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` and the button appears.
  In Google Cloud, add `<your URL>/api/auth/callback/google` as a redirect URI.
- **Rate limits** (production only): 5 code emails and 5 sign-in attempts per IP per 10 minutes,
  stored in the database so they hold on serverless.
- If codes don't arrive, check the server logs for `Failed to run background task`. Send errors are
  logged there instead of being shown to the user.

## Privacy

`/privacy` lists what's stored. People can delete their account and all their data from `/account`.
The address in `EMAIL_FROM` is shown there as the contact address.

## How days work

- `LAUNCH_DATE` in `src/content/index.ts` is the day thought #1 goes live (UTC).
  Set it to your real launch day before deploying.
- Each next thought in the `thoughts` array unlocks one day later. Only today's thought is playable.
- If the list runs out, the home page shows "No new thought today".
- Someone mid-play at midnight can still save yesterday's thought for one hour.

## Adding thoughts

1. Copy a file in `src/content/thoughts/` and edit it. Types are in `src/content/types.ts`.
2. Add it to the end of the `thoughts` array in `src/content/index.ts`.
3. Preview it at `/preview` (dev only). Nothing is saved there.

Content is checked automatically when the app starts. A mistake like a wrong answer index makes
`npm run dev` show an error and `npm run build` fail, with a message naming the thought and the problem.

Rules: never change a `slug` or reorder thoughts that are already live, since progress is stored by slug and the schedule is by position.

Mini game types: `choice`, `truefalse` (swipe cards), `order` (drag to sort), `match` (tap pairs), `estimate` (slider), `poll` (no score).
Each thought also has 3 `recall` questions used by the memory quizzes.

## Structure

```
src/content/        thoughts, schedule, categories
src/components/     player (the daily flow + games), quiz, UI
src/app/            pages: / (today), /library, /review, /sign-in, /preview
src/app/actions.ts  saves a finished thought (only today's)
src/db/schema.ts    Better Auth tables + learned_thought
```
