import type { Thought } from "../types"

export const veilOfIgnorance: Thought = {
  slug: "veil-of-ignorance",
  title: "The Veil of Ignorance",
  category: "ideologies",
  emoji: "🎭",
  hook: "Design a fair society, but you don't know who you'll be in it.",
  body: [
    "Imagine designing the rules of a society without knowing who you'll be in it. Rich or poor, healthy or sick, any gender, any talent. This is the **veil of ignorance**, from philosopher **John Rawls**' 1971 book A Theory of Justice.",
    "The idea: if you can't rig the rules in your own favor, you'll pick rules that are fair to everyone. Rawls argued people would choose **equal basic freedoms** for all, and allow inequality only if it helps **the worst-off**.",
    "Not everyone agreed. Robert Nozick argued that fairness is about how wealth is gained, not how it ends up shared. Still, the veil remains one of the most used tools for thinking about fairness.",
  ],
  takeaway: "To test if rules are fair, imagine not knowing which place in society you'll get.",
  facts: [
    {
      q: "Has anyone tested it?",
      a: "Yes. In experiments, groups behind a \"veil\" usually chose a guaranteed minimum income, then let people earn the rest. Not quite what Rawls predicted.",
    },
    {
      q: "Who disagreed most famously?",
      a: "Robert Nozick, his Harvard colleague. In 1974 he argued that what matters is whether wealth was gained fairly, not how equal the result is.",
    },
    {
      q: "Where is it used?",
      a: "In debates about taxes, healthcare and even fair rules for games. It's a handy way to catch your own bias.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "Behind the veil, which society do you choose?",
      options: [
        { text: "Equal shares for everyone", note: "Maximum safety, but little reward for effort." },
        { text: "A safety net, then earn the rest", note: "The most common pick in experiments: a guaranteed floor plus room to get ahead." },
        { text: "Best possible life for the worst-off", note: "Rawls' own answer. Inequality is fine only if it lifts the bottom." },
        { text: "Highest average wealth, no floor", note: "A gamble. Great on average, rough if you land at the bottom." },
      ],
    },
    {
      type: "choice",
      question: "What does the veil of ignorance hide from you?",
      options: ["The laws of nature and science", "Your own place in society", "Other people's opinions", "The rules you're choosing"],
      answer: 1,
      explain: "Not knowing where you'll land stops you from designing rules that only suit yourself.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Rawls said inequality is never acceptable.",
          answer: false,
          explain: "He allowed it if it benefits the worst-off.",
        },
        {
          text: "Robert Nozick was a famous critic of Rawls.",
          answer: true,
          explain: "His 1974 book argued for a much smaller state.",
        },
        {
          text: "In experiments, most groups chose a guaranteed minimum income.",
          answer: true,
          explain: "A safety net, with the rest left to effort.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What is the veil of ignorance?",
      options: [
        "Not knowing who you'll be in society",
        "A ban on teaching certain ideas",
        "Hiding your wealth from the tax office",
        "Choosing leaders by random lottery",
      ],
      answer: 0,
    },
    {
      question: "Which philosopher named the veil of ignorance?",
      options: ["Karl Marx", "John Rawls", "Adam Smith", "John Locke"],
      answer: 1,
    },
    {
      question: "When did Rawls think inequality could be fair?",
      options: ["Never, all shares must be equal", "When it helps the worst-off", "When it rewards hard work", "When it raises average wealth"],
      answer: 1,
    },
  ],
  sources: [{ label: "Original position (Wikipedia)", url: "https://en.wikipedia.org/wiki/Original_position" }],
}
