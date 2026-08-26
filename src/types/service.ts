export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  helpWith: string[];
  technologies: string[];
  /** Slugs of related projects in projects.ts */
  relatedProjectSlugs: string[];
}
