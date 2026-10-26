import type { Thought } from "../types"

export const honeyNeverSpoils: Thought = {
  slug: "honey-never-spoils",
  title: "Why Honey Lasts",
  category: "facts",
  emoji: "🍯",
  hook: "Honey can sit in a sealed jar for years. But is there really edible honey from Egyptian tombs?",
  body: [
    "Keep honey sealed and it stays safe to eat for years. The main secret is **water**, or the lack of it. Bees dry out watery nectar until what's left is mostly sugar. Germs that land in it lose their own water to all that sugar, so they can't grow.",
    "Honey is also **acidic**, with an average pH around 3.9. And bees add an enzyme that slowly makes small amounts of **hydrogen peroxide**, a mild germ killer. Dry, sugary and sour is a hard place for bacteria and molds to live.",
    "You may have heard that archaeologists found 3,000-year-old honey in Egyptian tombs that was still edible. The evidence is thin. Egyptians did keep bees and put honey in tombs, but a 1975 review found that most \"ancient honey\" was only dried traces or something else. One famous jar of liquid \"honey\" turned out to be **castor oil**.",
  ],
  takeaway: "Honey lasts because it's dry, sugary and acidic, but the story of edible tomb honey is shakier than it sounds.",
  facts: [
    {
      q: "Has crystallized honey gone bad?",
      a: "No. Some of its sugar has simply formed crystals. Warm the jar gently and it turns liquid again.",
    },
    {
      q: "How hard do bees work for it?",
      a: "Very. A honey bee's honey stomach holds about 40 mg of nectar, and filling it can take visits to more than a thousand flowers.",
    },
    {
      q: "Is honey safe for babies?",
      a: "No. Honey can carry dormant botulism spores. They're harmless to most adults but can make babies under one year very sick.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "Flower nectar is about 70 to 80% water. About how much water is left in finished honey?",
      min: 0,
      max: 60,
      step: 1,
      answer: 17,
      tolerance: 3,
      unit: "%",
      explain: "Usually about 15.5 to 18%. That's far more sugar than water could normally hold dissolved.",
    },
    {
      type: "order",
      prompt: "Put these steps of honey making in order",
      items: [
        { text: "A forager bee sips nectar from flowers", detail: "Nectar is mostly water" },
        { text: "She passes it to bees back at the hive", detail: "Mouth to mouth" },
        { text: "Hive bees dry it with bubbles and fanning", detail: "Water evaporates" },
        { text: "Bees seal the cell with a wax cap", detail: "Now ready to store" },
      ],
      explain: "Enzymes from the bees go to work along the way, changing the sugars and adding acid.",
    },
    {
      type: "choice",
      question: "Which of these is most likely to make honey spoil?",
      options: [
        "Keeping it in a dark cupboard",
        "Stirring it with a dry spoon",
        "Leaving it open in damp air",
        "Storing it in a sealed glass jar",
      ],
      answer: 2,
      explain: "Honey pulls moisture from the air. With enough extra water, yeasts can start to ferment it.",
    },
  ],
  recall: [
    {
      question: "What is the main reason honey resists spoiling?",
      options: ["It holds very little water", "Bees add a wax preservative", "It contains some alcohol", "It's stored in the dark"],
      answer: 0,
    },
    {
      question: "What did a famous jar of liquid \"tomb honey\" turn out to be?",
      options: ["Date syrup", "Melted beeswax", "Castor oil", "Old wine"],
      answer: 2,
    },
    {
      question: "Where does the hydrogen peroxide in honey come from?",
      options: ["Flower pollen", "Rainwater in the hive", "Mold on the comb", "A bee enzyme"],
      answer: 3,
    },
  ],
  sources: [{ label: "Honey (Wikipedia)", url: "https://en.wikipedia.org/wiki/Honey" }],
}
