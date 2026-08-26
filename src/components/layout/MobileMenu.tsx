import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [profileImageError, setProfileImageError] = useState(false);
  useLockBodyScroll(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-paper"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-[4.5rem] items-center justify-between border-b border-line px-6">
            <span className="flex items-center gap-3 rounded-full bg-white/60 py-1.5 pl-1.5 pr-4 font-sans text-sm font-bold tracking-[-0.02em]">
              {siteConfig.profileImage && !profileImageError ? (
                <img
                  src={siteConfig.profileImage}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-coral/20"
                  onError={() => setProfileImageError(true)}
                />
              ) : (
                <span className="h-2.5 w-2.5 rounded-full bg-coral" />
              )}
              <span className="flex flex-col">
                <span>{siteConfig.name}</span>
                <span className="font-mono text-[9px] font-normal uppercase tracking-[0.12em] text-ink-soft">
                  {siteConfig.role}
                </span>
              </span>
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full border border-line p-2 text-ink transition-colors hover:border-coral hover:text-coral"
            >
              <X size={24} />
            </button>
          </div>

          <motion.nav
            className="flex flex-1 flex-col justify-center gap-4 px-6"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {siteConfig.nav.map((item) => (
              <motion.div key={item.to} variants={itemVariants}>
                <Link to={item.to} onClick={onClose} className="font-serif text-5xl text-ink transition-colors hover:text-coral">
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants}>
              <Link to="/contact" onClick={onClose} className="font-serif text-5xl text-coral transition-colors hover:text-ink">
                Contact
              </Link>
            </motion.div>
          </motion.nav>

          <motion.div variants={itemVariants} className="px-6 pb-10 font-mono text-xs text-ink-soft">
            {siteConfig.email}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
