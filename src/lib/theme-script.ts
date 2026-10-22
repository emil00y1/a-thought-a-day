/**
 * Runs before the page paints, so there's no flash of the wrong theme.
 * Uses the saved choice, or the system setting until the user picks one.
 */
export const themeScript = `(() => {
  try {
    const root = document.documentElement
    const media = matchMedia("(prefers-color-scheme: dark)")
    const apply = () => {
      const saved = localStorage.getItem("theme")
      root.classList.toggle("dark", saved ? saved === "dark" : media.matches)
    }
    apply()
    media.addEventListener("change", apply)
  } catch {}
})()`

/** Tells the server the visitor's time zone, so a new thought arrives at their own midnight. */
export const timeZoneScript = `try {
  document.cookie = "tz=" + Intl.DateTimeFormat().resolvedOptions().timeZone + ";path=/;max-age=31536000;samesite=lax"
} catch {}`
