import type { Thought } from "../types"

export const moravecsParadox: Thought = {
  slug: "moravecs-paradox",
  title: "Moravec's Paradox",
  category: "research",
  emoji: "🤖",
  hook: "A computer beat the world chess champion in 1997. Robots still struggle with chores a toddler can help with.",
  body: [
    "In 1966, MIT's AI lab launched the **Summer Vision Project**: students would spend one summer building a large part of a system that could see. Computer vision ended up taking decades. Meanwhile, programs were already proving math theorems and playing checkers.",
    "Roboticist **Hans Moravec** summed up the pattern in 1988. It's fairly easy, he wrote, to make computers match adults on intelligence tests or at checkers, and hard or impossible to give them the perception and movement skills of a one-year-old. This is **Moravec's paradox**.",
    "His explanation was **evolution**. Seeing, grasping and walking have been refined over hundreds of millions of years, so we do them without noticing. Abstract reasoning is, in his words, a new trick, perhaps less than 100,000 years old. It feels hard only because we're new at it. Today's AI partly fits: chatbots write essays, while a robot that can tidy any kitchen is still a research goal.",
  ],
  takeaway: "What feels effortless to us is often the hardest thing to teach a machine, because evolution did the hard work out of sight.",
  facts: [
    {
      q: "Who else noticed it?",
      a: "Steven Pinker wrote in 1994 that \"the main lesson of thirty-five years of AI research is that the hard problems are easy and the easy problems are hard.\"",
    },
    {
      q: "Why can't we just explain our skills to a robot?",
      a: "Marvin Minsky's point: we're least aware of what our minds do best. You can explain long division, but not how you recognize a friend's face.",
    },
    {
      q: "Does everyone agree?",
      a: "No. Computer scientist Arvind Narayanan argues it mostly reflects what AI researchers chose to work on, not a reliable guide to what will be easy or hard.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Which task would Moravec's paradox predict is hardest for a robot?",
      options: [
        "Multiplying two 20-digit numbers",
        "Beating a checkers champion",
        "Finding a sock in a messy drawer",
        "Solving a page of algebra",
      ],
      answer: 2,
      explain: "A child can do it, but it takes vision, touch and fine movement, the old skills evolution polished and computers find hardest.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Moravec thought abstract reasoning is very hard in itself.",
          answer: false,
          explain: "He said it isn't all that hard. It only seems so because it's new for our brains.",
        },
        {
          text: "Skills we do without thinking tend to be the hardest to program.",
          answer: true,
          explain: "Because they run below our awareness, we can't easily spell out how we do them.",
        },
        {
          text: "MIT's 1966 project cracked computer vision in a single summer.",
          answer: false,
          explain: "It was meant to make big progress in one summer. Getting computers to see well took decades.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What does Moravec's paradox say?",
      options: [
        "Computers learn faster than children",
        "Robots will never beat us at games",
        "Our easy skills are hard for machines",
        "Hard math is hard for machines too",
      ],
      answer: 2,
    },
    {
      question: "How did Moravec explain the paradox?",
      options: ["Evolution's long head start", "Too little computer memory", "Poorly written AI programs", "A shortage of training data"],
      answer: 0,
    },
    {
      question: "Which of these skills is the newest in evolution?",
      options: ["Recognizing faces", "Walking on two legs", "Catching a ball", "Doing algebra"],
      answer: 3,
    },
  ],
  sources: [{ label: "Moravec's paradox (Wikipedia)", url: "https://en.wikipedia.org/wiki/Moravec%27s_paradox" }],
}
