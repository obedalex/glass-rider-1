import slidingGlideX from "@/assets/sliding-glass-x.png";
import pivot from "@/assets/pivot.png";
import fixedLPanel from "@/assets/fixed-panel-l-bar.png";
import bifoldFlex from "@/assets/bi-fold-flex.png";
import rs3260 from "@/assets/RS-TB-3260-08.png";

import type { Category } from "./library.skus";

export type TopCategory = {
  category: Category;
  featuredSku: string;
  description: string;
  image?: string;
};

export const TOP_CATEGORIES: TopCategory[] = [
  { category: "Sliding",      featuredSku: "RS-SL-3076-08", description: "Top-roller and bypass panels for standard alcove and walk-in configurations.", image: slidingGlideX },
  { category: "Swing",        featuredSku: "RS-SW-2878-12", description: "Frameless pivot and hinged doors compatible with all major wall and glass-to-glass hardware platforms.", image: pivot },
  { category: "Tub",          featuredSku: "RS-TB-5660-08", description: "Over-tub sliding enclosures in standard 48\"–60\" spans with clear and frosted options.", image: rs3260 },
  { category: "Fixed",        featuredSku: "RS-FX-4280-10", description: "Stationary panels for walk-in entries, clamp-mount and U-channel compatible.", image: fixedLPanel },
  { category: "Return Panel", featuredSku: "RS-RP-1876-08", description: "Side returns for frameless walk-in enclosures, clamp and channel mount.", image: bifoldFlex },
];
