import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  /** "mount" plays immediately (use for the hero image); "scroll" plays once in view. */
  trigger?: "mount" | "scroll";
  className?: string;
}

const imageVariants = {
  hidden: { scale: 1.08, opacity: 0.4 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

const curtainVariants = {
  hidden: { scaleY: 1 },
  visible: { scaleY: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
};

/** A premium "curtain" reveal — an ink-colored panel slides away to uncover the image. */
export default function ImageReveal({ children, trigger = "scroll", className = "" }: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
  }

  if (trigger === "mount") {
    return (
      <motion.div className={`relative overflow-hidden ${className}`} initial="hidden" animate="visible">
        <motion.div className="h-full w-full" variants={imageVariants}>{children}</motion.div>
        <motion.div
          variants={curtainVariants}
          className="absolute inset-0 bg-ink"
          style={{ transformOrigin: "bottom" }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="h-full w-full" variants={imageVariants}>{children}</motion.div>
      <motion.div
        variants={curtainVariants}
        className="absolute inset-0 bg-ink"
        style={{ transformOrigin: "bottom" }}
      />
    </motion.div>
  );
}
