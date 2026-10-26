import type { Thought } from "../types"

export const experienceMachine: Thought = {
  slug: "experience-machine",
  title: "The Experience Machine",
  category: "ethics",
  emoji: "🥽",
  hook: "A machine could give you a perfect, happy life. Would you plug in for good?",
  body: [
    "In 1974, philosopher **Robert Nozick** imagined a machine that could give you any experience you wanted: writing a great novel, making a friend, falling in love. It would feel completely real. Once plugged in, you wouldn't know you were floating in a tank.",
    "If **pleasure** is the only thing that matters, as **hedonism** claims, you should plug in right away. Nozick bet most people would refuse. His reasons: we want to actually do things, not just feel like we did; we want to be a certain kind of person; and we want contact with **reality**.",
    "Critics like psychologist Joshua Greene flip the story: what if you learned your life so far had been inside the machine? Would you unplug? Many people hesitate, which suggests part of our \"no\" is **status quo bias**, a preference for whatever we already have.",
  ],
  takeaway: "Many of us want more than good feelings: we want our lives and achievements to be real.",
  facts: [
    {
      q: "Is this just The Matrix?",
      a: "Close. Nozick's idea came 25 years before the 1999 film, where the traitor Cypher chooses a pleasant fake life: \"Ignorance is bliss.\"",
    },
    {
      q: "How harsh was Nozick about plugging in?",
      a: "Very. He called it \"a form of suicide\". Someone floating in a tank isn't brave, kind or witty. There's no way they are.",
    },
    {
      q: "What if your real life is awful?",
      a: "In a small 2010 study, people told they were already plugged in, and that their real life was in a maximum security prison, mostly stayed put. Only 13% chose to unplug.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "You can plug into the experience machine for the rest of your life. Do you?",
      options: [
        { text: "Yes, plug me in", note: "You side with hedonism: if it feels just as good, why does real matter?" },
        { text: "No, I want my real life", note: "Nozick's bet. You want to actually do things, not just feel like you did." },
        { text: "Only for a while", note: "A popular middle ground. A holiday from reality feels very different from leaving it forever." },
      ],
    },
    {
      type: "choice",
      question:
        "Two lives feel exactly the same from the inside. In one, your friends truly like you. In the other, they secretly mock you, and you never find out. What would a strict hedonist say?",
      options: [
        "The first life is better for you",
        "Both are equally good for you",
        "The second is better, as it's harder",
        "Neither counts, since both are fake",
      ],
      answer: 1,
      explain: "If only pleasure matters, and both lives feel the same, they're equally good. Most people feel the first is better, which is exactly Nozick's point: we care about what's real, not just how it feels.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Inside the machine, you'd know your life was simulated.",
          answer: false,
          explain: "Nozick made it seamless. You'd think it was all actually happening.",
        },
        {
          text: "Nozick tested his idea on hundreds of volunteers.",
          answer: false,
          explain: "He relied on intuition. Later researchers, like Felipe de Brigard, pointed out he never checked.",
        },
        {
          text: "One of Nozick's reasons was that we want to be a certain kind of person.",
          answer: true,
          explain: "In a tank, you aren't really brave or kind. You just have experiences.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "Who came up with the experience machine?",
      options: ["John Rawls", "Peter Singer", "Robert Nozick", "René Descartes"],
      answer: 2,
    },
    {
      question: "What is the experience machine meant to show?",
      options: [
        "Machines could never fake our feelings",
        "Pleasure isn't all we care about",
        "Real life is mostly unpleasant",
        "Our memories can't be trusted",
      ],
      answer: 1,
    },
    {
      question: "Critics say people may refuse to plug in partly because of what?",
      options: ["Confirmation bias", "Survivorship bias", "Anchoring bias", "Status quo bias"],
      answer: 3,
    },
  ],
  sources: [{ label: "Experience machine (Wikipedia)", url: "https://en.wikipedia.org/wiki/Experience_machine" }],
}
