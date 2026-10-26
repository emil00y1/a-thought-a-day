import type { Thought } from "../types"

export const marysRoom: Thought = {
  slug: "marys-room",
  title: "Mary's Room",
  category: "philosophy",
  emoji: "🎨",
  hook: "Imagine knowing every scientific fact about color without ever having seen one. What happens when you finally do?",
  body: [
    "In 1982, Australian philosopher **Frank Jackson** imagined Mary, a brilliant scientist who has lived her whole life in a black-and-white room. Through books and a black-and-white TV, she learns every physical fact about color vision: light, the cones in the eye, every signal in the brain. Then she steps outside and sees a ripe red tomato.",
    "Does she learn something new? Most people say yes: now she knows **what it's like** to see red. Jackson argued that if Mary had every physical fact and still learned something, then some facts aren't physical. So **physicalism**, the view that everything is physical, must be false.",
    "Then Jackson changed his mind. By the mid-1990s he decided the argument goes wrong somewhere, and he now calls himself a physicalist. Critics offer ways out. The **ability hypothesis**, defended by David Lewis, says Mary gains new skills, like recognizing and imagining red, but no new facts. Daniel Dennett went further: if she truly knew everything physical, nothing about red would surprise her.",
  ],
  takeaway: "Knowing all the science of an experience may or may not be the same as having it, and even the argument's author changed sides.",
  facts: [
    {
      q: "Why did Jackson change his mind?",
      a: "His original view made experiences powerless: they couldn't cause anything physical. But when Mary sees red and says \"Wow!\", her experience seems to cause her words. He couldn't make both fit.",
    },
    {
      q: "How could you test Mary?",
      a: "Dennett's \"blue banana trick\": show her a blue banana when she first leaves. He argued a Mary who truly knew everything would spot the trick at once.",
    },
    {
      q: "Was the idea new in 1982?",
      a: "Not quite. In the 1920s, C. D. Broad imagined an all-knowing \"mathematical archangel\" who could work out ammonia's molecules but not how it smells.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "Mary walks out and sees a red tomato for the first time. Does she learn something new?",
      options: [
        { text: "Yes, a new fact", note: "You side with the young Jackson and with David Chalmers: some facts about experience aren't physical." },
        { text: "Yes, but only a new skill", note: "That's the ability hypothesis: she can now recognize and imagine red, but learns no new fact." },
        { text: "No, she knew it all already", note: "Dennett's view: someone with every physical fact would know exactly what red looks like." },
      ],
    },
    {
      type: "match",
      prompt: "Match each philosopher to their view on Mary",
      pairs: [
        ["Frank Jackson", "Imagined Mary in a black-and-white room"],
        ["Daniel Dennett", "She would spot a blue banana"],
        ["David Lewis", "She gains abilities, not facts"],
        ["David Chalmers", "The argument shows physicalism is false"],
      ],
    },
  ],
  recall: [
    {
      question: "What has Mary never done before she leaves the room?",
      options: ["Studied the science of color", "Seen colors for herself", "Talked with other people", "Read about the brain"],
      answer: 1,
    },
    {
      question: "What did Frank Jackson later conclude about his own argument?",
      options: [
        "It proves that souls exist",
        "It only works for color",
        "It was first made by Dennett",
        "It must go wrong somewhere",
      ],
      answer: 3,
    },
    {
      question: "According to the ability hypothesis, what does Mary gain?",
      options: ["New skills, not new facts", "A new non-physical fact", "Nothing she lacked before", "Sharper eyesight than others"],
      answer: 0,
    },
  ],
  sources: [
    {
      label: "Qualia: The Knowledge Argument (Stanford Encyclopedia of Philosophy)",
      url: "https://plato.stanford.edu/entries/qualia-knowledge/",
    },
  ],
}
