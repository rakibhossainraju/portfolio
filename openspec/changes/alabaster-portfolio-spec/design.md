## Context

The goal is to rebuild the portfolio into a "Technical Authority" showcase for Light Yagami, a Web Systems Developer. The current state is assumed to be a standard portfolio that lacks the industrial, high-spec feel required to impress technical leadership (CTOs).

## Goals / Non-Goals

**Goals:**
- Implement the "Alabaster Spec Sheet" aesthetic (#faf9f5 base, technical typography).
- Use Next.js (PPR) to demonstrate high-performance reactivity and modern rendering strategies.
- Prioritize technical logic and architectural diagrams over standard screenshots.
- Establish a witty, unfiltered, professional tone that respects the craft.

**Non-Goals:**
- No "dark mode" or "hacker" tropes.
- No progress bars or skill percentages.
- No entry-level personal projects.

## Decisions

- **Next.js PPR (Partial Prerendering)**: Leverage PPR to deliver the static "spec sheet" shell instantly while streaming in project details and interactive elements. This reinforces the "high-performance" persona.
- **Typography-First Layout**: Use industrial, mono-spaced or high-contrast sans-serif fonts to mimic physical technical specifications. Large headers and intentional whitespace will drive the hierarchy.
- **GSAP for Mechanical Motion**: Use GSAP for subtle, high-precision animations that feel like "mechanical parts" moving into place, avoiding bouncy or playful transitions.
- **Domain Authority Mapping**: Categorize skills into "Core Systems," "Infrastructure," and "Architecture" to signal seniority and specialized knowledge.
- **Alabaster Spec Sheet Color Palette**:
    - **Base (Paper)**: `#faf9f5` - The creamy, warm off-white "Canvas."
    - **Primary Text**: `#1a1a1a` - A "Soft Black" (Ink). High contrast but easier on the eyes than pure #000.
    - **Secondary Text**: `#666660` - A muted, warm grey for metadata (Dates, Tech Stacks, Labels).
    - **Accents/Lines**: `#e2e0d5` - A subtle, darker beige for thin borders and "technical" dividers.
- **Technical Diagrams**: Use SVG-based architectural diagrams to explain the "hard paths" taken in projects like Quix (state management) and Assistant Widget (system isolation).


## Risks / Trade-offs

- **[Risk] Minimalist Aesthetic** → The design might appear "unfinished" to non-technical users. *Mitigation*: Ensure typography and layout are extremely polished and intentional to convey premium quality.
- **[Risk] Text-Heavy Content** → CTOs are busy and might skim. *Mitigation*: Use a "Spec Sheet" format with clear technical metadata (Performance, Tech Stack, Key Wins) for easy scanning.
- **[Risk] GSAP Bundle Size** → Potential impact on load times. *Mitigation*: Only load GSAP for interactive sections and use Next.js dynamic imports to keep the initial payload light.
