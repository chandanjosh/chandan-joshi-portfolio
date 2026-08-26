import type { Testimonial as TestimonialType } from "../../data/testimonials";
import Reveal from "../ui/Reveal";

export default function Testimonial({ testimonial, delay = 0 }: { testimonial: TestimonialType; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full flex-col justify-between border border-line p-8">
        <p className="font-serif text-xl italic leading-relaxed text-ink">&ldquo;{testimonial.quote}&rdquo;</p>
        <div className="mt-8">
          <div className="text-sm font-medium text-ink">{testimonial.name}</div>
          <div className="font-mono text-xs text-ink-soft">{testimonial.role}</div>
        </div>
      </div>
    </Reveal>
  );
}
