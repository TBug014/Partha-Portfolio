import Projects from "@/components/sections/Projects";
import MajorProject from "@/components/sections/MajorProject";
import { numbering, type Dictionary, type SectionId } from "@/content";

/** The full showcase: every project, plus the capstone in depth. */
export default function ProjectsPage({ d }: { d: Dictionary }) {
  const ids: SectionId[] = [
    "projects",
    ...(d.majorProject.project ? (["major-project"] as SectionId[]) : []),
  ];
  const n = numbering(ids);

  return (
    <div className="pt-24 lg:pt-32">
      <Projects d={d} index={n("projects")} />
      <MajorProject d={d} index={n("major-project")} />
    </div>
  );
}
