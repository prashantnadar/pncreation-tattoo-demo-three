import { createFileRoute } from "@tanstack/react-router";
import { BtnLink } from "../components/Btn";
import { Reveal } from "../components/Reveal";
import { reasons, site } from "../data/site";

const title = `Why Choose Raw Ink — Tattoo Artists in ${site.city}`;
const description = `Experience, hygiene, craft, consultation, equipment and aftercare — the standards behind Raw Ink, a custom tattoo and piercing studio in ${site.city}.`;

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/why-us" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUs,
});

const wrap = "mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-10";

const pillars = [
  {
    key: "Experience",
    body: "Resident artists with years behind the machine and portfolios you can inspect before you commit to a sitting.",
  },
  {
    key: "Hygiene",
    body: "Single-use needles, autoclaved tools, wrapped stations and a dedicated sterile piercing bay — documented, not claimed.",
  },
  {
    key: "Craft",
    body: "Drawing first. Placement mapped to your anatomy, contrast planned for how the piece will heal and age.",
  },
  {
    key: "Consultation",
    body: "Scope, sittings and cost agreed in writing before the stencil. No pressure to upsize a piece you didn't ask for.",
  },
  {
    key: "Equipment",
    body: "Modern rotary machines, calibrated supplies, implant-grade titanium jewellery and vegan-friendly pigments.",
  },
  {
    key: "Aftercare",
    body: "Written instructions, a healing check-in and a touch-up window so the finished piece matches the plan.",
  },
];

function WhyUs() {
  return (
    <>
      <section className="grid-bg noise border-b border-border">
        <div className={`${wrap} py-16 lg:py-24`}>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            Trust & standards
          </p>
          <h1 className="mt-6 text-[clamp(4rem,20vw,15rem)]">
            Why <span className="text-accent">Raw?</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            Six reasons clients across {site.city} keep coming back — and send
            people who have never been tattooed before.
          </p>
        </div>
      </section>

      {/* Editable business statistics — replace placeholders in src/data/site.ts */}
      <section className="border-b border-border bg-surface">
        <div className={`${wrap} grid gap-px bg-border py-0 sm:grid-cols-2 lg:grid-cols-4`}>
          {site.stats.map((s) => (
            <div key={s.label} className="bg-surface px-2 py-10 text-center">
              <p className="font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-none text-accent">
                {s.value}
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} py-16 lg:py-24`}>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.05} className="bg-background">
              <article className="h-full p-6 sm:p-8">
                <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)]">{p.key}</h2>
                <span className="mt-4 block h-0.5 w-10 bg-accent" />
                <p className="mt-5 text-sm text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <h2 className="mt-20 text-[clamp(2rem,6vw,4rem)]">Studio commitments</h2>
        <ul className="mt-8 border-t border-border">
          {reasons.map((r) => (
            <li
              key={r.n}
              className="grid gap-2 border-b border-border py-6 sm:grid-cols-[5rem_16rem_1fr] sm:gap-6"
            >
              <span className="font-display text-sm text-accent">{r.n}</span>
              <h3 className="text-lg">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap gap-3">
          <BtnLink to="/contact">Book a Consultation</BtnLink>
          <BtnLink to="/services" variant="outline">
            Browse Services
          </BtnLink>
        </div>
      </section>
    </>
  );
}
