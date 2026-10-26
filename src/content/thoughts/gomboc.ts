import type { Thought } from "../types"

export const gomboc: Thought = {
  slug: "gomboc",
  title: "The Gömböc",
  category: "science",
  emoji: "🪨",
  hook: "Until 2006, no one knew if a solid shape could always roll back upright with no weight hidden inside.",
  body: [
    "Roly-poly toys always stand back up, but they cheat: a heavy weight sits in the base. In 1995, Russian mathematician **Vladimir Arnold** asked whether a shape made of one even material, and **convex** (with no dents or hollows), could do the same. It would need exactly one stable resting point and one unstable balance point.",
    "For flat, 2D shapes, it's impossible: they always have at least four balance points. But in 2006, Hungarian scientists **Gábor Domokos** and Péter Várkonyi proved a 3D shape could do it, and built one, the **gömböc** (from the Hungarian word for sphere). Set it down any way and it rolls to the same spot. It can balance upside down, but the slightest nudge sends it back. It's so finicky that a 10 cm model must be accurate to about 0.1 mm.",
    "Domokos and Várkonyi then spent a year measuring **tortoise shells**. Some tall, domed tortoises, like the Indian star tortoise, have shells close to a gömböc and roll upright with little help from their short legs. Flatter species, which are better at swimming and digging, rely on long necks and legs to push themselves back over.",
  ],
  takeaway: "A shape alone, with no hidden weight, can be made to always roll back to the same resting spot.",
  facts: [
    {
      q: "Could you find one on a beach?",
      a: "Very unlikely. On their honeymoon, Domokos and his wife checked about 2,000 pebbles on the Greek island of Rhodes and found none.",
    },
    {
      q: "Is there only one gömböc?",
      a: "No. The proof shows many such shapes exist, but all of them are very close to a sphere and hard to make by hand.",
    },
    {
      q: "Did Hungary celebrate it?",
      a: "Yes. In 2010, Hungary issued gömböc stamps arranged so the shape seems to roll when you flip through the booklet.",
    },
  ],
  activities: [
    {
      type: "match",
      prompt: "Match each to how it gets back upright",
      pairs: [
        ["Roly-poly toy", "A heavy weight in its base"],
        ["Gömböc", "Its shape and nothing else"],
        ["Flat turtle", "Pushing with its long neck"],
        ["Domed tortoise", "Mostly rolling on its shell"],
      ],
    },
    {
      type: "choice",
      question: "Why didn't a roly-poly toy already answer Arnold's question?",
      options: [
        "It has too many flat sides",
        "It isn't the same density all through",
        "It only rights itself on soft ground",
        "It has dents in its outer surface",
      ],
      answer: 1,
      explain: "Arnold asked for a shape made of one even material. The toy only works because of the weight hidden in its base.",
    },
    {
      type: "poll",
      question: "Should scientists get funding for puzzles with no obvious use, like this one?",
      options: [
        { text: "Yes, curiosity pays off", note: "The gömböc started as pure math, then shed light on how tortoises survive being flipped." },
        { text: "Only if a use is likely", note: "A common view when money is tight, though uses are hard to predict in advance." },
        { text: "A small share, at least", note: "Many funders do this, keeping some money for curiosity-driven research." },
      ],
    },
  ],
  recall: [
    {
      question: "What makes a gömböc special?",
      options: [
        "It floats on any liquid",
        "It has one stable resting point",
        "It can't be rolled at all",
        "It balances on any side",
      ],
      answer: 1,
    },
    {
      question: "Who first asked whether such a shape could exist?",
      options: ["Gábor Domokos", "Isaac Newton", "Albert Einstein", "Vladimir Arnold"],
      answer: 3,
    },
    {
      question: "Which animals were studied for their gömböc-like shapes?",
      options: ["Snails", "Tortoises", "Armadillos", "Beetles"],
      answer: 1,
    },
  ],
  sources: [{ label: "Gömböc (Wikipedia)", url: "https://en.wikipedia.org/wiki/G%C3%B6mb%C3%B6c" }],
}
