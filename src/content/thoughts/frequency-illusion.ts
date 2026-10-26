import type { Thought } from "../types"

export const frequencyIllusion: Thought = {
  slug: "frequency-illusion",
  title: "The Frequency Illusion",
  category: "curious",
  emoji: "👀",
  hook: "You learn a new word, and suddenly it's everywhere. Is the world playing tricks on you?",
  body: [
    "You hear a word for the first time, or buy a new car, and suddenly you see it everywhere. This is the **frequency illusion**, also called the **Baader-Meinhof phenomenon**. Usually nothing in the world has changed. What changed is what you notice.",
    "Stanford linguist **Arnold Zwicky** named it in 2005. He blamed two habits of the mind. **Selective attention** means your brain quietly filters for whatever is on your mind. **Confirmation bias** means each new sighting feels like proof, while you never count all the times you didn't see it.",
    "The odd nickname comes from a 1994 letter to a Minnesota newspaper, the St. Paul Pioneer Press. A reader described hearing the name of a German militant group, Baader-Meinhof, and then running into it again and again. Other readers wrote in with their own stories, and the name stuck.",
  ],
  takeaway: "When something suddenly seems to be everywhere, it's usually your attention that changed, not the world.",
  facts: [
    {
      q: "Do experts fall for it too?",
      a: "Yes. Zwicky described linguists studying the use of \"all\" for quotes (\"and she was all, 'No way'\"). They felt friends said it constantly. Transcripts showed far fewer uses.",
    },
    {
      q: "Was Baader-Meinhof a real group?",
      a: "Yes. It was a nickname for the Red Army Faction, a militant group founded in West Germany in 1970 and named after Andreas Baader and Ulrike Meinhof.",
    },
    {
      q: "Can it ever be useful?",
      a: "Possibly. Some medical researchers suggest training doctors to notice rare conditions could help them spot those conditions more often in real patients.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Maya buys a yellow car. Now she sees yellow cars everywhere. What's most likely going on?",
      options: [
        "More people bought yellow cars",
        "She now notices yellow cars more",
        "Yellow cars are suddenly on sale",
        "Her new car made yellow trendy",
      ],
      answer: 1,
      explain: "The number of yellow cars is about the same. Her brain has just started flagging them.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "The frequency illusion only happens with words.",
          answer: false,
          explain: "It can happen with anything: names, songs, car models, even medical symptoms.",
        },
        {
          text: "Ads can set off the illusion by making a product feel familiar.",
          answer: true,
          explain: "Once you've seen a product a few times, you spot it more, and it can seem more popular than it is.",
        },
        {
          text: "A word that feels brand new to you may be centuries old.",
          answer: true,
          explain: "Singular \"they\" strikes some people as modern, but it goes back to the 1300s.",
        },
      ],
    },
    {
      type: "match",
      prompt: "Match each term to what it means",
      pairs: [
        ["Frequency illusion", "Seeing something everywhere once you know it"],
        ["Selective attention", "Your brain filtering for what's on your mind"],
        ["Confirmation bias", "Counting the hits and ignoring the misses"],
        ["Recency illusion", "Believing something you just noticed is new"],
      ],
    },
  ],
  recall: [
    {
      question: "What usually changes in the frequency illusion?",
      options: ["How often the thing happens", "What you pay attention to", "How good your eyesight is", "How much you remember"],
      answer: 1,
    },
    {
      question: "Where did the name \"Baader-Meinhof phenomenon\" come from?",
      options: ["A psychology lab study", "A German court case", "A letter to a newspaper", "A 1970s spy novel"],
      answer: 2,
    },
    {
      question: "Who coined the term \"frequency illusion\"?",
      options: ["A German journalist", "A Minnesota reader", "An advertising firm", "A Stanford linguist"],
      answer: 3,
    },
  ],
  sources: [{ label: "Frequency illusion (Wikipedia)", url: "https://en.wikipedia.org/wiki/Frequency_illusion" }],
}
