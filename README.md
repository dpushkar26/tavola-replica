# Landing Page Replica (TavolaServe)

This directory contains the **complete, self-contained replica** of the TavolaServe landing page (`http://localhost:3000/`).

## 📁 Directory Structure

```
landing-page-replica/
├── app/
│   ├── page.tsx               # Main landing page (all 8 interactive sections)
│   ├── layout.tsx             # Root layout with Google font Plus Jakarta Sans
│   └── globals.css            # Tailwind theme, OKLCH palette & 3D float keyframes
├── components/
│   ├── landing/
│   │   ├── BrandLogo.tsx          # 100% SVG Vector Logo & Monogram
│   │   ├── LandingHero.tsx        # 2-column top hero wrapper
│   │   ├── LandingHeroContent.tsx # Left column: headline, value props & CTAs
│   │   ├── LandingNavbar.tsx      # Sticky glassmorphism header & mobile menu
│   │   ├── LandingShowcase.tsx    # Right column: 3D perspective dashboard & phone
│   │   ├── LandingTrustBar.tsx    # Bottom forest green anchor banner
│   │   └── index.ts               # Barrel export file
│   └── ui/
│       ├── badge.tsx              # Pill badge component
│       ├── badge-2.tsx            # Badge alias
│       ├── button.tsx             # CVA button primitive
│       ├── iphone-mockup.tsx      # Realistic CSS/SVG iPhone 14/15 frame
│       └── sheet.tsx              # Zero-dependency slide-over drawer
├── lib/
│   └── utils.ts               # cn() class merging utility (clsx + tailwind-merge)
├── package.json               # Required dependencies
└── README.md
```

## 🚀 Quick Setup in Any Next.js App

### 1. Install Dependencies
```bash
npm install lucide-react @phosphor-icons/react class-variance-authority clsx tailwind-merge
```

### 2. Copy the Files
- Copy `components/` into your project's `src/components/` (or `components/`).
- Copy `lib/` into your project's `src/lib/` (or `lib/`).
- Copy `app/page.tsx` and the animations from `app/globals.css` into your app.

### 3. Ensure `@/*` Path Alias in `tsconfig.json`
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]   // or ["./*"] depending on your folder layout
    }
  }
}
```

### 4. Color Palette
- **Background Cream:** `#FAF7EE` (Cards: `#FAF8F5`, `#EAE4D3`, border: `#E5DEC9`)
- **Deep British Racing Green:** `#0B3B24` (Hover: `#082b1a`, Dark gradient: `#062414`)
- **Neon Lime Accent:** `#BCE440` (Hover: `#b0d938`)
- **Primary Text:** `#141414` (Muted text: `#4A4A4A`, `#555555`)
- **FSSAI Status Green:** `#00ab14`
