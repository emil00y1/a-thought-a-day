import type { Thought } from "../types"

export const aschConformity: Thought = {
  slug: "asch-conformity",
  title: "Asch's Line Experiment",
  category: "experiments",
  emoji: "👥",
  hook: "Which line is the same length? Easy, until everyone else gives the wrong answer.",
  body: [
    "In the 1950s, psychologist **Solomon Asch** showed small groups of students a card with one line, then a card with three lines, and asked which one matched. The task was easy: people tested alone almost never got it wrong.",
    "But in each group, only one person was really being tested. The rest were **actors**, told to give the same wrong answer on 12 of the 18 rounds. The real subject answered near the end, after hearing them. About **a third** of the answers on those rounds went along with the group.",
    "The study is often told as proof that people are sheep, but most answers stayed **independent**. And when just one actor gave the right answer, going along with the group dropped sharply. A single **ally** makes it much easier to trust your own eyes.",
  ],
  takeaway: "Group pressure can bend what we say, but one ally makes it far easier to resist.",
  facts: [
    {
      q: "Did people realize they were going along?",
      a: "Not fully. In interviews afterward, the ones who conformed underestimated how often they had done it.",
    },
    {
      q: "Does a bigger crowd mean more pressure?",
      a: "Only up to a point. One person disagreeing had little effect, three had a big effect, and adding more barely changed anything.",
    },
    {
      q: "What if answers were private?",
      a: "When subjects wrote their answers down instead of saying them aloud, they went along with the group much less.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "Everyone before you says line A. Your eyes say line B. What do you do?",
      options: [
        { text: "Say B anyway", note: "About a quarter of Asch's subjects never went along with the group, not even once." },
        { text: "Go with A", note: "Being the only one who disagrees, out loud, in a room of strangers is surprisingly hard." },
        { text: "Doubt my own eyes", note: "Many conformers said exactly this: they started to think the group must see something they didn't." },
      ],
    },
    {
      type: "estimate",
      question: "On the rounds where the actors lied, what percent of the real subjects' answers went along with them?",
      min: 0,
      max: 100,
      step: 1,
      answer: 35,
      tolerance: 7,
      unit: "%",
      explain: "About a third, roughly 35 to 37% depending on the report. The other two thirds of answers stayed correct.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "People tested alone often got the line task wrong.",
          answer: false,
          explain: "Without the actors, fewer than 1 in 100 answers were wrong.",
        },
        {
          text: "Subjects were told the real purpose of the study before it began.",
          answer: false,
          explain: "They thought it was a vision test and learned the truth in interviews afterward.",
        },
        {
          text: "Most of the subjects went along with the group at least once.",
          answer: true,
          explain: "About three quarters did, even though most of their answers overall were correct.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What did Asch's subjects have to judge?",
      options: ["Musical tones", "Line lengths", "Facial expressions", "Card colors"],
      answer: 1,
    },
    {
      question: "Who were the other people in each group?",
      options: [
        "Other real volunteers",
        "Trained psychologists",
        "Actors working with Asch",
        "Strangers off the street",
      ],
      answer: 2,
    },
    {
      question: "What made subjects much less likely to conform?",
      options: [
        "Adding more actors to the group",
        "Being asked to answer fast",
        "Being paid for each answer",
        "One ally answering correctly",
      ],
      answer: 3,
    },
  ],
  sources: [{ label: "Asch conformity experiments (Wikipedia)", url: "https://en.wikipedia.org/wiki/Asch_conformity_experiments" }],
}
