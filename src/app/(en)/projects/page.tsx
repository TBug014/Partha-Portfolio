import type { Metadata } from "next";

import ProjectsPage from "@/components/pages/ProjectsPage";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("en", "projects");

export default function Projects() {
  return <ProjectsPage d={getDictionary("en")} />;
}
