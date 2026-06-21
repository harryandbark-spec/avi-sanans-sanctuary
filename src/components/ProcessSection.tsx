// This component is compatible with the v0 branch
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Tokens are already defined in CSS :root, we will use var(--gold) etc.

const steps = {
  selling: [
    { number: "01", title: "Pricing Strategy", description: "Comparable sales across the Lower Mainland, priced on data, not guesswork." },
    { number: "02", title: "Presentation", description: "Staging and photography tailored to your specific market segment." },
    { number: "03", title: "Launch & Negotiation", description: "Listed on MLS, offers compared side by side, terms negotiated." },
    { number: "04", title: "Closing", description: "Inspection, financing, and legal coordinated through to possession." },
  ],
  buying: [
    { number: "01", title: "Discovery", description: "Budget, must-haves, and financing pre-approval confirmed upfront." },
    { number: "02", title: "Search & Viewings", description: "Full Lower Mainland access, in-person walkthroughs, comparison notes." },
    { number: "03", title: "Offer & Negotiation", description: "Comps-backed offer strategy, negotiated on price and conditions." },
    { number: "04", title: "Closing", description: "Inspection, financing, legal, possession, handled end to end." },
  ],
};

export function ProcessSection() {
  const [mode, setMode] = useState("selling"); // "selling" or "buying"
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Intersection observer for scroll-into-view animation (desktop only)
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const currentSteps = steps[mode as keyof typeof steps];

  return (
    <section className="py-8 md:py-12 lg:py-16" id="process-section" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Eyebrow */}
        <p className="text-[12px] tracking-[0.32em] uppercase text-[var(--gold)] mb-2 text-center md:text-left">
          The Process
        </p>
        {/* Headline */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--cream)] leading-tight text-center md:text-left mb-8">
          How it works.
        </h2>
        {/* Toggle pill style */}
        <div className="flex justify-center md:justify-start mb-8 space-x-2">
          <button
            type="button"
            onClick={() => setMode("selling")}
            aria-selected={mode === "selling"}
            role="tab"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]",
              mode === "selling"
                ? "bg-[var(--gold)] text-[var(--bg)] border-[var(--gold)]"
                : "bg-transparent text-[var(--cream)] border-[var(--hairline)] hover:border-[var(--gold)]",
            )}
          >
            Selling
          </button>
          <button
            type="button"
            onClick={() => setMode("buying")}
            aria-selected={mode === "buying"}
            role="tab"
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]",
              mode === "buying"
                ? "bg-[var(--gold)] text-[var(--bg)] border-[var(--gold)]"
                : "bg-transparent text-[var(--cream)] border-[var(--hairline)] hover:border-[var(--gold)]",
            )}
          >
            Buying
          </button>
        </div>

        {/* Horizontal rule with ticks (desktop only) */}
<div className="hidden lg:block relative mb-8">
  <hr
    className={cn(
      "border-t border-[var(--hairline)] h-px w-full",
      !reducedMotion && inView ? "animate-[ruleFill_0.8s_ease-out_forwards]" : "",
    )}
  />
  {/* Progress line connecting steps */}
  <div
    className="absolute top-0 left-0 h-px bg-[var(--gold)]"
    style={{
      width: inView && !reducedMotion ? "100%" : "0",
      transition: "width 4s ease-out",
    }}
  />
  {/* Checkpoints */}
  <div className="absolute inset-0 flex justify-between items-start">
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className="flex flex-col items-center">
        <span
          className="text-[10px] uppercase text-[var(--gold)] mb-1"
          style={{
            opacity: inView && !reducedMotion ? 1 : 0,
            transition: `opacity 4s ease-out ${i}s`,
          }}
        >
          {i + 1}
        </span>
        <div
          className="w-1.5 h-1.5 bg-[var(--hairline)] rounded-full mt-[-4px]"
          style={{
            opacity: inView && !reducedMotion ? 1 : 0,
            transition: `opacity 4s ease-out ${i}s`,
          }}
        />
      </div>
    ))}
  </div>
</div>
        {/* Steps Grid */}
        <div className="mb-8 flex justify-center lg:justify-start">

        </div>
        {/* Desktop (>=901px) */}
        <div
          className={cn(
            "grid gap-8",
            "lg:grid-cols-4",
            "md:grid-cols-2",
            "grid-cols-1",
          )}
        >
          {currentSteps.map((step, idx) => (
            <div
              key={step.number}
              className={cn(
                "flex flex-col",
                "text-left",
                "text-[var(--cream)]",
                "transition-opacity duration-500",
                inView && !reducedMotion ? "opacity-100" : "opacity-0",
                // staggered fade for crossfade when toggling
                `delay-${idx * 100}`,
              )}
            >
              <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--gold)] mb-1">
                {step.number}
              </p>
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-[var(--cream)] mb-2">
                {step.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <p className="text-[14px] text-[var(--gold)] bg-[var(--hairline-soft)] border border-[var(--gold)] rounded px-4 py-2 text-center max-w-md animate-pulse">
            Every step happens in English, Punjabi, or Hindi.
          </p>
        </div>
      </div>
    </section>
  );
}

// Hook for prefers-reduced-motion
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
