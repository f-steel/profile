# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack on http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Serve production build
```

There are no tests in this project.

## Architecture

This is a single-page Next.js 15 (App Router) personal portfolio site with a strict separation between content and presentation:

- **`src/data/profile.ts`** — the single source of truth for all content. The `ProfileData` interface and `profileData` object define every piece of text, link, and list on the page. To change any displayed content (name, skills, achievements, links, etc.), edit only this file.

- **`src/app/page.tsx`** — a single `"use client"` component that renders the entire page across three sections (Hero, About, Skills). It reads exclusively from `profileData`. It owns all interactivity: mouse-tracking on the avatar (via `requestAnimationFrame`), scroll-triggered fade-in animations (via `IntersectionObserver`), and window resize handling.

- **`src/app/layout.tsx`** — sets SEO metadata (OpenGraph, keywords) and loads the Inter font. Metadata is hardcoded here, not derived from `profile.ts`.

- **`src/app/globals.css`** — global Tailwind import plus custom scrollbar styling and keyframe animations (`fadeInUp`, `float`, `pulse-glow`). The `* { transition: all 0.2s }` rule applies universally.

The project uses Tailwind CSS v4 (configured via `@tailwindcss/postcss`, not `tailwind.config.js`).

## Content Updates

All profile content lives in `src/data/profile.ts`. The `ProfileData` interface is the authoritative schema — adding a new content field requires updating the interface, the `profileData` object, and the rendering logic in `page.tsx`.
