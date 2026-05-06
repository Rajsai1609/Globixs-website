import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.job.count();
  console.log(`✅ SUCCESS: connected, job count = ${count}`);
}

main()
  .then(() => process.exit(0))
  .catch((err: unknown) => {
    const e = err as { message?: string; code?: string; meta?: unknown };
    console.error("❌ FAILURE:");
    if (e.message) console.error("  message:", e.message);
    if (e.code)    console.error("  code:   ", e.code);
    if (e.meta)    console.error("  meta:   ", JSON.stringify(e.meta, null, 2));
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
