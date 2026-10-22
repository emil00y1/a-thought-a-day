// Brings the database up to date with the migrations in ./drizzle.
// Runs before every build, so a Vercel deploy sets up or updates its own tables.
// Skips quietly when no database is configured (e.g. a local build without .env).
import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import pg from "pg"

try {
  process.loadEnvFile() // local .env, if there is one
} catch {}

// Neon's unpooled URL is better for migrations; fall back to the normal one.
const url = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL
if (!url) {
  console.log("No DATABASE_URL set, skipping database migrations.")
  process.exit(0)
}

const pool = new pg.Pool({ connectionString: url })
await migrate(drizzle(pool), { migrationsFolder: "drizzle" })
await pool.end()
console.log("Database is up to date.")
