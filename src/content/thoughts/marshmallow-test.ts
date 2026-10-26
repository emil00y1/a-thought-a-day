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
      type: "choice",
      question:
        "Two kids take the test. One lives where food often runs out and promises get broken. The other's parents always keep their word. What's most likely?",
      options: [
        "Both wait equally long, since it's all willpower",
        "The first eats sooner, and that can be sensible",
        "The first waits longer, since hunger builds patience",
        "The second eats sooner, since trust makes kids lazy",
      ],
      answer: 1,
      explain:
        "If promises often fall through, a treat in the hand is the safer bet. Eating it isn't a lack of self-control, it's a reasonable guess that the second treat may never come.",
    },
    {
      type: "choice",
      question:
        "A school sees that kids who waited longest in a marshmallow test later got the best grades. So it starts drilling self-control to raise grades. What's the flaw?",
      options: [
        "Grades can't be measured fairly at all",
        "Background may drive both waiting and grades",
        "Training self-control always backfires badly",
        "The test only works with real marshmallows",
      ],
      answer: 1,
      explain:
        "Two things moving together doesn't mean one causes the other. The 2018 study found family background and early skills explained much of the link, so training waiting alone may do little for grades.",
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
