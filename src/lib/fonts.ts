import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Plus Jakarta Sans, variable. One file covers 200-800, so every weight the
 * design uses (400 body, 500-600 nav and buttons, 700-800 headings) costs
 * nothing extra over a single static weight.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

/**
 * IBM Plex Mono, used sparingly: section numbers, dates, metadata, technology
 * labels and small interface details. Two weights is all those roles need.
 */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

/** Latin faces, loaded on every route. */
export const fontVariables = [jakarta.variable, plexMono.variable].join(" ");
