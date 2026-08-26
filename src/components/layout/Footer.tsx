import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-3 font-serif text-2xl italic">{siteConfig.name}</div>
            <p className="max-w-xs text-ink-soft">{siteConfig.footer.description}</p>
          </div>

          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">Navigate</div>
            <ul className="flex flex-col gap-2">
              <li><Link to="/work" className="hover:text-moss">Work</Link></li>
              <li><Link to="/about" className="hover:text-moss">About</Link></li>
              <li><Link to="/services" className="hover:text-moss">Services</Link></li>
              <li><Link to="/contact" className="hover:text-moss">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">Connect</div>
            <ul className="flex flex-col gap-2">
              {siteConfig.email && <li><a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-moss"><Mail size={14} /> {siteConfig.email}</a></li>}
              {siteConfig.github && <li><a href={siteConfig.github} className="inline-flex items-center gap-2 hover:text-moss"><Github size={14} /> GitHub</a></li>}
              {siteConfig.linkedin && <li><a href={siteConfig.linkedin} className="inline-flex items-center gap-2 hover:text-moss"><Linkedin size={14} /> LinkedIn</a></li>}
              {siteConfig.twitter && <li><a href={siteConfig.twitter} className="inline-flex items-center gap-2 hover:text-moss"><Twitter size={14} /> Twitter</a></li>}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="font-serif text-lg italic text-ink-soft">{siteConfig.footer.closingStatement}</p>
          <p className="font-mono text-xs text-ink-soft">© 2026 {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
