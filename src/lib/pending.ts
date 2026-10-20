// A guest's finished thought, kept in the browser until they sign in.

const KEY = "atad:pending"

export type Pending = { slug: string; correct: number; total: number }

export function savePending(pending: Pending) {
  try {
    localStorage.setItem(KEY, JSON.stringify(pending))
  } catch {}
}

export function takePending(): Pending | null {
  try {
    const raw = localStorage.getItem(KEY)
    localStorage.removeItem(KEY)
    return raw ? (JSON.parse(raw) as Pending) : null
  } catch {
    return null
  }
}
