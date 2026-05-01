import { createFileRoute } from "@tanstack/react-router";
import swing from "@/assets/swing-hero.jpg";
import swingD1 from "@/assets/swing-detail-1.jpg";
import swingD2 from "@/assets/swing-detail-2.jpg";
import heavyDutyWood from "@/assets/heavy-duty-wood.png";
import fromFloorSwing1 from "@/assets/fromFloor-swing-1.png";
import fromFloorSwing2 from "@/assets/fromFloor-swing-2.png";
import fromFloorSwing3 from "@/assets/fromFloor-swing-3.png";
import fromFloorSwing4 from "@/assets/fromFloor-swing-4.png";
import fromFloorSwing5 from "@/assets/fromFloor-swing-5.png";
import fromFloorSwing6 from "@/assets/fromFloor-swing-6.png";
import tubCheckpoint1 from "@/assets/tub-checkpoint-1.png";
import tubCheckpoint2 from "@/assets/tub-checkpoint-2.png";
import tubCheckpoint3 from "@/assets/tub-checkpoint-3.png";
import tubCheckpoint4 from "@/assets/tub-checkpoint-4.png";
import hotel from "@/assets/usecase-hotel.jpg";
import oem from "@/assets/usecase-oem.jpg";
import residential from "@/assets/usecase-residential.jpg";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/swing")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Swing Shower Door Glass | Heavy 10–12mm Tempered | Rider Shower Systems" },
      { name: "description", content: "Heavy 8–12mm tempered swing door glass with precision hinge cut-outs, fully polished internal edges, and heavy-duty OEM crating." },
      { property: "og:title", content: "Swing Shower Door Glass | Rider Shower Systems" },
      { property: "og:description", content: "Heavy frameless swing panels with hinge cut-outs and matched return-panel sets." },
      { property: "og:image", content: swing },
      { name: "twitter:image", content: swing },
    ],
  }),
});

function Page() {
  return (
    <ProductPageTemplate
      program="Swing Door Glass"
      eyebrow="Swing Door Program"
      title="Heavy frameless swing glass with surgical hinge cut-outs."
      intro="Heavy frameless swing panels with standard hinge cut-outs, offset positioning, and handle hole preparation. All internal cut-out edges are fully polished to prevent stress fractures during hardware torquing — engineered for thousands of OEM hinge platforms."
      heroImage={swing}
      heroAlt="Frameless swing shower door with chrome pivot hinges"
      heroNoOverlay
      specs={[
        { label: "Typical Thickness", value: "8 mm · 10 mm · 12 mm" },
        { label: "Standard Door Widths", value: '24" · 26" · 28" · 30"' },
        { label: "Common Heights", value: '76" · 78" · 80"' },
        { label: "Glass Types", value: "Clear · Low-Iron · Acid-Etched" },
        { label: "Hinge Platforms", value: "Pivot · Wall-mount · Glass-to-glass" },
        { label: "Matched Sets", value: "Door + Fixed Return pairs available" },
      ]}
      featureTitle="Precision Hinge Preparation"
      features={[
        "Standard hinge cut-outs for major hardware platforms",
        "Offset positioning to enclosure designer spec",
        "Handle hole preparation in matched sets",
        "Fully polished internal cut-out edges",
        "Radius corners to reduce stress concentration",
      ]}
      featureImage={swingD1}
      featureImageAlt="Polished hinge cut-out on heavy swing door glass"
      whyTitle="Hinge cut-outs that survive a decade of torquing."
      whyBody="Internal cut-outs are the failure point on most heavy swing glass. Rider polishes every internal edge to remove micro-fractures, then stress-tests sample panels per batch to validate the geometry under torque load."
      whyBullets={[
        "Every hinge cut-out internally polished — no seamed edges allowed",
        "Matched door + return-panel sets shipped together for installer accuracy",
        "Heavy-duty crating engineered for 10mm and 12mm panel weight",
        "Hinge map cross-checked against your hardware before production",
      ]}
      whyImage={swingD2}
      whyImageAlt="Detail of swing door pivot hinge engaged on heavy glass"
      process={[
        { step: "01", title: "Drawing Review", desc: "Hinge cut-outs and offset positions verified against your hardware spec.", image: tubCheckpoint1 },
        { step: "02", title: "Tempering", desc: "Heavy 10–12mm tempering with SGCC stamp on every panel.", image: tubCheckpoint2 },
        { step: "03", title: "Cut-out & Polish", desc: "CNC hinge cut-outs with internal edge polishing for stress relief.", image: tubCheckpoint3 },
        { step: "04", title: "Heavy Crating", desc: "Reinforced wood crates with foam blocking and forklift entry base.", image: tubCheckpoint4 },
      ]}
      gallery={[
        { src: fromFloorSwing1, alt: "Swing door production — frame 1", span: "wide" },
        { src: fromFloorSwing2, alt: "Swing door production — frame 2" },
        { src: fromFloorSwing3, alt: "Swing door production — frame 3" },
        { src: fromFloorSwing4, alt: "Swing door production — frame 4" },
        { src: fromFloorSwing5, alt: "Swing door production — frame 5" },
        { src: fromFloorSwing6, alt: "Swing door production — frame 6", span: "wide" },
      ]}
      useCases={[
        { image: hotel, tag: "Hospitality", title: "Luxury hotel suites", desc: "Heavy frameless swing programs across resort renovations.", defaultProgram: "Swing — Hospitality" },
        { image: oem, tag: "OEM", title: "Hinge-system OEMs", desc: "Cut-outs mapped to your pivot or wall-hinge geometry.", defaultProgram: "Swing — OEM Hinge Platform" },
        { image: residential, tag: "Developer", title: "Custom residential", desc: "Architect-spec heavy glass for high-end villa programs.", defaultProgram: "Swing — Residential Project" },
      ]}
      logisticsTitle="Heavy-duty wood crating for 10mm & 12mm panels."
      logisticsBody="Swing panels ship in reinforced wood crates engineered for heavy panel weight — moisture barrier wrapped, multi-point strapped, and base-supported for forklift entry. Container layouts validated for ocean transit."
      logisticsBullets={[
        "Reinforced structural framing for 12mm panel weight",
        "Moisture barrier wrapping for ocean & port transit",
        "Multi-point strap locking with foam blocking",
        "Forklift entry base supports for warehouse handling",
      ]}
      logisticsImage={heavyDutyWood}
      logisticsImageAlt="Heavy-duty wooden export crates for glass"
      comparison={[
        { label: "Internal cut-out polish", rider: "Every edge polished", standard: "Seamed only — fracture risk" },
        { label: "Heavy glass range", rider: "Up to 12mm in program", standard: "Often capped at 10mm" },
        { label: "Crate construction", rider: "Reinforced wood + base", standard: "Lightweight skids" },
        { label: "Matched door + return", rider: "Shipped as matched set", standard: "Sourced separately" },
        { label: "Hinge map verification", rider: "Pre-production", standard: "Field measure" },
      ]}
      faqs={[
        { q: "Do you supply matched door + return-panel sets?", a: "Yes. Door and return panels are produced and packed as matched sets so geometry stays consistent at the install." },
        { q: "What hinge platforms can you cut for?", a: "We support pivot, wall-mount, and glass-to-glass platforms from major North American hardware brands. Send your hinge drawing for engineering review." },
        { q: "Why does internal edge polish matter?", a: "Unpolished internal cut-outs concentrate stress when hinges are torqued, leading to delayed shattering. Polished edges remove the micro-fracture risk." },
        { q: "Can 12mm panels ship overseas safely?", a: "Yes — our heavy-duty wood crating with foam blocking and moisture wrap is engineered for trans-Pacific transit." },
      ]}
      whyAfterHero
      whyNumbered
      useCasesAfterProcess
      comparisonAfterCerts
      heroBoxed
    />
  );
}
