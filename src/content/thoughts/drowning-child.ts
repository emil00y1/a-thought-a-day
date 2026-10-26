import type { Thought } from "../types"

export const drowningChild: Thought = {
  slug: "drowning-child",
  title: "The Drowning Child",
  category: "ethics",
  emoji: "🛟",
  hook: "You'd ruin your clothes to save a drowning child. So why not save one far away?",
  body: [
    "Imagine walking past a shallow pond and seeing a small child drowning. You could wade in and pull them out, but your clothes would get muddy. Almost everyone agrees you should jump in. Muddy clothes are nothing next to a child's life.",
    "Philosopher **Peter Singer** used this story in his 1972 essay \"Famine, Affluence, and Morality\". His rule: if you can stop something very bad without giving up anything of **comparable moral importance**, you ought to do it. And **distance** makes no moral difference. If a donation could save a child far away, keeping the money for small treats is like walking past the pond.",
    "The essay helped inspire **effective altruism**, a movement focused on giving where it does the most good. The main pushback is the **demandingness objection**: if every spare dollar could save a life, morality seems to ask for almost everything you have. Critics also note the pond is one emergency, while poverty is huge, ongoing and shared by millions of possible helpers.",
  ],
  takeaway: "If you'd ruin your clothes to save a child in front of you, Singer asks why distance should let you off the hook.",
  facts: [
    {
      q: "What crisis sparked the essay?",
      a: "Singer wrote it in 1971, as millions of refugees from East Bengal, now Bangladesh, faced hunger and disease. He argued rich countries were giving far too little.",
    },
    {
      q: "Does Singer give money himself?",
      a: "Yes. Since 2009 he has been a member of Giving What We Can, whose members pledge at least 10% of their income to effective charities.",
    },
    {
      q: "What's the sharpest reply?",
      a: "Philosopher Kwame Anthony Appiah said the problem isn't that Singer claims we owe a lot to foreigners. \"The problem is that it claims we have incredible obligations.\"",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "Is not donating to save a child far away as wrong as walking past the pond?",
      options: [
        { text: "Yes, just as wrong", note: "You agree with Singer: a child is a child, wherever they are." },
        { text: "Wrong, but less so", note: "A common view. The pond is right in front of you, and only you can help." },
        { text: "No, it's a different thing", note: "Many people feel this way. Singer's challenge is to say exactly what the difference is." },
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Singer thinks helping a stranger nearby matters more than helping one far away.",
          answer: false,
          explain: "For Singer, a neighbor's child and a child thousands of miles away count the same.",
        },
        {
          text: "If many other people could also help, Singer says that doesn't excuse you.",
          answer: true,
          explain: "He says his rule applies whether you're the only one who can help or one of millions.",
        },
        {
          text: "Singer says you only have to help if it costs you nothing at all.",
          answer: false,
          explain: "A real cost doesn't let you off. Only a cost of comparable moral importance does.",
        },
      ],
    },
    {
      type: "choice",
      question: "By Singer's rule, which of these WOULD excuse you from saving the child?",
      options: [
        "The child is in another country",
        "Other people are walking past too",
        "It would cost you your own life",
        "You'd ruin a costly pair of shoes",
      ],
      answer: 2,
      explain: "Your own life is of comparable moral importance. Distance, bystanders and nice shoes are not.",
    },
  ],
  recall: [
    {
      question: "In Singer's story, what does saving the child cost you?",
      options: ["A day's pay", "Muddy clothes", "A broken arm", "A missed flight"],
      answer: 1,
    },
    {
      question: "What does Singer conclude from the drowning child?",
      options: [
        "Well-off people should give far more",
        "Only governments should fight poverty",
        "Charity mostly does more harm than good",
        "We should help our neighbors first",
      ],
      answer: 0,
    },
    {
      question: "What is the demandingness objection to Singer's argument?",
      options: [
        "Charities waste most of the money",
        "Children far away aren't our concern",
        "Ponds are rarer than poverty",
        "It asks us to give up too much",
      ],
      answer: 3,
    },
  ],
  sources: [
    {
      label: "Famine, Affluence, and Morality (Wikipedia)",
      url: "https://en.wikipedia.org/wiki/Famine,_Affluence,_and_Morality",
    },
  ],
}
