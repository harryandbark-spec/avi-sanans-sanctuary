import { PlaceholderFrame } from "./PlaceholderFrame";

export type Listing = {
  id: string;
  location: string;
  region: string;
  attributes: string;
  description: string;
  status?: string;
};

export function ListingCard({
  listing,
  variant = "active",
  onSelect,
}: {
  listing: Listing;
  variant?: "active" | "sold";
  onSelect?: () => void;
}) {
  const cta = "VIEW PROPERTY";
  const tag = variant === "active" ? (listing.status ?? "ACTIVE") : "SOLD";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`View property details for ${listing.location}`}
      className="group block w-full text-left bg-[var(--surface-2)] border border-[var(--hairline)] transition-colors hover:border-[var(--gold-bright)]"
    >
      <div className="relative">
        <PlaceholderFrame
          ratio="16/10"
          label={listing.region.toUpperCase()}
          description={listing.description}
          className="border-0 border-b border-[var(--hairline)]"
        />
        <div className="absolute top-4 right-4 bg-[var(--surface)] border border-[var(--hairline)] px-3 py-1">
          <span className="font-sans text-[10px] tracking-widest uppercase text-[var(--gold)]">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-5 md:p-6 space-y-4 flex flex-col justify-between h-[220px]">
        <div>
          <h3 className="font-sans text-[12px] tracking-[0.2em] uppercase text-[var(--cream)] mb-2">
            {listing.location}
          </h3>
          <p className="text-[11px] uppercase tracking-widest text-[var(--muted-text)] font-sans">
            {listing.attributes}
          </p>
        </div>
        <div>
          <p className="font-serif italic text-lg text-[var(--cream)] mb-4">Price Upon Request</p>
          <div className="w-full inline-flex items-center justify-center bg-[var(--bg)] border border-[var(--hairline)] text-[var(--gold)] px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold transition-colors group-hover:bg-[var(--gold)] group-hover:text-[var(--bg)] group-hover:border-[var(--gold)]">
            {cta}
          </div>
        </div>
      </div>
    </button>
  );
}
