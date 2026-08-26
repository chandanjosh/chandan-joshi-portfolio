import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import ImageReveal from "../ui/ImageReveal";

interface ProjectCardProps {
  project: Project;
  size?: "large" | "default";
}

export default function ProjectCard({ project, size = "default" }: ProjectCardProps) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <ImageReveal className={size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"}>
        <img
          src={project.heroImage}
          alt={project.heroImageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </ImageReveal>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className={`font-serif italic text-ink ${size === "large" ? "text-3xl" : "text-2xl"}`}>
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">
            {project.industry} · {project.year}
          </p>
        </div>
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 text-ink-soft transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-moss"
        />
      </div>
    </Link>
  );
}
