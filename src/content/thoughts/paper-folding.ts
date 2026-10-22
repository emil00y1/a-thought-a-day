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
      question: "How many times would you need to fold a 0.1 mm sheet of paper for it to reach the Moon?",
      min: 1,
      max: 100,
      step: 1,
      answer: 42,
      tolerance: 3,
      unit: "folds",
      explain: "Just 42. Doubling 42 times turns 0.1 mm into about 440,000 km.",
    },
    {
      type: "match",
      prompt: "Match the number of folds to how tall the paper would be",
      pairs: [
        ["10 folds", "About 10 cm"],
        ["20 folds", "Taller than a 30-story building"],
        ["30 folds", "Reaches into space"],
        ["42 folds", "Past the Moon"],
      ],
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
