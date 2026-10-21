import type { Thought } from "../types"

export const tardigrades: Thought = {
  slug: "tardigrades",
  title: "Tardigrades",
  category: "facts",
  emoji: "🐻",
  hook: "A half-millimeter animal that has survived the vacuum of space.",
  body: [
    "Tardigrades, or **water bears**, are animals about half a millimeter long, with eight stubby legs and a chubby body. They live almost everywhere: in moss, on mountains, in the deep sea and in Antarctica.",
    "Their superpower is drying out. When their home dries up, they curl into a lifeless-looking ball called a **tun** and almost stop their metabolism. In this state they've survived extreme cold, crushing pressure and even the **vacuum of space**.",
    "But they're not invincible. Awake and active, they're quite fragile. Their trick isn't being tough all the time, it's knowing how to **pause**.",
  ],
  takeaway: "Tardigrades survive the impossible by pausing life and waiting for better times.",
  facts: [
    {
      q: "Have they really survived space?",
      a: "Yes. In 2007, dried tardigrades rode outside a spacecraft in orbit for 10 days. Many survived the vacuum, and some even survived harsh solar radiation.",
    },
    {
      q: "How long can they stay paused?",
      a: "In 2016, Japanese scientists revived tardigrades that had been frozen in Antarctic moss for 30 years.",
    },
    {
      q: "Are there tardigrades on the Moon?",
      a: "Probably. In 2019, the Israeli lander Beresheet crashed on the Moon carrying thousands of dried tardigrades.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "How long is a typical tardigrade?",
      min: 0,
      max: 5,
      step: 0.1,
      answer: 0.5,
      tolerance: 0.2,
      unit: "mm",
      explain: "About half a millimeter. Just big enough to see as a tiny dot.",
    },
    {
      type: "choice",
      question: "What's the tardigrade's main survival trick?",
      options: [
        "A thick armored shell",
        "Drying out into a paused state called a tun",
        "Living inside other animals",
        "Glowing to scare off predators",
      ],
      answer: 1,
      explain: "As a tun, a tardigrade can wait out conditions that would kill it when active.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Tardigrades are insects.",
          answer: false,
          explain: "They're their own group of animals, distant cousins of insects.",
        },
        {
          text: "Dried tardigrades have survived the vacuum of space.",
          answer: true,
          explain: "On a 2007 mission, many survived 10 days exposed in orbit.",
        },
        {
          text: "Active tardigrades can survive almost anything.",
          answer: false,
          explain: "Awake, they're fragile. Their toughness comes from the dried-out tun state.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What is a tardigrade's dried-out, paused state called?",
      options: ["A tun", "A cocoon", "A spore", "A shell"],
      answer: 0,
    },
    {
      question: "What is the common nickname for tardigrades?",
      options: ["Moss ants", "Water bears", "Space mites", "Ice worms"],
      answer: 1,
    },
    {
      question: "Where have dried tardigrades survived?",
      options: ["Only in labs on Earth", "The vacuum of space", "Inside volcanoes", "On the Sun's surface"],
      answer: 1,
    },
  ],
  sources: [{ label: "Tardigrade (Wikipedia)", url: "https://en.wikipedia.org/wiki/Tardigrade" }],
}
