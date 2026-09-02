"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Lightbox({
  src, alt, caption, href, onClose,
}: { src: string; alt: string; caption: string; href: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      role="dialog" aria-modal="true" aria-label={caption}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F2326]/85 p-4"
    >
      <div onClick={(e) => e.stopPropagation()} className="max-h-[92vh] w-full max-w-3xl overflow-auto rounded-[10px] bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full" />
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#DDE1E4] px-5 py-3 text-[14px] text-[#383E42]">
          <span>{caption}</span>
          <span className="flex gap-4">
            <Link href={href} className="font-medium text-[#C8262C] hover:underline">Read the full story</Link>
            <button type="button" onClick={onClose} className="font-medium hover:underline">Close</button>
          </span>
        </div>
      </div>
    </div>
  );
}
