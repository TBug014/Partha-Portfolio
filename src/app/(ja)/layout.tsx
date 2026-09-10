import type { ReactNode } from "react";

import RootHtml from "@/components/layout/RootHtml";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = buildMetadata("ja");
export { viewport } from "@/lib/metadata";

export default function JapaneseLayout({ children }: { children: ReactNode }) {
  return <RootHtml locale="ja">{children}</RootHtml>;
}
