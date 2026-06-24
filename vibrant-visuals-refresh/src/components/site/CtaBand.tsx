import { SendDrawingButton } from "./SendDrawingButton";
import { Mail } from "lucide-react";
import ctaImage from "@/assets/cta2.png";

export function CtaBand({
  title = "Ready to start your program?",
  intro = "Send us your CAD or PDF drawings — a Rider program manager reviews every submission within 24 hours.",
  defaultProgram,
  image = ctaImage,
  imageAlt = "Engineering intake",
}: {
  title?: string;
  intro?: string;
  defaultProgram?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="relative flex-1 overflow-hidden bg-primary">
      <div className="container-rider grid lg:grid-cols-[3fr_2fr]">
        <div className="py-12 sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Engineering Intake
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight text-white text-balance">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-white/80">{intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <SendDrawingButton
              size="md"
              variant="white"
              defaultProgram={defaultProgram}
              label="Send Drawing for Review"
            />
            <a
              href="mailto:sales@ridershowersystems.com"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <Mail className="h-4 w-4" /> sales@ridershowersystems.com
            </a>
          </div>
        </div>
        {/* Image slot — replace this div with <img> once you have the asset */}
        <div className="relative hidden min-h-55 lg:block">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-white/5" />
          )}
        </div>
      </div>
    </div>
  );
}
