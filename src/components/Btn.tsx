import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "accent" | "outline";

const styles: Record<Variant, string> = {
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-strong border border-accent hover:border-accent-strong",
  outline:
    "border border-foreground/40 text-foreground hover:border-accent hover:text-accent",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200 min-h-11";

export function BtnLink({
  to,
  variant = "accent",
  children,
  className = "",
}: {
  to: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function BtnAnchor({
  href,
  variant = "accent",
  children,
  className = "",
  external,
  ariaLabel,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
