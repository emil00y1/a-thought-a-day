import type { Thought } from "../types"

export const birthdayParadox: Thought = {
  slug: "birthday-paradox",
  title: "The Birthday Paradox",
  category: "science",
  emoji: "🎂",
  hook: "How many people does it take for two to share a birthday? Far fewer than you think.",
  body: [
    "How many people do you need in a room for a **50% chance** that two of them share a birthday? Many people guess over 100. The real answer is just **23**.",
    "The trick is that it's not about **your** birthday. It's about **any pair**. With 23 people there are 253 possible pairs, and each one is a chance for a match.",
    "At 70 people, a match is 99.9% certain. Our brains think in single cases, not combinations, so coincidences that feel spooky are often just **likely**.",
  ],
  takeaway: "Coincidences are more likely than they feel, because there are so many possible pairs.",
  facts: [
    {
      q: "How many people to match YOUR birthday?",
      a: "For a 50% chance that someone shares your birthday, you need about 253 people. Very different from 23.",
    },
    {
      q: "Does it work in real life?",
      a: "Yes. At the 2014 World Cup, half of the 32 squads of 23 players had at least one shared birthday.",
    },
    {
      q: "Where does it matter?",
      a: "In computer security. \"Birthday attacks\" use the same math to find two different inputs that scramble into the same code.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "How many people do you need for a 50% chance that two share a birthday?",
      min: 2,
      max: 366,
      step: 1,
      answer: 23,
      tolerance: 3,
      unit: "people",
      explain: "Just 23. With 23 people there are already 253 pairs.",
    },
    {
      type: "choice",
      question: "Why is the number so low?",
      options: [
        "Birthdays cluster in the summer months",
        "Any pair can match, not just you",
        "Everyone is compared to the same person",
        "Leap years add extra matches",
      ],
      answer: 1,
      explain: "Every pair is a chance, and the number of pairs grows much faster than the number of people.",
    },
    {
      type: "match",
      prompt: "Match the group size to the chance of a shared birthday",
      pairs: [
        ["10 people", "About 12%"],
        ["23 people", "About 50%"],
        ["50 people", "About 97%"],
        ["70 people", "99.9%"],
      ],
    },
  ],
  recall: [
    {
      question: "How many people for a 50% chance that two share a birthday?",
      options: ["23", "183", "365", "70"],
      answer: 0,
    },
    {
      question: "Why does the birthday paradox need so few people?",
      options: ["There are many possible pairs", "Birthdays aren't really random", "Twins are very common", "Leap years add extra matches"],
      answer: 0,
    },
    {
      question: "How many people for a 50% chance someone shares YOUR birthday?",
      options: ["About 23", "About 253", "About 183", "About 365"],
      answer: 1,
    },
  ],
  sources: [{ label: "Birthday problem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Birthday_problem" }],
}
