import type { Thought } from "../types"

export const newcombsParadox: Thought = {
  slug: "newcombs-paradox",
  title: "Newcomb's Paradox",
  category: "curious",
  emoji: "📦",
  hook: "One box or two? Almost everyone finds the answer obvious. The trouble is, they don't agree on it.",
  body: [
    "Two boxes sit in front of you. Box A is clear and holds $1,000. Box B is closed. You may take both boxes or only box B. The catch: a **predictor** with a near-perfect track record has already guessed what you'll do. If it guessed \"only B\", it put $1,000,000 inside. If it guessed \"both\", box B is empty.",
    "One-boxers point to the results. People who take only B nearly always walk away millionaires, while two-boxers get $1,000. On **expected value**, one box wins easily. Two-boxers reply that the money is already in place and can't move. Whatever B holds, taking A too gets you $1,000 more. This is the **dominance** argument.",
    "Robert Nozick, who first published the puzzle in 1969, noticed that people \"divide almost evenly\", with each side thinking the other is \"just being silly.\" Little has changed. In the 2020 **PhilPapers survey** of professional philosophers, two-boxers were the biggest group, but neither side came close to a majority.",
  ],
  takeaway: "Two sensible rules for choosing can point in opposite directions: do what usually pays off, and never turn down free money.",
  facts: [
    {
      q: "Who invented it?",
      a: "William Newcomb, a physicist at the Lawrence Livermore lab, around 1960. He was the great-grandnephew of Simon Newcomb, the astronomer who first spotted Benford's law.",
    },
    {
      q: "What did Nozick himself choose?",
      a: "It depended. He backed one box if the predictor is truly never wrong, and two boxes if it's merely very, very good.",
    },
    {
      q: "Why do AI researchers care?",
      a: "Some argue a smart agent should one-box, and have proposed new decision theories that recommend it. How an AI handles predictions about itself turns out to matter.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "The predictor has been right in all of its last 1,000 games. What do you take?",
      options: [
        { text: "Only box B", note: "You're a one-boxer: judge a choice by how it tends to turn out. Expect to leave a millionaire." },
        { text: "Both boxes", note: "You're a two-boxer: your choice can't change what's already in the box, so take the extra $1,000." },
        { text: "It depends how the predictor works", note: "A serious view. If something links your choice to the box, like a hidden trapdoor, one box is clearly right." },
      ],
    },
    {
      type: "estimate",
      question: "In the 2020 PhilPapers survey, what share of professional philosophers said to take both boxes?",
      min: 0,
      max: 100,
      step: 1,
      answer: 39,
      tolerance: 6,
      unit: "%",
      explain: "39% chose two boxes and 31% chose one. The other 30% were undecided or gave another answer, so neither side had a majority.",
    },
  ],
  recall: [
    {
      question: "In Newcomb's paradox, what is in the clear box?",
      options: ["$1,000,000", "Nothing at all", "$1,000", "The predictor's guess"],
      answer: 2,
    },
    {
      question: "What is the two-boxers' main argument?",
      options: [
        "The predictor is usually wrong",
        "The contents are already fixed",
        "Box B is empty for most people",
        "Taking one box looks too greedy",
      ],
      answer: 1,
    },
    {
      question: "How do professional philosophers split on the problem?",
      options: [
        "Nearly all choose one box",
        "Nearly all choose both boxes",
        "Most say it can't be answered",
        "Divided, with no clear majority",
      ],
      answer: 3,
    },
  ],
  sources: [{ label: "Newcomb's problem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Newcomb%27s_problem" }],
}
