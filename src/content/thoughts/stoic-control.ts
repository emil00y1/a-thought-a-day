import type { Thought } from "../types"

export const stoicControl: Thought = {
  slug: "stoic-control",
  title: "What's Up to You",
  category: "philosophy",
  emoji: "🏛️",
  hook: "A 2,000-year-old idea for worrying less, still used in therapy today.",
  body: [
    "Nearly 2,000 years ago, the Greek philosopher **Epictetus**, who was born a slave, taught a simple split: some things are **up to us**, and some are not.",
    "Up to us: our judgments, choices and efforts. Not up to us: other people, the weather, the past, our reputation. The Stoics argued that much of our suffering comes from mixing the two up, worrying about what we **can't control** and neglecting what we can.",
    "This wasn't giving up. Roman emperor **Marcus Aurelius** lived by it while running an empire. Today it lives on in **cognitive behavioral therapy**, whose founders openly credited the Stoics.",
  ],
  takeaway: "Put your energy into what's up to you, your choices and responses. Let the rest go.",
  facts: [
    {
      q: "What's the Stoic archer?",
      a: "An archer controls the aim and the release. Once the arrow flies, a gust of wind is not up to them. Do your best, then accept the result.",
    },
    {
      q: "Was Marcus Aurelius writing for us?",
      a: "No. His Meditations were a private journal of reminders to himself, probably never meant to be published.",
    },
    {
      q: "Where else does the idea appear?",
      a: "In the Serenity Prayer: accept the things you cannot change, have courage to change the things you can, and the wisdom to know the difference.",
    },
  ],
  activities: [
    {
      type: "truefalse",
      statements: [
        {
          text: "Whether it rains on your big day is up to you.",
          answer: false,
          explain: "The weather isn't. Your plan B is.",
        },
        {
          text: "How you respond to a rude comment is up to you.",
          answer: true,
          explain: "The comment isn't yours to control. Your response is.",
        },
        {
          text: "What other people think of you is up to you.",
          answer: false,
          explain: "You control what you do, not how others judge it.",
        },
        {
          text: "How much effort you put in is up to you.",
          answer: true,
          explain: "The Stoics' favorite kind of thing: fully yours.",
        },
      ],
    },
    {
      type: "choice",
      question: "According to Epictetus, what is truly up to us?",
      options: ["Our health and body", "Our reputation with others", "Our judgments and choices", "Our money and possessions"],
      answer: 2,
      explain: "Health, reputation and wealth can all be taken away. How we judge and choose stays ours.",
    },
    {
      type: "poll",
      question: "What do you worry about most that isn't really up to you?",
      options: [
        { text: "What others think", note: "Classic. You control what you do, not how others see it." },
        { text: "The future", note: "Plan for it, then let go. Seneca: we suffer more often in imagination than in reality." },
        { text: "Things I said in the past", note: "The past is fixed. What's up to you is what you do next." },
        { text: "The news", note: "Stay informed, then act where you can. Worry alone changes nothing." },
      ],
    },
  ],
  recall: [
    {
      question: "What is the Stoic \"dichotomy of control\"?",
      options: [
        "Some things are up to us, some aren't",
        "Control your mind, then control others",
        "Split your day between work and rest",
        "Nothing is up to us, so stop trying",
      ],
      answer: 0,
    },
    {
      question: "Which modern therapy drew on Stoic ideas?",
      options: ["Cognitive behavioral therapy", "Classic Freudian psychoanalysis", "Primal scream therapy", "Hypnotherapy"],
      answer: 0,
    },
    {
      question: "Who wrote the Meditations as a private journal?",
      options: ["Epictetus", "Marcus Aurelius", "Zeno of Citium", "Seneca the Younger"],
      answer: 1,
    },
  ],
  sources: [{ label: "Enchiridion of Epictetus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Enchiridion_of_Epictetus" }],
}
