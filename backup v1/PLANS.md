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
