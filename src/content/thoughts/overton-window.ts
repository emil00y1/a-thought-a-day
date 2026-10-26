import type { Thought } from "../types"

export const overtonWindow: Thought = {
  slug: "overton-window",
  title: "The Overton Window",
  category: "ideologies",
  emoji: "🪟",
  hook: "Some ideas are fine to say out loud, others get you laughed off stage. That line moves.",
  body: [
    "At any moment, only some policy ideas seem reasonable to most people. Politicians can back those without looking extreme, while ideas outside the range sound crazy or dangerous. This range is called the **Overton window**.",
    "It's named after **Joseph Overton** of the Mackinac Center, a free-market think tank in Michigan. In the 1990s he sketched it to explain what think tanks do. After he died in a 2003 plane crash, his colleague **Joseph Lehman** gave the idea its name.",
    "The key point is that the window **shifts**. Ideas once seen as radical, like letting women vote, can become ordinary policy, while once-normal ones, like child labor, can fall out. Lehman argued that politicians mostly **follow** the window rather than move it. Shifts usually come from wider changes in public opinion.",
  ],
  takeaway: "What counts as a reasonable idea isn't fixed: the range of acceptable politics moves as public opinion moves.",
  facts: [
    {
      q: "Is the window a left or right idea?",
      a: "Neither. It describes how opinion works, not which ideas are good. Activists on every side use it to think about strategy.",
    },
    {
      q: "Can you move the window on purpose?",
      a: "Some try, by loudly backing a very bold idea so that a milder version seems moderate next to it. Whether this works is debated.",
    },
    {
      q: "Is it only about politics?",
      a: "No. Writers have used it for shifts in medicine, climate policy and even web standards, anywhere the line of what's acceptable moves.",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Commentator Joshua Treviño ranked how accepted an idea can be. Order his steps, least accepted first",
      items: [
        { text: "Unthinkable", detail: "Outside the window" },
        { text: "Radical", detail: "Outside the window" },
        { text: "Acceptable", detail: "Inside the window" },
        { text: "Sensible", detail: "Inside the window" },
        { text: "Popular", detail: "Inside the window" },
        { text: "Policy", detail: "Already law" },
      ],
      explain: "An idea can climb these steps over years, or slide back down them.",
    },
    {
      type: "choice",
      question: "According to Lehman, what do most politicians do with the Overton window?",
      options: [
        "Drag it toward their own views",
        "Ignore it when they write laws",
        "Find where it is and stay inside",
        "Close it to block new ideas",
      ],
      answer: 2,
      explain: "Lehman said lawmakers are in the business of detecting where the window is, then moving to match it.",
    },
    {
      type: "poll",
      question: "Is it good that the window can shift?",
      options: [
        { text: "Yes, it lets society improve", note: "Many reforms now taken for granted once sat far outside the window." },
        { text: "It's risky, bad ideas get in too", note: "A fair worry. The window can shift toward ideas you dislike as easily as ones you like." },
        { text: "Neither, it's just how it works", note: "That was Lehman's view. He compared it to gravity: a description, not a goal." },
      ],
    },
  ],
  recall: [
    {
      question: "What does the Overton window describe?",
      options: ["The voting age in a country", "Ideas the public finds acceptable", "How long politicians stay in office", "Which laws courts can overturn"],
      answer: 1,
    },
    {
      question: "Who gave the Overton window its name?",
      options: ["Joseph Overton himself", "A New York Times reporter", "Joseph Lehman, his colleague", "A professor at Harvard"],
      answer: 2,
    },
    {
      question: "Which example fits a shift of the window?",
      options: [
        "Child labor going from normal to banned",
        "One party winning a very close election",
        "A senator switching to a different party",
        "A court striking down a single old law",
      ],
      answer: 0,
    },
  ],
  sources: [{ label: "Overton window (Wikipedia)", url: "https://en.wikipedia.org/wiki/Overton_window" }],
}
