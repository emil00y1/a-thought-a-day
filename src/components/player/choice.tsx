"use client"

import { useState } from "react"

import type { ChoiceActivity } from "@/content/types"
import { shuffle } from "@/lib/utils"
import { ActivityTitle, Feedback, OptionButton, type Result } from "./shared"

export function Choice({ activity, onDone }: { activity: ChoiceActivity; onDone: (r: Result) => void }) {
  // Content lists the answer anywhere, so shuffle. Seeded so server and browser agree.
  const [order] = useState(() => shuffle(activity.options.map((_, i) => i), activity.question))
  const [picked, setPicked] = useState<number | null>(null)
  const answered = picked !== null

  function choose(i: number) {
    if (answered) return
    setPicked(i)
    onDone({ correct: i === activity.answer ? 1 : 0, total: 1 })
  }

  return (
    <div>
      <ActivityTitle>{activity.question}</ActivityTitle>
      <div className="mt-6 grid gap-2.5">
        {order.map((i, position) => (
          <OptionButton
            key={i}
            index={position}
            disabled={answered}
            onClick={() => choose(i)}
            state={!answered ? "idle" : i === activity.answer ? "correct" : i === picked ? "wrong" : "dim"}
          >
            {activity.options[i]}
          </OptionButton>
        ))}
      </div>
      <Feedback show={answered} correct={picked === activity.answer}>
        {activity.explain}
      </Feedback>
    </div>
  )
}
