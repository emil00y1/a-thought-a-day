import type { Thought } from "../types"

export const trolleyProblem: Thought = {
  slug: "trolley-problem",
  title: "The Trolley Problem",
  category: "ethics",
  emoji: "🚃",
  hook: "Would you pull a lever to save five people if it kills one?",
  body: [
    "A runaway trolley is heading toward five people on the track. You can pull a lever to send it onto a side track, where it will kill one person instead. Do you pull it?",
    "Philosopher **Philippa Foot** described a version of this in 1967. **Judith Jarvis Thomson** later named it and added a twist: you're on a bridge, and the only way to stop the trolley is to push a large man onto the track. Same math: one dies, five live. Yet most people who'd pull the lever refuse to push.",
    "Why? The puzzle pits two big ideas against each other: judging actions by their **outcomes** (consequentialism) or by **rules** like \"don't use people as tools\" (deontology). Today it shapes debates about self-driving cars.",
  ],
  takeaway: "Same numbers, different feelings: how harm is caused matters to us, not just how much.",
  facts: [
    {
      q: "How many people pull the lever?",
      a: "In one large 2007 online survey, about 9 in 10 said pulling the lever is okay, but only about 1 in 10 said the same about pushing the man. A 2020 study of 70,000 people found more support for pushing, but still less than for pulling.",
    },
    {
      q: "What was the Moral Machine?",
      a: "An MIT experiment that collected about 40 million choices from people in 233 countries and territories about how self-driving cars should act in crashes.",
    },
    {
      q: "Is it only for philosophers?",
      a: "No. Psychologists use it to study how gut feelings and reasoning compete when we make moral choices.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "The trolley is coming. Do you pull the lever?",
      options: [
        { text: "Pull it: save five, lose one" },
        { text: "Don't pull: I won't cause a death" },
      ],
      explain: "In a large online survey (Hauser and colleagues, 2007), 89% said pulling the lever is okay.",
    },
    {
      type: "poll",
      question: "Now you're on a bridge. Do you push the man to stop the trolley?",
      options: [
        { text: "Push: save five, lose one" },
        { text: "Don't push" },
      ],
      explain:
        "In the same survey, only 11% said pushing is okay. Same outcome, opposite answer: using someone as a tool feels very different from redirecting harm.",
    },
    {
      type: "match",
      prompt: "Your friend asks if you like their awful new haircut. Match each reply to the theory behind it",
      pairs: [
        ["\"A kind lie leaves everyone happier, so lie.\"", "Consequentialism"],
        ["\"Lying is wrong, even to spare feelings.\"", "Deontology"],
        ["\"Do what an honest, caring friend would do.\"", "Virtue ethics"],
      ],
    },
  ],
  recall: [
    {
      question: "In the classic trolley problem, what does pulling the lever do?",
      options: [
        "Stops the trolley in its tracks",
        "Sends it toward one person instead",
        "Sends it onto an empty side track",
        "Slows it so the five can step aside",
      ],
      answer: 1,
    },
    {
      question: "Why do most people refuse to push the man off the bridge?",
      options: [
        "It would save fewer people overall",
        "Using someone as a tool feels wrong",
        "They're afraid of going to prison",
        "They doubt a man could stop a trolley",
      ],
      answer: 1,
    },
    {
      question: "Which theory judges actions only by their outcomes?",
      options: ["Deontology", "Consequentialism", "Virtue ethics", "Divine command theory"],
      answer: 1,
    },
  ],
  sources: [{ label: "Trolley problem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Trolley_problem" }],
}
