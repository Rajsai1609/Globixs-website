-- Purely additive: one new table, one index, one nullable FK to CustomerResult.
-- No existing table, column, index or enum is altered or dropped.

-- CreateTable
CREATE TABLE "CustomerTestimonial" (
    "id" TEXT NOT NULL,
    "customerResultId" TEXT,
    "quote" TEXT NOT NULL,
    "attribution" TEXT NOT NULL,
    "consentAt" TIMESTAMP(3),
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerTestimonial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CustomerTestimonial_published_createdAt_idx" ON "CustomerTestimonial"("published", "createdAt");

-- AddForeignKey
ALTER TABLE "CustomerTestimonial" ADD CONSTRAINT "CustomerTestimonial_customerResultId_fkey" FOREIGN KEY ("customerResultId") REFERENCES "CustomerResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;
