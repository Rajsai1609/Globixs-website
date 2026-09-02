/**
 * Publish or unpublish a CustomerResult without writing SQL.
 *
 *   npx tsx scripts/publish-result.ts --slug workday-consultant-aug-2026 --on
 *   npx tsx scripts/publish-result.ts --slug workday-consultant-aug-2026 --off
 *   npx tsx scripts/publish-result.ts --list
 *
 * A row is only ever visible on the site when BOTH published = true and
 * consentAt is non-null (see PUBLISHABLE in src/lib/results.ts).
 *
 *   --on    sets published = true and, if consentAt is not already set,
 *           stamps it. Pass --consent-date YYYY-MM-DD to record the date
 *           consent was actually given rather than today.
 *   --off   sets published = false and LEAVES consentAt intact — taking a
 *           result down is not a reason to erase the record that the
 *           customer once agreed. Add --revoke-consent to clear it too.
 *
 * Only ever run this once you hold the customer's written permission.
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type Args = {
  slug?: string;
  on: boolean;
  off: boolean;
  list: boolean;
  revokeConsent: boolean;
  consentDate?: string;
};

function parseArgs(argv: string[]): Args {
  const args: Args = { on: false, off: false, list: false, revokeConsent: false };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--slug") args.slug = argv[++i];
    else if (a === "--on") args.on = true;
    else if (a === "--off") args.off = true;
    else if (a === "--list") args.list = true;
    else if (a === "--revoke-consent") args.revokeConsent = true;
    else if (a === "--consent-date") args.consentDate = argv[++i];
    else {
      console.error(`Unknown argument: ${a}`);
      process.exit(1);
    }
  }
  return args;
}

function fail(message: string): never {
  console.error(`\n  ${message}\n`);
  process.exit(1);
}

function fmt(d: Date | null): string {
  return d ? d.toISOString() : "null";
}

async function list() {
  const rows = await db.customerResult.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { responses: true } } },
  });
  if (rows.length === 0) {
    console.log("\n  No CustomerResult rows.\n");
    return;
  }
  console.log("");
  for (const r of rows) {
    const live = r.published && r.consentAt !== null;
    console.log(
      `  ${live ? "LIVE  " : "hidden"}  ${r.slug}  ` +
        `(published=${r.published}, consentAt=${fmt(r.consentAt)}, responses=${r._count.responses})`,
    );
  }
  console.log("");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.list) {
    await list();
    return;
  }

  if (!args.slug) fail("Missing --slug. Use --list to see available slugs.");
  if (args.on === args.off) fail("Pass exactly one of --on or --off.");

  let consentDate: Date | undefined;
  if (args.consentDate) {
    if (!args.on) fail("--consent-date only applies with --on.");
    consentDate = new Date(`${args.consentDate}T12:00:00Z`);
    if (Number.isNaN(consentDate.getTime())) fail(`Invalid --consent-date: ${args.consentDate}`);
  }

  const existing = await db.customerResult.findUnique({
    where: { slug: args.slug },
    include: { _count: { select: { responses: true } } },
  });
  if (!existing) fail(`No CustomerResult with slug "${args.slug}". Use --list to see available slugs.`);

  if (args.on && existing._count.responses === 0) {
    fail(`"${args.slug}" has no EmployerResponse rows — publishing it would show an empty case.`);
  }

  const data = args.on
    ? { published: true, consentAt: existing.consentAt ?? consentDate ?? new Date() }
    : { published: false, ...(args.revokeConsent ? { consentAt: null } : {}) };

  const before = `published=${existing.published}, consentAt=${fmt(existing.consentAt)}`;
  const updated = await db.customerResult.update({ where: { slug: args.slug }, data });
  const after = `published=${updated.published}, consentAt=${fmt(updated.consentAt)}`;

  const live = updated.published && updated.consentAt !== null;

  console.log(`\n  ${updated.slug}`);
  console.log(`    before: ${before}`);
  console.log(`    after:  ${after}`);
  console.log(`    responses: ${existing._count.responses}`);
  console.log(`\n  ${live ? "LIVE on the site" : "hidden from the site"} — ISR means up to 5 minutes to appear.\n`);
}

main()
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
