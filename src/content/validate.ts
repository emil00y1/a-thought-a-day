import type { Thought } from "./types"

/**
 * Catches content mistakes TypeScript can't, like an answer index past the options.
 * Runs when the app loads, so `next dev` and `next build` fail loudly on bad content.
 */
export function validateThoughts(thoughts: Thought[]) {
  const errors: string[] = []
  const slugs = new Set<string>()

  for (const t of thoughts) {
    const fail = (msg: string) => errors.push(`${t.slug}: ${msg}`)

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.slug)) fail("slug must be kebab-case")
    if (slugs.has(t.slug)) fail("duplicate slug")
    slugs.add(t.slug)

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
          if (a.options.some((o) => o.pct !== undefined && (o.pct < 0 || o.pct > 100)))
            fail(`${where}: pct must be between 0 and 100`)
          break
      }
    })

    t.sources?.forEach((s) => {
      if (!s.url.startsWith("https://")) fail(`source "${s.label}" must be an https link`)
    })
  }

  if (errors.length) throw new Error(`Invalid thought content:\n- ${errors.join("\n- ")}`)
}
