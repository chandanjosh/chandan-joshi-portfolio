import Seo from "../components/ui/Seo";
import SectionHeading from "../components/ui/SectionHeading";
import ServicesList from "../components/services/ServicesList";
import CTA from "../components/shared/CTA";

export default function Services() {
  return (
    <div>
      <Seo
        title="Services"
        description="Shopify development, theme builds, redesigns, and conversion optimization for ecommerce brands."
      />

      <section className="mx-auto max-w-content px-6 pt-16 md:px-10 md:pt-24">
        <SectionHeading
          eyebrow="Services"
          title="What I can help with"
          description="Seven ways I typically work with brands — from a full store build to a focused conversion audit."
        />
      </section>

      <section className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <ServicesList />
      </section>

      <CTA
        title="Not sure which one fits?"
        description="Tell me what you're working with and I'll point you in the right direction."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
      />
    </div>
  );
}
