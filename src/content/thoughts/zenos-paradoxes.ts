import type { Thought } from "../types"

export const zenosParadoxes: Thought = {
  slug: "zenos-paradoxes",
  title: "Zeno's Paradoxes",
  category: "philosophy",
  emoji: "🐢",
  hook: "To cross a room, first cross half of it. Then half of what's left. Can you ever arrive?",
  body: [
    "In the 400s BC, the Greek thinker **Zeno of Elea** came up with puzzles meant to show that motion is impossible. In the **dichotomy**, to reach a wall you must first go halfway, then half of what's left, then half again, forever. That's infinitely many steps. How can you ever finish?",
    "In **Achilles and the tortoise**, the fast hero gives a tortoise a head start. By the time he reaches where it was, it has crept ahead. When he reaches that spot, it has moved on again. So, Zeno argued, Achilles can never catch up.",
    "Modern math has a neat reply: an endless list of numbers can add up to a finite total, as long as they shrink fast enough. Each step takes less time too, so the whole trip ends. Still, some philosophers argue the math doesn't fully explain how an **infinite** list of steps actually gets completed.",
  ],
  takeaway: "Infinitely many steps can still add up to a finite distance and a finite time.",
  facts: [
    {
      q: "Do we have Zeno's own writings?",
      a: "No. His book is lost. We know his paradoxes mainly through Plato, Aristotle and later commentators.",
    },
    {
      q: "What was Zeno trying to prove?",
      a: "That his teacher Parmenides was right: reality is one unchanging whole, and motion is only an illusion.",
    },
    {
      q: "How did one philosopher reply?",
      a: "Diogenes the Cynic is said to have answered without a word. He simply stood up and walked.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "What does 1/2 + 1/4 + 1/8 + 1/16 + ... add up to if it goes on forever?",
      options: ["Infinity", "Exactly 1", "Just under 1", "About 2"],
      answer: 1,
      explain: "Exactly 1. Each step covers half of what's left, so the total gets as close to 1 as you like, and that limit is the sum.",
    },
    {
      type: "estimate",
      question:
        "Achilles runs 10 times faster than the tortoise and gives it a 100 m head start. How far does Achilles run before he catches it?",
      min: 100,
      max: 200,
      step: 1,
      answer: 111,
      tolerance: 3,
      unit: "m",
      explain: "About 111 m. He runs 100 + 10 + 1 + 0.1 + ... meters, an endless list that adds up to just over 111.",
    },
    {
      type: "poll",
      question: "Has math really solved Zeno's paradoxes?",
      options: [
        { text: "Yes, the sums work out", note: "Many mathematicians agree: the steps add up to a finite distance and time." },
        { text: "Not completely", note: "Some philosophers say math tells us when Achilles wins, not how endless steps get finished." },
        { text: "Maybe space isn't endlessly divisible", note: "Some thinkers have suggested this. If space comes in tiny chunks, the steps run out." },
      ],
    },
  ],
  recall: [
    {
      question: "In Zeno's story, who does Achilles race?",
      options: ["A hare", "A horse", "A tortoise", "A snail"],
      answer: 2,
    },
    {
      question: "In the dichotomy, why does it seem you can never arrive?",
      options: [
        "The wall keeps moving away",
        "The halfway points never end",
        "You slow down at each step",
        "Each step is longer than the last",
      ],
      answer: 1,
    },
    {
      question: "How does modern math answer Zeno?",
      options: [
        "Achilles is slower than we think",
        "Time pauses at each halfway point",
        "An endless sum can be finite",
        "Motion really is an illusion",
      ],
      answer: 2,
    },
  ],
  sources: [{ label: "Zeno's paradoxes (Wikipedia)", url: "https://en.wikipedia.org/wiki/Zeno%27s_paradoxes" }],
}
