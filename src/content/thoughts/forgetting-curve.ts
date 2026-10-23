import type { Thought } from "../types"

export const forgettingCurve: Thought = {
  slug: "forgetting-curve",
  title: "The Forgetting Curve",
  category: "research",
  emoji: "🧠",
  hook: "Why will you forget most of today by next week, and how do you stop it?",
  body: [
    "In the 1880s, German psychologist **Hermann Ebbinghaus** turned himself into a lab rat. He memorized long lists of meaningless syllables like \"DAX\" and \"ZOF\", then tested how much he still knew hours and days later.",
    "The result was the **forgetting curve**: memory drops steeply right after learning, then levels off. Without review, a big chunk of something new is gone within a day.",
    "The good news: every time you pull a memory back out, the curve gets flatter. Short reviews **spaced out over days** beat one long cram, and **testing yourself** beats rereading. That's exactly why this app quizzes you on old thoughts.",
  ],
  takeaway: "Memory fades fastest right after learning. Spaced self-testing flattens the curve.",
  facts: [
    {
      q: "Why nonsense syllables?",
      a: "Real words come with meaning and memories attached. Nonsense let Ebbinghaus measure pure memorizing.",
    },
    {
      q: "Has anyone repeated his experiment?",
      a: "Yes. A 2015 study by Murre and Dros redid it and got a very similar curve, 130 years later.",
    },
    {
      q: "What is the \"testing effect\"?",
      a: "Recalling something strengthens memory more than reading it again. Struggling to remember is part of learning.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "What did Ebbinghaus memorize to study forgetting?",
      options: ["Lists of everyday words", "Nonsense syllables", "Strings of random digits", "Chess positions"],
      answer: 1,
      explain: "He used made-up syllables so that meaning and past knowledge couldn't help him.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Forgetting is fastest right after you learn something.",
          answer: true,
          explain: "The curve is steepest at the start, then levels off.",
        },
        {
          text: "Rereading your notes is the best way to remember them.",
          answer: false,
          explain: "Testing yourself works better. Rereading feels productive but builds weaker memories.",
        },
        {
          text: "Three short reviews over a week beat one long session the night before.",
          answer: true,
          explain: "That's the spacing effect, which Ebbinghaus noticed too.",
        },
      ],
    },
    {
      type: "poll",
      question: "How do you usually study?",
      options: [
        { text: "Reread my notes", note: "Feels good, but builds weak memories. Try covering the page and recalling instead." },
        { text: "Highlight the key bits", note: "Mostly decoration. Research finds little benefit from highlighting on its own." },
        { text: "Test myself", note: "The winner. Retrieval practice is one of the best-studied learning tools there is." },
        { text: "Cram the night before", note: "Works for tomorrow, then fades fast. Spacing it out is the fix." },
      ],
    },
  ],
  recall: [
    {
      question: "What does the forgetting curve show?",
      options: [
        "We forget fastest right after learning",
        "We forget at the same steady rate forever",
        "Old memories fade faster than new ones",
        "Sleep wipes out most new memories",
      ],
      answer: 0,
    },
    {
      question: "Which study habit beats rereading for long-term memory?",
      options: ["Highlighting", "Testing yourself", "Reading faster", "Listening to music"],
      answer: 1,
    },
    {
      question: "Who first mapped the forgetting curve?",
      options: ["Sigmund Freud", "Ivan Pavlov", "Hermann Ebbinghaus", "William James"],
      answer: 2,
    },
  ],
  sources: [{ label: "Forgetting curve (Wikipedia)", url: "https://en.wikipedia.org/wiki/Forgetting_curve" }],
}
