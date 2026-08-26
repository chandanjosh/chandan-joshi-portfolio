import { aboutContent } from "../data/about";
import Seo from "../components/ui/Seo";
import Eyebrow from "../components/ui/Eyebrow";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import ImageReveal from "../components/ui/ImageReveal";

export default function About() {
  return (
    <div>
      <Seo title="About" description={aboutContent.intro} />

      <section className="mx-auto max-w-content px-6 pt-16 md:px-10 md:pt-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-4 font-serif text-4xl italic leading-tight text-ink md:text-6xl">
                {aboutContent.intro}
              </h1>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <ImageReveal trigger="mount" className="aspect-[4/5] w-full bg-line">
              <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
                Your Photo Here
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>Background</Eyebrow>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.05}>
              <p className="text-lg leading-relaxed text-ink-soft">{aboutContent.background}</p>
              <p className="mt-6 font-serif text-2xl italic text-ink">{aboutContent.philosophy}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <SectionHeading eyebrow="Experience" title="A short timeline" />
          <div className="mt-16 flex flex-col">
            {aboutContent.experience.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-2 border-t border-line py-8 md:grid-cols-12 md:items-baseline">
                  <div className="font-mono text-sm text-moss md:col-span-2">{item.year}</div>
                  <div className="font-serif text-2xl italic text-ink md:col-span-4">{item.title}</div>
                  <div className="text-ink-soft md:col-span-6">{item.description}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <Reveal>
              <Eyebrow>Skills</Eyebrow>
              <div className="mt-6 flex flex-col gap-6">
                {Object.entries(aboutContent.skills).map(([category, items]) => (
                  <div key={category}>
                    <div className="text-sm font-medium text-ink">{category}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <Eyebrow>Tools</Eyebrow>
              <div className="mt-6 flex flex-col gap-2">
                {aboutContent.tools.map((tool) => (
                  <div key={tool} className="text-ink-soft">
                    {tool}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>Industries</Eyebrow>
              <div className="mt-6 flex flex-col gap-2">
                {aboutContent.industries.map((industry) => (
                  <div key={industry} className="text-ink-soft">
                    {industry}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
