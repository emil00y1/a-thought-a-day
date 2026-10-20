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
      type: "estimate",
      question: "How many times more does blue light scatter than red light?",
      min: 1,
      max: 10,
      step: 0.5,
      answer: 5.5,
      tolerance: 1,
      unit: "×",
      explain: "Roughly 5 to 6 times. Scattering grows steeply as the wavelength gets shorter.",
    },
    {
      type: "choice",
      question: "Violet scatters even more than blue. So why isn't the sky violet?",
      options: [
        "Violet light can't pass through air",
        "The Sun emits less violet and our eyes are less sensitive to it",
        "Clouds absorb all the violet",
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
          text: "Sunsets are red because blue light gets scattered away on the long path.",
          answer: true,
          explain: "Low sunlight crosses far more air, so mostly reds and oranges make it through.",
        },
        {
          text: "On Mars, sunsets look blue.",
          answer: true,
          explain: "Martian dust scatters blue light forward, toward the setting Sun.",
        },
      ],
    },
  ],
  recall: [
    {
      question: "Why is the sky blue?",
      options: [
        "It reflects the ocean",
        "Air scatters blue light more than other colors",
        "Ozone is blue",
        "The Sun is slightly blue",
      ],
      answer: 1,
    },
    {
      question: "Why are sunsets red and orange?",
      options: [
        "The Sun cools down in the evening",
        "Light crosses more air, so the blue is scattered away",
        "Dust only rises at night",
        "The Moon reflects red light",
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
