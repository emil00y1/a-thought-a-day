import type { Thought } from "../types"

export const howVaccinesWork: Thought = {
  slug: "how-vaccines-work",
  title: "How Vaccines Work",
  category: "science",
  emoji: "💉",
  hook: "A vaccine lets your immune system practice on a germ before the real one shows up.",
  body: [
    "When a new germ gets into your body, your immune system needs days to learn how to fight it. It spots the germ's **antigens**, telltale molecules on its surface, and builds **antibodies** that fit them like a key in a lock. Meanwhile, you may get quite sick.",
    "After the fight, the body keeps **memory cells** that recognize that exact germ. If it returns, they respond faster and stronger, often before you notice anything. A **vaccine** triggers this learning safely, using a weakened or killed germ, or just a harmless piece of it.",
    "The idea started with smallpox. In 1796, the English doctor **Edward Jenner** noticed that milkmaids who caught mild cowpox seemed protected from smallpox. He put cowpox into small cuts on a boy's arm. When he later exposed the boy to smallpox, the boy didn't get sick. The word vaccine comes from vacca, Latin for cow.",
  ],
  takeaway: "Vaccines give your immune system a safe preview of a germ, so its memory cells are ready if the real one arrives.",
  facts: [
    {
      q: "Who was Jenner's first famous patient?",
      a: "James Phipps, the 8-year-old son of his gardener. The cowpox came from a milkmaid, Sarah Nelmes, who caught it from a cow named Blossom.",
    },
    {
      q: "How long can immune memory last?",
      a: "A long time. A 2003 study found memory cells for smallpox in people vaccinated more than 50 years earlier.",
    },
    {
      q: "Is smallpox still around?",
      a: "Not in the wild. After a global vaccination campaign, the last natural case was in 1977, and the WHO declared it eradicated in 1980.",
    },
  ],
  activities: [
    {
      type: "match",
      prompt: "Match each term to what it means",
      pairs: [
        ["Antigen", "A marker on a germ's surface"],
        ["Antibody", "A protein that latches onto germs"],
        ["Memory cell", "Remembers a germ for years"],
        ["Booster", "An extra dose to refresh memory"],
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "A vaccine must contain a full, live germ to work.",
          answer: false,
          explain: "Many use a killed germ or just one harmless piece of it, which is enough for the body to learn from.",
        },
        {
          text: "People who had chickenpox as kids rarely get it badly again, for the same reason vaccines work.",
          answer: true,
          explain: "The first infection left memory cells behind. A vaccine builds the same memory, just without the illness.",
        },
        {
          text: "Some vaccines need more than one dose.",
          answer: true,
          explain: "For some germs, immune memory fades or needs a second reminder, so a booster tops it up.",
        },
      ],
    },
    {
      type: "choice",
      question: "A new flu strain has changed the markers on its surface. Why might last year's flu shot protect less well?",
      options: [
        "The old vaccine has worn out of their blood by now",
        "Memory cells may not recognize the new markers",
        "Flu germs become immune to all vaccines",
        "The body forgets every germ within a year",
      ],
      answer: 1,
      explain: "Memory cells and antibodies fit a germ's antigens like a key in a lock. Change the lock enough, and the old keys stop fitting well. That's why flu shots are updated often.",
    },
  ],
  recall: [
    {
      question: "What does a vaccine train your body to do?",
      options: ["Grow more red blood cells", "Recognize a specific germ", "Make all germs harmless", "Produce extra body heat"],
      answer: 1,
    },
    {
      question: "What did Jenner use to protect against smallpox?",
      options: ["Material from cowpox", "Boiled smallpox scabs", "Extract of tree bark", "Milk from sick cows"],
      answer: 0,
    },
    {
      question: "What makes a second encounter with a germ less serious?",
      options: [
        "The germ is weaker the second time",
        "Your body temperature stays lower",
        "The germ forgets how to spread",
        "Memory cells respond much faster",
      ],
      answer: 3,
    },
  ],
  sources: [{ label: "Vaccine (Wikipedia)", url: "https://en.wikipedia.org/wiki/Vaccine" }],
}
