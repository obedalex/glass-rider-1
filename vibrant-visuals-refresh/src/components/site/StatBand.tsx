import { CountUp } from "./CountUp";
import { StaggerGroup, StaggerItem } from "./Reveal";

export type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export function StatBand({ stats, dark = false }: { stats: Stat[]; dark?: boolean }) {
  return (
    <StaggerGroup
      className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border p-8 ${
        dark ? "border-white/10 bg-secondary text-secondary-foreground" : "border-border bg-card"
      }`}
    >
      {stats.map((s) => (
        <StaggerItem key={s.label} className="text-center">
          <div className={`font-display text-3xl sm:text-4xl font-bold ${dark ? "text-amber" : "text-primary"}`}>
            <CountUp to={s.value} decimals={s.decimals ?? 0} />
            {s.suffix ?? ""}
          </div>
          <div className={`mt-2 text-xs uppercase tracking-wider ${dark ? "opacity-75" : "text-muted-foreground"}`}>
            {s.label}
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}