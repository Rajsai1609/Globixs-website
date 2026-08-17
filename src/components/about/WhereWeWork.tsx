import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "@/components/sections/section-title";

export function WhereWeWork() {
  return (
    <section className="section-pad section-alt">
      <div className="container-shell">
        <Reveal>
          <SectionTitle
            eyebrow="WHERE WE WORK FROM"
            title="Where we work from"
            description="We're headquartered in Seattle, Washington, and work with clients and candidates across the United States."
          />
          {/* Copy supplied verbatim. Note this phone differs from `company.phone`
              in src/lib/site-config.ts, which the footer still uses. */}
          <p className="mt-6 text-base font-semibold text-heading">
            <a href="mailto:Connect@globixs.com" className="hover:underline">
              Connect@globixs.com
            </a>{" "}
            ·{" "}
            <a href="tel:+12065528424" className="hover:underline">
              +1 (206) 552-8424
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
