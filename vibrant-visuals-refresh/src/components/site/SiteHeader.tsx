import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bath,
  ChevronDown,
  DoorOpen,
  Menu,
  Moon,
  MoveHorizontal,
  RectangleVertical,
  Sun,
  Tent,
  X,
  type LucideIcon
} from "lucide-react";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { SendDrawingButton } from "./SendDrawingButton";
import logo from "@/assets/logo-1.png";
import popoverImage from "@/assets/popover-2.png";

type NavLink = { type: "link"; to: string; label: string };
type NavGroup = {
  type: "group";
  label: string;
  children: { to: string; label: string }[];
};
type NavItem = NavLink | NavGroup;

const nav: NavItem[] = [
  { type: "link", to: "/", label: "Home" },
  {
    type: "group",
    label: "Our Programs",
    children: [
      { to: "/sliding", label: "Sliding" },
      { to: "/swing", label: "Swing" },
      { to: "/tub", label: "Tub" },
      { to: "/fixed", label: "Fixed" }
    ]
  },
  { type: "link", to: "/library", label: "Format Library" },
  { type: "link", to: "/custom", label: "Custom" },
  { type: "link", to: "/safety", label: "Safety" }
];

const programPaths = ["/sliding", "/swing", "/tub", "/fixed"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [programsHover, setProgramsHover] = useState(false);
  const programsHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isProgramActive = programPaths.includes(pathname);

  const openProgramsHover = () => {
    if (programsHoverTimeout.current) {
      clearTimeout(programsHoverTimeout.current);
      programsHoverTimeout.current = null;
    }
    setProgramsHover(true);
  };
  const closeProgramsHover = () => {
    programsHoverTimeout.current = setTimeout(() => setProgramsHover(false), 120);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-rider flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Rider Glass" className="h-10 w-auto" />
          <span className="hidden sm:block font-display text-base font-extrabold tracking-tight uppercase text-foreground">
            Rider Glass
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="relative px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                aria-haspopup="menu"
                aria-expanded={programsHover}
                onMouseEnter={openProgramsHover}
                onMouseLeave={closeProgramsHover}
                className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isProgramActive ? "text-primary" : "text-ink-soft"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    programsHover ? "rotate-180" : ""
                  }`}
                />
              </button>
            )
          )}
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
            {nav.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-ink-soft"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setProgramsOpen((v) => !v)}
                    aria-expanded={programsOpen}
                    className={`flex w-full items-center justify-between py-2.5 text-sm font-medium ${
                      isProgramActive ? "text-primary" : "text-ink-soft"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {programsOpen && (
                    <div className="ml-3 mb-1 flex flex-col border-l border-border pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm font-medium text-ink-soft"
                          activeProps={{ className: "text-primary" }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
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

      {/* Desktop full-width mega menu (Our Programs) */}
      <AnimatePresence>
        {programsHover && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full hidden lg:block"
            onMouseEnter={openProgramsHover}
            onMouseLeave={closeProgramsHover}
            role="menu"
          >
            <div className="container-rider pt-2">
              <div className="overflow-hidden rounded-xl border border-border bg-background/95 shadow-2xl backdrop-blur-md">
                <div className="grid grid-cols-12">
                  {/* Left: branded image with overlay copy */}
                  <div className="relative col-span-4 min-h-[300px] overflow-hidden bg-muted">
                    <img
                      src={popoverImage}
                      alt="Rider Iron & Steel — precision engineering"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" aria-hidden />
                    <div className="relative flex h-full flex-col justify-end p-6">
                      <h1 className="font-display text-2xl font-bold leading-tight text-white text-balance">
                        Fresh Perspectives, Unmatched Solutions
                      </h1>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">
                        Revolutionising the industrial landscape through precision engineering and
                        tactical innovation
                      </p>
                    </div>
                  </div>

                  {/* Middle: Shower Systems — 2 cols × 2 rows */}
                  <div className="col-span-4 p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                      Shower Systems
                    </span>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {showerSystems.map(({ to, label, desc, Icon }) => (
                        <Link
                          key={to}
                          to={to}
                          role="menuitem"
                          onClick={() => setProgramsHover(false)}
                          className="group flex items-start gap-3 rounded-md p-2 -m-2 transition-colors hover:bg-muted"
                          activeProps={{ className: "bg-muted" }}
                        >
                          <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-border text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                            <Icon className="h-4 w-4" strokeWidth={1.75} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                              {label}
                            </span>
                            <span className="mt-1 block text-[11px] leading-relaxed text-muted-foreground">
                              {desc}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right: Future Programs — 2 cols (3 items, 2-1 fill) */}
                  <div className="col-span-4 border-l border-border bg-surface-2/40 p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                      Future Programs
                    </span>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {futurePrograms.map(({ label, desc, abbr, Icon }) => (
                        <div key={label} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-border text-foreground">
                            {abbr ? (
                              <span className="text-[10px] font-bold tracking-tight">{abbr}</span>
                            ) : Icon ? (
                              <Icon className="h-4 w-4" strokeWidth={1.75} />
                            ) : null}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-bold text-foreground">
                              {label}{" "}
                              <span className="text-[11px] font-semibold text-primary">
                                (Coming Soon)
                              </span>
                            </span>
                            <span className="mt-1 block text-[11px] leading-relaxed text-muted-foreground">
                              {desc}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

type ShowerSystem = { to: string; label: string; desc: string; Icon: LucideIcon };
type FutureProgram = { label: string; desc: string; abbr?: string; Icon?: LucideIcon };

const showerSystems: ShowerSystem[] = [
  {
    to: "/sliding",
    label: "Sliding",
    desc: "Precision-engineered roller systems for bypass and inline enclosures.",
    Icon: MoveHorizontal
  },
  {
    to: "/swing",
    label: "Swing",
    desc: "Heavy-duty pivot and hinge systems for frameless glass doors.",
    Icon: DoorOpen
  },
  {
    to: "/tub",
    label: "Tub",
    desc: "Water-tight enclosure systems designed for high-traffic hospitality use.",
    Icon: Bath
  },
  {
    to: "/fixed",
    label: "Fixed",
    desc: "Structural glass panels with reinforced U-channel architectural support.",
    Icon: RectangleVertical
  }
];

const futurePrograms: FutureProgram[] = [
  {
    label: "Cabinet & Wardrobe Glass",
    desc: "Specialized thin-gauge tempered glass for high-end millwork integration.",
    abbr: "CWG"
  },
  {
    label: "Furniture Glass",
    desc: "Impact-resistant surfaces with custom edge profiles for commercial interiors.",
    abbr: "FG"
  },
  {
    label: "Outdoor Structures Glass",
    desc: "Weather-hardened panels for architectural canopies and glass balustrades.",
    Icon: Tent
  }
];
