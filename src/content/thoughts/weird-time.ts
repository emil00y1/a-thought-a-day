import type { Thought } from "../types"

export const weirdTime: Thought = {
  slug: "weird-time",
  title: "Time Is Weirder Than It Feels",
  category: "curious",
  emoji: "⏳",
  hook: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid.",
  body: [
    "Our sense of the past gets squashed. Things that feel \"ancient\" seem to have happened around the same time. They didn't.",
    "The Great Pyramid of Giza was built around **2560 BC**. Cleopatra died in **30 BC**, about 2,500 years later. The Moon landing came less than 2,000 years after her. To Cleopatra, the pyramids were already ancient monuments.",
    "It gets weirder. **Woolly mammoths** were still alive on a remote Arctic island when the pyramids went up. And **T. rex** lived closer in time to you than to Stegosaurus.",
  ],
  takeaway: "History is longer and more overlapping than it feels. Check the dates.",
  facts: [
    {
      q: "Where did the last mammoths live?",
      a: "On Wrangel Island, off the coast of Siberia, until about 4,000 years ago.",
    },
    {
      q: "Which is older: Oxford University or the Aztec capital?",
      a: "Oxford. Teaching there began by 1096. The Aztecs founded Tenochtitlan in 1325.",
    },
    {
      q: "How old is Nintendo?",
      a: "It was founded in 1889 as a playing-card company, the same year the Eiffel Tower opened.",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Oldest first. Put these in order",
      items: [
        { text: "The Great Pyramid is built", detail: "~2560 BC" },
        { text: "The last woolly mammoths die out", detail: "~2000 BC" },
        { text: "Cleopatra dies", detail: "30 BC" },
        { text: "Teaching begins at Oxford", detail: "1096" },
        { text: "The Aztecs found Tenochtitlan", detail: "1325" },
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Julius Caesar (died 44 BC) lived closer in time to you than to the building of the Great Pyramid.",
          answer: true,
          explain: "From the pyramid (about 2560 BC) to Caesar is about 2,500 years. From Caesar to today is about 2,070.",
        },
        {
          text: "The fax machine was invented before the telephone.",
          answer: true,
          explain: "Alexander Bain patented an early fax design in 1843. The telephone came in 1876.",
        },
        {
          text: "Today, Rome's Colosseum (finished in AD 80) is older than the Great Pyramid was when Cleopatra saw it.",
          answer: false,
          explain: "The Colosseum is about 1,950 years old. The pyramid was already about 2,500 years old in Cleopatra's day.",
        },
      ],
    },
    {
      type: "estimate",
      question: "To Cleopatra, the Great Pyramid was about 2,500 years old. Roughly how old is it today?",
      min: 0,
      max: 8000,
      step: 50,
      answer: 4600,
      tolerance: 250,
      unit: "years",
      explain:
        "About 4,600 years: roughly 2,500 years before Cleopatra plus about 2,050 since her. Cleopatra sits a bit past halfway between the pyramid and you.",
    },
  ],
  recall: [
    {
      question: "Who lived closer in time to the Moon landing than to the building of the Great Pyramid?",
      options: ["King Tut", "Cleopatra", "Ramses II", "Hammurabi"],
      answer: 1,
    },
    {
      question: "When did the last woolly mammoths die out?",
      options: ["About 40,000 years ago", "About 4,000 years ago", "About 400 years ago", "About 4 million years ago"],
      answer: 1,
    },
    {
      question: "Which dinosaur lived closer in time to you than to Stegosaurus?",
      options: ["Allosaurus", "Diplodocus", "T. rex", "Brachiosaurus"],
      answer: 2,
    },
  ],
  sources: [
    { label: "Cleopatra (Wikipedia)", url: "https://en.wikipedia.org/wiki/Cleopatra" },
    { label: "Woolly mammoth (Wikipedia)", url: "https://en.wikipedia.org/wiki/Woolly_mammoth" },
  ],
}
