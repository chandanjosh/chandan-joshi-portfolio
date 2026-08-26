import type { Service } from "../types/service";

export const services: Service[] = [
  {
    slug: "shopify-development",
    title: "Shopify Development",
    shortDescription: "Building and customizing Shopify stores with a focus on usability, scalability, performance, and conversion.",
    helpWith: [
      "Custom storefront development",
      "Responsive layouts",
      "Shopify theme customization",
      "Production-ready implementation",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Shopify APIs"],
    relatedProjectSlugs: ["salt-and-soil", "rossocaffe"],
  },
  {
    slug: "shopify-plus-development",
    title: "Shopify Plus Development",
    shortDescription: "Development and customization for Shopify Plus stores and advanced ecommerce requirements.",
    helpWith: [
      "Advanced storefront requirements",
      "Custom business logic",
      "Scalable theme architecture",
      "Shopify Plus implementation",
    ],
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "Shopify APIs"],
    relatedProjectSlugs: ["rossocaffe"],
  },
  {
    slug: "custom-theme-development",
    title: "Custom Theme Development",
    shortDescription: "Creating custom Shopify themes and unique layouts instead of relying on generic templates.",
    helpWith: [
      "Custom Shopify themes",
      "Custom sections and features",
      "Figma and Adobe XD implementation",
      "Responsive development",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript"],
    relatedProjectSlugs: ["salt-and-soil", "rossocaffe"],
  },
  {
    slug: "custom-shopify-features",
    title: "Custom Shopify Features",
    shortDescription: "Building custom sections, product experiences, applications, and interactions around project requirements.",
    helpWith: [
      "Custom product pages",
      "Subscription functionality",
      "ZIP-code based logic",
      "Custom Shopify apps",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Shopify APIs"],
    relatedProjectSlugs: ["salt-and-soil", "rossocaffe"],
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    shortDescription:
      "Structured audits of the homepage, product pages, cart, and checkout to find and fix what's costing you sales.",
    helpWith: [
      "Full-funnel audits with a prioritized list of findings",
      "Checkout and cart flow simplification",
      "Product page restructuring around the purchase decision",
      "Ongoing testing and iteration after launch",
    ],
    technologies: ["Shopify", "JavaScript", "UX analysis"],
    relatedProjectSlugs: ["levion-tech", "axiology-beauty"],
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    shortDescription:
      "Faster load times through image optimization, script auditing, and theme-level performance work.",
    helpWith: [
      "Core Web Vitals and Shopify speed score improvements",
      "Image pipeline and lazy-loading setup",
      "Auditing and trimming third-party scripts and apps",
      "Mobile performance tuning",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript"],
    relatedProjectSlugs: ["levion-tech", "salt-and-soil"],
  },
  {
    slug: "third-party-integrations",
    title: "API & Third-party Integrations",
    shortDescription: "Connecting Shopify stores with external systems, APIs, applications, and business workflows.",
    helpWith: [
      "REST/API integrations",
      "Inventory applications",
      "Variant synchronization",
      "Store automation",
    ],
    technologies: ["Shopify APIs", "JavaScript", "Automation", "Custom business logic"],
    relatedProjectSlugs: ["rossocaffe"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
