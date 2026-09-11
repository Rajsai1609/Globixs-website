/**
 * Manage customer testimonials from the CLI.
 *
 *   npm run testimonial -- add --quote "…" --attribution "ML engineer, OPT, Seattle" [--result <slug>] [--consent] [--publish]
 *   npm run testimonial -- publish <id> [--consent]
 *   npm run testimonial -- unpublish <id>
 *   npm run testimonial -- list
 *
 * A testimonial is only rendered when BOTH `published` is true AND
 * `consentAt` is set. `--consent` stamps consentAt = now; only pass it once
 * the customer has given written permission.
 *
 * Reads DATABASE_URL from .env like the other Prisma scripts.
 */
import "dotenv/config";
import { parseArgs } from "node:util";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const USAGE = `Usage:
  npm run testimonial -- add --quote "<text>" --attribution "<who>" [--result <slug>] [--consent] [--publish]
  npm run testimonial -- publish <id> [--consent]
  npm run testimonial -- unpublish <id>
  npm run testimonial -- list`;

const addSchema = z.object({
  quote: z.string().trim().min(10, "quote must be at least 10 characters").max(1000),
  attribution: z.string().trim().min(3, "attribution is required").max(120),
  result: z.string().trim().min(1).optional(),
  consent: z.boolean().default(false),
  publish: z.boolean().default(false),
});

const idSchema = z.string().trim().min(1, "an id is required");

function fail(message: string): never {
  console.error(`Error: ${message}\n\n${USAGE}`);
  process.exit(1);
}

function formatIssues(error: z.ZodError): string {
  return error.issues.map((i) => `${i.path.join(".") || "args"}: ${i.message}`).join("; ");
}

async function resolveResultId(slug: string | undefined): Promise<string | null> {
  if (!slug) return null;
  const result = await prisma.customerResult.findUnique({ where: { slug }, select: { id: true } });
  if (!result) fail(`no CustomerResult with slug "${slug}"`);
  return result.id;
}

async function add(values: Record<string, unknown>): Promise<void> {
  const parsed = addSchema.safeParse(values);
  if (!parsed.success) fail(formatIssues(parsed.error));
  const { quote, attribution, result, consent, publish } = parsed.data;

  if (publish && !consent) {
    fail("--publish requires --consent; a testimonial without consent is never shown");
  }

  const customerResultId = await resolveResultId(result);
  const row = await prisma.customerTestimonial.create({
    data: {
      quote,
      attribution,
      customerResultId,
      consentAt: consent ? new Date() : null,
      published: publish,
    },
  });
  console.log(`created ${row.id} (${row.published && row.consentAt ? "LIVE" : "unpublished"})`);
}

async function publish(rawId: string | undefined, consent: boolean): Promise<void> {
  const parsedId = idSchema.safeParse(rawId);
  if (!parsedId.success) fail(formatIssues(parsedId.error));
  const id = parsedId.data;

  const existing = await prisma.customerTestimonial.findUnique({ where: { id } });
  if (!existing) fail(`no testimonial with id "${id}"`);
  if (!existing.consentAt && !consent) {
    fail("this testimonial has no consentAt; re-run with --consent once you have written permission");
  }

  const row = await prisma.customerTestimonial.update({
    where: { id },
    data: { published: true, consentAt: existing.consentAt ?? new Date() },
  });
  console.log(`published ${row.id} — consentAt ${row.consentAt?.toISOString()}`);
}

async function unpublish(rawId: string | undefined): Promise<void> {
  const parsedId = idSchema.safeParse(rawId);
  if (!parsedId.success) fail(formatIssues(parsedId.error));
  const row = await prisma.customerTestimonial.update({
    where: { id: parsedId.data },
    data: { published: false },
  });
  console.log(`unpublished ${row.id}`);
}

async function list(): Promise<void> {
  const rows = await prisma.customerTestimonial.findMany({
    orderBy: { createdAt: "desc" },
    include: { customerResult: { select: { slug: true } } },
  });
  if (rows.length === 0) {
    console.log("no testimonials");
    return;
  }
  for (const t of rows) {
    const state = t.published && t.consentAt ? "LIVE " : t.published ? "NOCON" : "draft";
    const link = t.customerResult ? ` → ${t.customerResult.slug}` : "";
    console.log(`${state}  ${t.id}  ${t.attribution}${link}\n       "${t.quote}"`);
  }
}

async function main(): Promise<void> {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      quote: { type: "string" },
      attribution: { type: "string" },
      result: { type: "string" },
      consent: { type: "boolean", default: false },
      publish: { type: "boolean", default: false },
      help: { type: "boolean", default: false },
    },
  });

  const [command, target] = positionals;
  if (values.help || !command) {
    console.log(USAGE);
    return;
  }

  switch (command) {
    case "add":
      return add(values);
    case "publish":
      return publish(target, values.consent);
    case "unpublish":
      return unpublish(target);
    case "list":
      return list();
    default:
      fail(`unknown command "${command}"`);
  }
}

main()
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
