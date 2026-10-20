import type { Thought } from "../types"

export const fermiParadox: Thought = {
  slug: "fermi-paradox",
  title: "The Fermi Paradox",
  category: "space",
  emoji: "👽",
  hook: "The galaxy is huge and ancient. So where is everybody?",
  body: [
    "In 1950, over lunch at Los Alamos, physicist **Enrico Fermi** was chatting about UFOs when he suddenly asked: \"But where is everybody?\"",
    "The puzzle: the Milky Way has **hundreds of billions of stars**, many with planets, and it's over 13 billion years old. Even slow spaceships could cross it in a few million years. If intelligent life were common, someone should have shown up by now.",
    "Yet we see no signals, no probes, no visitors. That gap between \"should be everywhere\" and \"seen nowhere\" is the **Fermi paradox**. Maybe life is rare, maybe civilizations destroy themselves, or maybe they're hiding.",
  ],
  takeaway: "If aliens should be common, their total absence is a clue. We just don't know to what.",
  facts: [
    {
      q: "What is the Drake equation?",
      a: "A 1961 formula by Frank Drake that multiplies guesses (stars, planets, chance of life...) to estimate how many civilizations might be out there.",
    },
    {
      q: "What is the Great Filter?",
      a: "Economist Robin Hanson's idea that some step, from first life to space travel, is so hard almost nobody makes it. The scary part: is it behind us or ahead?",
    },
    {
      q: "How long have we been listening?",
      a: "Serious radio searches began in 1960 with Frank Drake's Project Ozma. A blink in cosmic time.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question:
        "A ship at 1% of light speed sets off across the Milky Way (about 100,000 light-years). How long does the trip take?",
      min: 1,
      max: 100,
      step: 1,
      answer: 10,
      tolerance: 2,
      unit: "million years",
      explain:
        "About 10 million years. The galaxy is over 13 billion years old, so there's been time to cross it more than a thousand times.",
    },
    {
      type: "match",
      prompt: "Match each possible answer to the paradox with its idea",
      pairs: [
        ["Rare Earth", "Complex life is extremely unlikely"],
        ["Great Filter", "Some step stops almost everyone"],
        ["Zoo hypothesis", "They watch but don't interfere"],
        ["Dark forest", "Everyone hides because contact is dangerous"],
      ],
    },
    {
      type: "poll",
      question: "Which answer do you find most convincing?",
      options: [
        { text: "Life is just very rare", note: "The Rare Earth view. Simple life may be common, but complex life needs a lot of luck." },
        { text: "Civilizations destroy themselves", note: "A grim Great Filter ahead of us. Let's hope not." },
        { text: "They're out there, hiding", note: "The dark forest view, made famous by Liu Cixin's sci-fi novels." },
        { text: "We haven't looked long enough", note: "Fair point. We've searched a tiny slice of the sky for about 65 years." },
      ],
    },
  ],
  recall: [
    {
      question: "What did Enrico Fermi famously ask?",
      options: ["Are we alone?", "Where is everybody?", "Is anybody listening?", "Why is the night sky dark?"],
      answer: 1,
    },
    {
      question: "What is the \"Great Filter\"?",
      options: [
        "A telescope that blocks starlight",
        "A step so hard almost no civilization gets past it",
        "A law against contacting aliens",
        "The edge of the galaxy",
      ],
      answer: 1,
    },
    {
      question: "Why is the silence of aliens a paradox?",
      options: [
        "Aliens were found but won't talk",
        "The galaxy is so big and old that someone should have shown up",
        "Radio waves can't travel through space",
        "Stars are too far apart to have planets",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Fermi paradox (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fermi_paradox" }],
}
