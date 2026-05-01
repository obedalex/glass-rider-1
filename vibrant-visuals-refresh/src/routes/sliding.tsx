/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import sliding from "@/assets/sliding-hero.jpg";
import slidingD1 from "@/assets/sliding-detail-1.jpg";
import engineeredStandardsSliding from "@/assets/engineered-standards-sliding.png";
import tubCheckpoint1 from "@/assets/tub-checkpoint-1.png";
import tubCheckpoint2 from "@/assets/tub-checkpoint-2.png";
import tubCheckpoint3 from "@/assets/tub-checkpoint-3.png";
import tubCheckpoint4 from "@/assets/tub-checkpoint-4.png";
import hotel from "@/assets/usecase-hotel.jpg";
import oem from "@/assets/usecase-oem.jpg";
import slidingGlass from "@/assets/sliding-glass.png"
import fromFloor2 from "@/assets/fromFloor2.png"
import fromFloor3 from "@/assets/fromFloor3.png"
import fromFloor4 from "@/assets/fromFloor4.png"
import fromFloor5 from "@/assets/fromFloor5.png"
import fromFloor6 from "@/assets/fromFloor6.png"
import logisticsSliding from "@/assets/logistics-sliding.png"
import residential from "@/assets/usecase-residential.jpg";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/sliding")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Sliding Shower Door Glass | Rider Shower Systems" },
      { name: "description", content: "Hardware-ready tempered sliding door glass with precision roller-hole drilling and polished safety edges. SGCC certified, supplied for OEM and distributor programs." },
      { property: "og:title", content: "Sliding Shower Door Glass | Rider Shower Systems" },
      { property: "og:description", content: "Roller-hole precision sliding door panels for inline & bypass enclosures. SGCC certified." },
      { property: "og:image", content: sliding },
      { name: "twitter:image", content: sliding },
    ],
  }),
});

function Page() {
  return (
    <ProductPageTemplate
      program="Sliding Door Glass"
      eyebrow="Sliding Door Program"
      title="Sliding shower door glass, roller-hole accurate."
      intro="Rider sliding panels are produced for inline and bypass enclosure systems requiring precise roller-hole positioning, guide alignment drilling, and polished safety edges. Supplied installation-ready for distributors, manufacturers, and OEM door system suppliers."
      heroImage={sliding}
      heroAlt="Sliding shower door with precision-drilled roller hardware"
      heroNoOverlay
      heroBoxed
      specs={[
        { label: "Typical Thickness", value: "6 mm · 8 mm · 10 mm" },
        { label: "Common Heights", value: '68" · 76" · 78"' },
        { label: "Common Widths", value: '24" · 28" · 30" · 32" · 36"' },
        { label: "Glass Types", value: "Clear · Low-Iron · Acid-Etched · Tinted" },
        { label: "Hardware Platforms", value: "Top-roller · Bottom-roller · Bypass" },
        { label: "Safety Standards", value: "ANSI Z97.1 · 16 CFR 1201 · SGCC" },
      ]}
      featureTitle="Hardware-Ready Processing"
      features={[
        "Precision-drilled roller mounting holes",
        "Handle drilling to your hardware spec",
        "Guide alignment holes for inline tracks",
        "Polished safety edges for frameless install",
        "Optional acid-etched privacy bands",
      ]}
      featureImage={engineeredStandardsSliding}
      featureImageAlt="Polished sliding door edge with drilled roller hole"
      whyTitle="Sliding glass that locks into your hardware on day one."
      whyBody="Most sliding-door warranty issues trace back to drilling tolerance. Our CNC drilling stays within ±0.5mm of your hardware spec across thousands of repeat-spec panels — so installers don't shim, file, or return."
      whyBullets={[
        "Roller-hole positioning verified against your hardware drawing before tempering",
        "Identical drilling on every batch — no panel-to-panel drift in long programs",
        "Polished safety edges minimise stress fractures during torquing",
        "Mixed-pack containers combine sliding + tub + return panels per ship",
      ]}
      whyImage={slidingGlass}
      whyImageAlt="Detail of sliding door roller hardware engaged on glass"
      process={[
        { step: "01", title: "Drawing Review", desc: "Engineers verify roller-hole spacing & handle layout against your hardware spec.", image: tubCheckpoint1 },
        { step: "02", title: "Tempering", desc: "Inline tempering with SGCC stamp; optical scanning for distortion.", image: tubCheckpoint2 },
        { step: "03", title: "Drilling & Polishing", desc: "CNC roller holes + flat-polished safety edges, panel-by-panel inspection.", image: tubCheckpoint3 },
        { step: "04", title: "Mixed Packing", desc: "L-frame, carton, or crate — sized to your warehouse handling.", image: tubCheckpoint4 },
      ]}
      gallery={[
        { src: slidingD1, alt: "Sliding panel with polished edge close-up", span: "wide" },
        { src: fromFloor2, alt: "CNC roller-hole drilling" },
        { src: fromFloor3, alt: "Edge polishing line" },
        { src: fromFloor4, alt: "Sliding panels on yellow L-frames" },
        { src: fromFloor5, alt: "Warehouse rows of sliding panels" },
        { src: fromFloor6, alt: "Containers loaded at port", span: "wide" },
      ]}
      useCases={[
        { image: hotel, tag: "Hospitality", title: "Hotel bath renovations", desc: "Repeat sliding format across hundreds of identical bathrooms.", defaultProgram: "Sliding — Hotel Program" },
        { image: oem, tag: "OEM", title: "Hardware-system OEMs", desc: "Glass cut and drilled to your roller, guide, and handle spec.", defaultProgram: "Sliding — OEM Hardware" },
        { image: residential, tag: "Distributor", title: "Big-box distributors", desc: "Carton-packed standard sizes ready for store shelving.", defaultProgram: "Sliding — Distributor" },
      ]}
      logisticsTitle="L-frame & carton packing for sliding programs."
      logisticsBody="Sliding panels ship in mixed-format containers — yellow steel L-frames for bulk OEM lots, retail cartons for distributor SKUs. Layouts are stress-tested for ocean transit."
      logisticsBullets={[
        "Steel L-frames for bulk OEM panels",
        "Retail-grade cartons for distributor SKUs",
        "Multi-layer foam separators between panels",
        "Humidity barrier wrapping for ocean transit",
      ]}
      logisticsImage={logisticsSliding}
      logisticsImageAlt="Yellow L-frame transport with sliding door panels"
      comparison={[
        { label: "Roller-hole tolerance", rider: "±0.5mm CNC", standard: "Manual drill, ±2mm" },
        { label: "Edge finish", rider: "Flat polished + arrissed", standard: "Seamed only" },
        { label: "SGCC stamp", rider: "Permanent etched", standard: "Often omitted" },
        { label: "Repeat-batch geometry", rider: "Drift-free across SKU runs", standard: "Variable" },
        { label: "Mixed packing", rider: "Carton + crate + L-frame", standard: "Single format only" },
      ]}
      faqs={[
        { q: "What hardware platforms do you support?", a: "All major North American top-roller, bottom-roller, and bypass platforms. Send your hardware drawing — engineering maps drilling against your spec." },
        { q: "Can you supply 10mm sliding glass?", a: "Yes — 10mm is a standard sliding thickness in our program. Ideal for taller heights and premium frameless installations." },
        { q: "Do you offer acid-etched privacy bands?", a: "Yes. Banding, full-panel acid etch, and silk-screen privacy patterns are all available as production-line options." },
        { q: "What's a typical lead time for a sliding program lot?", a: "After drawing approval, 25–35 days for production plus transit. First runs are scheduled into the next available tempering window." },
      ]}
      skuExamples={[
        { sku: "SD-3068-8C", label: "Standard Entry" },
        { sku: "SD-3060-8C", label: "Compact Variant" },
        { sku: "SD-2480-10C", label: "Architectural" },
        { sku: "SD-3680-12C", label: "Heavy Duty" },
      ]}
      whyNumbered
      certsAfterWhy
      comparisonAfterProcess
    />
  );
}
