"use client";

import { useMemo, useState } from "react";

import { ListingCard } from "@/components/ListingCard";
import { IntakeForm } from "@/components/IntakeForm";
import { PropertyDetailModal } from "@/components/PropertyDetailModal";
import { vaultSchema } from "@/lib/schemas";
import { ACTIVE_LISTINGS, PAST_LISTINGS } from "@/lib/listings";
import { cn } from "@/lib/utils";

type Mode = "active" | "sold";

export default function ListingsPage() {
  const [mode, setMode] = useState<Mode>("active");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const items = useMemo(() => (mode === "active" ? ACTIVE_LISTINGS : PAST_LISTINGS), [mode]);

  return (
    <div className="flex flex-col lg:min-h-[calc(100dvh-80px)] border-t border-[var(--hairline)]">
      <div className="w-full flex flex-col bg-[var(--bg)]">
        <div className="sticky top-20 lg:top-0 z-10 bg-[#0A1221] border-b border-[#C5A267]/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Toggle active={mode === "active"} onClick={() => setMode("active")}>
              Active Collections
            </Toggle>
            <Toggle active={mode === "sold"} onClick={() => setMode("sold")}>
              Past Transactions
            </Toggle>
          </div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#FDFCFB]/60">
            Displaying {items.length} Signature Lower Mainland Holdings
          </p>
        </div>

        <div className="flex-1 p-6 space-y-12 bg-[var(--surface-2)]/30">
          <div
            key={mode}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
          >
            {items.map((l) => (
              <ListingCard
                key={l.id}
                listing={l}
                variant={mode === "active" ? "active" : "sold"}
                onSelect={() => setSelectedId(l.id)}
              />
            ))}
          </div>

          <div className="bg-[#0A1221] border border-[#C5A267]/10 p-6 lg:p-8 space-y-5">
            <h3 className="font-serif text-xl text-[#FDFCFB] leading-snug">
              Looking for unlisted inventory? The premier assets in West Vancouver change hands in
              private networks.
            </h3>
            <p className="text-xs text-[#FDFCFB]/70 leading-relaxed">
              Through active alignment with premium brokerages and localized investment circles, Avi
              Sanan secures private access to off-market residential holdings before they ever touch
              the public MLS system.
            </p>
            <IntakeForm
              schema={vaultSchema}
              submitLabel="Query Vault"
              compactSuccess
              layout="inline"
              fields={[
                {
                  name: "neighborhood",
                  label: "Target Neighborhood",
                  placeholder: "Enter your target neighborhood…",
                },
              ]}
            />
          </div>
        </div>
      </div>

      <PropertyDetailModal
        open={!!selectedId}
        onClose={() => setSelectedId(null)}
        listing={items.find((l) => l.id === selectedId) || null}
      />
    </div>
  );
}

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 px-5 text-[10px] tracking-[0.24em] uppercase border transition-colors",
        active
          ? "bg-[#0A1221] text-white border-[#C5A267]"
          : "bg-[#0A1221] text-[#FDFCFB]/70 border-[#C5A267]/15 hover:border-[#C5A267]",
      )}
    >
      {children}
    </button>
  );
}
