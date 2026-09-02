import { Link } from "@tanstack/react-router";
import {
  mailHref,
  navLinks,
  services,
  site,
  telHref,
  whatsappHref,
} from "../data/site";

export function Footer() {
  const head = "mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-accent";
  const link = "text-sm text-muted-foreground transition-colors hover:text-foreground";

  return (
    <footer className="border-t border-border bg-surface pb-24 sm:pb-10">
      <div className="mx-auto max-w-[110rem] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl uppercase">
              Raw<span className="text-accent">Ink</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A custom tattoo and piercing studio in {site.city} — fine line,
              blackwork, realism and sterile professional piercing.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className={head}>Navigate</h2>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={head}>Services</h2>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className={link}>
                    {s.name} in {site.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={head}>Contact</h2>
            <address className="space-y-3 text-sm not-italic text-muted-foreground">
              <p>
                {site.legalName}
                <br />
                {site.streetAddress}
                <br />
                {site.city}, {site.region}
              </p>
              <p>
                <a href={telHref} className={link}>
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={mailHref} className={link}>
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link}
                >
                  Chat on WhatsApp
                </a>
              </p>
            </address>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {site.openingHours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span className="text-foreground">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
