// TODO: Confirm written permission before displaying client logos
// (T-Mobile, FedEx, Wells Fargo, Bank of America, etc.). Showing
// client logos without consent can damage relationships.
// Replace this stat strip with verified client logos once sign-off is obtained.

const stats = [
  { value: "4 restaurants", label: "Live on Resto" },
  { value: "49+ users",     label: "On PathAI" },
  { value: "10+ engineers", label: "Placed for clients" },
];

export function ClientLogos() {
  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <div className="container-shell">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          TRUSTED ACROSS STAFFING & AI DELIVERY
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="mt-1 text-sm uppercase tracking-wider text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
