import Link from "next/link";

const TILES = [
  {
    label: "What's My Home Worth?",
    sub: "Get a free private valuation",
    href: "/sell",
    img: "/images/tile-home-worth.png",
  },
  {
    label: "Browse Listings",
    sub: "See available homes",
    href: "/listings",
    img: "/images/tile-listings.png",
  },
  {
    label: "Ready to Talk?",
    sub: "Book a private consultation",
    href: "/contact",
    img: "/images/tile-contact.png",
  },
];

export function QuickStartTiles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
      {TILES.map((tile) => (
        <Link
          key={tile.href}
          href={tile.href}
          className="group relative overflow-hidden"
          style={{ minHeight: "280px" }}
        >
          {/* Background photo */}
          <img
            src={tile.img}
            alt={tile.label}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Dark overlay — lifts slightly on hover */}
          <div className="absolute inset-0 bg-[#060B13]/55 group-hover:bg-[#060B13]/40 transition-colors duration-500" />
          {/* Gold bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C5A267]/40 group-hover:bg-[#C5A267]/80 transition-colors duration-500" />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-12 text-center gap-2">
            <p className="font-serif text-2xl md:text-3xl text-[#FDFCFB] leading-tight group-hover:text-[#C5A267] transition-colors duration-300">
              {tile.label}
            </p>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#FDFCFB]/60 group-hover:text-[#FDFCFB]/90 transition-colors duration-300">
              {tile.sub}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
