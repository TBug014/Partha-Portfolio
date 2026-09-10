import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { otherLocale, type Dictionary } from "@/content";

export default function Experience({ d, index }: { d: Dictionary; index: string }) {
  const h = d.heading.experience;

  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        index={index}
        alt={h.alt}
        altLang={otherLocale(d.locale)}
        title={h.title}
        lead={h.lead}
      />

      <ol className="border-t border-rule">
        {d.experience.map((job, i) => (
          <Reveal
            as="li"
            key={`${job.role}-${job.period}`}
            delay={i * 110}
            className="border-b border-rule last:border-b-0"
          >
            <article className="grid gap-5 py-9 md:grid-cols-12 md:gap-10 md:py-12">
              <div className="md:col-span-4 lg:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 tabular-nums">
                  {job.period}
                </p>
                <p className="mt-2 text-sm text-ink-3 sm:mt-3">{job.location}</p>
                <p className="mt-3 inline-block border border-rule px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-ink-3">
                  {job.kind}
                </p>
              </div>

              <div className="md:col-span-8 lg:col-span-9">
                <h3 className="font-serif text-xl leading-tight text-ink sm:text-2xl lg:text-[1.75rem]">
                  {job.role}
                </h3>
                <p className="mt-1.5 text-[15px] text-accent">{job.company}</p>

                <ul className="mt-5 space-y-3.5 sm:mt-6">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3.5">
                      <span
                        className="mt-[0.6rem] h-px w-4 shrink-0 bg-rule-strong"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] leading-[1.75] text-ink-2">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {job.links && job.links.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 sm:mt-7">
                    {job.links.map((link) => (
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
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
