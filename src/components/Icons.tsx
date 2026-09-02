type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export const PhoneIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
  </svg>
);

export const MailIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="2.5" y="4.5" width="19" height="15" />
    <path d="m3 6 9 7 9-7" />
  </svg>
);

export const WhatsAppIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M3.5 20.5 5 16.4A8 8 0 1 1 8 19.3l-4.5 1.2Z" />
    <path d="M9 9c0 3 3 6 6 6 1.2 0 1.6-.6 1.6-1.4l-2-1-1 1c-1-.4-2.2-1.6-2.6-2.6l1-1-1-2C10.2 8 9 8 9 9Z" />
  </svg>
);

export const ArrowIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const PinIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ClockIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.5l3.5 2" />
  </svg>
);

export const SunIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.5 1.5m11.2 11.2 1.5 1.5M19.1 4.9l-1.5 1.5M6.4 17.6l-1.5 1.5" />
  </svg>
);

export const MoonIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </svg>
);

export const MenuIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const PlusIcon = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
