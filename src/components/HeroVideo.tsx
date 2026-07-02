"use client";
import React, { useEffect, useRef, useState } from "react";
import { SectionShell } from "@/components/SectionShell";
import LeadCaptureSection from "@/components/LeadCaptureSection";

export default function HeroVideo() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    let t: number | undefined;
    const show = () => {
      // small delay so video content is noticeable before the panel appears
      t = window.setTimeout(() => setVisible(true), 420);
    };

    if (v?.readyState && v.readyState >= 3) {
      show();
    } else {
      v?.addEventListener("canplay", show);
    }

    return () => {
      v?.removeEventListener("canplay", show);
      if (t) window.clearTimeout(t);
    };
  }, []);

  // Parallax / underlay scroll effect: slightly translate the video based on container position,
  // and subtly adjust the overlay darkness to give the impression the image is "under" the content.
  // Disable parallax: keep video and overlay static so the hero doesn't move on scroll.
  useEffect(() => {
    const v = videoRef.current;
    const o = overlayRef.current;
    if (v) {
      v.style.transform = "translate3d(0, 0, 0) scale(1.04)";
    }
    if (o) {
      o.style.background = "rgba(6,11,19,0.30)";
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hero-video"
      />
      <div ref={overlayRef} className="absolute inset-0 z-0 bg-[#060B13]/30" />

      <div className="relative z-10 w-full">
        <div
          className={`glass-panel max-w-2xl mx-auto p-8 md:p-12 text-center space-y-6 rounded-sm hero-overlay ${
            visible ? "hero-visible" : "hero-hidden"
          }`}
        >
          <div className="hero-stagger">
            <p className="text-xs md:text-sm tracking-[0.36em] uppercase text-[#C5A267] font-semibold">
              Vancouver · West Vancouver · Lower Mainland
            </p>
            <h1
              className="font-serif text-[#FDFCFB] leading-[1.05] font-normal"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              Helping you buy or sell the right home.
            </h1>
            <p className="text-sm md:text-base text-[#FDFCFB]/80 font-sans leading-relaxed max-w-[48ch] mx-auto">
              Local advice, honest guidance, and access to off‑market homes across Vancouver and the
              Lower Mainland.
            </p>
            <LeadCaptureSection />
          </div>
        </div>
      </div>
    </div>
  );
}
