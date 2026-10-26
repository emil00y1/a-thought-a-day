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
      question:
        "Sam wants lower taxes and fewer rules for business. Sam also wants drugs legalized and less police power. Where does Sam fit on one left-right line?",
      options: [
        "Far left, since Sam wants big changes",
        "Not neatly anywhere on a single line",
        "Right, since all of Sam's views are right-wing",
        "Dead center, since Sam is a moderate",
      ],
      answer: 1,
      explain:
        "Sam's economic views lean right, but legalizing drugs and cutting police power usually count as left. What Sam's views share is wanting less state power, which is why many models add a second axis for it.",
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
          text: "In 1789, a delegate who wanted to end the king's power would have sat on the left.",
          answer: true,
          explain: "Those pushing for radical change sat on the left. Supporters of the king sat on the right.",
        },
        {
          text: "In the UK House of Commons, the left-wing party always sits on the left side of the room.",
          answer: false,
          explain: "The sides there are government and opposition. When a new party wins power, it moves to the government benches, whatever its views.",
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
