import type { MouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Compass, Gauge, PanelsTopLeft } from "lucide-react";

import { siteConfig } from "../data/siteConfig";
import { getFeaturedProjects } from "../data/projects";
import { process } from "../data/process";

import Seo from "../components/ui/Seo";
import Eyebrow from "../components/ui/Eyebrow";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import ImageReveal from "../components/ui/ImageReveal";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectGrid from "../components/work/ProjectGrid";
import CTA from "../components/shared/CTA";

function HeroPreviewCard() {
  const featured = getFeaturedProjects(1)[0];
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  if (!featured) return null;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
      onMouseLeave={shouldReduceMotion ? undefined : handleMouseLeave}
      style={{ perspective: 1000 }}
      className="mx-auto w-full max-w-sm md:max-w-md"
    >
      <motion.div style={shouldReduceMotion ? undefined : { rotateX, rotateY }}>
        <Link to={`/work/${featured.slug}`} className="group block">
          <ImageReveal trigger="mount" className="aspect-[4/5] w-full">
            <img
              src={featured.heroImage}
              alt={featured.heroImageAlt}
              className="h-full w-full object-cover"
            />
          </ImageReveal>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                Featured Project
              </div>
              <div className="mt-1 font-serif text-xl italic text-ink">{featured.title}</div>
            </div>
            <ArrowUpRight
              size={20}
              className="text-ink-soft transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-moss"
            />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const featuredProjects = getFeaturedProjects(6);
  const shouldReduceMotion = useReducedMotion();
  const processIcons = [Compass, PanelsTopLeft, Gauge];

  return (
    <div>
      <Seo
        title="Shopify Developer for Ambitious Brands"
        description={siteConfig.hero.subhead}
      />

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>{siteConfig.hero.eyebrow}</Eyebrow>
            </Reveal>
            <h1 className="mt-6 font-serif text-5xl italic leading-[1.05] text-ink md:text-7xl">
              {siteConfig.hero.headlineLines.map((line, i) => (
                <Reveal key={line} delay={i * 0.08}>
                  <span className="block">{line}</span>
                </Reveal>
              ))}
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg text-ink-soft">{siteConfig.hero.subhead}</p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to={siteConfig.hero.primaryCta.to} variant="primary">
                  {siteConfig.hero.primaryCta.label} <ArrowRight size={16} />
                </Button>
                <Button to={siteConfig.hero.secondaryCta.to} variant="ghost">
                  {siteConfig.hero.secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <HeroPreviewCard />
          </div>
        </div>

        <div className="mt-20 hidden justify-center md:flex">
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-ink-soft"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]">Scroll</span>
            <ArrowDown size={14} />
          </motion.div>
        </div>
      </section>

      {/* Industry marquee */}
      <div className="overflow-hidden border-y border-line py-5">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...siteConfig.industryStrip, ...siteConfig.industryStrip].map((industry, i) => (
            <span
              key={i}
              className={`font-serif text-2xl italic ${i % 3 === 1 ? "text-sky/75" : i % 3 === 2 ? "text-coral/75" : "text-ink-soft/60"}`}
            >
              {industry}
            </span>
          ))}
        </div>
      </div>

      {/* Selected Work */}
      <section className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Portfolio" title="Selected Work" />
          <Reveal>
            <Link to="/work" className="font-mono text-xs uppercase tracking-[0.1em] text-ink-soft hover:text-moss">
              View all work →
            </Link>
          </Reveal>
        </div>
        <ProjectGrid projects={featuredProjects} layout="editorial" />
      </section>

      {/* Process */}
      <section className="border-t border-line bg-moss-soft/40">
        <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
          <SectionHeading
            eyebrow="Process"
            title="How I approach a project"
            description="A straightforward process built around visible progress, not a long silent handoff."
          />
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-soft text-coral">
                    {(() => {
                      const Icon = processIcons[i];
                      return <Icon size={19} strokeWidth={1.8} aria-hidden="true" />;
                    })()}
                  </div>
                  <div className="font-mono text-sm text-moss">{item.step}</div>
                </div>
                <h3 className="mt-4 font-serif text-2xl italic text-ink">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Let's build something that performs."
        description="Have a project in mind? I'd love to hear about it."
        primaryLabel="Start a Project"
        primaryTo="/contact"
      />
    </div>
  );
}
