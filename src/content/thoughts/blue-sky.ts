import type { Thought } from "../types"

export const blueSky: Thought = {
  slug: "blue-sky",
  title: "Why the Sky Is Blue",
  category: "science",
  emoji: "🌤️",
  hook: "Sunlight is white. So why is the sky blue and the sunset orange?",
  body: [
    "Sunlight looks white but contains every color of the rainbow. When it hits the air, tiny gas molecules bounce some of it off in random directions. This is called **Rayleigh scattering**.",
    "Shorter wavelengths scatter far more than longer ones. Blue light gets bounced around **about 5 to 6 times more** than red, so wherever you look in the sky, blue light is coming at you.",
    "At sunset, light travels through much more air to reach you. Most of the blue gets scattered away on the trip, leaving the **reds and oranges**. Violet scatters even more than blue, but the Sun gives off less of it and our eyes are less sensitive to it.",
  ],
  takeaway: "Air scatters blue light the most, so blue fills the sky, and long sunset paths leave red behind.",
  facts: [
    {
      q: "Who is it named after?",
      a: "Lord Rayleigh, a British physicist who worked out the math in 1871.",
    },
    {
      q: "What color is a sunset on Mars?",
      a: "Blue! Fine Martian dust scatters light differently, so the daytime sky looks butterscotch and sunsets glow blue.",
    },
    {
      q: "Does the sky reflect the ocean?",
      a: "No, that's a myth. The sky is just as blue over a desert.",
    },
  ],
  activities: [
    {
      type: "choice",
      question: "The Moon has no air. If you stood there in the daytime, what color would the sky be?",
      options: [
        "Blue, but paler than on Earth",
        "Black, with nothing to scatter light",
        "Orange, like a sunset all day long",
        "White, since all colors arrive at once",
      ],
      answer: 1,
      explain:
        "The blue comes from air scattering sunlight. With no air, nothing sends light toward you from the rest of the sky, so it's black even with the Sun up.",
    },
    {
      type: "choice",
      question: "Violet scatters even more than blue. So why isn't the sky violet?",
      options: [
        "Violet light can't travel through air",
        "Less violet arrives, and eyes favor blue",
        "Clouds and dust absorb most of the violet",
        "It is violet, we just call it blue",
      ],
      answer: 1,
      explain: "Less violet arrives in the first place, and our eyes respond much more strongly to blue.",
    },
    {
      type: "truefalse",
      statements: [
        {
          text: "The sky is blue because it reflects the ocean.",
          answer: false,
          explain: "Myth. It's the air itself scattering sunlight.",
        },
        {
          text: "From the top of a very high mountain, the sky looks a darker blue than it does at the beach.",
          answer: true,
          explain: "There's less air above you, so less light gets scattered toward your eyes. Climb high enough and the sky turns almost black.",
        },
        {
          text: "If Earth's air were much thicker, sunsets would look less red.",
          answer: false,
          explain: "Thicker air means even more blue scattered away on the long sunset path, so sunsets would look redder, not less red.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "Why is the sky blue?",
      options: [
        "It reflects the color of the ocean",
        "Air scatters blue light the most",
        "Water vapor in the air is blue",
        "The Sun gives off mostly blue light",
      ],
      answer: 1,
    },
    {
      question: "Why are sunsets red and orange?",
      options: [
        "The Sun cools down in the evening",
        "Blue is scattered away on the long path",
        "The air acts like a prism at dusk",
        "The Sun is closer to Earth at sunset",
      ],
      answer: 1,
    },
    {
      question: "What is the effect that makes the sky blue called?",
      options: ["Doppler shift", "Rayleigh scattering", "The greenhouse effect", "Refraction"],
      answer: 1,
    },
  ],
  sources: [{ label: "Rayleigh scattering (Wikipedia)", url: "https://en.wikipedia.org/wiki/Rayleigh_scattering" }],
}
