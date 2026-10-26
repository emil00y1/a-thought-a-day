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
      type: "choice",
      question: "An octopus pushes an arm deep into a dark crack, where its eyes can't see. What is most likely to happen?",
      options: [
        "The arm stops until the eyes can see it",
        "The arm finds and tastes food on its own",
        "The brain must check each touch first",
        "The arm can feel things but not taste them",
      ],
      answer: 1,
      explain:
        "With about two-thirds of the neurons in the arms, and suckers full of taste sensors, each arm can explore and react partly on its own.",
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
          text: "Since most octopuses are colorblind, they can't blend in with colorful coral.",
          answer: false,
          explain: "They blend in very well anyway, matching brightness, pattern and texture. How they manage it without color vision is still being studied.",
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
