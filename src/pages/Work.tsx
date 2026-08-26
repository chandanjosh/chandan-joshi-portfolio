import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types/project";
import Seo from "../components/ui/Seo";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectFilter from "../components/work/ProjectFilter";
import ProjectGrid from "../components/work/ProjectGrid";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory as ProjectCategory));
  }, [activeCategory]);

  return (
    <div>
      <Seo
        title="Selected Work"
        description="Shopify development, custom theme, ecommerce, CRO, and performance work."
      />

      <div className="mx-auto max-w-content px-6 pt-16 md:px-10 md:pt-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          description="Full case studies from recent Shopify projects — filter by the kind of work you're looking for."
        />
        <div className="mt-12">
          <ProjectFilter active={activeCategory} onChange={setActiveCategory} />
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        {filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} layout="uniform" />
        ) : (
          <p className="text-ink-soft">No projects in this category yet.</p>
        )}
      </div>
    </div>
  );
}
