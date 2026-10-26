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
      question: "Maya has a test in 10 days and 3 hours to study. Which plan will help her remember the most on test day?",
      options: [
        "Reread her notes for 1 hour on days 1, 4 and 8",
        "Quiz herself for 1 hour on days 1, 4 and 8",
        "Quiz herself for 3 hours the night before",
        "Reread her notes for 3 hours the night before",
      ],
      answer: 1,
      explain:
        "It's the only plan that uses both tricks: spacing reviews over days and testing herself instead of rereading. Cramming the night before helps for a day, then fades fast.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "You learn 20 new words on Monday and never review them. You'll lose more of them from Monday to Tuesday than from Friday to Saturday.",
          answer: true,
          explain: "The curve is steepest right after learning, then levels off. Most of the loss happens in the first day.",
        },
        {
          text: "If you can't remember an answer during a self-quiz, the quiz was a waste of time.",
          answer: false,
          explain: "Struggling to recall, then checking the answer, still strengthens the memory. That's the testing effect.",
        },
        {
          text: "To remember a new phone number for months, recalling it a few times over a couple of weeks beats repeating it 50 times in one go.",
          answer: true,
          explain: "Spaced recall flattens the curve each time. Fifty repeats in a row is cramming: strong for an hour, weak a week later.",
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
