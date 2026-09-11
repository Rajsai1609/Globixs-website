-- Lead source for /admin/contacts: the site page a visitor came from before
-- submitting the contact form. Purely additive: one nullable column, no
-- existing column or row is altered.

-- AlterTable
ALTER TABLE "ContactSubmission" ADD COLUMN "source" TEXT;
