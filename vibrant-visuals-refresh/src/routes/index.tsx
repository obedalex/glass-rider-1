import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, ShieldCheck, Microscope, PackageCheck, Factory, Ruler, Cog } from "lucide-react";
import { motion } from "framer-motion";

import hero1 from "@/assets/hero-1-enclosure.jpg";
import hero2 from "@/assets/hero-2-tempering.jpg";
import hero3 from "@/assets/hero-3-edge.jpg";
import hero4 from "@/assets/hero-4-logistics.jpg";
import hero5 from "@/assets/hero-5-engineering.jpg";

import sliding from "@/assets/sliding-hero.jpg";
import swing from "@/assets/swing-hero.jpg";
import tub from "@/assets/tub-hero.jpg";
import fixed from "@/assets/fixed-hero.jpg";
import custom from "@/assets/custom-hero.jpg";
import qc from "@/assets/process-qc.jpg";
import polishing from "@/assets/process-polishing.jpg";
import drilling from "@/assets/process-drilling.jpg";
import packing from "@/assets/process-packing.jpg";
import warehouse from "@/assets/warehouse-rows.jpg";
import port from "@/assets/shipping-port.jpg";
import factory from "@/assets/factory-floor.jpg";
import safetyTest from "@/assets/safety-test.jpg";
import safetyStamp from "@/assets/safety-stamp.jpg";
import hotel from "@/assets/usecase-hotel.jpg";
import oem from "@/assets/usecase-oem.jpg";
import residential from "@/assets/usecase-residential.jpg";

import { HeroCarousel } from "@/components/site/HeroCarousel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { SendDrawingButton } from "@/components/site/SendDrawingButton";
import { StatBand } from "@/components/site/StatBand";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Gallery } from "@/components/site/Gallery";
import { UseCaseCards } from "@/components/site/UseCaseCards";
import { FAQ } from "@/components/site/FAQ";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Rider Shower Systems | OEM & Distributor Tempered Glass Programs" },
      { name: "description", content: "Hardware-ready tempered shower glass for North American enclosure manufacturers, distributors, and developers. SGCC certified, repeat-spec RS-SKUs, mixed-container logistics." },
      { property: "og:title", content: "Rider Shower Systems — Program-Ready Shower Glass" },
      { property: "og:description", content: "OEM and distributor tempered glass programs with engineering-led drawing review and reliable container logistics." },
      { property: "og:image", content: hero1 },
      { name: "twitter:image", content: hero1 },
    ],
  }),
});

const slides = [
  { src: hero1, alt: "Premium frameless shower enclosure", caption: "Frameless Enclosures" },
  { src: hero2, alt: "Tempering furnace at the Rider factory", caption: "Inline Tempering" },
  { src: hero3, alt: "CNC edge polishing close-up", caption: "Edge & Polish Precision" },
  { src: hero4, alt: "Mixed packing in container", caption: "Program Logistics" },
  { src: hero5, alt: "Engineer reviewing CAD over panel", caption: "Engineering Intake" },
];

const products = [
  { to: "/sliding", program: "Sliding Door Glass", title: "Sliding Door Glass", desc: "Roller-hole precision for inline & bypass enclosures.", img: sliding },
  { to: "/swing", program: "Swing Door Glass", title: "Swing Door Glass", desc: "Polished hinge cut-outs on heavy 10–12mm glass.", img: swing },
  { to: "/tub", program: "Tub Enclosure Glass", title: "Tub Enclosure Glass", desc: "Standard program sizes, retail-ready cartons.", img: tub },
  { to: "/fixed", program: "Fixed Panel Glass", title: "Fixed Panel Glass", desc: "Walk-in screens, return panels, clamp-ready edges.", img: fixed },
] as const;

function Home() {
  return (
    <>
      {/* SECTION 1 — HERO with carousel */}
      <section className="relative h-[680px] overflow-hidden border-b border-border">
        <HeroCarousel slides={slides} />
        <div className="container-rider relative z-10 grid h-full items-center">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> B2B OEM &amp; Program Supply
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-white text-balance">
              Shower system glass built for{" "}
              <span className="text-primary">distributor</span> &amp;{" "}
              <span className="text-primary">OEM programs</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Rider supplies hardware-ready tempered glass components for enclosure manufacturers requiring stable geometry, precision drilling, and repeat-spec supply across North American distribution platforms.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <SendDrawingButton size="lg" variant="solid" label="Send Drawing for Review" />
              <Link
                to="/library"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Browse Format Library <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-white/80">
              <Stat value={<><CountUp to={50000} />+</>} l="Panels delivered" />
              <Stat value={<><CountUp to={120} />+</>} l="OEM partners" />
              <Stat value={<><CountUp to={24} />h</>} l="Drawing review" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — STAT BAND */}
      <section className="container-rider -mt-12 relative z-20">
        <StatBand
          stats={[
            { value: 50000, suffix: "+", label: "Panels delivered" },
            { value: 120, suffix: "+", label: "OEM partners" },
            { value: 99.6, decimals: 1, suffix: "%", label: "On-time program ship rate" },
            { value: 24, suffix: "h", label: "Engineering response" },
          ]}
        />
      </section>

      {/* SECTION 3 — WHO THIS IS FOR */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Built For</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            One supply chain. Three program types.
          </h2>
        </Reveal>
        <StaggerGroup className="grid gap-3 md:grid-cols-3">
          {[
            { eyebrow: "Manufacturers", title: "Enclosure brands", desc: "Convert proprietary CAD into repeatable RS-SKUs with hinge-mapped, hardware-ready panels.", program: "Manufacturer Program" },
            { eyebrow: "Distributors", title: "Warehouse programs", desc: "Standard formats in retail-ready cartons sized for store-delivery handling.", program: "Distributor Program" },
            { eyebrow: "Developers", title: "Multi-unit projects", desc: "Hotel, apartment, and luxury villa programs with consistent geometry across batches.", program: "Developer / Project Program" },
          ].map((c) => (
            <StaggerItem key={c.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition hover:border-primary hover:shadow-lg">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{c.eyebrow}</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-5">
                <SendDrawingButton size="sm" variant="outline" label="Start program" defaultProgram={c.program} withIcon={false} />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* SECTION 4 — PRODUCT CATEGORIES */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-rider py-20">
          <Reveal className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Product Categories</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">Program-ready glass formats</h2>
            </div>
            <Link to="/library" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Browse all formats <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {products.map((p) => (
              <StaggerItem key={p.to}>
                <Link to={p.to} className="group relative block overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      View specs <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 5 — WHY RIDER */}
      <section className="container-rider py-20">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Why Rider</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">Engineering-first, program-ready.</h2>
        </Reveal>
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Layers, title: "Stable Geometry", desc: "Precision alignment ensures structural integrity across thousands of repeat-spec panels." },
            { icon: ShieldCheck, title: "Safety Assured", desc: "SGCC & ANSI Z97.1 certified tempered glass for uncompromising compliance." },
            { icon: Microscope, title: "Rigorous QC", desc: "Light-table inspection on every panel for optical perfection." },
            { icon: PackageCheck, title: "Program Ready", desc: "Cartons, crates & L-frames built for distributor warehouse handling." },
          ].map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title} className="rounded-xl bg-card border border-border p-6 hover:border-primary transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* SECTION 6 — TECHNICAL PRECISION */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/30 blur-3xl" />
            <img src={custom} alt="CAD blueprint with tempered glass panel on workbench" loading="lazy" width={1200} height={900} className="relative rounded-xl border border-white/10 shadow-2xl object-cover h-[420px] w-full" />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Technical Precision</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">From CAD to RS-SKU.</h2>
            <p className="mt-4 text-base leading-relaxed opacity-85">
              We convert proprietary CAD formats into repeatable RS-SKUs. Engineering support ensures hinge mapping and handle layouts align with standard North American hardware systems.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Factory, t: "Drawing-to-SKU conversion for repeat supply" },
                { icon: Cog, t: "Precision U-cuts, corner notches, radius edges" },
                { icon: Ruler, t: "Hinge mapping for major hardware platforms" },
                { icon: ShieldCheck, t: "Private-label silk-screen branding" },
              ].map(({ icon: I, t }) => (
                <li key={t} className="flex items-start gap-3">
                  <I className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <SendDrawingButton size="md" variant="solid" label="Send a drawing" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROCESS TIMELINE */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">From Drawing to Delivery</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Four checkpoints. Zero surprises.
          </h2>
        </Reveal>
        <ProcessTimeline
          steps={[
            { step: "01", title: "Drawing Review", desc: "Engineering converts your CAD/PDF into a Rider RS-SKU drawing within 24 hours.", image: hero5 },
            { step: "02", title: "Tempering", desc: "Inline tempering with full SGCC traceability stamp on every panel.", image: hero2 },
            { step: "03", title: "Edge & Drilling", desc: "Precision polishing and CNC drilling matched to your hardware platform.", image: drilling },
            { step: "04", title: "Mixed Packing", desc: "Cartons, crates, and L-frames packed for warehouse or store handling.", image: packing },
          ]}
        />
      </section>

      {/* SECTION 8 — GALLERY */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-rider py-20">
          <Reveal className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Inside the Factory</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Real production. Real shipping. Real programs.
              </h2>
            </div>
            <SendDrawingButton size="md" variant="outline" label="Quote a batch" />
          </Reveal>
          <Gallery
            images={[
              { src: factory, alt: "Inside the Rider factory floor", span: "wide" },
              { src: polishing, alt: "Edge polishing line" },
              { src: drilling, alt: "Roller-hole CNC drilling" },
              { src: qc, alt: "Light-table optical QC" },
              { src: warehouse, alt: "Warehouse rows of L-framed glass" },
              { src: port, alt: "Loading containers at port", span: "wide" },
            ]}
          />
        </div>
      </section>

      {/* SECTION 9 — USE CASES */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Programs We Run</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Hardware OEMs, hospitality, and developers.
          </h2>
        </Reveal>
        <UseCaseCards
          items={[
            { image: hotel, tag: "Hospitality", title: "Hotel & resort programs", desc: "Multi-unit hotel renovations with one repeat geometry shipped over months.", defaultProgram: "Hotel / Multi-Unit Commercial" },
            { image: oem, tag: "OEM", title: "Hardware OEM platforms", desc: "Glass mapped to your hinge & roller spec across an entire enclosure line.", defaultProgram: "OEM Hardware Program" },
            { image: residential, tag: "Distributor", title: "Residential distributors", desc: "Carton-packed standard formats, retail-ready for warehouse pick-and-deliver.", defaultProgram: "Distributor Program" },
          ]}
        />
      </section>

      {/* SECTION 10 — COMPLIANCE */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Production Standards</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">Compliance baked into every batch.</h2>
            <p className="mt-4 text-base opacity-85 leading-relaxed">
              Tempering lines use light-table technology and digital scanners to inspect panels for optical distortion, surface defects, and tempering consistency before packing.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "ASTM C1048 Heat-Treated",
                "ANSI Z97.1 Safety Glazing",
                "16 CFR 1201 Cat. II",
                "Full SGCC Batch Traceability",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
            <Link to="/safety" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Read full compliance details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={safetyTest} alt="Impact testing tempered glass" loading="lazy" className="rounded-xl border border-white/10 object-cover h-64 w-full" />
            <img src={safetyStamp} alt="SGCC traceability stamp etched in glass" loading="lazy" className="rounded-xl border border-white/10 object-cover h-64 w-full mt-8" />
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="container-rider py-20">
        <FAQ
          items={[
            { q: "What file types do you accept for drawing review?", a: ".DWG, .DXF, .PDF, .STEP, and .ZIP archives. Most reviews complete within 24 hours." },
            { q: "Do you ship mixed-format containers?", a: "Yes. Single 40' HQ containers can mix carton, crate, and L-frame packing across multiple SKUs to maximise distributor utility." },
            { q: "Are panels SGCC certified?", a: "Every Rider tempered panel ships with a permanent SGCC etched stamp and full batch traceability for North American compliance." },
            { q: "Can we private-label the glass?", a: "Yes — we silk-screen your logo or safety mark with ceramic-frit ink during tempering for permanent OEM branding." },
            { q: "What is the minimum order for an OEM program?", a: "Typical first runs start at one mixed 40' HQ container; ongoing program lots are sized to your forecast." },
          ]}
        />
      </section>

      {/* SECTION 12 — CTA BAND */}
      <section className="container-rider pb-24">
        <CtaBand
          title="Ready to start your shower glass program?"
          intro="Send your CAD or PDF — a Rider engineer reviews every drawing within 24 hours and confirms feasibility, pricing, and lead time."
        />
      </section>
    </>
  );
}

function Stat({ value, l }: { value: React.ReactNode; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/60 mt-1">{l}</div>
    </div>
  );
}
