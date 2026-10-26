import type { Thought } from "../types"

export const arrowOfTime: Thought = {
  slug: "arrow-of-time",
  title: "The Arrow of Time",
  category: "science",
  emoji: "🍳",
  hook: "You can scramble an egg, but you'll never see one unscramble itself. Why not?",
  body: [
    "Film two pool balls bouncing off each other and play it backward. It still looks fine. Most basic laws of physics work the same forward and backward in time. Yet a film of an egg unscrambling or smoke flowing back into a candle looks obviously wrong. That one-way direction is called the **arrow of time**, a name coined by the astronomer Arthur Eddington in 1927.",
    "The key is **entropy**, roughly a measure of how many ways the tiny parts of something can be arranged without changing how it looks. Messy, mixed-up arrangements vastly outnumber neat ones, so things almost always drift from order toward disorder. This is the **second law of thermodynamics**: in an isolated system, entropy tends to rise.",
    "So why was there ever any order to use up? Because the universe began in a state of very **low entropy** soon after the Big Bang. Everything since, from stars burning to eggs scrambling, is entropy slowly rising. Exactly why it started so low is still an open question.",
  ],
  takeaway: "Time seems to run one way because entropy keeps rising from the very low-entropy start of the universe.",
  facts: [
    {
      q: "Where does the word \"entropy\" come from?",
      a: "The German physicist Rudolf Clausius coined it in 1865, from a Greek word for turning or change.",
    },
    {
      q: "What's written on Ludwig Boltzmann's grave?",
      a: "His formula S = k log W, which links entropy to the number of ways the tiny parts of a system can be arranged.",
    },
    {
      q: "Can't a broken egg be unscrambled in principle?",
      a: "Yes, nothing in the laws of motion forbids it. It's just so unlikely that you'd never see it, not even in the whole age of the universe.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Played backward, which video would look obviously wrong?",
      options: [
        "A ball tossed upward and then caught",
        "A planet circling its star",
        "An ice cube melting in a drink",
        "Two marbles bumping together",
      ],
      answer: 2,
      explain: "Melting spreads heat and mixes things up, so entropy rises. The others look about as natural in either direction.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Entropy can never go down anywhere, not even in one spot.",
          answer: false,
          explain: "A fridge or a growing plant creates order in one place, but it releases heat that raises entropy even more around it.",
        },
        {
          text: "Disordered arrangements far outnumber ordered ones.",
          answer: true,
          explain: "That's why random shuffling almost always leads to a mess, never back to neat.",
        },
        {
          text: "Physicists have fully explained why the early universe had such low entropy.",
          answer: false,
          explain: "It's one of the big open puzzles in physics. Many simply treat it as a starting fact.",
        },
      ],
    },
    {
      type: "poll",
      question: "Does time really flow, or does it only feel that way?",
      options: [
        { text: "It really flows", note: "That matches everyday life. Some physicists and philosophers defend a real flow of time." },
        { text: "It only feels that way", note: "Some physicists argue the flow is in our minds, built on entropy and memory." },
        { text: "Nobody can know", note: "A fair position. This question has no settled answer in physics or philosophy." },
      ],
    },
  ],
  recall: [
    {
      question: "What is entropy, roughly?",
      options: [
        "The speed at which time passes",
        "The energy stored in an object",
        "How many ways parts can be arranged",
        "The total heat given off when things burn",
      ],
      answer: 2,
    },
    {
      question: "What does the second law of thermodynamics say?",
      options: [
        "Entropy tends to rise over time",
        "Entropy always stays the same",
        "Heat flows from cold to hot",
        "Order slowly builds up by itself",
      ],
      answer: 0,
    },
    {
      question: "Why do most physics laws not explain time's direction by themselves?",
      options: [
        "They only apply in outer space",
        "They work the same both ways",
        "They were written before clocks",
        "They ignore the motion of atoms",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Arrow of time (Wikipedia)", url: "https://en.wikipedia.org/wiki/Arrow_of_time" }],
}
