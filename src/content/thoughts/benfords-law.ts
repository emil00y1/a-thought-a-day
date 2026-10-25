import type { Thought } from "../types"

export const benfordsLaw: Thought = {
  slug: "benfords-law",
  title: "Benford's Law",
  category: "curious",
  emoji: "🔢",
  hook: "In lots of real data, about 30% of numbers start with a 1. That can help catch cheats.",
  body: [
    "Take a long list of real-world numbers, like town populations or stock prices. You might expect each first digit from 1 to 9 to show up equally often, about 11% of the time. It doesn't. About **30%** start with 1, and fewer than 5% start with 9.",
    "Astronomer **Simon Newcomb** spotted this in 1881: the early pages of his book of logarithm tables were more worn than the rest. Physicist **Frank Benford** tested it on over 20,000 numbers in 1938, and the law got his name. It works best for data spanning many **orders of magnitude**, say from 10 to 100,000.",
    "Why? Going from 1 to 2 means doubling, but going from 9 to 10 takes only about 11% more. So anything that grows steadily spends longer starting with 1. People who make up numbers often spread the digits too evenly, so **auditors** use the law to flag accounts worth a closer look.",
  ],
  takeaway: "In many real data sets, small first digits are far more common, and made-up numbers often miss that.",
  facts: [
    {
      q: "Why isn't it called Newcomb's law?",
      a: "It's an example of Stigler's law: discoveries are often named after someone other than the first person to find them.",
    },
    {
      q: "Does it matter if you switch units?",
      a: "Not for data that fits the law. Measure the same rivers in miles or kilometers and you still get roughly 30% ones.",
    },
    {
      q: "Can it prove election fraud?",
      a: "No. In 2020 it was misused on precinct vote counts, which sit in too narrow a range to follow the law in the first place.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "Benford's law says about 30% of numbers start with 1. About what share start with 2?",
      min: 0,
      max: 30,
      step: 1,
      answer: 18,
      tolerance: 3,
      unit: "%",
      explain: "About 17.6%. The share keeps shrinking: 12.5% for 3, down to 4.6% for 9.",
    },
    {
      type: "choice",
      question: "Which of these lists would NOT follow Benford's law?",
      options: ["Populations of world cities", "Areas of the world's lakes", "Heights of adult humans", "Prices on a stock market"],
      answer: 2,
      explain: "Adult heights sit in a narrow range. In meters, almost all of them start with 1, far more than 30%.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "The powers of 2 (2, 4, 8, 16, 32...) follow Benford's law.",
          answer: true,
          explain: "In the long run, exactly. So do the Fibonacci numbers.",
        },
        {
          text: "If a company's numbers break Benford's law, that proves fraud.",
          answer: false,
          explain: "It's only a warning sign. Plenty of honest data doesn't fit the law.",
        },
        {
          text: "Lists of local phone numbers follow Benford's law.",
          answer: false,
          explain: "Phone numbers are assigned in fixed blocks, not grown naturally, so they don't fit.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "Under Benford's law, which first digit is most common?",
      options: ["9", "5", "All are equal", "1"],
      answer: 3,
    },
    {
      question: "Which data tends to follow Benford's law best?",
      options: ["Data spanning many sizes", "Data within a narrow range", "Randomly assigned IDs", "Numbers people make up"],
      answer: 0,
    },
    {
      question: "How do auditors use Benford's law?",
      options: ["To work out how much tax is owed", "To flag numbers to check", "To prove fraud in court", "To round off totals"],
      answer: 1,
    },
  ],
  sources: [{ label: "Benford's law (Wikipedia)", url: "https://en.wikipedia.org/wiki/Benford%27s_law" }],
}
