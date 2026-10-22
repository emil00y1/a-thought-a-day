// A guest's finished thought, kept in the browser until they sign in.

const KEY = "atad:pending"

export type Pending = { slug: string; correct: number; total: number }

export function savePending(pending: Pending) {
  try {
    localStorage.setItem(KEY, JSON.stringify(pending))
  } catch {}
}

/** The stored JSON, as a string so it can be a useSyncExternalStore snapshot. */
export function pendingSnapshot() {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export function parsePending(raw: string | null): Pending | null {
  try {
    return raw ? (JSON.parse(raw) as Pending) : null
  } catch {
    return null
  }
}

export function takePending(): Pending | null {
  const pending = parsePending(pendingSnapshot())
  try {
    localStorage.removeItem(KEY)
  } catch {}
  return pending
}
