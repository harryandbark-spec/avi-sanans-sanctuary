"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const CHECKLIST = [
  {
    n: "01",
    title: "Sort your finances first",
    body: "Still on a mortgage? That's completely normal. Before anything else, have a quick conversation with your lender to understand your options — whether that's porting, breaking, or waiting out the term.",
  },
  {
    n: "02",
    title: "Get an honest valuation",
    body: "Pricing too high means your home sits. Too low and you leave money behind. We pull recent comparable sales in your area and give you a straight number — not one inflated to win your listing.",
  },
  {
    n: "03",
    title: "Prepare and stage your home",
    body: "Small things make a big difference — declutter, touch up paint, let in natural light. We'll walk through the home with you and point out what buyers will actually notice.",
  },
  {
    n: "04",
    title: "List and market it properly",
    body: "Professional photography, an MLS listing, targeted digital reach, and direct outreach to active buyer agents. We keep you updated on views, feedback, and interest as it comes in.",
  },
  {
    n: "05",
    title: "Review offers together",
    body: "When offers come in, we go through each one with you — price, conditions, deposit, completion date. We help you compare and respond without pressure.",
  },
  {
    n: "06",
    title: "Close cleanly",
    body: "Once you accept, we coordinate the inspection, any repairs discussion, and work alongside your lawyer to handle the paperwork and get you to possession day without surprises.",
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
        {/* Step label */}
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

        {/* Title */}
        <div className="overflow-hidden mb-2">
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

        {/* Body */}
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

export function SellChecklist() {
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
