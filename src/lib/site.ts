/** The public address, used for canonical links, the sitemap and share images. */
export const siteUrl =
  process.env.BETTER_AUTH_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

/** Only the production deployment belongs in search results, not Vercel preview links. */
export const indexable = process.env.VERCEL_ENV === "production"
