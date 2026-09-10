import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import MajorProject from "@/components/sections/MajorProject";
import Japan from "@/components/sections/Japan";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";
import { homeSections, numbering, type Dictionary } from "@/content";

/**
 * Home: hero, then selected work as the primary focal point, then the remaining
 * sections. About lives on its own route and is deliberately absent here.
 */
export default function HomeSections({ d }: { d: Dictionary }) {
  const n = numbering(homeSections(d));

  return (
    <>
      <Hero d={d} />
      <Projects d={d} index={n("projects")} id="selected-work" />
      <Experience d={d} index={n("experience")} />
      <Skills d={d} index={n("skills")} />
      <Education d={d} index={n("education")} />
      <MajorProject d={d} index={n("major-project")} />
      <Japan d={d} index={n("japan")} />
      <Interests d={d} index={n("interests")} />
      <Contact d={d} index={n("contact")} />
    </>
  );
}
