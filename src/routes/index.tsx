import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { BtnAnchor, BtnLink } from "../components/Btn";
import { InkVisual } from "../components/InkVisual";
import { MapBlock } from "../components/MapBlock";
import { Reveal } from "../components/Reveal";
import { ArrowIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "../components/Icons";
import {
  featuredWork,
  homeServices,
  mailHref,
  processSteps,
  reasons,
  site,
  telHref,
  testimonials,
  whatsappHref,
} from "../data/site";


const title = `Tattoo Studio in ${site.city} | Custom Tattoos & Piercing — ${site.legalName}`;
const description = `${site.legalName} is a custom tattoo and piercing studio in ${site.city}. Fine line, blackwork, realism, cover ups and sterile professional piercing. Book a consultation.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <p className="mb-6 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
      <span>Section {n}</span>
      <span className="h-px flex-1 bg-border" />
      <span className="text-muted-foreground">{children}</span>
    </p>
  );
}

const wrap = "mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-10";

function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* HERO */}
      <section className="grid-bg noise relative overflow-hidden border-b border-border">
        <div className={`${wrap} grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24`}>
          <div>
            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent"
            >
              Tattoo • Piercing • Custom Art
            </motion.p>

            <h1 className="mt-6 text-[clamp(3.5rem,15vw,11rem)]">
              {["Make", "Your", "Mark."].map((word, i) => (
                <motion.span
                  key={word}
                  className="block"
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === 2 ? (
                    <>
                      {word.slice(0, -1)}
                      <span className="text-accent">.</span>
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 max-w-md text-base text-muted-foreground sm:text-lg"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <BtnLink to="/contact">Book Appointment</BtnLink>
              <BtnLink to="/services" variant="outline">
                View Services
              </BtnLink>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <InkVisual />
          </div>
        </div>

        <div className={`${wrap} pb-10`}>
          <motion.a
            href="#services"
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground hover:text-accent"
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="inline-block h-8 w-px bg-accent" />
            Scroll to explore
          </motion.a>
        </div>
      </section>

      {/* 01 SERVICES */}
      <section id="services" className={`${wrap} py-20 lg:py-28`}>
        <SectionLabel n="01">Services</SectionLabel>
        <h2 className="max-w-4xl text-[clamp(2.25rem,7vw,5rem)]">
          What we put <span className="text-accent">on skin</span>
        </h2>

        <ul className="mt-12 border-t border-border">
          {homeServices.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <li className="group border-b border-border">
                <Link
                  to="/services"
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 sm:gap-8 sm:py-8"
                >
                  <span className="font-display text-sm text-accent transition-transform duration-300 group-hover:-translate-y-1">
                    {s.n}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[clamp(1.5rem,5vw,3rem)] transition-colors group-hover:text-accent">
                      {s.name}
                    </span>
                    <span className="mt-1 block max-w-md text-sm text-muted-foreground">
                      {s.note}
                    </span>
                    <span className="mt-3 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  </span>
                  <ArrowIcon className="h-6 w-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-2 group-hover:text-accent" />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* 02 WHY */}
      <section className="border-y border-border bg-surface">
        <div className={`${wrap} py-20 lg:py-28`}>
          <SectionLabel n="02">Why Raw Ink</SectionLabel>
          <Reveal>
            <h2 className="max-w-5xl text-[clamp(2rem,6.5vw,4.75rem)]">
              Built for people
              <br />
              who don't follow
              <br />
              <span className="text-accent">the template.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.05} className="bg-background">
                <article className="h-full p-6 sm:p-8">
                  <p className="font-display text-sm text-accent">{r.n}</p>
                  <h3 className="mt-4 text-xl">{r.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{r.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 PROCESS */}
      <section className={`${wrap} py-20 lg:py-28`}>
        <SectionLabel n="03">Process</SectionLabel>
        <h2 className="text-[clamp(2.25rem,7vw,5rem)]">Four steps, no guesswork</h2>
        <ol className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <li className="border-t-2 border-accent pt-6">
                <p className="font-display text-[clamp(3rem,8vw,5rem)] leading-none text-foreground/15">
                  {s.n}
                </p>
                <h3 className="mt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* 04 FEATURED WORK */}
      <section className="border-y border-border">
        <div className={`${wrap} py-20 lg:py-28`}>
          <SectionLabel n="04">Featured Work</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[clamp(2.25rem,7vw,5rem)]">Recent pieces</h2>
            <BtnLink to="/gallery" variant="outline">
              Full Gallery <ArrowIcon className="h-4 w-4" />
            </BtnLink>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {featuredWork.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05} className="bg-background">
                <div className="group relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-5">
                    <h3 className="font-display text-[clamp(1.5rem,4vw,2.25rem)] leading-none text-white">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* 05 TESTIMONIALS */}
      <section className={`${wrap} py-20 lg:py-28`}>
        <SectionLabel n="05">Testimonials</SectionLabel>
        <h2 className="text-[clamp(2.25rem,7vw,5rem)]">In their words</h2>
        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="bg-background">
              <figure className="h-full p-6 sm:p-8">
                <blockquote className="text-lg">"{t.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4 text-xs font-bold uppercase tracking-[0.2em]">
                  {t.name}
                  <span className="block pt-1 text-muted-foreground">{t.service}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 06 CTA */}
      <section className="noise border-y border-border bg-surface">
        <div className={`${wrap} py-20 text-center lg:py-28`}>
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-[clamp(2.25rem,8vw,6rem)]">
              Your next tattoo
              <br />
              <span className="text-accent">starts here.</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <BtnAnchor href={whatsappHref} external>
                WhatsApp Us
              </BtnAnchor>
              <BtnAnchor href={telHref} variant="outline">
                Call {site.phoneDisplay}
              </BtnAnchor>
              <BtnLink to="/contact" variant="outline">
                Book Appointment
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 LOCATION */}
      <section className={`${wrap} py-20 lg:py-28`}>
        <SectionLabel n="07">Location</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-[clamp(2rem,6vw,4rem)]">{site.legalName}</h2>
            <address className="mt-8 space-y-5 text-sm not-italic">
              <p className="flex gap-3 text-muted-foreground">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  {site.streetAddress}
                  <br />
                  {site.city}, {site.region}
                </span>
              </p>
              <p className="flex gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-accent" />
                <a href={telHref} className="hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="flex gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-accent" />
                <a href={mailHref} className="hover:text-accent">
                  {site.email}
                </a>
              </p>
              <div className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <ul className="space-y-1 text-muted-foreground">
                  {site.openingHours.map((h) => (
                    <li key={h.days}>
                      {h.days}: <span className="text-foreground">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </address>
          </div>
          <MapBlock />
        </div>
      </section>
    </>
  );
}
