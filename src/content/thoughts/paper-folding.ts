import type { Thought } from "../types"

export const paperFolding: Thought = {
  slug: "paper-folding",
  title: "Fold Paper to the Moon",
  category: "curious",
  emoji: "📄",
  hook: "Fold a sheet of paper in half 42 times and it would reach the Moon.",
  body: [
    "Take a sheet of paper about 0.1 mm thick and fold it in half. Each fold **doubles** its thickness. That doesn't sound dramatic: after 10 folds, it's about 10 cm thick.",
    "But doubling runs away from you. After 20 folds the stack would be over 100 meters tall. After 30, it would reach **space**. After 42, it would pass **the Moon**.",
    "In reality you can't get far, because each fold also needs far more paper. But the lesson sticks: our brains expect steady growth, so **exponential growth** keeps surprising us, whether it's paper, savings or a spreading virus.",
  ],
  takeaway: "Doubling starts slow and then explodes. Our gut badly underestimates it.",
  facts: [
    {
      q: "Is 7 folds really the limit?",
      a: "No. In 2002, high school student Britney Gallivan folded a 1.2 km long roll of paper in half 12 times, and worked out the math of why it's so hard.",
    },
    {
      q: "How many folds to cross the universe?",
      a: "About 103. The stack would then be wider than the observable universe.",
    },
    {
      q: "Where else does doubling show up?",
      a: "Compound interest, viral videos, epidemics and computer chips. Small at first, then suddenly everywhere.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "After 20 folds, the stack is about 100 meters tall. About how tall is it after just 3 more folds?",
      min: 0,
      max: 3000,
      step: 50,
      answer: 800,
      tolerance: 100,
      unit: "meters",
      explain: "Three more doublings: 100 → 200 → 400 → 800. More exactly, about 840 m. Three folds take it from a tall building to about the height of the tallest skyscraper on Earth.",
    },
    {
      type: "choice",
      question: "Water lilies on a pond double in area every day. On day 30 they cover the whole pond. On which day did they cover half of it?",
      options: ["Day 15", "Day 20", "Day 29", "Day 25"],
      answer: 2,
      explain: "If it doubles each day, it was half the size one day earlier. On day 25 the lilies covered only about 3% of the pond, so most of the change happens at the very end.",
    },
    {
      type: "choice",
      question: "Option A: a million dollars today. Option B: 1 cent today, doubled every day for 30 days. Which is more?",
      options: ["Option A, the million dollars", "Option B, the doubling cent", "They're about the same"],
      answer: 1,
      explain: "Day 30 alone pays about $5.4 million, and the 30 days add up to over $10 million.",
    },
  ],
  recall: [
    {
      question: "About how many folds would a sheet of paper need to reach the Moon?",
      options: ["7", "42", "1,000", "1 million"],
      answer: 1,
    },
    {
      question: "Why does folded paper get so thick so fast?",
      options: [
        "Paper swells a bit with each fold",
        "Each fold doubles the thickness",
        "Air gets trapped between layers",
        "Each fold adds one more layer",
      ],
      answer: 1,
    },
    {
      question: "What did Britney Gallivan do in 2002?",
      options: [
        "Folded paper in half 12 times",
        "Proved 7 folds is the limit",
        "Made the world's thinnest paper",
        "Folded a sheet 42 times",
      ],
      answer: 0,
    },
  ],
  sources: [{ label: "Exponential growth (Wikipedia)", url: "https://en.wikipedia.org/wiki/Exponential_growth" }],
}
