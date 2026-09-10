import type { ReactNode } from "react";

import RootHtml from "@/components/layout/RootHtml";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = buildMetadata("en");
export { viewport } from "@/lib/metadata";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootHtml locale="en">{children}</RootHtml>;
}
