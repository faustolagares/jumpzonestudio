# Jump Zone Studio

A high-energy digital experience for Jump Zone Studio, designed and engineered by [NexLink](https://www.nexlink.ai).

Jump Zone Studio is a trampoline fitness concept in Newark, NJ. The site presents the brand, class experience, membership pathways, schedule access, and a mobile-first bio link page built for social traffic.

## Built By NexLink

NexLink designs and ships modern web experiences for brands that need more than a basic website. This project combines brand direction, performance-focused frontend engineering, multilingual SEO foundations, and conversion-oriented UI.

## What This Project Includes

- Responsive marketing website for Jump Zone Studio
- Mobile-first `/bio` link page
- Reusable brand button system
- Multilingual metadata for English, Portuguese, and Spanish
- SEO foundations with canonical URLs, hreflang, sitemap, robots, and structured data
- Open Graph and Twitter social preview metadata
- Vercel-ready SPA routing fallback
- Performance-conscious lazy loading and asset handling

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Motion
- Vercel

## Key Routes

- `/` — main website
- `/en`, `/pt`, `/es` — localized SEO entry routes
- `/bio` — mobile-first bio link page
- `/en/bio`, `/pt/bio`, `/es/bio` — localized bio routes
- `/buttons` — internal design system reference

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run TypeScript checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Deployment

The project is configured for Vercel. The app uses React Router with a Vercel rewrite fallback so direct visits to client-side routes like `/bio` and `/pt/bio` resolve through `index.html`.

## SEO Notes

The project includes:

- `public/sitemap.xml`
- `public/robots.txt`
- JSON-LD structured data for Jump Zone Studio as a fitness center
- Canonical metadata
- Hreflang metadata for English, Portuguese, and Spanish
- Social preview metadata using the brand hero image

## NexLink

Built by [NexLink](https://www.nexlink.ai), a digital studio creating fast, strategic, AI-ready web experiences for modern brands.
