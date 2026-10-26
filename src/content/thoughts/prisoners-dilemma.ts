import type { Thought } from "../types"

export const prisonersDilemma: Thought = {
  slug: "prisoners-dilemma",
  title: "The Prisoner's Dilemma",
  category: "experiments",
  emoji: "🤝",
  hook: "Why two smart people can both lose by doing what's best for themselves.",
  body: [
    "Two suspects are questioned in separate rooms. If both stay **silent**, each gets 1 year. If both **betray** each other, each gets 2 years. If one betrays and the other stays silent, the betrayer walks free and the silent one gets 3 years.",
    "Whatever your partner does, betraying gets **you** a better deal. So two purely selfish players both betray and get 2 years each, even though both staying silent would have cost them only 1. Logic alone leads to a worse result for both.",
    "The way out is **repetition**. In 1980, political scientist **Robert Axelrod** ran a tournament of computer programs playing the game over and over. The winner, **Tit for Tat**, was simple: cooperate first, then copy whatever the other player did last.",
  ],
  takeaway: "Pure self-interest can leave everyone worse off. Cooperation wins when we meet again.",
  facts: [
    {
      q: "Where does it come from?",
      a: "Mathematicians at the RAND Corporation came up with it in 1950, during the Cold War. Albert Tucker added the prison story.",
    },
    {
      q: "Why did Tit for Tat win?",
      a: "It was nice (never betrays first), hits back (punishes betrayal), forgives (returns to cooperating) and is easy to read.",
    },
    {
      q: "Where does it show up in real life?",
      a: "Arms races, price wars, climate deals and doping in sport. Everyone would be better off cooperating, but nobody wants to be the only one.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "You're one of the suspects. What do you do?",
      options: [
        { text: "Stay silent", note: "Trusting. If your partner does the same, you both get the best shared outcome." },
        { text: "Betray", note: "The \"rational\" move. If your partner thinks the same way, you both get 2 years." },
      ],
    },
    {
      type: "choice",
      question: "Your partner stays silent. What's best for you alone?",
      options: ["Stay silent: 1 year", "Betray: go free", "It makes no difference"],
      answer: 1,
      explain: "Betraying gets you off free. And if your partner betrays, betraying still beats silence (2 years vs 3). That's the trap.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Two shops on the same street keep cutting prices to steal each other's customers, and both end up earning less. That's a prisoner's dilemma.",
          answer: true,
          explain: "Each does better by undercutting whatever the other does, yet both would earn more if neither did.",
        },
        {
          text: "Playing Tit for Tat against someone who always betrays, you'd cooperate only in round one.",
          answer: true,
          explain: "Tit for Tat opens kindly, then copies the last move. After the first betrayal, it betrays back every round.",
        },
        {
          text: "In a one-time deal with a stranger you'll never meet again, staying silent is the safe selfish choice.",
          answer: false,
          explain: "With no next round, nothing punishes betrayal. That's exactly when selfish logic says betray, which is why repetition matters.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "In the prisoner's dilemma, what happens if both act purely selfishly?",
      options: [
        "Both walk free",
        "Both end up worse off",
        "Both get 1 year each",
        "One goes free, one gets 3 years",
      ],
      answer: 1,
    },
    {
      question: "Which strategy won Axelrod's tournament?",
      options: ["Always betray", "Tit for Tat", "Random moves", "Always cooperate"],
      answer: 1,
    },
    {
      question: "What does Tit for Tat do?",
      options: [
        "Cooperates, then copies your last move",
        "Betrays first, then copies your last move",
        "Always cooperates, whatever you do",
        "Picks a random move each round",
      ],
      answer: 0,
    },
  ],
  sources: [{ label: "Prisoner's dilemma (Wikipedia)", url: "https://en.wikipedia.org/wiki/Prisoner%27s_dilemma" }],
}
