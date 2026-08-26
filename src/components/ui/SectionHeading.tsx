import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <div className="mb-4">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ink">{title}</h2>
        {description && (
          <p className="mt-4 text-lg text-ink-soft">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
