import type { Thought } from "../types"

export const antikythera: Thought = {
  slug: "antikythera",
  title: "The Antikythera Mechanism",
  category: "history",
  emoji: "⚙️",
  hook: "A 2,000-year-old computer, found in a shipwreck.",
  body: [
    "In 1901, sponge divers pulled lumps of corroded bronze from a Roman-era shipwreck off the Greek island of **Antikythera**. Inside were tiny, precise **gears**.",
    "Over a century of study, including X-ray scans, revealed what it was: a hand-cranked device, over 2,000 years old, that showed the positions of the **Sun and Moon**, the Moon's phases, predicted **eclipses**, and even tracked the dates of the Olympic Games.",
    "It's often called the world's oldest known **analog computer**. Nothing with gearing this complex is known again for over a thousand years, until the astronomical clocks of medieval Europe. It shows how much ancient knowledge was lost.",
  ],
  takeaway: "Ancient Greeks built a gear-driven computer, and the know-how then vanished for a millennium.",
  facts: [
    {
      q: "How much of it survives?",
      a: "82 corroded fragments, containing about 30 bronze gears.",
    },
    {
      q: "Did it come with instructions?",
      a: "Sort of. X-ray scans in 2005 revealed thousands of tiny engraved letters explaining what it showed, a kind of user manual.",
    },
    {
      q: "How did it show the Moon's phases?",
      a: "With a small ball, half silver and half dark, that turned to show the Moon's current phase.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "What did the Antikythera mechanism do?",
      options: ["Navigated ships by the stars", "Modeled the sky and predicted eclipses", "Told the hour like a clock", "Measured earthquakes"],
      answer: 1,
      explain: "Turn the handle and it showed where the Sun and Moon would be, and when eclipses would happen.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "It was found by sponge divers in a shipwreck.",
          answer: true,
          explain: "Off the Greek island of Antikythera, in 1901.",
        },
        {
          text: "It's about 500 years old.",
          answer: false,
          explain: "It's over 2,000 years old, from the 2nd or 1st century BC.",
        },
        {
          text: "It tracked the dates of the Olympic Games.",
          answer: true,
          explain: "One dial followed the four-year cycle of the Games.",
        },
      ],
    },
    {
      type: "estimate",
      question: "Roughly how many bronze gears survive in the fragments?",
      min: 0,
      max: 100,
      step: 1,
      answer: 30,
      tolerance: 5,
      unit: "gears",
      explain: "About 30. The full machine probably had more.",
    },
  ],
  recall: [
    {
      question: "Where was the Antikythera mechanism found?",
      options: ["In a Greek shipwreck", "In an Egyptian tomb", "Under the Acropolis", "In a Roman villa"],
      answer: 0,
    },
    {
      question: "What is the Antikythera mechanism often called?",
      options: ["The first steam engine", "The oldest known analog computer", "The first telescope", "A Roman clock"],
      answer: 1,
    },
    {
      question: "How old is the Antikythera mechanism?",
      options: ["About 500 years", "Over 2,000 years", "About 5,000 years", "About 200 years"],
      answer: 1,
    },
  ],
  sources: [{ label: "Antikythera mechanism (Wikipedia)", url: "https://en.wikipedia.org/wiki/Antikythera_mechanism" }],
}
