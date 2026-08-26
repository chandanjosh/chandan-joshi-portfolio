# Shopify Developer Portfolio

A premium, editorial-style portfolio site for a freelance Shopify developer, built with
React, TypeScript, Vite, Tailwind CSS, React Router, and Framer Motion.

**Everything in this project is placeholder content** — your name, bio, case studies,
services, and images all need to be replaced with your real information before this
goes live. See "Replacing placeholder content" below.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. In Vercel, choose **Add New... > Project**, import the repository, and keep the detected Vite settings:
  - Build command: `npm run build`
  - Output directory: `dist`
3. Deploy the project. The included `vercel.json` keeps direct visits to React Router routes working.
4. In the Vercel project, open **Settings > Domains**, add your GoDaddy domain, and copy the DNS records Vercel provides.
5. In GoDaddy, open **DNS > Manage DNS** for the domain:
  - Add or update the root `@` **A** record with the Vercel IP shown in Vercel.
  - Add or update the `www` **CNAME** record with the Vercel target shown in Vercel.
  - Remove conflicting old `@` or `www` records, if present.
6. Return to Vercel and wait for the domain status to show **Valid Configuration**. DNS changes can take time to propagate.

Use the exact DNS values shown in your Vercel project because they can change. Do not add DNS records for the nameservers unless Vercel specifically asks you to move DNS management.

`npm run build` runs a TypeScript check before building — if you introduce a type
error while editing, the build will fail with a clear message pointing at it.

## Routes

| Route              | Page                                      |
| ------------------ | ------------------------------------------ |
| `/`                 | Home — hero, selected work, process, testimonials |
| `/work`             | Full portfolio with category filtering    |
| `/work/:slug`       | Individual case study                     |
| `/about`            | Background, experience, skills            |
| `/services`         | Services offered, expandable detail       |
| `/contact`          | Contact form                              |

## Project structure

```
src/
  data/              ← ALL editable content lives here
    projects.ts        case studies (the most important file)
    services.ts         the 7 services listed on /services
    siteConfig.ts       name, nav, hero copy, contact copy
    about.ts             About page content
    process.ts           the 3-step "how I work" section
    testimonials.ts       client quotes

  types/             TypeScript interfaces for Project and Service

  components/
    layout/            Navbar, MobileMenu, Footer, page transition, scroll-to-top
    ui/                Button, SectionHeading, Eyebrow, Reveal, ImageReveal, Seo
    work/              ProjectCard, ProjectGrid, ProjectFilter, ProjectHero,
                        CaseStudySection, ProjectGallery, NextProject
    services/          ServicesList, ServiceCard (the expandable accordion)
    shared/            CTA, Testimonial

  pages/             one file per route (see table above)

  hooks/             useScrolled (navbar background), useLockBodyScroll (mobile menu)
```

## Adding a new case study

Open `src/data/projects.ts` and copy one of the existing project objects. Give it a
unique `slug` — that becomes the URL (`/work/your-slug`) — and fill in the rest:

```ts
{
  slug: "your-client-slug",
  title: "Client Name",
  client: "Client Name",
  year: "2026",
  industry: "e.g. Fashion",
  categories: ["Shopify", "CRO"],   // any of: Shopify, eCommerce, Redesign, Custom Development, CRO
  description: "One or two sentence summary shown on cards.",
  featured: true,                    // show on the homepage?
  heroImage: "https://your-image-url",
  heroImageAlt: "Descriptive alt text",
  gallery: [
    { src: "...", alt: "...", label: "Homepage" },
    // Product page, Collection page, Cart, Mobile experience, Custom functionality...
  ],
  services: ["Shopify Theme Development"],
  technologies: ["Shopify", "Liquid"],
  challenge: "What was the problem?",
  approach: "How did you solve it?",
  features: ["Feature one", "Feature two"],
  results: ["Qualitative outcome — no fabricated numbers unless they're real"],
  outcome: "Closing summary paragraph.",
}
```

That's it — no other file needs to change. The project automatically:
- appears on the homepage if `featured: true`
- appears in the `/work` index and respects category filtering
- gets its own `/work/your-client-slug` page with hero, gallery, and "next project" navigation

**On the `results` field:** keep this qualitative unless you have real, verifiable
metrics from the client. Don't invent conversion percentages or dollar figures for
demo purposes — the placeholder projects in this repo intentionally avoid that.

## Adding a new service

Same pattern in `src/data/services.ts` — copy an object, give it a unique `slug`,
list which existing project slugs it should link to under `relatedProjectSlugs`.

## Replacing placeholder content

1. **Images** — every image URL currently points to [Picsum](https://picsum.photos),
   a placeholder photo service, so the site looks complete out of the box. Replace
   `heroImage` and `gallery[].src` values in `src/data/projects.ts` with your real
   screenshots. The About page photo is a plain placeholder block in `src/pages/About.tsx`
   — swap it for an `<img>` tag pointing at a real photo.
2. **Identity & copy** — `src/data/siteConfig.ts` holds your name, email, social links,
   and hero copy. `src/data/about.ts` holds your bio, experience timeline, and skills.
3. **Case studies, services, testimonials** — see the sections above.
4. **Fonts/colors** — see below.

## Design system

Colors and fonts are defined once in `tailwind.config.js`:

```js
colors: { paper, ink, "ink-soft", line, moss, "moss-soft", coral, "coral-soft", sky, "sky-soft" }
fontFamily: { serif: "Fraunces", sans: "DM Sans", mono: "Space Mono" }
```

Change a value there and it updates everywhere (`bg-paper`, `text-ink`, `font-serif`, etc.).
Fonts are loaded via Google Fonts in `index.html`.

## Notes on what's implemented

- **Animated page transitions** via Framer Motion + `AnimatePresence`, respecting
  `prefers-reduced-motion` throughout (see `useReducedMotion` usage and the CSS
  media query in `src/index.css`).
- **Portfolio filtering** on `/work` with an animated active-pill indicator.
- **Contact form** with client-side validation (required fields, email format) and a
  polished success state. There's no backend wired up yet — `handleSubmit` in
  `src/pages/Contact.tsx` simulates a network request. To actually send messages,
  replace that `window.setTimeout` block with a real request to your form backend
  of choice (Formspree, Resend, your own API route, etc.).
- **Basic SEO** — the `<Seo>` component sets the document title and Open Graph tags
  per page. For crawlable meta tags (important if you care about link previews and
  SEO beyond what client-side JS provides), consider pairing this with a static-site
  or server-rendering approach later — Vite's plain SPA output won't have per-page
  meta tags in the initial HTML.
- **Accessibility** — visible focus states, labeled form fields with `aria-invalid`/
  `aria-describedby`, semantic headings, and reduced-motion support are in place
  throughout.
