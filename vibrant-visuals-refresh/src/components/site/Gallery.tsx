import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "default" | "tall" | "wide";
};

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[180px]">
        {images.map((img, i) => {
          const span =
            img.span === "tall"
              ? "lg:row-span-2"
              : img.span === "wide"
                ? "lg:col-span-2"
                : "";
          return (
            <motion.button
              key={img.src + i}
              type="button"
              onClick={() => setOpenIdx(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-xl border border-border bg-muted shadow-sm transition hover:shadow-xl ${span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full min-h-[180px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 left-3 right-3 text-left text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {img.alt}
              </span>
            </motion.button>
          );
        })}
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">
            {openIdx !== null ? images[openIdx].alt : "Image preview"}
          </DialogTitle>
          {openIdx !== null && (
            <img
              src={images[openIdx].src}
              alt={images[openIdx].alt}
              className="h-auto w-full rounded-xl shadow-2xl"
              width={1600}
              height={1200}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}