import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

type PageHeroProps = {
  image: string;
  alt?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  align?: "center" | "left";
  minHeight?: string;
};

export function PageHero({
  image,
  alt = "",
  eyebrow,
  title,
  description,
  children,
  align = "left",
  minHeight = "min-h-[55vh] md:min-h-[65vh]",
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <div className={`relative overflow-hidden flex items-center ${minHeight}`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-[#060B13]/65" />

      <SectionShell className="relative z-10 w-full py-16 md:py-24">
        <div
          className={
            centered
              ? "max-w-3xl mx-auto text-center space-y-6 md:space-y-8"
              : "max-w-2xl space-y-6 md:space-y-8"
          }
        >
          {eyebrow && (
            <Reveal>
              <p className="text-[10px] md:text-xs tracking-[0.32em] uppercase text-[#C5A267] font-semibold">
                {eyebrow}
              </p>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h1
              className="font-serif text-[#FDFCFB] leading-[1.08] font-normal"
              style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            >
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={160}>
              <p
                className={
                  centered
                    ? "text-sm md:text-base text-[#FDFCFB]/80 leading-relaxed max-w-[58ch] mx-auto"
                    : "text-sm md:text-base text-[#FDFCFB]/75 leading-relaxed max-w-[60ch]"
                }
              >
                {description}
              </p>
            </Reveal>
          )}
          {children && <Reveal delay={240}>{children}</Reveal>}
        </div>
      </SectionShell>
    </div>
  );
}
