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

- `/` — landing page (hero, social proof, about, process, final CTA)
- `/book` — Calendly inline embed
- `/thank-you` — confirmation + video

## Funnel flow

1. Visitor lands on `/`
2. Clicks a CTA → Flodesk popup form opens
3. After Flodesk submission, Flodesk redirects to `/book`
4. Visitor books a slot in the Calendly inline widget
5. After Calendly confirms, Calendly redirects to `/thank-you`
6. Visitor sees confirmation message and the welcome video

## Where to paste integration codes

### 1. Flodesk popup script

In `app/layout.jsx`, paste your Flodesk Universal Code inside `<head>` (above the `Inter` `<link>` is fine).

Then edit `components/FlodeskCTA.jsx` and replace `REPLACE_WITH_FLODESK_FORM_ID` with your popup form ID. The CTA falls back to navigating to `/book` if the Flodesk script hasn't loaded yet, so the funnel keeps working during setup.

In the Flodesk dashboard, set the form's success redirect URL to `https://YOUR_DOMAIN/book`.

### 2. Calendly inline embed

In `app/book/page.jsx`, find the `=== PASTE CALENDLY INLINE EMBED HERE ===` block and paste Calendly's inline embed snippet there. Remove the placeholder div.

In the Calendly dashboard: **Event Type → Confirmation Page → Redirect to external site** → set to `https://YOUR_DOMAIN/thank-you`.

### 3. Thank-you video

In `app/thank-you/page.jsx`, find the `=== PASTE VIDEO EMBED IFRAME HERE ===` block and paste your iframe (YouTube, Vimeo, Wistia, etc). Remove the placeholder div.

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

Push to GitHub, import the repo on Vercel — no environment variables needed unless you add server-side integrations later.
