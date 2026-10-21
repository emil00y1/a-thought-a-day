import type { Thought } from "../types"

export const platosCave: Thought = {
  slug: "platos-cave",
  title: "Plato's Cave",
  category: "philosophy",
  emoji: "🕯️",
  hook: "What if everything you've ever seen were only shadows on a wall?",
  body: [
    "In the **Republic**, written around 375 BC, Plato imagines prisoners chained in a cave since birth, facing a wall. Behind them, a fire throws **shadows** of objects onto the wall. The shadows are all they've ever seen, so to them, shadows are reality.",
    "One prisoner is freed. The fire hurts his eyes. Outside, the sunlight blinds him. Slowly he sees real things, and finally the Sun itself. He understands the shadows were only copies.",
    "He goes back to free the others. But they mock him, and Plato hints they'd even kill him. The story is about **education**: learning the truth is painful, and people often resist it.",
  ],
  takeaway: "What we take for reality may be shadows. Learning hurts before it frees you.",
  facts: [
    {
      q: "Who tells the story?",
      a: "Socrates, Plato's teacher, in a dialogue Plato wrote. Socrates himself was executed in 399 BC for \"corrupting the youth\".",
    },
    {
      q: "Why would they kill the returning prisoner?",
      a: "Plato was likely thinking of Socrates, put to death by Athens for making people question what they believed.",
    },
    {
      q: "Where does it show up today?",
      a: "Films like The Matrix and The Truman Show tell versions of the same story.",
    },
  ],
  activities: [
    {
      type: "order",
      prompt: "Put the prisoner's journey in order",
      items: [
        { text: "Sees only shadows on the wall" },
        { text: "Turns and sees the fire" },
        { text: "Climbs out, blinded by sunlight" },
        { text: "Finally looks at the Sun itself" },
        { text: "Returns to free the others" },
      ],
      explain: "Each step hurts before it helps. That's Plato's point about learning.",
    },
    {
      type: "choice",
      question: "In the allegory, what do the shadows stand for?",
      options: ["Dreams", "Appearances we mistake for the truth", "Ghosts of ancestors", "Fear of the dark"],
      answer: 1,
      explain: "The shadows are the surface of things. Plato thought real understanding lies beyond what we first see.",
    },
    {
      type: "poll",
      question: "If you learned your whole world was shadows, would you want to know?",
      options: [
        { text: "Yes, show me the Sun", note: "Plato would approve. He thought the truth was worth the pain." },
        { text: "No, I'm comfortable here", note: "In The Matrix, one character chooses exactly that. You wouldn't be alone." },
        { text: "Only if others come too", note: "That's the hard part. The freed prisoner tries, and they don't listen." },
      ],
    },
  ],
  recall: [
    {
      question: "In Plato's cave, what do the prisoners believe is real?",
      options: ["The fire", "Shadows on the wall", "The Sun", "Their dreams"],
      answer: 1,
    },
    {
      question: "What happens when the freed prisoner returns to the cave?",
      options: ["He is crowned king", "The others mock him and resist", "He forgets everything", "He stays silent"],
      answer: 1,
    },
    {
      question: "What is Plato's cave mainly about?",
      options: ["Ancient architecture", "Education and seeing past appearances", "Fire safety", "Greek religion"],
      answer: 1,
    },
  ],
  sources: [{ label: "Allegory of the cave (Wikipedia)", url: "https://en.wikipedia.org/wiki/Allegory_of_the_cave" }],
}
