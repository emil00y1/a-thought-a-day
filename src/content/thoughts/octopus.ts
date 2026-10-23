import type { Thought } from "../types"

export const octopus: Thought = {
  slug: "octopus",
  title: "The Octopus Mind",
  category: "facts",
  emoji: "🐙",
  hook: "Three hearts, blue blood, and arms that think for themselves.",
  body: [
    "The octopus is a **mollusk**, related to snails and clams, yet it's one of the smartest animals in the sea. Octopuses open jars, escape tanks and even carry coconut shells around as portable shelters.",
    "Its body is wonderfully strange. It has **three hearts** and **blue blood**, which uses copper instead of iron to carry oxygen. About **two-thirds of its neurons** are in its arms, so each arm can touch, taste and react partly on its own.",
    "It can change color and texture in a fraction of a second, even though most species are thought to be **colorblind**. And it does all this in a short life: most octopuses live only one to two years.",
  ],
  takeaway: "An octopus thinks with its whole body: three hearts, blue blood and smart arms.",
  facts: [
    {
      q: "Octopi or octopuses?",
      a: "Both are in dictionaries, but \"octopuses\" is the standard. \"Octopi\" treats the Greek word as if it were Latin.",
    },
    {
      q: "Why three hearts?",
      a: "Two pump blood through the gills, and one pumps it around the rest of the body.",
    },
    {
      q: "Can they taste with their arms?",
      a: "Yes. Their suckers are packed with chemical sensors, so touching is also tasting.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "What share of an octopus's neurons are in its arms?",
      min: 0,
      max: 100,
      step: 1,
      answer: 66,
      tolerance: 8,
      unit: "%",
      explain: "About two-thirds. Each arm handles a lot of its own decisions.",
    },
    {
      type: "match",
      prompt: "Match the body part to its fact",
      pairs: [
        ["Hearts", "There are three of them"],
        ["Blood", "Blue, thanks to copper"],
        ["Arms", "Hold most of the neurons"],
        ["Skin", "Changes color in a flash"],
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Octopuses are closely related to fish.",
          answer: false,
          explain: "They're mollusks, much closer to snails and clams.",
        },
        {
          text: "Most octopuses live only one to two years.",
          answer: true,
          explain: "Smart, but short-lived. Many die soon after breeding.",
        },
        {
          text: "The word \"octopus\" is originally Latin.",
          answer: false,
          explain: "It's originally Greek, meaning \"eight feet\". That's why \"octopuses\" is the standard plural, not \"octopi\".",
        },
      ],
    },
  ],
  recall: [
    {
      question: "How many hearts does an octopus have?",
      options: ["One", "Two", "Three", "Eight"],
      answer: 2,
    },
    {
      question: "Why is octopus blood blue?",
      options: [
        "It uses copper instead of iron",
        "It lives in cold, deep water",
        "It carries no oxygen at all",
        "It reflects the color of the sea",
      ],
      answer: 0,
    },
    {
      question: "Where are most of an octopus's neurons?",
      options: ["In its brain", "In its arms", "In its hearts", "In its skin"],
      answer: 1,
    },
  ],
  sources: [{ label: "Octopus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Octopus" }],
}
