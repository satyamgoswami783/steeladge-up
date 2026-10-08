# SteeLage Construction — Production Next.js Website

A pixel-accurate, modern, responsive, SEO-friendly commercial construction company website built for **SteeLage Construction** located in Surrey, BC, Canada.

## 🚀 Technologies Used

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 + Custom Architectural Design Tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO & Structured Data**: Metadata API, Schema.org (JSON-LD), Dynamic Sitemap (`sitemap.xml`), Robots (`robots.txt`)
- **Optimization**: `next/image`, `next/font` (Inter)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or 20.x+
- npm or pnpm / yarn

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
steelage/
├── public/
│   └── images/
│       ├── hero/
│       ├── projects/
│       └── services/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── our-process/
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   ├── services/
│   │   │   └── [slug]/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── forms/
│   │   │   └── QuoteForm.tsx
│   │   ├── home/
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── ServiceArea.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── Services.tsx
│   │   │   └── TrustBrands.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── JsonLd.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       ├── Logo.tsx
│   │       └── SectionHeading.tsx
│   └── data/
│       ├── company.ts
│       ├── navigation.ts
│       ├── projects.ts
│       └── services.ts
```

---

## 🔒 Production Build

To test production compilation:

```bash
npm run build
npm run start
```

## Static image optimization and SEO

`npm run dev` and `npm run build` first generate responsive WebP files from the
JPEG/PNG originals under `public/images`. The custom Next.js image loader serves
these files directly, so image optimization works on static hosting without an
image server. Generated files live in `public/optimized` and are included in the
export; originals are preserved. Widths and quality are configured in
`src/data/image-settings.json`.

After adding or replacing photos while the dev server is running, run
`npm run images:optimize` again. Add descriptive gallery text in
`src/data/project-images.ts` for new project images.

Static page share metadata is created by `src/lib/page-metadata.ts`. The sitemap
intentionally omits `lastModified` until reliable per-page content update dates
are tracked; rebuilding alone must not mark all content as newly updated.
