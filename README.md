# Velloria Westland Spa

A premium, responsive spa and wellness website for Velloria Westland Spa, located on Stima Lane, Westlands, Nairobi.

The website presents Velloria's treatments, packages, team, gallery, wellness philosophy, contact information and booking enquiry experience through a refined editorial-style interface.

## Project

- Framework: Next.js 16.3.7
- UI: React 19
- Language: TypeScript
- Styling: Tailwind CSS 4
- Animation: Motion
- Icons: Lucide React
- Rendering: Next.js App Router
- Repository: https://github.com/KennethMuir/velloria-Westland-spa.git

## Business Information

- Name: Velloria Westland Spa
- Location: Stima Lane, Westlands, Nairobi
- WhatsApp: +254 115 980301
- Google Maps: Stima Lane, Westlands, Nairobi

## Routes

- /
- /about
- /treatments
- /treatments/[slug]
- /packages
- /packages/[slug]
- /team
- /gallery
- /book
- /contact

## Development

Install dependencies with:

npm install

Start the development server with:

npm run dev

Open http://localhost:3000

## Verification

npx tsc --noEmit

npm run lint

npm run build

## Content

Canonical website content is maintained in src/data/.

Treatment catalogue: src/data/treatments.ts

Package catalogue: src/data/packages.ts

Team catalogue: src/data/team.ts

Gallery catalogue: src/data/gallery.ts

Site configuration: src/data/site.ts

Booking configuration: src/data/booking.ts

## Booking

The booking experience is an enquiry handoff to WhatsApp rather than a real-time reservation system.

Guests can choose a treatment or package, provide a preferred date and time, enter contact details, specify guests and add notes before opening a structured WhatsApp enquiry.

The application does not claim real-time availability.

## Design

The visual system uses a warm editorial luxury palette with Cormorant Garamond and DM Sans typography.

Shared UI components are located in src/components/ui/.

## Accessibility

The site includes responsive layouts, keyboard-accessible controls, visible focus states, semantic navigation, accessible forms, gallery keyboard navigation, focus restoration and reduced-motion support.

## External Services

- WhatsApp for booking and enquiries
- Google Maps for location navigation
- Unsplash-hosted temporary imagery

## Production Configuration

No production domain is currently configured.

Canonical URLs, metadataBase, sitemap URLs and production Open Graph image URLs should be configured after the final production origin is established.

## Branding

No approved Velloria favicon, logo or social-sharing image is currently included.

Default Create Next App public assets have been removed.

## Repository

Branch: main

Remote: https://github.com/KennethMuir/velloria-Westland-spa.git
