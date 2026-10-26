import type { Thought } from "../types"

export const lakeNyos: Thought = {
  slug: "lake-nyos",
  title: "The Lake That Exhaled",
  category: "history",
  emoji: "🫧",
  hook: "One night in 1986, a quiet lake in Cameroon let out a gas cloud that killed 1,746 people.",
  body: [
    "On the evening of August 21, 1986, **Lake Nyos**, a deep crater lake in Cameroon, suddenly released a huge cloud of **carbon dioxide**. The gas is heavier than air, so it poured down the valleys like an invisible flood. It suffocated 1,746 people and about 3,500 livestock, many in their sleep, up to 25 km away.",
    "This rare event is called a **limnic eruption**. Gas from magma far below seeps into the lake's cold bottom water, which rarely mixes with the water above. The weight of all that water keeps the gas dissolved, like soda in a sealed bottle. When something stirred the layers, perhaps a landslide (no one knows for sure), the gas fizzed out all at once. Afterward, the blue lake turned red, as iron-rich water from the bottom rusted at the surface.",
    "To prevent a repeat, engineers installed **degassing pipes** that run from a raft down to the deep water. A pump starts the flow, then the rising bubbles keep it going on their own, shooting a fountain of fizzy water into the air. The first pipe was installed in 2001, and two more followed in 2011. By 2019, studies found that one pipe alone could keep the gas at a safe level, with no outside power.",
  ],
  takeaway: "A lake can store deadly gas like a sealed soda, and slow, steady venting keeps it from bursting.",
  facts: [
    {
      q: "Had this ever happened before?",
      a: "Yes, on a smaller scale. In 1984, Lake Monoun, also in Cameroon, released a gas cloud that killed 37 people. They are the only two such disasters on record.",
    },
    {
      q: "Why did some survivors smell rotten eggs?",
      a: "Carbon dioxide has no smell, and it was the only gas found in the lake water. But high levels of it can make people sense smells that aren't there.",
    },
    {
      q: "Could a bigger lake do this?",
      a: "Lake Kivu, on the border of Congo and Rwanda, also holds dissolved gas and is about 2,000 times bigger. A 2020 study found its risk doesn't seem to be rising.",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Put these events in order, earliest first",
      items: [
        { text: "A gas cloud from Lake Monoun kills 37", detail: "1984" },
        { text: "Lake Nyos erupts", detail: "1986" },
        { text: "The first permanent pipe is installed", detail: "2001" },
        { text: "Two more pipes are added", detail: "2011" },
      ],
      explain: "Monoun was a warning nobody fully understood yet. It took 15 years after Nyos to get the first permanent pipe in place.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "If you lived near the lake that night, climbing up a nearby hill would have been safer than staying in the valley.",
          answer: true,
          explain: "Carbon dioxide is heavier than air, so it hugged the ground and flowed down into low places. Higher ground stayed above it.",
        },
        {
          text: "A safe way to empty the gas would be to pump all the deep water to the surface in one go.",
          answer: false,
          explain: "Bringing lots of deep water up at once is what an eruption is: the gas fizzes out together. The pipes work because they vent it slowly and steadily.",
        },
        {
          text: "A lake whose water fully mixes from top to bottom every year is unlikely to build up gas like Lake Nyos.",
          answer: true,
          explain: "When the layers mix often, gas reaches the surface bit by bit and escapes harmlessly. Nyos was dangerous because its deep water stayed still and kept filling up.",
        },
      ],
    },
    {
      type: "choice",
      question: "Why could so much gas build up in the lake without escaping?",
      options: [
        "A crust of salt sealed the surface",
        "Fish and plants absorbed most of it",
        "Deep water under pressure held it in",
        "The gas froze solid in the bottom mud",
      ],
      answer: 2,
      explain: "Like a sealed soda, cold water under heavy pressure can hold lots of gas. Bring it up and it fizzes out.",
    },
  ],
  recall: [
    {
      question: "Which gas did Lake Nyos release?",
      options: ["Methane", "Chlorine", "Sulfur dioxide", "Carbon dioxide"],
      answer: 3,
    },
    {
      question: "Why did the gas reach villages far from the lake?",
      options: [
        "Strong winds carried it upward",
        "Rivers carried it downstream",
        "It was heavier than air",
        "It burned along the ground",
      ],
      answer: 2,
    },
    {
      question: "How do the pipes in Lake Nyos keep people safe?",
      options: [
        "They let deep gas escape slowly",
        "They pump fresh air into the lake",
        "They drain the lake into rivers",
        "They seal the gas in the lakebed",
      ],
      answer: 0,
    },
  ],
  sources: [{ label: "Lake Nyos disaster (Wikipedia)", url: "https://en.wikipedia.org/wiki/Lake_Nyos_disaster" }],
}
