import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for NexaBridge Consulting website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="section-pad">
      <div className="container-shell max-w-4xl rounded-xl border border-slate-200 bg-white p-8">
        <h1 className="text-3xl font-bold text-heading">Privacy Policy</h1>
        <p className="mt-4 text-slate-700">
          We collect contact and career-related information solely for business communication, service delivery, and candidate consideration. Information is not sold to third parties.
        </p>
        <p className="mt-4 text-slate-700">
          Resume and contact submissions are retained for a reasonable business period and protected with appropriate administrative and technical safeguards.
        </p>
      </div>
    </div>
  );
}

