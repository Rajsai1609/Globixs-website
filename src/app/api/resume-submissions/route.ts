import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isLikelySpam } from "@/lib/spam";
import { resumeSchema } from "@/lib/validators";
import { saveResumeFile, FileValidationError, StorageConfigError } from "@/lib/storage";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("resume");
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
      startedAt: Number(formData.get("startedAt") || 0),
    };

    const parsed = resumeSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form input." }, { status: 400 });
    }
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Resume is required." }, { status: 400 });
    }
    if (isLikelySpam(parsed.data.website, parsed.data.startedAt)) {
      return NextResponse.json({ ok: true });
    }

    let resumeUrl: string;
    try {
      resumeUrl = await saveResumeFile(file);
    } catch (e) {
      if (e instanceof FileValidationError) {
        return NextResponse.json({ error: e.message }, { status: 400 });
      }
      if (e instanceof StorageConfigError) {
        console.error("[resume-submissions] storage error:", e.message);
        return NextResponse.json({ error: e.message }, { status: 500 });
      }
      const msg = e instanceof Error ? e.message : "Resume upload failed.";
      console.error("[resume-submissions] unexpected upload error:", e);
      return NextResponse.json({ error: msg }, { status: 500 });
    }

    await prisma.resumeSubmission.create({
      data: {
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        message: parsed.data.message,
        resumeUrl,
      },
    });

    await sendNotificationEmail(
      `New general resume submission: ${parsed.data.fullName}`,
      `Name: ${parsed.data.fullName}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone || "-"}\nResume: ${resumeUrl}\n\nMessage:\n${parsed.data.message || "-"}`,
      process.env.EMAIL_TO_CAREERS || "",
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[resume-submissions] POST error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
  }
}
