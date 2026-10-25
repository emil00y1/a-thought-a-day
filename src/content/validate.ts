import type { Thought } from "./types"

/**
 * Catches content mistakes TypeScript can't, like an answer index past the options.
 * Runs when the app loads, so `next dev` and `next build` fail loudly on bad content.
 */
export function validateThoughts(thoughts: Thought[]) {
  const errors: string[] = []
  const slugs = new Set<string>()
  const emojis = new Set<string>()

  thoughts.forEach((t, i) => {
    const next = thoughts[i + 1]
    // Back-to-back days from the same category feel repetitive.
    if (next && next.category === t.category)
      errors.push(`${next.slug}: same category (${t.category}) as the day before (${t.slug}). Move it further down the list.`)
  })

  for (const t of thoughts) {
    const fail = (msg: string) => errors.push(`${t.slug}: ${msg}`)

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.slug)) fail("slug must be kebab-case")
    if (slugs.has(t.slug)) fail("duplicate slug")
    slugs.add(t.slug)

    // Whether an emoji fits is a judgment call, but it must be one emoji and not reused.
    const graphemes = [...new Intl.Segmenter().segment(t.emoji)].length
    if (graphemes !== 1 || !/\p{Extended_Pictographic}/u.test(t.emoji)) fail("emoji must be exactly one emoji")
    if (emojis.has(t.emoji)) fail(`emoji ${t.emoji} is already used by another thought`)
    emojis.add(t.emoji)

    if (t.body.length === 0) fail("body is empty")
    if (t.facts.length === 0) fail("needs at least one fact")
    if (t.activities.length === 0) fail("needs at least one activity")
    if (t.recall.length === 0) fail("needs at least one recall question")

    const checkChoice = (where: string, options: string[], answer: number) => {
      if (options.length < 2) fail(`${where}: needs at least 2 options`)
      if (!Number.isInteger(answer) || answer < 0 || answer >= options.length)
        fail(`${where}: answer ${answer} is not a valid option index (0 to ${options.length - 1})`)
      if (new Set(options).size !== options.length) fail(`${where}: has duplicate options`)
    }

    t.recall.forEach((q, i) => checkChoice(`recall #${i + 1}`, q.options, q.answer))

    t.activities.forEach((a, i) => {
      const where = `activity #${i + 1} (${a.type})`
      switch (a.type) {
        case "choice":
          checkChoice(where, a.options, a.answer)
          break
        case "truefalse":
          if (a.statements.length === 0) fail(`${where}: needs at least one statement`)
          break
        case "order":
          if (a.items.length < 2) fail(`${where}: needs at least 2 items`)
          if (new Set(a.items.map((x) => x.text)).size !== a.items.length) fail(`${where}: item texts must be unique`)
          break
        case "match":
          if (a.pairs.length < 2) fail(`${where}: needs at least 2 pairs`)
          if (new Set(a.pairs.map((p) => p[0])).size !== a.pairs.length) fail(`${where}: left texts must be unique`)
          if (new Set(a.pairs.map((p) => p[1])).size !== a.pairs.length) fail(`${where}: right texts must be unique`)
          break
        case "estimate":
          if (a.min >= a.max) fail(`${where}: min must be below max`)
          if (a.step <= 0) fail(`${where}: step must be positive`)
          if (a.answer < a.min || a.answer > a.max) fail(`${where}: answer ${a.answer} is outside ${a.min} to ${a.max}`)
          if (a.tolerance < 0) fail(`${where}: tolerance can't be negative`)
          break
        case "poll":
          if (a.options.length < 2) fail(`${where}: needs at least 2 options`)
          if (new Set(a.options.map((o) => o.text)).size !== a.options.length) fail(`${where}: has duplicate options`)
          break
      }
    })

    t.sources?.forEach((s) => {
      if (!s.url.startsWith("https://")) fail(`source "${s.label}" must be an https link`)
    })
  }

  if (errors.length) throw new Error(`Invalid thought content:\n- ${errors.join("\n- ")}`)
}
