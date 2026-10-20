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

## How days work

- `LAUNCH_DATE` in `src/content/index.ts` is the day thought #1 goes live (UTC).
  Set it to your real launch day before deploying.
- Each next thought in the `thoughts` array unlocks one day later. Only today's thought is playable.
- If the list runs out, the home page shows "No new thought today".

## Adding thoughts

1. Copy a file in `src/content/thoughts/` and edit it. Types are in `src/content/types.ts`.
2. Add it to the end of the `thoughts` array in `src/content/index.ts`.
3. Preview it at `/preview` (dev only). Nothing is saved there.

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
