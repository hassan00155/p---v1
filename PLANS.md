# Plans — pending work queue

Execution contract for agents:

1. CONTINUITY.md points here whenever work is pending.
2. Plans are stacked newest first under "## Queue". Each has a Status line.
3. Execute ONLY the topmost "Status: pending" plan. Do not skip ahead or
   merge plans. If a new prompt arrives that creates new work, add a new
   plan on top instead of editing pending ones (unless the owner says
   otherwise).
4. When a plan is finished (implemented and its CONTINUITY.md log entry is
   written), change its status line to "Status: done YYYY-MM-DD". Done
   means implemented + logged — no verification gate unless the owner
   explicitly asks. Leave it in place; do not delete or reorder.
5. Then look at the next plan below it in this same file. If another
   "Status: pending" exists, it becomes the active plan for the next
   session (or continue immediately, depending on the owner's prompt).
6. If a plan is abandoned, mark "Status: dropped YYYY-MM-DD" plus a
   one-line reason. Never delete entries.
7. Plans must be self-contained: file paths, steps, decisions, and
   verification notes (reference only — runs happen solely when the owner
   asks) live inside the plan, never in chat history.

## Queue

New plans are stacked newest first using this skeleton:

### Plan NNN — <short title>
- Status: pending
- Goal: <one line>
- Files: <paths that will be touched>
- Steps: <numbered, self-contained>
- Constraints: <decisions to respect, things not to break>
- Verification: <reference only — runs happen solely when the owner asks>

### Plan 002 — ArtPanel hover/visual polish (Work section)
- Status: pending
- Goal: richer project image panels — ambient hue glow, layered shadows,
  sheen sweep, scrim + "View" chip, gloss ring, subtle image color
  treatment. All hover FX scoped to the panel itself (`group/panel`).
- Files: `components/sections/projects.tsx` (only the `ArtPanel`
  function + one line in `FeaturedProject`).
- Steps:
  1. Wrap: `ArtPanel` return becomes `<div className="group/panel
     relative">` around everything; keep the existing `data-art-panel`
     div unchanged inside it.
  2. Glow (before the panel div, inside the wrapper):
     ```tsx
     <div
       aria-hidden
       className="pointer-events-none absolute -inset-5 rounded-4xl opacity-0 blur-2xl transition-opacity duration-700 group-hover/panel:opacity-100"
       style={{
         background: `radial-gradient(55% 55% at 70% 30%, hsl(${project.hue} 65% 55% / 0.35), transparent 70%),
           radial-gradient(45% 45% at 25% 80%, hsl(${project.hue + 40} 60% 50% / 0.28), transparent 70%)`,
       }}
     />
     ```
     (Sibling order puts the panel above it — no negative z-index
     needed; works inside TiltCard's transform stacking context.)
  3. Panel shadow: extend the panel div's `cn(...)` with:
     `"shadow-[0_10px_30px_-12px_rgb(0_0_0/0.18)] transition-shadow duration-500"`,
     `"group-hover/panel:shadow-[0_24px_56px_-16px_rgb(0_0_0/0.28)]"`.
     Optionally use canonical Tailwind v4 classes: `aspect-16/10` /
     `aspect-video` instead of `aspect-[16/10]` / `aspect-[16/9]`.
  4. Image treatment: change the `<Image>` className to
     `"object-cover transition-[transform,filter] duration-700 ease-out saturate-[0.92] group-hover/panel:scale-[1.04] group-hover/panel:saturate-100"`
     (replaces the card-level `group-hover:scale-[1.03]`; then the
     `className="group"` on FeaturedProject's `<div data-hover>` wrapper
     can be removed).
  5. Gloss ring + sheen + scrim + chip (inside the panel div, after the
     image/letter):
     ```tsx
     <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/25 dark:ring-white/10" />
     <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-[160%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-md transition-transform duration-1000 ease-out group-hover/panel:translate-x-[360%]" />
     <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover/panel:opacity-100" />
     <span className="pointer-events-none absolute bottom-4 right-4 flex translate-y-2 items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover/panel:translate-y-0 group-hover/panel:opacity-100">
       View <ArrowUpRight className="h-3 w-3" />
     </span>
     ```
     Sheen math: element is w-1/2 of panel; -160% → 360% of own width
     sweeps fully across (off-left → off-right).
  6. Year chip (optional polish): theme-safe version —
     `"absolute left-5 top-5 rounded-md bg-background/70 px-2 py-1 font-mono text-xs uppercase tracking-[0.25em] text-muted backdrop-blur-sm"`
     (current code uses owner's `bg-gray-200`, which breaks in dark
     mode — owner's call whether to keep).
  7. Tweak/dial-down knobs: glow intensity (0.35/0.28 alphas), shadow
     spreads, sheen `via-white/25` opacity, scrim height `h-2/5`,
     image `saturate-[0.92]`. Reduce any if too loud; all are
     independent.
- Constraints: CSS-only, no new deps; everything keyed to
  `group/panel` so grid cards and featured cards behave identically;
  don't touch TiltCard/Reveal; keep `data-art-panel` + `--panel-dark`
  dark-mode mechanism intact; falls back gracefully for gradient-only
  projects (FX layers sit on top of gradient + letter too).
- Verification: reference only — owner implements manually; if asked,
  `npx tsc --noEmit` + visual pass in light/dark at hover.

### Plan 001 — Portfolio site (minimal & elegant, showcase motion)
- Status: done 2026-09-07
- Goal: single-page portfolio for Hassan, full-stack developer, with
  placeholder content in one config file.
- Files: app/{layout,page,globals.css}, content/site.ts,
  components/{providers,ui/*,sections/*,three/hero-scene,layout/*},
  hooks/use-media-query.ts, lib/utils.ts
- Steps: executed 2026-09-07 per approved blueprint (see CONTINUITY log).
- Constraints: Tailwind v4 CSS-first tokens; react-hooks v6
  set-state-in-effect rule (use useSyncExternalStore, not effect setState);
  respect prefers-reduced-motion; 3D client-only via dynamic import.
- Verification: lint + production build passed 2026-09-07; further runs
  only on owner request.
