import type { GalleryImage } from "../../types/project";
import ImageReveal from "../ui/ImageReveal";

function chunkPattern<T>(items: T[]): T[][] {
  const groups: T[][] = [];
  let i = 0;
  let big = true;
  while (i < items.length) {
    if (big) {
      groups.push([items[i]]);
      i += 1;
    } else {
      groups.push(items.slice(i, i + 2));
      i += 2;
    }
    big = !big;
  }
  return groups;
}

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const groups = chunkPattern(images);

  return (
    <div className="mx-auto max-w-content px-6 md:px-10">
      <div className="flex flex-col gap-16">
        {groups.map((group, gi) => (
          <div key={gi} className={group.length === 1 ? "" : "grid grid-cols-1 gap-8 md:grid-cols-2"}>
            {group.map((image) => (
              <figure key={image.src}>
                <ImageReveal className="aspect-[16/10] w-full">
                  <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
                </ImageReveal>
                <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-ink-soft">
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
