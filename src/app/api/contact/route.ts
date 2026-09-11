import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validators";
import { isLikelySpam } from "@/lib/spam";
import { sendNotificationEmail } from "@/lib/email";
import { normalizeLeadSource } from "@/lib/lead-source";

/** Prisma: "column does not exist" — thrown until the add_contact_source migration is deployed. */
const PRISMA_MISSING_COLUMN = "P2022";

function isMissingColumnError(err: unknown): boolean {
  return typeof err === "object" && err !== null && "code" in err && err.code === PRISMA_MISSING_COLUMN;
}

export async function POST(request: Request) {
  const data = await request.json();
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form input." }, { status: 400 });
  }

  const payload = parsed.data;
  if (isLikelySpam(payload.website, payload.startedAt)) {
    return NextResponse.json({ ok: true });
  }

  const source = normalizeLeadSource(payload.source);
  const record = {
    fullName: payload.fullName,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    serviceInterest: payload.serviceInterest,
    message: payload.message,
  };

  try {
    await prisma.contactSubmission.create({ data: { ...record, source } });
  } catch (err) {
    if (!isMissingColumnError(err)) {
      console.error("[contact] DB insert failed:", err);
      return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
    }
    // Schema is ahead of the database: keep accepting leads, just without
    // the source, until `prisma migrate deploy` adds the column.
    console.error("[contact] source column missing — run prisma migrate deploy; saving without source");
    try {
      await prisma.contactSubmission.create({ data: record });
    } catch (retryErr) {
      console.error("[contact] DB insert failed:", retryErr);
      return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
    }
  }

  await sendNotificationEmail(
    `New contact submission from ${payload.fullName}`,
    `Name: ${payload.fullName}\nCompany: ${payload.company || "-"}\nEmail: ${payload.email}\nPhone: ${payload.phone || "-"}\nService: ${payload.serviceInterest || "-"}\n\nMessage:\n${payload.message}`,
    process.env.EMAIL_TO_CONTACT || "",
  );

  return NextResponse.json({ ok: true });
}

