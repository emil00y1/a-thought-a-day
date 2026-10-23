import type { Thought } from "../types"

export const montyHall: Thought = {
  slug: "monty-hall",
  title: "The Monty Hall Problem",
  category: "curious",
  emoji: "🚪",
  hook: "Three doors, one car. Should you switch? Almost everyone gets this wrong.",
  body: [
    "On a game show there are three doors. Behind one is a car, behind the others are goats. You pick a door, say door 1. The host, who **knows** where the car is, opens another door to show a goat. Then he asks: do you want to switch?",
    "Most people say it doesn't matter: two doors left, so 50/50. But it does matter. **Switching wins 2 out of 3 times.**",
    "Why? Your first pick was right only **1 in 3** times. The other 2 in 3 times, the car is behind one of the doors you didn't pick, and the host has just shown you which one it isn't. Switching collects that 2 in 3.",
  ],
  takeaway: "New information changes the odds. Switching wins 2 out of 3 times.",
  facts: [
    {
      q: "Who made it famous?",
      a: "Marilyn vos Savant, in her 1990 magazine column. About 10,000 readers wrote in, nearly 1,000 with PhDs, mostly saying she was wrong. She wasn't.",
    },
    {
      q: "Did experts struggle too?",
      a: "Yes. The great mathematician Paul Erdős reportedly wasn't convinced until he saw a computer simulation.",
    },
    {
      q: "Who's better at it than us?",
      a: "Pigeons. In a 2010 study, pigeons learned to switch almost every time. Even with lots of practice, humans switched only about two-thirds of the time.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "You picked door 1. The host opens door 3: a goat. Do you switch to door 2?",
      options: [
        { text: "Stick with door 1", note: "Most people stick. It feels like 50/50, but sticking wins only 1 in 3 times." },
        { text: "Switch to door 2", note: "Good instinct. Switching wins 2 out of 3 times." },
      ],
    },
    {
      type: "choice",
      question: "What's your chance of winning the car if you switch?",
      options: ["1 in 2", "2 in 3", "1 in 3", "3 in 4"],
      answer: 1,
      explain: "Your first pick is right 1 in 3 times. The other 2 in 3, the car is behind the door the host left closed.",
    },
    {
      type: "estimate",
      question:
        "Now imagine 100 doors. You pick one, and the host opens 98 doors with goats. What's the chance that switching wins?",
      min: 0,
      max: 100,
      step: 1,
      answer: 99,
      tolerance: 2,
      unit: "%",
      explain: "99%. Your first pick had a 1 in 100 chance. The one door the host skipped holds the other 99.",
    },
  ],
  recall: [
    {
      question: "In the Monty Hall problem, how often does switching win?",
      options: ["1 in 2", "1 in 3", "2 in 3", "Never"],
      answer: 2,
    },
    {
      question: "Why does switching help in the Monty Hall problem?",
      options: [
        "The host opens a door at random",
        "The host knowingly shows a goat",
        "The car gets moved after your pick",
        "It doesn't, it's really 50/50",
      ],
      answer: 1,
    },
    {
      question: "Who made the Monty Hall problem famous in 1990?",
      options: ["Albert Einstein", "Marilyn vos Savant", "Monty Hall himself", "Paul Erdős"],
      answer: 1,
    },
  ],
  sources: [{ label: "Monty Hall problem (Wikipedia)", url: "https://en.wikipedia.org/wiki/Monty_Hall_problem" }],
}
