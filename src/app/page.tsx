import { Suspense } from "react";
import EngineeringLog from "./components/EngineeringLog";

// ---------------------------------------------------------------------------
// SVG: Quix Page Builder — Data Flow Architecture Diagram
// ---------------------------------------------------------------------------

function QuixArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 680 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl"
      aria-label="Quix Page Builder: Redux-driven data flow architecture"
      role="img"
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4a4a44" />
        </marker>
      </defs>

      {/* --- Nodes --- */}
      {/* User Action */}
      <rect x="20" y="130" width="120" height="44" fill="none" stroke="#e2e0d5" strokeWidth="1" />
      <text x="80" y="149" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4a4a44">USER ACTION</text>
      <text x="80" y="163" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#1d1d1b">drag / drop / edit</text>

      {/* Redux Dispatcher */}
      <rect x="200" y="130" width="130" height="44" fill="none" stroke="#e2e0d5" strokeWidth="1" />
      <text x="265" y="149" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4a4a44">REDUX DISPATCHER</text>
      <text x="265" y="163" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#1d1d1b">typed action creator</text>

      {/* Middleware */}
      <rect x="200" y="30" width="130" height="44" fill="none" stroke="#e2e0d5" strokeWidth="1" />
      <text x="265" y="49" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4a4a44">OPTIMISTIC MW</text>
      <text x="265" y="63" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#1d1d1b">speculative update</text>

      {/* Normalised Store */}
      <rect x="390" y="80" width="130" height="44" fill="none" stroke="#1d1d1b" strokeWidth="1" />
      <text x="455" y="99" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#1d1d1b" fontWeight="bold">NORMALISED STORE</text>
      <text x="455" y="113" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#4a4a44">entities + ids map</text>

      {/* Canvas Renderer */}
      <rect x="390" y="190" width="130" height="44" fill="none" stroke="#e2e0d5" strokeWidth="1" />
      <text x="455" y="209" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4a4a44">CANVAS RENDERER</text>
      <text x="455" y="223" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#1d1d1b">React.memo selectors</text>

      {/* API Sync */}
      <rect x="560" y="130" width="100" height="44" fill="none" stroke="#e2e0d5" strokeWidth="1" />
      <text x="610" y="149" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4a4a44">API SYNC</text>
      <text x="610" y="163" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#1d1d1b">debounced persist</text>

      {/* --- Edges --- */}
      {/* User → Dispatcher */}
      <line x1="140" y1="152" x2="198" y2="152" stroke="#4a4a44" strokeWidth="1" markerEnd="url(#arrow)" />
      {/* Dispatcher → Middleware */}
      <line x1="265" y1="130" x2="265" y2="76" stroke="#4a4a44" strokeWidth="1" markerEnd="url(#arrow)" />
      {/* Middleware → Store */}
      <line x1="330" y1="52" x2="390" y2="95" stroke="#4a4a44" strokeWidth="1" strokeDasharray="4,2" markerEnd="url(#arrow)" />
      {/* Dispatcher → Store */}
      <line x1="330" y1="152" x2="390" y2="115" stroke="#4a4a44" strokeWidth="1" markerEnd="url(#arrow)" />
      {/* Store → Canvas */}
      <line x1="455" y1="124" x2="455" y2="188" stroke="#4a4a44" strokeWidth="1" markerEnd="url(#arrow)" />
      {/* Store → API */}
      <line x1="520" y1="102" x2="560" y2="140" stroke="#4a4a44" strokeWidth="1" markerEnd="url(#arrow)" />

      {/* Labels on edges */}
      <text x="165" y="147" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#4a4a44">dispatch()</text>
      <text x="270" y="107" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#4a4a44">intercept</text>
      <text x="370" y="155" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#4a4a44">commit</text>
      <text x="458" y="162" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#4a4a44">select()</text>

      {/* Rollback indicator */}
      <path d="M 200 52 Q 80 52 80 130" stroke="#4a4a44" strokeWidth="1" fill="none" strokeDasharray="3,3" markerEnd="url(#arrow)" />
      <text x="30" y="88" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#4a4a44">rollback</text>
      <text x="30" y="98" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#4a4a44">on failure</text>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const COMPETENCIES = [
  {
    domain: "Runtime & Logic",
    items: [
      { name: "React", note: "concurrent features, Suspense, transitions" },
      { name: "Next.js", note: "PPR, RSC, cache boundaries" },
      { name: "Rust", note: "CLI tooling, systems utilities" },
      { name: "Wasm", note: "binary optimisation, browser compute" },
    ],
  },
  {
    domain: "State & Data",
    items: [
      { name: "Redux", note: "normalised stores, middleware chains" },
      { name: "RxJS", note: "reactive pipelines, backpressure" },
      { name: "Complex Reactivity", note: "optimistic UI, speculative updates" },
      { name: "Normalisation", note: "entity maps, selector memoisation" },
    ],
  },
  {
    domain: "Infrastructure",
    items: [
      { name: "CI/CD", note: "GitHub Actions, custom pipelines" },
      { name: "S3", note: "static delivery, presigned upload flows" },
      { name: "Shell Scripting", note: "build automation, release scripts" },
      { name: "Build Tools", note: "Turbopack, Vite, custom Rollup configs" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ------------------------------------------------------------------ */}
      {/* HEADER                                                              */}
      {/* ------------------------------------------------------------------ */}
      <header>
        {/* Task 1.4: structural 1px top line */}
        <div className="w-full h-px bg-structural" />

        <div className="px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Task 2.1: name in Mono font */}
          <span className="font-mono text-[0.75rem] uppercase tracking-widest text-ink">
            Light Yagami
          </span>
          <span className="font-mono text-[0.75rem] uppercase tracking-widest text-lead">
            Web Systems Developer
          </span>
        </div>
      </header>

      <main className="flex-1">

        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 md:px-12 pt-20 pb-24 border-b border-structural">
          {/* Task 2.3: system status indicator */}
          <p className="font-mono text-[0.75rem] uppercase tracking-widest text-lead mb-8">
            [SYSTEM_STATUS: ACTIVE] &nbsp;/&nbsp; SOFTWARE ENGINEER: SYSTEMS &amp; WEB ARCHITECTURE
          </p>

          {/* Task 2.2: hero H1 in Inter (font-sans) */}
          <h1 className="text-hero font-sans text-ink leading-none tracking-tighter mb-8 max-w-4xl">
            Systems Over Software.
          </h1>

          <p className="font-body text-prose text-lead max-w-2xl">
            Building on the hard paths — Rust, Wasm, custom CI/CD, architectural trade-offs that
            don&apos;t fit on a slide deck. This isn&apos;t a portfolio of features shipped.
            It&apos;s a record of constraints solved.
          </p>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CORE COMPETENCIES                                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 md:px-12 py-20 border-b border-structural">
          <p className="text-label text-lead mb-10">
            § 01 — Core Competencies
          </p>

          {/* Task 3.1: three-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {COMPETENCIES.map((col) => (
              <div key={col.domain} className="space-y-5">
                {/* Column header */}
                <h2 className="font-mono text-[0.75rem] uppercase tracking-widest text-lead border-b border-structural pb-2">
                  {col.domain}
                </h2>

                {/* Tasks 3.2, 3.3, 3.4: competency items */}
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.name} className="space-y-0.5">
                      <span className="font-mono text-[0.9rem] text-ink">{item.name}</span>
                      <p className="font-body text-[0.8125rem] text-lead leading-snug">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CASE STUDIES                                                     */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 md:px-12 py-20 border-b border-structural">
          <p className="text-label text-lead mb-10">
            § 02 — Case Studies / Deep Dives
          </p>

          {/* Task 4.1: vertical stack layout */}
          <div className="space-y-20">

            {/* ---- QUIX PAGE BUILDER ---- */}
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left: narrative */}
              <div className="space-y-6">
                {/* Task 4.2: Mono numbered label */}
                <h3 className="font-mono text-[0.75rem] uppercase tracking-widest text-lead">
                  01 / QUIX_PAGE_BUILDER
                </h3>

                {/* Task 4.3: Constraint-Conflict-Resolution model */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-lead">[CONSTRAINT]</span>
                    <p className="font-body text-prose text-ink">
                      A visual page builder handling 200+ draggable components with real-time
                      collaboration. React&apos;s Context API collapsed under write amplification —
                      every drag re-rendered the entire tree.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-lead">[CONFLICT]</span>
                    <p className="font-body text-prose text-ink">
                      Context propagated all state to all consumers. Memoisation helped at the
                      leaf level but the normalisation problem was upstream — the data model was
                      a nested tree, causing cascading re-renders on any mutation.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[0.7rem] uppercase tracking-widest text-lead">[RESOLUTION]</span>
                    <p className="font-body text-prose text-ink">
                      Redux with a normalised entity map (ids + entities). Components subscribed
                      to slices via memoised selectors. Optimistic middleware handled drag commits
                      speculatively, rolling back on API failure. Result: 40% bundle reduction,
                      render count dropped from O(n) to O(1) per drag event.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: SVG architecture diagram (Task 4.4) */}
              <div className="space-y-3">
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-lead block">
                  [FIG.01 — DATA FLOW ARCHITECTURE]
                </span>
                <div className="border border-structural p-4">
                  <QuixArchitectureDiagram />
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* ENGINEERING LOG (PPR — dynamic boundary)                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 md:px-12 py-20 border-b border-structural">
          <p className="text-label text-lead mb-10">
            § 03 — Engineering Log
          </p>

          {/* Task 5.1 + 5.2: Git-style log wrapped in Suspense for PPR streaming */}
          <Suspense
            fallback={
              <div className="font-mono text-[0.75rem] text-lead animate-pulse">
                [FETCHING_LOG_ENTRIES...]
              </div>
            }
          >
            <EngineeringLog />
          </Suspense>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* MANIFESTO                                                        */}
        {/* ---------------------------------------------------------------- */}
        {/* Task 5.3 */}
        <section className="px-6 md:px-12 py-20 border-b border-structural">
          <p className="text-label text-lead mb-10">
            § 04 — Engineering Philosophy
          </p>

          <p className="font-body text-section text-ink max-w-3xl tracking-tighter leading-tight">
            I engineer systems, not websites.
          </p>
          <p className="font-body text-prose text-lead max-w-2xl mt-6 leading-relaxed">
            The moat isn&apos;t in shipping features — it&apos;s in understanding why a constraint
            exists and building the architecture that makes it irrelevant. I prefer the hard path:
            Rust over Node where it matters, custom CI/CD over magic buttons, normalised state over
            convenient shortcuts. The craft rewards those who respect it.
          </p>
        </section>

      </main>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER — Spec Table (Task 5.4)                                     */}
      {/* ------------------------------------------------------------------ */}
      <footer className="px-6 md:px-12 py-8 border-t border-structural">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="font-mono text-[0.75rem] uppercase tracking-widest text-ink">
            Light Yagami
          </span>

          <table className="font-mono text-[0.7rem] text-lead border-collapse">
            <tbody>
              <tr>
                <td className="pr-6 uppercase tracking-widest text-lead opacity-60">Version</td>
                <td className="text-ink">[1.0.0]</td>
                <td className="pl-8 pr-6 uppercase tracking-widest text-lead opacity-60">Build</td>
                <td className="text-ink">[2026]</td>
              </tr>
              <tr>
                <td className="pr-6 uppercase tracking-widest text-lead opacity-60">Stack</td>
                <td className="text-ink">[Next.js 16 / PPR / Rust]</td>
                <td className="pl-8 pr-6 uppercase tracking-widest text-lead opacity-60">Status</td>
                <td className="text-ink">[ACTIVE]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>

    </div>
  );
}
