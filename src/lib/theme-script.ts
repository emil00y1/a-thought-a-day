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
