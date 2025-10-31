# Design Guidelines: Awwwards-Inspired Freelancer Portfolio

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Awwwards-winning portfolio sites (Active Theory, Fantasy Interactive) known for immersive, cinematic experiences with bold typography, generous white space, and seamless scroll-driven narratives.

**Core Principles**:
- Cinematic storytelling through scroll
- Performance-first animations (60fps minimum)
- Bold typography with generous breathing room
- Content-forward approach with subtle motion enhancement
- Grid-based precision with asymmetric breakpoints

---

## Typography Hierarchy

**Primary Font**: Inter for body text and UI elements
**Display Font**: SF Pro Display for headlines and hero sections

**Scale**:
- Hero Headlines: 4xl to 6xl (responsive), font-weight 700, tracking-tight
- Section Headers: 3xl to 5xl, font-weight 600
- Subsections: 2xl to 3xl, font-weight 500
- Body Text: base to lg, font-weight 400, leading-relaxed
- Captions/Meta: sm to base, font-weight 400, text-gray-600

**Hierarchy Rules**: Limit to 3 font sizes per viewport to maintain clarity. Use weight and spacing for differentiation rather than size proliferation.

---

## Layout System & Spacing

**Tailwind Spacing Primitives**: Use units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Micro spacing (internal components): p-4, gap-4, space-y-4
- Standard spacing (between sections): py-16 to py-24 (mobile), py-24 to py-32 (desktop)
- Macro spacing (major sections): py-32 to py-48

**Container Strategy**:
- Full-width hero sections with inner max-w-7xl containers
- Content sections: max-w-6xl for multi-column, max-w-4xl for text-focused
- Asymmetric margins: Vary left/right spacing to create visual interest

**Grid Patterns**:
- Portfolio cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8
- Landing page templates: Masonry-style or staggered grid with varying heights
- About section: 2-column split (image + bio) on desktop

---

## Page-Specific Layouts

### Home Page
**Hero Section** (100vh):
- Full-bleed cinematic hero with large hero image (modern workspace, creative setup, or abstract tech visual)
- Centered oversized headline with staggered word animation on load
- Minimal tagline below with fade-in delay
- Scroll indicator at bottom (animated)

**Featured Work Section**:
- 3-column grid showcasing top 3-6 projects
- Card-based with image preview, project title, client/category tag
- Hover effect: subtle scale transform with overlay revealing project type

**Capabilities Strip**:
- Horizontal scrolling showcase of skills/services with icon + label pairs
- Seamless infinite scroll or manual drag interaction

**CTA Section**:
- Full-width section with centered heading + paragraph + primary CTA button
- Supporting text: "Let's create something extraordinary together"

### Portfolio Page
**Filter Bar**:
- Sticky horizontal filter (All, Web Design, Landing Pages, E-commerce, etc.)
- Active state with underline indicator animation

**Project Grid**:
- Masonry-style layout with varying card heights based on image aspect ratios
- Each card: preview image, project name, category tag, year
- Click reveals modal or navigates to detail view with larger images + description

**Template Catalog Section**:
- Dedicated area showcasing pre-made landing page templates
- Cards with screenshot thumbnail, template name, "Select Template" CTA
- Visual badge for "Popular" or "New" templates

### About Page
**Hero Section** (80vh):
- Split layout: Left side with portrait/workspace image, right side with compelling bio paragraph
- Stats strip below: Years active, Projects completed, Happy clients

**Process Section**:
- Timeline or step-by-step visualization of workflow (Discovery → Design → Development → Launch)
- Each step with icon, title, description in horizontal flow

**Testimonials**:
- 2-column grid of client quotes with avatar, name, company
- Subtle background treatment per card

### Contact Page
**Contact Form** (centered, max-w-2xl):
- Fields: Name, Email, Project Type dropdown, Budget Range (optional), Template Selection dropdown ("Custom" or list pre-made templates), Message
- Template dropdown with preview thumbnails on hover
- Primary CTA: "Send Request"

**Supporting Information**:
- Side panel or bottom section: Response time estimate, alternative contact methods (email, LinkedIn)
- Trust indicators: "Typical response within 24 hours"

---

## Component Library

### Navigation
**Desktop**: Horizontal nav with logo left, links center/right (Home, Portfolio, About, Contact)
**Mobile**: Hamburger menu with full-screen overlay, staggered link animations

**Scroll Behavior**: Nav background blur effect on scroll with subtle shadow

### Cards (Portfolio/Template)
- Border radius: rounded-lg to rounded-xl
- Shadow: subtle on base, elevated on hover (shadow-lg)
- Aspect ratio: 16:9 or 4:3 for consistency in grids
- Overlay on hover: gradient overlay bottom-to-top with project details

### Buttons
**Primary CTA**: Large px-8 py-4, rounded-full, font-semibold
**Secondary**: Outlined variant with border-2
**Ghost**: Text-only with arrow icon
**On Images**: Backdrop-blur background with white text (backdrop-blur-md bg-white/20)

### Image Sliders
- Fade transition between slides (no slide/swipe)
- Navigation: Minimal dots indicator or subtle arrows
- Autoplay: 5-second intervals with pause on hover
- Loading: Skeleton placeholder with shimmer effect

### Modals/Overlays
- Full-screen or large centered modal for project details
- Close button: top-right fixed position
- Background: backdrop-blur-lg with dark overlay (bg-black/60)

---

## Animation Strategy

**Loading Animation** (page entry):
- Staggered fade-in of logo, then headline words (0.1s delay between)
- Total duration: 1.2-1.5s, easing: cubic-bezier(0.4, 0, 0.2, 1)

**Scroll-Triggered Reveals**:
- Elements fade-up (opacity 0→1, translateY 30px→0) when entering viewport
- Trigger threshold: 20% of element visible
- Stagger children in grids: 0.05-0.1s delay per item

**Parallax Effects**:
- Hero background images: Move at 0.5x scroll speed for depth
- Limit to hero sections to avoid motion sickness

**Micro-interactions**:
- Button hover: scale(1.02) with 150ms transition
- Card hover: scale(1.03) + shadow-xl with 200ms ease-out
- Link underline: width 0→100% on hover

**Performance Rules**:
- Use transform and opacity only for animations (GPU-accelerated)
- Debounce scroll listeners
- Lazy load images below fold
- Disable animations on reduced-motion preference

---

## Images

**Hero Image** (Home): High-quality workspace, creative setup, or abstract gradient composition (3840x2160 for 4K). Position: background cover, overlay with subtle gradient for text readability.

**Portfolio/Template Cards**: Screenshots of actual landing pages or mockups (1920x1080). Use consistent aspect ratios across grid.

**About Page**: Professional portrait or team workspace photo (1200x1600 portrait orientation).

**Image Treatment**: Slight blur on load with progressive reveal, maintain original colors without heavy filters.

---

## Responsive Breakpoints

- Mobile: Base (320px+) - single column, stacked layout
- Tablet: md (768px+) - 2-column grids, adjusted spacing
- Desktop: lg (1024px+) - 3-column grids, full feature set
- Large: xl (1280px+) - max container widths, enhanced spacing
- 4K: 2xl (1536px+) - maintain readability, don't over-expand

**Mobile Optimizations**: Reduce animation complexity, convert parallax to static, hamburger nav, larger touch targets (min 44x44px).