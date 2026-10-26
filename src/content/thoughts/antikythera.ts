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
    "It's often called the world's oldest known **analog computer**: instead of counting with digits, it worked things out with motion. Each gear train turned at the pace of a cycle in the sky, so turning the handle to a date showed what the sky would do then. Nothing with gearing this complex is known again for over a thousand years, until the astronomical clocks of medieval Europe. It shows how much ancient knowledge was lost.",
  ],
  takeaway: "Ancient Greeks built a gear-driven computer, and nothing as complex appeared again for over 1,000 years.",
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
      question: "Which of these works most like the Antikythera mechanism?",
      options: [
        "A calculator adding up digits",
        "A clock with a Moon-phase dial",
        "A telescope pointed at the Moon",
        "A printed list of full moons",
      ],
      answer: 1,
      explain: "A Moon-phase clock uses turning gears to copy the Moon's cycle, just like the mechanism. A calculator counts digits, a telescope only looks, and a printed list was worked out in advance rather than calculated by the device.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "To predict an eclipse, its owner first had to watch the night sky.",
          answer: false,
          explain: "The gears did the work. Turn the handle to a future date and the dials show what the sky will do, cloudy or not.",
        },
        {
          text: "A gear with a few broken teeth would make its predictions drift off.",
          answer: true,
          explain: "The answers come from how the gears turn together. If one slips, every dial driven by it falls out of step.",
        },
        {
          text: "Someone in 100 BC could use it to see what the Moon would look like next month.",
          answer: true,
          explain: "Crank forward to that date and the half-silver ball turns to show the Moon's phase.",
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
      options: ["In a shipwreck off Greece", "In a pharaoh's tomb in Egypt", "Under the Acropolis in Athens", "In a buried Roman villa"],
      answer: 0,
    },
    {
      question: "What is the Antikythera mechanism often called?",
      options: ["The first steam engine", "The oldest analog computer", "The first telescope ever built", "An ancient ship's compass"],
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
