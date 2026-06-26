const VALUES = [
  {
    n: "01",
    title: "Honest Advice",
    body: "Straightforward guidance at every step — no inflated numbers, no pressure tactics.",
  },
  {
    n: "02",
    title: "Clear Communication",
    body: "You always know where things stand. Quick replies, plain language, no surprises.",
  },
  {
    n: "03",
    title: "Your Best Outcome",
    body: "Whether buying or selling, the goal is the right result for you — not the fastest transaction.",
  },
];

export function CoreValuesSidebar() {
  return (
    <aside className="lg:sticky lg:top-28 space-y-10">
      <p className="text-[10px] tracking-[0.32em] uppercase text-[#FDFCFB]/50">Core Values</p>
      <ul className="space-y-8">
        {VALUES.map((v) => (
          <li key={v.n} className="space-y-2 border-l border-[#C5A267] pl-5">
            <div className="font-serif text-2xl text-[#FDFCFB]">{v.n}</div>
            <p className="text-[11px] tracking-[0.24em] uppercase font-medium text-[#FDFCFB]">
              {v.title}
            </p>
            <p className="text-xs text-[#FDFCFB]/70 leading-relaxed">{v.body}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
