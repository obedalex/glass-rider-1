export function SpecBox({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string }[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
      <h3 className="font-display text-xl font-bold text-primary border-b border-border pb-3">
        {title}
      </h3>
      <ul className="mt-2">
        {items.map((it, i) => (
          <li
            key={it.label}
            className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-3 ${i !== items.length - 1 ? "border-b border-border/60" : ""}`}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:w-44">
              {it.label}
            </span>
            <span className="text-sm font-medium text-foreground">{it.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
