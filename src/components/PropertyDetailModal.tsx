"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Listing } from "./ListingCard";
import { PlaceholderFrame } from "./PlaceholderFrame";

type Props = {
  open: boolean;
  onClose: () => void;
  listing: Listing | null;
};

export function PropertyDetailModal({ open, onClose, listing }: Props) {
  const [mounted, setMounted] = useState(false);
  const [viewingType, setViewingType] = useState<"in-person" | "virtual">("in-person");
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [submittedViewing, setSubmittedViewing] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open || !mounted || !listing) return null;

  const dates = Array.from({ length: 6 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      index: i,
      dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
      dateNum: d.getDate(),
    };
  });

  const handleViewingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedViewing(true);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedInquiry(true);
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="relative w-full h-full md:w-[95vw] md:h-[95vh] md:max-w-6xl bg-[var(--surface-2)] border border-[var(--hairline)] md:shadow-2xl overflow-hidden flex flex-col">
        {/* Header Bar */}
        <div className="flex-none h-16 border-b border-[var(--hairline)] flex items-center justify-between px-6 bg-[var(--surface)]">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--gold)]">
            {listing.location}
          </p>
          <button
            onClick={onClose}
            className="text-[var(--muted-text)] hover:text-[var(--gold)] transition-colors p-2"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col md:flex-row h-full">
            {/* Left Column: Gallery & Details */}
            <div className="w-full md:w-3/5 border-r border-[var(--hairline)] flex flex-col">
              {/* Main Gallery Placeholder */}
              <div className="relative w-full aspect-[4/3] bg-[var(--surface)] border-b border-[var(--hairline)]">
                <PlaceholderFrame
                  ratio="4/3"
                  label={`GALLERY: ${listing.region.toUpperCase()}`}
                  description="Primary architectural perspective."
                  className="border-0"
                />
                <div className="absolute bottom-4 right-4 bg-[var(--surface-2)] border border-[var(--hairline)] px-3 py-1">
                  <span className="font-sans text-[10px] tracking-widest text-[var(--gold)]">
                    1 / 24 PHOTOS
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex border-b border-[var(--hairline)] bg-[var(--surface-2)] h-20 overflow-hidden">
                {[1, 2, 3, 4, 5].map((t) => (
                  <div
                    key={t}
                    className="flex-1 border-r border-[var(--hairline)] opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <PlaceholderFrame ratio="16/9" label="" className="border-0 scale-110" />
                  </div>
                ))}
              </div>

              <div className="p-8 space-y-12">
                {/* Stats Header */}
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[var(--cream)] mb-2">
                    {listing.location}
                  </h2>
                  <p className="font-sans text-sm tracking-widest uppercase text-[var(--gold)] mb-6">
                    {listing.region}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-[var(--hairline)] py-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--muted-text)] mb-1">
                        List Price
                      </p>
                      <p className="font-serif text-xl text-[var(--cream)]">Price Upon Request</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--muted-text)] mb-1">
                        Status
                      </p>
                      <p className="font-serif text-xl text-[var(--cream)]">
                        {listing.status ?? "Active"}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] uppercase tracking-widest text-[var(--muted-text)] mb-1">
                        Specifications
                      </p>
                      <p className="font-serif text-xl text-[var(--cream)]">{listing.attributes}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="font-serif italic text-lg text-[var(--muted-text)] leading-relaxed">
                    "{listing.description}"
                  </p>
                  <p className="mt-4 font-sans text-sm text-[var(--cream)]/70 leading-loose">
                    A rare offering in the market, this property exemplifies modern luxury with
                    meticulous attention to detail. The open-plan layout seamlessly integrates
                    indoor and outdoor living spaces, perfect for entertaining. Floor-to-ceiling
                    glazing provides abundant natural light and frames the surrounding landscape.
                  </p>
                </div>

                {/* Specs Grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--gold)] border-b border-[var(--hairline)] pb-2 mb-4">
                      Property Details
                    </h4>
                    <ul className="space-y-3 font-sans text-sm text-[var(--cream)]">
                      <li className="flex justify-between">
                        <span className="text-[var(--muted-text)]">Year Built</span>
                        <span>2022</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[var(--muted-text)]">Lot Size</span>
                        <span>12,450 sqft</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[var(--muted-text)]">Property Type</span>
                        <span>Single Family</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[var(--muted-text)]">Tax Amount</span>
                        <span>$14,200 (2025)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--gold)] border-b border-[var(--hairline)] pb-2 mb-4">
                      Construction & Systems
                    </h4>
                    <ul className="space-y-3 font-sans text-sm text-[var(--cream)]">
                      <li className="flex justify-between">
                        <span className="text-[var(--muted-text)]">Foundation</span>
                        <span>Poured Concrete</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[var(--muted-text)]">Heating</span>
                        <span>Radiant Floor</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[var(--muted-text)]">Cooling</span>
                        <span>Central Air</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-[var(--muted-text)]">Exterior</span>
                        <span>Stone / Wood</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h4 className="font-sans text-xs tracking-widest uppercase text-[var(--gold)] border-b border-[var(--hairline)] pb-2 mb-4">
                    Features & Amenities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Gourmet Kitchen",
                      "Wine Cellar",
                      "Home Theatre",
                      "Infinity Pool",
                      "Smart Home Integration",
                      "Heated Driveway",
                    ].map((amenity) => (
                      <span
                        key={amenity}
                        className="px-3 py-1 border border-[var(--hairline)] text-[11px] uppercase tracking-widest text-[var(--cream)]"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Widgets */}
            <div className="w-full md:w-2/5 bg-[var(--surface)] p-8 space-y-12">
              {/* Viewing Widget */}
              <div className="bg-[var(--surface-2)] border border-[var(--hairline)] p-6">
                <h3 className="font-serif text-2xl text-[var(--cream)] mb-6">
                  Schedule a Private Viewing
                </h3>
                {submittedViewing ? (
                  <div className="text-center py-8">
                    <p className="text-[var(--gold)] font-serif italic text-xl mb-2">
                      Request Received
                    </p>
                    <p className="text-sm text-[var(--muted-text)]">
                      We will contact you shortly to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleViewingSubmit} className="space-y-6">
                    <div className="flex border border-[var(--hairline)] p-1">
                      <button
                        type="button"
                        onClick={() => setViewingType("in-person")}
                        className={`flex-1 py-2 text-[10px] tracking-widest uppercase transition-colors ${viewingType === "in-person" ? "bg-[var(--gold)] text-[var(--bg)] font-semibold" : "text-[var(--muted-text)] hover:text-[var(--cream)]"}`}
                      >
                        In-Person
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewingType("virtual")}
                        className={`flex-1 py-2 text-[10px] tracking-widest uppercase transition-colors ${viewingType === "virtual" ? "bg-[var(--gold)] text-[var(--bg)] font-semibold" : "text-[var(--muted-text)] hover:text-[var(--cream)]"}`}
                      >
                        Virtual
                      </button>
                    </div>

                    <div>
                      <p className="text-xs text-[var(--muted-text)] mb-2 uppercase tracking-widest">
                        Select Date
                      </p>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {dates.map((d) => (
                          <button
                            key={d.index}
                            type="button"
                            onClick={() => setSelectedDate(d.index)}
                            className={`flex-none w-14 h-16 flex flex-col items-center justify-center border transition-colors ${selectedDate === d.index ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--bg)]" : "border-[var(--hairline)] text-[var(--cream)] hover:border-[var(--gold-bright)]"}`}
                          >
                            <span className="text-[10px] uppercase tracking-widest">
                              {d.dayName}
                            </span>
                            <span className="text-lg font-serif">{d.dateNum}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-[var(--muted-text)] mb-2 uppercase tracking-widest">
                        Time of Day
                      </p>
                      <select
                        required
                        className="w-full bg-[var(--surface)] border border-[var(--hairline)] text-[var(--cream)] p-3 text-sm focus:outline-none focus:border-[var(--gold)]"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                      >
                        <option value="">Select a time...</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 7PM)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[var(--bg)] border border-[var(--hairline)] text-[var(--gold)] px-6 py-4 text-[11px] tracking-[0.3em] uppercase font-semibold transition-colors hover:bg-[var(--gold)] hover:text-[var(--bg)] hover:border-[var(--gold)]"
                    >
                      Request Appointment
                    </button>
                  </form>
                )}
              </div>

              {/* Agent Inquiry */}
              <div className="border border-[var(--hairline)] p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--surface-2)] border border-[var(--hairline)] flex items-center justify-center">
                    <span className="font-serif italic text-[var(--gold)]">AS</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm tracking-widest uppercase text-[var(--cream)]">
                      Avi Sanan
                    </p>
                    <p className="text-xs text-[var(--muted-text)]">Principal Advisor</p>
                  </div>
                </div>
                {submittedInquiry ? (
                  <div className="text-center py-4">
                    <p className="text-[var(--gold)] font-serif italic text-lg mb-1">
                      Message Sent
                    </p>
                    <p className="text-xs text-[var(--muted-text)]">
                      Avi will reach out to you directly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full bg-transparent border-b border-[var(--hairline)] text-[var(--cream)] p-2 text-sm focus:outline-none focus:border-[var(--gold)]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full bg-transparent border-b border-[var(--hairline)] text-[var(--cream)] p-2 text-sm focus:outline-none focus:border-[var(--gold)]"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      required
                      className="w-full bg-transparent border-b border-[var(--hairline)] text-[var(--cream)] p-2 text-sm focus:outline-none focus:border-[var(--gold)]"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-[var(--surface-2)] border border-[var(--hairline)] text-[var(--cream)] px-6 py-3 text-[10px] tracking-[0.2em] uppercase transition-colors hover:text-[var(--gold)] hover:border-[var(--gold)]"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
