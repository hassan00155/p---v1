# Session continuity — read me first

Every new agent session should read this file to catch up instantly. The
project's agent rules file (e.g. `AGENTS.md` / `CLAUDE.md`) points here.
Keep it short: a snapshot, a log, and pointers — not a diary.

## Important Note

- keep responses and code writes minimal, edit files surgically instead of
  rewriting whole files, and skip lint/build/verification runs unless
  explicitly asked. Agents default to verbose output and full re-checks;
  stating this once here saves a lot of tokens every session.

- Pending work queue: `PLANS.md` — if any plan there has "Status: pending",
  execute the topmost one before taking new feature work, per the contract
  at the top of that file.

## Rules for the agent (follow these)

1. **Read this entire file at the start of every session** before doing any
   work. It is the fastest way to know where the project stands.
2. **Update this file after completing a feature, making a decision, or
   discovering a gotcha** — before ending the session. If it isn't written
   here, assume the next session doesn't know it.
3. **Log format:** newest entries first, directly under `## Log`. Each entry:
   `- YYYY-MM-DD — <concise summary>` followed by an indented paragraph.
   Include: what shipped, where it lives (file paths), key decisions and
   *why* (owner choices), and anything the next session must not break.
4. **Housekeeping:** when the log grows long, first promote any
   still-load-bearing decisions (and their *why*) into the Decisions
   section of `PROJECT.md`, then compress entries older than a few weeks
   into a single `- Earlier work — see <docs/commits>` pointer. Never
   delete recent decisions.
5. **Don't duplicate stable knowledge.** Architecture, commands, and style
   rules belong in the agent rules file (auto-loaded every session). This
   file only holds the *moving* state. Bug history / deep post-mortems go in
   their own doc (e.g. `report.md`) — link to them, don't paste them.
6. **Keep the Snapshot current:** whenever the newest log entry changes
   something the Snapshot describes, update the Snapshot in the same
   session — it must never drift from the log.

## Snapshot (2026-09-07)

- App: Portfolio — single-page portfolio for Hassan (full-stack developer).
  Next.js 16 App Router + React 19 + Tailwind v4 (CSS-first tokens) + TS.
  Motion library, Lenis smooth scroll, R3F/drei 3D hero, next-themes
  (class strategy, system default), Instrument Serif accent type.
- Run commands (run only when asked): `npm run dev`, `npm run build`,
  `npm run start`, `npx eslint .` (lint/build already verified 2026-09-07).
- Workflow rules: no verification runs unless explicitly asked; surgical
  edits only; minimal responses; all content lives in `content/site.ts`.

## Pointers

- Project facts (stack, structure, conventions, decisions): `PROJECT.md`
- Roadmap: [file]
- Human README (refreshed only on request): `README.md`
- Other load-bearing docs: [files]

## Log (newest first)

- 2026-09-15 — Visual polish postponed by owner → written up as
  **Plan 002** in `PLANS.md` (Status: pending). Owner wants to implement
  the ArtPanel hover FX manually later; the plan holds the exact
  snippets. Do not re-implement it for the owner unless asked — topmost
  pending plan rule applies.

- 2026-09-15 — Owner reverted the ArtPanel visual upgrade (glow, sheen,
  scrim, "View" chip, gloss ring, shadows). `ArtPanel` in
  `components/sections/projects.tsx` is back to the plain version: image
  or gradient + initial letter, owner-styled year chip (`bg-gray-200`),
  image hover scale via card wrapper `group`. Per-project `image` field
  support stays.

- 2026-09-15 — Added optional per-project `image` support in the Work
  section.

  `Project` type in `content/site.ts` gained `image?: string` (path under
  `/public`, e.g. `"/projects/friends.png"`, or full URL). `ArtPanel` in
  `components/sections/projects.tsx` renders `next/image` (fill + sizes +
  object-cover, subtle group-hover zoom; featured cards got `group` on
  their wrapper) when `image` is set, otherwise the original hue gradient
  + initial letter. No projects have images set yet — owner asked how to
  change the panels; answer: set `image` on the project entry.

- 2026-09-07 — Full portfolio shipped in one session (build + lint passed
  before the no-verification rule was discovered; owner waived the rest).

  Single-page portfolio: Hero (3D distorted sphere + orbit rings,
  pointer-reactive, theme-aware colors, `components/three/hero-scene.tsx`,
  dynamic import ssr:false), About (scroll word-illumination + stat
  counters), Toolbox (editorial category rows + CSS marquee), Selected
  Work (2 alternating featured tilt cards + 4-card grid, gradient art
  panels keyed by per-project `hue`, dark variant via `[data-art-panel]`
  + `--panel-dark` in globals.css), Experience (scroll-linked timeline),
  Contact (copy-email button + socials).

  UI primitives in `components/ui/`: custom cursor (dot + spring ring,
  matchMedia-gated), magnetic wrapper, Reveal, TiltCard, Counter,
  ThemeToggle, CopyEmail, SmoothScroll (Lenis + anchor interception),
  section headings. Layout: fixed nav (hide-on-scroll, active-section
  observer, mobile overlay menu), intro loader (sessionStorage-once,
  name reveal), footer. Root layout wires fonts (Geist/Geist
  Mono/Instrument Serif), metadata, Providers, grain overlay.

  Key decisions & gotchas: all placeholder content centralized in
  `content/site.ts` (single edit point — owner chose placeholders).
  Next 16 ships react-hooks v6 `set-state-in-effect` rule — hydration /
  media-query state handled via `useSyncExternalStore`
  (`hooks/use-media-query.ts`), not setState-in-effect; do not regress.
  `prefers-reduced-motion` disables Lenis, cursor, and 3D canvas.
  Theme = class strategy, default system. Verification rule learned:
  owner rejected a post-build smoke test — read this file *first*.


