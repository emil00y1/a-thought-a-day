import type { Thought } from "../types"

export const socialContract: Thought = {
  slug: "social-contract",
  title: "The Social Contract",
  category: "ideologies",
  emoji: "📜",
  hook: "Nobody asked you to sign it, yet you live by it. Why obey a government at all?",
  body: [
    "Why should you follow laws you never agreed to? **Social contract** theory answers with a thought experiment: imagine life with no government, a **state of nature**. Sooner or later, people would agree to give up some freedom in exchange for safety and order.",
    "**Thomas Hobbes**, who lived through the English Civil War, thought life without government would be \"solitary, poor, nasty, brutish, and short\", so people should accept an all-powerful ruler. **John Locke** was more hopeful: people have natural rights to life, liberty and property, and a government that tramples them can be replaced.",
    "**Jean-Jacques Rousseau** argued that a fair society follows the \"general will\", what citizens decide together for the common good, not the wishes of a king. Locke's ideas in particular helped shape the American Declaration of Independence.",
  ],
  takeaway: "A government's right to rule may rest on the agreement, real or imagined, of the people it governs.",
  facts: [
    {
      q: "How does Rousseau's famous book begin?",
      a: "\"Man is born free, and everywhere he is in chains.\" He wanted a society where people stay free by obeying laws they make together.",
    },
    {
      q: "Is the idea older than Hobbes?",
      a: "Much older. In Plato's Republic, about 2,400 years ago, Glaucon argues that justice began as a deal: I won't harm you if you won't harm me.",
    },
    {
      q: "Did anyone actually sign it?",
      a: "No. David Hume pointed out that most real governments began with force, not agreement. Defenders reply that the contract is a thought experiment, not history.",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Put these social contract books in order, oldest first",
      items: [
        { text: "Hobbes: Leviathan", detail: "1651" },
        { text: "Locke: Two Treatises of Government", detail: "1689" },
        { text: "Rousseau: The Social Contract", detail: "1762" },
        { text: "Rawls: A Theory of Justice", detail: "1971" },
      ],
      explain: "John Rawls revived the idea in 1971 with his veil of ignorance: pick society's rules before you know who you'll be in it.",
    },
    {
      type: "choice",
      question: "A government starts taking people's homes without any trial. What would Hobbes say the citizens should do?",
      options: [
        "Replace it, since it broke their rights",
        "Obey, since even a harsh ruler beats chaos",
        "Meet and vote on what the common good needs",
        "Ignore it, since nobody signed a contract",
      ],
      answer: 1,
      explain: "Hobbes thought life without government is so terrible that people should accept an all-powerful ruler, even a harsh one. Replacing a government that tramples rights is Locke's view, and voting on the common good is Rousseau's.",
    },
    {
      type: "poll",
      question: "You never signed the social contract. Are you still bound by it?",
      options: [
        {
          text: "Yes, I benefit from it",
          note: "Locke would agree: by living somewhere and enjoying its protection, you give \"tacit consent\".",
        },
        {
          text: "Only if I'm free to leave",
          note: "Hume's objection: a poor farmer who can't afford to move abroad hasn't really chosen anything.",
        },
        {
          text: "No, no signature, no deal",
          note: "Some anarchists and libertarians argue exactly this: without real consent, there's no real contract.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What does social contract theory try to explain?",
      options: ["How markets set prices", "How votes are counted", "Why governments may rule us", "How kings pass down their thrones"],
      answer: 2,
    },
    {
      question: "What did Hobbes think life without government would be like?",
      options: ["Nasty, brutish and short", "Peaceful, but lonely and quiet", "Free and mostly fair", "Simple but happy"],
      answer: 0,
    },
    {
      question: "According to Locke, what may people do if a government tramples their rights?",
      options: [
        "Obey it anyway, no matter what",
        "Replace it with a new one",
        "Appeal to the church to decide",
        "Wait for the ruler to die",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Social contract (Wikipedia)", url: "https://en.wikipedia.org/wiki/Social_contract" }],
}
