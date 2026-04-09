import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.shortDesc };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="section-pad">
      <div className="container-shell max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Service Detail</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">{service.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{service.shortDesc}</p>
        <article className="mt-8 rounded-xl border border-slate-200 bg-white p-8 text-slate-700">
          <p>{service.longDesc}</p>
        </article>
      </div>
    </div>
  );
}

