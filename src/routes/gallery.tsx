import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { BtnLink } from "../components/Btn";
import { galleryFilters, galleryItems, site } from "../data/site";

const title = `Tattoo Gallery — Fine Line, Blackwork & Realism in ${site.city}`;
const description = `Browse recent tattoo and piercing work from Raw Ink in ${site.city}: fine line, blackwork, realism, custom tattoos and curated piercings.`;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const wrap = "mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-10";

const heights: Record<string, string> = {
  short: "h-56 sm:h-64",
  mid: "h-72 sm:h-80",
  tall: "h-96 sm:h-[26rem]",
};

function Gallery() {
  const [active, setActive] = useState<string>("All");
  const reduce = useReducedMotion();

  const items = galleryItems.filter(
    (i) => active === "All" || i.category === active,
  );

  return (
    <>
      <section className="grid-bg noise border-b border-border">
        <div className={`${wrap} py-16 lg:py-24`}>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            Portfolio
          </p>
          <h1 className="mt-6 text-[clamp(2.75rem,12vw,9rem)]">
            The <span className="text-accent">gallery.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            A selection of recent work from the {site.city} studio, grouped by
            style.
          </p>

        </div>
      </section>

      <section className={`${wrap} py-14 lg:py-20`}>
        <div
          role="group"
          aria-label="Filter gallery by style"
          className="flex flex-wrap gap-2"
        >
          {galleryFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`min-h-11 border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                active === f
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.article
                key={item.title}
                layout={!reduce}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="mb-4 break-inside-avoid"
              >
                <div
                  className={`group relative overflow-hidden border border-border ${heights[item.span]}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                      {item.category}
                    </p>
                    <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] leading-none text-white">
                      {item.title}
                    </h2>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <BtnLink to="/contact">Start Your Piece</BtnLink>
          <BtnLink to="/services" variant="outline">
            View Services
          </BtnLink>
        </div>
      </section>
    </>
  );
}
