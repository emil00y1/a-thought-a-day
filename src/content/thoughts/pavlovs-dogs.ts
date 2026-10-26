import type { Thought } from "../types"

export const pavlovsDogs: Thought = {
  slug: "pavlovs-dogs",
  title: "Pavlov's Dogs",
  category: "experiments",
  emoji: "🔔",
  hook: "A scientist studying spit discovered one of the most basic ways we learn.",
  body: [
    "**Ivan Pavlov** was a Russian scientist who studied digestion in dogs, and he won a Nobel Prize for it in 1904. While measuring their saliva, he noticed something odd: the dogs began drooling before any food arrived, as soon as they saw the lab worker who usually fed them.",
    "So he tested it. A sound that means nothing to a dog at first, a **neutral stimulus**, was played just before food, again and again. Soon the sound alone made the dogs drool. It had become a **conditioned stimulus**, and the drooling a **conditioned response**. This kind of learning by linking two things is called **classical conditioning**.",
    "Famously, the sound was a bell. But Pavlov's own writings describe many signals: metronomes, buzzers, whistles, tuning forks, lights and even electric shocks. Historians still argue over how much, if at all, he used a bell.",
  ],
  takeaway: "When a signal keeps coming right before something important, we learn to react to the signal itself.",
  facts: [
    {
      q: "Was Pavlov the only one to spot this?",
      a: "No. Edwin Twitmyer in Philadelphia published similar findings in 1902, a year before Pavlov published his.",
    },
    {
      q: "Can the learning be undone?",
      a: "Partly. Play the sound often enough without food and the drooling fades, called extinction. But after a rest it can come back, though usually weaker.",
    },
    {
      q: "Does it always take many repeats?",
      a: "No. Get sick once after eating a new food, and you may feel queasy at its smell for a long time. One pairing can be enough.",
    },
  ],
  activities: [
    {
      type: "match",
      prompt: "At the dentist, the drill whines just before it hurts. Now Mia flinches at the whine alone. Match each term to her story",
      pairs: [
        ["Neutral stimulus", "The whine, before her first visit"],
        ["Conditioned stimulus", "The whine, after many visits"],
        ["Conditioned response", "Flinching when she hears the whine"],
        ["Extinction", "The flinch fades after painless visits"],
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "The dogs learned because they were rewarded for doing something.",
          answer: false,
          explain: "The dogs didn't have to do anything. The food came either way; they simply learned that the sound predicted it.",
        },
        {
          text: "Pavlov first noticed the effect while studying something else.",
          answer: true,
          explain: "He was measuring saliva to study digestion when the early drooling got in the way.",
        },
        {
          text: "Classical conditioning only works on dogs and other animals.",
          answer: false,
          explain: "People learn this way too. Your mouth may water at the sound of a snack wrapper.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What first made Pavlov's dogs drool early?",
      options: [
        "Seeing the person who fed them",
        "The smell of the other dogs eating",
        "Hearing the ring of a bell",
        "Being let out of their cages",
      ],
      answer: 0,
    },
    {
      question: "What is classical conditioning?",
      options: [
        "Being rewarded with treats for doing tricks",
        "Copying what others around you do",
        "Learning to link a signal to an event",
        "Forgetting things you don't practice",
      ],
      answer: 2,
    },
    {
      question: "Which signals do Pavlov's own writings describe?",
      options: [
        "Only a ringing church bell",
        "Metronomes and buzzers",
        "Only the trainer's spoken words",
        "Only hand claps",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Ivan Pavlov (Wikipedia)", url: "https://en.wikipedia.org/wiki/Ivan_Pavlov" }],
}
