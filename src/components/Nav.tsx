import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, telHref } from "../data/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass =
    "text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[110rem] items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-10">
        <Link
          to="/"
          className="flex items-baseline gap-1 font-display text-xl tracking-tight uppercase sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          Raw<span className="text-accent">Ink</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={linkClass}
                  activeProps={{ className: "text-accent" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            aria-label="Call Raw Ink studio"
            className="hidden h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden items-center bg-accent px-5 py-3 text-xs font-bold tracking-[0.18em] text-accent-foreground uppercase transition-colors hover:bg-accent-strong sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <MenuIconSwap /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <nav aria-label="Mobile" className="px-4 py-4 sm:px-6">
              <ul className="divide-y divide-border">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 font-display text-2xl uppercase"
                      activeProps={{ className: "text-accent" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex w-full items-center justify-center bg-accent px-6 py-4 text-xs font-bold tracking-[0.18em] text-accent-foreground uppercase"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MenuIconSwap() {
  return <CloseIcon className="h-5 w-5" />;
}
