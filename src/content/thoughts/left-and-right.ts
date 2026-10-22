import type { Thought } from "../types"

export const leftAndRight: Thought = {
  slug: "left-and-right",
  title: "Why Politics Has a Left and a Right",
  category: "ideologies",
  emoji: "🪑",
  hook: "We sort political ideas into left and right. It started with where people sat.",
  body: [
    "In 1789, during the **French Revolution**, the new National Assembly met to decide how much power the king should keep. Supporters of the king and church gathered to the president's **right**. Those who wanted radical change sat on the **left**.",
    "The seating stuck. Over the next century, \"left\" came to mean pushing for change and equality, and \"right\" came to mean protecting tradition, order and established institutions.",
    "Today the labels are rough shortcuts. Many people mix views, and political scientists often add a second axis, like how much power the state should have. One line can't capture everything people believe.",
  ],
  takeaway: "\"Left\" and \"right\" began as seats in a French assembly in 1789.",
  facts: [
    {
      q: "Do all parliaments sit in a half-circle?",
      a: "No. In the UK House of Commons, government and opposition sit on benches facing each other, as if in a debate.",
    },
    {
      q: "Why is red the Republican color in the US?",
      a: "Mostly TV. Colors varied for decades until the 2000 election fixed red for Republicans and blue for Democrats, the reverse of many countries.",
    },
    {
      q: "What is horseshoe theory?",
      a: "The claim that the far left and far right resemble each other more than the center. It's popular, but many political scientists dispute it.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Where do the political terms \"left\" and \"right\" come from?",
      options: [
        "Seating in the Roman senate",
        "Seating in a French assembly",
        "Benches in the UK House of Commons",
        "The two parties in the US Congress",
      ],
      answer: 1,
      explain: "In 1789, supporters of the king sat on the right and revolutionaries on the left.",
    },
    {
      type: "match",
      prompt: "Match each ideology with its core idea",
      pairs: [
        ["Liberalism", "Individual rights and freedoms first"],
        ["Conservatism", "Keep what works, change slowly"],
        ["Socialism", "Shared ownership and less inequality"],
        ["Libertarianism", "As little government as possible"],
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "In 1789, supporters of the king sat on the left.",
          answer: false,
          explain: "They sat on the right. Revolutionaries sat on the left.",
        },
        {
          text: "In the UK House of Commons, the two sides face each other.",
          answer: true,
          explain: "Government on one side, opposition on the other, like a debate.",
        },
        {
          text: "Most people's views fit neatly on one left-right line.",
          answer: false,
          explain: "Many people mix views, which is why many models add a second axis.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "Where did \"left\" and \"right\" in politics begin?",
      options: [
        "A French assembly in 1789",
        "The British House of Commons",
        "Early US Congress debates",
        "Greek city-state councils",
      ],
      answer: 0,
    },
    {
      question: "In 1789, who sat on the right?",
      options: [
        "Those who wanted radical change",
        "Supporters of the king",
        "Foreign ambassadors",
        "Visiting journalists",
      ],
      answer: 1,
    },
    {
      question: "Which idea fits conservatism best?",
      options: [
        "Abolish all government",
        "Keep what works, change slowly",
        "Public ownership of everything",
        "Constant revolution",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Left–right political spectrum (Wikipedia)", url: "https://en.wikipedia.org/wiki/Left%E2%80%93right_political_spectrum" }],
}
