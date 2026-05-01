/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X, Ruler, ArrowRight, Filter, Layers3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import libraryImg from "@/assets/format-library.jpg";
import factory from "@/assets/factory-floor.jpg";
import packing from "@/assets/process-packing.jpg";
import polishing from "@/assets/process-polishing.jpg";
import drilling from "@/assets/process-drilling.jpg";
import qc from "@/assets/process-qc.jpg";
import port from "@/assets/shipping-port.jpg";
import lframes from "@/assets/logistics-lframes.jpg";

import { TOP_CATEGORIES } from "./library.categories";
import { FORMATS, SKU_IMAGES, CATEGORIES, THICKNESSES, TYPES, HARDWARE, THICKNESS_COLORS } from "./library.skus";
import type { Category, GlassType, Hardware, Format } from "./library.skus";




import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { SendDrawingButton } from "@/components/site/SendDrawingButton";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { CtaBand } from "@/components/site/CtaBand";
import footer2 from "@/assets/footer2.png";
import programLibrary1 from "@/assets/program-library-1.png";
import programLibrary2 from "@/assets/program-library-2.png";
import programLibrary3 from "@/assets/program-library-3.png";
import { motion as m } from "framer-motion";

export const Route = createFileRoute("/library")({
  component: LibraryPage,
  head: () => ({
    meta: [
      { title: "Integrated Format Library | Standard RS-SKUs | Rider Shower Systems" },
      {
        name: "description",
        content:
          "Searchable catalog of Rider's standard tempered shower glass formats — filter by size, thickness, glass type, and hardware compatibility.",
      },
      { property: "og:title", content: "Integrated Format Library | Rider Shower Systems" },
      {
        property: "og:description",
        content: "Filter Rider's standard RS-SKU shower glass formats by size, thickness, type, and hardware platform.",
      },
      { property: "og:image", content: libraryImg },
      { name: "twitter:image", content: libraryImg },
    ],
  }),
});


function LibraryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [thickness, setThickness] = useState<Format["thickness"] | "All">("All");
  const [type, setType] = useState<GlassType | "All">("All");
  const [hardware, setHardware] = useState<Hardware | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FORMATS.filter((f) => {
      if (!SKU_IMAGES[f.sku]) return false;
      if (category !== "All" && f.category !== category) return false;
      if (thickness !== "All" && f.thickness !== thickness) return false;
      if (type !== "All" && f.type !== type) return false;
      if (hardware !== "All" && !f.hardware.includes(hardware)) return false;
      if (q) {
        const hay = `${f.sku} ${f.category} ${f.type} ${f.hardware.join(" ")} ${f.width}x${f.height}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, category, thickness, type, hardware]);

  const reset = () => {
    setQuery("");
    setCategory("All");
    setThickness("All");
    setType("All");
    setHardware("All");
  };

  const hasFilters = query !== "" || category !== "All" || thickness !== "All" || type !== "All" || hardware !== "All";

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden border-b border-border bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img
            src={libraryImg}
            alt="Industrial warehouse stacked with standard tempered shower glass formats"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/30" />
          <div className="absolute inset-0 grid-blueprint opacity-15" />
        </div>
        <div className="container-rider relative grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-center">
          <m.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <Layers3 className="h-3.5 w-3.5" /> Format Library
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance max-w-[14ch]">
              Standard RS-SKU formats, ready for your program.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed opacity-85">
              Filter Rider's catalog of repeat-spec tempered glass panels by size, thickness, glass
              type, and hardware compatibility. Use this library as a starting point — every SKU is
              also available in private-label and custom variants.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SendDrawingButton size="lg" variant="solid" label="Quote a SKU" />
              <a
                href="#filters"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Browse formats <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </m.div>
        </div>
      </section>


      {/* SECTION 3 — INTRO */}
      {/* <section className="container-rider py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              What is the Library?
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Repeat-spec geometry. Identical batch after batch.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every entry below is a Rider RS-SKU — a locked specification with verified hardware
              mapping, polished safety edges, and SGCC certification. Pick a SKU and re-order
              forever, or send your own drawing to add a new RS-SKU to the library.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <img
              src={warehouse}
              alt="Warehouse stacked with standard formats"
              className="rounded-xl border border-border shadow-xl object-cover w-full h-64"
            />
          </Reveal>
        </div>
      </section> */}

      {/* SECTION 4 — FILTER + RESULTS */}
      <section id="filters" className="container-rider py-12">
        {/* Filter Catalog — hidden */}
        {/* <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Filter Catalog
              </span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by SKU, size (e.g. 32x78), or hardware..."
                className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-10 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <SelectField
                label="Category"
                value={category}
                onChange={(v) => setCategory(v as typeof category)}
                options={["All", ...CATEGORIES]}
              />
              <SelectField
                label="Thickness"
                value={String(thickness)}
                onChange={(v) =>
                  setThickness(v === "All" ? "All" : (Number(v) as Format["thickness"]))
                }
                options={["All", ...THICKNESSES.map((t) => `${t}`)]}
                suffix="mm"
              />
              <SelectField
                label="Glass Type"
                value={type}
                onChange={(v) => setType(v as typeof type)}
                options={["All", ...TYPES]}
              />
              <SelectField
                label="Hardware"
                value={hardware}
                onChange={(v) => setHardware(v as typeof hardware)}
                options={["All", ...HARDWARE]}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filtered.length}</span> of{" "}
                <span className="font-bold text-foreground">{Object.keys(SKU_IMAGES).length}</span> standard formats
              </div>
              {hasFilters && (
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  <X className="h-3.5 w-3.5" /> Reset filters
                </button>
              )}
            </div>
          </div>
        </div> */}

        {/* Top Categories */}
        {/* <div className="mt-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Top Categories</span>
            <div className="flex-1 border-t border-border" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TOP_CATEGORIES.map((tc) => (
              <div key={tc.category} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg">
                <div className="relative h-36 overflow-hidden bg-muted">
                  {tc.image ? (
                    <img src={tc.image} alt={tc.category} className="h-full w-full object-cover transition group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-surface-2">
                      <Layers3 className="h-8 w-8 text-muted-foreground/40" />
                    </div>
                  )}
                  <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {tc.featuredSku}
                  </span>
                </div>
                <div className="p-3.5">
                  <div className="font-display text-sm font-bold text-foreground">{tc.category}</div>
                  <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">{tc.description}</p>
                  <div className="mt-3 flex gap-1.5">
                    {[".DWG", ".DXF", ".STEP"].map((ext) => (
                      <span key={ext} className="rounded border border-border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                        {ext}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* All Format Library */}
        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="font-display text-xl font-bold text-foreground">All format Library</h2>
            <div className="flex-1 border-t border-border" />
          </div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-surface-2 py-16 text-center">
              <Layers3 className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-4 font-semibold text-foreground">No matching formats</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filters or send a drawing for a custom RS-SKU.
              </p>
              <div className="mt-5">
                <SendDrawingButton size="md" variant="solid" label="Request custom SKU" />
              </div>
            </div>
          ) : (
            <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((f, i) => (
                  <motion.li
                    key={f.sku}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.02, 0.2), ease: [0.22, 1, 0.36, 1] }}
                    className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
                  >
                    <div className="relative h-44 overflow-hidden bg-muted">
                      {SKU_IMAGES[f.sku] ? (
                        <img src={SKU_IMAGES[f.sku]} alt={f.sku} className="h-full w-full object-cover transition group-hover:scale-105" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-surface-2">
                          <Ruler className="h-10 w-10 text-muted-foreground/30" />
                        </div>
                      )}
                      <span className={`absolute left-2.5 top-2.5 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${THICKNESS_COLORS[f.thickness]}`}>
                        {f.thickness}MM
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="font-display text-base font-bold text-foreground">{f.sku}</div>
                      <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                        {f.category} &bull; {f.width}" &times; {f.height}"
                      </div>
                      <dl className="mt-3 space-y-1.5 text-xs">
                        <div className="flex justify-between gap-2">
                          <dt className="text-muted-foreground">Glass</dt>
                          <dd className="text-right font-medium text-foreground">{f.type}</dd>
                        </div>
                        <div className="flex justify-between gap-2">
                          <dt className="text-muted-foreground">Hardware</dt>
                          <dd className="text-right font-medium text-foreground">{f.hardware.join(", ")}</dd>
                        </div>
                      </dl>
                      <div className="mt-4">
                        <SendDrawingButton size="sm" variant="outline" label="Quote SKU" defaultProgram={`Library SKU: ${f.sku}`} withIcon={false} />
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          )}
        </div>
      </section>

      {/* SECTION 5 — SKU NAMING */}
      <section className="bg-surface border-y border-border">
        <div className="container-rider py-20">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              SKU System
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              How RS-SKU codes work.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              { code: "RS", label: "Rider Shower", desc: "Brand prefix, present on every SKU." },
              {
                code: "SL / SW / TB / FX / RP",
                label: "Category",
                desc: "Sliding, Swing, Tub, Fixed, Return Panel."
              },
              { code: "30·76", label: "Dimensions", desc: "Width × Height in inches." },
              { code: "08", label: "Thickness", desc: "Glass thickness in millimetres." }
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="font-display text-lg font-bold text-primary">{s.code}</div>
                <div className="mt-2 text-sm font-semibold text-foreground">{s.label}</div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — GALLERY */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            From the Floor
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Standard formats in production.
          </h2>
        </Reveal>
        <Gallery
          images={[
            { src: factory, alt: "Factory floor with standard formats", span: "wide" },
            { src: polishing, alt: "Edge polishing line" },
            { src: drilling, alt: "CNC drilling" },
            { src: qc, alt: "Light-table QC" },
            { src: lframes, alt: "L-frame transport" },
            { src: port, alt: "Container shipping", span: "wide" }
          ]}
        />
      </section>

      {/* SECTION 7 — CUSTOM SKU */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Need a custom SKU?
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">
                Send a drawing — we'll add it to the library.
              </h2>
              <p className="mt-4 text-base opacity-85 leading-relaxed">
                Every Rider RS-SKU started as a customer drawing. Send your CAD or PDF and
                engineering will return a feasibility, quote, and proposed RS-SKU code within 24
                hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <SendDrawingButton size="lg" variant="solid" label="Send Drawing" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <StaggerGroup className="grid grid-cols-2 gap-3">
                {["DWG", "DXF", "PDF", "STEP"].map((f) => (
                  <StaggerItem
                    key={f}
                    className="rounded-xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur"
                  >
                    <div className="font-display text-2xl font-bold text-primary">{f}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider opacity-70">
                      accepted
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — COMPATIBILITY MATRIX */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Compatibility
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Hardware platforms supported across the library.
          </h2>
        </Reveal>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid grid-cols-3 border-b border-border bg-surface-2 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground sm:px-6">
            <div>Hardware</div>
            <div>Categories</div>
            <div>Notes</div>
          </div>
          {[
            { hw: "Roller", cats: "Sliding · Tub", notes: "Top-roller, bottom-roller, bypass" },
            { hw: "Pivot Hinge", cats: "Swing", notes: "Floor-to-ceiling and wall-mount" },
            { hw: "Wall Hinge", cats: "Swing", notes: "Major North American platforms" },
            { hw: "Glass-to-Glass Hinge", cats: "Swing", notes: "Frameless 90° corner installs" },
            { hw: "Clamp", cats: "Fixed · Return Panel", notes: "Wall and glass-to-glass clamps" },
            { hw: "Channel", cats: "Fixed · Tub", notes: "U-channel and wall-channel" }
          ].map((r, i) => (
            <div
              key={r.hw}
              className={`grid grid-cols-3 px-4 py-4 text-sm sm:px-6 ${i % 2 ? "bg-surface-2" : "bg-card"}`}
            >
              <div className="font-semibold text-foreground">{r.hw}</div>
              <div className="text-primary font-medium">{r.cats}</div>
              <div className="text-muted-foreground">{r.notes}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9 — LOGISTICS */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-rider py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={packing}
              alt="Mixed-format packing in container"
              className="rounded-xl border border-border shadow-xl object-cover w-full h-[400px]"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Library Logistics
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Mix any SKU into one container.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Sliding, swing, tub, fixed, and return-panel SKUs can ship together in a single 40' HQ
              container — carton, crate, and L-frame formats combined for maximum distributor
              utility.
            </p>
            <div className="mt-6">
              <SendDrawingButton size="md" variant="solid" label="Plan a mixed container" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — PROGRAM CTA STRIP */}
      {/* <section className="container-rider py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "Distributor", body: "Carton-packed standard SKUs ready for retail." },
            { title: "OEM", body: "Map any SKU to your hardware system in 24 hours." },
            { title: "Developer", body: "Repeat library geometry across multi-unit projects." }
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-display text-xl font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <div className="mt-5">
                <SendDrawingButton
                  size="sm"
                  variant="outline"
                  label="Start program"
                  defaultProgram={`${c.title} Program`}
                  withIcon={false}
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* SECTION 11 — FAQ */}
      <section className="container-rider py-20">
        <FAQ
          centered
          items={[
            {
              q: "What file types do you accept?",
              a: "Yes. SGCC certification with permanent etched stamp is standard across the entire Rider tempered program.",
            },
            {
              q: "Do you ship mixed format containers",
              a: "Yes — every batch ties to a traceability id, and per-batch test reports are filed for 7 years and available on request.",
            },
            {
              q: "Are panels SGCC containers certified",
              a: "Yes. Hotel chains, multi-unit developers, and OEMs receive project-specific compliance letters on Rider letterhead.",
            },
            {
              q: "Can you private-label the glass?",
              a: "Yes. CAN/CGSB 12.1 conformance is standard, with bilingual documentation available on request.",
            },
            {
              q: "What is the minimum order for OEM program?",
              a: "Yes. CAN/CGSB 12.1 conformance is standard, with bilingual documentation available on request.",
            },
          ]}
        />
      </section>

      {/* SECTION 11b — B2B USE CASES */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-rider py-20">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              B2B OEM Solutions
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Program-ready glass formats.
            </h2>
          </Reveal>
          <StaggerGroup className="grid gap-6 sm:grid-cols-3">
            {[
              {
                badge: "Hospitality",
                title: "Hotel bath renovations",
                desc: "Repeat sliding format across hundreds of identical bathrooms.",
                program: "Hospitality Program",
                image: programLibrary1,
              },
              {
                badge: "OEM",
                title: "Hardware-system OEMs",
                desc: "Glass cut and drilled to your roller, guide, and handle spec.",
                program: "OEM Program",
                image: programLibrary2,
              },
              {
                badge: "Distribution",
                title: "Big-box distributors",
                desc: "Carton-packed standard sizes ready for store shelving.",
                program: "Distribution Program",
                image: programLibrary3,
              },
            ].map((c) => (
              <StaggerItem key={c.badge}>
                <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden bg-muted rounded-t-xl">
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      {c.badge}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <h3 className="font-display text-base font-bold text-foreground">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                    <SendDrawingButton
                      size="sm"
                      variant="outline"
                      label="Request Quote"
                      defaultProgram={c.program}
                      withIcon={false}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 12 — CTA */}
      <section className="flex-1 flex flex-col">
        <CtaBand
          title="Ready to plan a library order?"
          intro="Send your shortlist of RS-SKUs, sizes, and quantities — a Rider program manager replies with a mixed-container quote within 24 hours."
          image={footer2}
          imageAlt="Rider glass program engineering"
        />
      </section>
    </>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  suffix?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm font-medium text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt === "All" ? "All" : `${opt}${suffix ?? ""}`}
          </option>
        ))}
      </select>
    </label>
  );
}
