/* eslint-disable prettier/prettier */
import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SendDrawingProvider } from "@/components/site/SendDrawingProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rider Shower Systems | OEM & Distributor Glass Program Supply" },
      { name: "description", content: "SGCC-certified tempered shower glass for North American enclosure manufacturers and distributors. Sliding, swing, tub, fixed, and custom OEM panels with stable geometry and program-ready logistics." },
      { name: "author", content: "Rider Shower Systems" },
      { name: "keywords", content: "shower door glass program supply, OEM shower glass manufacturer, SGCC certified shower glass, bulk tempered shower panels, hinge-ready glass fabrication" },
      { property: "og:title", content: "Rider Shower Systems | OEM & Distributor Glass Program Supply" },
      { property: "og:description", content: "SGCC-certified tempered shower glass for North American enclosure manufacturers and distributors. Sliding, swing, tub, fixed, and custom OEM panels with stable geometry and program-ready logistics." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rider Shower Systems | OEM & Distributor Glass Program Supply" },
      { name: "twitter:description", content: "SGCC-certified tempered shower glass for North American enclosure manufacturers and distributors. Sliding, swing, tub, fixed, and custom OEM panels with stable geometry and program-ready logistics." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9dab5b95-382b-4d51-b58a-86c56943aaad/id-preview-bf96e99f--ba27caa7-e07d-4725-9f30-f001516f7fdc.lovable.app-1776687204970.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9dab5b95-382b-4d51-b58a-86c56943aaad/id-preview-bf96e99f--ba27caa7-e07d-4725-9f30-f001516f7fdc.lovable.app-1776687204970.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SendDrawingProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </SendDrawingProvider>
  );
}
