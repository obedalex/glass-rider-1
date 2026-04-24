import rs2476 from "@/assets/RS-SL-2476-08.png";
import rs3076 from "@/assets/RS-SL-3076-10.png";
import rs3676 from "@/assets/RS-SL-3676-10.png";
import rs2880 from "@/assets/RS-SW-2880-10.png";
import rs3080 from "@/assets/RS-SW-3080-10.png";
import rs3680 from "@/assets/RS-FX-3680-12.png";
import rs2480 from "@/assets/RS-FX-2480-12.png";
import rs3260 from "@/assets/RS-TB-3260-08.png";

export type GlassType = "Clear" | "Low-Iron" | "Frosted" | "Tinted Bronze" | "Tinted Grey";
export type Hardware = "Roller" | "Pivot Hinge" | "Wall Hinge" | "Glass-to-Glass Hinge" | "Clamp" | "Channel";
export type Category = "Sliding" | "Swing" | "Tub" | "Fixed" | "Return Panel";

export type Format = {
  sku: string;
  category: Category;
  width: number;
  height: number;
  thickness: 6 | 8 | 10 | 12;
  type: GlassType;
  hardware: Hardware[];
};

export const FORMATS: Format[] = [
  { sku: "RS-SL-2476-08", category: "Sliding", width: 24, height: 76, thickness: 8,  type: "Clear",        hardware: ["Roller"] },
  { sku: "RS-SL-2876-08", category: "Sliding", width: 28, height: 76, thickness: 8,  type: "Clear",        hardware: ["Roller"] },
  { sku: "RS-SL-3076-08", category: "Sliding", width: 30, height: 76, thickness: 8,  type: "Low-Iron",     hardware: ["Roller"] },
  { sku: "RS-SL-3278-10", category: "Sliding", width: 32, height: 78, thickness: 10, type: "Clear",        hardware: ["Roller"] },
  { sku: "RS-SL-3678-10", category: "Sliding", width: 36, height: 78, thickness: 10, type: "Low-Iron",     hardware: ["Roller"] },
  { sku: "RS-SW-2476-10", category: "Swing",   width: 24, height: 76, thickness: 10, type: "Clear",        hardware: ["Pivot Hinge", "Wall Hinge"] },
  { sku: "RS-SW-2676-10", category: "Swing",   width: 26, height: 76, thickness: 10, type: "Low-Iron",     hardware: ["Pivot Hinge", "Glass-to-Glass Hinge"] },
  { sku: "RS-SW-2878-12", category: "Swing",   width: 28, height: 78, thickness: 12, type: "Clear",        hardware: ["Wall Hinge", "Glass-to-Glass Hinge"] },
  { sku: "RS-SW-3078-12", category: "Swing",   width: 30, height: 78, thickness: 12, type: "Low-Iron",     hardware: ["Wall Hinge"] },
  { sku: "RS-SW-3280-12", category: "Swing",   width: 32, height: 80, thickness: 12, type: "Frosted",      hardware: ["Pivot Hinge"] },
  { sku: "RS-TB-4858-06", category: "Tub",     width: 48, height: 58, thickness: 6,  type: "Clear",        hardware: ["Roller", "Channel"] },
  { sku: "RS-TB-5258-06", category: "Tub",     width: 52, height: 58, thickness: 6,  type: "Tinted Bronze",hardware: ["Roller"] },
  { sku: "RS-TB-5660-08", category: "Tub",     width: 56, height: 60, thickness: 8,  type: "Clear",        hardware: ["Roller"] },
  { sku: "RS-TB-6060-08", category: "Tub",     width: 60, height: 60, thickness: 8,  type: "Frosted",      hardware: ["Channel"] },
  { sku: "RS-FX-3076-08", category: "Fixed",   width: 30, height: 76, thickness: 8,  type: "Clear",        hardware: ["Clamp", "Channel"] },
  { sku: "RS-FX-3678-10", category: "Fixed",   width: 36, height: 78, thickness: 10, type: "Low-Iron",     hardware: ["Clamp"] },
  { sku: "RS-FX-4280-10", category: "Fixed",   width: 42, height: 80, thickness: 10, type: "Clear",        hardware: ["Clamp", "Channel"] },
  { sku: "RS-FX-4880-12", category: "Fixed",   width: 48, height: 80, thickness: 12, type: "Low-Iron",     hardware: ["Clamp"] },
  { sku: "RS-FX-6080-12", category: "Fixed",   width: 60, height: 80, thickness: 12, type: "Tinted Grey",  hardware: ["Clamp"] },
  { sku: "RS-RP-1276-08", category: "Return Panel", width: 12, height: 76, thickness: 8,  type: "Clear",   hardware: ["Clamp"] },
  { sku: "RS-RP-1876-08", category: "Return Panel", width: 18, height: 76, thickness: 8,  type: "Clear",   hardware: ["Clamp", "Channel"] },
  { sku: "RS-RP-2478-10", category: "Return Panel", width: 24, height: 78, thickness: 10, type: "Low-Iron",hardware: ["Clamp"] },
];

export const CATEGORIES: Category[] = ["Sliding", "Swing", "Tub", "Fixed", "Return Panel"];
export const THICKNESSES: Format["thickness"][] = [6, 8, 10, 12];
export const TYPES: GlassType[] = ["Clear", "Low-Iron", "Frosted", "Tinted Bronze", "Tinted Grey"];
export const HARDWARE: Hardware[] = ["Roller", "Pivot Hinge", "Wall Hinge", "Glass-to-Glass Hinge", "Clamp", "Channel"];

export const THICKNESS_COLORS: Record<number, string> = {
  6:  "bg-sky-600 text-white",
  8:  "bg-primary text-primary-foreground",
  10: "bg-amber-600 text-white",
  12: "bg-neutral-800 text-white",
};

// Keys are matched to the closest existing FORMATS SKU by category + dimensions.
// rs2476 (24x76 SL)  → RS-SL-2476-08  exact
// rs3076 (30x76 SL)  → RS-SL-3076-08  same dims, filename has -10 thickness
// rs3676 (36x76 SL)  → RS-SL-3678-10  36" wide, 76≈78
// rs2880 (28x80 SW)  → RS-SW-2878-12  28" wide, 80≈78
// rs3080 (30x80 SW)  → RS-SW-3078-12  30" wide, 80≈78
// rs3680 (36x80 FX)  → RS-FX-3678-10  36" wide, 80≈78
// rs2480 (24x80 FX)  → RS-FX-4880-12  closest FX with 12mm thickness
// rs3260 (TB panel)  → RS-TB-5660-08  only tub image available
export const SKU_IMAGES: Partial<Record<string, string>> = {
  "RS-SL-2476-08": rs2476,
  "RS-SL-3076-08": rs3076,
  "RS-SL-3678-10": rs3676,
  "RS-SW-2878-12": rs2880,
  "RS-SW-3078-12": rs3080,
  "RS-FX-3678-10": rs3680,
  "RS-FX-4880-12": rs2480,
  "RS-TB-5660-08": rs3260,
};
