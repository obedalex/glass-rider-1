import { Link } from "@tanstack/react-router";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { SendDrawingButton } from "./SendDrawingButton";
import logo from "@/assets/logo-new.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container-rider py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Rider Shower Glass" className="h-12 w-auto" />
            <span className="font-display text-base font-extrabold tracking-tight">
              Rider Shower Glass
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            B2B OEM &amp; program supply for North American shower enclosure manufacturers and distributors.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider opacity-70">Product Programs</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/sliding" className="opacity-90 hover:opacity-100 hover:text-primary">Sliding Door Glass</Link></li>
            <li><Link to="/swing" className="opacity-90 hover:opacity-100 hover:text-primary">Swing Door Glass</Link></li>
            <li><Link to="/tub" className="opacity-90 hover:opacity-100 hover:text-primary">Tub Enclosure Glass</Link></li>
            <li><Link to="/fixed" className="opacity-90 hover:opacity-100 hover:text-primary">Fixed Panel Glass</Link></li>
            <li><Link to="/custom" className="opacity-90 hover:opacity-100 hover:text-primary">Custom System Panels</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider opacity-70">Compliance</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> SGCC Certified</li>
            <li>ANSI Z97.1</li>
            <li>16 CFR 1201 Cat. II</li>
            <li>CAN/CGSB 12.1</li>
            <li>ASTM C1048</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider opacity-70">Program Desk</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> programs@rider-shower.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (555) 010-2024</li>
          </ul>
          <div className="mt-5">
            <SendDrawingButton size="md" variant="solid" label="Send Engineering Files" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-rider flex flex-col md:flex-row items-start md:items-center justify-between gap-2 py-5 text-xs opacity-70">
          <span>© {new Date().getFullYear()} Rider Shower Systems. All rights reserved.</span>
          <span>Compatible with common North American shower door hardware systems.</span>
        </div>
      </div>
    </footer>
  );
}
