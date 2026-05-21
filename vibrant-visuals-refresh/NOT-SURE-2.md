# NOT-SURE-2 — Items Skipped (Need More Context)

---

## 1. Replace certificate text badges with their logos (homepage compliance section)

**Location:** `src/routes/index.tsx` — the "Compliance baked into every batch" section (~line 444)

**What it shows now:** Four text badges: "ASTM C1048 Heat-Treated", "ANSI Z97.1 Safety Glazing", "16 CFR 1201 Cat. II", "Full SGCC Batch Traceability".

**What's needed:** The actual official logo/image files for each of these four certificates. The product pages already use stamp images (`sgcc-stamp-1.png`, `ansi-stamp-1.png`, etc.) but the homepage compliance section uses text-only badges. We need to confirm which image files map to which badge, or whether new logo files need to be sourced.

---

## 2. "Program we run" — replace with images of shower in a box

**Location:** `src/routes/index.tsx` — the "Programs we run" / Use Cases section (~line 585), and `src/routes/library.tsx` — the SKU examples section.

**What's needed:** Actual product images of "shower in a box" (retail-packaged shower glass). No such images currently exist in `src/assets/`. These need to be provided or sourced before this can be implemented.

---

## 3. FAQs are mostly incorrect — fix all FAQs

**Location:**
- `src/routes/index.tsx` (~line 625) — 5 FAQ items, all have mismatched questions and answers
- `src/routes/sliding.tsx` (~line 117) — 4 FAQs, the last one specifically flagged
- `src/routes/tub.tsx` — FAQs flagged as incorrect
- `src/routes/library.tsx` — "Do you ship mixed format containers" entry to be removed; others to be reviewed

**What's needed:** The correct answers for each FAQ question. The current answers are placeholders that don't match the questions (e.g., "What file types do you accept?" has the SGCC stamp answer). You need to supply the correct Q&A content for each page before these can be fixed.

---

## 4. Change wording and pictures on various pages

**Location:** Multiple pages — no specific pages or sections were identified in the instructions beyond a photo of a QC worker labeled "Light-table optical QC".

**What's needed:**
- A list of which pages need wording changes and what the new wording should be
- A list of which images to replace and what to replace them with (or new image files to be added to `src/assets/`)

---

## 5. Replace SKU code tiles with product images in "Program SKU Examples"

**Location:** `src/components/site/ProductPageTemplate.tsx` (~line 766) — the `skuExamples` section renders SKU codes and labels in tiles.

**What's needed:** Actual product images corresponding to each SKU (e.g., SD-3068-8C, SD-3060-8C, etc.). No such per-SKU images exist in `src/assets/` currently. These images need to be provided or sourced.

---

## 6. Change the response hours

**Location:** Product pages that use `programDeskHours` prop in `ProductPageTemplate` — currently shows "Mon-Fri: 06:00 - 18:00 EST".

**What's needed:** The correct hours of operation to display. Please confirm the new hours (e.g., time zone, days, range).

---

## 7. "INSI" certificate — confirm spelling

**Already partially done:** INSI was added to the sliding page safety standards as instructed, but the standard abbreviation for this body is typically "ANSI" (already listed) or "INSI" is not a widely recognised standard abbreviation.

**What's needed:** Confirmation of the correct name/abbreviation. If this refers to a different standards body, please clarify so the full name and any related logo can be added correctly.

---

## 8. Remove "View Certifications" and "Request Compliance Packet" buttons

**Location:** Not found in current codebase. A search across all files found no components or text matching "View certifications", "View Certifications", "Request Compliance Packet", or "Request compliance packet".

**What's needed:** Clarification of where these buttons appear — possibly a page or section that was added recently or is on a branch not yet visible here.

---

## 9. SKU database / naming convention plan

**From the instructions:** "What is our plan for database for our library format and the SKU referencing e.g. RS-SW – Swing, RS-SL – Sliding, RS-TB – Tub and their respective Height, Width and Thickness."

**What's needed:** This is an architectural/product decision, not a code task yet. The current SKU system in `src/routes/library.skus.ts` already uses the RS-SL / RS-SW / RS-TB / RS-FX / RS-RP convention. Clarification needed on:
- Whether a backend database is required, or if the static file approach is sufficient
- Whether SKU data should be editable via a CMS or admin panel
- Any changes to the current naming format
