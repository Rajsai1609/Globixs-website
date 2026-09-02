import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getResultsSummary } from "@/lib/results";

// The nav hides its "Results" item until a customer result is actually
// published, so this layout reads the count. Without a revalidate the layout
// would be baked at build time and the item would never appear on the pages
// that have no revalidate of their own (/, /about, /services …). 300s matches
// /results and /for-employees, so a consent flip surfaces site-wide within
// five minutes with no redeploy.
export const revalidate = 300;

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { responses } = await getResultsSummary();

  return (
    <>
      <Navbar showResults={responses > 0} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
