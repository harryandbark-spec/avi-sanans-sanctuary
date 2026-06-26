"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function RouteFade({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="animate-route-fade">
      {children}
    </div>
  );
}
