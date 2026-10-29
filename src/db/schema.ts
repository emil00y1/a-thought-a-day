import { bigint, boolean, date, index, integer, pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core"

// Better Auth tables

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  // Daily reminder email, opt-in. The time zone is saved when they play, so the email arrives at their midday.
  reminders: boolean("reminders").default(false).notNull(),
  timeZone: text("time_zone"),
  remindedOn: date("reminded_on", { mode: "string" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
})

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (t) => [index("session_user_id_idx").on(t.userId)]
)

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (t) => [index("account_user_id_idx").on(t.userId)]
)

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (t) => [index("verification_identifier_idx").on(t.identifier)]
)

/** Sign-in rate limit counters, kept in the database so they hold across serverless instances. */
export const rateLimit = pgTable("rate_limit", {
  id: text("id").primaryKey(),
  key: text("key").notNull().unique(),
  count: integer("count").notNull(),
  lastRequest: bigint("last_request", { mode: "number" }).notNull(),
})

// App tables

/** One row per thought a user has finished. `day` is the date it was scheduled for (the player's local date). */
export const learnedThought = pgTable(
  "learned_thought",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    thoughtSlug: text("thought_slug").notNull(),
    day: date("day", { mode: "string" }).notNull(),
    correct: integer("correct").notNull(),
    total: integer("total").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.thoughtSlug] })]
)

/** One row per finished memory quiz, so players can see their memory improve. */
export const quizResult = pgTable(
  "quiz_result",
  {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    correct: integer("correct").notNull(),
    total: integer("total").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (t) => [index("quiz_result_user_id_idx").on(t.userId)]
)

/** Feedback and thought suggestions from the footer forms. */
export const submission = pgTable("submission", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  kind: text("kind", { enum: ["feedback", "thought"] }).notNull(),
  message: text("message").notNull(),
  email: text("email"),
  mayContact: boolean("may_contact").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

/** Anonymous vote counts for poll games. `pollIndex` is the poll's position in the thought's activities. */
export const pollTally = pgTable(
  "poll_tally",
  {
    thoughtSlug: text("thought_slug").notNull(),
    pollIndex: integer("poll_index").notNull(),
    option: integer("option").notNull(),
    votes: integer("votes").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.thoughtSlug, t.pollIndex, t.option] })]
)

/** How often each thought was started and finished, guests included. Each browser counts once per thought. */
export const thoughtPlays = pgTable("thought_plays", {
  thoughtSlug: text("thought_slug").primaryKey(),
  started: integer("started").notNull().default(0),
  finished: integer("finished").notNull().default(0),
})
