import type { Thought } from "../types"

export const shipOfTheseus: Thought = {
  slug: "ship-of-theseus",
  title: "The Ship of Theseus",
  category: "philosophy",
  emoji: "⛵",
  hook: "If you replace every part of something, is it still the same thing?",
  body: [
    "The ancient writer **Plutarch** told of the ship of the hero Theseus, kept in Athens for centuries. As planks rotted, they were replaced one by one, until no original wood was left.",
    "Philosophers asked: is it still the same ship? If yes, what makes it the same? If no, at which plank did it stop being Theseus's ship? Your answer depends on what you think makes a thing itself: its **material**, its **shape**, or its unbroken **history**.",
    "Centuries later, **Thomas Hobbes** made it worse: what if someone saved all the old planks and rebuilt the original? Now there are two ships. Which is the real one? The puzzle is really about **identity**, including yours, since your body keeps replacing its own parts.",
  ],
  takeaway: "Identity might live in the pattern and history of a thing, not in its parts.",
  facts: [
    {
      q: "Are you a new person every 7 years?",
      a: "No, that's a myth. Many cells renew, but most neurons in your brain's cortex stay with you for life.",
    },
    {
      q: "Is there a version with a broom?",
      a: "Yes. In the UK sitcom Only Fools and Horses, Trigger proudly says his old broom has had 17 new heads and 14 new handles.",
    },
    {
      q: "Does this matter in real life?",
      a: "Yes. Museums restoring old ships, sports clubs with no original players and bands with no original members all face it.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "Every plank has been replaced. Is it still Theseus's ship?",
      options: [
        { text: "Yes, same ship", note: "You value continuity: it changed gradually and kept its shape, name and history." },
        { text: "No, it's a new ship", note: "You value the material: the original stuff is gone, so the original ship is gone." },
        { text: "It depends what you mean", note: "Many philosophers agree. \"Same\" can mean same material, same form or same history." },
      ],
    },
    {
      type: "choice",
      question:
        "A museum restores an old race car, swapping every part over 30 years. A collector keeps all the old parts and rebuilds them into a car. Which view says the collector has the real car?",
      options: [
        "Its unbroken history matters most",
        "What it's made of matters most",
        "Its shape and design matter most",
        "Its name and papers matter most",
      ],
      answer: 1,
      explain:
        "Only the collector's car has the original material. The museum car has the unbroken history and the paperwork, and both cars share the same shape, so those views don't pick the collector. This is Hobbes's twist on the puzzle.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Every cell in your body is replaced every 7 years.",
          answer: false,
          explain: "Myth. Many brain neurons and the cells in the lens of your eye last your whole life.",
        },
        {
          text: "If identity lives in unbroken history, a band that swaps its members one at a time is still the same band.",
          answer: true,
          explain: "It changed bit by bit and never stopped existing, so by the history view it's the same band, just like the slowly repaired ship.",
        },
        {
          text: "The puzzle only applies to physical objects.",
          answer: false,
          explain: "It applies to people, companies, countries, even bands that swap every member.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What happens to the Ship of Theseus?",
      options: [
        "It sinks and is rebuilt from scratch",
        "Every plank is replaced over time",
        "It's captured and renamed by Sparta",
        "It's sold to pay for a new fleet",
      ],
      answer: 1,
    },
    {
      question: "What is the Ship of Theseus puzzle really about?",
      options: ["Shipbuilding", "Identity over time", "Greek mythology", "The value of antiques"],
      answer: 1,
    },
    {
      question: "What twist did Thomas Hobbes add?",
      options: [
        "The ship is taken to Rome as a prize",
        "The old planks form a second ship",
        "The ship was a myth all along",
        "Theseus's crew is replaced too",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Ship of Theseus (Wikipedia)", url: "https://en.wikipedia.org/wiki/Ship_of_Theseus" }],
}
