import slidingGlideX from "@/assets/sliding-glass-x.png";
import pivot from "@/assets/pivot.png";
import fixedLPanel from "@/assets/fixed-panel-l-bar.png";
import bifoldFlex from "@/assets/bi-fold-flex.png";

import type { Category } from "./library.skus";

export type TopCategory = {
  category: Category;
  title?: string;
  featuredSku: string;
  description: string;
  image?: string;
};

export const TOP_CATEGORIES: TopCategory[] = [
  { category: "Sliding",      title: "Sliding Glide-X",    featuredSku: "RS-SL-3076-08", description: "Top-roller and bypass panels for standard alcove and walk-in configurations.", image: slidingGlideX },
  { category: "Swing",        title: "Pivot Prime",        featuredSku: "RS-SW-2878-12", description: "Frameless pivot and hinged doors compatible with all major wall and glass-to-glass hardware platforms.", image: pivot },
  { category: "Fixed",        title: "Fixed Panel L-Bar",  featuredSku: "RS-FX-4280-10", description: "Stationary panels for walk-in entries, clamp-mount and U-channel compatible.", image: fixedLPanel },
  { category: "Return Panel", title: "Bifold Flex",        featuredSku: "RS-RP-1876-08", description: "Side returns for frameless walk-in enclosures, clamp and channel mount.", image: bifoldFlex },
];
