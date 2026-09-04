import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "../components/Btn";
import { Reveal } from "../components/Reveal";
import { site, studioImage } from "../data/site";

const title = `About Raw Ink — Tattoo Artists in ${site.city}`;
const description = `Meet the artists behind ${site.legalName}, a custom tattoo and piercing studio in ${site.city}. Our story, philosophy, hygiene standards and aftercare approach.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
  component: About,
});

const wrap = "mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-10";

const blocks = [
  {
    n: "01",
    title: "Story",
    body: `Raw Ink started as a two-chair room and a stack of sketchbooks. We wanted a studio in ${site.city} where the drawing mattered as much as the machine — where nobody gets talked into a design that isn't theirs. That principle never changed as the space grew.`,
  },
  {
    n: "02",
    title: "Artists",
    body: "Our residents specialise rather than generalise: fine line, blackwork, realism and piercing each have a dedicated hand. When you enquire, we route you to the artist whose portfolio actually matches your idea.",
  },
  {
    n: "03",
    title: "Philosophy",
    body: "A tattoo should still read well in twenty years. We plan for ageing skin, real placement and honest contrast instead of chasing a design that only looks right on the day it's shot.",
  },
  {
    n: "04",
    title: "Hygiene",
    body: "Single-use needles, cartridges and tubes. Autoclave sterilisation with cycle logs, barrier-wrapped stations, hospital-grade surface disinfection and a separate sterile piercing bay.",
  },
  {
    n: "05",
    title: "Studio Experience",
    body: "Private booths, a consultation table you can actually spread references on, and appointments spaced so nobody is rushed out of the chair. Bring water, snacks and your own playlist.",
  },
  {
    n: "06",
    title: "Aftercare",
    body: "You leave with written aftercare, a wrap that suits the piece, and direct contact with your artist. We check in during the healing window and book a touch-up if the skin asks for one.",
  },
];

function About() {
  return (
    <>
      <section className="grid-bg noise border-b border-border">
        <div className={`${wrap} py-16 lg:py-24`}>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            About the studio
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,11vw,9rem)]">
            More than <span className="text-accent">a studio.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            {site.legalName} is a custom tattoo and piercing studio in {site.city},{" "}
            {site.region} — built around drawing, sterility and long conversations
            before any needle starts.
          </p>
        </div>
      </section>

      <section className={`${wrap} py-16 lg:py-24`}>
        <Reveal>
          <img
            src={studioImage}
            alt={`Interior of the ${site.legalName} tattoo studio in ${site.city}`}
            loading="lazy"
            className="mb-16 h-[clamp(18rem,45vw,34rem)] w-full border border-border object-cover"
          />
        </Reveal>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">

          {blocks.map((b, i) => (
            <Reveal key={b.n} delay={i * 0.05} className="bg-background">
              <article className="h-full p-6 sm:p-10">
                <p className="font-display text-sm text-accent">{b.n}</p>
                <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)]">{b.title}</h2>
                <p className="mt-4 max-w-prose text-sm text-muted-foreground sm:text-base">
                  {b.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <BtnLink to="/contact">Book a Consultation</BtnLink>
          <BtnLink to="/gallery" variant="outline">
            See the Work
          </BtnLink>
        </div>
      </section>
    </>
  );
}
