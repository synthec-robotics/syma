# SYMA Landing Page Design Guidelines

## Design Approach
**Reference-Based**: High-impact technological aesthetic inspired by "Awwwards" style websites, focusing on futuristic robotics platform presentation with dark mode sophistication.

## Core Design Elements

### A. Typography
- **Body Text**: 'Inter' or 'Roboto' - clean, readable sans-serif
- **Headings/Titles**: 'Orbitron' or 'Montserrat' (Bold) - technological, futuristic feel
- **Hierarchy**: Large hero titles, clear section headers, readable body copy

### B. Color Palette
- **Background**: Deep dark mode - almost black or deep midnight blue with subtle gradients
- **Primary Accent**: Cyan electric (#00f3ff) or neon blue for CTAs and important elements
- **Visual Treatment**: Technological, high-tech aesthetic with glowing accents

### C. Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16 for consistent rhythm
- **Approach**: Mobile-first responsive design using Flexbox and CSS Grid
- **Container**: Full-width sections with centered content areas

### D. Visual Effects
- **Glassmorphism**: Frosted glass effect (backdrop-blur) on navigation bar and information cards
- **Gradients**: Subtle background gradients for depth
- **Glow Effects**: CTA button with glow on hover

## Component Library

### Navigation
- Fixed top navbar with glassmorphism effect
- SYNTHEC logo left-aligned
- Navigation links right-aligned with smooth scroll behavior

### Hero Section
- Full viewport height (100vh)
- Large "SYMA" title
- **Typewriter Effect**: Animated text cycling through:
  - "Redefiniendo la Manufactura"
  - "Robótica Modular"
  - "Industria 5.0"
  - "Materia Programable"
- Primary CTA button: "Ver Prototipo" with glow hover effect

### About Section
- Two-column layout: Text content + 3D image/diagram placeholder
- Extract content from project abstract describing SYMA platform

### Feature Cards (3 Cards)
- Icons: FontAwesome or modern SVG icons
- Titles: "Versatilidad", "Robustez", "Bajo Costo"
- Hover animation: Subtle float effect (translateY)
- Glassmorphism card styling

### Technical Specifications
- Visual technical presentation with:
  - "Microcontrolador: ESP32"
  - "Comunicación: ESP-NOW"
  - "Locomoción: Diferencial"
  - "Acoplamiento: Electroimanes de Retención"
- Progress bars or chip icons for visual interest

### Team Section
- Card grid for team members:
  - Angel Moreno
  - Carlos García
  - Susana Fang
  - Emiliano Bustamante

### Footer
- Elegant, minimalist design
- "© 2025 SYNTHEC Robotics"
- Social media links (placeholder)

## Interactions & Animations

### Scroll Reveal
- Implement Intersection Observer API
- Fade-in-up animations for all major sections
- Smooth, progressive disclosure as user scrolls

### Typewriter Effect
- Smooth typing and erasing animation in hero section
- Continuous loop through specified phrases

### Hover States
- Feature cards: Float upward slightly
- CTA buttons: Glowing effect
- Navigation links: Subtle color transitions

## Images
**Hero Section**: Consider adding a technical/futuristic background image or abstract 3D robotics visualization behind the text to enhance the technological aesthetic.

**About Section**: Placeholder for SYMA module 3D render or technical diagram showing the modular architecture.

**Visual Density**: Maintain elegance through strategic use of whitespace despite the dark, tech-heavy aesthetic.