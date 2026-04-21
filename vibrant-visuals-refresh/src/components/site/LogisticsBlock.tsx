import lframes from "@/assets/logistics-lframes.jpg";
import crates from "@/assets/logistics-crates.jpg";
import { Package, Truck, Container } from "lucide-react";

export function LogisticsBlock() {
  return (
    <section className="rounded-2xl bg-secondary text-secondary-foreground overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Logistics Trust Block
          </div>
          <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
            Geometry &amp; protection — controlled <span className="text-amber">factory to warehouse.</span>
          </h3>
          <p className="mt-4 text-sm sm:text-base opacity-80 max-w-xl">
            Container loading, anti-shift blocking, and centerline balancing keep your panels intact across thousands of miles. We support mixed cartons, crates, and L-frames inside a single 40HQ container.
          </p>

          <ul className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Package, label: "Retail Cartons", sub: "Distributor-ready" },
              { icon: Container, label: "OSB Crates", sub: "Mixed-size OEM" },
              { icon: Truck, label: "L-Frames", sub: "Bulk vertical" },
            ].map(({ icon: Icon, label, sub }) => (
              <li key={label} className="rounded-lg bg-white/5 p-4">
                <Icon className="h-6 w-6 text-amber" />
                <div className="mt-2 font-semibold text-sm">{label}</div>
                <div className="text-xs opacity-70">{sub}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative grid grid-cols-2 gap-1 bg-black/30">
          <img src={lframes} alt="Yellow L-frame transport racks loaded with tempered glass" className="h-full w-full object-cover" loading="lazy" width={1200} height={900} />
          <img src={crates} alt="Heavy-duty wooden export crates ready for container loading" className="h-full w-full object-cover" loading="lazy" width={1200} height={900} />
        </div>
      </div>
    </section>
  );
}
