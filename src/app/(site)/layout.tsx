import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LeadSourceTracker } from "@/components/analytics/lead-source-tracker";

// Pages that render the live results feed (/, /technology-consulting,
// /results) set their own `revalidate`; the layout itself has no data needs.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LeadSourceTracker />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
