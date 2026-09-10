import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { otherLocale, type Dictionary } from "@/content";

export default function Projects({
  d,
  index,
  id = "projects",
}: {
  d: Dictionary;
  index: string;
  /** The home page anchors this as #selected-work for the hero CTA. */
  id?: string;
}) {
  const h = d.heading.projects;
  return (
    <Section id={id} labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        index={index}
        alt={h.alt}
        altLang={otherLocale(d.locale)}
        title={h.title}
        lead={h.lead}
      />

      {/* 1px grid gaps over a rule-coloured background give exact hairline
          separators at every column count, with no per-cell border rules. */}
      <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {d.projects.items.map((project, i) => {
          const Wrapper = project.href ? "a" : "div";
          return (
            <Reveal as="li" key={project.name} delay={i * 90} className="bg-paper">
              <Wrapper
                {...(project.href
                  ? { href: project.href, target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                className={`group flex h-full flex-col p-6 transition-colors duration-300 sm:p-8 lg:p-10 ${
                  project.href ? "hover:bg-paper-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    lang="ja"
                    aria-hidden="true"
                    className="font-serif text-sm text-ink-3 transition-colors duration-300 group-hover:text-accent"
                  >
                    {project.glyph}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl leading-tight text-ink sm:mt-7 sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-2 text-[13px] text-ink-3">{project.context}</p>
                <p className="mt-1 text-[13px] font-medium text-accent">{project.role}</p>

                <p className="mt-4 text-[15px] leading-[1.75] text-ink-2 sm:mt-5">
                  {project.summary}
                </p>

                {project.stack.length > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="border border-rule px-2.5 py-1 text-[11px] tracking-wide text-ink-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {project.href ? (
                  <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-ink sm:mt-8">
                    {project.hrefLabel}
                    <ArrowUpRight
                      width={13}
                      height={13}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span className="sr-only">{d.ui.opensInNewTab}</span>
                  </span>
                ) : null}
              </Wrapper>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
