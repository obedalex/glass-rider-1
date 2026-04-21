import { motion } from "framer-motion";
import { CompatBanner } from "./CompatBanner";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-2">
      <div className="absolute inset-0 grid-blueprint opacity-60" />
      <div className="container-rider relative grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-[1.05] text-foreground text-balance">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <div className="mt-7 max-w-xl">
            <CompatBanner />
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 rounded-2xl bg-primary/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
            <img src={image} alt={imageAlt} className="h-[420px] w-full object-cover" loading="lazy" width={1200} height={900} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
