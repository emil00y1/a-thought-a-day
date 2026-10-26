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
      a: "In interstellar space since 2012, so far away that by 2026 its radio signals took almost a full day to reach us.",
    },
    {
      q: "Was it a single photo?",
      a: "No. It's one of 60 frames in a \"Family Portrait\" of the solar system, showing six of the planets.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question:
        "Radio signals take about 24 hours to travel 26 billion km. Voyager 1 was about 6 billion km away when it took the photo. About how long did its signal take to get home?",
      min: 0,
      max: 24,
      step: 0.5,
      answer: 5.5,
      tolerance: 1,
      unit: "hours",
      explain: "6 is a bit less than a quarter of 26, so a bit less than a quarter of 24 hours: about 5.5 hours.",
    },
    {
      type: "order",
      prompt: "Closest first: order these by distance from Earth",
      items: [
        { text: "The Moon", detail: "384,000 km" },
        { text: "The Sun", detail: "150 million km" },
        { text: "Neptune", detail: "~4.5 billion km" },
        { text: "Voyager 1 in 1990", detail: "~6 billion km" },
        { text: "Voyager 1 in 2026", detail: "~26 billion km" },
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "If Voyager 1 took the same photo today, from about four times farther away, Earth would look bigger.",
          answer: false,
          explain: "The farther away something is, the smaller it looks. Earth would be an even tinier fraction of a pixel.",
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
