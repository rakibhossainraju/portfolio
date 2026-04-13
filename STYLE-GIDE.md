# Style Guide: Alabaster Spec Sheet

This guide defines the visual and interactive standards for the Alabaster Spec Sheet design system.

## Design System: Alabaster Spec
The visual language mimics a physical technical specification sheet. It is typography-first, industrial, and high-precision but with very modern look.

### Color Schema (from `src/app/globals.css`)
- **Base (Paper):** `#faf9f5` — The creamy, warm off-white canvas.
- **Ink (Primary):** `#1d1d1b` — High-contrast "Soft Black" for primary text.
- **Lead (Secondary):** `#4a4a44` — Muted warm grey for metadata (AAA Contrast).
- **Structural (Accents):** `#e2e0d5` — Subtle beige for technical dividers and borders.

### Typography
- **Sans (Headers/Industrial):** Inter (Bold, tracking-tighter).
- **Body (Primary):** Satoshi.
- **Mono (Technical/Data):** JetBrains Mono.

## Visual Constraints
- **Minimalist Aesthetic:** No drop shadows, no gradients, and no rounded corners > 2px.
- **Technical Typography:** Use JetBrains Mono to highlight performance wins (e.g., [REDUCTION: 40% BUNDLE SIZE]).

## Motion & Animation
- **Refined Mechanical Motion:** Any motion or animation MUST use GSAP and feel intentional, mechanical, and refined. Avoid bouncy or playful transitions. It should feel like high-precision mechanical parts moving into place.
