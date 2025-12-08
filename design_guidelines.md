# Design Guidelines: Cyber-Aesthetic Gen-Z Dark Rave Portfolio

## Design Approach
**Reference-Based Approach**: Futuristic rave OS aesthetic combining cyberpunk/dark rave culture with modern web portfolio best practices. Think neon-lit nightclub meets high-tech interface.

## Theme & Visual Language

### Color Palette
- **Base**: Pure black (#000000) / deep charcoal background
- **Neon Accents**: Electric blue, cyan, magenta, purple, acid green
- **Glow Effects**: Use box-shadow and text-shadow to simulate neon tube lighting
- **Gradients**: Radial neon glows and angular gradient borders

### Visual Effects
- VHS/glitch micro-animations on hover and transitions
- Subtle grain/noise overlay for gritty rave texture
- RGB separation effects during transitions
- Neon glow rings on interactive elements

## Typography
- **Hierarchy**: Bold, futuristic sans-serif fonts
- **Effects**: Animated typewriter effects, GSAP split-text stagger animations
- **Glow**: Text-shadow on headings for neon effect
- **Weights**: Use variety (thin for body, bold for impact headers)

## Layout System
**Spacing**: Use Tailwind units of 4, 8, 12, 16, 24 for consistent rhythm (p-4, h-8, m-12, gap-16, py-24)

## Core Components

### Global Experience
1. **Custom Cursor System**
   - Small central dot + larger blurred outer circle with delay
   - Interactive states: grows, changes color, shows label text on hover
   
2. **Preloader/Intro Screen**
   - Animated "HP" logo with neon stroke + glow
   - Glitch text: "Booting RaveOS…", "Loading Portfolio…"
   - GSAP timeline entrance

3. **Page Transitions**
   - Rave-style screen wipe, glitch line, or expanding neon circle
   - Opacity + scale + RGB separation effects

### Navigation
- Floating/fixed navbar with neon underline hover effects
- Magnetic hover effects on nav items
- Staggered entrance animation on load

### Buttons
- Magnetic hover (button moves toward cursor)
- Neon glow pulse on hover
- Scale + glow animations
- Blurred backgrounds when on images

## Page-Specific Layouts

### Home Page
- **Hero**: Fullscreen Three.js scene (neon particles, energy waves, wireframe sphere)
- Mouse parallax movement
- GSAP split-text stagger for intro text
- Diagonal neon grid or wave lines background
- Two CTA buttons with magnetic hover

### About Page
- **Hero Strip**: Neon-framed circular profile image with glow
- Name + Role + animated typewriter subtitle
- **Skills Area**: Fluid layout of hoverable skill chips (scale, glow, slight jitter)
- **Timeline**: Vertical/horizontal with neon connectors, scroll-triggered GSAP reveals

### Projects Page
- **Filter Bar**: Category tabs with animated transitions
- **Project Cards**: 3D tilt-on-hover, neon borders, tech stack tags
- Staggered card entrance/exit animations
- **Detail Modal**: Hero banner, role, tech, features, links

### Contact Page
- **Form**: Neon inputs with focus glow, animated submit button
- **Background**: Three.js floating spheres/blobs
- **Social Links**: Glitch flicker or glow ring on hover

## Animation Strategy
- **Scroll Animations**: GSAP ScrollTrigger for section reveals, timelines, card staggers
- **Micro-interactions**: GSAP for custom cursor, magnetic buttons, hover glows
- **Page Transitions**: Barba.js for route changes with glitch/fade effects
- **Component Transitions**: Framer Motion for mounting/unmounting
- **Performance**: Reuse canvases, avoid heavy loops

## Responsive Design
- **Desktop**: Multi-column, breathing space, large type, full animations
- **Tablet**: Stacked sections, simplified 3D effects
- **Mobile**: Single-column, essential animations only (no breaking), touch-optimized

## Images
**Hero Image**: No traditional hero image - using Three.js 3D animated scene instead
**About Page**: Neon-framed profile photo (circular with glow effect)
**Project Cards**: Project preview images with neon borders and tilt effects

## Content Density
- Generous whitespace on black background for neon elements to breathe
- Dense information areas (skills, timeline) balanced with animated focal points
- Each page section has clear visual hierarchy with neon separators

## Special Features
- Optional audio reactive mode toggle (visualizers react to beat)
- Custom scrollbar styling
- Grain/noise texture overlay globally
- Neon grid accents as background elements