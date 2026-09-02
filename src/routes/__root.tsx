import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  ScriptOnce,
} from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingContact } from "../components/FloatingContact";
import { BackToTop } from "../components/BackToTop";
import { site } from "../data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          That page doesn't exist. The ink is still wet somewhere else.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.18em]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.legalName} — Tattoo & Piercing Studio in ${site.city}` },
      { name: "description", content: site.description },
      { property: "og:site_name", content: site.legalName },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#111111" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter+Tight:wght@400;500;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TattooShop",
          "@id": "/#studio",
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
          openingHours: ["Mo-Fr 11:00-21:00", "Sa 11:00-22:00", "Su 12:00-19:00"],
          areaServed: site.city,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const themeScript = `try{var t=localStorage.getItem('rawink-theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme: light)').matches)){document.documentElement.classList.add('light')}}catch(e){}`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce>{themeScript}</ScriptOnce>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:uppercase focus:tracking-[0.18em] focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          id="main"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
      <BackToTop />
    </QueryClientProvider>
  );
}
