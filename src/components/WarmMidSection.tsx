"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

export function WarmMidSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Disable mid-section parallax: keep background static and overlay fixed.
  useEffect(() => {
    const bg = bgRef.current;
    const o = overlayRef.current;
    if (bg) bg.style.transform = "translate3d(0,0,0) scale(1.02)";
    if (o) o.style.background = "rgba(6,11,19,0.7)";
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Full-bleed interior photo */}
      <img
        ref={bgRef}
        src="/images/mid-section.png"
        alt="A welcoming living space"
        className="absolute inset-0 w-full h-full object-cover object-center hero-mid-bg"
      />
      {/* Overlay — dark navy with slight warmth */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{ background: "rgba(6,11,19,0.7)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-32 text-center flex flex-col items-center gap-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.26em] uppercase text-[#C5A267]">
            Not sure where to start?
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-serif text-4xl md:text-5xl text-[#FDFCFB] leading-snug">
            Let&rsquo;s have a quick conversation.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="text-[#FDFCFB]/70 text-lg max-w-lg leading-relaxed">
            Buying or selling — or just thinking about it. Avi is happy to talk through where you
            are and what might make sense, with no pressure and no commitment.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/buy"
              className="px-8 py-3.5 bg-[#C5A267] text-[#060B13] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#d4b27a] transition-colors duration-200"
            >
              I&rsquo;m Looking to Buy
            </Link>
            <Link
              href="/sell"
              className="px-8 py-3.5 border border-[#FDFCFB]/40 text-[#FDFCFB] text-[11px] tracking-[0.2em] uppercase hover:border-[#C5A267] hover:text-[#C5A267] transition-colors duration-200"
            >
              I&rsquo;m Looking to Sell
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
