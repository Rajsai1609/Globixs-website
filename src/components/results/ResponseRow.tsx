"use client";
import { useState } from "react";
import { formatUtcDate } from "@/lib/results";
import Lightbox from "./Lightbox";

export type FeedRow = {
  id: string;
  company: string;
  label: string;
  role: string | null;
  receivedOn: string; // ISO
  dayN: number;
  profile: string;
  slug: string;
  image: string;
};

export default function ResponseRow({ row }: { row: FeedRow }) {
  const [open, setOpen] = useState(false);
  const date = formatUtcDate(row.receivedOn);

  return (
    <li className="border-b border-[#DDE1E4] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid w-full grid-cols-[28px_1fr_auto] items-start gap-x-4 px-5 py-4 text-left transition-colors hover:bg-[#F5F6F7] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#C8262C]"
        aria-label={`Open the ${row.company} email`}
      >
        <span aria-hidden className="pt-[2px] text-[18px] leading-none text-[#C8262C]">★</span>
        <span className="min-w-0">
          <span className="block truncate text-[17px] text-[#1F2326]">
            <span className="font-semibold">{row.company}</span>
            <span className="text-[#383E42]"> — {row.label}{row.role ? ` · ${row.role}` : ""}</span>
          </span>
          <span className="block text-[14px] text-[#6B7378]">
            {row.profile} · day {row.dayN} with Globixs
          </span>
        </span>
        <span className="pt-[2px] text-[14px] text-[#6B7378]">{date}</span>
      </button>
      {open && (
        <Lightbox
          src={row.image}
          alt={`${row.company} — ${row.label}${row.role ? `, ${row.role}` : ""}`}
          caption={`${row.company} · ${row.label} · received day ${row.dayN}`}
          href={`/results/${row.slug}`}
          onClose={() => setOpen(false)}
        />
      )}
    </li>
  );
}
