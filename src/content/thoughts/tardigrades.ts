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
    "But they're not invincible. Awake and active, they're much more fragile. Their trick isn't being tough all the time, it's knowing how to **pause**.",
  ],
  takeaway: "Tardigrades survive the impossible by pausing life and waiting for better times.",
  facts: [
    {
      q: "Have they really survived space?",
      a: "Yes. In 2007, dried tardigrades rode outside a spacecraft in orbit for 10 days. Many survived the vacuum, and some even survived harsh solar radiation.",
    },
    {
      q: "How long can they stay paused?",
      a: "In 2016, Japanese scientists reported reviving tardigrades from Antarctic moss that had been kept frozen for 30 years.",
    },
    {
      q: "Are there tardigrades on the Moon?",
      a: "Probably. In 2019, the Israeli lander Beresheet crashed on the Moon carrying thousands of dried tardigrades. They likely didn't survive the crash.",
    },
  ],
  activities: [
    {
      type: "choice",
      question:
        "In moss that dried out over the summer, a biologist finds a tiny, lifeless-looking ball. How could she tell if it's a living tardigrade?",
      options: [
        "Warm it under a strong lamp",
        "Add a drop of water and wait",
        "Watch it for an hour for movement",
        "Feed it some fresh, green moss",
      ],
      answer: 1,
      explain:
        "A dried tardigrade is a tun, paused until water returns. Add water and a living one soon uncurls and starts walking. Heat could kill it, and a tun won't move or eat on its own.",
    },
    {
      type: "choice",
      question: "What's the tardigrade's main survival trick?",
      options: [
        "A thick, armored outer shell",
        "Drying out into a paused ball",
        "Living inside other animals",
        "Laying eggs that survive anything",
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
          text: "A tardigrade scooped from a puddle, still active, would have a good chance of surviving space.",
          answer: false,
          explain: "Awake, they're much more fragile. The space survivors were dried into tuns first.",
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
      options: ["Only in labs on Earth", "The vacuum of space", "Inside volcanoes", "On the surface of Mars"],
      answer: 1,
    },
  ],
  sources: [{ label: "Tardigrade (Wikipedia)", url: "https://en.wikipedia.org/wiki/Tardigrade" }],
}
