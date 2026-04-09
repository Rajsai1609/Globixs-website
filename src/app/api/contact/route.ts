import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validators";
import { isLikelySpam } from "@/lib/spam";
import { sendNotificationEmail } from "@/lib/email";

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

  await prisma.contactSubmission.create({
    data: {
      fullName: payload.fullName,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      serviceInterest: payload.serviceInterest,
      message: payload.message,
    },
  });

  await sendNotificationEmail(
    `New contact submission from ${payload.fullName}`,
    `Name: ${payload.fullName}\nCompany: ${payload.company || "-"}\nEmail: ${payload.email}\nPhone: ${payload.phone || "-"}\nService: ${payload.serviceInterest || "-"}\n\nMessage:\n${payload.message}`,
    process.env.EMAIL_TO_CONTACT || "",
  );

  return NextResponse.json({ ok: true });
}

