import type { Thought } from "../types"

export const penicillin: Thought = {
  slug: "penicillin",
  title: "Penicillin's Lucky Accident",
  category: "research",
  emoji: "🧫",
  hook: "A moldy dish in 1928 changed medicine. Then it took over a decade to save anyone.",
  body: [
    "In September 1928, **Alexander Fleming** came back from holiday to his messy London lab. On one dish of bacteria, a blob of mold had grown, and around it the bacteria had died. The mold was **Penicillium**.",
    "Fleming published his find, but he couldn't make enough pure penicillin to treat anyone, and interest faded. Over ten years later, a team at Oxford led by **Howard Florey** and **Ernst Chain** worked out how to purify it.",
    "Their first patient, a police officer in 1941, began to recover, until the tiny supply ran out. Then mass production took off during World War II, and penicillin went on to save **millions of lives**. The lucky accident only mattered because others did the hard work.",
  ],
  takeaway: "Discovery is often luck. Turning it into something useful takes years of work.",
  facts: [
    {
      q: "How scarce was the first supply?",
      a: "So scarce that the Oxford team recovered penicillin from their patient's urine to use it again.",
    },
    {
      q: "Where did the best mold come from?",
      a: "A moldy cantaloupe from a market in Peoria, Illinois, in 1943. Its strain made far more penicillin.",
    },
    {
      q: "Did Fleming see resistance coming?",
      a: "Yes. In his 1945 Nobel Prize lecture, he warned that misusing penicillin would breed resistant bacteria.",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Put penicillin's story in order",
      items: [
        { text: "Fleming spots mold killing bacteria", detail: "1928" },
        { text: "Florey and Chain start purifying it", detail: "1939" },
        { text: "First patient is treated", detail: "1941" },
        { text: "Mass-produced doses ready for D-Day", detail: "1944" },
        { text: "Nobel Prize for Fleming, Florey and Chain", detail: "1945" },
      ],
    },
    {
      type: "choice",
      question: "Why did it take so long for penicillin to help anyone?",
      options: ["Fleming kept it secret", "Nobody could make enough of it, pure", "It didn't work in humans at first", "It was banned"],
      answer: 1,
      explain: "Purifying and growing it in quantity was the hard part, and it took a team over a decade later.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Fleming found penicillin on purpose after years of searching.",
          answer: false,
          explain: "It was an accident: a mold contaminated one of his dishes.",
        },
        {
          text: "Fleming got the Nobel Prize alone.",
          answer: false,
          explain: "He shared it with Howard Florey and Ernst Chain in 1945.",
        },
        {
          text: "The first patient died because the penicillin ran out.",
          answer: true,
          explain: "He improved for days, but the supply ran out and the infection came back.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "How was penicillin discovered?",
      options: [
        "A planned search for antibiotics",
        "A mold accidentally contaminated a dish of bacteria",
        "From a plant extract",
        "In a soldier's wound",
      ],
      answer: 1,
    },
    {
      question: "Who turned penicillin into a usable medicine?",
      options: ["Louis Pasteur", "Howard Florey and Ernst Chain", "Marie Curie", "Robert Koch"],
      answer: 1,
    },
    {
      question: "What did Fleming warn about in 1945?",
      options: ["Mold allergies", "Bacteria becoming resistant if penicillin is misused", "Its high price", "Its taste"],
      answer: 1,
    },
  ],
  sources: [{ label: "History of penicillin (Wikipedia)", url: "https://en.wikipedia.org/wiki/History_of_penicillin" }],
}
