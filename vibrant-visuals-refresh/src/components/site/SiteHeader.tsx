import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SendDrawingButton } from "./SendDrawingButton";

const nav = [
  { to: "/", label: "Home" },
  { to: "/sliding", label: "Sliding" },
  { to: "/swing", label: "Swing" },
  { to: "/tub", label: "Tub" },
  { to: "/fixed", label: "Fixed" },
  { to: "/library", label: "Format Library" },
  { to: "/custom", label: "Custom" },
  { to: "/safety", label: "Safety" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-rider flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <span className="font-display text-lg font-bold leading-none">R</span>
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-primary" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-wide text-foreground">RIDER</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Shower Systems</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition hover:bg-muted"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <SendDrawingButton size="md" label="Send Drawing" />
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-rider py-3 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-ink-soft"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition hover:bg-muted"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <div className="mt-3" onClick={() => setOpen(false)}>
              <SendDrawingButton size="md" label="Send Drawing" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
