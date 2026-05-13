# Unclear / unresolved homepage copy instructions

These items came from the homepage copy brief but were skipped during the implementation pass because each had an ambiguity (no placement, conflict with existing content, or missing field). Resolve the questions below and re-issue them when ready.

---

## 1. Tagline: "Designed for North American and European shower enclosure systems."

**Original brief:** Listed at the very top, before the "CERTIFICATES SECTION" heading, with no section context.

**Why skipped:** No section/placement was specified. The line does not currently appear anywhere on the homepage, so it's unclear whether it belongs in the hero, above the products, on the new compliance section, or somewhere else entirely.

**To unblock, decide:** Where should this line live? (Hero subline addition? Eyebrow above compliance? Intro line above products? Standalone band between sections?)

---

## 2. CERTIFICATES SECTION — "Compliance & Certification"

**Original brief:**
> TITLE: Compliance & Certification
> TEXT: Production aligned with international standards for tempered safety glass.
> Available certifications:
> - SGCC (North America)
> - EN standards (Europe)

**Why skipped:** A compliance section already exists on the homepage at `vibrant-visuals-refresh/src/routes/index.tsx` (around line 432), titled **"Compliance baked into every batch."** with four cert badges already displayed: ASTM C1048 Heat-Treated, ANSI Z97.1 Safety Glazing, 16 CFR 1201 Cat. II, Full SGCC Batch Traceability. The new brief lists only SGCC + EN.

**To unblock, decide:** Should the existing section be **fully replaced** (drop ASTM, ANSI, 16 CFR badges entirely; show only SGCC + EN), **merged** (keep all 4 existing + add EN), or should the new "Compliance & Certification" block live as an **additional** section elsewhere on the page?

---

## 3. PACKING SECTION — "Packing Designed for Distribution"

**Original brief:**
> TITLE: Packing Designed for Distribution
> TEXT: Packaging adapted to your sales model:
> - Single-panel retail cartons
> - Bulk export crates
> - Mixed container protection
> Designed to reduce breakage and simplify handling at destination.

**Why skipped:** No equivalent section exists on the homepage. Placement was not specified. (Note: the "Mixed Packing" step inside the process timeline at line ~511 is a different element and not the same as a dedicated packing section.)

**To unblock, decide:** Where on the homepage should this new section be inserted (before/after compliance? after the Three Programs cards? as its own band somewhere)? Visual style — full-width band, two-column with image, simple card list?

---

## 4. Tub Enclosure Glass — missing tech line

**Original brief:** Provided product-card tech lines for Sliding, Swing, and Fixed:
> Sliding Door Glass — Tempered panels with roller and guide cut-outs.
> Swing Door Glass — Hinge-ready panels with precise hole positioning.
> Fixed Panels — Clean edge-finished panels for frameless systems.

**Why skipped:** No tech line was supplied for the **Tub Enclosure Glass** card, which is one of the four products on the homepage grid. Its current description ("Standard program sizes, retail-ready cartons.") was left untouched.

**To unblock, decide:** What tech line should appear under the Tub Enclosure Glass card?

---

## 5. Card 1 (Manufacturers) — title not specified

**Original brief:** For the "Three Programs" section, Cards 2 (Distributors) and 3 (Developers) received both new TITLE and TEXT. Card 1 (Manufacturers) received only new TEXT.

**Why skipped:** With no replacement title given for Card 1, the existing title **"Enclosure brands"** was retained while only the body text was updated.

**To unblock, decide:** Should Card 1 also get a new title (e.g. just "Manufacturers", "Manufacturer Programs", or something else), or is "Enclosure brands" intentional?

---

## 6. Hero subline — "ADD" vs replace

**Original brief:**
> SUBLINE (ADD THIS):
> Precision-cut, tempered panels with hinge, handle, and hardware cut-outs — ready for direct installation.

**What was implemented:** The existing 3-sentence subline ("Rider supplies hardware-ready tempered glass components...") was **replaced** with the new sentence, on the assumption that the hero subline slot was already occupied and the brief intended to swap it.

**To unblock if interpretation was wrong:** Confirm whether you wanted (a) a full replacement (current behavior) or (b) the new sentence ADDED as a second smaller line below the existing paragraph.
