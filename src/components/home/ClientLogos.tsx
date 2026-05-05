import Image from "next/image";

// TODO: Confirm written permission before displaying client logos
// (T-Mobile, FedEx, Wells Fargo, Bank of America, etc.). Showing
// enterprise client logos without consent can damage relationships.
// Safer interim: use anonymized labels like "Fortune 500 telecom",
// "Fortune 100 logistics provider", "Top-5 US bank" until written
// sign-off is obtained.
//
// Currently showing technology partner logos as a safe placeholder.

const techLogos = [
  { label: "AWS",               src: "/tech-logos/aws.svg",         width: 60 },
  { label: "Microsoft Azure",   src: "/tech-logos/azure.svg",       width: 80 },
  { label: "Google Cloud",      src: "/tech-logos/gcp.svg",         width: 80 },
  { label: "Snowflake",         src: "/tech-logos/snowflake.svg",   width: 80 },
  { label: "Databricks",        src: "/tech-logos/databricks.svg",  width: 80 },
  { label: "Salesforce",        src: "/tech-logos/salesforce.svg",  width: 80 },
];

export function ClientLogos() {
  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <div className="container-shell">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          TECHNOLOGIES WE DEPLOY
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
          {techLogos.map((logo) => (
            <Image
              key={logo.label}
              src={logo.src}
              alt={logo.label}
              width={logo.width}
              height={40}
              className="h-9 w-auto grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
