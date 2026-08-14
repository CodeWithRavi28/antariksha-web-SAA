# Product Requirements Document (PRD)

---

## SLIET Antariksha Vigyan Club — Official Website

| Field | Detail |
|---|---|
| **Document Version** | v1.0 |
| **Status** | Draft — Awaiting Approval |
| **Author** | Antigravity AI |
| **Created** | 12 August 2026 |
| **Launch Target** | 19 August 2026 |
| **Club Name** | SLIET Antariksha Vigyan Club |
| **Institution** | Sant Longowal Institute of Engineering and Technology (SLIET) |

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Target Audience & Personas](#3-target-audience--personas)
4. [Tech Stack](#4-tech-stack)
5. [Design System](#5-design-system)
6. [Information Architecture](#6-information-architecture)
7. [Section-by-Section Feature Specs](#7-section-by-section-feature-specs)
   - 7.1 Navbar
   - 7.2 Hero
   - 7.3 About
   - 7.4 Domains
   - 7.5 Events
   - 7.6 Team
   - 7.7 Contact
   - 7.8 Footer
8. [Animation & Motion Design](#8-animation--motion-design)
9. [Responsiveness Requirements](#9-responsiveness-requirements)
10. [Accessibility Requirements](#10-accessibility-requirements)
11. [Project Architecture](#11-project-architecture)
12. [Data Contracts](#12-data-contracts)
13. [Open Questions & Decisions Needed](#13-open-questions--decisions-needed)
14. [Out of Scope](#14-out-of-scope)

---

## 1. Product Overview

### 1.1 Background

The **SLIET Antariksha Vigyan Club** is a newly established astronomy and space science club at Sant Longowal Institute of Engineering and Technology. The club aims to foster curiosity about the cosmos among students through observation, research, outreach, and technology.

The website will be the club's primary digital presence, officially launched on **19 August** during the inauguration ceremony.

### 1.2 Product Vision

> Build a **premium, modern, and inspiring** website that makes students feel the club is worth joining — before they even scroll past the hero.

The site should evoke the same level of credibility and polish as leading technology companies (SpaceX, Linear, Vercel) while remaining accessible and relevant to college students.

### 1.3 Design Philosophy

| Principle | Description |
|---|---|
| **Minimal** | No clutter. Every element earns its place. |
| **Cinematic** | The hero should feel like a movie opening. |
| **Elegant** | Smooth transitions, refined spacing, premium typography. |
| **Futuristic** | Dark theme, glowing accents, subtle depth. |
| **Not childish** | No cartoon rockets, no garish gradients, no NASA-clone layouts. |

---

## 2. Goals & Success Metrics

### 2.1 Business Goals

- Establish a professional online identity for the club at launch.
- Drive student registrations via the "Join Club" CTA.
- Communicate the club's vision, domains, and team clearly.
- Provide a base that can be extended with real data (events, team, projects) over time.

### 2.2 Success Metrics

| Metric | Target |
|---|---|
| Page load time (LCP) | < 2.5 seconds |
| Mobile responsiveness | 100% functional on 320px–1920px |
| Lighthouse Performance Score | ≥ 90 |
| Lighthouse Accessibility Score | ≥ 90 |
| Zero build errors | Required before launch |
| "Join Club" CTA visibility | Above the fold on all devices |

---

## 3. Target Audience & Personas

### Persona 1 — The Curious First-Year
- **Who:** Engineering fresher, just arrived at SLIET.
- **Goal:** Find interesting clubs to join, see if astronomy is cool enough.
- **Needs:** Inspiring visuals, clear value proposition, easy join process.

### Persona 2 — The Space Enthusiast
- **Who:** 2nd–4th year student already interested in space/astrophysics.
- **Goal:** Find the right club for their passion, see what domains it covers.
- **Needs:** Domain details, upcoming events, team credibility.

### Persona 3 — Faculty & Admin
- **Who:** A professor or dean reviewing the club's online presence.
- **Goal:** Evaluate professionalism and seriousness of the club.
- **Needs:** Faculty coordinator info, mission, clean & professional design.

### Persona 4 — External Visitor
- **Who:** Student from another institute, parent, or sponsor.
- **Goal:** Understand what the club does.
- **Needs:** Club overview, contact details, social links.

---

## 4. Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.x | UI component framework |
| **Vite** | 5.x | Fast build tool & dev server |
| **Tailwind CSS** | 3.x | Utility-first styling |
| **Framer Motion** | 11.x | Animations & transitions |
| **React Icons** | 5.x | Icon library |
| **React Scroll** | latest | Smooth in-page navigation |

### Constraints
- ❌ No Bootstrap
- ❌ No heavy UI component libraries (MUI, Chakra, Ant Design)
- ❌ No unnecessary dependencies
- ✅ Keep `node_modules` lean and production-ready

---

## 5. Design System

### 5.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `bg-base` | `#020617` | Page background (very dark navy) |
| `bg-surface` | `#0F172A` | Card & section backgrounds |
| `bg-border` | `#1E293B` | Dividers, card borders |
| `accent-blue` | `#3B82F6` | Primary CTA, active states, highlights |
| `accent-sky` | `#60A5FA` | Secondary accents, icon fills |
| `text-primary` | `#F8FAFC` | Headlines, body copy |
| `text-muted` | `#94A3B8` | Subheadings, captions, descriptions |

### 5.2 Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / H1 | Space Grotesk | 700 | Hero headline |
| Headings H2–H4 | Space Grotesk | 600 | Section titles |
| Body | Inter | 400 | Paragraphs, descriptions |
| Labels / UI | Inter | 500 | Buttons, nav links, tags |

Fonts loaded via **Google Fonts** (`@import` in `index.css`).

### 5.3 Spacing & Layout

- Base spacing unit: `8px` (Tailwind default)
- Section vertical padding: `py-24` (96px top/bottom)
- Max content width: `max-w-7xl` centered with `mx-auto px-6`
- Grid gap: `gap-6` to `gap-8`

### 5.4 Component Styles

#### Glassmorphism (Navbar, Cards)
```
background: rgba(255, 255, 255, 0.03)
backdrop-filter: blur(12px)
border: 1px solid rgba(255, 255, 255, 0.08)
```

#### Blue Glow (Accent Elements)
```
box-shadow: 0 0 40px rgba(59, 130, 246, 0.25)
```

#### Button — Primary (Solid)
```
bg-blue-600 hover:bg-blue-500
px-6 py-3 rounded-lg
transition-all duration-300
hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
```

#### Button — Secondary (Outline)
```
border border-white/20 hover:border-blue-500/60
text-white hover:text-blue-400
px-6 py-3 rounded-lg
transition-all duration-300
```

#### Card Base
```
bg-[#0F172A] border border-[#1E293B]
rounded-2xl p-6
hover:-translate-y-2
hover:border-blue-500/40
hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
transition-all duration-300
```

---

## 6. Information Architecture

```
/  (Single Page Application)
│
├── #home       → Hero Section
├── #about      → About Section
├── #domains    → Domains Section
├── #events     → Events Section
├── #team       → Team Section
└── #contact    → Contact Section
```

All navigation is **in-page smooth scroll**. No routing required for v1.

---

## 7. Section-by-Section Feature Specs

---

### 7.1 Navbar

**Type:** Fixed, full-width, `z-50`

**Behavior:**
- On page top: transparent background, no border
- On scroll (> 50px): `backdrop-blur-md`, `bg-[#020617]/80`, bottom border `border-white/10`
- Scroll state tracked via `useScrolled` custom hook

**Desktop Layout:**
```
[Logo Icon] [Club Name]          [Home] [About] [Domains] [Events] [Contact]   [Join Club ▶]
```

**Mobile Layout:**
- Club name + hamburger icon (☰)
- Animated slide-down drawer with all nav items + Join Club button
- Drawer closes on link click or outside tap

**Logo:**
- Custom SVG: simple telescope or star cluster icon
- Color: `#3B82F6` (blue accent)
- Size: 32px × 32px

**Nav Links:**
- Font: Inter 500
- Color: `text-slate-300` → `text-white` on hover
- Active section: `text-blue-400`

**Join Club Button:**
- Solid blue, small size (`px-4 py-2`)
- Glow on hover

---

### 7.2 Hero Section

**Type:** Full viewport (`min-h-screen`), centered content

**Background Layers (z-index stacked):**
1. Base color: `bg-[#020617]`
2. Radial blue glow: CSS `radial-gradient` from center, fades out
3. **StarField** (animated): Canvas-based or pure CSS, ~150–200 stars, slow twinkle animation
4. Subtle floating particles: 8–12 very small dots, slow random drift

**Center Content (vertically + horizontally centered):**

| Element | Spec |
|---|---|
| Eyebrow label | `SLIET · INAUGURATED 2026` — small caps, `text-blue-400`, letter-spaced |
| H1 Headline | `SLIET Antariksha Vigyan Club` — Space Grotesk 700, `text-5xl md:text-7xl` |
| Tagline | `Exploring the Universe.` `Inspiring Curiosity.` `Building the Future.` — staggered reveal |
| CTA Buttons | `About Us` (outline) + `Join Club` (solid blue) — side by side |
| Scroll Indicator | Animated bouncing chevron (`↓`), fades out after scroll |

**Animations:**
- Headline: `fadeUp` with 0.2s delay
- Tagline lines: staggered `fadeUp`, 0.1s between each line
- Buttons: `fadeUp` after tagline
- Stars: CSS `@keyframes twinkle` + random opacity/scale

**Feel:** Cinematic. Premium. Minimal. Like a SpaceX product page.

---

### 7.3 About Section

**ID:** `#about`
**Layout:** Two-column grid on desktop, single column stacked on mobile

**Left Column — Visual:**
- Space/telescope illustration
- AI-generated image (warm, dark, minimal)
- Slight blue tint overlay
- Rounded corners, subtle glow border
- Framer Motion: `fadeLeft` on reveal

**Right Column — Content:**

| Element | Content |
|---|---|
| Section label | `About Us` — small caps, blue |
| H2 | `Who We Are` |
| Description | 4–5 line paragraph about the club's founding, purpose, and community |
| **Vision** block | Icon + "Vision" label + 1-line vision statement |
| **Mission** block | Icon + "Mission" label + 1-line mission statement |
| Faculty Card | Glassmorphism card: avatar placeholder, `Dr. [Name]`, Dept. of Physics, `Faculty Coordinator` badge |

**Framer Motion:** `fadeRight` on the text column

---

### 7.4 Domains Section

**ID:** `#domains`
**Heading:** `Our Domains`
**Subheading:** `Five pillars of exploration and discovery`

**Layout:** Responsive CSS Grid
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

**Domain Cards (5 total):**

| # | Icon (React Icons) | Title | Description |
|---|---|---|---|
| 1 | `FaTelescope` | Astronomy & Observation | Learn telescope handling and sky observation. |
| 2 | `IosPlanetOutline` | Astrophysics & Space Science | Explore galaxies, stars, and the universe. |
| 3 | `VscCode` | Space Technology & Computing | Programming, simulations and space technologies. |
| 4 | `MdSatelliteAlt` | Satellites & Electronics | Embedded systems and satellite communication. |
| 5 | `BsCameraFill` | Astrophotography & Outreach | Capture the night sky and spread astronomy awareness. |

**Card Spec:**
- Background: `bg-[#0F172A]`
- Border: `border border-[#1E293B]`
- Icon: 40px, `text-blue-400`, inside a 64×64 glassmorphism circle
- Title: Space Grotesk 600, `text-white`
- Description: Inter 400, `text-slate-400`
- Hover: `translateY(-8px)` + `border-blue-500/40` + `shadow-[0_0_30px_rgba(59,130,246,0.15)]`
- **Framer Motion:** Stagger 0.1s between cards on reveal

---

### 7.5 Events Section

**ID:** `#events`
**Heading:** `Events`

**Layout:** Vertical timeline, centered axis line

**Sub-sections (tab or visual separation):**

#### Upcoming Events
- Empty state: elegant card with a calendar/telescope icon + `"No upcoming events yet. Stay tuned!"` message

#### Past Events
- Empty state: elegant card with archive icon + `"No past events yet."` message

**Future-proofing:** Data-driven via `src/data/events.js`. When events are added, each timeline node shows:
- Date badge
- Event name
- Short description
- Status tag (Upcoming / Completed)

---

### 7.6 Team Section

**ID:** `#team`
**Heading:** `Meet the Team`
**Subheading:** `The minds behind SLIET Antariksha Vigyan Club`

**Sub-sections:**

#### Faculty Head
- Single prominent card, larger format
- Avatar: initials-based gradient circle (no photo yet)
- Name: `[Faculty Name]`
- Role: `Faculty Head`
- Department placeholder

#### Core Team
- Grid of member cards (responsive: 4-col → 2-col → 1-col)
- State: **"Coming Soon"** elegant placeholder if no members yet

**Member Card Spec:**
- Avatar: initials gradient circle (`bg-gradient-to-br from-blue-600 to-sky-400`)
- Name: Space Grotesk 600
- Role: Inter, `text-blue-400`
- LinkedIn: `FaLinkedin` icon, links to profile

---

### 7.7 Contact Section

**ID:** `#contact`
**Heading:** `Interested in Space? Join Us!`
**Subheading:** `Take the first step towards exploring the cosmos.`

**Layout:** Two-column on desktop, stacked on mobile

**Left — CTA & Info:**

| Element | Detail |
|---|---|
| Google Form button | `Join the Club →` — large solid blue button |
| Email | `antariksha@sliet.ac.in` (placeholder) with `HiMail` icon |
| Instagram | `@sliet_antariksha` (placeholder) with `FaInstagram` icon |
| Location | `SLIET, Longowal, Sangrur, Punjab — 148106` with `HiLocationMarker` icon |

**Right — Map:**
- Embedded Google Maps `<iframe>` of SLIET Longowal campus
- Rounded corners, border, slight glow
- Fallback: styled placeholder card if iframe blocked

---

### 7.8 Footer

**Type:** Minimal dark strip (`bg-[#0A0F1E]`)

**Layout (3 columns, stacked on mobile):**

| Column | Content |
|---|---|
| **Brand** | Club name + tagline + social icons (Instagram, Email) |
| **Quick Links** | Home, About, Domains, Events, Team, Contact |
| **Info** | SLIET Longowal · Punjab, India |

**Bottom bar:**
```
© 2026 SLIET Antariksha Vigyan Club. All rights reserved.
```

---

## 8. Animation & Motion Design

### 8.1 Motion Variants (centralized in `src/utils/motionVariants.js`)

```js
fadeUp       → y: 40 → 0, opacity: 0 → 1
fadeLeft     → x: -40 → 0, opacity: 0 → 1
fadeRight    → x: 40 → 0, opacity: 0 → 1
scaleIn      → scale: 0.9 → 1, opacity: 0 → 1
stagger      → children stagger delay: 0.1s
```

### 8.2 Trigger Strategy

- All section reveals: `whileInView` + `viewport={{ once: true, amount: 0.2 }}`
- One-shot (not re-triggered on scroll up)
- Duration: 0.5s–0.7s ease-out

### 8.3 Interaction Animations

| Element | Animation |
|---|---|
| Domain cards | `whileHover: { y: -8 }` + CSS box-shadow transition |
| Buttons | `whileHover: { scale: 1.04 }` + CSS glow |
| Nav links | CSS `transition-colors` 200ms |
| Member cards | CSS hover scale 1.02 |

### 8.4 Hero Animations

- Stars: CSS `@keyframes twinkle` (opacity oscillation, 2–5s random duration)
- Particles: CSS `@keyframes drift` (slow translate + opacity)
- Text: Framer Motion stagger reveal

### 8.5 Principles

- ✅ Purposeful — every animation communicates something
- ✅ Subtle — nothing distracting or excessive
- ❌ No spinning planets
- ❌ No continuous looping complex animations
- ✅ Respects `prefers-reduced-motion`

---

## 9. Responsiveness Requirements

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | 320px – 639px | Single column, stacked layout, hamburger nav |
| Tablet | 640px – 1023px | 2-column grids, condensed hero text |
| Desktop | 1024px+ | Full layout as designed |
| Large | 1280px+ | Max-width container centered |

All layouts tested at: 375px (iPhone SE), 768px (iPad), 1280px (Laptop), 1920px (Desktop).

---

## 10. Accessibility Requirements

| Requirement | Implementation |
|---|---|
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` |
| Heading hierarchy | H1 (hero only) → H2 (sections) → H3 (cards) |
| Image alt text | All `<img>` tags include descriptive `alt` attributes |
| Keyboard navigation | Tab order logical, focus rings visible (`focus-visible`) |
| Button labels | All icon-only buttons have `aria-label` |
| Color contrast | All text meets WCAG AA (≥ 4.5:1 ratio) |
| Reduced motion | Framer Motion variants wrapped with `useReducedMotion()` |
| ARIA landmarks | `role="banner"`, `role="main"`, `role="contentinfo"` |

---

## 11. Project Architecture

### 11.1 Folder Structure

```
antariksha-web/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── about-illustration.jpg
│   ├── data/
│   │   ├── domains.js       ← 5 domain objects
│   │   ├── team.js          ← team members array
│   │   └── events.js        ← upcoming/past events arrays
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── StarField.jsx
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Domains/
│   │   │   ├── Domains.jsx
│   │   │   └── DomainCard.jsx
│   │   ├── Events/
│   │   │   └── Events.jsx
│   │   ├── Team/
│   │   │   ├── Team.jsx
│   │   │   └── MemberCard.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── hooks/
│   │   └── useScrolled.js
│   ├── utils/
│   │   └── motionVariants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

### 11.2 Component Responsibilities

| Component | Responsibility |
|---|---|
| `Navbar.jsx` | Fixed nav, scroll state, mobile drawer |
| `Hero.jsx` | Full-screen hero, CTA buttons |
| `StarField.jsx` | Canvas/CSS star animation |
| `About.jsx` | Two-column about layout |
| `Domains.jsx` | Grid layout + stagger animation |
| `DomainCard.jsx` | Single reusable domain card |
| `Events.jsx` | Timeline layout + empty states |
| `Team.jsx` | Team grid + section headers |
| `MemberCard.jsx` | Single reusable member card |
| `Contact.jsx` | Contact info + map |
| `Footer.jsx` | Footer links + copyright |
| `useScrolled.js` | Returns `true` when page scrolled > 50px |
| `motionVariants.js` | Shared Framer Motion variants object |

---

## 12. Data Contracts

### `domains.js`
```js
export const domains = [
  {
    id: 1,
    icon: "FaTelescope",        // React Icon name (string, resolved in component)
    title: "Astronomy & Observation",
    description: "Learn telescope handling and sky observation.",
    color: "#3B82F6"
  },
  // ... 4 more
]
```

### `team.js`
```js
export const facultyHead = {
  name: "Dr. [Name]",
  role: "Faculty Coordinator",
  department: "Dept. of Physics",
  linkedin: "#"
}

export const coreTeam = []  // empty for launch; add objects as club grows
```

### `events.js`
```js
export const upcomingEvents = []
export const pastEvents = []

// Future shape:
// { id, title, date, description, status: "upcoming" | "past" }
```

---

## 13. Open Questions & Decisions Needed

| # | Question | Default if unanswered |
|---|---|---|
| Q1 | Google Form URL for "Join Club" button? | `#` placeholder |
| Q2 | Faculty Coordinator real name & department? | `Dr. [Name], Dept. of Physics` |
| Q3 | Core Team — placeholder cards or "Coming Soon"? | "Coming Soon" state |
| Q4 | Google Maps — real SLIET embed or placeholder? | Real SLIET Longowal iframe |
| Q5 | Email & Instagram handles — real or placeholder? | Placeholder values |

---

## 14. Out of Scope (v1)

The following features are **not** in scope for the launch version:

| Feature | Planned For |
|---|---|
| CMS / Admin dashboard | v2 |
| Member authentication / login | v2 |
| Real-time event registration | v2 |
| Photo gallery / astrophotography showcase | v2 |
| Blog / articles section | v2 |
| Dark/light mode toggle | v2 |
| Multi-language support | Future |
| PWA / offline support | Future |

---

*End of Document — v1.0*
*© 2026 SLIET Antariksha Vigyan Club*
