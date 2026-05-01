/* eslint-disable prettier/prettier */
import type { ElementType, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SendDrawingButton } from "./SendDrawingButton";
import { SpecBox } from "./SpecBox";
import { ProcessTimeline, type ProcessStep } from "./ProcessTimeline";
import { Gallery, type GalleryImage } from "./Gallery";
import { UseCaseCards, type UseCase } from "./UseCaseCards";
import { FAQ, type FAQItem } from "./FAQ";
import { CtaBand } from "./CtaBand";
import footer2 from "@/assets/footer2.png";

export type ProductPageProps = {
  program: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  // Section 2b: structural integrity split (optional)
  structuralIntegrityTitle?: string;
  structuralIntegrityBody?: string;
  structuralIntegrityBullets?: { title: string; desc: string }[];
  structuralIntegrityImage?: string;
  structuralIntegrityImageAlt?: string;
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
  // Section 3b: SKU examples (optional)
  skuExamples?: { sku: string; label: string }[];
  skuExamplesTitle?: string;
  skuExamplesEyebrow?: string;
  // Move certifications strip to directly after the "why" section
  certsAfterWhy?: boolean;
  // Move comparison table to directly after the process timeline
  comparisonAfterProcess?: boolean;
  // Move why-split section to directly after the hero
  whyAfterHero?: boolean;
  // Move use cases section to directly after the process timeline
  useCasesAfterProcess?: boolean;
  // Move comparison table to directly after the certifications strip
  comparisonAfterCerts?: boolean;
  // Move certifications strip to directly after the hero
  certsAfterHero?: boolean;
  // Move process timeline to directly after the comparison table
  processAfterComparison?: boolean;
  // Move process timeline to directly after the structural integrity section
  processAfterStructural?: boolean;
  // Hide the "Built For" use cases section entirely
  hideUseCases?: boolean;
  // Hide the production gallery section entirely
  hideGallery?: boolean;
  // Hide the logistics/packing section entirely
  hideLogistics?: boolean;
  // Hide the comparison table entirely
  hideComparison?: boolean;
  // Hide the "Why this program" split section entirely
  hideWhy?: boolean;
  // Render the "Why" section as a numbered-bullet layout (screenshot variant)
  whyNumbered?: boolean;
  // Hide the process timeline section entirely
  hideProcess?: boolean;
  // Hide the stat band entirely
  heroOverlayColor?: string;
  // Wrap the hero text content in a dark, translucent rounded box for extra contrast
  heroBoxed?: boolean;
  // Show the hero image at full opacity with no gradient/grid overlay
  heroNoOverlay?: boolean;
  hideStats?: boolean;
  // Hide the certifications strip entirely
  hideCerts?: boolean;
  // Section 2c: bespoke capabilities card grid (optional, renders after stat band)
  bespokeCapabilitiesTitle?: string;
  bespokeCapabilities?: { icon: ElementType; title: string; desc: string }[];
  // Program desk / contact section (optional, renders after specs)
  programDeskTitle?: string;
  programDeskBody?: string;
  programDeskHours?: string;
  programDeskResponseTime?: string;
  programDeskFileTypes?: string[];
  programDeskImage?: string;
  programDeskImageAlt?: string;
  afterComparison?: ReactNode;
};

export function ProductPageTemplate(p: ProductPageProps) {
  const certs = p.certifications ?? [
    "ANSI Z97.1",
    "16 CFR 1201 Cat. II",
    "CAN/CGSB 12.1",
    "SGCC Certified",
    "ASTM C1048"
  ];

  const whySection = (
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Why Rider {p.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {p.whyTitle}
            </h2>
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
              <SendDrawingButton
                size="md"
                variant="solid"
                defaultProgram={p.program}
                label="Discuss your program"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );

  const whyNumberedSection = (
    <section className="bg-surface border-y border-border">
      <div className="container-rider py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Why Rider {p.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {p.whyTitle}
            </h2>
            {p.whyImage ? (
              <img
                src={p.whyImage}
                alt={p.whyImageAlt ?? ""}
                loading="lazy"
                className="mt-6 h-full w-full object-cover min-h-[320px] rounded-xl"
              />
            ) : (
              <div className="mt-6 bg-surface-2 rounded-xl border border-border min-h-[320px]" />
            )}
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground">{p.whyBody}</p>
            <ol className="mt-8 space-y-3">
              {p.whyBullets.map((b, i) => {
                const circleColors = [
                  "var(--primary)",
                  "var(--chart-3)",
                  "var(--chart-2)",
                  "var(--chart-4)",
                ];
                return (
                  <li key={b} className="flex items-center gap-4 rounded-xl border border-border bg-muted px-4 py-3">
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: circleColors[i % circleColors.length] }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                );
              })}
            </ol>
            <div className="mt-8">
              <SendDrawingButton
                size="md"
                variant="solid"
                defaultProgram={p.program}
                label="Discuss your program"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );

  const structuralIntegritySection =
    p.structuralIntegrityBullets && p.structuralIntegrityBullets.length > 0 ? (
      <section className="bg-surface border-y border-border">
        <div className="container-rider py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="relative overflow-hidden rounded-xl">
              {p.structuralIntegrityImage ? (
                <img
                  src={p.structuralIntegrityImage}
                  alt={p.structuralIntegrityImageAlt ?? ""}
                  loading="lazy"
                  className="h-full w-full object-cover min-h-[420px] rounded-xl"
                />
              ) : (
                <div className="bg-surface-2 rounded-xl border border-border min-h-[420px]" />
              )}
            </Reveal>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                {p.structuralIntegrityTitle ?? "Structural Integrity"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p.structuralIntegrityBody ??
                  "Every component is stress-tested to exceed international building standards, ensuring long-term stability in high-traffic commercial environments."}
              </p>
              <StaggerGroup className="mt-8 space-y-6">
                {p.structuralIntegrityBullets.map((b) => (
                  <StaggerItem key={b.title} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <span className="block text-sm font-bold uppercase tracking-wide text-foreground">
                        {b.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {b.desc}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>
        </div>
      </section>
    ) : null;

  const bespokeCapabilitiesSection =
    p.bespokeCapabilities && p.bespokeCapabilities.length > 0 ? (
      <section className="bg-surface border-y border-border">
        <div className="container-rider py-20">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wider">
              {p.bespokeCapabilitiesTitle ?? "Bespoke Capabilities"}
            </h2>
          </Reveal>
          <StaggerGroup className="grid gap-6 sm:grid-cols-3">
            {p.bespokeCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <StaggerItem
                  key={cap.title}
                  className="rounded-xl border border-border bg-card p-6 sm:p-8"
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cap.desc}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
    ) : null;

  const programDeskSection = p.programDeskTitle ? (
    <section className="bg-surface border-y border-border">
      <div className="container-rider py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {p.programDeskTitle}
            </h2>
            {p.programDeskBody && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p.programDeskBody}
              </p>
            )}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {p.programDeskHours && (
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Program Desk
                  </span>
                  <span className="mt-1 block text-sm font-bold text-foreground">
                    {p.programDeskHours}
                  </span>
                </div>
              )}
              {p.programDeskResponseTime && (
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Response Time
                  </span>
                  <span className="mt-1 block text-sm font-bold text-foreground">
                    {p.programDeskResponseTime}
                  </span>
                </div>
              )}
            </div>
            {p.programDeskFileTypes && p.programDeskFileTypes.length > 0 && (
              <div className="mt-6 rounded-lg border border-border bg-muted p-4">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Files Accepted
                </span>
                <div className="flex flex-wrap gap-2">
                  {p.programDeskFileTypes.map((ft) => (
                    <span
                      key={ft}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground"
                    >
                      {ft}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-7">
              <SendDrawingButton
                size="md"
                variant="solid"
                defaultProgram={p.program}
                label="Discuss your program"
              />
            </div>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-xl">
            {p.programDeskImage ? (
              <img
                src={p.programDeskImage}
                alt={p.programDeskImageAlt ?? ""}
                loading="lazy"
                className="h-full w-full object-cover min-h-[420px] rounded-xl"
              />
            ) : (
              <div className="bg-surface-2 rounded-xl border border-border min-h-[420px]" />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  ) : null;

  const useCasesSection = (
    <section className="container-rider py-20">
      <Reveal className="mb-10 max-w-2xl">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          Built For
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
          Programs we ship every week.
        </h2>
      </Reveal>
      <UseCaseCards items={p.useCases} />
    </section>
  );

  const comparisonSection = p.comparison && p.comparison.length > 0 ? (
    <section className="bg-surface-2 border-y border-border">
      <div className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Why It Matters
          </span>
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
  ) : null;

  const certsSection = (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container-rider py-12">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Certified Program
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-balance">
              Compliance baked into every batch.
            </h3>
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
  );

  const processSection = (
    <section className="container-rider py-20">
      <Reveal className="mb-10 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          Manufacturing Process
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
          Four checkpoints from drawing to crate.
        </h2>
      </Reveal>
      <ProcessTimeline steps={p.process} />
    </section>
  );

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden border-b border-border bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img
            src={p.heroImage}
            alt={p.heroAlt}
            className={`h-full w-full object-cover ${p.heroNoOverlay ? "" : "opacity-40"}`}
            loading="eager"
          />
          {!p.heroNoOverlay &&
            (p.heroOverlayColor ? (
              <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${p.heroOverlayColor} 0%, ${p.heroOverlayColor}d9 45%, ${p.heroOverlayColor}99 100%)` }} />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/40" />
            ))}
          {!p.heroNoOverlay && <div className="absolute inset-0 grid-blueprint opacity-15" />}
        </div>
        <div className="container-rider relative grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-center">
          <motion.div
            className={
              p.heroBoxed
                ? "lg:col-span-9 rounded-2xl border border-white/15 bg-black/35 p-8 sm:p-10 backdrop-blur-md shadow-2xl"
                : "lg:col-span-7"
            }
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
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed opacity-85">
              {p.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <SendDrawingButton
                size="lg"
                variant="solid"
                defaultProgram={p.program}
                label="Send Drawing"
              />
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

      {p.whyAfterHero && !p.hideWhy && (p.whyNumbered ? whyNumberedSection : whySection)}

      {/* SECTION 2b — STRUCTURAL INTEGRITY (optional) */}
      {structuralIntegritySection}
      {p.processAfterStructural && !p.hideProcess && processSection}

      {/* SECTION 2c — BESPOKE CAPABILITIES (optional) */}
      {bespokeCapabilitiesSection}

      {p.certsAfterHero && !p.hideCerts && certsSection}
      {p.certsAfterHero && !p.hideCerts && p.comparisonAfterCerts && comparisonSection}
      {p.certsAfterHero && p.afterComparison}
      {p.certsAfterHero && !p.hideCerts && p.comparisonAfterCerts && p.processAfterComparison && !p.hideProcess && processSection}

      {/* SECTION 3 — SPECS + FEATURES */}
      <section id="specs" className="container-rider py-20">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Program Specifications
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground whitespace-nowrap">
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
              <img
                src={p.featureImage}
                alt={p.featureImageAlt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-44 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3b — SKU EXAMPLES */}
      {p.skuExamples && p.skuExamples.length > 0 && (
        <section className="bg-secondary text-secondary-foreground">
          <div className="container-rider py-16">
            <Reveal className="mb-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {p.skuExamplesEyebrow ?? "Product Identification"}
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-balance">
                {p.skuExamplesTitle ?? "Program SKU Examples"}
              </h2>
            </Reveal>
            <StaggerGroup className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {p.skuExamples.map((item) => (
                <StaggerItem
                  key={item.sku}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="block h-2 w-2 rounded-full bg-primary mb-4" aria-hidden />
                  <span className="block font-display text-xl font-bold">{item.sku}</span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mt-2">
                    {item.label}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* SECTION 3c — PROGRAM DESK (optional) */}
      {programDeskSection}

      {/* SECTION 4 — WHY THIS PROGRAM (split visual) */}
      {!p.whyAfterHero && !p.hideWhy && (p.whyNumbered ? whyNumberedSection : whySection)}

      {p.certsAfterWhy && !p.hideCerts && certsSection}
      {p.certsAfterWhy && !p.hideCerts && p.comparisonAfterCerts && comparisonSection}
      {p.certsAfterWhy && !p.hideCerts && p.comparisonAfterCerts && p.processAfterComparison && !p.hideProcess && processSection}
      {p.certsAfterWhy && p.afterComparison}

      {/* SECTION 5 — PROCESS TIMELINE */}
      {!p.processAfterComparison && !p.processAfterStructural && !p.hideProcess && processSection}

      {p.comparisonAfterProcess && comparisonSection}
      {p.useCasesAfterProcess && !p.hideUseCases && useCasesSection}

      {/* SECTION 6 — GALLERY */}
      {!p.hideGallery && (
        <section className="bg-surface-2 border-y border-border">
          <div className="container-rider py-20">
            <Reveal className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Production Gallery
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  From the floor: real fabrication & shipping.
                </h2>
              </div>
              <SendDrawingButton
                size="md"
                variant="outline"
                defaultProgram={p.program}
                label="Quote your batch"
              />
            </Reveal>
            <Gallery images={p.gallery} />
          </div>
        </section>
      )}

      {/* SECTION 7 — USE CASES */}
      {!p.useCasesAfterProcess && !p.hideUseCases && useCasesSection}

      {/* SECTION 8 — CERTIFICATIONS STRIP */}
      {!p.certsAfterWhy && !p.certsAfterHero && !p.hideCerts && certsSection}
      {!p.certsAfterWhy && !p.certsAfterHero && !p.hideCerts && p.comparisonAfterCerts && comparisonSection}
      {!p.certsAfterWhy && !p.certsAfterHero && !p.hideCerts && p.comparisonAfterCerts && p.processAfterComparison && processSection}
      {!p.certsAfterWhy && !p.certsAfterHero && p.afterComparison}

      {/* SECTION 9 — LOGISTICS / PACKING */}
      {!p.hideLogistics && (
        <section className="container-rider py-20">
          <div className="grid gap-0 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
            <Reveal className="p-8 sm:p-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Logistics &amp; Packing
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground text-balance">
                {p.logisticsTitle}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {p.logisticsBody}
              </p>
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
      )}

      {/* SECTION 10 — COMPARISON */}
      {!p.comparisonAfterProcess && !p.comparisonAfterCerts && !p.hideComparison && comparisonSection}

      {/* SECTION 11 — FAQ */}
      <section className="container-rider py-20">
        <FAQ items={p.faqs} centered />
      </section>

      {/* SECTION 12 — CTA BAND */}
      <section className="flex-1 flex flex-col">
        <CtaBand
          title={`Start your ${p.eyebrow.toLowerCase()} program with Rider.`}
          intro="Send your CAD or PDF — a Rider program manager confirms feasibility, pricing, and lead time within 24 hours."
          defaultProgram={p.program}
          image={footer2}
          imageAlt="Rider glass program engineering"
        />
      </section>
    </>
  );
}
