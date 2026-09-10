import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files only: no Node server, so no image optimizer
 * and no custom headers. Those settings are therefore switched on by an env var
 * rather than always-on, so `npm run dev` and a Vercel/Node deploy keep full
 * image optimization while `npm run build:pages` produces a static export.
 *
 * BASE_PATH matters only for a *project* repo, which Pages serves from
 * https://<user>.github.io/<repo>. A user repo named <user>.github.io is served
 * from the domain root and needs no base path.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    // Lets an app with two root layouts own the 404 for unmatched URLs. It is
    // incompatible with `output: export`, which needs a plain 404.html instead,
    // so it is switched off for the Pages build.
    ...(isPages ? {} : { globalNotFound: true }),
  },

  ...(isPages
    ? {
        output: "export" as const,
        // No optimizer on a static host; the source images are pre-sized instead.
        images: { unoptimized: true },
        // Pages does not serve /about as a file, so emit /about/index.html.
        trailingSlash: true,
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      }
    : {}),

  // A static host cannot run these; configure them at the CDN/host instead.
  ...(isPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
