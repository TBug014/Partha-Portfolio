import type { Metadata } from "next";

import AboutPage from "@/components/pages/AboutPage";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("ja", "about");

export default function AboutJa() {
  return <AboutPage d={getDictionary("ja")} />;
}
