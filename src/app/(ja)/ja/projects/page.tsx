import type { Metadata } from "next";

import ProjectsPage from "@/components/pages/ProjectsPage";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("ja", "projects");

export default function ProjectsJa() {
  return <ProjectsPage d={getDictionary("ja")} />;
}
