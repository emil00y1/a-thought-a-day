import type { Thought } from "../types"

export const survivorshipBias: Thought = {
  slug: "survivorship-bias",
  title: "Survivorship Bias",
  category: "history",
  emoji: "✈️",
  hook: "Why WWII bombers needed armor exactly where they had no bullet holes.",
  body: [
    "During World War II, the US military studied bombers coming back from missions. The bullet holes clustered on the wings and body. The obvious plan: add armor where the holes were.",
    "Statistician **Abraham Wald** saw the flaw. These were only the planes that **made it back**. Planes hit in the engines mostly didn't return, so they were missing from the data. The armor belonged where the survivors had **no** holes.",
    "This is **survivorship bias**: judging by what survived and forgetting what didn't. It's why old buildings seem better built, and why dropout billionaires make dropping out look smart.",
  ],
  takeaway: "Look for what's missing. The data you see is often only the survivors.",
  facts: [
    {
      q: "Is the bomber story true?",
      a: "Mostly. Abraham Wald wrote real wartime reports on it. The famous picture of a plane covered in red dots is a modern illustration.",
    },
    {
      q: "Why does old music sound better?",
      a: "Partly survivorship. We still hear the hits from 1975, not the thousands of forgettable songs from the same year.",
    },
    {
      q: "Where else does it show up?",
      a: "Investing. Funds that shut down vanish from the records, so average past returns look better than they really were.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Returning bombers had holes in the wings but few in the engines. Where should the armor go?",
      options: [
        "The wings, where the holes are",
        "The engines, where holes are rare",
        "Spread evenly over the whole plane",
        "Nowhere, armor is too heavy",
      ],
      answer: 1,
      explain: "Planes hit in the engines didn't come back to be counted. No holes there means hits there were deadly.",
    },
    {
      type: "match",
      prompt: "Match each example to the data that's missing",
      pairs: [
        ["Bombers", "The planes that were shot down"],
        ["Dropout billionaires", "Dropouts who never got rich"],
        ["Old buildings", "The ones that fell down"],
        ["Hit songs from the 70s", "The forgotten flops"],
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Old buildings seem better made partly because badly built ones are gone.",
          answer: true,
          explain: "We only see the ones that lasted.",
        },
        {
          text: "Studying only successful startups is a reliable way to learn what makes companies succeed.",
          answer: false,
          explain: "Many failed startups did the same things. You need to look at both.",
        },
        {
          text: "Survivorship bias can make risky choices look safer than they are.",
          answer: true,
          explain: "The people it went badly for aren't around to tell the story.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What is survivorship bias?",
      options: [
        "Judging only by what survived",
        "Thinking you're luckier than most",
        "Trusting older people more",
        "Remembering bad events more than good",
      ],
      answer: 0,
    },
    {
      question: "Where did Abraham Wald suggest adding armor to bombers?",
      options: [
        "Where returning planes had the most holes",
        "Where returning planes had no holes",
        "Evenly over the whole plane",
        "Nowhere, to keep planes light",
      ],
      answer: 1,
    },
    {
      question: "Why do dropout billionaires make dropping out look smart?",
      options: [
        "Dropping out really does pay off",
        "We don't see the dropouts who failed",
        "Billionaires hide their college degrees",
        "Schools hide how well dropouts do",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Survivorship bias (Wikipedia)", url: "https://en.wikipedia.org/wiki/Survivorship_bias" }],
}
