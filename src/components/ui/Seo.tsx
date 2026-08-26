import { useEffect } from "react";
import { siteConfig } from "../../data/siteConfig";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

/** Sets the document title and meta/OG tags for the current page. */
export default function Seo({ title, description, image }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} — ${siteConfig.name}`;
    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");

    if (image) {
      setMetaTag("property", "og:image", image);
    }
  }, [title, description, image]);

  return null;
}
