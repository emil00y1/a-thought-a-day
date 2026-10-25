import type { Thought } from "../types"

export const placeboEffect: Thought = {
  slug: "placebo-effect",
  title: "The Placebo Effect",
  category: "research",
  emoji: "💊",
  hook: "Sugar pills can make you feel better. But how much, and for what?",
  body: [
    "A **placebo** is a fake treatment that looks real, like a sugar pill or a salt water injection. The word is Latin for \"I shall please\". In drug trials, one group often gets a placebo, so researchers can tell whether the real drug does more.",
    "People on placebos often improve, but much of that isn't the pill. Many illnesses ease on their own, and an unusually bad day tends to be followed by a more normal one, called **regression to the mean**. When studies compare placebo with no treatment at all, the real **placebo effect** shows up mostly in what people feel and report, like **pain** and nausea.",
    "Strangely, a placebo can help even when you know it's fake. In small trials of **open-label placebos**, patients told \"these are sugar pills\" still reported feeling better. Expectation and the ritual of care seem to matter, though researchers still debate how much.",
  ],
  takeaway: "Placebos can change how symptoms feel, especially pain, but they don't fix the disease underneath.",
  facts: [
    {
      q: "Was the placebo effect once overrated?",
      a: "Yes. A famous 1955 paper, \"The Powerful Placebo\", claimed big effects. A 1997 recheck of its data found no clear evidence of a placebo effect at all.",
    },
    {
      q: "Can a placebo fool your lungs?",
      a: "No. In a 2011 asthma study, patients felt almost as much relief from a fake inhaler as a real one, but only the real drug improved their breathing.",
    },
    {
      q: "Is there an evil twin?",
      a: "Yes, the nocebo effect, Latin for \"I shall harm\". Expecting side effects can make people feel them, even from a sugar pill.",
    },
  ],
  activities: [
    {
      type: "poll",
      question: "Your doctor offers pills and says, \"These are sugar pills, but they may help.\" Would you take them?",
      options: [
        { text: "Yes, why not?", note: "Some open-label trials, like a 2010 one on bowel pain, found people felt better even knowing." },
        { text: "No, it feels pointless", note: "Fair. The benefits found so far are modest and come from small studies." },
        { text: "Only alongside real care", note: "A cautious view. A placebo shouldn't replace a treatment that works on the disease." },
      ],
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Everyone who improves on a placebo is showing the placebo effect.",
          answer: false,
          explain: "Many would have improved anyway. That's why good studies also include a no-treatment group.",
        },
        {
          text: "Placebo pain relief can involve the brain's own painkillers.",
          answer: true,
          explain: "Since 1978, studies have linked it to endorphins, the body's natural opioids.",
        },
        {
          text: "Placebos work best on infections and broken bones.",
          answer: false,
          explain: "The clearest effects are on things people feel, like pain, not on measurable damage.",
        },
      ],
    },
    {
      type: "choice",
      question: "Why do drug trials give some patients a placebo?",
      options: [
        "To save money on costly drugs",
        "To see if the drug beats a fake",
        "To check that patients follow orders",
        "To hide the drug from rivals",
      ],
      answer: 1,
      explain: "If the real drug does no better than an identical fake, its benefit probably comes from expectation and natural recovery.",
    },
  ],
  recall: [
    {
      question: "What do placebos mostly affect?",
      options: ["Infections and tumors", "The disease underneath", "Symptoms like pain", "Nothing at all, ever"],
      answer: 2,
    },
    {
      question: "What is an open-label placebo?",
      options: ["A fake pill you know is fake", "A real drug with no label", "A sugar pill hidden inside food", "A pill tested on animals"],
      answer: 0,
    },
    {
      question: "Apart from the placebo effect, why do many people improve on a placebo?",
      options: [
        "Sugar is a mild painkiller",
        "Doctors secretly add real drugs",
        "Fake pills contain vitamins",
        "Many illnesses ease anyway",
      ],
      answer: 3,
    },
  ],
  sources: [{ label: "Placebo (Wikipedia)", url: "https://en.wikipedia.org/wiki/Placebo" }],
}
