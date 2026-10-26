import type { Thought } from "../types"

export const milgram: Thought = {
  slug: "milgram",
  title: "The Milgram Experiment",
  category: "experiments",
  emoji: "⚡",
  hook: "How far would ordinary people go just because someone in a lab coat told them to?",
  body: [
    "In 1961, psychologist **Stanley Milgram** at Yale invited volunteers to a study on \"learning\". They were told to give a learner an electric shock for every wrong answer, rising up to **450 volts**. The learner was an actor and the shocks were fake, but the volunteers didn't know.",
    "As the actor cried out and begged to stop, a calm man in a lab coat said things like \"The experiment requires that you continue.\" In the best-known version, **65%** of volunteers went all the way to the maximum.",
    "Milgram's conclusion: ordinary people can do terrible things when an **authority** tells them to. Later critics found the setup messier than reported, and many volunteers doubted the shocks were real. But later, gentler versions have found similar levels of obedience.",
  ],
  takeaway: "Ordinary people often obey authority much further than they'd ever predict.",
  facts: [
    {
      q: "Why did Milgram run it?",
      a: "He started in 1961, months after the trial of Nazi organizer Adolf Eichmann began. He wanted to know how ordinary people go along with atrocities.",
    },
    {
      q: "What made people disobey?",
      a: "Seeing others refuse. When two fellow \"teachers\" quit, only 10% went to the end.",
    },
    {
      q: "Could it be done today?",
      a: "Not as it was. It helped inspire strict ethics rules for research. A 2006 version stopped at 150 volts, and 70% were still willing to go on.",
    },
  ],
  activities: [
    {
      type: "choice",
      question:
        "In a new version, the man giving orders wears jeans and says he's just another volunteer, not a scientist. Compared with 65%, what's most likely?",
      options: [
        "More people go all the way",
        "Fewer people go all the way",
        "About the same share obey",
        "Nobody stops before 450 volts",
      ],
      answer: 1,
      explain:
        "Milgram's point is that authority drives obedience. He tried this: when an ordinary man gave the orders, only about 20% went to the end.",
    },
    {
      type: "match",
      prompt: "Match each version to how many went to 450 volts",
      pairs: [
        ["Standard version", "65%"],
        ["Had to press the learner's hand down", "30%"],
        ["Orders given by phone", "About 20%"],
        ["Two other teachers refused", "10%"],
      ],
    },
    {
      type: "poll",
      question: "Honestly, would you have gone all the way?",
      options: [
        { text: "No way", note: "That's what almost everyone says. In the study, most did." },
        { text: "Maybe", note: "More honest than most predictions." },
        { text: "Probably yes", note: "Rare honesty. Knowing the pull of authority is the first defense against it." },
      ],
    },
  ],
  recall: [
    {
      question: "In Milgram's best-known version, how many went to the maximum shock?",
      options: ["About 5%", "About 25%", "About 65%", "Everyone"],
      answer: 2,
    },
    {
      question: "Were the learner's shocks in the Milgram experiment real?",
      options: [
        "Yes, up to 450 volts",
        "No, the learner was acting",
        "Yes, with a doctor standing by",
        "Only in the first version",
      ],
      answer: 1,
    },
    {
      question: "What made people in Milgram's studies most likely to stop?",
      options: [
        "Being paid a bit more",
        "Seeing other people refuse",
        "Feeling tired after many rounds",
        "Having done a study before",
      ],
      answer: 1,
    },
  ],
  sources: [{ label: "Milgram experiment (Wikipedia)", url: "https://en.wikipedia.org/wiki/Milgram_experiment" }],
}
