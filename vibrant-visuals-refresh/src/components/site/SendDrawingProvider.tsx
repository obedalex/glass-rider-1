import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { QuoteForm } from "./QuoteForm";

type Ctx = {
  open: (defaultProgram?: string) => void;
  close: () => void;
};

const SendDrawingCtx = createContext<Ctx | null>(null);

export function useSendDrawing() {
  const ctx = useContext(SendDrawingCtx);
  if (!ctx) throw new Error("useSendDrawing must be used within <SendDrawingProvider>");
  return ctx;
}

export function SendDrawingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState<string | undefined>(undefined);

  const open = useCallback((program?: string) => {
    setDefaultProgram(program);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<Ctx>(() => ({ open, close }), [open, close]);

  return (
    <SendDrawingCtx.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl p-0 max-h-[92vh] overflow-y-auto border-0 bg-transparent shadow-none sm:rounded-2xl">
          <QuoteForm
            defaultProgram={defaultProgram}
            onSuccess={() => {
              // keep modal open to show success state; user can close manually
            }}
          />
        </DialogContent>
      </Dialog>
    </SendDrawingCtx.Provider>
  );
}