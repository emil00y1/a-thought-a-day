import type { Thought } from "../types"

export const ringOfGyges: Thought = {
  slug: "ring-of-gyges",
  title: "The Ring of Gyges",
  category: "ethics",
  emoji: "💍",
  hook: "A ring makes you invisible. No one will ever know what you do. Would you stay good?",
  body: [
    "In Plato's **Republic**, written around 375 BC, Plato's brother **Glaucon** tells a story. After an earthquake, a shepherd in Lydia finds a gold ring in a tomb. When he turns the ring's setting toward his palm, he becomes **invisible**. He uses the power to seduce the queen, kill the king and take the throne.",
    "Glaucon's challenge: give one ring to a just person and one to an unjust person, and they'd end up acting the same. People are good, he claims, only because they fear getting caught. **Justice** is just a deal we make to protect ourselves from each other.",
    "Socrates spends much of the rest of the Republic answering. His reply: injustice harms the person who does it. Someone who misuses the ring becomes a slave to their own **appetites**, while a just person stays in control of themselves, and that is what makes them truly happy.",
  ],
  takeaway: "The ring asks whether you're good because it's right, or only because someone might be watching.",
  facts: [
    {
      q: "Was Gyges a real person?",
      a: "Yes. Gyges was a king of Lydia, in today's Turkey, in the 600s BC. He took the throne by killing the king before him.",
    },
    {
      q: "Did the ring inspire Tolkien?",
      a: "Possibly. Tolkien knew Plato's story, and scholars often compare it to the One Ring, which also makes its wearer invisible and corrupts them.",
    },
    {
      q: "Did anyone else retell it?",
      a: "The Roman writer Cicero did. He argued that a good person avoids wrongdoing even when no one could ever find out.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "You find the Ring of Gyges. No one could ever know what you do with it. What do you do?",
      options: [
        { text: "Use it only for good", note: "Socrates would approve. Glaucon would bet you can't keep it up forever." },
        { text: "Bend a few small rules", note: "Glaucon's prediction in miniature: once getting caught isn't a risk, the rules start to slip." },
        { text: "Throw it away", note: "Maybe the wisest choice. Avoiding temptation is one way to stay good." },
        { text: "Take whatever I want", note: "Honest. Glaucon says this is what everyone would secretly do." },
      ],
    },
    {
      type: "choice",
      question: "What is Glaucon's story meant to suggest?",
      options: [
        "Invisibility is the best power",
        "Kings deserve to be overthrown",
        "People are good only out of fear",
        "Magic always corrupts its user",
      ],
      answer: 2,
      explain: "If the just person with the ring acts just like the unjust one, then goodness was only ever about not getting caught.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "The shepherd finds the ring while digging for treasure.",
          answer: false,
          explain: "An earthquake opened a chasm, and he found the ring on a body inside a tomb there.",
        },
        {
          text: "Glaucon tells the story because he wants Socrates to prove him wrong.",
          answer: true,
          explain: "He makes the strongest case he can for injustice, so Socrates has to answer it properly.",
        },
        {
          text: "In Herodotus's history, Gyges also uses a ring of invisibility.",
          answer: false,
          explain: "Herodotus tells a different tale with no ring: Gyges is a bodyguard forced to kill the king or be killed himself.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "What power does the Ring of Gyges give?",
      options: ["Great strength", "Invisibility", "Reading minds", "Eternal life"],
      answer: 1,
    },
    {
      question: "Who tells the story of the ring in Plato's Republic?",
      options: ["Socrates", "Aristotle", "Glaucon", "Herodotus"],
      answer: 2,
    },
    {
      question: "According to Socrates, what happens to someone who misuses the ring?",
      options: [
        "They are ruled by their desires",
        "They are soon caught and punished",
        "They lose the ring's power",
        "They become wise rulers",
      ],
      answer: 0,
    },
  ],
  sources: [{ label: "Ring of Gyges (Wikipedia)", url: "https://en.wikipedia.org/wiki/Ring_of_Gyges" }],
}
