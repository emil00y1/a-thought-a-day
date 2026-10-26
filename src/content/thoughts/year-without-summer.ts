import type { Thought } from "../types"

export const yearWithoutSummer: Thought = {
  slug: "year-without-summer",
  title: "The Year Without a Summer",
  category: "history",
  emoji: "🌋",
  hook: "In 1816, snow fell in June. The cause was a volcano on the other side of the world.",
  body: [
    "In April 1815, **Mount Tambora** in today's Indonesia blew apart in the most powerful eruption in recorded history. Tens of thousands of people died from the blast and the famine that followed, and the mountain lost about a third of its height.",
    "The eruption also shot huge amounts of **sulfur** high into the sky, where it formed a thin haze that spread around the planet and reflected sunlight. The next year became the **Year Without a Summer**. Snow fell in New England in June, frost killed crops, and food riots broke out across Europe.",
    "People at the time didn't know the cause. In New England, ruined farmers headed west for better land. In Switzerland, a cold, rainy June kept a group of writers indoors, and **Mary Shelley** began the story that became Frankenstein.",
  ],
  takeaway: "One volcano can chill the whole planet, and change history along the way.",
  facts: [
    {
      q: "How much colder did the world get?",
      a: "Only about 0.4 to 0.7 °C on average. That small drop was enough to ruin harvests across the Northern Hemisphere.",
    },
    {
      q: "How far away was the blast heard?",
      a: "Over 2,600 km away, on Sumatra, where people mistook it for gunfire.",
    },
    {
      q: "Did it help invent the bicycle?",
      a: "Maybe. With oats scarce and horses costly to feed, Karl Drais built a pedal-less \"running machine\" in 1817. Historians debate the link.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "A huge volcano erupts tomorrow and blasts lots of sulfur high into the sky. What should we most expect?",
      options: [
        "A warmer world, as the haze traps heat",
        "Cooler summers worldwide for a few years",
        "Cold weather only in lands near the volcano",
        "A colder world for many centuries after",
      ],
      answer: 1,
      explain: "The sulfur haze spreads around the planet and reflects sunlight, but it slowly falls out of the sky, so the cooling fades within a few years. When Mount Pinatubo erupted in 1991, the world cooled by about half a degree for roughly two years.",
    },
    {
      type: "order",
      prompt: "Put these events in order, earliest first",
      items: [
        { text: "Tambora starts to rumble", detail: "1812" },
        { text: "Tambora's giant eruption", detail: "April 1815" },
        { text: "Snow falls in New England in June", detail: "1816" },
        { text: "Frankenstein is published", detail: "1818" },
      ],
      explain: "The worst weather came more than a year after the eruption, once the haze had spread around the world.",
    },
    {
      type: "match",
      prompt: "Match the place to what happened there in 1816",
      pairs: [
        ["New England", "Snow and frost in summer"],
        ["Ireland", "Failed potato and grain harvests"],
        ["India", "A late monsoon"],
        ["China", "Floods in the Yangtze Valley"],
      ],
    },
  ],
  recall: [
    {
      question: "What caused the Year Without a Summer?",
      options: ["An asteroid impact", "A major war in Europe", "A volcanic eruption", "A giant forest fire"],
      answer: 2,
    },
    {
      question: "Where is Mount Tambora?",
      options: ["Iceland", "Indonesia", "Italy", "Japan"],
      answer: 1,
    },
    {
      question: "Roughly how much did average global temperatures drop?",
      options: ["Less than 1 °C", "About 5 °C", "About 10 °C", "More than 15 °C"],
      answer: 0,
    },
  ],
  sources: [{ label: "Year Without a Summer (Wikipedia)", url: "https://en.wikipedia.org/wiki/Year_Without_a_Summer" }],
}
