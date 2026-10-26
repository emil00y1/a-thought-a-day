import type { Thought } from "../types"

export const mandelaEffect: Thought = {
  slug: "mandela-effect",
  title: "The Mandela Effect",
  category: "curious",
  emoji: "🌀",
  hook: "Thousands of people remember the same thing that never happened. How?",
  body: [
    "Paranormal writer Fiona Broome clearly remembered news of Nelson Mandela dying in prison in the 1980s. In fact, he was freed in 1990, became South Africa's president and died in 2013. When she found many others shared her memory, she named it the **Mandela effect**: a **false memory** shared by lots of people.",
    "Famous examples: many remember the children's books as the \"Berenstein\" Bears, but they've always been the **Berenstain Bears**. And in The Empire Strikes Back, Darth Vader never says \"Luke, I am your father\". He says \"No, I am your father\".",
    "Some fans joke about parallel universes, but psychologists have simpler answers. Memory isn't a recording. We **rebuild** it each time, filling gaps with what seems likely, like the common name ending \"-stein\". And when people repeat the same error, others pick it up, so it spreads like any **misquote**.",
  ],
  takeaway: "Memory rebuilds the past instead of replaying it, so whole crowds can confidently share the same mistake.",
  facts: [
    {
      q: "Why might people remember Mandela dying in prison?",
      a: "One idea: they mix him up with Steve Biko, another South African anti-apartheid leader, who did die in police custody in 1977.",
    },
    {
      q: "Does the Monopoly man wear a monocle?",
      a: "No, but many people picture one. A 2022 study found people also misremember other icons, like the tip of Pikachu's tail, in the same wrong way.",
    },
    {
      q: "What does the Queen in Disney's Snow White really say?",
      a: "\"Magic mirror on the wall\", not \"Mirror, mirror\". The fairy tale's wording is so familiar that people swap it in.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "A clock at Bologna station was stopped at the time of a 1980 bombing, but only in 1996. What percent of people surveyed thought it had been stopped since 1980?",
      min: 0,
      max: 100,
      step: 1,
      answer: 92,
      tolerance: 6,
      unit: "%",
      explain: "92%. The clock was repaired after the bombing and ran for years, yet a shared story replaced what people had actually seen.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Feeling very sure about a memory means it's probably accurate.",
          answer: false,
          explain: "Confidence and accuracy often part ways. Mandela effect memories are usually held with great certainty.",
        },
        {
          text: "A false memory can spread from person to person.",
          answer: true,
          explain: "Hearing others repeat an error, online or off, can reshape your own memory of it.",
        },
        {
          text: "Psychologists coined the term in a lab study.",
          answer: false,
          explain: "It came from Broome, a paranormal writer. Scientists studied the effect later, mostly as ordinary false memory.",
        },
      ],
    },
    {
      type: "choice",
      question: "Why do so many people remember \"Berenstein\" instead of \"Berenstain\"?",
      options: [
        "The books were once printed that way",
        "The brain fills in a more familiar pattern",
        "The authors changed their name later",
        "A popular TV show used that spelling",
      ],
      answer: 1,
      explain: "Names ending in \"-stein\" are far more common, so memory quietly corrects the odd spelling to the expected one.",
    },
  ],
  recall: [
    {
      question: "What is the Mandela effect?",
      options: ["A shared false memory", "A rare kind of amnesia", "A fear of public speaking", "A trick used by magicians"],
      answer: 0,
    },
    {
      question: "What does Darth Vader actually say to Luke?",
      options: ["\"Luke, I am your father\"", "\"Luke, you are my son\"", "\"No, I am your father\"", "\"I am your father, Luke\""],
      answer: 2,
    },
    {
      question: "How do psychologists mainly explain the Mandela effect?",
      options: [
        "We slip between parallel worlds",
        "Old films were secretly edited",
        "People lie to fit in with others",
        "Memory rebuilds the past each time",
      ],
      answer: 3,
    },
  ],
  sources: [{ label: "False memory (Wikipedia)", url: "https://en.wikipedia.org/wiki/False_memory" }],
}
