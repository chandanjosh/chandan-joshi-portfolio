import { motion } from "framer-motion";
import { projectCategories } from "../../data/projects";

interface ProjectFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {projectCategories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className="relative rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-paper" : "text-ink-soft hover:text-ink"}`}>
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}
