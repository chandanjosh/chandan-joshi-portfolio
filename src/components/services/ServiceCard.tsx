import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import type { Service } from "../../types/service";
import { getProjectBySlug } from "../../data/projects";

interface ServiceCardProps {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceCard({ service, index, isOpen, onToggle }: ServiceCardProps) {
  const relatedProjects = service.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-8 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-6">
          <span className="font-mono text-xs text-ink-soft">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-serif text-2xl italic text-ink md:text-3xl">{service.title}</span>
        </div>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus size={20} className="text-ink-soft" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="text-ink-soft">{service.shortDescription}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {service.helpWith.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3">
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">Technologies</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">Related Work</div>
                <div className="mt-4 flex flex-col gap-3">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/work/${project.slug}`}
                      className="text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-moss"
                    >
                      {project.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
