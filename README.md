# Kritagya Bhandari — Strategy Call Funnel

A premium, ultra-minimalist 3-page funnel for Kritagya Bhandari, digital marketing expert (Nepal).

## Stack

- Next.js 14 (App Router) + JavaScript
- Tailwind CSS
- Google Fonts: Inter
- No UI framework, no gradients, no emojis — pure design tokens only

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Routes

- `/` — landing page: hero → social proof → about → 3-step process → lead capture form → final CTA
- `/book` — Calendly inline embed (`calendly.com/bhandarikritagya2055/free-1-1-consultation`)
- `/thank-you` — confirmation + Vimeo video (`vimeo.com/1198966045`)

## Funnel flow

1. Visitor lands on `/`
2. Clicks any CTA → smooth-scrolls to the lead capture form
3. Fills name + email and submits → client-side validation → `router.push("/book")`
4. Books a slot inside the Calendly inline widget on `/book`
5. Calendly's confirmation redirect (configured in the Calendly dashboard) sends them to `/thank-you`
6. `/thank-you` plays the Vimeo welcome message

## Swapping the dummy form for Flodesk

`components/LeadCaptureForm.jsx` is marked `// REPLACE THIS FORM WITH FLODESK EMBED LATER`. To swap it out:

1. Paste your Flodesk inline embed snippet inside the `<div id="lead-form">` section of `app/page.jsx:170` in place of `<LeadCaptureForm />`.
2. In Flodesk, set the form's success redirect to `https://YOUR_DOMAIN/book`.

## Calendly redirect to /thank-you

In the Calendly dashboard: **Event Type → Confirmation Page → Redirect to external site** → set to `https://YOUR_DOMAIN/thank-you`. The embed code itself in `components/CalendlyEmbed.jsx` is the one you provided and is not modified.

## Design tokens (do not deviate)

| Token              | Hex       |
| ------------------ | --------- |
| bg                 | `#0A0A0A` |
| surface-1          | `#111111` |
| surface-2          | `#161616` |
| text-primary       | `#FFFFFF` |
| text-muted         | `#A0A0A0` |
| accent             | `#A8D8F0` |
| accent-soft        | `#E8F4FD` |
| border             | `#222222` |

Rules: no emojis, no gradients, no colors outside this table, hover states use accent only.

## Deploy

Push to GitHub, import the repo on Vercel — no environment variables required.
