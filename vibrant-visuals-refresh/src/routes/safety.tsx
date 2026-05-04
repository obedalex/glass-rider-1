/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  ClipboardCheck,
  Microscope,
  Beaker,
  FileSearch,
  ArrowRight
} from "lucide-react";
import sgcc from "@/assets/safety-stamp.jpg";
import batchTraceability from "@/assets/batch-traceability2.png";
import safetyHero from "@/assets/safety-hero-2.png";
import safetyHeroWebp from "@/assets/safety-hero-2.webp";
import safetyHeroMobileWebp from "@/assets/safety-hero-2-mobile.webp";
import safetyTest from "@/assets/safety-test.jpg";
import qc from "@/assets/process-qc.jpg";
import polishing from "@/assets/process-polishing.jpg";
import warehouse from "@/assets/warehouse-rows.jpg";
import port from "@/assets/shipping-port.jpg";
import complianceSafety from "@/assets/compliance-safety-2.png";
import impactTesting from "@/assets/impact-testing-2.png";
import footer2 from "@/assets/footer2.png";
import qc1 from "@/assets/4-qc-1.png";
import qc2 from "@/assets/4-qc-2.png";
import qc3 from "@/assets/4-qc-3.png";
import qc4 from "@/assets/4-qc-4.png";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { SendDrawingButton } from "@/components/site/SendDrawingButton";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/safety")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Safety & Compliance | ANSI · CFR · SGCC | Rider Shower Systems" },
      {
        name: "description",
        content:
          "Rider tempered shower glass meets ANSI Z97.1, 16 CFR 1201, CAN/CGSB 12.1, and SGCC standards with full batch traceability and rigorous QC."
      },
      { property: "og:title", content: "Safety & Compliance | Rider Shower Systems" },
      {
        property: "og:description",
        content:
          "ANSI, 16 CFR 1201 Cat. II, CAN/CGSB 12.1, and SGCC certified tempered shower glass with full batch traceability."
      },
      { property: "og:image", content: safetyTest },
      { name: "twitter:image", content: safetyTest }
    ]
  })
});

const certs = [
  {
    code: "ANSI Z97.1",
    icon: ShieldCheck,
    desc: "American National Standard for Safety Glazing Materials — structural integrity and safe breakage patterns."
  },
  {
    code: "16 CFR 1201",
    icon: FileCheck2,
    desc: "Category II US Federal safety standards for architectural glazing in high-traffic environments."
  },
  {
    code: "CAN/CGSB 12.1",
    icon: ClipboardCheck,
    desc: "Safety glazing compliance for the Canadian construction market and architectural enclosure systems."
  },
  {
    code: "SGCC Certified",
    icon: Microscope,
    desc: "Safety Glazing Certification Council — independent batch certification with permanent etched stamp."
  },
  {
    code: "ASTM C1048",
    icon: Beaker,
    desc: "Standard for heat-strengthened and tempered flat glass — verified across every Rider production run."
  },
  {
    code: "Full Batch Traceability",
    icon: FileSearch,
    desc: "Every panel ties to a tempering lot, QC record, and SGCC stamp — auditable for years."
  }
];

function Page() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden border-b border-border bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <picture>
            <source
              media="(max-width: 767px)"
              sizes="100vw"
              srcSet={safetyHeroMobileWebp}
              type="image/webp"
            />
            <source
              sizes="100vw"
              srcSet={safetyHeroWebp}
              type="image/webp"
            />
            <img
              src={safetyHero}
              alt="Impact testing tempered shower glass"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="container-rider relative grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="lg:col-span-9 rounded-2xl border border-white/15 bg-black/55 p-8 sm:p-10 backdrop-blur-md shadow-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Compliance
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              North American safety standards, baked into every batch.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed opacity-85">
              Rider Shower Systems Glass is engineered to meet and exceed international safety
              glazing requirements. Every panel in our program is manufactured with full
              traceability for repeatable OEM and distributor supply.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SendDrawingButton size="lg" variant="solid" label="Request Compliance Packet" />
              <a
                href="#certs"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View certifications <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — CERT GRID */}
      <section id="certs" className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Certifications
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Six standards. One panel.
          </h2>
        </Reveal>
        <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certs.map(({ code, icon: Icon, desc }) => (
            <StaggerItem
              key={code}
              className="rounded-xl border border-border bg-card p-7 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-primary">{code}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* SECTION 4 — SGCC STAMP */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-rider py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/20 blur-2xl" />
            <img
              src={batchTraceability}
              alt="SGCC traceability stamp etched into corner of tempered glass"
              loading="lazy"
              width={1200}
              height={900}
              className="relative rounded-xl border border-border shadow-xl object-cover h-[420px] w-full"
            />
          </Reveal>
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Batch Traceability
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              A permanent SGCC stamp on every panel.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              The SGCC stamp is etched into every panel at tempering. This guarantees enclosures
              meet North American building codes and protects your brand from compliance liabilities
              during installation.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every stamp ties back to a tempering lot, QC record, and shipment — auditable from the
              install site for years.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — IMPACT TESTING */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Impact Testing
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">
              Compliance baked into every batch.
            </h2>
            <p className="mt-4 text-base opacity-85 leading-relaxed">
              Tempering lines use light-table technology and digital scanners to inspect panels for
              optical distortion, surface defects, and tempering consistency before packing.{" "}
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Drawing-to-SKU conversion for repeat supply",
                "Fragmentation analysis per 16 CFR 1201 Cat. II",
                "Surface compression verification (≥10,000 psi)",
                "Per-batch test reports filed for 7 years"
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/30 blur-3xl" />
            <img
              src={impactTesting}
              alt="Impact testing tempered shower glass with drop bag"
              loading="lazy"
              className="relative rounded-xl border border-white/10 shadow-2xl object-cover h-[420px] w-full"
            />
          </div>
        </div>
        <div>
          <a
            href=""
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Read full compliance details <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* SECTION 6 — QC PROCESS */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Quality Control Process
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Four QC checkpoints before any panel ships.
          </h2>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Pre-Temper Inspection",
              desc: "Glass cleared for inclusions, scratches, and edge defects before entering the furnace.",
              image: qc1
            },
            {
              step: "02",
              title: "Tempering Witness",
              desc: "Inline temperature, cool-rate, and stress-pattern monitoring on every batch.",
              image: qc2
            },
            {
              step: "03",
              title: "Optical Light-Table",
              desc: "Every panel scanned for distortion and surface defects under polarised light.",
              image: qc3
            },
            {
              step: "04",
              title: "Pack Witness",
              desc: "SGCC stamp, edge finish, and SKU label verified before crate seal.",
              image: qc4
            }
          ].map(({ step, title, desc, image }) => (
            <StaggerItem key={step}>
              <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
                      {step}
                    </span>
                    <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wide">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* SECTION 7 — GALLERY
      <section className="container-rider py-20">
        <Reveal className="mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Production Gallery
          </span>
          <div className="mt-2 flex items-center justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              From the inspection floor: Real fabrication and shipping
            </h2>
            <button className="shrink-0">Quote a batch</button>
          </div>
        </Reveal>
        <Gallery
          images={[
            { src: qc, alt: "Light-table optical QC", span: "wide" },
            { src: sgcc, alt: "SGCC etched stamp" },
            { src: safetyTest, alt: "Drop-bag impact test" },
            { src: polishing, alt: "Edge polishing inspection" },
            { src: warehouse, alt: "Warehouse rows of tested glass" },
            { src: port, alt: "Container loading at port", span: "wide" },
          ]}
        />
      </section>
      */}

      {/* SECTION 8 — DOCUMENTATION */}
      <section className="bg-surface border-y border-border">
        <div className="container-rider py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Documentation
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                A full compliance packet for your engineers.
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                On request we ship your engineering team a complete compliance dossier —
                certifications, test reports, batch traceability records, and project-specific
                declarations.
              </p>
              <div className="mt-6">
                <SendDrawingButton size="md" variant="solid" label="Request Compliance Packet" />
              </div>
            </Reveal>
            <div className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
              {[
                "ANSI Z97.1 test report",
                "16 CFR 1201 Cat. II declaration",
                "CAN/CGSB 12.1 conformance",
                "SGCC certificate of compliance",
                "ASTM C1048 heat-treatment record",
                "Per-batch traceability log"
              ].map((d) => (
                <div
                  key={d}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <FileCheck2 className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{d}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      PDF · per-batch · auditable
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — REGIONAL */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Regional Compliance
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Built for the markets you ship into.
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              region: "United States",
              body: "ANSI Z97.1 + 16 CFR 1201 Cat. II + SGCC. Stamp visible at install for inspector sign-off."
            },
            {
              region: "Canada",
              body: "CAN/CGSB 12.1 conformance with bilingual documentation available on request."
            },
            {
              region: "Project-Specific",
              body: "Hotel chains, multi-unit developers, and OEMs receive project-specific declarations on letterhead."
            }
          ].map((r) => (
            <div key={r.region} className="rounded-xl border border-border bg-card p-7 shadow-sm">
              <h3 className="font-display text-xl font-bold text-primary">{r.region}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10 — TIMELINE */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-20">
          <Reveal className="mb-10 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Compliance Timeline
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">
              From PO to packet — 24 hours.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              { t: "PO confirmed", b: "Tempering lot reserved with full traceability id." },
              { t: "Production", b: "Per-panel SGCC stamp, light-table QC, sample impact test." },
              { t: "Pack & seal", b: "Witness sign-off on stamp, edge, and SKU label." },
              { t: "Packet delivered", b: "PDF compliance dossier emailed within 24h of ship." }
            ].map((s, i) => (
              <div
                key={s.t}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-1 text-sm opacity-80 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="container-rider py-20">
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

      {/* SECTION 12 — CTA */}
      <section className="flex-1 flex flex-col">
        <CtaBand
          title="Ready to Scale Your Production?"
          intro="Send us your project drawing — we'll ship the full compliance dossier alongside the engineering review."
          imageAlt="Rider glass program engineering"
        />
      </section>
    </>
  );
}
