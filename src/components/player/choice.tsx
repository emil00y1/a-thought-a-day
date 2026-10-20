"use client"

import { useState } from "react"

import type { ChoiceActivity } from "@/content/types"
import { ActivityTitle, Feedback, OptionButton, type Result } from "./shared"

export function Choice({ activity, onDone }: { activity: ChoiceActivity; onDone: (r: Result) => void }) {
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
        {activity.options.map((option, i) => (
          <OptionButton
            key={i}
            index={i}
            disabled={answered}
            onClick={() => choose(i)}
            state={!answered ? "idle" : i === activity.answer ? "correct" : i === picked ? "wrong" : "dim"}
          >
            {option}
          </OptionButton>
        ))}
      </div>
      <Feedback show={answered} correct={picked === activity.answer}>
        {activity.explain}
      </Feedback>
    </div>
  )
}
