import { defineConfig, loadEnv, type Plugin } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

function apiQuoteDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: "api-quote-dev",
    configureServer(server) {
      server.middlewares.use("/api/quote", async (req, res, next) => {
        if (req.method !== "POST") return next();

        process.env.RESEND_API_KEY = env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
        process.env.TO_EMAIL = env.TO_EMAIL ?? process.env.TO_EMAIL;

        try {
          const chunks: Buffer[] = [];
          for await (const chunk of req) chunks.push(chunk as Buffer);
          const body = Buffer.concat(chunks);

          const headers = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (typeof value === "string") headers.set(key, value);
            else if (Array.isArray(value)) headers.set(key, value.join(", "));
          }

          const webReq = new Request(`http://localhost${req.url ?? "/api/quote"}`, {
            method: req.method,
            headers,
            body: body.length > 0 ? body : undefined,
          });

          const { default: handler } = await server.ssrLoadModule("/api/quote.ts");
          const response: Response = await handler(webReq);

          res.statusCode = response.status;
          response.headers.forEach((v, k) => res.setHeader(k, v));
          const text = await response.text();
          res.end(text);
        } catch (err) {
          console.error("[api-quote-dev] error:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Dev middleware failed" }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      TanStackRouterVite(),
      react(),
      tailwindcss(),
      tsConfigPaths(),
      apiQuoteDevPlugin(env),
      visualizer({ open: true })
    ]
  };
});
