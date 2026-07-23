# CLAUDE.md — Theoremlabs Website Rebuild
# Institutional Memory | Read this at the start of EVERY session

---

## 🏢 Project Overview

**Company:** Theoremlabs Partners LLC  
**Website:** https://theoremlabs.io (custom domain, pending DNS cutover from WordPress)  
**New Stack:** Next.js 16 + Tailwind CSS v4 + Framer Motion  
**Goal:** Full website rebuild — all core pages complete; special showcase pages added  
**Deployment:** Vercel (project: `theoremlabs-v2`, org: `shantanu-5767s-projects`)  
**Vercel prod URL:** https://theoremlabs-v2-j10kk9jcg-shantanu-5767s-projects.vercel.app  
**Owner:** Shantanu Wadodkar (Co-Founder, research@theoremlabs.io)

---

## ⚙️ Tech Stack (Non-Negotiable)

- **Framework:** Next.js 16.1.6, App Router, TypeScript strict mode
- **Styling:** Tailwind CSS v4 ONLY — no `tailwind.config.js` (config lives in CSS via `@theme` in `globals.css`); never use inline styles or CSS modules
- **Animation:** Framer Motion for all motion effects — always add `'use client'` to any component using Framer Motion
- **UI Components:** shadcn/ui (new-york style, gray base) — add components via `npx shadcn@latest add <component>`; use `cn()` from `@/lib/utils` for all className composition
- **Icons:** lucide-react
- **Images:** Always use Next.js `<Image>` component — NEVER `<img>` tag
- **Fonts:** Inter (intended design), loaded via next/font/google — note: current `layout.tsx` uses Geist; update it when building the layout
- **React Compiler:** Enabled (`reactCompiler: true` in `next.config.ts`) — avoid manual `useMemo`/`useCallback`; the compiler handles memoization automatically
- **Deployment:** Vercel

---

## 🛠️ Dev Commands

```bash
npm run dev        # Start local dev server → http://localhost:3000
npm run build      # Production build (run before every commit)
npm run lint       # ESLint check (must pass before commit)
npm run type-check # TypeScript check
```

**Stop Hook (run after every loop):**
```bash
npm run lint && npm run build
```
Pass = commit. Fail = fix, note in Mistakes section, retry.

---

## 📁 Project Structure

```
theoremlabs-v2/
├── CLAUDE.md
├── scripts/
│   └── generate-pdf.mjs                (generates PDF from slideshow page)
├── theoremlabs-slideshow.pdf           (company overview presentation)
├── 90SecsVideoBriefForTheoremlabs.pdf  (short video brief doc)
├── Vantage Bank × Theoremlabs — UBPR Intelligence (1).pdf
├── src/
│   ├── proxy.ts                        (site-wide password gate — Next.js 16 middleware)
│   ├── app/
│   │   ├── layout.tsx                  (Inter font, Navbar, Footer, pt-16 main)
│   │   ├── page.tsx                    (Home — assembles all home sections)
│   │   ├── globals.css                 (Tailwind v4 @theme, --font-inter)
│   │   ├── login/page.tsx              ('use client' — password gate UI)
│   │   ├── api/login/route.ts          (POST handler — validates password, sets tl_auth cookie)
│   │   ├── about/
│   │   │   ├── our-team/page.tsx
│   │   │   └── partnerships/page.tsx
│   │   ├── products/
│   │   │   ├── promptline/page.tsx     (PromptLine — AI voice/text platform)
│   │   │   ├── tacit/page.tsx          (Tacit — AI knowledge capture platform)
│   │   │   ├── kirdar-ai/page.tsx
│   │   │   ├── datagaze-ai/page.tsx
│   │   │   └── accelerators/page.tsx
│   │   ├── advisory-consulting/page.tsx
│   │   ├── art-of-possible-labs/page.tsx
│   │   ├── innovation/
│   │   │   ├── coding-loops/page.tsx   ('use client' — metadata in layout.tsx)
│   │   │   ├── coding-loops/layout.tsx (Server Component holding metadata)
│   │   │   ├── ai-technologies/page.tsx ('use client' — metadata in layout.tsx)
│   │   │   └── ai-technologies/layout.tsx
│   │   ├── engage/
│   │   │   ├── workshops/page.tsx
│   │   │   ├── become-a-partner/page.tsx
│   │   │   └── contact/page.tsx        ('use client' — useState form)
│   │   ├── slideshow/
│   │   │   ├── page.tsx                ('use client' — company overview deck, auto-advance)
│   │   │   └── layout.tsx              (metadata: "Company Overview")
│   │   └── finzpire/
│   │       ├── page.tsx                ('use client' — 90s animated motion graphic loop)
│   │       └── layout.tsx              (metadata: "Theoremlabs · FinZpire 2026")
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              ('use client', 2xl: breakpoint for desktop)
│   │   │   └── Footer.tsx              (Server Component)
│   │   ├── home/
│   │   │   ├── Hero.tsx                ('use client', Framer Motion)
│   │   │   ├── WhyUs.tsx
│   │   │   ├── ThreePillars.tsx        ('use client', Framer Motion whileHover)
│   │   │   ├── ProductsCarousel.tsx    (unoptimized GIFs)
│   │   │   ├── ValueProps.tsx          ('use client', Framer Motion)
│   │   │   ├── KirdarFeatureBlock.tsx
│   │   │   └── Testimonial.tsx
│   │   └── shared/
│   │       ├── SectionHeader.tsx
│   │       ├── CTAButton.tsx
│   │       └── PageHero.tsx
│   └── lib/
│       └── utils.ts                    (exports cn() — clsx + tailwind-merge)
└── public/
    └── images/
        ├── logo.png                    (main logo)
        ├── logo-white.png              (white logo variant)
        ├── hero-bg.jpg                 (hero background)
        ├── hero-icon.png               (hero icon)
        ├── icon-battle-hardened.png
        ├── icon-walk-talk.png
        ├── icon-lean-agile.png
        ├── icon-risk-literate.png
        ├── icon-prime-location.png
        ├── product-reconcile-ai.gif    (unoptimized)
        ├── product-knowledge-pulse.gif (unoptimized)
        ├── product-insight-bridge.gif  (unoptimized)
        ├── product-synthetic-edge.gif  (unoptimized)
        ├── product-prompt-line.gif     (unoptimized)
        ├── product-insight-bridge-2.jpg
        ├── team-wendie.png
        ├── team-shantanu.png
        ├── team-prashant.png
        ├── team-will.png
        ├── team-david.png
        ├── team-jim.png
        ├── separator.jpg
        ├── quote.gif                   (unoptimized)
        ├── about.gif                   (unoptimized)
        ├── Accelerators.png            (section image)
        ├── Advisory and Consulting.png
        ├── Art of Possible Labs.png
        ├── The New Software Era.png
        └── Why Us and Team.png
```

---

## 🎨 Design System

### Colors
```
Primary Dark:    #0F1B2D  (deep navy — main background)
Primary Mid:     #1A2B45  (card backgrounds)
Accent Orange:   #F97316  (CTAs, highlights — matches current site energy)
Accent Blue:     #3B82F6  (links, secondary accents)
Text Primary:    #F8FAFC  (white-ish on dark)
Text Secondary:  #94A3B8  (muted text)
Border:          #1E3A5F  (subtle borders)
```

### Typography
```
Font: Inter (via next/font/google)
H1:  text-5xl font-bold tracking-tight
H2:  text-3xl font-semibold
H3:  text-xl font-semibold
Body: text-base leading-relaxed
Small: text-sm text-slate-400
```

### Spacing
- Section padding: `py-20 px-4 md:px-8 lg:px-16`
- Container max width: `max-w-7xl mx-auto`
- Card padding: `p-6 md:p-8`
- Component gap: `gap-6 md:gap-8`

---

## 🖼️ Images — Reuse From Current Site

All images from the current WordPress site must be downloaded and placed in `/public/images/`. Use these exact URLs to fetch them:

### Logos
- Main logo: `https://theoremlabs.io/wp-content/uploads/2025/01/Theoremlabs-logo-1.png`
- Site identity logo: `https://theoremlabs.io/wp-content/uploads/2025/01/Theoremlabs-site-identity-logo.png`

### Hero
- Hero background: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-19-at-2.57.23-PM.jpeg`
- Hero icon: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled_design__13_-removebg-preview.png`

### Why Us / Value Props Icons
- Battle-Hardened: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-2025-01-23T203220.764.png`
- Walk the Talk: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-2025-01-23T202301.498.png`
- Lean & Agile: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-2025-01-23T202427.147.png`
- Risk-Literate AI: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-2025-01-31T204154.793.png`
- Prime Location: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-2025-01-31T204430.793.png`

### Accelerator Product Icons (GIFs)
- ReconcileAI: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/offer-pic-5.gif`
- KnowledgePulse: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/offer-pic-2.gif`
- InsightBridge: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/offer-pic-1.gif`
- SyntheticEdge: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/offer-pic-3.gif`
- PromptLine: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/offer-pic-4.gif`
- InsightBridge alt: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/ai2-offer-pic2.jpg`

### Team Photos
- Wendie Hernandez: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-5.png`
- Shantanu Wadodkar: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-6.png`
- Prashant Sarode: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-4.png`
- Will Storey: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-7.png`
- David Ward: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/Untitled-design-8.png`
- Jim Stevenson: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/02/Untitled-design-2025-02-08T164553.654.png`

### Decorators
- Separator line: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/ai2-sep1.jpg`
- Quote icon: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/quote-pic.gif`
- About pic: `https://i0.wp.com/theoremlabs.io/wp-content/uploads/2025/01/about-pic.gif`

---

## 🗺️ Site Structure & Navigation

### Navbar Links
```
Home
About ▾
  └── Our Team
  └── Partnerships
Products ▾
  └── PromptLine           ← /products/promptline (NEW)
  └── Tacit                ← /products/tacit (NEW)
  └── Kirdar.ai
  └── DataGaze.ai
  └── Accelerators
Advisory & Consulting
Art of Possible Labs
Innovation ▾
  └── Coding Loops
  └── AI Technologies
Engage ▾
  └── Setup Design Workshops
  └── Become a Partner
  └── Let's be in Touch

CTA Button → "Let's Talk"  (links to /engage/contact)
```

---

## 📄 Page Content Reference

### Home Page Sections (in order)
1. **Hero** — "The new software era" + subheading + 2 CTAs + hero image
2. **Why Choose Us** — Intro blurb about Theoremlabs mission
3. **Three Pillars** — Advisory & Consulting | Art of Possible Labs | Accelerators
4. **Value Props (Why Us?)** — 5 cards: Battle-Hardened Experts, Walk the Talk, Lean & Agile Teams, Risk-Literate AI, Prime Location
5. **Products Carousel** — ReconcileAI, KnowledgePulse, InsightBridge, SyntheticEdge, PromptLine
6. **Kirdar.ai Feature Block** — "Revolution is Here" CTA section
7. **Testimonial** — Colin Angle (CEO of iRobot) quote
8. **Footer**

### Key Copy (verbatim, do not change)
```
Tagline: "The new software era"

Mission: "Theoremlabs is a hybrid of management consulting, build & 
experimentation labs for Fintech products that apply advances in AI, 
Data, Cloud and mature Web 3 technologies."

Why Us intro: "Theoremlabs blends management consulting with build & 
experimentation labs, offering tailored solutions for Fintech products. 
We leverage AI, Data, Cloud, and Web 3 technologies to deliver innovative, 
scalable, and future-ready financial solutions, bridging the gap between 
vision and execution."

Quote: "It's going to be interesting to see how society deals with 
artificial intelligence, but it will definitely be cool." — Colin Angle, CEO of iRobot
```

### Team Members (exact names and titles)
- **Wendie Hernandez** — Co-Founder & Managing Partner
- **Shantanu Wadodkar** — Co-Founder & Managing Partner
- **Prashant Sarode** — Cofounder and AI Mentor in Residence
- **Will Storey** — Co-Founder & Lab Mentor
- **David Ward** — Chief Revenue & Growth Officer
- **Jim Stevenson** — Contributor

### Accelerator Products (exact names)
- **ReconcileAI** — AI-powered reconciliation accelerator
- **KnowledgePulse** — AI-driven internal knowledge resource accelerator
- **InsightBridge** — Legacy system knowledge extraction accelerator
- **SyntheticEdge** — Synthetic data generation accelerator
- **PromptLine** — Conversational AI phone/text accelerator

### Main Products
- **PromptLine** — AI-powered conversational platform for financial services; intelligent voice and text interfaces for customer queries, case routing, and core banking integration (`/products/promptline`)
- **Tacit** — AI knowledge capture platform; transforms expert tacit knowledge into structured, shareable learning for Fintech orgs (`/products/tacit`)
- **Kirdar.ai** — Employee training simulator (role-play, onboarding, skill gaps) (`/products/kirdar-ai`)
- **DataGaze.ai** — Data observability product (`/products/datagaze-ai`)
- **Prahari** — Compliance sentinel product (shown in FinZpire showcase — "Every agent. Every transaction. Every regulation. Watched." — no dedicated page yet)

---

## 🆕 New Pages to Build (Innovation Section)

### /innovation/coding-loops
**Purpose:** Showcase the Software Coding Loops methodology (from the Agentic Shift 2026 framework)
**Content to include:**
- What are Software Coding Loops (moving from Copilot to Autopilot)
- The Context Rot problem and why it matters
- The 3 Loop patterns: Ralph Wiggum (Naive Persistence), Gas Town (Factory), Cherny/Team (Compound Engineering)
- Comparison matrix of the 3 loops
- How Theoremlabs uses this methodology
- CTA: "Work with us to implement agentic coding loops in your org"

**Visuals:** Use blueprint-style dark design, animated loop diagrams using Framer Motion

### /innovation/ai-technologies
**Purpose:** Showcase latest and greatest AI technologies Theoremlabs tracks and uses
**Content to include:**
- AI Model Landscape (Claude, GPT, Gemini, open-source)
- Agentic AI frameworks
- MCP (Model Context Protocol) — what it is and why it matters
- Retrieval Augmented Generation (RAG)
- Synthetic Data generation
- AI in Fintech — use cases Theoremlabs focuses on
- Updated quarterly — note "Last updated: Q1 2026"

**Visuals:** Card-based layout, tech stack logos, animated counters

---

## 🔒 Password Gate (Site-Wide Auth)

The entire site is protected by a cookie-based password gate implemented in `src/proxy.ts` (Next.js 16 middleware).

- **Default password:** `Theoremlabs` (override via `SITE_PASSWORD` env var on Vercel)
- **Cookie:** `tl_auth` — httpOnly, 7-day expiry, `sameSite: lax`
- **Login page:** `/login` (redirects back to original URL after auth via `?from=` param)
- **API route:** `POST /api/login` — validates password, sets cookie, returns redirect destination
- **Bypassed paths:** `/_next/static`, `/_next/image`, `/favicon.ico`, `/images/*`
- To change the password in production: set `SITE_PASSWORD` in Vercel environment variables

---

## 🎬 Special Pages (Not in Main Nav)

### `/slideshow`
Company overview deck — auto-advancing slideshow built with Framer Motion. Used for presentations and investor/partner meetings. Generated as PDF via `scripts/generate-pdf.mjs` → `theoremlabs-slideshow.pdf`.

### `/finzpire`
90-second seamless animated motion graphic built for the **FinZpire 2026** conference in Charlotte, NC. Loops through scenes: intro act → PromptLine → Tacit → Prahari → 5 stat cards → CTA. Uses amber accent (`#D4840A`) on black (`#111111`) — different design language from the main site (stealth mono theme). No navbar or footer.

---

## 📍 Company Info (use in Footer and Contact pages)

```
Theoremlabs Partners LLC
101 S. Tryon St
STE 2700
Charlotte, NC 28280

Website: theoremlabs.io
```

---

## 📏 Coding Rules (MUST follow every session)

1. **Always add `'use client'`** at top of any component using useState, useEffect, or Framer Motion
2. **Never use `<img>`** — always Next.js `<Image>` with explicit width and height
3. **Mobile-first** — every component must look good at 375px before desktop
4. **TypeScript strict** — all props must have interfaces defined, no `any` types
5. **Tailwind only** — no inline styles, no separate CSS files (except globals.css for base styles)
6. **Accessibility** — all images must have meaningful `alt` text, buttons must have `aria-label` where needed
7. **One component per file** — keep components focused and single-purpose
8. **Named exports** for components, default exports for pages
9. **Commit after each passing loop** — never leave uncommitted working code

---

## 🔁 Loop Progress Tracker

- [x] Loop 0 — Project scaffold + CLAUDE.md + SPEC.md setup
- [x] Loop 1 — Navbar (sticky, mobile hamburger, dropdowns)
- [x] Loop 2 — Footer (links, address, socials)
- [x] Loop 3 — Home: Hero section
- [x] Loop 4 — Home: Three Pillars section
- [x] Loop 5 — Home: Value Props (Why Us) section
- [x] Loop 6 — Home: Products Carousel
- [x] Loop 7 — Home: Kirdar.ai feature block + Testimonial
- [x] Loop 8 — Our Team page
- [x] Loop 9 — Accelerators page
- [x] Loop 10 — Kirdar.ai product page
- [x] Loop 11 — DataGaze.ai product page
- [x] Loop 12 — Advisory & Consulting page
- [x] Loop 13 — Art of Possible Labs page
- [x] Loop 14 — Innovation: Coding Loops page (NEW)
- [x] Loop 15 — Innovation: AI Technologies page (NEW)
- [x] Loop 16 — Engage pages (Workshops, Partner, Contact)
- [x] Loop 17 — Partnerships page
- [x] Loop 18 — Mobile polish pass (all pages)
- [x] Loop 19 — Performance audit (images, fonts, lazy loading)
- [x] Loop 20 — Deploy to Vercel (deployed; DNS cutover to theoremlabs.io pending)

---

## ❌ Mistakes — Never Repeat These

> Add an entry here every time a bug or issue occurs during a loop.
> Format: `- [Loop #] What went wrong → What the fix was`

- [Loop 3–17] **Framer Motion `ease` type error** — `ease: 'easeOut'` inside a `Variants` object types as `string`, not assignable to `Easing`. Fix: use `ease: 'easeInOut' as const` (string literal) OR `ease: [0.25, 0.46, 0.45, 0.94] as const` (cubic-bezier tuple with `as const`)
- [Loop 3–17] **`export const metadata` in `'use client'` component** — Next.js forbids metadata exports in client components. Fix: remove metadata from the page file and add a sibling `layout.tsx` (Server Component) that exports the metadata
- [Loop 3–17] **Unescaped apostrophes in single-quoted TS strings** — `"employee's"` in a single-quoted string causes a parse error. Fix: switch the string delimiter to double quotes, or escape as `\'`
- [Loop 3–17] **GIF images lose animation in Next.js `<Image>`** — Next.js optimizes GIFs, stripping animation frames. Fix: add `unoptimized` prop to all `<Image>` components displaying `.gif` files
- [Loop 3–17] **`ease: number[]` not assignable to Framer Motion Easing** — A plain array literal infers as `number[]`, not the required `[number, number, number, number]` tuple. Fix: always append `as const` to cubic-bezier arrays in Framer Motion transitions

---

## 📌 Open Decisions (fill these in before starting loops)

- [ ] Final color palette confirmed? (currently: dark navy + orange)
- [ ] SVG logo file available? (currently using PNG from WordPress)
- [ ] Social media links? (LinkedIn, Twitter/X, etc.)
- [ ] Analytics tool? (Google Analytics / Plausible / None)
- [ ] Contact form backend? (Formspree / EmailJS / custom API)
- [ ] Any Calendly or booking integration for "Let's Talk" CTA?
- [ ] Blog/CMS needed in Phase 1 or Phase 2?