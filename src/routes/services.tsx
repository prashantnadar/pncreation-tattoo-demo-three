import { createFileRoute } from "@tanstack/react-router";
import { BtnAnchor, BtnLink } from "../components/Btn";
import { Reveal } from "../components/Reveal";
import { ArrowIcon } from "../components/Icons";
import { services, site, whatsappHref } from "../data/site";

const title = `Tattoo & Piercing Services in ${site.city} — Raw Ink`;
const description = `Custom tattoos, fine line, minimal, blackwork, realism, geometric, cover ups, touch ups, ear and body piercing in ${site.city}. Book a consultation with Raw Ink.`;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": services.map((s) => ({
            "@type": "Service",
            name: `${s.name} in ${site.city}`,
            serviceType: s.name,
            description: s.description,
            areaServed: site.city,
            provider: { "@type": "TattooShop", name: site.legalName },
          })),
        }),
      },
    ],
  }),
  component: Services,
});

const wrap = "mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-10";

function Services() {
  return (
    <>
      <section className="grid-bg noise border-b border-border">
        <div className={`${wrap} py-16 lg:py-24`}>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            Service directory
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,11vw,9rem)]">
            The <span className="text-accent">work</span> we do.
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            Tattoo and piercing services offered at our {site.city} studio. Every
            booking starts with a consultation — in person or over WhatsApp.
          </p>
        </div>
      </section>

      <section className={`${wrap} py-16 lg:py-24`}>
        <ul className="grid gap-px border border-border bg-border lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.04} className="bg-background">
              <li className="group flex h-full flex-col p-6 sm:p-10">
                <h2 className="text-[clamp(1.75rem,4.5vw,3rem)] transition-colors group-hover:text-accent">
                  {s.name}
                </h2>
                <span className="mt-4 block h-px w-12 bg-accent transition-all duration-500 group-hover:w-24" />
                <p className="mt-5 max-w-prose text-sm text-muted-foreground sm:text-base">
                  {s.description}
                </p>
                <p className="mt-5 text-sm">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                    Ideal for
                  </span>
                  <span className="mt-2 block text-muted-foreground">{s.idealFor}</span>
                </p>
                <div className="mt-auto pt-8">
                  <BtnLink to="/contact" variant="outline">
                    Book {s.name} Consultation <ArrowIcon className="h-4 w-4" />
                  </BtnLink>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap gap-3">
          <BtnAnchor href={whatsappHref} external>
            Ask on WhatsApp
          </BtnAnchor>
          <BtnLink to="/gallery" variant="outline">
            View Gallery
          </BtnLink>
        </div>
      </section>
    </>
  );
}
