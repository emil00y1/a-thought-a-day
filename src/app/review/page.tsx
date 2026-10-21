import type { Metadata } from "next"
import { Lock } from "lucide-react"
import Link from "next/link"
import { connection } from "next/server"
import { Suspense } from "react"

import { PageHeader } from "@/components/page-header"
import { QuizPlayer } from "@/components/quiz/quiz-player"
import { SignInPrompt } from "@/components/sign-in-prompt"
import { Button } from "@/components/ui/button"
import { getLearned, getUser, QUIZ_UNLOCK } from "@/lib/data"
import { buildQuiz } from "@/lib/quiz"

export const metadata: Metadata = { title: "Memory quiz" }

export default function ReviewPage() {
  return (
    <>
      <PageHeader title="Memory quiz" subtitle="Questions from every thought you've learned. Recalling is how it sticks." />
      <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl border bg-card" />}>
        <Review />
      </Suspense>
    </>
  )
}

async function Review() {
  const user = await getUser()
  if (!user) return <SignInPrompt>Sign in to track your thoughts and unlock memory quizzes.</SignInPrompt>

  const learned = await getLearned(user.id)
  if (learned.length < QUIZ_UNLOCK) return <Locked learned={learned.length} />

  await connection()
  const questions = buildQuiz(learned.map((l) => l.thought))
  return <QuizPlayer key={crypto.randomUUID()} questions={questions} />
}

function Locked({ learned }: { learned: number }) {
  const r = 52
  const circumference = 2 * Math.PI * r
  return (
    <div className="rounded-3xl border bg-card p-8 text-center shadow-sm sm:p-10">
      <div className="relative mx-auto size-36">
        <svg viewBox="0 0 120 120" className="size-full -rotate-90">
          <circle cx="60" cy="60" r={r} className="fill-none stroke-muted" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r={r}
            className="fill-none stroke-sky-500 transition-[stroke-dashoffset] duration-1000"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - learned / QUIZ_UNLOCK)}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div>
            <Lock className="mx-auto size-5 text-muted-foreground" />
            <div className="mt-1 font-display text-2xl font-semibold tabular-nums">
              {learned}/{QUIZ_UNLOCK}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 font-display text-2xl font-semibold">
        {QUIZ_UNLOCK - learned} more {QUIZ_UNLOCK - learned === 1 ? "thought" : "thoughts"} to go
      </p>
      <p className="mx-auto mt-2 max-w-sm text-muted-foreground">
        Quizzes unlock once you&apos;ve learned {QUIZ_UNLOCK} thoughts. Then they mix questions from all of them to keep
        your memory sharp.
      </p>
      <Button asChild size="lg" className="mt-6">
        <Link href="/">Today&apos;s thought</Link>
      </Button>
    </div>
  )
}
