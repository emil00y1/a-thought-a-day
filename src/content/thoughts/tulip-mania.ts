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
    "The famous version, with ruined families and a crashed economy, was spread mostly by an **1841 book**. Historians now think the mania involved a fairly small group of traders and did little lasting damage. It's still the classic tale of a **bubble**, just an exaggerated one.",
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
      question: "Which of these looks most like tulip mania?",
      options: [
        "Bread prices rise after a drought ruins the wheat",
        "People buy rare seeds only to resell them for more",
        "Umbrella prices jump on a rainy day at the beach",
        "A famous old painting slowly gains value over years",
      ],
      answer: 1,
      explain: "In a bubble, people buy mainly because they expect someone to pay more later, like the tavern bulb traders. The bread and umbrella prices have a real cause, and the painting rises slowly, not in a buying frenzy.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "A bubble like tulip mania needs a steady stream of new buyers willing to pay more.",
          answer: true,
          explain: "When people buy only to resell, prices keep rising only while new buyers keep coming. In February 1637 they stopped showing up, and prices collapsed within weeks.",
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
        { text: "NFTs", note: "Digital tulips? Trading in many of them collapsed in 2022." },
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
        "It wrecked the Dutch economy for decades",
        "It was real but smaller than the legend",
        "It was made up by an 1841 book",
        "It went on for about 50 years",
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
