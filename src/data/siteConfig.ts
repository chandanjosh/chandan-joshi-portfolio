// Central site identity and copy. Edit this file to rebrand the site.
export const siteConfig = {
  name: "Chandan Joshi",
  profileImage: "/profile.jpg",
  role: "Senior Shopify Developer",
  experience: "13+ years",
  email: "",
  github: "",
  linkedin: "",
  twitter: "",

  nav: [
    { label: "Work", to: "/work" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
  ],

  hero: {
    eyebrow: "Senior Shopify Developer — 13+ years",
    headlineLines: ["Shopify experiences,", "built to perform."],
    subhead:
      "I build, customize, redesign, and optimize Shopify and Shopify Plus stores with a focus on UI/UX, conversion, performance, and business requirements.",
    primaryCta: { label: "View My Work", to: "/work" },
    secondaryCta: { label: "Let's Talk", to: "/contact" },
  },

  industryStrip: [
    "Shopify Development",
    "Shopify Plus",
    "Custom Themes",
    "Figma to Shopify",
    "CRO & Performance",
  ],

  contact: {
    headline: "Have a project in mind?",
    subhead: "Let's talk about what you're building and how I can help.",
  },

  footer: {
    description:
      "Senior Shopify Developer with 13+ years of experience building, customizing, and optimizing production-ready ecommerce experiences.",
    closingStatement: "Let's build a Shopify experience that works.",
  },
} as const;
