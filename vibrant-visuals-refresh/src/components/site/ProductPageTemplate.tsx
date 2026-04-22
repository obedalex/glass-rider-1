import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SendDrawingButton } from "./SendDrawingButton";
import { SpecBox } from "./SpecBox";
import { StatBand, type Stat } from "./StatBand";
import { ProcessTimeline, type ProcessStep } from "./ProcessTimeline";
import { Gallery, type GalleryImage } from "./Gallery";
import { UseCaseCards, type UseCase } from "./UseCaseCards";
import { FAQ, type FAQItem } from "./FAQ";
import { CtaBand } from "./CtaBand";

export type ProductPageProps = {
  program: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  // Section 2: at-a-glance stats
  stats: Stat[];
  // Section 3: specs
  specs: { label: string; value: string }[];
  specTitle?: string;
  // Section 3 right column: feature checklist
  features: string[];
  featureTitle?: string;
  featureImage: string;
  featureImageAlt: string;
  // Section 4: rich split (why this program)
  whyTitle: string;
  whyBody: string;
  whyBullets: string[];
  whyImage: string;
  whyImageAlt: string;
  // Section 5: process timeline (4 steps)
  process: ProcessStep[];
  // Section 6: gallery
  gallery: GalleryImage[];
  // Section 7: use cases
  useCases: UseCase[];
  // Section 8: certifications strip
  certifications?: string[];
  // Section 9: logistics / packing
  logisticsTitle: string;
  logisticsBody: string;
  logisticsBullets: string[];
  logisticsImage: string;
  logisticsImageAlt: string;
  // Section 10: comparison table
  comparison?: { label: string; rider: string; standard: string }[];
  // Section 11: FAQ
  faqs: FAQItem[];
};

export function ProductPageTemplate(p: ProductPageProps) {
  const certs = p.certifications ?? [
    "ANSI Z97.1",
    "16 CFR 1201 Cat. II",
    "CAN/CGSB 12.1",
    "SGCC Certified",
    "ASTM C1048",
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden border-b border-border bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img src={p.heroImage} alt={p.heroAlt} className="h-full w-full object-cover opacity-40" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/40" />
          <div className="absolute inset-0 grid-blueprint opacity-15" />
        </div>
        <div className="container-rider relative grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              {p.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed opacity-85">{p.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SendDrawingButton size="lg" variant="solid" defaultProgram={p.program} label="Send Drawing" />
              <a
                href="#specs"
                className="inline-flex h-12 items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View specifications <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium opacity-80">
              {certs.slice(0, 4).map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" /> {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — STAT BAND */}
      <section className="container-rider -mt-12 relative z-10">
        <StatBand stats={p.stats} />
      </section>

      {/* SECTION 3 — SPECS + FEATURES */}
      <section id="specs" className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Program Specifications</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Engineered standards, ready for repeat supply.
          </h2>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-2">
          <SpecBox title={p.specTitle ?? "Standard Program Specifications"} items={p.specs} />
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-primary border-b border-border pb-3">
              {p.featureTitle ?? "Hardware-Ready Processing"}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {p.features.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-md border border-border">
              <img src={p.featureImage} alt={p.featureImageAlt} loading="lazy" width={1200} height={900} className="h-44 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY THIS PROGRAM (split visual) */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-rider py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/15 blur-2xl" aria-hidden />
              <img
                src={p.whyImage}
                alt={p.whyImageAlt}
                loading="lazy"
                width={1200}
                height={900}
                className="relative rounded-xl border border-border shadow-2xl object-cover w-full h-[420px]"
              />
            </Reveal>
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Why Rider {p.eyebrow}</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">{p.whyTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.whyBody}</p>
              <ul className="mt-6 space-y-3">
                {p.whyBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <SendDrawingButton size="md" variant="solid" defaultProgram={p.program} label="Discuss your program" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROCESS TIMELINE */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Manufacturing Process</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Four checkpoints from drawing to crate.
          </h2>
        </Reveal>
        <ProcessTimeline steps={p.process} />
      </section>

      {/* SECTION 6 — GALLERY */}
      <section className="bg-surface-2 border-y border-border">
        <div className="container-rider py-20">
          <Reveal className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Production Gallery</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                From the floor: real fabrication & shipping.
              </h2>
            </div>
            <SendDrawingButton size="md" variant="outline" defaultProgram={p.program} label="Quote your batch" />
          </Reveal>
          <Gallery images={p.gallery} />
        </div>
      </section>

      {/* SECTION 7 — USE CASES */}
      <section className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Built For</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Programs we ship every week.
          </h2>
        </Reveal>
        <UseCaseCards items={p.useCases} />
      </section>

      {/* SECTION 8 — CERTIFICATIONS STRIP */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-rider py-12">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Certified Program</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-balance">Compliance baked into every batch.</h3>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-3">
                {certs.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold backdrop-blur"
                  >
                    <ShieldCheck className="h-4 w-4 text-primary" /> {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 9 — LOGISTICS / PACKING */}
      <section className="container-rider py-20">
        <div className="grid gap-0 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
          <Reveal className="p-8 sm:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Logistics &amp; Packing</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground text-balance">{p.logisticsTitle}</h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">{p.logisticsBody}</p>
            <ul className="mt-6 space-y-3">
              {p.logisticsBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src={p.logisticsImage}
              alt={p.logisticsImageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* SECTION 10 — COMPARISON */}
      {p.comparison && p.comparison.length > 0 && (
        <section className="bg-surface-2 border-y border-border">
          <div className="container-rider py-20">
            <Reveal className="mb-10 max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Why It Matters</span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Rider program vs. spot-buy glass
              </h2>
            </Reveal>
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <div className="grid grid-cols-3 border-b border-border bg-surface-2 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground sm:px-6">
                <div>Attribute</div>
                <div className="text-primary">Rider Program</div>
                <div>Standard Spot-Buy</div>
              </div>
              <StaggerGroup>
                {p.comparison.map((row, i) => (
                  <StaggerItem
                    key={row.label}
                    className={`grid grid-cols-3 px-4 py-4 text-sm sm:px-6 ${
                      i % 2 ? "bg-surface-2" : "bg-card"
                    }`}
                  >
                    <div className="font-semibold text-foreground">{row.label}</div>
                    <div className="font-medium text-primary">{row.rider}</div>
                    <div className="text-muted-foreground">{row.standard}</div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 11 — FAQ */}
      <section className="container-rider py-20">
        <FAQ items={p.faqs} />
      </section>

      {/* SECTION 12 — CTA BAND */}
      <section className="container-rider pb-24">
        <CtaBand
          title={`Start your ${p.eyebrow.toLowerCase()} program with Rider.`}
          intro="Send your CAD or PDF — a Rider program manager confirms feasibility, pricing, and lead time within 24 hours."
          defaultProgram={p.program}
        />
      </section>
    </>
  );
}
