import type { Thought } from "../types"

export const jevonsParadox: Thought = {
  slug: "jevons-paradox",
  title: "The Jevons Paradox",
  category: "ideologies",
  emoji: "🏭",
  hook: "Britain hoped better steam engines would make its coal last. An economist warned they would burn through it faster.",
  body: [
    "In 1865, Britain feared its coal would run out, and many hoped better engines would make it last. The 29-year-old economist **William Stanley Jevons** said the opposite. James Watt's more efficient steam engine had made coal power so cheap that mines, mills and railways everywhere took it up, and total coal use soared.",
    "The logic is simple: efficiency makes each use cheaper, and cheaper things get used more. Economists call that extra use the **rebound effect**. If your new car needs half the fuel per mile, you might drive a bit more. Only if you more than double your driving does total fuel use go up. That's the **Jevons paradox**.",
    "How often does it really happen? That's hotly debated. For things like driving or home heating in rich countries, studies usually find only a partial rebound, so efficiency still saves energy. The paradox is likelier when something gets cheap enough to open up whole new uses, as steam power did. Many economists say the fix is to pair efficiency with **fuel taxes** or caps that keep the cost of use from falling.",
  ],
  takeaway: "Efficiency makes things cheaper to use, and sometimes people then use so much more that total consumption rises.",
  facts: [
    {
      q: "Who brought Jevons back in 2025?",
      a: "Microsoft CEO Satya Nadella. When the cheap Chinese AI model DeepSeek rattled tech stocks, he posted \"Jevons paradox strikes again!\" with a link to its Wikipedia page.",
    },
    {
      q: "When does efficiency clearly NOT backfire?",
      a: "When demand is limited. Machines made farmers far more productive, but we can only eat so much. Around 1900, 40% of US workers farmed. Today it's under 2%.",
    },
    {
      q: "Does it apply beyond energy?",
      a: "Possibly. Researchers have found signs of it in water: when farms switch to water-saving irrigation, some plant more land or thirstier crops, and total use doesn't fall.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "LED bulbs use far less power than old bulbs. Which would make the Jevons paradox MORE likely?",
      options: [
        "People use the same lamps for the same hours",
        "A tax keeps the cost of light the same",
        "People start lighting gardens and signs",
        "Homes already have all the light they need",
      ],
      answer: 2,
      explain: "Cheap light invites brand-new uses. If those add up to more than the savings, total electricity for lighting can go up.",
    },
    {
      type: "order",
      prompt: "Put these in order, earliest first",
      items: [
        { text: "Newcomen builds his coal-hungry steam engine", detail: "1712" },
        { text: "Watt patents a far more efficient design", detail: "1769" },
        { text: "Jevons publishes The Coal Question", detail: "1865" },
        { text: "Economists revive the idea for modern energy use", detail: "1980s" },
        { text: "A tech CEO applies it to AI", detail: "2025" },
      ],
      explain: "Watt's engine used much less coal per job than Newcomen's. Jevons saw that this made coal power worth using almost everywhere.",
    },
  ],
  recall: [
    {
      question: "What did Jevons predict about more efficient steam engines?",
      options: ["They would cut Britain's coal use", "They would raise total coal use", "They would make coal mines safer", "They would end the need for coal"],
      answer: 1,
    },
    {
      question: "When is the Jevons paradox most likely to happen?",
      options: [
        "When demand barely changes with price",
        "When a tax keeps the price of use high",
        "When everyone already has all they want",
        "When lower costs spark lots of new uses",
      ],
      answer: 3,
    },
    {
      question: "What do economists call the extra use that follows a gain in efficiency?",
      options: ["The rebound effect", "The network effect", "The placebo effect", "The halo effect"],
      answer: 0,
    },
  ],
  sources: [{ label: "Jevons paradox (Wikipedia)", url: "https://en.wikipedia.org/wiki/Jevons_paradox" }],
}
