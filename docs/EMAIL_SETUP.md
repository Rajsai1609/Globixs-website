# Email setup — form notifications

## Current state: nothing is being sent

Every public form saves to the database and then calls
`sendNotificationEmail()` in `src/lib/email.ts`. That function **returns
silently** when SMTP is not configured — it does not throw, and it does not
log. The submitter still sees a success response.

As of this writing, **no `SMTP_*` or `EMAIL_*` variable is set in Vercel
production**. The full production list is `ADMIN_USERNAME`, `ADMIN_PASSWORD`,
`DATABASE_URL`, `DIRECT_URL`, `NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.

So every enquiry to date has landed in Postgres and notified nobody. Until
this is configured, `/admin/contacts` is the only way to see them.

There are two silent gates, and **both** must be closed for mail to send:

1. `getTransporter()` returns `null` unless `SMTP_HOST`, `SMTP_USER` and
   `SMTP_PASS` are all set (and the host is not a `*.example.com`
   placeholder).
2. `sendNotificationEmail()` returns early unless `EMAIL_FROM` is set **and**
   the recipient argument is non-empty — that recipient comes from
   `EMAIL_TO_CONTACT` / `EMAIL_TO_CAREERS`, which are also unset.

Setting only the `SMTP_*` trio changes nothing. You need the recipients too.

## Which routes send what

| Route | Table written | Recipient variable |
|---|---|---|
| `POST /api/contact` | `ContactSubmission` | `EMAIL_TO_CONTACT` |
| `POST /api/get-hired` | `GetHiredSubmission` | `EMAIL_TO_CONTACT` |
| `POST /api/resume-submissions` | `ResumeSubmission` | `EMAIL_TO_CAREERS` |

## Option A — Google Workspace SMTP (recommended)

Send as `connect@theteammc.com` through Gmail's SMTP relay. Nodemailer stays
exactly as it is; this is configuration only, no code change.

**Prerequisites**

1. 2-Step Verification must be **on** for the Google account. Without it,
   Google will not offer App Passwords at all.
2. Generate a 16-character **App Password** at
   <https://myaccount.google.com/apppasswords> (choose "Mail" / "Other").
   Google displays it in four groups of four — strip the spaces when you
   paste it. It is shown once.
3. Do **not** use the account's normal password. Google has disabled basic
   auth for SMTP; only App Passwords work.

**Variables to set in Vercel** (Production, Preview, Development):

```
SMTP_HOST          smtp.gmail.com
SMTP_PORT          587
SMTP_USER          connect@theteammc.com
SMTP_PASS          <16-char App Password, no spaces>
EMAIL_FROM         connect@theteammc.com
EMAIL_TO_CONTACT   connect@theteammc.com
EMAIL_TO_CAREERS   connect@theteammc.com
```

`src/lib/email.ts` sets `secure: port === 465`, so port `587` correctly uses
STARTTLS. If you prefer implicit TLS, use `465` and it switches automatically.

**Caveats**

- Gmail rewrites the `From:` header to the authenticated mailbox, so
  `EMAIL_FROM` must be `connect@theteammc.com` (or a verified send-as alias
  on that account). Setting it to `noreply@globixs.com` will not work.
- Workspace sending limit is 2,000 messages/day — far above form volume.
- If the account has SSO/2SV enforced by an admin policy, App Passwords may
  be blocked org-wide; you would need an admin to allow them, or use Option B.

## Option B — Resend with a verified `globixs.com` domain

Better deliverability and proper `From: something@globixs.com`, at the cost
of a DNS setup step and a code change.

1. Create a Resend account, add the domain `globixs.com`, and add the DKIM
   and SPF records it gives you to your DNS.
2. Wait for the domain to show **Verified**.
3. Create an API key.

Resend also exposes an SMTP endpoint, so you can keep Nodemailer untouched:

```
SMTP_HOST          smtp.resend.com
SMTP_PORT          587
SMTP_USER          resend
SMTP_PASS          <Resend API key, re_...>
EMAIL_FROM         notifications@globixs.com
EMAIL_TO_CONTACT   connect@theteammc.com
EMAIL_TO_CAREERS   connect@theteammc.com
```

Using the Resend SDK instead would mean rewriting `src/lib/email.ts` and
adding a dependency. The SMTP route above needs neither.

## Recommendation

**Start with Option A.** It needs no DNS changes, no new vendor and no code
change — only the seven variables above and an App Password, so you can have
notifications working in about ten minutes. Form volume (22 submissions
total so far) is nowhere near Gmail's limits.

Move to Option B when you want mail to come *from* `globixs.com` rather than
`theteammc.com`, or when notifications start going to more than a couple of
recipients and deliverability matters.

## After setting the variables

1. Redeploy — Vercel only picks up new environment variables on a new build.
2. Submit the contact form on production.
3. Confirm the mail arrives, and confirm the row appears in
   `/admin/contacts`.

## Worth fixing separately

`sendNotificationEmail()` returning silently is what let this go unnoticed.
A one-line `console.warn` on the misconfigured path would surface it in
Vercel logs without changing behaviour for users:

```ts
if (!transporter || !from || !to?.trim()) {
  console.warn("[email] Skipped: SMTP or recipient not configured");
  return;
}
```

Not included in this change set — the audit only reports it.
