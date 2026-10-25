import "server-only"

import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { categories } from "@/content/categories"
import type { Category, Thought } from "@/content/types"

export const ogSize = { width: 1200, height: 630 }

// The category gradients from categories.ts, as hex for the image renderer.
const gradients: Record<Category, [string, string]> = {
  science: ["#5eead4", "#10b981"],
  history: ["#fcd34d", "#f97316"],
  facts: ["#bef264", "#22c55e"],
  ideologies: ["#fda4af", "#ec4899"],
  experiments: ["#f0abfc", "#a855f7"],
  space: ["#818cf8", "#7c3aed"],
  research: ["#7dd3fc", "#3b82f6"],
  philosophy: ["#c4b5fd", "#9333ea"],
  ethics: ["#fdba74", "#ef4444"],
  curious: ["#fef08a", "#f59e0b"],
}

const ink = "#161b24"
const muted = "#5e636f"

const fonts = Promise.all(
  ["Fraunces.ttf", "Grandstander.ttf"].map((file) => readFile(join(process.cwd(), "src/assets/fonts", file)))
)

function Logo() {
  return (
    <svg width="56" height="56" viewBox="0 0 40 40">
      <g stroke={ink} strokeWidth="2.4" strokeLinejoin="round" fill="#ffc83d">
        <circle cx="8.5" cy="34" r="2.6" />
        <circle cx="14" cy="27" r="3.6" />
        <path d="M24 4.5c4.2 0 7.6 2.6 8.4 6.1 3.2.6 5.6 3.2 5.6 6.4 0 3.6-3 6.5-6.8 6.5H17.6c-3.6 0-6.6-2.8-6.6-6.2 0-3 2.3-5.5 5.4-6.1C17.3 7.3 20.4 4.5 24 4.5Z" />
      </g>
    </svg>
  )
}

/** A share card for one thought: its emoji, title and hook. Without a thought, a plain brand card. */
export async function ogImage(thought: Thought | null, number?: number) {
  const [fraunces, grandstander] = await fonts
  const [from, to] = gradients[thought?.category ?? "curious"]

  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#fdfaf4", padding: 64, color: ink }}>
        <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 300,
              height: 300,
              flexShrink: 0,
              borderRadius: 64,
              background: `linear-gradient(135deg, ${from}, ${to})`,
              fontSize: 170,
            }}
          >
            {thought?.emoji ?? "💭"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {thought && (
              <div style={{ fontSize: 26, color: muted, letterSpacing: 3, textTransform: "uppercase" }}>
                {categories[thought.category].label}
              </div>
            )}
            <div style={{ fontFamily: "Fraunces", fontSize: thought && thought.title.length > 28 ? 64 : 76, lineHeight: 1.05, marginTop: 12 }}>
              {thought?.title ?? "One new idea every day"}
            </div>
            <div style={{ fontFamily: "Fraunces", fontSize: 32, lineHeight: 1.3, color: muted, marginTop: 20 }}>
              {thought?.hook ?? "Learn something new in a few minutes, with tiny games."}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "Grandstander", fontSize: 38 }}>
            <Logo />
            Just a thought
          </div>
          {number && <div style={{ fontSize: 28, color: muted }}>{`Thought #${number}`}</div>}
        </div>
      </div>
    ),
    {
      ...ogSize,
      emoji: "twemoji",
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600 },
        { name: "Grandstander", data: grandstander, weight: 700 },
      ],
    }
  )
}
