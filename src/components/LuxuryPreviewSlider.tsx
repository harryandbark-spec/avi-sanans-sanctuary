"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ListingCard, Listing } from "./ListingCard";
import { ACTIVE_LISTINGS } from "@/lib/listings";
import { PropertyDetailModal } from "./PropertyDetailModal";

export function LuxuryPreviewSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-6 border-b border-[var(--hairline)] pb-6">
        <div className="space-y-3">
          <p className="font-sans text-[10px] tracking-[0.32em] uppercase text-[var(--gold)]">
            Current Listings
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--cream)] leading-tight max-w-xl">
            Homes available across the Lower Mainland.
          </h2>
        </div>
        <div className="hidden md:flex gap-4">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous listing"
            className="flex items-center justify-center w-[46px] h-[46px] border border-[var(--hairline)] text-[var(--cream)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:opacity-30 disabled:hover:border-[var(--hairline)] disabled:hover:text-[var(--cream)] disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next listing"
            className="flex items-center justify-center w-[46px] h-[46px] border border-[var(--hairline)] text-[var(--cream)] transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:opacity-30 disabled:hover:border-[var(--hairline)] disabled:hover:text-[var(--cream)] disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        ref={scrollRef}
        onScroll={checkScroll}
      >
        <div className="flex gap-6 lg:gap-8 pb-4" style={{ width: "max-content" }}>
          {ACTIVE_LISTINGS.map((l) => (
            <div
              key={l.id}
              className="snap-start w-[85vw] sm:w-[60vw] md:w-[350px] lg:w-[420px] shrink-0"
            >
              <ListingCard listing={l} onSelect={() => setSelectedListing(l)} />
            </div>
          ))}
        </div>
      </div>

      <PropertyDetailModal
        open={!!selectedListing}
        onClose={() => setSelectedListing(null)}
        listing={selectedListing}
      />

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
