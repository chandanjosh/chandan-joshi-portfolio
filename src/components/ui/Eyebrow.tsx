import type { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs tracking-[0.18em] uppercase text-ink-soft">
      {children}
    </span>
  );
}
