import type { Thought } from "../types"

export const kolaBorehole: Thought = {
  slug: "kola-borehole",
  title: "The Kola Superdeep Borehole",
  category: "facts",
  emoji: "🕳️",
  hook: "The deepest hole humans have ever made is narrower than a dinner plate, and it's welded shut.",
  body: [
    "In 1970, Soviet scientists began drilling in the far north of Russia, near Norway, just to learn what the deep crust is like. By 1989, one branch of the **Kola Superdeep Borehole** reached **12,262 meters**, about 12.3 km. That's deeper than the ocean's deepest trench, and it's still the deepest hole on Earth. Yet it got only about a third of the way through the crust there.",
    "The rock didn't match the textbooks. Scientists expected a switch from granite to **basalt** around 7 km down, but they never found basalt at all. Instead they found water trapped kilometers underground, drilling mud fizzing with hydrogen, and tiny fossils of plankton 6 km below the surface.",
    "What stopped it was **heat**. The deeper it went, the hotter it got, and in 1992 a branch was halted at about 11.9 km by temperatures of 180 °C, far above what planners expected. With the Soviet Union gone, money ran out, and work ended in 1995. And the famous recording of screams from a **Well to Hell**? A hoax, stitched together from horror movie sound effects.",
  ],
  takeaway: "The deepest hole ever drilled barely scratched Earth's crust, and it was heat, not hell, that stopped it.",
  facts: [
    {
      q: "How far is that toward Earth's center?",
      a: "Only about 0.2% of the way. Earth's center is roughly 6,370 km down, more than 500 times deeper.",
    },
    {
      q: "Is it still the longest hole?",
      a: "No. In 2008, a curved oil well in Qatar beat its length at 12,289 m, though it only went 1,387 m down.",
    },
    {
      q: "What went wrong in 1984?",
      a: "A 5 km section of drill pipe twisted off and was left stuck in the hole. The team had to start a new branch from higher up.",
    },
  ],
  activities: [
    {
      type: "estimate",
      question: "How deep did the Kola Superdeep Borehole get?",
      min: 1,
      max: 30,
      step: 0.1,
      answer: 12.3,
      tolerance: 1,
      unit: "km",
      explain: "12,262 m, or about 12.3 km. That's deeper than Mount Everest is tall, by more than 3 km.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "Soviet scientists lowered a microphone and recorded screams from below.",
          answer: false,
          explain: "The \"Well to Hell\" story spread through newsletters and TV in the late 1980s. The audio was looped from sound effects.",
        },
        {
          text: "Fossils of tiny sea creatures turned up kilometers below the surface.",
          answer: true,
          explain: "Microscopic plankton fossils were found about 6 km down.",
        },
        {
          text: "The hole is wide enough for a person to climb down.",
          answer: false,
          explain: "It's only about 23 cm (9 inches) across, a bit narrower than a dinner plate.",
        },
      ],
    },
    {
      type: "choice",
      question: "What made drilling past about 12 km so hard?",
      options: [
        "A layer of rock as hard as diamond",
        "Water flooding the hole from below",
        "Temperatures far higher than expected",
        "Earthquakes shaking the drilling rig",
      ],
      answer: 2,
      explain: "At 180 °C, the bottom was much hotter than planned for, and equipment kept failing. Then the money ran out too.",
    },
  ],
  recall: [
    {
      question: "About how deep is the Kola Superdeep Borehole?",
      options: ["About 1.2 km", "About 35 km", "About 12 km", "About 120 km"],
      answer: 2,
    },
    {
      question: "Which expected layer did the drillers never find?",
      options: ["Basalt", "Granite", "Water", "Hydrogen gas"],
      answer: 0,
    },
    {
      question: "What is true of the \"Well to Hell\" screams?",
      options: [
        "They came from trapped miners",
        "They were gas escaping the hole",
        "They were made from sound effects",
        "They were recorded at 14 km down",
      ],
      answer: 2,
    },
  ],
  sources: [{ label: "Kola Superdeep Borehole (Wikipedia)", url: "https://en.wikipedia.org/wiki/Kola_Superdeep_Borehole" }],
}
