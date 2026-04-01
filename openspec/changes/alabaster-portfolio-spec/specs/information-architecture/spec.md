## ADDED Requirements

### Requirement: Technical Authority Sitemap
The portfolio SHALL follow a sitemap structure that prioritizes engineering systems over personal projects, using a "spec sheet" hierarchy.

#### Scenario: Navigation to Core Systems
- **WHEN** a user accesses the `/systems` directory
- **THEN** they MUST see a technical index of Quix, Assistant Widget, and ThriveDesk with metadata-rich summaries.

#### Scenario: Infrastructure and Tooling Visibility
- **WHEN** a user navigates to `/infrastructure`
- **THEN** they SHALL find detailed breakdowns of Rust terminal development, custom CI/CD pipelines, and S3 deployment strategies.

### Requirement: Domain Authority Categorization
The portfolio SHALL replace traditional "Skill Bars" with a "Domain Authority" matrix that categorizes expertise by system level.

#### Scenario: Viewing Domain Authority
- **WHEN** a user scrolls to the expertise section
- **THEN** they MUST see categories for Core Systems (Reactivity, Wasm), Infrastructure (CI/CD, Rust), and Architecture (Distributed Systems, System Isolation).

### Requirement: System Post-Mortems
Each featured project SHALL include a "Technical Post-Mortem" section detailing bottlenecks, state management strategies, and architectural trade-offs.

#### Scenario: Accessing Quix Technical Details
- **WHEN** a user views the Quix project page
- **THEN** they MUST find a specific section on "Massive State Management" and "Performance Bottlenecks" with architectural diagrams.
