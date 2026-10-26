import type { Thought } from "../types"

export const cogito: Thought = {
  slug: "cogito",
  title: "I Think, Therefore I Am",
  category: "philosophy",
  emoji: "🤔",
  hook: "What if everything you believe is wrong? Is there anything you can still be sure of?",
  body: [
    "In the 1600s, French philosopher **René Descartes** set out to find something he could be completely sure of. His method was **radical doubt**: throw out any belief that could possibly be false, and see what survives.",
    "His senses sometimes fooled him, so he set them aside. He might be dreaming. In his Meditations, he even imagined an **evil demon** using all its power to trick him about everything, from the sky to his own body. Could anything survive that?",
    "One thing could. Even if he's being fooled, someone has to be there to be fooled. Doubting is a kind of thinking, and to think, you must exist. In Latin, **cogito, ergo sum**: \"I think, therefore I am.\" Descartes used it as the solid ground on which to rebuild knowledge.",
  ],
  takeaway: "You can doubt almost everything, but not that you, the one doing the doubting, exist.",
  facts: [
    {
      q: "Did Descartes first write it in Latin?",
      a: "No. He wrote \"je pense, donc je suis\" in French in his 1637 Discourse on the Method, so more people could read it.",
    },
    {
      q: "Did anyone say something like it first?",
      a: "Yes. About 1,200 years earlier, Saint Augustine wrote, \"If I am mistaken, I exist.\" Descartes said he was glad to agree with him.",
    },
    {
      q: "What's the classic objection?",
      a: "Pierre Gassendi asked whether thinking really proves an \"I\". Maybe all you can be sure of is that thinking is happening.",
    },
  ],
  activities: [
    {
      type: "match",
      prompt: "Match each step of Descartes' doubt to what it shows",
      pairs: [
        ["Your senses", "Sometimes deceive you"],
        ["Dreams", "This moment might not be real"],
        ["The evil demon", "The whole world could be faked"],
        ["Your own doubting", "Proves that you exist"],
      ],
    },
    {
      type: "choice",
      question: "Why can't even the evil demon make Descartes doubt that he exists?",
      options: [
        "His body proves that he's real",
        "Being fooled means someone exists",
        "His memories can't be faked",
        "Other people can see him",
      ],
      answer: 1,
      explain: "To be tricked, there has to be someone being tricked. The demon can fake the world, but not the doubter.",
    },
    {
      type: "poll",
      question: "Can you be certain, right now, that you're not dreaming?",
      options: [
        { text: "Yes, I'm sure I'm awake", note: "Descartes worried there are no sure signs that tell waking from dreaming." },
        { text: "No, I can't fully prove it", note: "Descartes would agree. That's why he looked for something even a dream couldn't fake." },
        { text: "It doesn't matter either way", note: "A practical view. Many philosophers say we can live well without total certainty." },
      ],
    },
  ],
  recall: [
    {
      question: "What was Descartes looking for with radical doubt?",
      options: [
        "Proof that the world is fake",
        "Something he couldn't doubt",
        "A way to stop bad dreams",
        "Reasons to trust his senses",
      ],
      answer: 1,
    },
    {
      question: "What does \"cogito, ergo sum\" mean?",
      options: ["I doubt, therefore I'm wrong", "I see, therefore it's real", "I am, therefore I think", "I think, therefore I am"],
      answer: 3,
    },
    {
      question: "Why does doubting prove that you exist?",
      options: [
        "Doubt is a feeling in the body",
        "Only real things can be doubted",
        "Doubting is a kind of thinking",
        "Others can see you doubting",
      ],
      answer: 2,
    },
  ],
  sources: [{ label: "Cogito, ergo sum (Wikipedia)", url: "https://en.wikipedia.org/wiki/Cogito,_ergo_sum" }],
}
