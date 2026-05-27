---
name: AuraResin Studio
colors:
  surface: '#faf9fe'
  surface-dim: '#dad9df'
  surface-bright: '#faf9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf3'
  surface-container-high: '#e9e7ed'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5e60'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe1'
  on-secondary-container: '#616365'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e4'
  secondary-fixed-dim: '#c6c6c8'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#faf9fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  max-width: 1440px
---

## Brand & Style
The design system is a high-fidelity tribute to the interplay of light and liquid medium. It targets art collectors and creators who value precision, materiality, and the quiet luxury of an architectural gallery space. The aesthetic is a refined fusion of **Minimalism** and **Glassmorphism**, emphasizing the physical properties of epoxy resin: clarity, depth, and subtle light refraction.

The emotional response should be one of "Structured Serenity"—a feeling that the interface is as much a piece of art as the content it hosts. Visual weight is carried by whitespace and surface texture rather than heavy ornamentation.

## Colors
The palette is intentionally monochromatic to allow the artwork and resin-like UI effects to take center stage. 

- **Studio Soft Grey (#F5F5F7):** The primary canvas color, mimicking the matte finish of gallery walls.
- **Pure White (#FFFFFF):** Used for elevated "resin" surfaces and interactive containers to provide maximum contrast against the grey base.
- **Obsidian (#111111):** The anchor for all typography and structural iconography, ensuring high legibility and an editorial feel.
- **Translucency:** Glassmorphism layers utilize a `rgba(255, 255, 255, 0.7)` fill with a 20px-40px backdrop blur to simulate the thickness of liquid resin.

## Typography
The typography system relies on a high-contrast pairing between an editorial display serif and a systematic geometric sans. 

**Playfair Display** is reserved for headings and expressive moments, utilizing tight letter spacing and large scales to evoke the feel of a premium art publication. **Inter** handles all functional, navigational, and body text, providing a neutral, technical balance to the more romantic serif. All labels and metadata should use uppercase Inter with generous tracking to reinforce the architectural grid.

## Layout & Spacing
This design system utilizes a **fixed grid** model on desktop to maintain the integrity of a framed composition, and a fluid grid on mobile.

- **Desktop:** 12-column grid with a 1440px max-width, 64px outer margins, and 24px gutters.
- **Mobile:** 4-column fluid grid with 20px outer margins.
- **Rhythm:** An 8px linear scale governs all padding and margins. Vertical rhythm is generous; use white space to separate "exhibits" (content sections) rather than lines or borders where possible.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and material stacking rather than traditional drop shadows.

- **Level 1 (Base):** Studio Soft Grey (#F5F5F7).
- **Level 2 (Containers):** Pure White (#FFFFFF) with a 1px #EEEEEE border.
- **Level 3 (Resin Overlay):** Translucent White (#FFFFFF at 70% opacity) with a `backdrop-filter: blur(20px)`.
- **Shadows:** When necessary, use extremely diffused, low-opacity ambient shadows: `0 10px 40px rgba(0,0,0,0.04)`.
- **Reflections:** High-elevation components should feature a subtle 1px white inner-stroke (top-left) to simulate a light source hitting the edge of a resin slab.

## Shapes
The shape language is controlled and modern. A base roundedness of 12px (`rounded-md` in this scale) is applied to all primary containers, input fields, and cards to soften the architectural grid. 

Interactive elements like badges, chips, and the system toggle bar utilize "Pill" shapes (full border-radius) to create a distinct visual contrast against the more structured rectangular layout of the content blocks.

## Components
- **Buttons:** Primary buttons are Obsidian (#111111) with white text, 12px rounded corners. Secondary buttons use the Resin effect (translucent blur) with a 1px border.
- **System Toggle Bar:** A sleek, semi-transparent pill-shaped container. The active state is indicated by a white "floating" island that slides behind the icons/text.
- **Cards:** White backgrounds with no shadow, but a subtle 1px light grey border. Images inside cards should have a 0px radius at the top to sit flush with the container edges.
- **Pill Badges:** High-contrast Obsidian background with white label-caps typography, used for status or categories.
- **Input Fields:** Soft grey (#F5F5F7) fills that darken slightly on hover, with a 12px radius and clear obsidian placeholder text.
- **Lists:** Clean, borderless list items separated by whitespace and 1px dividers that do not span the full width of the container.