# Dimension: portfolio & services site

Personal portfolio and services website of **Diogo Vieira Monteiro**, front-end focused software engineer.

**Live:** [dimension-rho.vercel.app](https://dimension-rho.vercel.app)

<!-- Add a screenshot: save it as public/screenshot.png and uncomment the line below -->
<!-- ![Dimension screenshot](public/screenshot.png) -->

## Stack

- **Next.js 15** (App Router, static generation) and **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** for animations, **Phosphor** icons
- Deployed on **Vercel**

## Features

- Bilingual content (Portuguese / English) from a single typed content file
- Responsive layout, from mobile to wide screens
- SEO: metadata, `sitemap.xml`, `robots.txt` and Open Graph images generated with `next/og`
- Content, theme and metadata kept in separate places, so updates don't touch components

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            metadata / SEO
│  ├─ page.tsx              page composition
│  ├─ globals.css           brand colours and theme
│  ├─ opengraph-image.tsx   generated social preview image
│  ├─ sitemap.ts, robots.ts
├─ components/site.tsx      UI sections
└─ lib/content.ts           typed PT/EN content
```

## Running locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Optional environment variables (`.env.local` / Vercel)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Site URL (e.g. `https://dimension.pt`) |
| `NEXT_PUBLIC_EMAIL` | Contact email |
| `NEXT_PUBLIC_GITHUB` | GitHub link |
| `NEXT_PUBLIC_LINKEDIN` | LinkedIn link (empty = hidden) |

## Deploy

```bash
npx vercel deploy --prod
```
