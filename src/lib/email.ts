import "server-only"

import { siteUrl } from "@/lib/site"

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
      from: process.env.EMAIL_FROM ?? "Just a thought <onboarding@resend.dev>",
      to: email,
      subject: `${code} is your sign-in code`,
      text: `Your sign-in code for Just a thought is ${code}. It expires in 5 minutes.\n\nDidn't ask for it? You can ignore this email.\n\n${siteUrl}`,
      html: signInHtml(code),
    }),
  })
  if (!res.ok) throw new Error(`Couldn't send the sign-in email (${res.status}): ${await res.text()}`)
}

/** A plain-text note to the site's own inbox (EMAIL_FROM), e.g. new feedback. Skipped in local dev. */
export async function sendToOwner(subject: string, text: string, replyTo?: string) {
  const key = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM
  if (!key || !from) {
    console.log(`\n  ${subject}\n  ${text.replaceAll("\n", "\n  ")}\n`)
    return
  }
  const to = from.match(/<([^>]+)>/)?.[1] ?? from
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, subject, text, ...(replyTo && { reply_to: replyTo }) }),
  })
  if (!res.ok) throw new Error(`Couldn't send the note (${res.status}): ${await res.text()}`)
}

/** The midday nudge for someone who hasn't played today. Has a one-click unsubscribe link. */
export async function sendReminder(email: string, title: string, emoji: string, unsubscribeUrl: string) {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.log(`\n  Reminder for ${email}: ${title} (unsubscribe: ${unsubscribeUrl})\n`)
    return
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM ?? "Just a thought <onboarding@resend.dev>",
      to: email,
      subject: `${emoji} Today's thought: ${title}`,
      text: `Today's thought is waiting: ${title}. It takes a few minutes.\n\n${siteUrl}\n\nDon't want these? Unsubscribe: ${unsubscribeUrl}`,
      html: reminderHtml(title, emoji, unsubscribeUrl),
      headers: { "List-Unsubscribe": `<${unsubscribeUrl}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" },
    }),
  })
  if (!res.ok) throw new Error(`Couldn't send the reminder (${res.status}): ${await res.text()}`)
}

// Brand colors from globals.css, as hex since email clients don't support oklch.
const ink = "#21232e"
const cream = "#f6f7f9"
const muted = "#eceef3"
const mutedText = "#5c6070"
const border = "#e1e4ea"
const font = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"

/** Tables and inline styles, because that's what email clients render reliably. */
function signInHtml(code: string) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Your sign-in code</title>
</head>
<body style="margin:0;padding:0;background:${cream};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Your code is ${code}. It expires in 5 minutes.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${cream};">
<tr><td align="center" style="padding:40px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:440px;">
  <tr><td style="padding:0 4px 20px;">
    <a href="${siteUrl}" style="text-decoration:none;color:${ink};font-family:${font};font-size:18px;font-weight:700;">
      <img src="${siteUrl}/apple-icon.png" width="32" height="32" alt="" style="vertical-align:middle;border-radius:8px;border:0;margin-right:8px;">Just a thought
    </a>
  </td></tr>
  <tr><td style="background:#ffffff;border:1px solid ${border};border-radius:20px;padding:32px 28px;font-family:${font};color:${ink};">
    <h1 style="margin:0 0 8px;font-size:22px;line-height:1.3;font-weight:700;">Your sign-in code</h1>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.5;color:${mutedText};">Enter this code to sign in. It expires in 5 minutes.</p>
    <div style="background:${muted};border-radius:14px;padding:18px 12px 18px 22px;text-align:center;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:34px;font-weight:700;letter-spacing:10px;color:${ink};">${code}</div>
    <p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:${mutedText};">Didn't ask for this? Someone may have typed your email by mistake. You can safely ignore it.</p>
  </td></tr>
  <tr><td style="padding:20px 4px 0;font-family:${font};font-size:12px;line-height:1.5;color:${mutedText};text-align:center;">
    One new idea every day, learned in a few minutes.<br>
    <a href="${siteUrl}" style="color:${mutedText};">${siteUrl.replace(/^https?:\/\//, "")}</a>
  </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`
}

function reminderHtml(title: string, emoji: string, unsubscribeUrl: string) {
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;")
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Today's thought</title>
</head>
<body style="margin:0;padding:0;background:${cream};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Today's thought takes a few minutes.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${cream};">
<tr><td align="center" style="padding:40px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:440px;">
  <tr><td style="padding:0 4px 20px;">
    <a href="${siteUrl}" style="text-decoration:none;color:${ink};font-family:${font};font-size:18px;font-weight:700;">
      <img src="${siteUrl}/apple-icon.png" width="32" height="32" alt="" style="vertical-align:middle;border-radius:8px;border:0;margin-right:8px;">Just a thought
    </a>
  </td></tr>
  <tr><td style="background:#ffffff;border:1px solid ${border};border-radius:20px;padding:32px 28px;font-family:${font};color:${ink};text-align:center;">
    <div style="font-size:48px;line-height:1;">${emoji}</div>
    <p style="margin:20px 0 6px;font-size:13px;color:${mutedText};">Today's thought</p>
    <h1 style="margin:0 0 24px;font-size:24px;line-height:1.3;font-weight:700;">${safeTitle}</h1>
    <a href="${siteUrl}" style="display:inline-block;background:#fe8500;color:${ink};text-decoration:none;font-size:15px;font-weight:600;padding:14px 28px;border-radius:999px;">Play now</a>
    <p style="margin:20px 0 0;font-size:13px;color:${mutedText};">Takes a few minutes.</p>
  </td></tr>
  <tr><td style="padding:20px 4px 0;font-family:${font};font-size:12px;line-height:1.5;color:${mutedText};text-align:center;">
    You get this because you turned on daily reminders.<br>
    <a href="${unsubscribeUrl}" style="color:${mutedText};">Unsubscribe</a>
  </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`
}
