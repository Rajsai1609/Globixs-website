import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

const actions = [
  { label: "Explore AI Automation", href: "/ai-services", primary: true },
  { label: "Start your job search", href: "/technology-consulting#job-marketing", primary: false },
  { label: "Contact us", href: "/contact", primary: false },
];

export function ClosingCta() {
  return (
    <section className="hero-mesh py-16 text-white md:py-24">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Work with us.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "btn-primary"
                    : "btn-on-dark"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
