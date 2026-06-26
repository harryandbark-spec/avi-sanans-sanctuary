"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="font-serif text-3xl text-[#FDFCFB]">This page didn't load</h1>
        <p className="text-sm text-[#FDFCFB]/70">Try refreshing or return home.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="cta-navy">
            Try again
          </button>
          <a href="/" className="cta-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
