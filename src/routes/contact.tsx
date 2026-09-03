import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { FormEvent } from "react";
import { MapBlock } from "../components/MapBlock";
import { Reveal } from "../components/Reveal";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "../components/Icons";
import { mailHref, services, site, telHref, whatsappHref } from "../data/site";

const title = `Contact & Booking — ${site.name} Tattoo Studio, ${site.city}`;
const description = `Book a tattoo or piercing consultation at ${site.name} in ${site.city}. Call, WhatsApp or email the studio, or send your idea through the booking form.`;
const url = "https://pncreation-tattoo-demo-three.lovable.app/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          name: site.legalName,
          description: site.description,
          telephone: site.phone,
          email: site.email,
          priceRange: site.priceRange,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.streetAddress,
            addressLocality: site.city,
            addressRegion: site.region,
            postalCode: site.postalCode,
            addressCountry: site.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: site.latitude,
            longitude: site.longitude,
          },
          url,
        }),
      },
    ],
  }),
  component: Contact,
});

const wrap = "mx-auto max-w-[110rem] px-4 sm:px-6 lg:px-10";
const label =
  "block text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground";
const field =
  "mt-2 w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="grid-bg noise border-b border-border">
        <div className={`${wrap} py-16 lg:py-24`}>
          <p className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase">
            Booking & enquiries
          </p>
          <h1 className="mt-6 text-[clamp(3rem,15vw,12rem)] leading-[0.85]">
            Let&apos;s talk <span className="text-accent">ink.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            Tell us the idea, the placement and rough size. We reply with
            availability, a realistic sitting plan and an honest quote.
          </p>
        </div>
      </section>

      <section className={`${wrap} grid gap-px py-16 lg:grid-cols-[1.4fr_1fr] lg:py-24`}>
        <Reveal className="border border-border">
          <form onSubmit={onSubmit} className="grid gap-6 p-6 sm:p-8">
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)]">Booking form</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label className={label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={site.phoneDisplay}
                  className={field}
                />
              </div>
              <div>
                <label className={label} htmlFor="service">
                  Service
                </label>
                <select id="service" name="service" className={field} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="date">
                  Preferred date
                </label>
                <input id="date" name="date" type="date" className={field} />
              </div>
            </div>

            <div>
              <label className={label} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Describe your idea, placement and size."
                className={field}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center bg-accent px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-accent-foreground uppercase transition-colors hover:bg-accent-strong"
              >
                Send Enquiry
              </button>
              <p aria-live="polite" className="text-sm text-muted-foreground">
                {sent
                  ? "Thanks — your enquiry is noted. We'll reply within 24 hours."
                  : "We reply within 24 hours."}
              </p>
            </div>
          </form>
        </Reveal>

        <div className="grid content-start gap-px border border-border lg:border-l-0">
          <a
            href={telHref}
            className="group flex items-center gap-4 border-b border-border p-6 transition-colors hover:bg-surface"
          >
            <PhoneIcon className="h-5 w-5 text-accent" />
            <span>
              <span className={label}>Call the studio</span>
              <span className="mt-1 block text-lg">{site.phoneDisplay}</span>
            </span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border-b border-border p-6 transition-colors hover:bg-surface"
          >
            <WhatsAppIcon className="h-5 w-5 text-accent" />
            <span>
              <span className={label}>WhatsApp</span>
              <span className="mt-1 block text-lg">Message us directly</span>
            </span>
          </a>
          <a
            href={mailHref}
            className="flex items-center gap-4 border-b border-border p-6 transition-colors hover:bg-surface"
          >
            <MailIcon className="h-5 w-5 text-accent" />
            <span className="min-w-0">
              <span className={label}>Email</span>
              <span className="mt-1 block truncate text-lg">{site.email}</span>
            </span>
          </a>
          <div className="flex items-start gap-4 border-b border-border p-6">
            <PinIcon className="mt-1 h-5 w-5 text-accent" />
            <span>
              <span className={label}>Studio</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {site.studioAddress}
              </span>
            </span>
          </div>
          <div className="flex items-start gap-4 p-6">
            <ClockIcon className="mt-1 h-5 w-5 text-accent" />
            <span>
              <span className={label}>Opening hours</span>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {site.openingHours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="text-foreground">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </div>
      </section>

      <section className={`${wrap} pb-24`}>
        <h2 className="mb-6 text-[clamp(2rem,6vw,4rem)]">Find the studio</h2>
        <MapBlock />
      </section>
    </>
  );
}
