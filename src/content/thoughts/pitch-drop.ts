import type { Thought } from "../types"

export const pitchDrop: Thought = {
  slug: "pitch-drop",
  title: "The Pitch Drop Experiment",
  category: "experiments",
  emoji: "🫗",
  hook: "A blob of tar has been dripping in Australia since 1930. Nine drops have fallen, and nobody saw one fall.",
  body: [
    "In 1927, physics professor **Thomas Parnell** at the University of Queensland poured hot **pitch**, a tar-like substance, into a glass funnel with a sealed stem. He let it settle for three years, then cut the stem in 1930. Pitch feels solid and shatters if you hit it with a hammer, yet it slowly flows. The first drop fell eight years later, in 1938.",
    "Only nine drops have fallen since, and no one has watched one drop on its own. Custodian **John Mainstone**, who looked after it for 52 years, missed the 1988 drop because he'd stepped out for a drink. In 2000, the webcam pointed at it failed at the key moment. Mainstone died in 2013 without ever seeing one fall. The ninth drop, in 2014, snapped off when the glass jar was being swapped.",
    "Guinness lists it as the **longest-running lab experiment**. Estimates put pitch at roughly 100 to 230 billion times as **viscous**, or thick and slow-flowing, as water. Air conditioning added after 1988 slowed it further: the gap between drops grew from about 8 years to over 12. In 2013, a similar setup at Trinity College Dublin became the first to catch a drop falling on camera.",
  ],
  takeaway: "Some things that look solid are really liquids, flowing too slowly for us to notice.",
  facts: [
    {
      q: "Is it the oldest pitch drop setup?",
      a: "No. One at Aberystwyth University in Wales dates from 1914, but its pitch is so stiff it isn't expected to drip for over 1,000 years.",
    },
    {
      q: "Did it ever win a prize?",
      a: "Yes. In 2005, Mainstone and the late Parnell won an Ig Nobel Prize, a playful award for research that makes people laugh and then think.",
    },
    {
      q: "Can you watch for the next drop?",
      a: "Yes. A live stream shows it, and tens of thousands of people from around 160 countries have signed up to view it.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "Before air conditioning, roughly how many years did each drop take to fall?",
      min: 1,
      max: 20,
      step: 1,
      answer: 8,
      tolerance: 1,
      unit: "years",
      explain: "Each of the first seven drops took about 7 to 9 years. In the cooler room, the last two took 12 to 13 years each.",
    },
    {
      type: "poll",
      question: "Would you spend decades looking after an experiment you might never see finish?",
      options: [
        { text: "Yes, I'd love that", note: "You'd be in good company. Mainstone did it for 52 years, and a third custodian has taken over since." },
        { text: "Only if I got results", note: "Fair. But this one was never about new results. It's a demonstration for students." },
        { text: "No, life is too short", note: "Understandable. Parnell and Mainstone both died before seeing a drop fall." },
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Pitch at room temperature can shatter if you hit it with a hammer.",
          answer: true,
          explain: "It breaks like a solid under a sudden blow, but over years it flows like a very thick liquid.",
        },
        {
          text: "The experiment is kept in a sealed, carefully controlled lab.",
          answer: false,
          explain: "It sits in a display cabinet in a building foyer, so its flow speeds up and slows down with the seasons.",
        },
        {
          text: "The first drop fell within a year of the stem being cut.",
          answer: false,
          explain: "It took about eight years, from 1930 to 1938.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "Why did John Mainstone miss the 1988 drop?",
      options: ["The building was closed", "He'd stepped out for a drink", "The webcam had failed", "He was asleep at home"],
      answer: 1,
    },
    {
      question: "What does the pitch drop experiment show?",
      options: [
        "Tar hardens as it ages",
        "Glass flows over centuries",
        "Some solids are slow liquids",
        "Heat makes solids shrink",
      ],
      answer: 2,
    },
    {
      question: "Why did the gap between drops grow after 1988?",
      options: [
        "Air conditioning cooled the room",
        "The funnel became partly blocked",
        "The pitch was running out",
        "A thicker pitch was added",
      ],
      answer: 0,
    },
  ],
  sources: [{ label: "Pitch Drop experiment (University of Queensland)", url: "https://smp.uq.edu.au/pitch-drop-experiment" }],
}
