@AGENTS.md

## URL/Label mismatch — TODO

The nav currently uses mismatched URLs and labels for the two core offerings:

- `/services` renders as **"AI-Powered Staffing"** (staffing page)
- `/consulting` renders as **"AI Services"** (AI services page)

In a future cleanup PR, rename the routes to match their labels:
- `/services` → `/staffing`
- `/consulting` → `/services`

Update all internal `<Link href>` references, redirects, and any metadata when doing so.
