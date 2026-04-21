import { Reveal } from "./Reveal";
import { SendDrawingButton } from "./SendDrawingButton";
import { Mail, Phone } from "lucide-react";

export function CtaBand({
  title = "Ready to start your program?",
  intro = "Send us your CAD or PDF drawings — a Rider program manager reviews every submission within 24 hours.",
  defaultProgram,
}: {
  title?: string;
  intro?: string;
  defaultProgram?: string;
}) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl bg-secondary text-secondary-foreground p-8 sm:p-14">
        <div className="absolute inset-0 grid-blueprint opacity-15" aria-hidden />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber/20 blur-3xl" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Engineering Intake
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight text-balance">{title}</h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base opacity-85">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <SendDrawingButton size="lg" variant="amber" defaultProgram={defaultProgram} label="Send Drawing Now" />
              <a href="mailto:programs@rider-shower.com" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10">
                <Mail className="h-4 w-4" /> programs@rider-shower.com
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="grid gap-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">Program desk</div>
                <div className="mt-1.5 flex items-center gap-2 text-sm font-semibold">
                  <Phone className="h-4 w-4 text-amber" /> +1 (555) 010-2024
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">Response time</div>
                <div className="mt-1.5 text-sm font-semibold">Engineering review within 24 hours</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-70">Files accepted</div>
                <div className="mt-1.5 text-sm font-semibold">.DWG · .DXF · .PDF · .STEP · .ZIP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}