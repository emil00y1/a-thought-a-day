import "server-only"

import type { RecallQuestion, Thought, ThoughtSummary } from "@/content/types"
import { shuffle } from "@/lib/utils"

export type QuizQuestion = RecallQuestion & { thought: ThoughtSummary }

/** Picks up to `size` recall questions, spread across as many thoughts as possible, with shuffled options. */
export function buildQuiz(thoughts: Thought[], size = 10): QuizQuestion[] {
  const pools = shuffle(thoughts).map((t) => shuffle(t.recall).map((q) => ({ q, t })))
  const picked: { q: RecallQuestion; t: Thought }[] = []
  for (let round = 0; picked.length < size && pools.some((p) => p.length > round); round++) {
    for (const pool of pools) {
      if (pool[round] && picked.length < size) picked.push(pool[round])
    }
  }

  return picked.map(({ q, t }) => {
    const order = shuffle(q.options.map((_, i) => i))
    return {
      question: q.question,
      options: order.map((i) => q.options[i]),
      answer: order.indexOf(q.answer),
      thought: { slug: t.slug, title: t.title, category: t.category, emoji: t.emoji, takeaway: t.takeaway },
    }
  })
}
