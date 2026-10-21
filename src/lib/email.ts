import "server-only"

/** Sends a sign-in code with Resend. Without RESEND_API_KEY (local dev) the code is printed in the terminal. */
export async function sendSignInCode(email: string, code: string) {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    if (process.env.NODE_ENV === "production") throw new Error("RESEND_API_KEY is not set")
    console.log(`\n  Sign-in code for ${email}: ${code}\n`)
    return
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM ?? "A Thought a Day <onboarding@resend.dev>",
      to: email,
      subject: `${code} is your sign-in code`,
      text: `Your sign-in code for A Thought a Day is ${code}. It expires in 5 minutes.\n\nDidn't ask for it? You can ignore this email.`,
      html: `<div style="font-family:system-ui,sans-serif;max-width:420px;margin:auto;padding:24px;color:#1c1f2a">
  <p style="font-size:16px">Your sign-in code for <b>A Thought a Day</b>:</p>
  <p style="font-size:36px;font-weight:700;letter-spacing:8px;margin:24px 0">${code}</p>
  <p style="font-size:14px;color:#6b6f7b">It expires in 5 minutes. Didn't ask for it? You can ignore this email.</p>
</div>`,
    }),
  })
  if (!res.ok) throw new Error(`Couldn't send the sign-in email (${res.status}): ${await res.text()}`)
}
