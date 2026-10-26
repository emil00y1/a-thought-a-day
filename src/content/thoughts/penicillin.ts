import type { Thought } from "../types"

export const penicillin: Thought = {
  slug: "penicillin",
  title: "Penicillin's Lucky Accident",
  category: "research",
  emoji: "🧫",
  hook: "A moldy dish in 1928 changed medicine. Then it took over a decade to become a real drug.",
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
        { text: "First patient gets purified penicillin", detail: "1941" },
        { text: "Mass-produced doses ready for D-Day", detail: "1944" },
        { text: "Nobel Prize for Fleming, Florey and Chain", detail: "1945" },
      ],
    },
    {
      type: "choice",
      question: "Why did it take so long for penicillin to become a real medicine?",
      options: [
        "Fleming kept his find secret",
        "It was hard to purify in bulk",
        "It didn't work in humans at first",
        "It was banned until the war",
      ],
      answer: 1,
      explain: "Purifying and growing it in quantity was the hard part, and it took a team over a decade later.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "A lab spots a new mold killing bacteria in a dish. Doctors could safely use it on patients the next month.",
          answer: false,
          explain: "Killing bacteria in a dish is only the start. Like penicillin, it would need to be purified, made in bulk and tested first.",
        },
        {
          text: "Taking too small a dose of an antibiotic can help resistant bacteria take over.",
          answer: true,
          explain: "A weak dose kills the easy bacteria but lets the toughest ones survive and multiply. That's the misuse Fleming warned about.",
        },
        {
          text: "With a bigger supply of penicillin, the Oxford team's first patient in 1941 might well have survived.",
          answer: true,
          explain: "He was recovering while the drug lasted, then the infection came back when it ran out. Making enough of it was the real problem.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "How was penicillin discovered?",
      options: [
        "A planned search for antibiotics",
        "Mold grew on a dish by accident",
        "Testing plant extracts on bacteria",
        "Studying a patient's infected wound",
      ],
      answer: 1,
    },
    {
      question: "Who turned penicillin into a usable medicine?",
      options: [
        "Louis Pasteur and Joseph Lister",
        "Howard Florey and Ernst Chain",
        "Alexander Fleming alone",
        "Marie and Pierre Curie",
      ],
      answer: 1,
    },
    {
      question: "What did Fleming warn about in 1945?",
      options: [
        "People being allergic to mold",
        "Bacteria becoming resistant",
        "Running out of the mold strain",
        "The drug being too costly",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "History of penicillin (Wikipedia)", url: "https://en.wikipedia.org/wiki/History_of_penicillin" }],
}
