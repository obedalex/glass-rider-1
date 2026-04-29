import { createFileRoute } from "@tanstack/react-router";
import tub from "@/assets/tub-hero.jpg";
import tubD1 from "@/assets/tub-detail-1.jpg";
import tubD2 from "@/assets/tub-detail-2.jpg";
import drilling from "@/assets/process-drilling.jpg";
import polishing from "@/assets/process-polishing.jpg";
import qc from "@/assets/process-qc.jpg";
import packing from "@/assets/process-packing.jpg";
import warehouse from "@/assets/warehouse-rows.jpg";
import port from "@/assets/shipping-port.jpg";
import factory from "@/assets/factory-floor.jpg";
import hotel from "@/assets/usecase-hotel.jpg";
import oem from "@/assets/usecase-oem.jpg";
import residential from "@/assets/usecase-residential.jpg";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

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
      stats={[
        { value: 6, suffix: "–8mm", label: "Standard thickness" },
        { value: 18000, suffix: "+", label: "Tub panels / month" },
        { value: 99.4, decimals: 1, suffix: "%", label: "Retail carton on-time" },
        { value: 24, suffix: "h", label: "Drawing review" },
      ]}
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
      whyImage={tubD2}
      whyImageAlt="Stack of retail-ready tub enclosure cartons"
      process={[
        { step: "01", title: "SKU Setup", desc: "Drawing approved once; the SKU runs identical for the life of the program.", image: factory },
        { step: "02", title: "Tempering", desc: "6mm and 8mm tempering with SGCC stamp.", image: qc },
        { step: "03", title: "Drill & Polish", desc: "Roller and handle holes drilled, all edges flat-polished.", image: drilling },
        { step: "04", title: "Retail Carton", desc: "Foam-separated retail cartons, mixed-pack containers.", image: packing },
      ]}
      gallery={[
        { src: tub, alt: "Tub enclosure with sliding screen", span: "wide" },
        { src: tubD1, alt: "Polished tub panel edge" },
        { src: tubD2, alt: "Carton-packed tub panels" },
        { src: polishing, alt: "Edge polishing line" },
        { src: warehouse, alt: "Warehouse rows of cartons" },
        { src: port, alt: "Container shipping at port", span: "wide" },
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
      logisticsImage={packing}
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
      hideUseCases
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
