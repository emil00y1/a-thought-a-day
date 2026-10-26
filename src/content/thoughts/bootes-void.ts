import type { Thought } from "../types"

export const bootesVoid: Thought = {
  slug: "bootes-void",
  title: "The Boötes Void",
  category: "space",
  emoji: "⚫",
  hook: "There's a stretch of space hundreds of millions of light-years wide with only about 60 galaxies in it.",
  body: [
    "In 1981, astronomer **Robert Kirshner** and his colleagues were measuring how far away galaxies are, to map them in 3D. In the direction of the constellation **Boötes**, they found a huge gap. Later counts found only about 60 galaxies in a region where, at the usual density, you'd expect around 2,000.",
    "The **Boötes Void**, nicknamed the Great Nothing, is centered about 700 million light-years away. Estimates of its width range from roughly 250 to 400 million light-years, depending on how it's measured. Astronomer Greg Aldering has said that if the Milky Way sat at its center, we wouldn't have known other galaxies existed until the 1960s.",
    "Voids aren't truly empty. They hold thin gas, dark matter and a few galaxies, just far less than average. They're also normal: galaxies gather along threads and sheets called the **cosmic web**, with voids in between, and voids are thought to fill most of the universe's volume. Online claims that aliens emptied Boötes have no evidence behind them. It may simply be several smaller voids that merged.",
  ],
  takeaway: "The universe is mostly voids, and the Boötes Void is one of the biggest, though even it isn't truly empty.",
  facts: [
    {
      q: "How did astronomers measure galaxy distances?",
      a: "Using redshift: as space expands, light from distant galaxies gets stretched toward red. More stretch means farther away.",
    },
    {
      q: "Does it break our theory of the universe?",
      a: "No. Studies suggest a void this size fits the standard model of how cosmic structure grows over time.",
    },
    {
      q: "Is it the biggest void known?",
      a: "It's one of the largest, often called a supervoid. Some researchers have proposed bigger ones, but those claims are still debated.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "A region this big would normally hold about 2,000 galaxies. How many have been found in the Boötes Void?",
      min: 0,
      max: 1000,
      step: 10,
      answer: 60,
      tolerance: 30,
      unit: "galaxies",
      explain: "Only about 60, roughly 3% of what you'd expect.",
    },
    {
      type: "choice",
      question: "What makes the Boötes Void a \"void\"?",
      options: [
        "It contains no matter at all",
        "Light can't travel through it",
        "It has far fewer galaxies than usual",
        "It's a giant black hole",
      ],
      answer: 2,
      explain: "A void is a region with far less matter than average. Boötes still has gas, dark matter and dozens of galaxies.",
    },
    {
      type: "poll",
      question: "Where would you rather live: a crowded galaxy cluster, or deep inside a void?",
      options: [
        { text: "A crowded cluster", note: "Lots to see, though galaxies in clusters collide and lose gas more often." },
        { text: "Deep inside a void", note: "A quiet neighborhood, but finding out other galaxies exist could take much longer." },
        { text: "Somewhere in between", note: "That's us. The Milky Way sits in a small group of galaxies called the Local Group." },
      ],
    },
  ],
  recall: [
    {
      question: "About how many galaxies have been found in the Boötes Void?",
      options: ["About 6", "About 60", "About 600", "About 6,000"],
      answer: 1,
    },
    {
      question: "How was the Boötes Void discovered?",
      options: [
        "By spotting a dark patch in photos",
        "By sending a probe into deep space",
        "By detecting a strange gravity pull",
        "By mapping how far galaxies are",
      ],
      answer: 3,
    },
    {
      question: "What is thought to fill most of the universe's volume?",
      options: ["Voids", "Galaxy clusters", "Black holes", "Stars"],
      answer: 0,
    },
  ],
  sources: [{ label: "Boötes Void (Wikipedia)", url: "https://en.wikipedia.org/wiki/Bo%C3%B6tes_Void" }],
}
