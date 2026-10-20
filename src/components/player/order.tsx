"use client"

import { GripVertical } from "lucide-react"
import { motion, Reorder } from "motion/react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import type { OrderActivity } from "@/content/types"
import { cn, shuffle } from "@/lib/utils"
import { ActivityTitle, Feedback, type Result } from "./shared"

type Item = OrderActivity["items"][number]

function scrambled(items: Item[], seed: string) {
  const out = shuffle(items, seed)
  // Never start already solved.
  return out.every((item, i) => item === items[i]) ? [...out.slice(1), out[0]] : out
}

export function Order({ activity, onDone }: { activity: OrderActivity; onDone: (r: Result) => void }) {
  const correctOrder = activity.items
  const [items, setItems] = useState(() => scrambled(correctOrder, activity.prompt))
  const [checked, setChecked] = useState<boolean[] | null>(null)
  const [revealed, setRevealed] = useState(false)
  const right = checked?.filter(Boolean).length ?? 0

  function check() {
    const result = items.map((item, i) => item === correctOrder[i])
    setChecked(result)
    onDone({ correct: result.filter(Boolean).length, total: result.length })
    // Let the red/green sink in, then slide everything into the right order.
    setTimeout(() => {
      setItems(correctOrder)
      setRevealed(true)
    }, 1200)
  }

  return (
    <div>
      <ActivityTitle>{activity.prompt}</ActivityTitle>
      <p className="mt-1 text-sm text-muted-foreground">Drag the cards to reorder them.</p>

      <Reorder.Group axis="y" values={items} onReorder={checked ? () => {} : setItems} className="mt-6 grid gap-2.5">
        {items.map((item, i) => {
          const state = revealed ? "revealed" : checked ? (checked[i] ? "right" : "wrong") : "idle"
          return (
            <Reorder.Item
              key={item.text}
              value={item}
              drag={checked ? false : "y"}
              whileDrag={{ scale: 1.03, boxShadow: "0 12px 30px -10px rgb(0 0 0 / 0.3)" }}
              animate={state === "wrong" ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "flex touch-none items-center gap-3 rounded-2xl border-2 bg-card px-3 py-3 text-[15px] font-medium select-none",
                state === "idle" && "cursor-grab active:cursor-grabbing",
                state === "right" && "border-success bg-success/10",
                state === "wrong" && "border-destructive bg-destructive/10",
                state === "revealed" && "border-success/50"
              )}
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                {i + 1}
              </span>
              <span className="flex-1">{item.text}</span>
              {revealed && item.detail ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 400, damping: 18 }}
                  className="rounded-full bg-foreground px-2 py-0.5 text-xs font-semibold text-background"
                >
                  {item.detail}
                </motion.span>
              ) : (
                !checked && <GripVertical className="size-4 text-muted-foreground" />
              )}
            </Reorder.Item>
          )
        })}
      </Reorder.Group>

      {!checked && (
        <Button size="lg" onClick={check} className="mt-6 w-full">
          Check order
        </Button>
      )}
      <Feedback
        show={checked !== null}
        correct={right === correctOrder.length}
        title={right === correctOrder.length ? "Perfect order!" : `${right} of ${correctOrder.length} in the right spot`}
      >
        {activity.explain ?? "Here's the right order."}
      </Feedback>
    </div>
  )
}
