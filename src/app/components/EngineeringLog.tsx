// Intentionally no 'use cache' — this component is the dynamic boundary in PPR.
// With cacheComponents: true, this renders at request time while the static shell
// is served immediately from the prerendered cache.

type LogEntry = {
  hash: string;
  date: string;
  label: string;
  message: string;
};

const LOG_ENTRIES: LogEntry[] = [
  { hash: "a1f4c2e", date: "2026-04-12", label: "BUILDING", message: "Rust-based CLI for project scaffolding — 40% faster cold start than Node alternatives." },
  { hash: "b9e8d31", date: "2026-04-10", label: "RESEARCHING", message: "Wasm binary size reduction via wee_alloc + tree shaking. Targeting sub-50KB payload." },
  { hash: "c3a7f12", date: "2026-04-07", label: "SHIPPED", message: "PPR-enabled portfolio shell. Static delivery in <50ms TTFB on edge." },
  { hash: "d5b2e09", date: "2026-04-03", label: "BREAKING", message: "Custom Redux middleware for optimistic UI — untangling the rollback logic." },
  { hash: "e8c1a44", date: "2026-03-28", label: "READING", message: "Lin Clark's compiler deep-dives. Understanding how LLVM IR maps to Wasm sections." },
];

export default async function EngineeringLog() {
  // Simulate request-time data fetch (in production: pull from a DB or log file)
  const entries = LOG_ENTRIES;

  return (
    <div className="font-mono text-[0.8125rem] leading-relaxed">
      <div className="border-b border-structural pb-2 mb-4 flex items-center gap-4">
        <span className="text-label text-lead">HASH</span>
        <span className="text-label text-lead flex-1">DATE</span>
        <span className="text-label text-lead">LOG_ENTRY</span>
      </div>
      <ul className="space-y-3">
        {entries.map((entry) => (
          <li key={entry.hash} className="grid grid-cols-[7ch_10ch_1fr] gap-4 items-start">
            <span className="text-structural select-none">{entry.hash}</span>
            <span className="text-lead opacity-60">{entry.date}</span>
            <span>
              <span className="text-ink font-bold">[{entry.label}]</span>{" "}
              <span className="text-lead">{entry.message}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
