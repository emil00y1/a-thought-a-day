import type { Thought } from "../types"

export const hawthorneEffect: Thought = {
  slug: "hawthorne-effect",
  title: "The Hawthorne Effect",
  category: "experiments",
  emoji: "💡",
  hook: "A factory made the lights brighter, and work sped up. Then it made them dimmer.",
  body: [
    "In the 1920s, managers at the **Hawthorne Works**, a big Western Electric factory near Chicago, tested whether brighter lights made workers more productive. The story goes that output rose when the lights went up, rose again when they went down, and also rose in a **control group** whose lights never changed. It only fell when it got almost too dark to see.",
    "Later tests at the plant changed rest breaks, snacks and hours for a small group of women assembling telephone parts. Output seemed to rise with almost any change. In the 1950s, this became known as the **Hawthorne effect**: people change how they act when they know they're being **observed**.",
    "But the evidence is shakier than the legend. The lighting tests were never properly published, and the later group was tiny, with no real control group. When economists Steven Levitt and John List found the original lighting data in 2011, they saw only weak signs of the effect.",
  ],
  takeaway: "Being watched can change how people act, but the famous factory studies are weaker evidence than the legend suggests.",
  facts: [
    {
      q: "Why does it matter for research?",
      a: "If people act differently just because they're in a study, a new medicine or teaching method can look better than it is.",
    },
    {
      q: "Who called it \"a glorified anecdote\"?",
      a: "Psychologist Richard Nisbett. He said that once you have the anecdote, \"you can throw away the data.\"",
    },
    {
      q: "Who picked the women for the test room?",
      a: "Two workers were chosen, and they picked four more. Choosing your own teammates may itself have lifted morale.",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Put the Hawthorne studies in order, earliest first",
      items: [
        { text: "Lighting tests begin", detail: "1924" },
        { text: "Six women assemble relays in a test room", detail: "1927" },
        { text: "Researchers interview thousands of workers", detail: "1928" },
        { text: "Men are watched in the bank wiring room", detail: "1931" },
        { text: "The effect gets its name", detail: "1950s" },
      ],
      explain: "The studies ran for about eight years, but the famous label came decades later.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Hospital staff wash their hands more often while an inspector stands nearby. That fits the Hawthorne effect.",
          answer: true,
          explain: "They act differently because they know they're being watched. Studies of hand washing have found exactly this.",
        },
        {
          text: "To rule out the Hawthorne effect, a control group should get no attention at all.",
          answer: false,
          explain: "The control group should get the same attention as the test group. Then any extra gain must come from the change itself.",
        },
        {
          text: "If a team works faster after almost any change, that proves each change was a good one.",
          answer: false,
          explain: "When any change seems to help, the likely cause is something they share, like extra attention, not the changes themselves.",
        },
      ],
    },
    {
      type: "choice",
      question: "A school tries a new reading app, and scores jump in the first month. Why might the Hawthorne effect be a worry?",
      options: [
        "The app may have a hidden bug",
        "Scores always rise in the spring",
        "Reading apps tend to lower scores",
        "Kids may try harder when watched",
      ],
      answer: 3,
      explain: "The extra attention of a new trial can boost effort for a while. A fair test compares with a similar class that also gets attention.",
    },
  ],
  recall: [
    {
      question: "What is the Hawthorne effect?",
      options: [
        "Bright light speeds up work",
        "People change when watched",
        "Breaks always raise output",
        "Groups beat individuals",
      ],
      answer: 1,
    },
    {
      question: "What did the first Hawthorne tests change?",
      options: ["Lighting levels", "Pay rates", "Music at work", "Shift length"],
      answer: 0,
    },
    {
      question: "Why do many researchers doubt the original Hawthorne findings?",
      options: [
        "The factory closed halfway through",
        "The workers were paid actors",
        "The studies were poorly controlled",
        "The results were never written down",
      ],
      answer: 2,
    },
  ],
  sources: [{ label: "Hawthorne effect (Wikipedia)", url: "https://en.wikipedia.org/wiki/Hawthorne_effect" }],
}
