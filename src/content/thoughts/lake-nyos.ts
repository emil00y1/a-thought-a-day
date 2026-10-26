import type { Thought } from "../types"

export const lakeNyos: Thought = {
  slug: "lake-nyos",
  title: "The Lake That Exhaled",
  category: "history",
  emoji: "🫧",
  hook: "One night in 1986, a quiet lake in Cameroon let out a gas cloud that killed 1,746 people.",
  body: [
    "On the evening of August 21, 1986, **Lake Nyos**, a deep crater lake in Cameroon, suddenly released a huge cloud of **carbon dioxide**. The gas is heavier than air, so it poured down the valleys like an invisible flood. It suffocated 1,746 people and about 3,500 livestock, many in their sleep, up to 25 km away.",
    "This rare event is called a **limnic eruption**. Gas from magma far below seeps into the lake's cold bottom water, where the weight of the water above keeps it dissolved, like soda in a sealed bottle. When something stirred the layers, perhaps a landslide (no one knows for sure), the gas fizzed out all at once. Afterward, the blue lake turned red, as iron-rich water from the bottom rusted at the surface.",
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
          text: "The gas cloud rose high into the sky and drifted away.",
          answer: false,
          explain: "Carbon dioxide is about 50% denser than air, so it hugged the ground and flowed down valleys into villages.",
        },
        {
          text: "Scientists still aren't sure what set off the eruption.",
          answer: true,
          explain: "A landslide is the most common guess. Others suggest cold rain, a small volcanic burst, or no trigger at all.",
        },
        {
          text: "The degassing pipes need a pump running all the time.",
          answer: false,
          explain: "A pump only starts the flow. After that, the rising gas lifts the water by itself.",
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
