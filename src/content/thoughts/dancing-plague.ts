import type { Thought } from "../types"

export const dancingPlague: Thought = {
  slug: "dancing-plague",
  title: "The Dancing Plague of 1518",
  category: "history",
  emoji: "💃",
  hook: "In 1518, hundreds of people in one city started dancing and couldn't stop.",
  body: [
    "In July 1518, a woman named **Frau Troffea** began dancing in a street in **Strasbourg**, then part of the Holy Roman Empire and now in France. She kept going for days. Others soon joined her, and by August, accounts suggest somewhere between 50 and 400 people were dancing, many until they collapsed.",
    "Doctors blamed overheated blood, and the city at first decided the cure was more dancing, so it set aside halls and hired musicians. That seemed to make things worse. The council then banned public dancing, and many dancers were taken to a shrine of **Saint Vitus**, a saint believed to punish sinners with dancing. By September, the outbreak faded.",
    "Did anyone really dance to death? Later accounts claim up to 15 deaths a day, but surviving records from Strasbourg at the time don't mention any. Historian John Waller argues the cause was **mass psychogenic illness**: a stress-induced trance that spread among people worn down by famine, disease and fear. Others blame **ergot**, a toxic mold on rye.",
  ],
  takeaway: "Fear and hardship may have spread from person to person until a whole crowd couldn't stop dancing.",
  facts: [
    {
      q: "Was 1518 the only dancing plague?",
      a: "No. Outbreaks of dancing mania were reported in Europe for centuries, many of them along the Rhine and Moselle rivers.",
    },
    {
      q: "What did dancers wear at the shrine?",
      a: "According to accounts, red shoes sprinkled with holy water, with crosses painted on the tops and soles.",
    },
    {
      q: "Is it still remembered today?",
      a: "Yes. Jonathan Glazer made a 2020 short film called Strasbourg 1518, and Florence and the Machine sang about it in \"Choreomania\".",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Put the outbreak in order, earliest first",
      items: [
        { text: "Frau Troffea starts dancing", detail: "July 1518" },
        { text: "Dozens more join her", detail: "Within days" },
        { text: "Up to 400 may be dancing", detail: "By August" },
        { text: "The outbreak fades away", detail: "September" },
      ],
      explain: "It lasted around two months, long enough for the city council and doctors to try several cures.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "At first, the city's answer was to have people dance even more.",
          answer: true,
          explain: "Doctors thought overheated blood was to blame, and that dancing it out could cure it.",
        },
        {
          text: "Eventually, Strasbourg's council banned public dancing.",
          answer: true,
          explain: "When music seemed to spread the dancing, the council banned public dancing and music.",
        },
        {
          text: "Historians agree the cause was moldy bread.",
          answer: false,
          explain: "Ergot poisoning is one theory, but Waller doubts poisoned people could dance for days on end.",
        },
      ],
    },
    {
      type: "choice",
      question: "If John Waller is right, why did the dancing plague strike Strasbourg in 1518?",
      options: [
        "A new dance craze had arrived",
        "The water supply was poisoned",
        "People were worn down by hardship",
        "Musicians had cursed the city",
      ],
      answer: 2,
      explain: "Famine and disease had hit the region hard. Waller thinks that stress, plus fear of an angry saint, pushed people into a trance.",
    },
  ],
  recall: [
    {
      question: "Which city did the dancing plague of 1518 strike?",
      options: ["Strasbourg", "Venice", "Paris", "Vienna"],
      answer: 0,
    },
    {
      question: "Which saint was believed to punish sinners with dancing?",
      options: ["Saint Patrick", "Saint Nicholas", "Saint Vitus", "Saint George"],
      answer: 2,
    },
    {
      question: "What do historians still dispute about the dancing plague?",
      options: [
        "Which city it struck",
        "Whether anyone died",
        "What year it happened",
        "Whether people danced",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Dancing plague of 1518 (Wikipedia)", url: "https://en.wikipedia.org/wiki/Dancing_plague_of_1518" }],
}
