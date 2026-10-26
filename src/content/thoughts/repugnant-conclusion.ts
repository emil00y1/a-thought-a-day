import type { Thought } from "../types"

export const repugnantConclusion: Thought = {
  slug: "repugnant-conclusion",
  title: "The Repugnant Conclusion",
  category: "ethics",
  emoji: "🧮",
  hook: "A few reasonable-looking steps prove that a vast world of barely-worth-living lives beats a world of thriving ones.",
  body: [
    "In his 1984 book Reasons and Persons, **Derek Parfit** compared imaginary futures. Start with world A: ten billion people, all with wonderful lives. Now add some extra people whose lives are good, just less good. Nobody already there is harmed, so this **mere addition** doesn't seem to make things worse.",
    "Next, share everything out evenly, at a level a little below A's, but with more good in total. That seems better still. Repeat these steps again and again and you reach world Z: an enormous population whose lives are barely worth living. Step by step, Z beats A. Parfit called this the **repugnant conclusion**.",
    "Escaping it is harder than it looks. **Total utilitarianism**, which adds up all the good, simply accepts Z. Judging by average happiness avoids Z, but then adding a person with a good life can make the world worse, just because they pull the average down. Philosopher Gustaf Arrhenius later proved that no theory can satisfy every one of a set of plausible-looking rules.",
  ],
  takeaway: "When we compare worlds with different numbers of people, every simple rule seems to lead somewhere we don't want to go.",
  facts: [
    {
      q: "What are lives in world Z like?",
      a: "Parfit pictured them as little more than \"muzak and potatoes\": nothing terrible, but nothing wonderful either.",
    },
    {
      q: "Does anyone accept it?",
      a: "Yes. In 2021, 29 philosophers and economists, including Hilary Greaves and Toby Ord, co-signed a paper saying a good theory doesn't have to avoid it.",
    },
    {
      q: "Is there a worse version?",
      a: "The \"very repugnant conclusion\": some theories say a world with many people suffering, plus a vast number with barely good lives, beats a world where everyone thrives.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "World A: ten billion people with wonderful lives. World Z: trillions with lives barely worth living. Which is better?",
      options: [
        { text: "World A, clearly", note: "Most people's gut reaction, and Parfit's too. The hard part is saying which step of the argument fails." },
        { text: "World Z, if its total is bigger", note: "You side with total utilitarians like Torbjörn Tännsjö, who say our gut can't grasp huge numbers." },
        { text: "They can't be ranked like that", note: "Some philosophers say \"better than\" doesn't chain neatly here, so the steps don't add up." },
      ],
    },
    {
      type: "order",
      prompt: "Put Parfit's steps in order, from world A to world Z",
      items: [
        { text: "Ten billion people live wonderful lives", detail: "World A" },
        { text: "Extra people with good lives are added", detail: "World A+" },
        { text: "Everyone is evened out, with more good in total", detail: "World B" },
        { text: "Repeat until lives are barely worth living", detail: "World Z" },
      ],
      explain: "Each step seems no worse, or even better, than the last. Yet the chain ends somewhere almost nobody likes.",
    },
  ],
  recall: [
    {
      question: "Who came up with the repugnant conclusion?",
      options: ["Peter Singer", "John Rawls", "Robert Nozick", "Derek Parfit"],
      answer: 3,
    },
    {
      question: "What are lives like in Parfit's world Z?",
      options: ["Full of constant pain", "Barely worth living", "Better than in world A", "Exactly like ours today"],
      answer: 1,
    },
    {
      question: "What's the problem with judging worlds by average happiness?",
      options: [
        "Adding a good life can lower its score",
        "It always favors huge populations",
        "It leads straight to world Z",
        "It counts everyone's happiness equally",
      ],
      answer: 0,
    },
  ],
  sources: [{ label: "The Repugnant Conclusion (Stanford Encyclopedia of Philosophy)", url: "https://plato.stanford.edu/entries/repugnant-conclusion/" }],
}
