import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

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

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

/** Latin faces, loaded on every route. */
export const fontVariables = [jakarta.variable, jetbrains.variable].join(" ");
