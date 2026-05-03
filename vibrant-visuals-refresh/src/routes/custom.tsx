/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import custom from "@/assets/custom-hero-2.png";
import customHeroWebp from "@/assets/custom-hero-2.webp";
import customHeroMobileWebp from "@/assets/custom-hero-2-mobile.webp";
import customD1 from "@/assets/custom-detail-1.jpg";
import customD2 from "@/assets/custom-detail-2.jpg";
import drilling from "@/assets/process-drilling.jpg";
import polishing from "@/assets/process-polishing.jpg";
import crates from "@/assets/logistics-crates.jpg";
import tubCheckpoint1 from "@/assets/tub-checkpoint-1.png";
import tubCheckpoint2 from "@/assets/tub-checkpoint-2.png";
import tubCheckpoint3 from "@/assets/tub-checkpoint-3.png";
import mixedPacking from "@/assets/mixed-packing.png";
import hotel from "@/assets/usecase-hotel.jpg";
import oem from "@/assets/usecase-oem.jpg";
import residential from "@/assets/usecase-residential.jpg";
import engineeredCustom from "@/assets/engineered-standards-custom.png";
import { Share2, Layers, SlidersHorizontal } from "lucide-react";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";
import fromOneDrawing from "@/assets/from-one-drawing.png"

export const Route = createFileRoute("/custom")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Custom OEM Shower Glass Programs | CAD-to-SKU | Rider Shower Systems" },
      { name: "description", content: "Drawing-to-SKU OEM glass programs. CAD conversion, complex fabrication, private-label silk-screen branding, and heavy-duty crating for hotel, residential, and OEM hardware programs." },
      { property: "og:title", content: "Custom OEM Shower Glass Programs | Rider Shower Systems" },
      { property: "og:description", content: "We convert your CAD into repeatable RS-SKUs with hinge mapping, private-label branding, and program logistics." },
      { property: "og:image", content: custom },
      { name: "twitter:image", content: custom },
    ],
  }),
});

function Page() {
  return (
    <ProductPageTemplate
      program="Custom OEM Program"
      eyebrow="Custom OEM Program"
      title="Custom shower system glass, engineered for repeat supply."
      intro="Rider produces custom glass panels based on project drawings for hotel installations, apartment developments, luxury villas, and private-label OEM hardware programs. We bridge custom engineering and long-term, repeatable program supply."
      heroImage={custom}
      heroImageSources={[
        { media: "(max-width: 767px)", srcSet: customHeroMobileWebp, type: "image/webp", sizes: "100vw" },
        { srcSet: customHeroWebp, type: "image/webp", sizes: "100vw" },
      ]}
      heroImageSizes="100vw"
      heroAlt="CAD blueprint with tempered glass panel on workbench"
      heroOverlayColor="#262121"
      hideStats
      hideGallery
      hideUseCases
      hideCerts
      hideLogistics
      hideComparison
      hideProcess
      whyNumbered
      bespokeCapabilitiesTitle="Bespoke Capabilities"
      bespokeCapabilities={[
        {
          icon: Share2,
          title: "Complex Geometries",
          desc: "Advanced 5-axis CNC machining allows for the production of non-Euclidean panel shapes and complex compound curves with micron-level precision.",
        },
        {
          icon: Layers,
          title: "Specialized Coatings",
          desc: "Industry-leading surface treatments including chemical-resistant epoxies, antimicrobial finishes, and high-temperature thermal barriers.",
        },
        {
          icon: SlidersHorizontal,
          title: "Integrated Hardware",
          desc: "Pre-installed electronic components, sensors, and structural mounting points designed to streamline on-site systems integration.",
        },
      ]}
      specs={[
        { label: "File Types", value: ".DWG · .DXF · .PDF · .STEP · .ZIP" },
        { label: "Thickness Range", value: "6 mm – 12 mm tempered" },
        { label: "Fabrication", value: "U-cuts · Notches · Radius · Drilling" },
        { label: "Branding", value: "Silk-screen ceramic-frit · Acid-etch logo" },
        { label: "Programs", value: "OEM · Hotel · Multi-unit · Distributor" },
        { label: "Compliance", value: "ANSI Z97.1 · 16 CFR 1201 · SGCC" },
      ]}
      featureTitle="Engineering & Fabrication Capabilities"
      features={[
        "Drawing-to-SKU conversion for repeat supply",
        "Precision U-cuts, corner notches, radius edges",
        "Hinge mapping for major hardware platforms",
        "Private-label silk-screen branding (ceramic-frit)",
        "Matched-set packing across multi-panel assemblies",
      ]}
      featureImage={engineeredCustom}
      featureImageAlt="Custom-cut tempered glass with notches and drilled holes"
      whyTitle="From one drawing to a SKU you can re-order forever."
      whyBody="Most factories quote your custom drawing as a one-off. Rider converts it into a Rider RS-SKU — locked geometry, locked hardware mapping, locked tolerance — so you can re-order the exact same panel on every program lot, year after year."
      whyBullets={[
        "Engineering reviews every drawing within 24 hours",
        "Approved drawings become a Rider RS-SKU for repeat supply",
        "Private-label silk-screen branding with ceramic-frit ink",
        "Mixed-pack containers per OEM hardware program",
      ]}
      whyImage={fromOneDrawing}
      whyImageAlt="Engineer reviewing CAD on screen with glass sample"
      customProcessTitle="The Custom Process"
      customProcessBody="Our structured workflow ensures technical accuracy from initial inquiry to final delivery, minimizing variance and lead times."
      customProcessSteps={[
        {
          step: "01",
          title: "Technical Intake",
          desc: "Initial review of CAD models, structural requirements, and environmental variables.",
        },
        {
          step: "02",
          title: "Engineering Feasibility",
          desc: "Stress analysis, material selection, and optimization of manufacturing pathways.",
        },
        {
          step: "03",
          title: "Precision Manufacturing",
          desc: "Robotic fabrication and manual finishing overseen by senior industrial technicians.",
        },
        {
          step: "04",
          title: "Site-Ready Delivery",
          desc: "Secured transport with integrated lifting points and installation documentation.",
        },
      ]}
      process={[
        { step: "01", title: "Drawing Intake", desc: "Send CAD/PDF — engineering replies with feasibility & quote within 24h.", image: tubCheckpoint1 },
        { step: "02", title: "RS-SKU Creation", desc: "Approved drawing becomes a locked Rider RS-SKU for repeat supply.", image: tubCheckpoint2 },
        { step: "03", title: "Custom Fabrication", desc: "U-cuts, notches, drilling, radius edges — all CNC-controlled.", image: tubCheckpoint3 },
        { step: "04", title: "Program Crating", desc: "Heavy-duty crates engineered for the panel mix in your program.", image: mixedPacking },
      ]}
      gallery={[
        { src: custom, alt: "CAD blueprint with glass panel", span: "wide" },
        { src: customD1, alt: "Custom-cut glass close-up" },
        { src: customD2, alt: "Engineer reviewing drawing" },
        { src: polishing, alt: "Edge polishing line" },
        { src: drilling, alt: "Custom drilling on CNC" },
        { src: crates, alt: "Heavy-duty crating", span: "wide" },
      ]}
      useCases={[
        { image: oem, tag: "OEM", title: "Hardware OEM platforms", desc: "Glass mapped to your hinge, roller, or clamp system across an entire enclosure line.", defaultProgram: "OEM Hardware Program" },
        { image: hotel, tag: "Hospitality", title: "Hotel & multi-unit", desc: "Repeat custom geometry shipped over months for resort renovations.", defaultProgram: "Hotel / Multi-Unit Commercial" },
        { image: residential, tag: "Developer", title: "Luxury residential", desc: "Architect-spec panels for villa, penthouse, and high-end builds.", defaultProgram: "Custom Residential Project" },
      ]}
      logisticsTitle="Mixed crating engineered for custom programs."
      logisticsBody="Custom programs rarely ship in clean stacks — they're a mix of heights, thicknesses, and cut-outs. Rider designs crating per program lot so varying geometries land safely on long-haul routes."
      logisticsBullets={[
        "Reinforced structural framing per program lot",
        "Moisture barrier wrapping for ocean transit",
        "Multi-point strap locking with foam blocking",
        "Forklift entry base supports for warehouse handling",
      ]}
      logisticsImage={crates}
      logisticsImageAlt="Heavy-duty wood crating for mixed-size custom panels"
      comparison={[
        { label: "Drawing-to-SKU conversion", rider: "Locked Rider RS-SKU", standard: "One-off quote" },
        { label: "Engineering review SLA", rider: "24 hours", standard: "Days to weeks" },
        { label: "Private-label branding", rider: "Ceramic-frit silk-screen", standard: "Not offered" },
        { label: "Hinge mapping", rider: "Pre-production verified", standard: "Field measure" },
        { label: "Repeat-supply consistency", rider: "Drift-free across lots", standard: "Variable" },
      ]}
      faqs={[
        { q: "What file types do you accept?", a: ".DWG, .DXF, .PDF, .STEP, and .ZIP archives. All drawings are reviewed by Rider engineering within 24 hours." },
        { q: "What does 'drawing-to-SKU conversion' mean?", a: "Once you approve our engineered drawing, it becomes a Rider RS-SKU — a locked specification you can re-order indefinitely with identical geometry on every batch." },
        { q: "Can you private-label our brand on the glass?", a: "Yes. We silk-screen your logo or safety mark with ceramic-frit ink during tempering — permanent, dishwasher-grade durability." },
        { q: "What's the minimum order for a custom program?", a: "First runs typically start at one mixed 40' HQ container. Subsequent program lots are sized to your forecast." },
      ]}
    />
  );
}
