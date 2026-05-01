import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { SendDrawingButton } from "./SendDrawingButton";
import logo from "@/assets/logo-1.png";

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
      { to: "/fixed", label: "Fixed" },
    ],
  },
  { type: "link", to: "/library", label: "Format Library" },
  { type: "link", to: "/custom", label: "Custom" },
  { type: "link", to: "/safety", label: "Safety" },
];

const programPaths = ["/sliding", "/swing", "/tub", "/fixed"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isProgramActive = programPaths.includes(pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-rider flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Rider Iron & Steel Ghana Ltd" className="h-10 w-auto" />
          <div className="hidden sm:flex flex-col leading-[1.05]">
            <span className="font-display text-sm font-extrabold tracking-tight text-foreground">
              RIDER IRON &amp; STEEL
            </span>
            <span className="font-display text-sm font-extrabold tracking-tight text-foreground">
              GHANA LTD
            </span>
          </div>
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
              <ProgramsDropdown key={item.label} item={item} isActive={isProgramActive} />
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
                      className={`h-4 w-4 transition-transform ${
                        programsOpen ? "rotate-180" : ""
                      }`}
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
    </header>
  );
}

function ProgramsDropdown({ item, isActive }: { item: NavGroup; isActive: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={hovered}
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
          isActive ? "text-primary" : "text-ink-soft"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${hovered ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-2 min-w-55"
            role="menu"
          >
            <div className="rounded-xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-md">
              {item.children.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  role="menuitem"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-muted hover:text-primary"
                  activeProps={{ className: "text-primary bg-muted" }}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
