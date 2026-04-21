import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for NexaBridge Consulting website usage.",
};

export default function TermsPage() {
  return (
    <div className="section-pad">
      <div className="container-shell max-w-4xl rounded-xl border border-slate-200 bg-white p-8">
        <h1 className="text-3xl font-bold text-heading">Terms and Conditions</h1>
        <p className="mt-4 text-slate-700">
          By using this website, you agree to use content for informational purposes only and not for unlawful activity. Service details are subject to contractual agreements.
        </p>
        <p className="mt-4 text-slate-700">
          Job postings, staffing terms, and consulting services may change without notice. Submitted information must be accurate and truthful.
        </p>
      </div>
    </div>
  );
}

