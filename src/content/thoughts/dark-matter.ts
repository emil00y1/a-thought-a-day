import type { Thought } from "../types"

export const darkMatter: Thought = {
  slug: "dark-matter",
  title: "Dark Matter",
  category: "space",
  emoji: "🌑",
  hook: "Most of the matter in the universe can't be seen. So how do we know it's there?",
  body: [
    "In the 1970s, astronomer **Vera Rubin** and her colleague Kent Ford measured how fast stars and gas orbit in spiral galaxies like Andromeda. Far from the bright center, they expected things to move slower, the way the outer planets circle the Sun more slowly. Instead the speeds stayed roughly flat, all the way out. These **rotation curves** meant something unseen was adding extra gravity.",
    "Astronomers call it **dark matter**. It doesn't shine, absorb or reflect light, but its pull shows up again and again: in how galaxy clusters hold together, and in how they bend light from objects behind them, called **gravitational lensing**.",
    "Yet nobody knows what it is. For decades, experiments have hunted for proposed particles like **WIMPs** and axions, with no confirmed detection. A minority of scientists suspect the real answer is that our laws of gravity need changing instead.",
  ],
  takeaway: "Most of the matter in the universe seems to be invisible, and we still don't know what it's made of.",
  facts: [
    {
      q: "Who first called it dark matter?",
      a: "Swiss astronomer Fritz Zwicky, in 1933. He saw that the Coma Cluster of galaxies needed far more mass than its light showed. His numbers were off, but the idea stuck.",
    },
    {
      q: "Did Vera Rubin win a Nobel Prize?",
      a: "No. She died in 2016 without one, and many physicists argue she deserved it. A giant telescope in Chile, the Vera C. Rubin Observatory, now bears her name.",
    },
    {
      q: "Is dark matter the same as dark energy?",
      a: "No. Dark matter pulls things together with its gravity. Dark energy is a separate mystery that seems to be speeding up the universe's expansion.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Why did Rubin's flat rotation curves point to hidden mass?",
      options: [
        "The centers held no stars at all",
        "The galaxies were shrinking fast",
        "Outer stars were moving too fast",
        "Outer stars were too dim to see",
      ],
      answer: 2,
      explain: "With only the visible matter, outer stars should orbit slowly. They didn't, so extra unseen mass had to be pulling on them.",
    },
    {
      type: "estimate",
      question: "What percent of all the matter in the universe is dark matter?",
      min: 0,
      max: 100,
      step: 1,
      answer: 85,
      tolerance: 5,
      unit: "%",
      explain: "About 85%. Ordinary matter, everything made of atoms, from stars to you, is only around 15%.",
    },
    {
      type: "poll",
      question: "What do you think dark matter will turn out to be?",
      options: [
        { text: "A new kind of particle", note: "The leading view. Many physicists expect an unseen particle, though decades of searching haven't caught one." },
        { text: "A sign gravity works differently", note: "A minority view. Modified gravity ideas fit some galaxies well, but struggle with galaxy clusters." },
        { text: "Something no one has thought of", note: "Possible. Some of the biggest puzzles in physics ended with answers no one saw coming." },
      ],
    },
  ],
  recall: [
    {
      question: "Whose measurements of spinning galaxies made the case for dark matter?",
      options: ["Marie Curie", "Vera Rubin", "Edwin Hubble", "Cecilia Payne"],
      answer: 1,
    },
    {
      question: "How do astronomers detect dark matter?",
      options: [
        "It glows faintly in infrared",
        "It blocks light from stars",
        "Space probes collect samples",
        "Its gravity pulls on things",
      ],
      answer: 3,
    },
    {
      question: "Roughly how much of the universe's matter is dark matter?",
      options: ["About 15%", "About half", "About 85%", "Nearly 100%"],
      answer: 2,
    },
  ],
  sources: [{ label: "Dark matter (Wikipedia)", url: "https://en.wikipedia.org/wiki/Dark_matter" }],
}
