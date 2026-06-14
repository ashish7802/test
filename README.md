# Ashish Yadav — Interactive 3D Portfolio

A polished, recruiter-ready portfolio for **Ashish Yadav**, built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **pure Three.js**. The experience uses a Deep Space Obsidian interface system, ambient WebGL mesh motion, glassmorphic panels, and inline SVG project visuals—no placeholder images, no cursor gimmicks, and no external image dependencies.

## ✨ Experience Highlights

- **3D ambient hero mesh** powered by native Three.js primitives and scroll-aware parallax.
- **High-impact portfolio copy** focused on full-stack engineering, AI automation, deployed systems, and open-source credibility.
- **Glassmorphic project grid** with six featured platforms and exact live/source links.
- **Technical core matrix** grouping frontend, backend, persistence, automation, AI, and integration capabilities.
- **Contact portal** with local form confirmation and lightweight burst animation feedback.
- **Responsive, Vercel-ready structure** using the Next.js App Router and Tailwind utility styling.

## 🧬 Design System

| Token | Value | Usage |
| --- | --- | --- |
| Deep Space Obsidian | `#0A0A0F` | Primary background |
| Charcoal Grid | `#12121A` | Cards, grid layers, depth surfaces |
| Electric Cyan | `#00D4FF` | Active state, links, primary glow |
| Neon Violet | `#7B2FBE` | Mesh lines, gradients, secondary accents |
| Spider-Red | `#FF3366` | Highlights, section labels, kinetic emphasis |

## 🛠️ Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom global CSS tokens
- **3D Rendering:** Three.js with WebGL fallback styling
- **Deployment Target:** Vercel

## 📁 Project Structure

```txt
src/
  app/
    globals.css        # Theme tokens, glassmorphism, animations, reduced-motion support
    layout.tsx         # Metadata, fonts, root shell
    page.tsx           # Main portfolio assembly
  components/
    ContactForm.tsx    # Contact portal and confirmation animation
    HeroMesh.tsx       # WebGL/Three.js ambient mesh layer
    ProjectCard.tsx    # Featured project data and glass cards
    SkillsDisplay.tsx  # Technical stack matrix
```

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## ▲ Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default framework preset as **Next.js**.
4. Use the default build command:

```bash
npm run build
```

5. Deploy.

The project includes `packageManager` and `engines` metadata to keep the Vercel install/build environment predictable.

## 🧪 Validation Checklist

Before deployment, verify:

- `npm install` completes successfully.
- `npm run build` finishes without TypeScript or Next.js errors.
- The hero background renders smoothly on desktop and mobile.
- Reduced-motion mode still presents a polished static experience.
- All project links open in a new tab and point to the intended URLs.
- The contact form shows a confirmation state after submission.

## 👤 Portfolio Manifest

- **Name:** Ashish Yadav
- **Role:** Full Stack Developer & AI Automation Engineer
- **Location:** Lucknow, UP, India
- **Status:** Available for Immediate Deployment
- **Delivery:** 6+ major applications deployed
- **Open Source:** 350+ GitHub stars

## 📌 Notes

This portfolio intentionally avoids custom cursor effects and external image dependencies. Motion is focused on ambient background physics, scroll parallax, and subtle interface feedback for a cleaner, more professional recruiter-facing presentation.
