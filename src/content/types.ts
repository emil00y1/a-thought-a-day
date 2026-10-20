export type Category =
  | "science"
  | "history"
  | "facts"
  | "ideologies"
  | "experiments"
  | "space"
  | "research"
  | "philosophy"
  | "ethics"
  | "curious"

export type ChoiceActivity = {
  type: "choice"
  question: string
  options: string[]
  /** Index of the correct option. */
  answer: number
  explain: string
}

export type TrueFalseActivity = {
  type: "truefalse"
  statements: { text: string; answer: boolean; explain: string }[]
}

export type OrderActivity = {
  type: "order"
  prompt: string
  /** Listed in the correct order. Shuffled when shown. */
  items: { text: string; detail?: string }[]
  explain?: string
}

export type MatchActivity = {
  type: "match"
  prompt: string
  pairs: [left: string, right: string][]
}

export type EstimateActivity = {
  type: "estimate"
  question: string
  min: number
  max: number
  step: number
  answer: number
  /** Guesses within answer ± tolerance count as correct. */
  tolerance: number
  unit?: string
  explain: string
}

export type PollActivity = {
  type: "poll"
  question: string
  /** `pct` shows a result bar, `note` shows a reaction to that choice. Not scored. */
  options: { text: string; pct?: number; note?: string }[]
  explain?: string
}

export type Activity =
  | ChoiceActivity
  | TrueFalseActivity
  | OrderActivity
  | MatchActivity
  | EstimateActivity
  | PollActivity

export type RecallQuestion = {
  question: string
  options: string[]
  answer: number
}

export type Thought = {
  /** Stable id stored in the database. Never change it after launch. */
  slug: string
  title: string
  category: Category
  emoji: string
  /** One-line teaser shown before starting. */
  hook: string
  /** Short paragraphs. Wrap key words in **double stars** to bold them. */
  body: string[]
  /** One sentence to remember. Shown at the end and in the library. */
  takeaway: string
  /** Flip cards: question on the front, answer on the back. */
  facts: { q: string; a: string }[]
  activities: Activity[]
  /** Questions used in memory quizzes later. */
  recall: RecallQuestion[]
  sources?: { label: string; url: string }[]
}

/** The safe subset of a thought that review quizzes send to the browser. */
export type ThoughtSummary = Pick<Thought, "slug" | "title" | "category" | "emoji" | "takeaway">
