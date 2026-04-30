import { createFileRoute } from "@tanstack/react-router";
import fixed from "@/assets/fixed-hero.jpg";
import fixedD1 from "@/assets/fixed-detail-1.jpg";
import fixedD2 from "@/assets/fixed-detail-2.jpg";
import drilling from "@/assets/process-drilling.jpg";
import polishing from "@/assets/process-polishing.jpg";
import qc from "@/assets/process-qc.jpg";
import packing from "@/assets/process-packing.jpg";
import lframes from "@/assets/logistics-lframes.jpg";
import lFrameTransport from "@/assets/l-frame-transport.png";
import warehouse from "@/assets/warehouse-rows.jpg";
import port from "@/assets/shipping-port.jpg";
import factory from "@/assets/factory-floor.jpg";
import structuralGlass from "@/assets/Structural glass details.png";
import hotel from "@/assets/usecase-hotel.jpg";
import oem from "@/assets/usecase-oem.jpg";
import residential from "@/assets/usecase-residential.jpg";
import womanDraw from "@/assets/woman-draw.png"
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";
import engineeredFixed from "@/assets/engineered-standards-fixed.png"

export const Route = createFileRoute("/fixed")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Fixed Shower Panel Glass | Walk-In & Return Panels | Rider Shower Systems" },
      { name: "description", content: "Walk-in screens, return panels, and side-screens with polished safety edges and clamp-compatible processing for frameless and semi-frameless enclosures." },
      { property: "og:title", content: "Fixed Shower Panel Glass | Rider Shower Systems" },
      { property: "og:description", content: "Walk-in panels, return panels, and side-screens with clamp-ready edges and L-frame transport." },
      { property: "og:image", content: fixed },
      { name: "twitter:image", content: fixed },
    ],
  }),
});

function Page() {
  return (
    <ProductPageTemplate
      program="Fixed Panel Glass"
      eyebrow="Fixed Panel Program"
      title="Fixed shower panel glass — walk-in, return & side-screen."
      intro="Produced for inline shower enclosures, walk-in shower layouts, return panels, and side-screen installations. Supplied with polished safety edges and optional clamp-compatible processing for frameless and semi-frameless systems."
      heroImage={fixed}
      heroAlt="Tall fixed glass panel for walk-in shower"
      stats={[
        { value: 8, suffix: "–12mm", label: "Heavy panel range" },
        { value: 80, suffix: '"', label: "Max standard height" },
        { value: 10000, suffix: "+", label: "Fixed panels / month" },
        { value: 24, suffix: "h", label: "Drawing review" },
      ]}
      structuralIntegrityImage={structuralGlass}
      structuralIntegrityImageAlt="Glass manufacturing facility floor"
      structuralIntegrityTitle="Structural Integrity"
      structuralIntegrityBody="Every component is stress-tested to exceed international building standards, ensuring long-term stability in high-traffic commercial environments."
      structuralIntegrityBullets={[
        { title: "Reinforced Framing", desc: "High-density extrusion for maximum lateral load resistance." },
        { title: "Precision Miters", desc: "Zero-gap corner assemblies with internal alignment hardware." },
        { title: "Acoustic Isolation", desc: "Dual-seal gasket technology providing up to 42 STC rating." },
        { title: "Low-Profile Support", desc: "Minimalist visual footprint with hidden fastening systems." },
      ]}
      specs={[
        { label: "Typical Thickness", value: "8 mm · 10 mm · 12 mm" },
        { label: "Typical Heights", value: '60" · 72" · 76" · 80"' },
        { label: "Common Formats", value: "Walk-in · Inline · Return panels · Side-screen" },
        { label: "Glass Types", value: "Clear · Low-Iron · Acid-Etched · Tinted" },
        { label: "Edge Options", value: "Flat polished · Pencil polished · Arrissed" },
        { label: "Hardware", value: "Clamp · Wall-channel · U-channel" },
      ]}
      hideWhy
      hideCerts
      hideUseCases
      processAfterStructural
      programDeskTitle="Ready to start your shower Glass program?"
      programDeskBody="Connect with our engineering program desk for volume technical specifications and pricing structures."
      programDeskHours="Mon-Fri: 06:00 - 18:00 EST"
      programDeskResponseTime="< 2 Hours Guaranteed"
      programDeskFileTypes={[".DWG", ".STEP", ".PDF", ".SKP"]}
      programDeskImage={womanDraw}
      programDeskImageAlt="Engineer reviewing glass panel drawings"
      featureTitle="Edge Processing & Surface Protection"
      features={[
        "Flat polished, pencil polished, or arrissed safety edges",
        "Clamp-hardware or wall-channel installation ready",
        "Multi-layer protective sheets between panels",
        "Humidity barrier wrapping & transport stabilization",
        "Optional radius corners or notching",
      ]}
      featureImage={engineeredFixed}
      featureImageAlt="Polished safety edge on a fixed shower panel"
      whyTitle="Tall fixed panels that arrive flawless every time."
      whyBody="Fixed panels are unforgiving — a single chip or scratch retires the entire panel. Rider's edge processing, inter-panel separators, and L-frame transport are engineered to land tall walk-in glass on site without damage."
      whyBullets={[
        "Three edge finishes — flat, pencil, or arrissed — to your spec",
        "Clamp and channel hardware compatibility verified pre-production",
        "Inter-panel foam separators on every shipment",
        "L-frame transport stabilises tall heights against ocean roll",
      ]}
      whyImage={womanDraw}
      whyImageAlt="Walk-in shower with tall fixed panel installed"
      process={[
        { step: "01", title: "Drawing Review", desc: "Heights, edges, and hardware compatibility verified against your spec.", image: factory },
        { step: "02", title: "Tempering", desc: "Heavy 10–12mm tempering with SGCC stamp on every panel.", image: qc },
        { step: "03", title: "Edge Finishing", desc: "Flat, pencil, or arrissed polishing for clamp and channel install.", image: polishing },
        { step: "04", title: "L-frame Pack", desc: "Yellow steel L-frames stabilise tall walk-in panels for ocean transit.", image: packing },
      ]}
      gallery={[
        { src: fixed, alt: "Walk-in shower with fixed panel", span: "wide" },
        { src: fixedD1, alt: "Polished panel edge close-up" },
        { src: fixedD2, alt: "Walk-in installed in modern bath" },
        { src: lframes, alt: "L-frames with separated glass sheets" },
        { src: warehouse, alt: "Warehouse rows of fixed panels" },
        { src: port, alt: "Container loading at port", span: "wide" },
      ]}
      useCases={[
        { image: hotel, tag: "Hospitality", title: "Hotel walk-in showers", desc: "Tall fixed panels across resort suite renovations.", defaultProgram: "Fixed — Hospitality" },
        { image: oem, tag: "OEM", title: "Frameless enclosure brands", desc: "Clamp-ready panels mapped to your hardware system.", defaultProgram: "Fixed — OEM Frameless" },
        { image: residential, tag: "Developer", title: "Multi-unit residential", desc: "Repeat walk-in geometry across apartment & villa builds.", defaultProgram: "Fixed — Residential Project" },
      ]}
      logisticsTitle="L-frame transport for tall fixed panels."
      logisticsBody={'Tall fixed panels ship on yellow steel L-frames with foam separators, humidity barrier wrapping, and forklift entry — engineered to land 80" walk-in glass intact after weeks at sea.'}
      logisticsBullets={[
        'Yellow steel L-frames sized to 80" panel heights',
        "Foam separators between every panel",
        "Humidity barrier wrapping on all crates",
        "Forklift entry base supports for warehouse handling",
      ]}
      logisticsImage={lFrameTransport}
      logisticsImageAlt="Yellow L-frames stacked with fixed shower panels"
      comparison={[
        { label: "Edge finish options", rider: "Flat / pencil / arrissed", standard: "Seamed only" },
        { label: "Tall-panel transport", rider: "L-frame stabilised", standard: "Stacked crate" },
        { label: "Hardware verification", rider: "Pre-production", standard: "Field measure" },
        { label: "Inter-panel protection", rider: "Foam separators", standard: "Cardboard slip" },
        { label: "Heavy glass range", rider: "Up to 12mm", standard: "Often capped at 10mm" },
      ]}
      faqs={[
        { q: "How tall can a fixed panel be?", a: '80" is our standard maximum. Taller bespoke heights are available on request — contact engineering with your project drawings.' },
        { q: "Which edge finish should I choose?", a: "Flat polished is the most common premium finish. Pencil polished gives a softer aesthetic; arrissed is a cost-effective safety finish for clamp install." },
        { q: "Are panels clamp-ready?", a: "Yes. Clamp and wall-channel hardware compatibility is verified during drawing review. Send your hardware spec for engineering confirmation." },
        { q: "Do tall walk-in panels survive ocean transit?", a: 'Yes. Our L-frame + foam separator + humidity barrier system is validated for trans-Pacific transit on 80" heights.' },
      ]}
    />
  );
}
