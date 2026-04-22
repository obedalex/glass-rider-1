import { StaggerGroup, StaggerItem } from "./Reveal";
import { SendDrawingButton } from "./SendDrawingButton";

export type UseCase = {
  image: string;
  tag: string;
  title: string;
  desc: string;
  defaultProgram?: string;
};

export function UseCaseCards({ items }: { items: UseCase[] }) {
  return (
    <StaggerGroup className="grid gap-5 md:grid-cols-3">
      {items.map((u) => (
        <StaggerItem
          key={u.title}
          className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <img src={u.image} alt={u.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-primary/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
              {u.tag}
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-display text-lg font-bold text-foreground">{u.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
            <div className="mt-4">
              <SendDrawingButton size="sm" variant="outline" label="Request quote" defaultProgram={u.defaultProgram} withIcon={false} />
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}