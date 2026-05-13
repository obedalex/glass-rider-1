/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Microscope,
  PackageCheck,
  Factory,
  Ruler,
  Cog,
  Archive,
  Boxes,
  Eye,
  BadgeCheck
} from "lucide-react";
import { motion } from "framer-motion";

import hero1 from "@/assets/hero-1-enclosure.jpg";
import hero2 from "@/assets/hero-2-tempering.jpg";
import hero5 from "@/assets/hero-5-engineering.jpg";
import homepageHero1 from "@/assets/homepage-hero-1.webp";
import homepageHero2 from "@/assets/homepage-hero-2.webp";
import structuralImg from "@/assets/Structural glass details.png";
import processingCapabilities from "@/assets/processing-capabilities-shower.png";

import sliding from "@/assets/sliding-hero.jpg";
import swing from "@/assets/swing-hero.jpg";
import tub from "@/assets/tub-hero.jpg";
import fixed from "@/assets/fixed-hero.jpg";
import custom from "@/assets/custom-hero.jpg";
import qc from "@/assets/process-qc.jpg";
import polishing from "@/assets/process-polishing.jpg";
import drilling from "@/assets/process-drilling.jpg";
import mixedPacking from "@/assets/mixed-packing.png";
import warehouse from "@/assets/warehouse-rows.jpg";
import port from "@/assets/shipping-port.jpg";
import factory from "@/assets/factory-floor.jpg";
import safetyTest from "@/assets/safety-test.jpg";
import safetyStamp from "@/assets/safety-stamp.jpg";
import hotel from "@/assets/usecase-hotel.jpg";
import oem from "@/assets/usecase-oem.jpg";
import residential from "@/assets/usecase-residential.jpg";
// import oneSupplyChain from "@/assets/one-supply-chain.png";
import oneSupplyChain from "@/assets/one-supply-chain-2.png";
import slidingDoorGlass from "@/assets/sliding-door-glass.png";
import swingDoorGlass from "@/assets/swing-door-glass.png";
import tubEnclosureGlass from "@/assets/tub-enclosure-glass.png";
import fixedPanelGlass from "@/assets/fixed-panel-glass.png";
import compliance from "@/assets/compliance.png";
import edgeAndDrilling from "@/assets/edge-and-drilling.png";
import technicalExpertise from "@/assets/technical-expertise.png";
import realProduction1 from "@/assets/real-production-1.png";
import realProduction2 from "@/assets/real-production-2.png";
import realProduction3 from "@/assets/real-production-3.png";
import realProduction4 from "@/assets/real-production-4.png";
import realProduction5 from "@/assets/real-production-5.png";
import realProduction6 from "@/assets/real-production-6.png";
import homepageHero from "@/assets/homepage-hero.png";
import hotelBath from "@/assets/hotel-bath.png";
import hardwareSystemOEMs from "@/assets/hardware-system-3.png";
import bigBox from "@/assets/big-box.png";

import { HeroCarousel } from "@/components/site/HeroCarousel";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { SendDrawingButton } from "@/components/site/SendDrawingButton";
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
      {
        name: "description",
        content:
          "Hardware-ready tempered shower glass for North American enclosure manufacturers, distributors, and developers. SGCC certified, repeat-spec RS-SKUs, mixed-container logistics."
      },
      { property: "og:title", content: "Rider Shower Systems — Program-Ready Shower Glass" },
      {
        property: "og:description",
        content:
          "OEM and distributor tempered glass programs with engineering-led drawing review and reliable container logistics."
      },
      { property: "og:image", content: hero1 },
      { name: "twitter:image", content: hero1 }
    ]
  })
});

const slides = [
  {
    src: homepageHero1,
    alt: "Premium frameless shower enclosure",
    caption: "Frameless Enclosures"
  },
  { src: homepageHero2, alt: "Tempering furnace at the Rider factory", caption: "Inline Tempering" }
];

const products = [
  {
    to: "/sliding",
    program: "Sliding Door Glass",
    title: "Sliding Door Glass",
    desc: "Tempered panels with roller and guide cut-outs.",
    img: slidingDoorGlass
  },
  {
    to: "/swing",
    program: "Swing Door Glass",
    title: "Swing Door Glass",
    desc: "Hinge-ready panels with precise hole positioning.",
    img: swingDoorGlass
  },
  {
    to: "/tub",
    program: "Tub Enclosure Glass",
    title: "Tub Enclosure Glass",
    desc: "Standard program sizes, retail-ready cartons.",
    img: tubEnclosureGlass
  },
  {
    to: "/fixed",
    program: "Fixed Panel Glass",
    title: "Fixed Panel Glass",
    desc: "Clean edge-finished panels for frameless systems.",
    img: fixedPanelGlass
  }
] as const;

function Home() {
  return (
    <>
      {/* SECTION 1 — HERO with carousel */}
      <section className="relative h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden border-b border-border">
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
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white text-balance">
              Installation-Ready Shower Glass Panels for OEMs &amp; Distributors
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Precision-cut, tempered panels with hinge, handle, and hardware cut-outs — ready for
              direct installation.
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
          </motion.div>
        </div>
      </section>

      {/* SECTION — PROCESSING CAPABILITIES */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-14 sm:py-16 lg:py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Processing Capabilities
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">
              Installation-Ready Shower Glass Panel Capabilities
            </h2>
            <p className="mt-4 text-base leading-relaxed opacity-85">
              Rider manufactures installation-ready shower glass panels based on OEM drawings and
              system requirements. Each panel is produced according to hardware layout, enclosure
              geometry, and installation specifications — not as standard tempered glass.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Hinge cut-outs for frameless swing door systems",
                "Roller slot machining for sliding door systems",
                "CNC-controlled hole positioning for consistent assembly",
                "Panel marking for traceability and batch identification",
                "Single-panel protective packaging for OEM distribution",
                "Drawings reviewed and verified before production"
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <SendDrawingButton size="md" variant="solid" label="Send Drawing for Review" />
            </div>
          </Reveal>

          {/* Image placeholder — replace this div with an <img> once you have the asset */}
          <Reveal className="relative">
            <img src={processingCapabilities} alt="" />
            {/* <div className="absolute -inset-4 rounded-2xl bg-primary/15 blur-2xl" aria-hidden />
            <div className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden w-full h-105 bg-white/5" /> */}
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — TECHNICAL PRECISION
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-14 sm:py-16 lg:py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/30 blur-3xl" />
            <img
              src={custom}
              alt="CAD blueprint with tempered glass panel on workbench"
              loading="lazy"
              width={1200}
              height={900}
              className="relative rounded-xl border border-white/10 shadow-2xl object-cover h-[420px] w-full"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Technical Expertise
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">
              From CAD to RS-SKU.
            </h2>
            <p className="mt-4 text-base leading-relaxed opacity-85">
              We convert proprietary CAD formats into repeatable RS-SKUs. Engineering support
              ensures hinge mapping and handle layouts align with standard North American hardware
              systems.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Factory, t: "Drawing-to-SKU conversion for repeat supply" },
                { icon: Cog, t: "Precision U-cuts, corner notches, radius edges" },
                { icon: Ruler, t: "Hinge mapping for major hardware platforms" },
                { icon: ShieldCheck, t: "Private-label silk-screen branding" }
              ].map(({ icon: I, t }) => (
                <li key={t} className="flex items-start gap-3">
                  <I className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <SendDrawingButton size="md" variant="solid" label="Send Drawing for Review" />
            </div>
          </div>
        </div>
      </section> */}

      {/* SECTION 3 — WHO THIS IS FOR */}
      <section className="container-rider py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-[20px]">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Built For
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Three Programs. One Production System.
            </h2>
          </Reveal>
          <img
            src={oneSupplyChain}
            className="w-full max-w-sm md:w-[400px] md:h-[180px] object-contain"
            alt="One Supply image on the right side"
          />
        </div>

        <StaggerGroup className="grid gap-3 md:grid-cols-3">
          {[
            {
              eyebrow: "Manufacturers",
              title: "Enclosure brands",
              desc: "We produce hardware-ready glass panels directly from your drawings, with precise hole positioning and repeatable batch consistency.",
              program: "Manufacturer Program"
            },
            {
              eyebrow: "Distributors",
              title: "Distributors/ Warehouse programs",
              desc: "Standard panel formats packed in retail-ready cartons, designed for warehouse storage and store distribution.",
              program: "Distributor Program"
            },
            {
              eyebrow: "Developers",
              title: "Project Developers",
              desc: "Consistent glass panel production for hotels, apartments, and large-scale residential projects, ensuring uniform installation across units.",
              program: "Developer / Project Program"
            }
          ].map((c) => (
            <StaggerItem
              key={c.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition hover:border-primary hover:shadow-lg"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {c.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-5">
                <SendDrawingButton
                  size="sm"
                  variant="outline"
                  label="Start program"
                  defaultProgram={c.program}
                  withIcon={false}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* SECTION 4 — PRODUCT CATEGORIES */}
      <section className=" border-y border-border bg-surface">
        <div className="container-rider py-14 sm:py-16 lg:py-20">
          <Reveal className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Product Categories
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
                Program-ready glass formats
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                Standard configurations based on global shower enclosure systems.
              </p>
            </div>
            <Link
              to="/library"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Browse all formats <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {products.map((p) => (
              <StaggerItem key={p.to}>
                <Link
                  to={p.to}
                  className="group relative block overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      View specs{" "}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTION 5 — WHY RIDER */}
      <section className="container-rider py-14 sm:py-16 lg:py-20">
        <div className="flex items-center justify-center">
          <Reveal className="mb-12 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Manufacturing Execellence{" "}
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Engineering-first, program-ready.
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Boxes,
              title: "Factory Precision",
              desc: "Automated tempering lines ensure consistent flatness and geometry across batches."
            },
            {
              icon: BadgeCheck,
              title: "System Compatibility",
              desc: "Panels produced based on OEM drawings and hardware specifications."
            },
            {
              icon: Eye,
              title: "Retail-Ready Packing",
              desc: "Single-panel cartons or bulk crates, adapted to your distribution model."
            },
            {
              icon: PackageCheck,
              title: "Export Experience",
              desc: "Stable production and packing for long-distance container shipping."
            }
          ].map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="rounded-xl bg-card border border-border p-6 hover:border-primary transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* SECTION 10 — COMPLIANCE */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-14 sm:py-16 lg:py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Production Standards
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">
              Compliance baked into every batch.
            </h2>
            <p className="mt-4 text-base opacity-85 leading-relaxed">
              Tempering lines use light-table technology and digital scanners to inspect panels for
              optical distortion, surface defects, and tempering consistency before packing.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "ASTM C1048 Heat-Treated",
                "ANSI Z97.1 Safety Glazing",
                "16 CFR 1201 Cat. II",
                "Full SGCC Batch Traceability"
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-sm font-medium"
                >
                  <ShieldCheck className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
            <Link
              to="/safety"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Read full compliance details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="h-full w-full">
            <img
              src={compliance}
              alt="Impact testing tempered glass"
              loading="lazy"
              className="rounded-xl border border-white/10 object-cover h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROCESS TIMELINE */}
      <section className="container-rider py-14 sm:py-16 lg:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            From Drawing to Delivery
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Four checkpoints. Zero surprises.
          </h2>
        </Reveal>
        <ProcessTimeline
          steps={[
            {
              step: "01",
              title: "Drawing Review",
              desc: "Engineering converts your CAD/PDF into a Rider RS-SKU drawing within 24 hours.",
              image: hero5
            },
            {
              step: "02",
              title: "Tempering",
              desc: "Inline tempering with full SGCC traceability stamp on every panel.",
              image: hero2
            },
            {
              step: "03",
              title: "Edge & Drilling",
              desc: "Precision polishing and CNC drilling matched to your hardware platform.",
              image: edgeAndDrilling
            },
            {
              step: "04",
              title: "Mixed Packing",
              desc: "Cartons, crates, and L-frames packed for warehouse or store handling.",
              image: mixedPacking
            }
          ]}
        />
      </section>

      {/* SECTION — FROM CAD TO RS-SKU */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-rider py-14 sm:py-16 lg:py-20">
          <Reveal className="mx-auto max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Technical Expertise
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              From CAD to RS-SKU.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We convert proprietary CAD formats into repeatable RS-SKUs. Engineering support
              ensures hinge mapping and handle layouts align with standard North American hardware
              systems.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Drawing-to-SKU conversion for repeat supply",
                "Precision U-cuts, corner notches, radius edges",
                "Hinge mapping for major hardware platforms",
                "Private-label silk-screen branding"
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <SendDrawingButton size="md" variant="solid" label="Send Drawing for Review" />
            </div>
          </Reveal>
          <Reveal className="mt-12">
            <img src={technicalExpertise} alt="" className="w-full" />
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — GALLERY */}
      <section className="bg-surface border-y border-border">
        <div className="container-rider py-14 sm:py-16 lg:py-20">
          <Reveal className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Inside the Factory
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Real production. Real shipping. Real programs.
              </h2>
            </div>
            <SendDrawingButton size="md" variant="outline" label="Quote a batch" />
          </Reveal>
          <Gallery
            images={[
              { src: realProduction1, alt: "Inside the Rider factory floor", span: "wide" },
              { src: realProduction2, alt: "Edge polishing line" },
              { src: realProduction3, alt: "Roller-hole CNC drilling" },
              { src: realProduction4, alt: "Light-table optical QC" },
              { src: realProduction5, alt: "Warehouse rows of L-framed glass" },
              { src: realProduction6, alt: "Loading containers at port", span: "wide" }
            ]}
          />
        </div>
      </section>

      {/* SECTION 9 — USE CASES */}
      <section className="container-rider py-14 sm:py-16 lg:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Programs we run
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Hardware OEMs, hospitality, and developers.
          </h2>
        </Reveal>
        <UseCaseCards
          items={[
            {
              image: hotelBath,
              tag: "Hospitality",
              title: "Hotel bath renovations",
              desc: "Repeat sliding format across hundreds of identical bathrooms.",
              defaultProgram: "Hotel / Multi-Unit Commercial"
            },
            {
              image: hardwareSystemOEMs,
              tag: "OEM",
              title: "Hardware-system OEMs",
              desc: "Glass cut and drilled to your roller, guide, and handle spec.",
              defaultProgram: "OEM Hardware Program"
            },
            {
              image: bigBox,
              tag: "Distribution",
              title: "Big-box distributors",
              desc: "Carton-packed standard sizes ready for store shelving.",
              defaultProgram: "Distributor Program"
            }
          ]}
        />
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="container-rider py-14 sm:py-16 lg:py-20">
        <FAQ
          centered
          items={[
            {
              q: "What file types do you accept?",
              a: "Yes. SGCC certification with permanent etched stamp is standard across the entire Rider tempered program."
            },
            {
              q: "Do you ship mixed format containers",
              a: "Yes — every batch ties to a traceability id, and per-batch test reports are filed for 7 years and available on request."
            },
            {
              q: "Are panels SGCC containers certified",
              a: "Yes. Hotel chains, multi-unit developers, and OEMs receive project-specific compliance letters on Rider letterhead."
            },
            {
              q: "Can you private-label the glass?",
              a: "Yes. CAN/CGSB 12.1 conformance is standard, with bilingual documentation available on request."
            },
            {
              q: "What is the minimum order for OEM program?",
              a: "Yes. CAN/CGSB 12.1 conformance is standard, with bilingual documentation available on request."
            }
          ]}
        />
      </section>

      {/* SECTION 12 — CTA BAND */}
      <section className="flex-1 flex flex-col">
        <CtaBand
          title="Ready to start your shower glass program?"
          intro="Send your CAD or PDF — a Rider engineer reviews every drawing within 24 hours and confirms feasibility, pricing, and lead time."
          imageAlt="Rider glass program engineering"
        />
      </section>
    </>
  );
}
