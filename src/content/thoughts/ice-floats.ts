import type { Thought } from "../types"

export const iceFloats: Thought = {
  slug: "ice-floats",
  title: "Why Ice Floats",
  category: "science",
  emoji: "🧊",
  hook: "Most solids sink in their own liquid. Ice doesn't, and life on Earth depends on it.",
  body: [
    "For most substances, the solid is denser than the liquid, so it sinks. Water is an odd one out. When it freezes, it **expands** by about 9%, so ice weighs less than the same amount of space filled with water, and it floats.",
    "The reason is **hydrogen bonds**, the pull that sticks water molecules to each other. In liquid water, the molecules tumble around and pack closely. As water freezes, they lock into an open, six-sided pattern with lots of empty space.",
    "This matters for life. Ice forms on top of lakes and acts like a lid that **insulates** the water below. Liquid water is densest at about **4 °C**, so that water sinks, and the bottom of a deep lake stays near 4 °C all winter. If ice sank instead, lakes could freeze from the bottom up.",
  ],
  takeaway: "Water spreads out when it freezes, so ice floats and shields the life beneath it.",
  facts: [
    {
      q: "Why do snowflakes have six sides?",
      a: "Because water molecules in ice lock into a six-sided pattern. The flake's shape grows from that tiny structure.",
    },
    {
      q: "Why do water pipes burst in winter?",
      a: "Freezing water expands with enough force to split pipes. The same push slowly cracks rocks and roads.",
    },
    {
      q: "Is water the only substance that does this?",
      a: "No, but it's rare. Silicon, gallium and bismuth also expand when they freeze.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "About what percent of an iceberg sits below the sea surface?",
      min: 0,
      max: 100,
      step: 1,
      answer: 90,
      tolerance: 4,
      unit: "%",
      explain: "About 90%. Ice is only a little less dense than seawater, so it floats low. Hence \"the tip of the iceberg\".",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "A glass filled to the brim with ice water overflows as the ice melts.",
          answer: false,
          explain: "Floating ice already pushes aside its own weight in water. When it melts, it fills exactly that space.",
        },
        {
          text: "Most substances are denser as solids than as liquids.",
          answer: true,
          explain: "That's what makes water unusual. A lump of solid wax, for example, sinks in melted wax.",
        },
        {
          text: "Lakes freeze from the top down.",
          answer: true,
          explain: "Ice forms at the surface and stays there, sealing in the liquid water below.",
        },
      ],
    },
    {
      type: "match",
      prompt: "Match the temperature to what happens to water",
      pairs: [
        ["100 °C", "Pure water boils at sea level"],
        ["4 °C", "Liquid water is at its densest"],
        ["0 °C", "Fresh water freezes"],
        ["About -2 °C", "Typical seawater freezes"],
      ],
    },
  ],
  recall: [
    {
      question: "Why does ice float on water?",
      options: ["Air bubbles keep it afloat", "It's less dense than water", "Cold things always float up", "Its surface repels water"],
      answer: 1,
    },
    {
      question: "What holds ice molecules in their open, spacious pattern?",
      options: ["Trapped air", "Salt crystals", "Hydrogen bonds", "Magnetic forces"],
      answer: 2,
    },
    {
      question: "How does floating ice help fish survive winter?",
      options: [
        "It adds oxygen to the lake",
        "It insulates the water below",
        "It lets more sunlight in",
        "It makes the lake water saltier",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Ice (Wikipedia)", url: "https://en.wikipedia.org/wiki/Ice" }],
}
