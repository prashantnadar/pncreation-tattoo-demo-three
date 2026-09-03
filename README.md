# Ink & Iron Studio

Create a complete responsive Tattoo & Piercing Studio website from scratch.



TECH STACK — STRICT:



- React

- TypeScript

- Tailwind CSS

- Framer Motion



DO NOT use:



- Lovable dependencies

- Lovable-specific components

- external component libraries

- icon libraries

- unnecessary npm packages

- image files

- favicon

- stock images

- generated images

- unnecessary folders

- unnecessary files



Use inline SVG when an icon is needed.



Keep the implementation minimal and professional.



==================================================

DESIGN CONCEPT



Create a bold urban tattoo studio.



Style:



DARK STREETWEAR × TATTOO CULTURE × MODERN DESIGN



Color direction:



- near-black

- white

- electric red/orange accent

- subtle gray



Use:



- huge typography

- sharp borders

- angular shapes

- grid patterns

- CSS noise-like patterns where possible

- high contrast

- bold buttons

- asymmetrical layouts



Avoid making it look like a generic neon gaming website.



It should feel like a premium modern tattoo studio.



==================================================

NAVIGATION



Sticky navigation.



Logo:

"RAW INK"



Navigation:

HOME

ABOUT

SERVICES

WHY US

GALLERY

CONTACT



CTA:

BOOK NOW



Mobile:

hamburger menu



Contact must always be easily accessible.



==================================================

HERO



Create a high-impact hero.



Small text:

"TATTOO • PIERCING • CUSTOM ART"



Huge heading:



"MAKE

YOUR

MARK."



Supporting text:



"Custom tattoos. Professional piercing. Your style, your story."



Buttons:

BOOK APPOINTMENT

VIEW SERVICES



Create an abstract CSS tattoo visual on the opposite side.



Use layered:



- circles

- lines

- grids

- typography

- geometric forms



No image assets.



Add animated scroll indicator.



==================================================

FLOATING CONTACT BAR



Create a floating mobile-friendly contact control.



Actions:



CALL

WHATSAPP

EMAIL



On desktop, use a compact floating control.



On mobile, ensure it does not cover important content.



All actions must be functional.



==================================================

HOME



After hero:



SECTION 01 — SERVICES



Create large interactive service blocks:



CUSTOM TATTOO

FINE LINE

BLACKWORK

REALISM

COVER UPS

PIERCING



Hover animation:



- accent line

- number movement

- arrow movement



On mobile stack vertically.



---



SECTION 02 — WHY RAW INK



Large heading:



"BUILT FOR PEOPLE

WHO DON'T FOLLOW

THE TEMPLATE."



Reasons:

01 Experienced Artists

02 Hygienic Studio

03 Premium Equipment

04 Custom Artwork

05 Transparent Consultation

06 Aftercare Support



---



SECTION 03 — PROCESS



Use four large steps:



01 CONSULT

02 DESIGN

03 INK

04 HEAL



Add scroll reveal animation.



---



SECTION 04 — FEATURED WORK



Create a CSS portfolio grid.



Categories:

TATTOO

FINE LINE

BLACKWORK

PIERCING



No images.



Use abstract blocks with large category typography.



Make it easy to swap CSS blocks with real images later.



---



SECTION 05 — TESTIMONIALS



Show 3 testimonials.



Use:

name

service

short testimonial



Do not use fake star ratings or review structured data.



---



SECTION 06 — CTA



Large dark section:



"YOUR NEXT TATTOO

STARTS HERE."



Buttons:

WhatsApp

Call

Book Appointment



---



SECTION 07 — LOCATION



Display:



RAW INK STUDIO



123 Example Street

Mumbai, Maharashtra



Phone

Email

Opening Hours



Google Maps embed.



Button:

GET DIRECTIONS



Get Directions must open Google Maps directions in a new browser tab.



==================================================

ABOUT PAGE



Create:



"MORE THAN A STUDIO."



Sections:



- Story

- Artists

- Philosophy

- Hygiene

- Studio Experience

- Aftercare



Use bold editorial design.



==================================================

SERVICES PAGE



Build a detailed service directory.



For every service:



Name

Description

Ideal for

Consultation CTA



Services:

Custom Tattoos

Fine Line

Minimal Tattoos

Blackwork

Realism

Geometric

Cover Ups

Touch Ups

Ear Piercing

Body Piercing



==================================================

WHY CHOOSE US PAGE



Create a bold trust-focused page.



Large typography:



"WHY RAW?"



Then:



EXPERIENCE

HYGIENE

CRAFT

CONSULTATION

EQUIPMENT

AFTERCARE



Use editable statistics.



Example placeholders:

"10+ YEARS"

"5000+ PROJECTS"



Clearly structure these as editable business data so real figures can replace them.



==================================================

GALLERY PAGE



Create a responsive portfolio.



Filter:

ALL

TATTOO

FINE LINE

BLACKWORK

REALISM

PIERCING



Create masonry-inspired CSS layout.



No image files.



==================================================

CONTACT PAGE



Build a conversion-focused contact page.



Headline:



"LET'S TALK INK."



Contact form:



Full Name

Email

Phone

Service

Preferred Date

Message



Accessible labels.



Include:

Call

WhatsApp

Email



WhatsApp message:



"Hi Raw Ink, I would like to book a tattoo/piercing consultation."



Google Map.



Get Directions button.



==================================================

MAP



Create an iframe Google Maps embed area.



Do not hardcode a fake real-world business.



Use an editable configuration value for:

studioAddress

latitude

longitude

googleMapsEmbedUrl

googleMapsDirectionsUrl



The actual client can replace these values later.



==================================================

THEME



Default:

Dark.



Theme toggle:

Dark ↔ Light.



Persist preference.



Respect system preference where appropriate.



Ensure both modes remain accessible.



==================================================

BACK TO TOP



Fixed bottom-right button.



Requirements:



- appears after scrolling

- smooth scroll

- keyboard accessible

- aria-label

- animated appearance

- SVG circular scroll progress



==================================================

FRAMER MOTION



Use Framer Motion for:



Hero entrance

Text animations

Scroll reveal

Service hover

Timeline reveal

CTA animation

Mobile menu

Back-to-top appearance

Page transitions



Respect:

prefers-reduced-motion



Do not make animations excessive.



==================================================

RESPONSIVE



Fully responsive for:



320px

375px

390px

430px

tablet

iPad

iPad Pro

MacBook

laptop

desktop

large desktop



Check:



- no horizontal overflow

- readable typography

- touch-friendly controls

- proper spacing

- navigation

- forms

- map

- footer

- floating controls



==================================================

SEO



Implement strong technical SEO.



Every page:



- unique title

- unique meta description

- canonical URL

- semantic HTML

- correct H1

- logical H2/H3

- descriptive anchor text



Use JSON-LD for appropriate business/service information.



Potential schema:

TattooShop

LocalBusiness

Service

BreadcrumbList



Do not fabricate:



- reviews

- ratings

- awards

- certifications



Create editable local business data.



Optimize page content for local searches such as:



tattoo studio near me

tattoo shop in [CITY]

tattoo artist in [CITY]

piercing studio in [CITY]

fine line tattoo in [CITY]

custom tattoo in [CITY]



Do not promise Google rankings.



==================================================

ACCESSIBILITY



Target Lighthouse accessibility 95+.



Implement:



- semantic HTML

- skip navigation

- keyboard navigation

- visible focus

- accessible buttons

- labels

- aria-label where necessary

- correct contrast

- reduced motion

- keyboard-accessible menu

- Escape to close menu

- logical focus order



==================================================

PERFORMANCE



Target Lighthouse performance 95+.



Avoid:



- unnecessary JavaScript

- unnecessary packages

- large assets

- image assets

- excessive animation

- layout shift

- unnecessary DOM

- render-blocking resources



Prefer:



- CSS visuals

- CSS transitions where enough

- efficient React components

- minimal dependencies



==================================================

FOOTER



Include:



RAW INK

Short description

Navigation

Services

Contact

Address

Phone

Email

WhatsApp

Opening hours

Copyright



==================================================

PROJECT STRUCTURE



Keep project structure minimal.



Do not create unnecessary folders.



Use a simple structure such as:



src/

components/

pages/

data/

App.tsx

main.tsx

index.css



Only create files that are genuinely required.



Keep business information in one reusable configuration/data file.



==================================================

FINAL AUDIT



Before completing the implementation:



- TypeScript errors: 0

- no unused imports

- no unused dependencies

- no broken links

- all pages connected

- navbar functional

- mobile navigation functional

- theme toggle functional

- Call functional

- Email functional

- WhatsApp functional

- Google Maps functional

- Get Directions functional

- Back to Top functional

- scroll indicator functional

- responsive at all required sizes

- semantic HTML

- SEO metadata

- JSON-LD

- accessibility improvements

- reduced motion

- no horizontal overflow

- no Lovable-specific dependencies

- no favicon

- no images

- no unnecessary files



The final website should look like a professionally designed, premium urban tattoo and piercing studio rather than an AI-generated generic business website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pncreation-tattoo-demo-three.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c2d83cd1-d016-4864-8924-757bbca1b8a0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
