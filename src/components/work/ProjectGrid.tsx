import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  /** "editorial" alternates large/small sizing; "uniform" keeps every card the same size (used on /work). */
  layout?: "editorial" | "uniform";
}

export default function ProjectGrid({ projects, layout = "editorial" }: ProjectGridProps) {
  if (layout === "uniform") {
    return (
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  // Editorial layout: first project full width, then pairs, repeating.
  const [first, ...rest] = projects;

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {first && (
        <div>
          <ProjectCard project={first} size="large" />
        </div>
      )}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
