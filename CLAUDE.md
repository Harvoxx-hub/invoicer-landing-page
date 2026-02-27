# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for Invoicer, a POS and inventory management app for small businesses. Built as a React single-page application using Vite, React Router, and Tailwind CSS v4.

## Development Commands

```bash
# Start development server (default port: 5173)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Technology Stack

- **Framework**: React 19 with Vite 6
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4 (using @tailwindcss/vite plugin)
- **Animations**: AOS (Animate On Scroll)
- **Carousel**: Swiper
- **Icons**: React Icons
- **Linting**: ESLint 9 with flat config

## Project Structure

```
src/
├── App.jsx               # Main route configuration
├── main.jsx             # React entry point
├── index.css            # Global styles and Tailwind imports
├── components/          # Reusable UI components
│   ├── Header.jsx       # Top navigation bar
│   ├── Navbar.jsx       # Navigation menu (uses HashLink)
│   ├── MobileMenu.jsx   # Mobile navigation
│   ├── Heros.jsx        # Hero section
│   ├── FeaturesCard.jsx # Feature display cards
│   ├── FeaturesSec.jsx  # Features section
│   ├── HowItWorks.jsx   # How it works section
│   ├── ItWorksFrame.jsx # Step-by-step frames
│   ├── Security.jsx     # Benefits/security section
│   ├── TestimonialSec.jsx
│   ├── TestimonialCard.jsx
│   ├── CTA.jsx          # Call to action section
│   └── Footer.jsx       # Footer with links
└── pages/
    ├── Layout.jsx       # Shared layout (Header + Outlet + Footer)
    ├── Hompage.jsx      # Homepage sections composition
    ├── Policies.jsx     # Privacy policy page
    └── TC.jsx           # Terms and conditions page

public/
├── logo.png             # App logo (used in OG tags)
├── favicon.png          # Site favicon
├── robots.txt           # Search engine directives
├── sitemap.xml          # Sitemap for SEO
└── generate-og-image.html  # OG image generator tool
```

## Routing

Uses React Router v7 with HashLink for smooth scrolling to sections:
- `/` - Homepage (Hompage component)
- `/policies` - Privacy policy
- `/terms` - Terms and conditions

All routes use the Layout wrapper which includes Header and Footer.

## Navigation & Sections

Homepage sections are organized with IDs for HashLink navigation:
- `#features` - Features section
- `#works` - How it works section
- `#benefits` - Benefits/Security section
- `#testimonials` - Testimonials section

## Styling Architecture

- **Primary Brand Color**: `#163300` (dark green)
- **Accent Color**: `#9FE870` (light green)
- Uses Tailwind utility classes throughout
- Responsive design with mobile-first approach (`max-md:` breakpoints)
- Custom component-specific styles in individual components

## SEO Configuration

The site has comprehensive SEO optimization:
- Meta tags and Open Graph tags in `index.html`
- Structured data (JSON-LD) for SoftwareApplication, Organization, WebSite, FAQPage
- robots.txt and sitemap.xml in public folder
- Domain: `https://getinvoicer.app/`
- Semantic HTML with aria-labels

## Open Graph Image

The browser-based OG image generator is available at `http://localhost:5173/generate-og-image.html` during development.

## ESLint Configuration

Uses flat config format (eslint.config.js):
- Ignores `dist` directory
- React hooks rules enabled
- Custom rule: unused vars starting with capital letters or underscores are ignored
- React refresh plugin for HMR

## Assets

Images stored in `src/assets/images/`. Icons use react-icons library.

## App Information

- **App Name**: Invoicer
- **Platform**: iOS (App Store ID: 6751941791) and Android
- **Version**: 1.0.4 (as of structured data)
- **Target Audience**: Small businesses, retailers, supermarkets in Africa
- **Key Features**: POS system, inventory tracking, sales reports, offline support, multi-store/multi-user

## Important Notes

- The site uses client-side routing, so ensure proper server configuration for production (redirect all routes to index.html)
- Animations use AOS library - initialize in components where needed
- HashLink requires the `smooth` prop for smooth scrolling behavior
- The site currently uses logo.png for OG image; use the generate-og-image.html tool to create a custom og-image.jpg if needed
