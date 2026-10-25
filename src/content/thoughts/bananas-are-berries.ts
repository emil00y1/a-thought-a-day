import type { Thought } from "../types"

export const bananasAreBerries: Thought = {
  slug: "bananas-are-berries",
  title: "Bananas Are Berries",
  category: "facts",
  emoji: "🍌",
  hook: "To a botanist, a banana is a berry and a strawberry isn't. Here's why.",
  body: [
    "In the kitchen, a berry is any small, sweet fruit. Botanists use a stricter rule: a **berry** is a fleshy fruit that grows from **one flower with one ovary**, usually with its seeds inside the flesh.",
    "By that rule, **bananas**, tomatoes, grapes, kiwis, eggplants and chili peppers are all berries. Pumpkins, watermelons and oranges count too, as special kinds of berry with their own names.",
    "Meanwhile, **strawberries** aren't berries at all. The red flesh grows from the base of the flower, and each tiny \"seed\" on the outside is really a separate little fruit. **Raspberries** fail too: each one is a cluster of tiny fruits packed together.",
  ],
  takeaway: "Botanists name fruits by how they grow from the flower, not by how they look or taste.",
  facts: [
    {
      q: "Is an avocado a berry?",
      a: "Botanists disagree. Some call it a berry with one big seed. Others call it a drupe, like a cherry or a plum.",
    },
    {
      q: "Are juniper berries berries?",
      a: "No. They're the fleshy seed cones of the juniper, a conifer like pines and cypresses. They give gin its flavor.",
    },
    {
      q: "Did a court ever rule on this?",
      a: "Yes. In 1893 the US Supreme Court ruled that tomatoes count as vegetables for import taxes, because that's how people use the word, botany aside.",
    },
  ],
  activities: [
    {
      type: "match",
      prompt: "Match each fruit to how botanists describe it",
      pairs: [
        ["Banana", "A true berry"],
        ["Strawberry", "Flesh grows from the flower's base"],
        ["Raspberry", "A cluster of tiny fruits"],
        ["Cherry", "A hard stone around the seed"],
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "To a botanist, a berry must be small and sweet.",
          answer: false,
          explain: "Size and taste don't matter. Watermelons are berries, and so are sour lemons.",
        },
        {
          text: "Wild bananas are full of large, hard seeds.",
          answer: true,
          explain: "The bananas we buy were bred to be almost seedless. Their seeds stay as tiny specks that never fully develop.",
        },
        {
          text: "A pumpkin is a kind of berry.",
          answer: true,
          explain: "Botanists call it a pepo: a berry with a hard rind, like cucumbers and melons.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What makes a fruit a berry to a botanist?",
      options: ["It's small, round and sweet", "It comes from one ovary", "Its seeds are on the outside", "It grows on a low bush"],
      answer: 1,
    },
    {
      question: "Why isn't a raspberry a true berry?",
      options: [
        "It grows on a thorny, woody cane",
        "It has no seeds at all",
        "Its flesh is too sour",
        "It's a cluster of tiny fruits",
      ],
      answer: 3,
    },
    {
      question: "Which pair are both botanical berries?",
      options: ["Banana and tomato", "Strawberry and grape", "Raspberry and kiwi", "Cherry and banana"],
      answer: 0,
    },
  ],
  sources: [{ label: "Berry (botany) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Berry_(botany)" }],
}
