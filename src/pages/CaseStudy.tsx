import { useParams, Navigate } from "react-router-dom";
import { getProjectBySlug, projects } from "../data/projects";
import Seo from "../components/ui/Seo";
import ProjectHero from "../components/work/ProjectHero";
import CaseStudySection from "../components/work/CaseStudySection";
import ProjectGallery from "../components/work/ProjectGallery";
import NextProject from "../components/work/NextProject";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div>
      <Seo title={project.title} description={project.description} image={project.heroImage} />

      <ProjectHero project={project} />

      <CaseStudySection eyebrow="Overview" title="Project overview">
        <p className="text-lg leading-relaxed text-ink-soft">{project.description}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="The Challenge" title="Where it started">
        <p className="text-lg leading-relaxed text-ink-soft">{project.challenge}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="The Approach" title="How it was solved">
        <p className="text-lg leading-relaxed text-ink-soft">{project.approach}</p>
      </CaseStudySection>

      <div className="border-t border-line py-14 md:py-20">
        <div className="mx-auto mb-12 max-w-content px-6 md:px-10">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
            Design &amp; Development
          </span>
        </div>
        <ProjectGallery images={project.gallery} />
      </div>

      <CaseStudySection eyebrow="Key Features" title="What was built">
        <ul className="flex flex-col gap-4">
          {project.features.map((feature) => (
            <li key={feature} className="border-b border-line pb-4 text-ink-soft last:border-b-0">
              {feature}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection eyebrow="Results" title="What changed">
        <ul className="flex flex-col gap-3">
          {project.results.map((result) => (
            <li key={result} className="flex gap-3 text-ink-soft">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
              {result}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection eyebrow="Technologies" title="Built with">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-ink-soft">
              {tech}
            </span>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection eyebrow="Summary" title="Final summary">
        <p className="text-lg leading-relaxed text-ink-soft">{project.outcome}</p>
      </CaseStudySection>

      <NextProject project={nextProject} />
    </div>
  );
}
