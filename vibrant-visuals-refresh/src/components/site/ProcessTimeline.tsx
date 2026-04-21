import { StaggerGroup, StaggerItem } from "./Reveal";

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
  image: string;
};

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
      {steps.map((s) => (
        <StaggerItem
          key={s.step}
          className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
        >
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img src={s.image} alt={s.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <div className="p-5">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
              {s.step}
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-foreground">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}