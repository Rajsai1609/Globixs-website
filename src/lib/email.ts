import nodemailer from "nodemailer";

/** Hosts from .env.example / docs that must not trigger real DNS or SMTP (dev-friendly). */
function isSkippableSmtpHost(host: string): boolean {
  const h = host.trim().toLowerCase();
  if (!h) return true;
  if (h === "smtp.example.com" || h.endsWith(".example.com")) return true;
  return false;
}

function getTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !user || !pass || isSkippableSmtpHost(host)) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/**
 * Sends a notification email when SMTP is fully configured.
 * Never throws: failures are logged so API routes still return success after DB writes.
 */
export async function sendNotificationEmail(subject: string, text: string, to: string): Promise<void> {
  try {
    const transporter = getTransporter();
    const from = process.env.EMAIL_FROM?.trim();
    if (!transporter || !from || !to?.trim()) {
      return;
    }

    await transporter.sendMail({
      from,
      to: to.trim(),
      subject,
      text,
    });
  } catch (e) {
    console.error("[email] Notification send failed (submission still saved):", e);
  }
}
