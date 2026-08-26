import { useState } from "react";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesList() {
  const [openSlug, setOpenSlug] = useState<string | null>(services[0]?.slug ?? null);

  return (
    <div className="border-t border-line">
      {services.map((service, index) => (
        <ServiceCard
          key={service.slug}
          service={service}
          index={index}
          isOpen={openSlug === service.slug}
          onToggle={() => setOpenSlug(openSlug === service.slug ? null : service.slug)}
        />
      ))}
    </div>
  );
}
