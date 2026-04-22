import { Upload, FileCheck2, X, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function QuoteForm({
  title = "Send Drawings for Engineering Review",
  intro = "Securely upload your CAD/PDF formats or program requirements for immediate engineering review.",
  programOptions = [
    "I want to send my drawings for a quote.",
    "I want to request physical glass samples.",
    "I want to discuss an ongoing supply program.",
  ],
  defaultProgram,
  onSuccess,
}: {
  title?: string;
  intro?: string;
  programOptions?: string[];
  defaultProgram?: string;
  onSuccess?: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [program, setProgram] = useState<string>(defaultProgram ?? programOptions[0] ?? "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultProgram) setProgram(defaultProgram);
  }, [defaultProgram]);

  const acceptedExt = [".pdf", ".dwg", ".dxf", ".zip", ".step", ".stp", ".iges", ".igs"];
  const maxSize = 25 * 1024 * 1024; // 25MB

  const addFiles = (incoming: FileList | File[]) => {
    const next: File[] = [];
    for (const f of Array.from(incoming)) {
      if (f.size > maxSize) continue;
      if (!files.some((e) => e.name === f.name && e.size === f.size)) next.push(f);
    }
    setFiles((prev) => [...prev, ...next].slice(0, 10));
  };

  const removeFile = (idx: number) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const formatBytes = (n: number) => {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${(n / 1024 / 1024).toFixed(2)} MB`;
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Engineering Intake
        </div>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">{title}</h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground">{intro}</p>
      </div>

      {submitted ? (
        <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
          <FileCheck2 className="mx-auto h-10 w-10 text-primary" />
          <p className="mt-3 font-semibold text-foreground">Your engineering files have been received.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            A Rider program manager will review your drawings and respond within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFiles([]);
            }}
            className="mt-5 text-sm font-semibold text-primary hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            onSuccess?.();
          }}
          className="mx-auto mt-8 max-w-3xl"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First & Last Name">
              <input type="text" required placeholder="John Doe" className={input} />
            </Field>
            <Field label="Company Name">
              <input type="text" required placeholder="Enclosure Manufacturing Corp" className={input} />
            </Field>
            <Field label="Business Email">
              <input type="email" required placeholder="john@company.com" className={input} />
            </Field>
            <Field label="Phone (optional)">
              <input type="tel" placeholder="+1 (555) 555-5555" className={input} />
            </Field>
            <Field label="Business Type">
              <select className={input} defaultValue="" required>
                <option value="" disabled>
                  Select...
                </option>
                <option>Manufacturer</option>
                <option>Distributor</option>
                <option>Developer</option>
                <option>Hardware OEM</option>
              </select>
            </Field>
            <Field label="Estimated Annual Volume">
              <select className={input} defaultValue="">
                <option value="" disabled>
                  Select...
                </option>
                <option>Under 500 panels / yr</option>
                <option>500 – 2,500 panels / yr</option>
                <option>2,500 – 10,000 panels / yr</option>
                <option>10,000+ panels / yr</option>
              </select>
            </Field>
            <Field label="What can we help you with?" full>
              <select className={input} required value={program} onChange={(e) => setProgram(e.target.value)}>
                {programOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
                {defaultProgram && !programOptions.includes(defaultProgram) && (
                  <option key={defaultProgram}>{defaultProgram}</option>
                )}
              </select>
            </Field>

            <Field label="Engineering Files (.DWG, .DXF, .PDF, .STEP — up to 25MB each)" full>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
                }}
                onClick={() => fileInputRef.current?.click()}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8 text-center transition ${
                  dragOver
                    ? "border-primary bg-primary/10"
                    : "border-primary/50 bg-primary/5 hover:bg-primary/10"
                }`}
              >
                <Upload className="h-7 w-7 text-primary" />
                <span className="mt-2 text-sm font-semibold text-primary">
                  Click to upload or drag & drop engineering files
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  Supports {acceptedExt.join(", ")} · Max 10 files
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept={acceptedExt.join(",")}
                  onChange={(e) => {
                    if (e.target.files?.length) addFiles(e.target.files);
                    e.target.value = "";
                  }}
                  className="hidden"
                />
              </div>

              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((f, i) => (
                    <li
                      key={`${f.name}-${i}`}
                      className="flex items-center justify-between gap-3 rounded-md border border-border bg-surface-2 px-3 py-2"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <FileText className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="truncate text-sm font-medium text-foreground">{f.name}</span>
                        <span className="flex-shrink-0 text-xs text-muted-foreground">{formatBytes(f.size)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="rounded p-1 text-muted-foreground hover:bg-background hover:text-destructive"
                        aria-label={`Remove ${f.name}`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </Field>

            <Field label="Project Notes / Specifications" full>
              <textarea
                rows={4}
                placeholder="Hardware platform, target dimensions, finish, target launch date, etc."
                className={`${input} resize-y min-h-[110px]`}
              />
            </Field>

            <Field label="" full>
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-input text-primary" />
                <span>
                  I confirm I'm authorized to share these files and agree to Rider's confidential review process.
                </span>
              </label>
            </Field>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Submit Requirements for Review
          </button>
        </form>
      )}
    </section>
  );
}

const input =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2 flex flex-col gap-1.5 text-left" : "flex flex-col gap-1.5 text-left"}>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      )}
      {children}
    </div>
  );
}
