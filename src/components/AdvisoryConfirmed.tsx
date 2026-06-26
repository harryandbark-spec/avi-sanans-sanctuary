export function AdvisoryConfirmed({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        "animate-fade-in bg-[#0A1221] border border-[#C5A267]/10 flex flex-col items-center text-center " +
        (compact ? "p-8 space-y-4" : "p-10 md:p-16 space-y-6")
      }
    >
      <svg viewBox="0 0 64 64" className={compact ? "w-12 h-12" : "w-16 h-16"} aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="none" stroke="#C5A267" strokeWidth="1" />
        <path
          d="M20 33 L29 42 L45 24"
          fill="none"
          stroke="#C5A267"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
      <h3
        className={"font-serif text-[#FDFCFB] " + (compact ? "text-2xl" : "text-3xl md:text-4xl")}
      >
        Inquiry Received
      </h3>
      <p className="max-w-[44ch] text-sm md:text-base text-[#FDFCFB]/70 leading-relaxed">
        Avi Sanan will respond within three hours via your preferred contact method.
      </p>
    </div>
  );
}
