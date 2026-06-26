"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const steps = {
  selling: [
    {
      number: "01",
      title: "Pricing Strategy",
      description: "Comparable sales across the Lower Mainland, priced on data — not guesswork.",
    },
    {
      number: "02",
      title: "Presentation",
      description: "Professional staging and photography tailored to your home and market.",
    },
    {
      number: "03",
      title: "Launch & Negotiation",
      description: "Listed on MLS, offers reviewed together, terms negotiated on your behalf.",
    },
    {
      number: "04",
      title: "Closing",
      description: "Inspection, financing, and legal coordinated cleanly through to possession.",
    },
  ],
  buying: [
    {
      number: "01",
      title: "Discovery",
      description: "Budget, must‑haves, and financing pre‑approval confirmed up front.",
    },
    {
      number: "02",
      title: "Search & Viewings",
      description: "Full Lower Mainland access — MLS, off‑market, and private contacts.",
    },
    {
      number: "03",
      title: "Offer & Negotiation",
      description: "Comps‑backed offer strategy, negotiated on price and conditions.",
    },
    {
      number: "04",
      title: "Closing",
      description: "Inspection, financing, legal, possession — handled end to end.",
    },
  ],
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const listener = () => setReduced(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);
  return reduced;
}

export function ProcessSection() {
  const [mode, setMode] = useState<"selling" | "buying">("selling");
  const [prevMode, setPrevMode] = useState<"selling" | "buying">("selling");
  const [transitioning, setTransitioning] = useState(false);
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function switchMode(next: "selling" | "buying") {
    if (next === mode) return;
    setTransitioning(true);
    setPrevMode(mode);
    setTimeout(() => {
      setMode(next);
      setTransitioning(false);
    }, 220);
  }

  const currentSteps = steps[mode];

  return (
    <section id="process-section" ref={containerRef} className="py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div className="space-y-2">
            <p className="text-[11px] tracking-[0.34em] uppercase text-[var(--gold)]">
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--cream)] leading-tight">
              How it works.
            </h2>
          </div>

          {/* Toggle — sharp rectangular tabs */}
          <div
            className="flex border border-[var(--hairline)] w-fit"
            role="tablist"
            aria-label="Process mode"
          >
            {(["selling", "buying"] as const).map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={mode === m}
                onClick={() => switchMode(m)}
                className={cn(
                  "px-6 py-2.5 text-[11px] tracking-[0.24em] uppercase font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)]",
                  mode === m
                    ? "bg-[var(--gold)] text-[var(--bg)]"
                    : "bg-transparent text-[var(--cream)]/60 hover:text-[var(--cream)] hover:bg-[var(--hairline-soft)]",
                  m === "buying" ? "border-l border-[var(--hairline)]" : "",
                )}
              >
                {m === "selling" ? "Selling" : "Buying"}
              </button>
            ))}
          </div>
        </div>

        {/* Animated progress rail (desktop only) */}
        <div className="hidden lg:block relative h-px mb-10">
          {/* Base rail */}
          <div className="absolute inset-0 bg-[var(--hairline)]" />
          {/* Gold fill */}
          <div
            className="absolute top-0 left-0 h-full bg-[var(--gold)]"
            style={{
              width: inView && !reducedMotion ? "100%" : "0%",
              transition: "width 2.4s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          {/* Step dots */}
          <div className="absolute inset-0 flex justify-between">
            {currentSteps.map((s, i) => (
              <div key={s.number} className="relative flex flex-col items-center">
                <div
                  className="w-2.5 h-2.5 rounded-full border-2 border-[var(--gold)] bg-[var(--bg)] -mt-[5px] transition-all duration-300"
                  style={{
                    opacity: inView && !reducedMotion ? 1 : 0,
                    transform: inView && !reducedMotion ? "scale(1)" : "scale(0.4)",
                    transitionDelay: `${i * 0.5}s`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Step cards */}
        <div
          className={cn(
            "grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 transition-opacity duration-200",
            transitioning ? "opacity-0" : "opacity-100",
          )}
        >
          {currentSteps.map((step, idx) => (
            <div
              key={`${mode}-${step.number}`}
              className={cn(
                "group border-t-2 border-[var(--hairline)] hover:border-[var(--gold)] transition-all duration-300",
                "md:border-l md:border-l-[var(--hairline)] first:md:border-l-0",
                "pt-7 pb-8 px-0 md:px-7 first:md:pl-0 last:md:pr-0 space-y-3",
              )}
              style={{
                opacity: inView && !reducedMotion ? 1 : 0,
                transform: inView && !reducedMotion ? "translateY(0)" : "translateY(18px)",
                transition: `opacity 0.55s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)`,
                transitionDelay: `${idx * 0.12}s`,
              }}
            >
              <span className="font-serif text-4xl md:text-5xl text-[var(--gold)] leading-none group-hover:text-[var(--gold-bright)] transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="font-sans text-[12px] tracking-[0.22em] uppercase text-[var(--cream)] font-semibold">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--cream)]/65 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Language note */}
        <div className="mt-10 border-l-2 border-[var(--gold)]/50 pl-4 py-1">
          <p className="text-[13px] text-[var(--cream)]/60 leading-relaxed">
            Every step handled in{" "}
            <span className="text-[var(--gold)]">English, Punjabi, or Hindi</span> — whichever feels
            most comfortable.
          </p>
        </div>
      </div>
    </section>
  );
}
