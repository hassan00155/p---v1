# README template — human-facing docs

Copy to `README.md` at project start and fill in. Written for humans who
will never read the agent files: what it does, how to run it, where it
hurts. It duplicates `PROJECT.md` facts on purpose — README is the
human-facing source of truth, PROJECT.md the agent-facing one. Write it
once at project start; refresh only when the owner asks (typically after
many accumulated changes) and re-sync facts from `PROJECT.md` then.

---

# <Project Name>

> <One line: what it does, for whom.>

## What it is

[2–3 sentences: the problem it solves and who it's for. No internal
jargon, no roadmap talk.]

## Quickstart

Prerequisites: [runtime + version, package manager]

```
<setup command>
<run command>
```

Then open http://localhost:PORT.

## Configuration

Required environment variables (see `.env.example`):

| Variable | Purpose | Example |
|---|---|---|
| [NAME] | [what it controls] | [value] |

## Usage

[The 2–3 main things a person does with this app — one short block each.]

## Project structure

[One line per top-level directory — only the ones a human needs.]

## Known quirks

[Top gotchas a human actually hits. Deep history lives in `BUGS.md`.]

## License

[License / owner]
