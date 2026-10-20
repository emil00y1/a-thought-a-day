import type { Thought } from "../types"

export const trolleyProblem: Thought = {
  slug: "trolley-problem",
  title: "The Trolley Problem",
  category: "ethics",
  emoji: "🚃",
  hook: "Would you pull a lever to save five people if it kills one?",
  body: [
    "A runaway trolley is heading toward five people on the track. You can pull a lever to send it onto a side track, where it will kill one person instead. Do you pull it?",
    "Philosopher **Philippa Foot** described this in 1967. **Judith Jarvis Thomson** later named it and added a twist: you're on a bridge, and the only way to stop the trolley is to push a large man onto the track. Same math: one dies, five live. Yet most people who'd pull the lever refuse to push.",
    "Why? The puzzle pits two big ideas against each other: judging actions by their **outcomes** (consequentialism) or by **rules** like \"don't use people as tools\" (deontology). Today it shapes debates about self-driving cars.",
  ],
  takeaway: "Same numbers, different feelings: how harm is caused matters to us, not just how much.",
  facts: [
    {
      q: "How many people pull the lever?",
      a: "In large online surveys, about 9 in 10 say pulling the lever is okay. Only about 1 in 10 say the same about pushing the man.",
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
        { text: "Pull it: save five, lose one", pct: 89 },
        { text: "Don't pull: I won't cause a death", pct: 11 },
      ],
      explain: "Results from a large online survey (Hauser and colleagues, 2007).",
    },
    {
      type: "poll",
      question: "Now you're on a bridge. Do you push the man to stop the trolley?",
      options: [
        { text: "Push: save five, lose one", pct: 11 },
        { text: "Don't push", pct: 89 },
      ],
      explain: "Same outcome, opposite answer. Using someone as a tool feels very different from redirecting harm.",
    },
    {
      type: "match",
      prompt: "Match each moral theory to its idea",
      pairs: [
        ["Consequentialism", "The best action has the best outcome"],
        ["Deontology", "Some acts are wrong whatever the outcome"],
        ["Virtue ethics", "Do what a good person would do"],
      ],
    },
  ],
  recall: [
    {
      question: "In the classic trolley problem, what does pulling the lever do?",
      options: ["Stops the trolley", "Sends it toward one person instead of five", "Saves everyone", "Derails it safely"],
      answer: 1,
    },
    {
      question: "Why do most people refuse to push the man off the bridge?",
      options: [
        "Fewer people would be saved",
        "Directly using someone as a tool feels wrong",
        "It's against the law",
        "They don't think it would work",
      ],
      answer: 1,
    },
    {
      question: "Which theory judges actions only by their outcomes?",
      options: ["Deontology", "Consequentialism", "Virtue ethics", "Stoicism"],
      answer: 1,
    },
  ],
  sources: [{ label: "Trolley problem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Trolley_problem" }],
}
