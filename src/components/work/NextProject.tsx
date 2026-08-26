import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import Reveal from "../ui/Reveal";

export default function NextProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <Link
        to={`/work/${project.slug}`}
        className="group mx-auto flex max-w-content flex-col items-start justify-between gap-6 border-t border-line px-6 py-16 md:flex-row md:items-center md:px-10 md:py-24"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">Next Project</span>
          <h3 className="mt-3 font-serif text-4xl italic text-ink md:text-6xl">{project.title}</h3>
        </div>
        <ArrowUpRight
          size={32}
          className="shrink-0 text-ink-soft transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-moss"
        />
      </Link>
    </Reveal>
  );
}
