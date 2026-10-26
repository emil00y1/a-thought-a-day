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
      question: "Some kids are making the rules for a playground game. Which way of doing it works most like the veil of ignorance?",
      options: [
        "The best player writes all the rules",
        "Rules are set before teams are drawn",
        "Each team votes after seeing its players",
        "Last year's winners keep their old rules",
      ],
      answer: 1,
      explain: "If nobody knows which team they'll be on, nobody can bend the rules toward their own side. In the other cases, someone already knows where they stand.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "By Rawls' rule, a plan that makes the rich much richer and also lifts the poorest a little could be fair.",
          answer: true,
          explain: "Rawls allowed inequality when it helps the worst-off. Here the poorest gain too.",
        },
        {
          text: "By Rawls' rule, a plan that raises average wealth but leaves the poorest worse off is fair.",
          answer: false,
          explain: "A higher average isn't enough for Rawls. What counts is how the worst-off do.",
        },
        {
          text: "Behind the veil, giving extra votes to people with college degrees would be a safe choice.",
          answer: false,
          explain: "You don't know if you'll have a degree. You might be one of the people losing out.",
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
