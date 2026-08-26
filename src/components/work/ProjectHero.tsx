import type { Project } from "../../types/project";
import Eyebrow from "../ui/Eyebrow";
import ImageReveal from "../ui/ImageReveal";
import Reveal from "../ui/Reveal";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-content px-6 pt-14 md:px-10 md:pt-20">
      <Reveal>
        <Eyebrow>{project.categories.join(" · ")}</Eyebrow>
        <h1 className="mt-4 font-serif text-5xl italic leading-[1.05] text-ink md:text-7xl">
          {project.title}
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-6 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
          <div>
            <div className="text-ink/50">Client</div>
            <div className="mt-1 text-ink">{project.client}</div>
          </div>
          <div>
            <div className="text-ink/50">Industry</div>
            <div className="mt-1 text-ink">{project.industry}</div>
          </div>
          <div>
            <div className="text-ink/50">Year</div>
            <div className="mt-1 text-ink">{project.year}</div>
          </div>
          <div>
            <div className="text-ink/50">Services</div>
            <div className="mt-1 text-ink">{project.services.join(", ")}</div>
          </div>
        </div>
      </Reveal>

      <div className="mt-14">
        <ImageReveal trigger="mount" className="aspect-[16/9] w-full">
          <img src={project.heroImage} alt={project.heroImageAlt} className="h-full w-full object-cover" />
        </ImageReveal>
      </div>
    </div>
  );
}
