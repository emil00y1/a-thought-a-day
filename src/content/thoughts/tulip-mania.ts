import type { Thought } from "../types"

export const tulipMania: Thought = {
  slug: "tulip-mania",
  title: "Tulip Mania",
  category: "history",
  emoji: "🌷",
  hook: "The famous 1630s bubble, and why the real story is smaller than the legend.",
  body: [
    "In the 1630s, tulips were the hottest luxury in the Dutch Republic. The rarest had flamed, striped petals, and their bulbs became objects of wild speculation. In early 1637, a single rare bulb could be valued like a **fine house**.",
    "People traded bulbs that were still in the ground, on paper, often in taverns. Then in **February 1637**, buyers suddenly stopped showing up. Prices collapsed within weeks.",
    "The famous version, with ruined families and a crashed economy, comes mostly from an **1841 book**. Historians now think the mania involved a fairly small group of traders and did little lasting damage. It's still the classic tale of a **bubble**, just an exaggerated one.",
  ],
  takeaway: "Tulip mania was a real bubble, but the legend of national ruin is exaggerated.",
  facts: [
    {
      q: "What made striped tulips so special?",
      a: "A virus! It caused the flame-like stripes but also weakened the bulbs, making them rare and slow to multiply.",
    },
    {
      q: "Where do the wild stories come from?",
      a: "Charles Mackay's 1841 book on \"popular delusions\", which repeated colorful tales, like a sailor eating a precious bulb thinking it was an onion.",
    },
    {
      q: "What did traders call it?",
      a: "Windhandel, \"wind trade\", because they traded bulbs they didn't have yet, often with money they didn't have either.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "What caused the prized flame-like stripes on tulips?",
      options: ["Careful breeding", "A virus", "Special soil", "Paint"],
      answer: 1,
      explain: "The tulip breaking virus, spread by tiny insects. Beautiful, but bad for the plant.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Tulip prices crashed in February 1637.",
          answer: true,
          explain: "Buyers stopped showing up, and prices fell within weeks.",
        },
        {
          text: "Tulip mania ruined the Dutch economy.",
          answer: false,
          explain: "Historians have found little evidence of lasting economic damage.",
        },
        {
          text: "People traded bulbs that were still in the ground.",
          answer: true,
          explain: "Contracts for future bulbs changed hands, often several times.",
        },
      ],
    },
    {
      type: "poll",
      question: "Which modern craze feels most like tulip mania to you?",
      options: [
        { text: "Crypto coins", note: "A common comparison: prices driven by what the next buyer will pay." },
        { text: "NFTs", note: "Digital tulips? Trading in many of them collapsed after 2022." },
        { text: "Housing prices", note: "Housing bubbles happen, but unlike a bulb, you can live in a house." },
        { text: "Sneakers and trading cards", note: "Collectors' markets boom and bust too, often on rarity alone." },
      ],
    },
  ],
  recall: [
    {
      question: "When did the tulip bubble burst?",
      options: ["1637", "1720", "1929", "1600"],
      answer: 0,
    },
    {
      question: "What do historians now say about tulip mania?",
      options: [
        "It destroyed the Dutch economy",
        "It was real but smaller and less damaging than the legend",
        "It never happened",
        "It lasted 50 years",
      ],
      answer: 1,
    },
    {
      question: "What made striped tulips rare?",
      options: ["A virus", "A royal decree", "A cold winter", "Bees"],
      answer: 0,
    },
  ],
  sources: [{ label: "Tulip mania (Wikipedia)", url: "https://en.wikipedia.org/wiki/Tulip_mania" }],
}
