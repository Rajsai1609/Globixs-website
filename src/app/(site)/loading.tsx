export default function Loading() {
  return (
    <div className="container-shell py-20">
      <div className="animate-pulse rounded-xl border border-slate-200 bg-white p-8">
        <div className="h-6 w-48 rounded bg-slate-200" />
        <div className="mt-4 h-4 w-full rounded bg-slate-200" />
        <div className="mt-2 h-4 w-4/5 rounded bg-slate-200" />
      </div>
    </div>
  );
}

