import { createFileRoute } from "@tanstack/react-router";
import tub from "@/assets/tub-hero.jpg";
import tubHeroFg from "@/assets/tub-hero-fg.png";
import tubD1 from "@/assets/tub-detail-1.jpg";
import oneSkuCarton from "@/assets/one-sku-carton.png";
import logisticsTub from "@/assets/logistics-tub.png";
import slidingTubSystem from "@/assets/sliding-tub-system.png";
import shieldSystem from "@/assets/shield-system.png";
import bypassSystem from "@/assets/bypass-system.png";
import fromFloorTub1 from "@/assets/fromFloor-tub-1.png";
import fromFloorTub2 from "@/assets/fromFloor-tub-2.png";
import fromFloorTub3 from "@/assets/fromFloor-tub-3.png";
import fromFloorTub4 from "@/assets/fromFloor-tub-4.png";
import fromFloorTub5 from "@/assets/fromFloor-tub-5.png";
import fromFloorTub7 from "@/assets/fromFloor-tub-7.png";
import tubCheckpoint1 from "@/assets/tub-checkpoint-1.png";
import tubCheckpoint2 from "@/assets/tub-checkpoint-2.png";
import tubCheckpoint3 from "@/assets/tub-checkpoint-3.png";
import mixedPacking from "@/assets/mixed-packing.png";
import hotel from "@/assets/usecase-hotel.jpg";
import oem from "@/assets/usecase-oem.jpg";
import residential from "@/assets/usecase-residential.jpg";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/tub")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Tub Enclosure Shower Glass | Retail-Ready Cartons | Rider Shower Systems" },
      { name: "description", content: "Standard program tub enclosure glass in retail-ready cartons. Mixed packing for distributor warehouse and store-delivery environments." },
      { property: "og:title", content: "Tub Enclosure Shower Glass | Rider Shower Systems" },
      { property: "og:description", content: "Standard program sizes in retail-ready packing for distributors and big-box retail." },
      { property: "og:image", content: tub },
      { name: "twitter:image", content: tub },
    ],
  }),
});

function Page() {
  return (
    <ProductPageTemplate
      program="Tub Enclosure Glass"
      eyebrow="Tub Enclosure Program"
      title="Tub enclosure glass, retail-ready out of the carton."
      intro="Standard program sizes for sliding bathtub shower door systems and compact bathroom installations. Supplied with installation-ready drilling layouts, polished safety edges, and retail-ready export packing for distributor warehouse handling."
      heroImage={tub}
      heroAlt="Modern bathtub with sliding glass shower screen"
      heroSplit
      heroBgColor="#020617"
      heroFgImage={tubHeroFg}
      heroFgAlt="Tub enclosure glass product render"
      specs={[
        { label: "Common Formats", value: '30" × 55" · 30" × 60" · 30" × 68"' },
        { label: "Typical Thickness", value: "6 mm · 8 mm" },
        { label: "Glass Types", value: "Clear · Low-Iron · Acid-Etched · Frosted" },
        { label: "Hardware", value: "Top-roller · Bypass · Channel" },
        { label: "Packing", value: "Retail carton · Carton + crate mix" },
        { label: "Safety Standards", value: "ANSI Z97.1 · 16 CFR 1201 · SGCC" },
      ]}
      featureTitle="Standard Program Processing"
      features={[
        "Pre-drilled roller mounting holes",
        "Pre-drilled handle holes to spec",
        "Polished safety edges, all sides",
        "Optional acid-etched privacy bands",
        "Retail-ready protective wrapping",
      ]}
      featureImage={tubD1}
      featureImageAlt="Tub enclosure glass with rolled edge detail"
      whyTitle="One SKU, one carton, ready for the retail floor."
      whyBody="Tub enclosure programs live or die by the unboxing. Rider's retail packing is engineered for distributor warehouse pick-and-pack: clean printed cartons, foam separators, and consistent SKU geometry batch after batch."
      whyBullets={[
        "Retail-grade printed cartons with SKU labelling",
        "Foam separators protect during warehouse handling",
        "Consistent geometry — no field re-measure required",
        "Mixed-pack containers combine multiple tub SKUs per ship",
      ]}
      whyImage={oneSkuCarton}
      whyImageAlt="Stack of retail-ready tub enclosure cartons"
      process={[
        { step: "01", title: "SKU Setup", desc: "Drawing approved once; the SKU runs identical for the life of the program.", image: tubCheckpoint1 },
        { step: "02", title: "Tempering", desc: "6mm and 8mm tempering with SGCC stamp.", image: tubCheckpoint2 },
        { step: "03", title: "Drill & Polish", desc: "Roller and handle holes drilled, all edges flat-polished.", image: tubCheckpoint3 },
        { step: "04", title: "Retail Carton", desc: "Foam-separated retail cartons, mixed-pack containers.", image: mixedPacking },
      ]}
      gallery={[
        { src: fromFloorTub1, alt: "Tub enclosure production — frame 1", span: "wide" },
        { src: fromFloorTub2, alt: "Tub enclosure production — frame 2" },
        { src: fromFloorTub3, alt: "Tub enclosure production — frame 3" },
        { src: fromFloorTub4, alt: "Tub enclosure production — frame 4" },
        { src: fromFloorTub5, alt: "Tub enclosure production — frame 5" },
        { src: fromFloorTub7, alt: "Tub enclosure production — frame 6", span: "wide" },
      ]}
      useCases={[
        { image: residential, tag: "Distributor", title: "Big-box retail", desc: "Carton-packed standard tub sizes for store shelving and DIY pickup.", defaultProgram: "Tub — Retail Distributor" },
        { image: hotel, tag: "Hospitality", title: "Hotel bath programs", desc: "Repeat tub format across hundreds of identical guest bathrooms.", defaultProgram: "Tub — Hotel Program" },
        { image: oem, tag: "OEM", title: "Enclosure brands", desc: "Glass mapped to your branded sliding tub enclosure system.", defaultProgram: "Tub — OEM Enclosure" },
      ]}
      logisticsTitle="Mixed-pack containers — carton, crate & L-frame."
      logisticsBody="Rider supplies tempered tub glass in retail-ready carton packing designed for distributor warehouse and store-delivery environments. We support mixed-packing container programs that combine carton, crate, and L-frame formats per ship."
      logisticsBullets={[
        "Retail-grade printed cartons with SKU labelling",
        "Crate-packed mixed-size lots for distributor backstock",
        "L-frame bulk standard formats for OEM warehouse",
        "Single 40' HQ container can mix all three formats",
      ]}
      logisticsImage={logisticsTub}
      logisticsImageAlt="Mixed-format carton and crate packing in container"
      comparison={[
        { label: "Carton presentation", rider: "Printed retail-grade", standard: "Plain export carton" },
        { label: "Edge finish", rider: "Flat polished all sides", standard: "Seamed only" },
        { label: "SGCC stamp", rider: "Permanent etched", standard: "Often omitted" },
        { label: "Mixed packing", rider: "Carton + crate + L-frame", standard: "Single format only" },
        { label: "SKU consistency", rider: "Drift-free batch to batch", standard: "Variable" },
      ]}
      certsAfterHero
      comparisonAfterCerts
      processAfterComparison
      whyNumbered
      hideUseCases
      afterComparison={
        <section className="bg-secondary text-secondary-foreground">
          <div className="container-rider py-20">
            <Reveal className="mb-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider">
                Configurations
              </h2>
              <p className="mt-2 text-sm opacity-70">
                Precision architectural layouts for standard and custom tub dimensions.
              </p>
            </Reveal>
            <StaggerGroup className="grid gap-5 md:grid-cols-3">
              {[
                { title: "Sliding Tub System", sku: "RS-S100", rangeOfMotion: "180° Slide", mechanism: "Top-Hung Roller", image: slidingTubSystem },
                { title: "Shield System", sku: "RS-SH45", rangeOfMotion: "Fixed Position", mechanism: "Profile Clamp", image: shieldSystem },
                { title: "Bypass System", sku: "RS-BP200", rangeOfMotion: "Dual Sliding", mechanism: "Bottom Track", image: bypassSystem },
              ].map((c) => (
                <StaggerItem key={c.sku} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <img src={c.image} alt={c.title} loading="lazy" className="aspect-4/3 w-full object-cover" />
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-foreground">{c.title}</h3>
                      <span className="shrink-0 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">{c.sku}</span>
                    </div>
                    <div className="mt-4 space-y-2 border-t border-border pt-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase tracking-wider text-muted-foreground">Range of Motion</span>
                        <span className="font-bold uppercase tracking-wide text-foreground">{c.rangeOfMotion}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold uppercase tracking-wider text-muted-foreground">Mechanism</span>
                        <span className="font-bold uppercase tracking-wide text-foreground">{c.mechanism}</span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      }
      faqs={[
        { q: "What file types do you accept?", a: "Yes. SGCC certification with permanent etched stamp is standard across the entire Rider tempered program." },
        { q: "Do you ship mixed format containers", a: "Yes — every batch ties to a traceability id, and per-batch test reports are filed for 7 years and available on request." },
        { q: "Are panels SGCC containers certified", a: "Yes. Hotel chains, multi-unit developers, and OEMs receive project-specific compliance letters on Rider letterhead." },
        { q: "Can you private-label the glass?", a: "Yes. CAN/CGSB 12.1 conformance is standard, with bilingual documentation available on request." },
        { q: "What is the minimum order for OEM program?", a: "Yes. CAN/CGSB 12.1 conformance is standard, with bilingual documentation available on request." },
      ]}
    />
  );
}
