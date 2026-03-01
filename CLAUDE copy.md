# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

No test runner is configured yet.

## Architecture

This is a **Next.js 16** app using the **App Router** (`src/app/`). React Server Components are enabled by default — prefer RSC over client components unless interactivity requires it.

**Key directories:**
- `src/app/` — Routes and layouts (file-system routing)
- `src/components/ui/` — shadcn components (copied into project, not imported from a package)
- `src/lib/utils.ts` — Exports `cn()` for safe Tailwind class merging (clsx + tailwind-merge)
- `src/hooks/` — Custom React hooks (not yet created)

**Path alias:** `@/*` maps to `./src/*`

## Tech Stack

- **Tailwind CSS v4** with CSS variables for theming (oklch color space, dark mode via `.dark` class)
- **shadcn** (new-york style, gray base) — add components via `npx shadcn@latest add <component>`
- **Radix UI** primitives underlie shadcn components
- **CVA** (Class Variance Authority) for typed component variants
- **Framer Motion** for animations
- **Lucide React** for icons
- **Babel React Compiler** — enabled in `next.config.ts`; the compiler handles memoization automatically, so avoid manual `useMemo`/`useCallback` unless profiling shows a need

## Conventions

- Use the `cn()` utility from `@/lib/utils` for all className composition
- Fonts are loaded via `next/font/google` in the root layout and exposed as CSS vars (`--font-geist-sans`, `--font-geist-mono`)
- No state management library is installed — use React's built-in state or add one explicitly if needed
- No API routes or database layer exists yet
