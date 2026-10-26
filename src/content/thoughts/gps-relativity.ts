import type { Thought } from "../types"

export const gpsRelativity: Thought = {
  slug: "gps-relativity",
  title: "GPS Runs on Einstein",
  category: "science",
  emoji: "🛰️",
  hook: "Your map app only works because time runs at different speeds in space.",
  body: [
    "Your phone finds you by timing radio signals from GPS satellites about 20,000 km up. The signals travel at the speed of light, so the timing has to be incredibly precise: an error of just **one millionth of a second** puts you about 300 meters off.",
    "Here's the catch: **Einstein** showed that time itself runs at different speeds. Fast-moving clocks tick slower (about 7 microseconds a day for GPS), and clocks in weaker gravity tick faster (about 45). Net result: satellite clocks gain about **38 microseconds a day**.",
    "Left uncorrected, GPS would drift by around **10 km every day**. So engineers tune the satellite clocks to tick slightly slow before launch. Every time you use a map, you're relying on relativity.",
  ],
  takeaway: "Time runs at different speeds. GPS only works because it corrects for Einstein.",
  facts: [
    {
      q: "How many satellites does your phone need?",
      a: "At least four: three to pin down your position, and one more to correct your phone's own clock.",
    },
    {
      q: "How high are GPS satellites?",
      a: "About 20,200 km up, each circling Earth twice a day.",
    },
    {
      q: "How are the clocks adjusted?",
      a: "Before launch, they're set to tick a hair too slow, so that in orbit they keep exactly the right time as seen from the ground.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "Two identical clocks sit still for years: one on a high mountain, one on a beach. Which ends up ahead?",
      options: ["The beach clock", "The mountain clock", "Neither, they stay matched", "Whichever is kept colder"],
      answer: 1,
      explain: "Neither clock is moving, so only gravity matters. Gravity is slightly weaker on the mountain, so that clock ticks a little faster. Scientists have measured this even with clocks just a few meters apart.",
    },
    {
      type: "match",
      prompt: "Match each effect to what it does to a satellite clock",
      pairs: [
        ["Moving fast", "Slows it by about 7 µs a day"],
        ["Weaker gravity", "Speeds it up by about 45 µs a day"],
        ["Both together", "Gains about 38 µs a day"],
      ],
    },
    {
      type: "estimate",
      question: "Each microsecond of clock error puts you about 300 m off. Suppose engineers corrected only for weaker gravity and forgot the speed effect. About how far would GPS drift each day?",
      min: 0,
      max: 20,
      step: 0.1,
      answer: 2.1,
      tolerance: 0.5,
      unit: "km",
      explain: "The speed effect alone slows the clocks by about 7 microseconds a day. 7 × 300 m is about 2.1 km a day. Smaller than 10 km, but still far too much for a map.",
    },
  ],
  recall: [
    {
      question: "Why must GPS correct for relativity?",
      options: [
        "Sunlight heats up the satellite clocks",
        "Time runs faster for the satellites",
        "Clouds slow down the radio signals",
        "Earth's magnetic field bends the signals",
      ],
      answer: 1,
    },
    {
      question: "How much do GPS satellite clocks gain per day?",
      options: ["About 38 microseconds", "About 38 milliseconds", "About a tenth of a second", "About 1 minute"],
      answer: 0,
    },
    {
      question: "Which effect makes GPS satellite clocks run faster?",
      options: ["Their high orbital speed", "Weaker gravity in orbit", "Pressure from the solar wind", "The cold of outer space"],
      answer: 1,
    },
  ],
  sources: [
    { label: "Error analysis for GPS (Wikipedia)", url: "https://en.wikipedia.org/wiki/Error_analysis_for_the_Global_Positioning_System" },
  ],
}
