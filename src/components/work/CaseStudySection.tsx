import type { ReactNode } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

interface CaseStudySectionProps {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function CaseStudySection({ eyebrow, title, children, className = "" }: CaseStudySectionProps) {
  return (
    <section className={`mx-auto max-w-content px-6 py-14 md:px-10 md:py-20 ${className}`}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <h2 className="mt-3 font-serif text-3xl italic text-ink">{title}</h2>}
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.05}>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}
