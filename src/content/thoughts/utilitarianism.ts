import type { Thought } from "../types"

export const utilitarianism: Thought = {
  slug: "utilitarianism",
  title: "Utilitarianism",
  category: "ideologies",
  emoji: "⚖️",
  hook: "What if the right thing to do is always whatever makes the most people happiest?",
  body: [
    "**Utilitarianism** says the right action is the one that leads to the most well-being overall. Everyone's happiness counts equally, including your own. It judges actions only by their results: \"the greatest happiness of the greatest number\".",
    "**Jeremy Bentham** laid out the idea in a 1789 book. He wanted laws judged by how much pleasure and pain they cause, which he hoped could be measured and added up. Later, **John Stuart Mill** argued that pleasures of the mind, like learning and art, are **higher pleasures** than simple bodily ones: \"better to be Socrates dissatisfied than a fool satisfied.\"",
    "Critics say adding up happiness can trample **individual rights**. If killing one healthy patient could give organs to five dying ones, the numbers seem to say do it. Others object that happiness is hard to measure, and that the theory asks us to always maximize, leaving little room for our own lives.",
  ],
  takeaway: "Utilitarianism judges actions by how much well-being they create, and its critics worry about who gets sacrificed along the way.",
  facts: [
    {
      q: "Where is Bentham now?",
      a: "On display. As he asked in his will, his skeleton was dressed in his clothes and topped with a wax head. This \"Auto-Icon\" is kept at University College London.",
    },
    {
      q: "Did Bentham invent the famous slogan?",
      a: "No. Philosopher Francis Hutcheson wrote of \"the greatest happiness for the greatest numbers\" in 1725, before Bentham was born.",
    },
    {
      q: "What is a utility monster?",
      a: "Robert Nozick's 1974 thought experiment: a being that gets far more pleasure from everything than anyone else. Maximizing happiness would mean giving it everything.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "A surgeon could secretly kill one healthy patient and use the organs to save five. Would it be right?",
      options: [
        { text: "No, never", note: "Most people agree. Critics say cases like this show utilitarianism ignores rights." },
        { text: "Yes, five lives beat one", note: "You follow the numbers. Few people go this far, but some philosophers bite the bullet." },
        { text: "No, the side effects are too bad", note: "A utilitarian reply: if hospitals did this, everyone would fear doctors, making things worse overall." },
      ],
    },
    {
      type: "match",
      prompt: "Match each thinker to their idea",
      pairs: [
        ["Bentham", "Pleasure and pain can be added up"],
        ["Mill", "Brought the word \"utilitarian\" into use"],
        ["Nozick", "A utility monster would get it all"],
        ["Peter Singer", "Distant strangers count as much as neighbors"],
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Utilitarians judge an action mainly by the intentions behind it.",
          answer: false,
          explain: "They judge it by its results. A kind intention that leads to misery is still a bad action.",
        },
        {
          text: "Bentham thought only human suffering mattered.",
          answer: false,
          explain: "He wrote that the question about animals is not \"Can they reason?\" but \"Can they suffer?\"",
        },
        {
          text: "For a utilitarian, a stranger's happiness counts as much as a friend's.",
          answer: true,
          explain: "Everyone counts equally. Critics say this ignores the special duties we have to people close to us.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What does utilitarianism say makes an action right?",
      options: ["Following God's commands", "Keeping your promises", "The most well-being overall", "What a good person would do"],
      answer: 2,
    },
    {
      question: "How did John Stuart Mill change Bentham's view?",
      options: [
        "He said some pleasures are higher",
        "He said only rules matter, not results",
        "He said pain doesn't really count",
        "He said only the rich should count",
      ],
      answer: 0,
    },
    {
      question: "Which of these is a classic objection to utilitarianism?",
      options: [
        "It ignores the results of actions",
        "It only counts the happiness of the rich",
        "Happiness is very hard to measure",
        "It says animals don't matter at all",
      ],
      answer: 2,
    },
  ],
  sources: [{ label: "Utilitarianism (Wikipedia)", url: "https://en.wikipedia.org/wiki/Utilitarianism" }],
}
