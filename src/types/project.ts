export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export type ProjectCategory =
  | "Shopify"
  | "Shopify Plus"
  | "eCommerce"
  | "Store Redesign"
  | "Figma to Shopify"
  | "Performance"
  | "Redesign"
  | "Custom Development"
  | "CRO";

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  industry: string;
  categories: ProjectCategory[];
  description: string;
  featured: boolean;
  heroImage: string;
  heroImageAlt: string;
  gallery: GalleryImage[];
  services: string[];
  technologies: string[];
  challenge: string;
  approach: string;
  features: string[];
  /** Qualitative outcomes only — never fabricate metrics for a real client. */
  results: string[];
  outcome: string;
}
