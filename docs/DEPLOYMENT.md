# CI/CD and production (big-tech style trunk flow)

## Branch model

- **`main`**: production. Every merge runs **CI** then **production deploy** (if workflows are enabled).
- **Feature branches + PRs**: run **CI**; optional **Vercel preview** URL on the PR.

Enable **branch protection** on `main`: require the **CI** check to pass before merge.

## GitHub Actions (this repo)

Single workflow **`ci.yml`** (`CI/CD`):

| Job | When | What |
|-----|------|------|
| `quality` | PR + push to `main` / `develop` | `prisma validate`, `lint`, `typecheck`, `next build` |
| `deploy-preview` | After `quality` on PRs to `main` (same repo only) | Vercel preview + PR comment |
| `deploy-production` | After `quality` on push to `main` | Vercel production (`--prod`) |

### Monorepo layout

If the git root is **above** this folder (e.g. `consulting/corp-site`), move `.github/workflows` to the **repository root** and add:

```yaml
defaults:
  run:
    working-directory: corp-site
```

and `paths:` filters on `push` / `pull_request` so only app changes trigger workflows.

## Vercel project setup

1. Create a project at [vercel.com](https://vercel.com) and import this GitHub repo (root = folder with `package.json`).
2. **Environment variables** (Production + Preview): `DATABASE_URL`, `DIRECT_URL`, `NEXT_PUBLIC_SITE_URL` (canonical URL for sitemap/metadata), `ADMIN_USERNAME`, `ADMIN_PASSWORD`, email vars as needed.
   - Supabase + Prisma recommended:
     - `DATABASE_URL`: transaction pooler (`:6543`) with `?pgbouncer=true&connection_limit=1`
     - `DIRECT_URL`: session pooler (`:5432`) for Prisma schema/migration operations
   - Supabase Storage for resumes (private bucket):
     - `SUPABASE_URL`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `SUPABASE_STORAGE_BUCKET` (optional, defaults to `resumes`)
3. **Build** (recommended when using Prisma migrations):

   ```bash
   prisma generate && prisma migrate deploy && next build
   ```

   If you use `db push` only in dev, start with `prisma generate && next build` and run migrations manually until you adopt `migrate deploy`.

4. **Install**: default `npm install` or `npm ci` (Vercel uses install appropriate for lockfile).

## GitHub secrets for Action-based deploys

From the machine where the project is linked:

```bash
npx vercel login
npx vercel link
```

Then Vercel → Project → **Settings** → **General** → copy **Project ID** and **Team / Org ID**.

Create a token: Vercel → **Account Settings** → **Tokens**.

In GitHub → **Repository** → **Settings** → **Secrets and variables** → **Actions**, add:

| Secret | Value |
|--------|--------|
| `VERCEL_TOKEN` | Personal token |
| `VERCEL_ORG_ID` | Team / org id |
| `VERCEL_PROJECT_ID` | Project id |

Preview deploys are skipped on forks (no secrets).

## Avoid double production deploys

- **Option A**: Use **only** GitHub Actions for production → in Vercel, disable automatic production deploy from the Git connection for this repo (or rely on Actions only).
- **Option B**: Use **only** Vercel’s Git integration → remove the `deploy-preview` and `deploy-production` jobs from `ci.yml` (keep the `quality` job), so Vercel builds on push/PR while CI still gates merge via branch protection.

## Production checklist

- [ ] Managed Postgres; `DATABASE_URL` + `DIRECT_URL` configured correctly  
- [ ] `prisma migrate deploy` in production build (after you have migration files)  
- [ ] Resumes: Supabase Storage private bucket exists and service-role access is configured  
- [ ] Strong admin credentials; consider SSO later  
- [ ] `metadataBase` / sitemap domain matches your real site URL  
