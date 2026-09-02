import { motion, useReducedMotion } from "framer-motion";

/** Abstract CSS/SVG tattoo composition — no image assets. */
export function InkVisual() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="noise relative aspect-square w-full max-w-[34rem] overflow-hidden border border-border grid-bg"
    >
      <motion.div
        className="absolute inset-[8%] rounded-full border border-accent/50"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-accent" />
      </motion.div>

      <motion.div
        className="absolute inset-[20%] rounded-full border border-foreground/25 diag-stripes"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-[34%] rounded-full border border-foreground/40" />
      <div className="absolute top-1/2 left-0 h-px w-full bg-border" />
      <div className="absolute top-0 left-1/2 h-full w-px bg-border" />

      <div className="absolute top-[12%] right-[10%] h-24 w-24 rotate-45 border border-accent/60" />
      <div className="absolute bottom-[14%] left-[8%] h-16 w-16 bg-accent/80" />

      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <path
          d="M20 160 C 60 80, 140 180, 180 60"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <path
          d="M10 120 C 70 140, 120 40, 190 110"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.8"
        />
      </svg>

      <p className="absolute bottom-4 left-4 font-display text-[13vw] leading-none text-foreground/10 sm:text-[6rem]">
        INK
      </p>
      <p className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
        EST. 2015
      </p>
    </div>
  );
}
