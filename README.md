# RecruitBridge Landing Page

Marketing landing page for [recruitbridge.net](https://recruitbridge.net)

Built with React + TypeScript + Vite, exported from Figma.

## Tech Stack

- **React 18** with TypeScript
- **Vite 6** for fast builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Radix UI** + **shadcn/ui** for components

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build
```

## Deployment

This site is deployed on **Vercel** at **recruitbridge.net**

### Vercel Configuration:
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

### Domain Setup:
- Primary: `recruitbridge.net`
- WWW: `www.recruitbridge.net`

All CTAs and buttons direct users to the main app at **recruitbridge.app**

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Header with Login/Sign Up
│   ├── HeroSection.tsx         # Hero with animated background
│   ├── HowItWorks.tsx          # 3-step process
│   ├── TestimonialHighlight.tsx # Featured testimonial
│   ├── ForAthletes.tsx         # Benefits for athletes
│   ├── ForParents.tsx          # Benefits for parents
│   ├── AffordablePricing.tsx   # Pricing tiers
│   ├── Testimonials.tsx        # Customer testimonials
│   ├── FinalCTA.tsx            # Call to action
│   └── Footer.tsx              # Footer with links
├── App.tsx                     # Main app component
└── main.tsx                    # Entry point
```

## Original Design

Based on Figma design: https://www.figma.com/design/OIhBSSXuYcVNYsxi1ZDXRL/RecruitBridge-Landing-Page
