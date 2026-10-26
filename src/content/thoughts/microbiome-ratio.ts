import type { Thought } from "../types"

export const microbiomeRatio: Thought = {
  slug: "microbiome-ratio",
  title: "Are You Mostly Bacteria?",
  category: "facts",
  emoji: "🦠",
  hook: "You may have heard bacteria outnumber your own cells ten to one. The real count is much closer.",
  body: [
    "Your body is home to trillions of **bacteria**, most of them living in your **colon**, the last part of your gut. For decades, books and lectures claimed they outnumber your own cells **10 to 1**, so you were \"only 10% human\".",
    "That number came from a rough 1972 estimate by researcher Thomas Luckey. He assumed the whole gut was as packed with bacteria as the colon, and later writers repeated his figure without rechecking it.",
    "In 2016, scientists Ron Sender, Shai Fuchs and Ron Milo did a careful **recount**. For a typical young man, they estimated about **38 trillion** bacteria and 30 trillion human cells. That's roughly **1 to 1**, with plenty of uncertainty, and it varies from person to person.",
  ],
  takeaway: "You carry about as many bacterial cells as human ones, not ten times more.",
  facts: [
    {
      q: "Which of your cells are the most common?",
      a: "Red blood cells. They make up about 84% of your human cells by count, because they're tiny and there are so many of them.",
    },
    {
      q: "Can a trip to the bathroom change the ratio?",
      a: "Yes. Each bowel movement empties about a quarter to a third of the colon, enough to tip the count toward human cells for a while.",
    },
    {
      q: "Does the new count make bacteria less important?",
      a: "No. Gut bacteria still help digest food, make some vitamins and train the immune system. The 1:1 ratio just corrects a number.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "About 84% of your 30 trillion human cells are red blood cells. Leave those out, and roughly how many bacteria are there for each remaining human cell?",
      min: 0,
      max: 20,
      step: 1,
      answer: 8,
      tolerance: 2,
      unit: "bacteria",
      explain: "The other 16% is about 5 trillion cells. 38 trillion bacteria divided by 5 trillion is about 8. So the ratio depends a lot on which cells you count.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Most of your body's bacteria live on your skin.",
          answer: false,
          explain: "The colon holds by far the most. Your skin carries far fewer, though still a lot.",
        },
        {
          text: "Bacteria make up a big share of your body weight.",
          answer: false,
          explain: "Only about 0.3%. Each bacterium is tiny, so even trillions of them add up to very little.",
        },
        {
          text: "The new ratio can differ between people.",
          answer: true,
          explain: "Body size, blood volume and gut contents all shift it, so 1 to 1 is an average, not a rule.",
        },
      ],
    },
    {
      type: "choice",
      question: "Luckey treated the whole gut as if it were as packed as the colon. Which mistake is most like his?",
      options: [
        "Counting the same people twice in a town survey",
        "Judging a city's crowds by its busiest square",
        "Rounding 38 trillion down to 30 trillion",
        "Measuring a room with a broken tape",
      ],
      answer: 1,
      explain: "Like Luckey, it takes the densest spot and assumes everywhere else is just as full. That makes the total far too big.",
    },
  ],
  recall: [
    {
      question: "What is the best current estimate of bacteria to human cells?",
      options: ["About 100 to 1", "About 10 to 1", "About 1 to 10", "About 1 to 1"],
      answer: 3,
    },
    {
      question: "Where do most of your bacteria live?",
      options: ["In your colon", "On your skin", "In your mouth", "In your lungs"],
      answer: 0,
    },
    {
      question: "Why did the 10 to 1 claim spread so widely?",
      options: [
        "It was proven in many lab tests",
        "Writers copied it without checking",
        "Doctors counted cells in surgery",
        "A microscope study confirmed it",
      ],
      answer: 1,
    },
  ],
  sources: [
    {
      label: "Revised Estimates for the Number of Human and Bacteria Cells in the Body (PLOS Biology)",
      url: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002533",
    },
  ],
}
