# Surhires — Marketing Website

A production-quality marketing site for **Surhires**, a hiring/recruitment
platform for employers and job seekers. Built as the Meru Technosoft
frontend internship assignment (3 pages: Home, Jobs, Employers).

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (all pages prerender statically)
npm run start    # serve the production build
npm run lint     # ESLint
```

## Pages

| Route          | Contents                                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| `/`            | Hero with dual CTA (hire / find work), stats, employer logo strip, 3-step how-it-works, featured roles, testimonials, FAQ accordion, footer CTA |
| `/jobs`        | Filter bar (role/company text search, location, job type), live-filtered job cards with salary & posted date, empty state with clear-filters action |
| `/employers`   | Hero, results stats strip, 3-tier pricing table (Starter / Growth / Scale), "Post a job" form with browser validation and success state |

## Design decisions

### Colour

Defined once as CSS variables in `src/app/globals.css` via Tailwind 4's
`@theme` — every utility (`bg-navy-900`, `text-brand-700`, …) is generated
from these tokens:

| Token role            | Value       | Reason                                                        |
| --------------------- | ----------- | ------------------------------------------------------------- |
| Deep navy (`navy-900`) | `#0b2545`  | Trust and professionalism — the brief's suggested direction    |
| Teal accent (`brand-700`) | `#0f766e` | One confident accent for CTAs, links and highlights — energetic but readable (≈4.9:1 on white) |
| Warm white (`warm-50`)  | `#fafcfb`  | Softer than pure white; reduces glare and matches the brief's "warm white" |

Body text uses slate-600/700 on white — all ≥4.5:1 contrast.

### Typography

Geist Sans via `next/font` (self-hosted, no layout shift). A single
type-scale: 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60px mapped to
Tailwind's `text-xs … text-6xl` steps. Headings use `tracking-tight`.

### Motion

Hover lifts on cards, colour transitions on links/buttons, and a rotating
`+` on the FAQ accordion. All motion is wrapped by a global
`prefers-reduced-motion: reduce` rule that neutralises animations and
transitions for users who ask for it.

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, site metadata, Navbar, Footer, skip link
│   ├── page.tsx            # Home (server component)
│   ├── globals.css         # Brand tokens (@theme), base styles, reduced-motion
│   ├── jobs/page.tsx       # Jobs (server component + metadata)
│   └── employers/page.tsx  # Employers (server component + metadata)
└── components/
    ├── Navbar.tsx          # Sticky, mobile menu (aria-expanded/controls)
    ├── Footer.tsx          # Link columns, blurb, social icons
    ├── FaqAccordion.tsx    # Keyboard-usable accordion (aria-expanded, regions)
    ├── JobSearch.tsx       # Client: filter state + job cards + empty state
    └── PostJobForm.tsx     # Client: validated form + success state
```

Server/client split: pages are server components so each can export
`metadata`; only the interactive islands (filters, form, accordion, mobile
menu) are client components.

## Assumptions

- **Brand colours:** the brief suggested deep navy + teal + warm white;
  adopted as-is (see tokens above).
- **No backend:** forms validate in-browser and show a success state;
  "Apply now" opens a `mailto:` link. No data is sent anywhere.
- **Demo content:** companies, salaries (INR), testimonials and stats are
  realistic but fictional. Plans note that no payment is collected.
- **Logos strip** uses styled text wordmarks of fictional companies —
  the brief forbids copying real brand assets.
- **Fonts:** Geist (bundled with create-next-app) instead of a paid
  font; self-hosted via `next/font` for performance.
- **metadataBase** points at `https://surhires.vercel.app` — update this
  in `src/app/layout.tsx` once the real deploy URL exists.

## What I'd improve with more time

- Real photography/illustrations (`next/image` + optimised Unsplash
  assets) instead of the current CSS-built mockup visuals.
- Job detail pages (`/jobs/[slug]`) with structured data
  (`JobPosting` JSON-LD) for SEO.
- A dark-mode toggle (bonus item in the brief).
- Server-side form submission with real validation feedback and spam
  protection.
- Framer Motion section transitions; end-to-end tests for the filter and
  form flows.
- A Lighthouse CI run to guard the performance budget.

## Deploy

Deploy-ready for Vercel (`vercel`) or Netlify (`netlify build`) — all
three routes prerender statically.
