import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-6xl text-[#FDFCFB]">404</h1>
        <p className="mt-4 text-sm tracking-[0.22em] uppercase text-[#FDFCFB]/60">Page not found</p>
        <Link href="/" className="cta-navy mt-8 inline-block">
          Return Home
        </Link>
      </div>
    </div>
  );
}
