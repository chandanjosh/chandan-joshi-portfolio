import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

interface CTAProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryTo: string;
}

export default function CTA({ title, description, primaryLabel, primaryTo }: CTAProps) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-24 text-center md:px-10 md:py-32">
        <Reveal>
          <h2 className="font-serif text-4xl italic text-ink md:text-6xl">{title}</h2>
          {description && <p className="mx-auto mt-6 max-w-md text-lg text-ink-soft">{description}</p>}
          <div className="mt-10">
            <Button to={primaryTo} variant="primary">
              {primaryLabel} <ArrowUpRight size={16} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
