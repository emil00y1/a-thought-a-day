import type { Thought } from "../types"

export const dunningKruger: Thought = {
  slug: "dunning-kruger",
  title: "The Dunning-Kruger Effect",
  category: "research",
  emoji: "📈",
  hook: "Why the people who know least are often the most confident.",
  body: [
    "In 1999, psychologists **David Dunning** and **Justin Kruger** tested people on logic, grammar and humor, then asked how well they thought they'd done. The bottom quarter of scorers had beaten only about **12%** of others on average, yet guessed they'd beaten about **62%**.",
    "Their explanation: the skills you need to do something well are often the same skills you need to **notice** you're doing it badly. Meanwhile, the best performers slightly **underrated** themselves, assuming the test was easy for everyone.",
    "The internet turned it into a graph with a confident \"Mount Stupid\" peak. That curve isn't in the paper, and some researchers argue part of the effect is a statistical quirk. The core lesson still holds: feeling sure isn't the same as being right.",
  ],
  takeaway: "When we lack a skill, we often also lack the ability to see that we lack it.",
  facts: [
    {
      q: "What inspired the study?",
      a: "A 1995 bank robber who rubbed lemon juice on his face, believing it made him invisible to security cameras. It didn't.",
    },
    {
      q: "Is the \"Mount Stupid\" graph real?",
      a: "No. The popular curve of confidence spiking and crashing is an internet invention, not data from the study.",
    },
    {
      q: "Does it only affect other people?",
      a: "No. Everyone is a beginner at something, and that's exactly where we're most likely to overrate ourselves.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "The bottom quarter had beaten only 12% of others. What share did they think they'd beaten?",
      min: 0,
      max: 100,
      step: 1,
      answer: 62,
      tolerance: 8,
      unit: "%",
      explain: "About 62%. They thought they were above average.",
    },
    {
      type: "choice",
      question: "Why do beginners often overrate themselves, according to Dunning and Kruger?",
      options: [
        "They want to impress the researchers",
        "Seeing mistakes needs the skill they lack",
        "They assume the test was easy for everyone",
        "They don't care how they score",
      ],
      answer: 1,
      explain: "They call it a double burden: you make mistakes, and you can't see them.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "The best performers overrated themselves the most.",
          answer: false,
          explain: "They slightly underrated themselves.",
        },
        {
          text: "The famous \"Mount Stupid\" graph comes from the original paper.",
          answer: false,
          explain: "It's an internet invention.",
        },
        {
          text: "Some researchers think part of the effect is a statistical artifact.",
          answer: true,
          explain: "The debate is ongoing, but the basic pattern shows up often.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What is the Dunning-Kruger effect?",
      options: [
        "Beginners often overrate their own skill",
        "Experts usually overrate their own ability",
        "Groups make worse choices than individuals",
        "Acting confident makes you more skilled",
      ],
      answer: 0,
    },
    {
      question: "How did the top performers in Dunning and Kruger's study rate themselves?",
      options: ["Much too high", "A bit too low", "Exactly right", "Much too low"],
      answer: 1,
    },
    {
      question: "What inspired the Dunning-Kruger study?",
      options: [
        "A chess player sure he was unbeatable",
        "A bank robber's lemon juice disguise",
        "Students sure they had aced a test",
        "A quiz show player who bet it all",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Dunning–Kruger effect (Wikipedia)", url: "https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect" }],
}
