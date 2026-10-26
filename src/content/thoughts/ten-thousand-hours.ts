import type { Thought } from "../types"

export const tenThousandHours: Thought = {
  slug: "ten-thousand-hours",
  title: "The 10,000-Hour Rule",
  category: "research",
  emoji: "⏱️",
  hook: "Practice anything for 10,000 hours and you'll be world class. Or so the famous rule says.",
  body: [
    "In 1993, psychologist **Anders Ericsson** and his colleagues studied violin students at a top music academy in Berlin. The best ones had spent more time in **deliberate practice**: focused, effortful work on their weak spots, often guided by a teacher. By age 20, they had averaged about 10,000 hours of it.",
    "In 2008, writer **Malcolm Gladwell** turned this into the **10,000-hour rule** in his book Outliers, with examples like the Beatles playing long nights in Hamburg clubs. The catchy number spread everywhere.",
    "Ericsson said the rule got his work wrong. 10,000 was an **average**, not a magic line, and those 20-year-olds weren't masters yet. The hours needed vary a lot between fields, and simply putting in time isn't the same as deliberate practice. Later studies found practice matters, but explains less than the rule suggests.",
  ],
  takeaway: "Focused practice matters a lot, but there's no magic number of hours that guarantees mastery.",
  facts: [
    {
      q: "Did the violin study hold up?",
      a: "Partly. A 2019 repeat of the study found practice still mattered, but much less than the original had suggested.",
    },
    {
      q: "Is driving 10,000 hours enough to make you a great driver?",
      a: "No. Doing something on autopilot rarely makes you better. Improvement comes from pushing past your comfort zone and getting feedback.",
    },
    {
      q: "What did a Beatle think of the rule?",
      a: "Paul McCartney said many bands also put in the hours in Hamburg and never made it. Hard work, he said, isn't a guarantee.",
    },
  ],
  activities: [
    {
      type: "match",
      prompt: "A 2014 review asked how much practice explains skill differences. Match each field to its share",
      pairs: [
        ["Games like chess", "About 26%"],
        ["Music", "About 21%"],
        ["Sports", "About 18%"],
        ["Professions", "Under 1%"],
      ],
    },
    {
      type: "order",
      prompt: "Put these moments in the story of the 10,000-hour rule in order, oldest first",
      items: [
        { text: "Ericsson's violin study", detail: "1993" },
        { text: "Gladwell's Outliers", detail: "2008" },
        { text: "Review of 88 practice studies", detail: "2014" },
        { text: "Ericsson's book Peak corrects the rule", detail: "2016" },
      ],
      explain: "Ericsson wrote Peak partly to set the record straight about what his research actually showed.",
    },
    {
      type: "poll",
      question: "What matters most for becoming great at something?",
      options: [
        { text: "Lots of focused practice", note: "Ericsson's camp. Even critics agree practice is necessary for top performance." },
        { text: "Natural talent", note: "Some researchers argue genes and early abilities explain much of what practice can't." },
        { text: "Luck and opportunity", note: "Gladwell's book stresses this too, like Bill Gates getting rare access to a computer as a teen." },
        { text: "A mix of all three", note: "Most researchers today would land somewhere around here." },
      ],
    },
  ],
  recall: [
    {
      question: "What did Ericsson's study of violinists look at?",
      options: ["Their natural talent", "Their hours of practice", "Their family income", "Their age at first lesson"],
      answer: 1,
    },
    {
      question: "Why did Ericsson object to the 10,000-hour rule?",
      options: [
        "It was an average, not a threshold",
        "His study found practice didn't matter",
        "He thought 1,000 hours was enough",
        "His study was about chess, not music",
      ],
      answer: 0,
    },
    {
      question: "What makes practice deliberate?",
      options: [
        "Doing it at the same time daily",
        "Repeating what you already do well",
        "Practicing with a group of friends",
        "Working hard on your weak spots",
      ],
      answer: 3,
    },
  ],
  sources: [{ label: "Practice (learning method) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Practice_(learning_method)" }],
}
