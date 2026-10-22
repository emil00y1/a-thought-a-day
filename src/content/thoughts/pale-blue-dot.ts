import type { Thought } from "../types"

export const paleBlueDot: Thought = {
  slug: "pale-blue-dot",
  title: "The Pale Blue Dot",
  category: "space",
  emoji: "🌍",
  hook: "In 1990, a spacecraft looked back from 6 billion km. Earth was smaller than a pixel.",
  body: [
    "On 14 February 1990, the **Voyager 1** space probe was about **6 billion km** from home, heading out of the solar system. At the urging of astronomer **Carl Sagan**, NASA turned its camera around for one last look back.",
    "In the photo, Earth is a speck smaller than a single pixel, sitting in a streak of scattered sunlight. Everything that ever happened to every human who ever lived happened on that dot.",
    "Sagan called it the **Pale Blue Dot** and wrote: \"That's here. That's home. That's us.\" For him it was a lesson in humility, and a reason to be kinder to each other and to look after the only home we've ever known.",
  ],
  takeaway: "Seen from 6 billion km, all of human history fits on less than one pixel.",
  facts: [
    {
      q: "How small is Earth in the photo?",
      a: "About 0.12 of a pixel. You'd miss it if you didn't know where to look.",
    },
    {
      q: "Where is Voyager 1 now?",
      a: "In interstellar space since 2012, so far away that its radio signals take almost a full day to reach us.",
    },
    {
      q: "Was it a single photo?",
      a: "No. It's one of 60 frames in a \"Family Portrait\" of the solar system, showing six of the planets.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "How far from Earth was Voyager 1 when it took the photo?",
      min: 0,
      max: 20,
      step: 0.5,
      answer: 6,
      tolerance: 1,
      unit: "billion km",
      explain: "About 6 billion km, beyond the orbit of Neptune.",
    },
    {
      type: "order",
      prompt: "Closest first: order these by distance from Earth",
      items: [
        { text: "The Moon", detail: "384,000 km" },
        { text: "The Sun", detail: "150 million km" },
        { text: "Neptune", detail: "~4.5 billion km" },
        { text: "Voyager 1 in 1990", detail: "~6 billion km" },
        { text: "Voyager 1 today", detail: "~25 billion km" },
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "In the photo, Earth takes up less than one pixel.",
          answer: true,
          explain: "About 0.12 of a pixel.",
        },
        {
          text: "The Pale Blue Dot was Voyager's first photo of Earth.",
          answer: false,
          explain: "In 1977, just after launch, Voyager 1 photographed Earth and the Moon together.",
        },
        {
          text: "These were among the last pictures Voyager 1 ever took.",
          answer: true,
          explain: "Its cameras were switched off soon after to save power and memory.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What is the Pale Blue Dot?",
      options: [
        "A photo of Earth from Voyager 1",
        "A small blue star near the Sun",
        "A photo of Neptune from Voyager 2",
        "The first photo taken from the Moon",
      ],
      answer: 0,
    },
    {
      question: "Who pushed for the Pale Blue Dot photo to be taken?",
      options: ["Neil Armstrong", "Carl Sagan", "Stephen Hawking", "Edwin Hubble"],
      answer: 1,
    },
    {
      question: "How big is Earth in the Pale Blue Dot photo?",
      options: [
        "About a tenth of a pixel",
        "About half the frame",
        "A small but sharp blue circle",
        "About 100 pixels wide",
      ],
      answer: 0,
    },
  ],
  sources: [{ label: "Pale Blue Dot (Wikipedia)", url: "https://en.wikipedia.org/wiki/Pale_Blue_Dot" }],
}
