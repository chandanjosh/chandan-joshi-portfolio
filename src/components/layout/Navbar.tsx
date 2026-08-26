import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { useScrolled } from "../../hooks/useScrolled";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileImageError, setProfileImageError] = useState(false);
  const scrolled = useScrolled(24);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-t-2 border-b border-coral/70 bg-paper/90 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-content items-center justify-between gap-6 px-6 md:px-10">
          <Link to="/" className="group flex shrink-0 items-center gap-3 rounded-full bg-white/60 py-1.5 pl-1.5 pr-4 text-ink transition-colors hover:bg-coral-soft/60">
            {siteConfig.profileImage && !profileImageError ? (
              <img
                src={siteConfig.profileImage}
                alt=""
                className="h-9 w-9 rounded-full object-cover ring-2 ring-coral/20 transition-transform duration-300 group-hover:scale-105"
                onError={() => setProfileImageError(true)}
              />
            ) : (
              <span className="h-2.5 w-2.5 rounded-full bg-coral transition-transform duration-300 group-hover:scale-125" />
            )}
            <span className="flex flex-col">
              <span className="font-sans text-sm font-bold leading-tight tracking-[-0.02em]">{siteConfig.name}</span>
              <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-ink-soft sm:block">
                {siteConfig.role}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative py-2 font-sans text-xs font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-coral after:transition-all after:content-[''] ${
                    isActive ? "text-ink after:w-full" : "text-ink-soft after:w-0 hover:text-ink hover:after:w-full"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" />
              Available for work
            </span>
            <Button to="/contact" variant="primary" className="!bg-ink !px-5 !py-2.5 text-xs hover:!bg-coral">
              Let's Talk <ArrowUpRight size={15} />
            </Button>
          </div>

          <button
            className="rounded-full border border-line p-2 text-ink transition-colors hover:border-coral hover:text-coral md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
