import type { Thought } from "../types"

export const mozartEffect: Thought = {
  slug: "mozart-effect",
  title: "The Mozart Effect",
  category: "research",
  emoji: "🎻",
  hook: "Does listening to Mozart make you smarter? One small study set off a craze.",
  body: [
    "In 1993, **Frances Rauscher** and two colleagues published a short study in the journal Nature. Thirty-six college students took **spatial reasoning** tests, like imagining how folded and cut paper would look, after 10 minutes of a Mozart sonata, relaxation instructions, or silence. After Mozart, they scored a little higher, but the boost was gone within about 15 minutes.",
    "The press turned this into \"Mozart makes you smarter\", especially for babies. Mozart CDs for kids sold well, and in 1998 Georgia's governor proposed giving every newborn in the state a classical music CD. But the study never measured general IQ at all. Rauscher later wrote, \"We made no such claim.\"",
    "Other labs mostly failed to **replicate** the result. A 1999 **meta-analysis** found any effect was small and limited to one kind of task. Other work tied it to **arousal**: music you enjoy can briefly wake you up and lift your mood. In one study, a Stephen King story worked just as well as Mozart, but only for people who liked what they heard.",
  ],
  takeaway: "Mozart doesn't make you smarter; anything you enjoy can give your brain a brief boost.",
  facts: [
    {
      q: "Which piece did the students hear?",
      a: "Mozart's Sonata for Two Pianos in D major, K. 448. It's a lively, upbeat piece.",
    },
    {
      q: "What did Rauscher think of the CD plan?",
      a: "She said it couldn't hurt, but added, \"I do think the money could be better spent on music education programs.\"",
    },
    {
      q: "Does Mozart help with epilepsy?",
      a: "Some small studies suggested K. 448 reduced seizure activity. A 2023 meta-analysis found that evidence too weak to rely on.",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Put these events in order, earliest first",
      items: [
        { text: "Rauscher's study appears in Nature", detail: "1993" },
        { text: "Don Campbell's book \"The Mozart Effect\" comes out", detail: "1997" },
        { text: "Georgia plans a classical CD for every newborn", detail: "1998" },
        { text: "A review of 39 studies finds little evidence", detail: "2010" },
      ],
      explain: "The hype grew fast, while the evidence took years to catch up and mostly didn't back it.",
    },
    {
      type: "choice",
      question: "Students do slightly better on puzzles after hearing upbeat pop songs they love. What does that suggest?",
      options: [
        "Mozart's music is uniquely powerful",
        "Mood and alertness drive the boost",
        "Pop music raises long-term IQ scores",
        "Puzzle tests can never be trusted",
      ],
      answer: 1,
      explain: "If any enjoyable music works, the effect isn't about Mozart. It's about feeling more awake and upbeat.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "The original 1993 study tested babies and young children.",
          answer: false,
          explain: "It tested 36 college students. The claims about babies came later, from the press and marketers.",
        },
        {
          text: "Studies linked to the original researchers tended to find bigger effects.",
          answer: true,
          explain: "A 2010 meta-analysis found their effects were more than three times larger, a warning sign.",
        },
        {
          text: "Learning to play an instrument is the same thing as the Mozart effect.",
          answer: false,
          explain: "The Mozart effect is about listening. Whether music lessons help children is a separate question.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What did the 1993 study actually measure?",
      options: ["General IQ in babies", "Long-term memory", "Short-term spatial skill", "Math grades over a year"],
      answer: 2,
    },
    {
      question: "Why did the Mozart effect lose support?",
      options: [
        "Mozart CDs were taken off sale",
        "Other labs couldn't repeat it",
        "The original data were faked",
        "Rauscher withdrew her paper",
      ],
      answer: 1,
    },
    {
      question: "What did Rauscher say about claims that Mozart raises intelligence?",
      options: ["She never claimed that", "She proved it in 1997", "It works only for babies", "It works for any composer"],
      answer: 0,
    },
  ],
  sources: [{ label: "Mozart effect (Wikipedia)", url: "https://en.wikipedia.org/wiki/Mozart_effect" }],
}
