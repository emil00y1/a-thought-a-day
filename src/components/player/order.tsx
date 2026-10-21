"use client"

import { ChevronDown, ChevronUp, GripVertical } from "lucide-react"
import { motion, Reorder, useDragControls } from "motion/react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import type { OrderActivity } from "@/content/types"
import { cn, shuffle } from "@/lib/utils"
import { ActivityTitle, Feedback, type Result } from "./shared"

type Item = OrderActivity["items"][number]
type RowState = "idle" | "right" | "wrong" | "revealed"

function scrambled(items: Item[], seed: string) {
  const out = shuffle(items, seed)
  // Never start already solved.
  return out.every((item, i) => item === items[i]) ? [...out.slice(1), out[0]] : out
}

function OrderRow({
  item,
  index,
  count,
  state,
  onMove,
}: {
  item: Item
  index: number
  count: number
  state: RowState
  onMove: (from: number, to: number) => void
}) {
  // Drag only from the handle, so touching the text still scrolls the page on phones.
  const controls = useDragControls()
  const locked = state !== "idle"

  return (
    <Reorder.Item
      value={item}
      drag={locked ? false : "y"}
      dragListener={false}
      dragControls={controls}
      whileDrag={{ scale: 1.03, boxShadow: "0 12px 30px -10px rgb(0 0 0 / 0.3)" }}
      animate={state === "wrong" ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "flex items-center gap-2 rounded-2xl border-2 bg-card py-2 pr-2 pl-1 text-[15px] font-medium select-none",
        state === "right" && "border-success bg-success/10",
        state === "wrong" && "border-destructive bg-destructive/10",
        state === "revealed" && "border-success/50"
      )}
    >
      <span
        onPointerDown={(e) => !locked && controls.start(e)}
        className={cn(
          "flex touch-none items-center gap-0.5 self-stretch rounded-xl pr-1.5 pl-1",
          !locked && "cursor-grab active:cursor-grabbing"
        )}
        aria-hidden
      >
        {!locked && <GripVertical className="size-4 text-muted-foreground" />}
        <span className="grid size-7 place-items-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
          {index + 1}
        </span>
      </span>
      <span className="flex-1 py-1">{item.text}</span>
      {state === "revealed" && item.detail ? (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 400, damping: 18 }}
          className="mr-1 rounded-full bg-foreground px-2 py-0.5 text-xs font-semibold text-background"
        >
          {item.detail}
        </motion.span>
      ) : (
        !locked && (
          <span className="flex flex-col">
            <button
              type="button"
              onClick={() => onMove(index, index - 1)}
              disabled={index === 0}
              aria-label={`Move "${item.text}" up`}
              className="grid h-6 w-8 cursor-pointer place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground disabled:cursor-default disabled:opacity-25"
            >
              <ChevronUp className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => onMove(index, index + 1)}
              disabled={index === count - 1}
              aria-label={`Move "${item.text}" down`}
              className="grid h-6 w-8 cursor-pointer place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground disabled:cursor-default disabled:opacity-25"
            >
              <ChevronDown className="size-4" />
            </button>
          </span>
        )
      )}
    </Reorder.Item>
  )
}

export function Order({ activity, onDone }: { activity: OrderActivity; onDone: (r: Result) => void }) {
  const correctOrder = activity.items
  const [items, setItems] = useState(() => scrambled(correctOrder, activity.prompt))
  const [checked, setChecked] = useState<boolean[] | null>(null)
  const [revealed, setRevealed] = useState(false)
  const right = checked?.filter(Boolean).length ?? 0

  function move(from: number, to: number) {
    const next = [...items]
    ;[next[from], next[to]] = [next[to], next[from]]
    setItems(next)
  }

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
      <p className="mt-1 text-sm text-muted-foreground">Drag the handles or use the arrows.</p>

      <Reorder.Group axis="y" values={items} onReorder={checked ? () => {} : setItems} className="mt-6 grid gap-2.5">
        {items.map((item, i) => (
          <OrderRow
            key={item.text}
            item={item}
            index={i}
            count={items.length}
            state={revealed ? "revealed" : checked ? (checked[i] ? "right" : "wrong") : "idle"}
            onMove={move}
          />
        ))}
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
