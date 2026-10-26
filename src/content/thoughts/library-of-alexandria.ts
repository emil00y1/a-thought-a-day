import type { Thought } from "../types"

export const libraryOfAlexandria: Thought = {
  slug: "library-of-alexandria",
  title: "The Library of Alexandria",
  category: "history",
  emoji: "📚",
  hook: "The ancient world's greatest library didn't vanish in one great fire. Its end was slower, and sadder.",
  body: [
    "In the 200s BC, Egypt's Greek-speaking rulers, the **Ptolemies**, built a library in Alexandria as part of a research center called the **Mouseion**. They wanted a copy of every book in the world. Estimates of its size range wildly, from 40,000 to 700,000 papyrus **scrolls**.",
    "A popular story says it was all lost in one dramatic fire. People blame Julius Caesar in 48 BC, Christians in AD 391, or Arab conquerors in AD 642. But Caesar's fire probably burned only part of it, and the story about the Arab conquerors first appears about 500 years after the event.",
    "Most historians now describe a **slow decline**. In 145 BC a king drove many scholars out of the city. Under Roman rule, money and support dried up, and the last known members date to the AD 260s. Fighting around AD 272 probably wrecked whatever was left.",
  ],
  takeaway: "The Library of Alexandria faded over centuries through neglect and conflict, not in a single fire.",
  facts: [
    {
      q: "How did the library get so many books?",
      a: "According to the doctor Galen, books found on ships in Alexandria's harbor were taken and copied. The library kept the originals and gave back the copies.",
    },
    {
      q: "Did it ever cheat anyone?",
      a: "Reportedly, yes. Ptolemy III borrowed Athens' official copies of famous Greek plays, paid a huge deposit, then kept the originals and sent back copies.",
    },
    {
      q: "Who worked there?",
      a: "Brilliant scholars, including Eratosthenes, a head librarian who estimated the size of the Earth with surprising accuracy.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Why do historians doubt that Arab conquerors burned the library in AD 642?",
      options: [
        "The library had moved to Rome",
        "Arab writers denied it at the time",
        "It first appears centuries later",
        "No Arab army ever reached Egypt",
      ],
      answer: 2,
      explain: "The tale first appears about 500 years later, and the main library was probably long gone by then anyway.",
    },
    {
      type: "order",
      prompt: "Put these events in order, earliest first",
      items: [
        { text: "The library is founded in Alexandria", detail: "200s BC" },
        { text: "Caesar's fire damages part of the collection", detail: "48 BC" },
        { text: "Fighting destroys the library's quarter of the city", detail: "AD 272" },
        { text: "A temple holding a smaller branch library is torn down", detail: "AD 391" },
      ],
      explain: "The damage was spread over more than 600 years, which is why no single fire tells the whole story.",
    },
    {
      type: "poll",
      question: "If one lost thing from the ancient world could be found tomorrow, what would you pick?",
      options: [
        { text: "Lost plays and poems", note: "Huge numbers are gone. Of the many plays Sophocles wrote, only seven survive complete." },
        { text: "Lost science and math", note: "Much ancient science only survives because later writers quoted or summarized it." },
        { text: "The library's catalog", note: "The scholar Callimachus made one, the Pinakes, which ran to 120 books. Only fragments survive." },
      ],
    },
  ],
  recall: [
    {
      question: "How do most historians think the Library of Alexandria ended?",
      options: [
        "In one fire set by Caesar",
        "In a slow decline over centuries",
        "In a great earthquake and a flood",
        "By being moved to Constantinople",
      ],
      answer: 1,
    },
    {
      question: "Who built the Library of Alexandria?",
      options: [
        "The Roman emperors",
        "The Egyptian pharaohs of the pyramids",
        "The Greek-speaking Ptolemies",
        "The city of Athens",
      ],
      answer: 2,
    },
    {
      question: "What were the library's books mostly written on?",
      options: ["Papyrus scrolls", "Clay tablets", "Bound paper books", "Animal skin codices"],
      answer: 0,
    },
  ],
  sources: [{ label: "Library of Alexandria (Wikipedia)", url: "https://en.wikipedia.org/wiki/Library_of_Alexandria" }],
}
