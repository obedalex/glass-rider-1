import { CheckCircle2 } from "lucide-react";

export function CompatBanner({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border-l-4 border-primary bg-primary/8 px-5 py-4 text-sm font-semibold text-secondary">
      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
      <span>
        {children ?? "Compatible with common North American shower door hardware systems."}
      </span>
    </div>
  );
}
