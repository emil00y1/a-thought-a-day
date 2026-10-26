import type { Thought } from "../types"

export const aDayOnVenus: Thought = {
  slug: "a-day-on-venus",
  title: "A Day on Venus",
  category: "space",
  emoji: "🪐",
  hook: "On Venus, one turn of the planet takes longer than a whole trip around the Sun.",
  body: [
    "Most planets, including Earth, spin in the same direction they travel around the Sun. Venus spins the other way. This backward spin is called **retrograde rotation**, and nobody knows for sure why it happens. Ideas include a giant collision long ago, or the Sun tugging on Venus's thick atmosphere over billions of years.",
    "Venus also spins very slowly. One full turn, measured against the distant stars, takes about **243 Earth days**. But one trip around the Sun, a **Venus year**, takes only about 225 Earth days. So one spin of Venus lasts longer than its year.",
    "There's a twist. Because Venus spins backward while it moves along its orbit, the two motions partly add up. The time from one sunrise to the next, called a **solar day**, is about 117 Earth days, roughly half a Venus year.",
  ],
  takeaway: "Venus spins backward, and so slowly that one full turn takes longer than its year.",
  facts: [
    {
      q: "How did we learn how fast Venus spins?",
      a: "With radar in the 1960s. Thick clouds hide the surface, so telescopes couldn't simply watch it turn.",
    },
    {
      q: "Is Venus the only planet that spins backward?",
      a: "Not quite. Uranus is tipped so far over, about 98 degrees, that its spin also counts as backward.",
    },
    {
      q: "Do we know the exact length of its spin?",
      a: "Not to the minute. Measurements taken years apart differ by about 6.5 minutes, so its spin may slightly change over time.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Unlike Venus, Earth spins the same way it travels around the Sun. So compared with one spin measured against the stars, Earth's sunrise-to-sunrise day is...",
      options: [
        "A few minutes shorter",
        "A few minutes longer",
        "Exactly the same length",
        "About half as long",
      ],
      answer: 1,
      explain: "On Venus the backward spin and the orbit add up, so its solar day is shorter. On Earth they work against each other. As Earth moves along its orbit, it has to turn a little extra to face the Sun again: one spin takes about 23 hours 56 minutes, but sunrise to sunrise is 24 hours.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "If you stood on Venus, the Sun would rise in the west.",
          answer: true,
          explain: "Because Venus spins the opposite way to Earth, the Sun crosses its sky from west to east.",
        },
        {
          text: "Scientists know exactly why Venus spins backward.",
          answer: false,
          explain: "It's still debated. A huge ancient impact and the pull of the Sun on its heavy atmosphere are both possible causes.",
        },
        {
          text: "Venus's cloud tops race around the planet far faster than its surface turns.",
          answer: true,
          explain: "Winds of about 300 km/h carry the clouds all the way around in about 4 Earth days.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What is unusual about the direction Venus spins?",
      options: [
        "It spins on its side",
        "It spins the opposite way",
        "It doesn't spin at all",
        "It keeps one face to the Sun",
      ],
      answer: 1,
    },
    {
      question: "On Venus, which takes longer?",
      options: [
        "One trip around the Sun",
        "They take exactly the same time",
        "One full spin of the planet",
        "One sunrise to the next",
      ],
      answer: 2,
    },
    {
      question: "Why is a Venus solar day shorter than one full spin?",
      options: [
        "Its clouds block part of the night",
        "Its orbit slowly speeds the spin up",
        "Its thick air bends the sunlight",
        "Its backward spin and orbit add up",
      ],
      answer: 3,
    },
  ],
  sources: [{ label: "Venus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Venus" }],
}
