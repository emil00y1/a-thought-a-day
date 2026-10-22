import type { Thought } from "../types"

export const greatStink: Thought = {
  slug: "great-stink",
  title: "The Great Stink",
  category: "history",
  emoji: "🤢",
  hook: "How one smelly summer in 1858 accidentally saved London from cholera.",
  body: [
    "In the hot summer of 1858, the River Thames was full of raw sewage. The smell was so bad that MPs in the Houses of Parliament, right on the river, hung curtains soaked in chemicals to block it out. Newspapers called it **the Great Stink**.",
    "Most experts believed diseases like cholera spread through foul air, called **miasma**. So once Parliament itself could smell the problem, it quickly funded engineer **Joseph Bazalgette**'s plan for a giant sewer network.",
    "They had the wrong theory but built the right thing. Cholera actually spreads through **dirty water**, as doctor John Snow had shown in 1854. By carrying sewage away from drinking water, the new sewers ended London's cholera outbreaks.",
  ],
  takeaway: "London built its sewers to stop a smell, and ended up stopping cholera.",
  facts: [
    {
      q: "How big was Bazalgette's system?",
      a: "About 132 km of main sewers and 1,800 km of street sewers. Much of it is still in use today.",
    },
    {
      q: "Why has it lasted so long?",
      a: "Bazalgette deliberately made the pipes much wider than needed, guessing London would grow. He was right.",
    },
    {
      q: "How did John Snow find the real cause?",
      a: "In 1854 he mapped cholera deaths in Soho, traced them to one water pump on Broad Street, and got its handle removed.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "What did most experts in 1858 think caused cholera?",
      options: ["Dirty drinking water", "Bad air (miasma)", "Fleas carried by rats", "Spoiled food"],
      answer: 1,
      explain: "Miasma theory blamed foul smells. It was wrong, but it got the sewers built.",
    },
    {
      type: "order",
      prompt: "Put these events in order, earliest first",
      items: [
        { text: "John Snow traces cholera to a water pump", detail: "1854" },
        { text: "The Great Stink hits Parliament", detail: "1858" },
        { text: "Bazalgette's sewer system opens", detail: "1865" },
        { text: "London's last major cholera outbreak", detail: "1866" },
      ],
      explain: "The 1866 outbreak hit East London, the area not yet connected to the new sewers.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "MPs hung chemical-soaked curtains to fight the smell.",
          answer: true,
          explain: "They were soaked in chloride of lime. It didn't help much.",
        },
        {
          text: "The sewers were built because people knew germs cause cholera.",
          answer: false,
          explain: "Germ theory wasn't accepted yet. They were fighting the smell.",
        },
        {
          text: "Parts of Bazalgette's sewers are still in use today.",
          answer: true,
          explain: "More than 150 years later, they still carry London's waste.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What was the Great Stink?",
      options: [
        "A huge London fire in 1666",
        "When the Thames reeked of sewage",
        "The 1854 cholera outbreak in Soho",
        "A thick fog of coal smoke over London",
      ],
      answer: 1,
    },
    {
      question: "What actually spreads cholera?",
      options: ["Foul air from rivers", "Contaminated water", "Cold, damp weather", "Bites from insects"],
      answer: 1,
    },
    {
      question: "Who designed London's sewer network?",
      options: ["John Snow", "Joseph Bazalgette", "Isambard Kingdom Brunel", "Charles Dickens"],
      answer: 1,
    },
  ],
  sources: [{ label: "Great Stink (Wikipedia)", url: "https://en.wikipedia.org/wiki/Great_Stink" }],
}
