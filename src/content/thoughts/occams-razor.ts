import type { Thought } from "../types"

export const occamsRazor: Thought = {
  slug: "occams-razor",
  title: "Occam's Razor",
  category: "philosophy",
  emoji: "🪒",
  hook: "Prefer the simpler explanation. But simpler doesn't mean true.",
  body: [
    "**Occam's razor** is named after **William of Ockham**, an English friar and philosopher who died in 1347. It's also called the principle of **parsimony**: don't add more parts to an explanation than you need. The \"razor\" shaves away extra assumptions.",
    "Here's what it says: if two explanations fit the evidence equally well, start with the one that needs the fewest **assumptions**. If your lamp won't turn on, check the bulb before suspecting a citywide blackout. Every extra assumption is one more thing that could be wrong.",
    "Here's what it doesn't say: that the simplest idea is always true. It's a **rule of thumb** for choosing where to look first, not a proof. Einstein's relativity is more complicated than Newton's laws, yet it wins because it matches the evidence better.",
  ],
  takeaway: "When explanations fit the facts equally well, start with the one that assumes the least, but let evidence have the final say.",
  facts: [
    {
      q: "Did Ockham write the famous line?",
      a: "No. \"Entities must not be multiplied beyond necessity\" comes from John Punch in 1639, nearly 300 years after Ockham died. Ockham said similar things in other words.",
    },
    {
      q: "Was the idea his?",
      a: "Not originally. Aristotle and the astronomer Ptolemy praised simple explanations long before. Ockham just used the idea so often that his name stuck to it.",
    },
    {
      q: "How do doctors use it?",
      a: "Medical students learn: \"When you hear hoofbeats, think of horses, not zebras.\" Try the common illness before the rare one.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Your phone suddenly won't charge. Which explanation does Occam's razor say to check first?",
      options: [
        "A hacker turned off your charging",
        "The cable is worn out or loose",
        "The phone and outlet both broke",
        "A power surge hit the whole street",
      ],
      answer: 1,
      explain: "It explains the problem with a single, common failure. The others need rarer events or several things to go wrong at once.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Occam's razor proves that the simplest explanation is correct.",
          answer: false,
          explain: "It only tells you which idea to test first. A more complex explanation can still turn out to be right.",
        },
        {
          text: "The razor is meant for explanations that fit the evidence equally well.",
          answer: true,
          explain: "If one explanation fits the evidence clearly better, that matters more than which is simpler.",
        },
        {
          text: "Someone can always add excuses to save a failing explanation.",
          answer: true,
          explain: "\"It was a ghost, and it hid from the camera too\" can't be fully disproved. The razor helps by cutting such extra excuses.",
        },
      ],
    },
    {
      type: "poll",
      question: "Do you think simpler explanations are more likely to be true?",
      options: [
        { text: "Yes, usually", note: "Many scientists lean this way: each added assumption is another chance to be wrong." },
        { text: "No, they're just easier to test", note: "Some philosophers argue this: simplicity is a practical tool, not a sign of truth." },
        { text: "It depends on the subject", note: "Fair. Living things, economies and the weather are often messier than simple models suggest." },
      ],
    },
  ],
  recall: [
    {
      question: "What does Occam's razor recommend?",
      options: [
        "Always trust the expert's view",
        "Pick the idea most people believe",
        "Prefer the most detailed explanation",
        "Start with the fewest assumptions",
      ],
      answer: 3,
    },
    {
      question: "What does the \"razor\" cut away?",
      options: [
        "Unneeded assumptions",
        "Inaccurate measurements",
        "Long, boring words",
        "Unpopular opinions",
      ],
      answer: 0,
    },
    {
      question: "Who was William of Ockham?",
      options: [
        "A Greek mathematician",
        "An English friar",
        "A French scientist",
        "A Roman general",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Occam's razor (Wikipedia)", url: "https://en.wikipedia.org/wiki/Occam%27s_razor" }],
}
