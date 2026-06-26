"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const CHECKLIST = [
  {
    n: "01",
    title: "Nail down the basics",
    body: "Agree on a working budget, timing, and who will hold the title. Simple clarity here saves time and keeps searches focused on homes that suit your life.",
  },
  {
    n: "02",
    title: "What matters to you",
    body: "Is it the view, a large garden, good schools, or renovation potential? We translate your priorities into quick filters — and call out the trade‑offs honestly so you choose with full context.",
  },
  {
    n: "03",
    title: "Quiet sourcing",
    body: "We tap local broker contacts, discreet owner outreach, and our watchlists to find off‑market and just‑listed opportunities, then share a short curated set of matches.",
  },
  {
    n: "04",
    title: "Quick checks & viewings",
    body: "We arrange viewings on your schedule and flag any major issues early — inspection highlights, title notes, strata concerns — so decisions are confident and fast.",
  },
  {
    n: "05",
    title: "Negotiate and close",
    body: "We handle the offer, negotiate on your behalf, and coordinate with lawyers and lenders so closing goes smoothly with your interests protected.",
  },
];

function ChecklistItem({ item, delay }: { item: (typeof CHECKLIST)[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      setTimeout(() => setChecked(true), delay + 400);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          setTimeout(() => setChecked(true), delay + 500);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="group flex gap-5 sm:gap-7 py-5 md:py-6 relative">
      {/* Checkbox */}
      <div className="shrink-0 flex flex-col items-center z-10">
        <div
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500"
          style={{
            borderColor: checked ? "#C5A267" : "rgba(197,162,103,0.3)",
            backgroundColor: checked ? "rgba(197,162,103,0.12)" : "#08101A",
          }}
        >
          <Check
            size={16}
            strokeWidth={2.5}
            className="transition-all duration-500"
            style={{
              color: "#C5A267",
              opacity: checked ? 1 : 0.3,
              transform: checked ? "scale(1)" : "scale(0.6)",
            }}
          />
        </div>
      </div>

      {/* Slot content — each line rolls up independently */}
      <div className="flex-1 pb-1 overflow-hidden">
        {/* Step label rolls in */}
        <div className="overflow-hidden h-5 mb-2">
          <div
            className="transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: revealed ? "translateY(0)" : "translateY(110%)",
              transitionDuration: "600ms",
              transitionDelay: `${delay}ms`,
            }}
          >
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-[#C5A267]/60">
              Step {item.n}
            </span>
          </div>
        </div>

        {/* Title rolls in with slight extra delay */}
        <div className="overflow-hidden mb-2" style={{ height: "auto" }}>
          <div
            className="transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: revealed ? "translateY(0)" : "translateY(110%)",
              transitionDuration: "680ms",
              transitionDelay: `${delay + 60}ms`,
            }}
          >
            <h3 className="font-serif text-xl md:text-2xl text-[#FDFCFB] leading-snug">
              {item.title}
            </h3>
          </div>
        </div>

        {/* Body rolls in last */}
        <div className="overflow-hidden">
          <div
            className="transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: revealed ? "translateY(0)" : "translateY(100%)",
              transitionDuration: "700ms",
              transitionDelay: `${delay + 130}ms`,
            }}
          >
            <p className="text-sm text-[#FDFCFB]/65 leading-relaxed max-w-[56ch]">{item.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BuyChecklist() {
  return (
    <div className="relative">
      {/* Vertical connecting line */}
      <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#C5A267]/15 hidden sm:block" />

      <div className="divide-y divide-[#C5A267]/10">
        {CHECKLIST.map((item, i) => (
          <ChecklistItem key={item.n} item={item} delay={i * 140} />
        ))}
      </div>
    </div>
  );
}
