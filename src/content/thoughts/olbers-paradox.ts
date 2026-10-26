import type { Thought } from "../types"

export const olbersParadox: Thought = {
  slug: "olbers-paradox",
  title: "Olbers' Paradox",
  category: "space",
  emoji: "🌌",
  hook: "If the universe is full of stars, why is the night sky dark?",
  body: [
    "Imagine space going on forever, evenly filled with stars that have always been shining. Then every line of sight from your eye would end on a star, and the whole night sky would glow as bright as a star's surface. Yet it's dark. This puzzle is called **Olbers' paradox**, after the German astronomer Heinrich Olbers, who wrote about it in 1823.",
    "Distance doesn't get you out of it. Faraway stars look dimmer, but there are many more of them, and the two effects **cancel out**. So the answer has to be something else.",
    "The main answer is **time**. The universe is about 13.8 billion years old, so light from very distant stars hasn't had time to reach us, and stars haven't been shining forever. The **expansion of the universe** helps too: it stretches distant light to longer wavelengths our eyes can't see.",
  ],
  takeaway: "The night sky is dark because the universe has a finite age and is expanding.",
  facts: [
    {
      q: "Was it named after the right person?",
      a: "Not really. Others, including Johannes Kepler in 1610, raised the puzzle long before Olbers did.",
    },
    {
      q: "Who first guessed the answer?",
      a: "The writer Edgar Allan Poe. In his 1848 essay Eureka, he suggested light from the most distant stars hasn't reached us yet.",
    },
    {
      q: "Is the sky really dark in every direction?",
      a: "Not quite. It glows everywhere with leftover light from the Big Bang, stretched into microwaves our eyes can't see.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Why can't distance alone explain the dark sky?",
      options: [
        "Distant stars are just as bright",
        "More stars make up for dimmer ones",
        "Light never fades with distance",
        "Faraway stars are much bigger",
      ],
      answer: 1,
      explain: "A shell of stars twice as far away looks a quarter as bright per star but holds four times as many stars.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "In an endless, unchanging universe full of stars, the night sky would be bright.",
          answer: true,
          explain: "Every direction would end on a star, so the whole sky would shine.",
        },
        {
          text: "Dust between the stars solves the paradox by blocking the light.",
          answer: false,
          explain: "Over enough time, the dust would soak up so much light that it would heat up and glow too.",
        },
        {
          text: "Stars have been shining for as long as the universe has existed.",
          answer: false,
          explain: "The first stars took tens of millions of years or more to form after the Big Bang, and every star burns out eventually.",
        },
      ],
    },
    {
      type: "order",
      prompt: "Put these events in order, earliest first",
      items: [
        { text: "Johannes Kepler raises the puzzle", detail: "1610" },
        { text: "Heinrich Olbers writes about it", detail: "1823" },
        { text: "Edgar Allan Poe guesses part of the answer", detail: "1848" },
        { text: "The Big Bang's leftover glow is discovered", detail: "1965" },
      ],
      explain: "The puzzle took centuries to solve, and the full answer needed modern cosmology.",
    },
  ],
  recall: [
    {
      question: "What does Olbers' paradox ask?",
      options: ["Why the night sky is dark", "Why stars twinkle at night", "Why the Moon has phases", "Why the sky is blue by day"],
      answer: 0,
    },
    {
      question: "What is the main reason the night sky is dark?",
      options: [
        "Stars are spread too thinly",
        "The universe has a finite age",
        "Dust blocks most starlight",
        "Our eyes filter out faint light",
      ],
      answer: 1,
    },
    {
      question: "What does the expansion of the universe do to distant light?",
      options: [
        "Makes it brighter and bluer",
        "Bends it around galaxies",
        "Stretches its wavelengths",
        "Speeds it up a little",
      ],
      answer: 2,
    },
  ],
  sources: [{ label: "Olbers' paradox (Wikipedia)", url: "https://en.wikipedia.org/wiki/Olbers%27_paradox" }],
}
