import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, GitHub } from "@/components/ui/Icons";
import { otherLocale, type Dictionary } from "@/content";

/** Small uppercase block label, shared by every panel in the card. */
function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
      {children}
    </p>
  );
}

/**
 * The capstone, presented as one structured card rather than a grid tile:
 * summary and stack, then the problem, then contributions and outcomes side by
 * side. Every division is a 1px --rule hairline over the --paper ground, so the
 * structure is carried entirely by borders and spacing.
 *
 * Renders nothing until `majorProject.project` is populated.
 */
export default function MajorProject({ d, index }: { d: Dictionary; index: string }) {
  const project = d.majorProject.project;
  if (!project) return null;

  const m = d.majorProject;
  const h = d.heading["major-project"];

  return (
    <Section id="major-project" labelledBy="major-project-heading">
      <SectionHeading
        id="major-project-heading"
        index={index}
        alt={h.alt}
        altLang={otherLocale(d.locale)}
        title={h.title}
        lead={h.lead}
      />

      <Reveal>
        <article className="border border-rule bg-paper">
          {/* ------------------------------------------------ summary + stack */}
          <div className="border-b border-rule p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0">
                <PanelLabel>{project.context}</PanelLabel>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-ink sm:text-3xl lg:text-[2.5rem]">
                  {project.name}
                </h3>
                <p className="mt-3 text-[15px] text-ink-2">
                  <span className="text-ink-3">{m.roleLabel}: </span>
                  {project.role}
                  {project.period ? (
                    <>
                      <span aria-hidden="true" className="mx-2 text-ink-3">
                        ·
                      </span>
                      <span className="font-mono text-[13px] tabular-nums">
                        {project.period}
                      </span>
                    </>
                  ) : null}
                </p>
              </div>
              <span
                lang="ja"
                aria-hidden="true"
                className="shrink-0 font-serif text-sm text-ink-3"
              >
                {project.glyph}
              </span>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-[1.8] text-ink-2 sm:mt-7 sm:text-[17px]">
              {project.summary}
            </p>

            {project.stack.length > 0 ? (
              <div className="mt-7 sm:mt-8">
                <PanelLabel>{m.stackLabel}</PanelLabel>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-rule px-2.5 py-1 text-[11px] tracking-wide text-ink-3 transition-colors hover:border-ink-3 hover:text-ink-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* ------------------------------------------------------- problem */}
          <div className="border-b border-rule p-6 sm:p-8 lg:p-10">
            <PanelLabel>{m.problemLabel}</PanelLabel>
            <p className="mt-4 max-w-3xl text-base leading-[1.8] text-ink-2">
              {project.problem}
            </p>
          </div>

          {/* ------------------------------- contributions | outcomes ------- */}
          <div className="grid md:grid-cols-2">
            <div className="border-b border-rule p-6 sm:p-8 md:border-b-0 md:border-r lg:p-10">
              <PanelLabel>{m.contributionsLabel}</PanelLabel>
              <ul className="mt-5 space-y-3.5">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3.5">
                    <span
                      className="mt-[0.6rem] h-px w-4 shrink-0 bg-rule-strong"
                      aria-hidden="true"
                    />
                    <span className="text-[15px] leading-[1.75] text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <PanelLabel>{m.outcomesLabel}</PanelLabel>
              <ul className="mt-5 space-y-5">
                {project.outcomes.map((outcome) => (
                  <li key={outcome.body}>
                    {outcome.metric ? (
                      <p className="font-serif text-2xl leading-none text-ink sm:text-3xl">
                        {outcome.metric}
                      </p>
                    ) : null}
                    <p
                      className={`text-[15px] leading-[1.75] text-ink-2 ${
                        outcome.metric ? "mt-2" : ""
                      }`}
                    >
                      {outcome.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Repository and any extra links. The GitHub row appears the moment
              `repoUrl` is filled in; while it is empty nothing renders, so the
              card never shows a dead link. */}
          {project.repoUrl || (project.links && project.links.length > 0) ? (
            <div className="flex flex-wrap items-center gap-x-8 gap-y-1 border-t border-rule px-6 py-4 sm:px-8 lg:px-10">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex min-h-11 items-center gap-2.5 py-2 text-[13px] font-medium text-ink transition-colors hover:text-accent"
                >
                  <GitHub width={15} height={15} className="shrink-0" />
                  <span className="underline decoration-rule-strong underline-offset-[5px] transition-colors group-hover:decoration-accent">
                    {d.majorProject.repoLabel}
                  </span>
                  <ArrowUpRight
                    width={13}
                    height={13}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  <span className="sr-only">{d.ui.opensInNewTab}</span>
                </a>
              ) : null}

              {project.links?.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex min-h-11 items-center gap-2 py-2 text-[13px] font-medium text-ink underline decoration-rule-strong underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent"
                >
                  {link.label}
                  <ArrowUpRight
                    width={13}
                    height={13}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  <span className="sr-only">{d.ui.opensInNewTab}</span>
                </a>
              ))}
            </div>
          ) : null}
        </article>
      </Reveal>
    </Section>
  );
}
