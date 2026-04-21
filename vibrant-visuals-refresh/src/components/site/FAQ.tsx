import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export type FAQItem = { q: string; a: string };

export function FAQ({ items, eyebrow = "Common Questions", title = "Frequently asked" }: { items: FAQItem[]; eyebrow?: string; title?: string }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <Reveal className="lg:col-span-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">{title}</h2>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Can't find what you need? Send us your drawings and a Rider engineer will respond within 24 hours.
        </p>
      </Reveal>
      <div className="lg:col-span-8">
        <Accordion type="single" collapsible className="rounded-xl border border-border bg-card p-2 shadow-sm">
          {items.map((it, i) => (
            <AccordionItem key={it.q} value={`item-${i}`} className="border-b last:border-b-0">
              <AccordionTrigger className="px-4 py-4 text-left text-sm font-semibold text-foreground hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}