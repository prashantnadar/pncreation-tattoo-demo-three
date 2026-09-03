/**
 * SINGLE SOURCE OF BUSINESS DATA.
 * Replace these placeholder values with the studio's real details.
 */

export const site = {
  name: "Raw Ink",
  legalName: "RAW INK STUDIO",
  tagline: "Custom tattoos. Professional piercing. Your style, your story.",
  description:
    "Raw Ink is a custom tattoo and piercing studio in Mumbai offering fine line, blackwork, realism, geometric, cover ups and professional body piercing.",
  city: "Mumbai",
  region: "Maharashtra",
  country: "IN",
  postalCode: "400001",
  streetAddress: "123 Example Street",
  studioAddress: "123 Example Street, Mumbai, Maharashtra 400001",
  latitude: 19.076,
  longitude: 72.8777,
  phone: "+911234567890",
  phoneDisplay: "+91 12345 67890",
  email: "hello@rawink.example",
  whatsappNumber: "911234567890",
  whatsappMessage:
    "Hi Raw Ink, I would like to book a tattoo/piercing consultation.",
  priceRange: "$$",
  openingHours: [
    { days: "Monday – Friday", hours: "11:00 – 21:00" },
    { days: "Saturday", hours: "11:00 – 22:00" },
    { days: "Sunday", hours: "12:00 – 19:00" },
  ],
  // Editable map configuration — swap for the real studio location.
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=19.0760,72.8777&hl=en&z=15&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=19.0760%2C72.8777",
  // Editable business statistics — replace with verified figures.
  stats: [
    { value: "10+", label: "Years Inking" },
    { value: "5000+", label: "Projects Completed" },
    { value: "6", label: "Resident Artists" },
    { value: "100%", label: "Single-Use Needles" },
  ],
} as const;

export const telHref = `tel:${site.phone}`;
export const mailHref = `mailto:${site.email}`;
export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const homeServices = [
  { n: "01", name: "Custom Tattoo", note: "Concept to skin, built only for you." },
  { n: "02", name: "Fine Line", note: "Delicate needlework, precise and quiet." },
  { n: "03", name: "Blackwork", note: "Heavy black, hard edges, real presence." },
  { n: "04", name: "Realism", note: "Depth, texture and light in monochrome or colour." },
  { n: "05", name: "Cover Ups", note: "Old work rebuilt into something you own." },
  { n: "06", name: "Piercing", note: "Sterile, precise, implant-grade jewellery." },
] as const;

export const services = [
  {
    slug: "custom-tattoos",
    name: "Custom Tattoos",
    description:
      "A full custom process: reference gathering, sketching, placement mapping and a final stencil approved by you before any needle touches skin.",
    idealFor: "First large pieces, sleeves, personal narrative work.",
  },
  {
    slug: "fine-line",
    name: "Fine Line",
    description:
      "Single-needle and micro-line work with controlled depth so thin lines stay crisp as they age.",
    idealFor: "Script, botanicals, small symbolic tattoos.",
  },
  {
    slug: "minimal-tattoos",
    name: "Minimal Tattoos",
    description:
      "Reduced, graphic marks where spacing and negative space carry the design.",
    idealFor: "First tattoos, discreet placements, matching pieces.",
  },
  {
    slug: "blackwork",
    name: "Blackwork",
    description:
      "Solid saturated black, ornamental patterning and bold negative space compositions.",
    idealFor: "Statement sleeves, panels, ornamental bands.",
  },
  {
    slug: "realism",
    name: "Realism",
    description:
      "Portrait and object realism built in layered passes for tonal depth and correct contrast.",
    idealFor: "Portraits, animals, photo-based memorial pieces.",
  },
  {
    slug: "geometric",
    name: "Geometric",
    description:
      "Compass and grid-built symmetry mapped to the natural flow of the body.",
    idealFor: "Forearms, chest plates, mandala work.",
  },
  {
    slug: "cover-ups",
    name: "Cover Ups",
    description:
      "Assessment of existing ink, saturation planning and a redesign that hides the old piece honestly.",
    idealFor: "Faded, misplaced or regretted tattoos.",
  },
  {
    slug: "touch-ups",
    name: "Touch Ups",
    description:
      "Line refresh and re-saturation for healed work, including pieces done elsewhere.",
    idealFor: "Aged tattoos, patchy healing, sun-faded ink.",
  },
  {
    slug: "ear-piercing",
    name: "Ear Piercing",
    description:
      "Needle-only lobe, helix, tragus, conch and daith piercings with implant-grade titanium jewellery.",
    idealFor: "Curated ear projects and first piercings.",
  },
  {
    slug: "body-piercing",
    name: "Body Piercing",
    description:
      "Anatomy-checked navel, septum, nostril, eyebrow and surface piercings in a sterile bay.",
    idealFor: "Experienced and first-time clients alike.",
  },
] as const;

export const reasons = [
  {
    n: "01",
    title: "Experienced Artists",
    body: "Resident artists with defined specialisms — you are matched to the right hand, not the next free chair.",
  },
  {
    n: "02",
    title: "Hygienic Studio",
    body: "Single-use needles and tubes, autoclave sterilisation, barrier-wrapped stations, documented cleaning.",
  },
  {
    n: "03",
    title: "Premium Equipment",
    body: "Modern rotary machines, calibrated power supplies and vegan-friendly pigments.",
  },
  {
    n: "04",
    title: "Custom Artwork",
    body: "Nothing is pulled off a wall. Every design is drawn for one body and never repeated.",
  },
  {
    n: "05",
    title: "Transparent Consultation",
    body: "Clear scope, sitting count and pricing before you commit. No pressure, no surprise invoices.",
  },
  {
    n: "06",
    title: "Aftercare Support",
    body: "Written aftercare, a healing check-in and direct access to your artist while it settles.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Consult",
    body: "We talk placement, size, budget and how the idea should read on your body.",
  },
  {
    n: "02",
    title: "Design",
    body: "Your artist draws the piece and reworks it with you until the stencil is right.",
  },
  {
    n: "03",
    title: "Ink",
    body: "Sterile setup, planned breaks, and a pace matched to the work and to you.",
  },
  {
    n: "04",
    title: "Heal",
    body: "Aftercare instructions, a follow-up, and a free touch-up window where needed.",
  },
] as const;

export const testimonials = [
  {
    name: "Aditi R.",
    service: "Fine Line Tattoo",
    quote:
      "They redrew my idea three times until it actually fit my forearm. The line work still looks sharp a year later.",
  },
  {
    name: "Kabir S.",
    service: "Blackwork Sleeve",
    quote:
      "Four sittings, planned properly, no rushing. The studio was spotless and the aftercare advice was specific, not generic.",
  },
  {
    name: "Meera J.",
    service: "Helix Piercing",
    quote:
      "Placement was measured against my ear shape rather than guessed. Healed clean with zero drama.",
  },
] as const;

import serpentSpine from "../assets/gallery/serpent-spine.jpg";
import hairlineScript from "../assets/gallery/hairline-script.jpg";
import griefPortrait from "../assets/gallery/grief-portrait.jpg";
import septumCurve from "../assets/gallery/septum-curve.jpg";
import ornamentalBand from "../assets/gallery/ornamental-band.jpg";
import wireBotanicals from "../assets/gallery/wire-botanicals.jpg";
import solidPanel from "../assets/gallery/solid-panel.jpg";
import chromeStudy from "../assets/gallery/chrome-study.jpg";
import curatedLobe from "../assets/gallery/curated-lobe.jpg";
import customCompass from "../assets/gallery/custom-compass.jpg";
import threadLines from "../assets/gallery/thread-lines.jpg";
import inkWashWolf from "../assets/gallery/ink-wash-wolf.jpg";
import studioInterior from "../assets/studio-interior.jpg";

export const studioImage = studioInterior;

export const galleryItems = [
  {
    title: "Serpent Spine",
    category: "Blackwork",
    span: "tall",
    src: serpentSpine,
    alt: "Blackwork serpent tattoo running down a client's spine",
  },
  {
    title: "Hairline Script",
    category: "Fine Line",
    span: "short",
    src: hairlineScript,
    alt: "Fine line botanical branch tattoo on a forearm",
  },
  {
    title: "Grief Portrait",
    category: "Realism",
    span: "tall",
    src: griefPortrait,
    alt: "Black and grey realism portrait tattoo on a forearm",
  },
  {
    title: "Septum Curve",
    category: "Piercing",
    span: "short",
    src: septumCurve,
    alt: "Close-up of a polished septum piercing ring",
  },
  {
    title: "Ornamental Band",
    category: "Tattoo",
    span: "mid",
    src: ornamentalBand,
    alt: "Ornamental geometric band tattoo wrapping an upper arm",
  },
  {
    title: "Wire Botanicals",
    category: "Fine Line",
    span: "mid",
    src: wireBotanicals,
    alt: "Delicate fine line wildflower tattoo on a forearm",
  },
  {
    title: "Solid Panel",
    category: "Blackwork",
    span: "short",
    src: solidPanel,
    alt: "Solid blackwork shoulder panel tattoo with negative space shapes",
  },
  {
    title: "Chrome Study",
    category: "Realism",
    span: "tall",
    src: chromeStudy,
    alt: "Realistic chrome sphere tattoo on a forearm",
  },
  {
    title: "Curated Lobe",
    category: "Piercing",
    span: "mid",
    src: curatedLobe,
    alt: "Curated ear with multiple lobe and helix piercings",
  },
  {
    title: "Custom Compass",
    category: "Tattoo",
    span: "short",
    src: customCompass,
    alt: "Custom compass tattoo in black ink on a forearm",
  },
  {
    title: "Thread Lines",
    category: "Fine Line",
    span: "tall",
    src: threadLines,
    alt: "Minimal single needle line tattoo along an inner arm",
  },
  {
    title: "Ink Wash Wolf",
    category: "Realism",
    span: "mid",
    src: inkWashWolf,
    alt: "Black and grey ink wash wolf tattoo on a shoulder",
  },
] as const;

export const featuredWork = [
  {
    label: "Tattoo",
    src: ornamentalBand,
    alt: "Ornamental band tattoo wrapping an upper arm",
  },
  {
    label: "Fine Line",
    src: wireBotanicals,
    alt: "Fine line wildflower tattoo on a forearm",
  },
  {
    label: "Blackwork",
    src: serpentSpine,
    alt: "Blackwork serpent tattoo along a spine",
  },
  {
    label: "Piercing",
    src: curatedLobe,
    alt: "Curated ear piercings with gold and titanium jewellery",
  },
] as const;


export const galleryFilters = [
  "All",
  "Tattoo",
  "Fine Line",
  "Blackwork",
  "Realism",
  "Piercing",
] as const;
