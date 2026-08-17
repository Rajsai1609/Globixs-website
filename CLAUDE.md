@AGENTS.md

## Site messaging — three service lines

The site leads with three service lines (the Train/Place/Build pillar framing was
retired). Nav labels and their routes:

- `Staffing` → `/services` — IT staffing for businesses (contract + full-time hires)
- `Job Marketing` → `/for-employees` — full-time job marketing for candidates
- `AI Services` → `/ai-products` — AI services for businesses (receptionists,
  chatbots, lead gen, automation, reviews, websites + local SEO, dashboards, design)

The Train/Academy pillar was removed entirely; `/academy` 301s to `/`.

### URL/Label mismatch — TODO

Labels no longer match their routes. In a future cleanup PR, consider renaming
`/ai-products` → `/ai-services` and `/for-employees` → `/job-marketing` for
URL/label parity — or keep the current URLs for SEO continuity and add redirects.
Note `/products`, `/industries`, and `/get-hired` already 301 elsewhere via
`next.config.ts`.
