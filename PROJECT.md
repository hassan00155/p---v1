# Project facts — stable, day-zero knowledge

Holds what doesn't move session to session: what the app is, how it's
built, and the decisions that shape it. `CONTINUITY.md` points here.
Agents update this file only when the owner says so, or when a durable
decision is promoted from the CONTINUITY.md log during housekeeping.

## App

- [name — one-line description]

## Stack & structure

- [stack summary, repo layout, where things live]

## Conventions

- [naming, style, patterns every change must follow]

## Environment (reference — run only when asked)

- Setup: [the one command that installs everything]
- Dependencies: [package manager + lockfile — the lockfile is always committed]
- Config: [required env vars; keep `.env.example` in sync — never real values]
- Environments: [dev/staging/prod hosts or URLs, if any]

## Run commands (run only when asked)

- [dev server, test/lint/build commands and any quirks]

## Decisions (durable, with why)

- YYYY-MM-DD — [decision — why it was made]
