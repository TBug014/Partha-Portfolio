import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Shippori Mincho, self-hosted as Latin slices only (~81 KB for three weights).
 *
 * It is a Japanese mincho family, and `next/font/google` with `subsets: ["latin"]`
 * still emitted 366 @font-face rules plus a <link rel="preload"> for every slice,
 * roughly 7 MB pulled on every page load for glyphs the Latin design never paints.
 * Taking the three latin-range files directly and serving them locally keeps the
 * typeface identical and removes the download. Japanese glyphs on the English
 * pages fall through to the reader's system mincho, which is the intended design.
 */
const mincho = localFont({
  src: [
    { path: "../fonts/ShipporiMincho-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ShipporiMincho-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/ShipporiMincho-600-latin.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-mincho",
  fallback: ["Hiragino Mincho ProN", "Yu Mincho", "Georgia", "serif"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

/** Latin faces, loaded on every route. */
export const fontVariables = [inter.variable, mincho.variable, jetbrains.variable].join(
  " ",
);
