import type { Metadata } from "next";

import AboutPage from "@/components/pages/AboutPage";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "about");

export default function About() {
  return <AboutPage d={getDictionary("en")} />;
}
