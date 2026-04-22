import { ArrowRight, Upload } from "lucide-react";
import { useSendDrawing } from "./SendDrawingProvider";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost-light";
type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variantClasses: Record<Variant, string> = {
  solid:
    "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
  outline:
    "border border-border bg-background text-foreground hover:border-primary hover:text-primary",
  "ghost-light":
    "bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20",
};

export function SendDrawingButton({
  label = "Send Drawing",
  defaultProgram,
  variant = "solid",
  size = "md",
  className,
  withIcon = true,
}: {
  label?: string;
  defaultProgram?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  withIcon?: boolean;
}) {
  const { open } = useSendDrawing();
  return (
    <button
      type="button"
      onClick={() => open(defaultProgram)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 hover:translate-y-[-1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {withIcon && variant !== "solid" ? <Upload className="h-4 w-4" /> : null}
      {label}
      {withIcon && variant === "solid" ? <ArrowRight className="h-4 w-4" /> : null}
    </button>
  );
}