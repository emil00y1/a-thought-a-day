// Plays today's thought in a real browser, like a guest would.
// With SIGNUP=1 it also signs up with a throwaway mail.tm inbox, checks the
// signed-in pages and deletes the account again. Poll votes are never counted.
//
//   BASE_URL=https://justathought.day SIGNUP=1 npm run test:e2e

import { chromium } from "playwright"

const BASE = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "")
const SIGNUP = process.env.SIGNUP === "1"

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
const problems = []
page.on("pageerror", (e) => problems.push(`page error: ${e.message}`))
page.on("response", (r) => {
  if (r.status() >= 500) problems.push(`${r.status()} ${r.url()}`)
})
const ok = (msg) => console.log(`✓ ${msg}`)

try {
  await page.goto(`${BASE}/`)
  const title = await page.locator("h1").first().innerText()
  ok(`home shows "${title}"`)

  // Mark today's polls as already voted, so the test never counts in real results.
  const slug = (await page.locator('meta[property="og:image"]').getAttribute("content"))?.match(/thoughts\/([^/]+)\//)?.[1]
  if (slug) {
    await page.evaluate((s) => {
      for (let i = 0; i < 6; i++) localStorage.setItem(`jat:voted:${s}:${i}`, "1")
      // Same for the play counts.
      localStorage.setItem(`jat:started:${s}`, "1")
      localStorage.setItem(`jat:finished:${s}`, "1")
    }, slug)
  }

  await playThought(page)
  ok(`finished: "${await page.locator("h2").first().innerText()}"`)

  await page.reload()
  await page.getByText(/Learned today/).first().waitFor()
  ok("a reload remembers the result")

  if (SIGNUP) await signUpAndCleanUp(page)
} catch (error) {
  await page.screenshot({ path: "e2e-failure.png", fullPage: true })
  problems.push(String(error))
} finally {
  await browser.close()
}

if (problems.length) {
  console.error("✗ Problems:\n- " + problems.join("\n- "))
  process.exit(1)
}

/** Plays every step of the thought on screen, whatever games it has. */
async function playThought(page) {
  await page.getByRole("button", { name: /Start today's thought|Play again/ }).click()
  for (let step = 1; step < 20; step++) {
    // Steps slide in and out, so wait for this exact one to be on screen.
    const group = page.locator(`[role=group][data-step="${step}"]`)
    await group.waitFor()
    await page.waitForTimeout(400)
    const name = await group.getAttribute("aria-label")
    if (name === "Done") return

    if (name === "Quick facts") {
      for (const card of await group.locator("button").all()) await card.click()
    } else if (name === "Quick quiz" || name === "What do you think?") {
      await group.locator("button").first().click()
    } else if (name === "Swipe it") {
      await group.getByRole("button", { name: "True" }).click()
      while (await group.getByRole("button", { name: "Next statement" }).count()) {
        await group.getByRole("button", { name: "Next statement" }).click()
        await group.getByRole("button", { name: "True" }).click()
      }
    } else if (name === "Put in order") {
      await group.getByRole("button", { name: "Check order" }).click()
    } else if (name === "Guess the number") {
      await group.getByRole("button", { name: "Lock it in" }).click()
    } else if (name === "Match them") {
      await matchAll(group)
    }

    await page.getByRole("button", { name: /^(Continue|Finish)$/ }).click()
  }
  throw new Error("Never reached the finish screen")
}

/** Tries pairs until every left tile is matched. */
async function matchAll(group) {
  const left = group.locator(".grid-cols-2 > div").nth(0).locator("button:not([disabled])")
  const right = group.locator(".grid-cols-2 > div").nth(1).locator("button:not([disabled])")
  for (let tries = 0; tries < 30 && (await left.count()) > 0; tries++) {
    const remaining = await left.count()
    await left.first().click()
    await right.nth(tries % (await right.count())).click()
    // Let the match or the wrong-guess shake finish before the next try.
    await group.page().waitForTimeout(800)
    if ((await left.count()) < remaining) tries = -1
  }
  if ((await left.count()) > 0) throw new Error("Couldn't finish the matching game")
}

async function signUpAndCleanUp(page) {
  const api = async (path, init = {}) =>
    (await fetch(`https://api.mail.tm${path}`, { ...init, headers: { "Content-Type": "application/json", ...init.headers } })).json()
  const domain = (await api("/domains"))["hydra:member"][0].domain
  const address = `jat-test-${Date.now()}@${domain}`
  const password = `T-${Math.random().toString(36).slice(2)}`
  await api("/accounts", { method: "POST", body: JSON.stringify({ address, password }) })
  const { token } = await api("/token", { method: "POST", body: JSON.stringify({ address, password }) })

  await page.goto(`${BASE}/sign-in`)
  await page.fill("#email", address)
  await page.getByRole("button", { name: "Send code" }).click()
  let message
  for (let i = 0; i < 40 && !message; i++) {
    await page.waitForTimeout(3000)
    message = (await api("/messages", { headers: { Authorization: `Bearer ${token}` } }))["hydra:member"]?.[0]
  }
  if (!message) throw new Error("The sign-in email never arrived")
  ok(`sign-in email arrived: "${message.subject}"`)

  await page.locator("[data-input-otp]").click()
  await page.keyboard.type(message.subject.match(/\d{6}/)[0])
  await page.waitForURL(`${BASE}/`)
  await page.getByText(/day streak/).first().waitFor()
  ok("signed in, and the guest result was saved")

  await page.goto(`${BASE}/library`)
  await page.locator("main li").first().waitFor()
  ok("library lists the thought")

  await page.goto(`${BASE}/account`)
  await page.getByText(address).waitFor()
  await page.getByRole("button", { name: "Delete account" }).click()
  await page.getByRole("button", { name: "Yes, delete" }).click()
  await page.waitForURL(`${BASE}/`)
  ok("test account deleted")
}
