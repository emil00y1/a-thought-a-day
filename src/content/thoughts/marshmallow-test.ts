import type { Thought } from "../types"

export const marshmallowTest: Thought = {
  slug: "marshmallow-test",
  title: "The Marshmallow Test",
  category: "experiments",
  emoji: "🍬",
  hook: "One treat now, or two if you wait? A famous experiment, and its surprising twist.",
  body: [
    "In the late 1960s at Stanford, psychologist **Walter Mischel** offered preschoolers a deal: eat one treat now, or wait alone for about 15 minutes and get two. Some kids ate it at once. Others covered their eyes, sang or kicked the table to hold out.",
    "Years later, follow-ups found that kids who waited longer tended to do better in school. The story went viral: **self-control** in childhood predicts success.",
    "Then came the twist. A 2018 study with around 900 more diverse children found the link was much weaker, and mostly explained by **family background** and early skills. Another study found kids wait far less if an adult has just broken a promise to them. Waiting makes sense when you **trust** the reward will come.",
  ],
  takeaway: "Waiting isn't just willpower. It depends on whether you trust the reward will come.",
  facts: [
    {
      q: "Was it always marshmallows?",
      a: "No. Kids could pick treats like marshmallows, cookies or pretzel sticks.",
    },
    {
      q: "What happened when adults broke promises?",
      a: "In a 2013 study, kids with an unreliable adult waited about 3 minutes on average. Kids with a reliable one waited about 12.",
    },
    {
      q: "What tricks helped kids wait?",
      a: "Distraction. Looking away, singing or imagining the marshmallow as a fluffy cloud all made waiting easier.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question:
        "Kids who'd just met an unreliable adult waited about 3 minutes. How long did kids with a reliable adult wait?",
      min: 0,
      max: 20,
      step: 1,
      answer: 12,
      tolerance: 2,
      unit: "minutes",
      explain: "About 12 minutes, four times longer. Trust changed everything.",
    },
    {
      type: "choice",
      question: "What did the big 2018 replication find?",
      options: [
        "The original link was even stronger",
        "A weaker link, mostly due to background",
        "Kids today wait far less than in the 1960s",
        "The link held only for older kids",
      ],
      answer: 1,
      explain: "Once family background and early skills were accounted for, waiting time predicted much less.",
    },
    {
      type: "poll",
      question: "Be honest: as a four-year-old, would you have waited?",
      options: [
        { text: "Waited the whole time", note: "Like about a third of the kids in Mischel's studies." },
        { text: "Lasted a few minutes", note: "Most kids gave in somewhere along the way. Very human." },
        { text: "Ate it instantly", note: "Respect. A treat in the hand is worth two in theory." },
      ],
    },
  ],
  recall: [
    {
      question: "In the marshmallow test, how did kids get two treats?",
      options: [
        "By sharing with another child",
        "By waiting about 15 minutes",
        "By solving a short puzzle",
        "By asking the adult politely",
      ],
      answer: 1,
    },
    {
      question: "What did later research find mattered a lot for waiting?",
      options: [
        "Whether it was sunny outside",
        "Family background and trust",
        "The time of day of the test",
        "The color of the room they sat in",
      ],
      answer: 1,
    },
    {
      question: "Who ran the original marshmallow experiments?",
      options: ["B. F. Skinner", "Walter Mischel", "Stanley Milgram", "Jean Piaget"],
      answer: 1,
    },
  ],
  sources: [{ label: "Stanford marshmallow experiment (Wikipedia)", url: "https://en.wikipedia.org/wiki/Stanford_marshmallow_experiment" }],
}
