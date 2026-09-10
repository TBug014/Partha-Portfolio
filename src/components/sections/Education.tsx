import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { otherLocale, type Dictionary } from "@/content";

export default function Education({ d, index }: { d: Dictionary; index: string }) {
  const h = d.heading.education;

  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading
        id="education-heading"
        index={index}
        alt={h.alt}
        altLang={otherLocale(d.locale)}
        title={h.title}
        lead={h.lead}
      />

      <ol className="border-t border-rule">
        {d.education.map((entry, i) => (
          <Reveal
            as="li"
            key={entry.institution}
            delay={i * 100}
            className="border-b border-rule last:border-b-0"
          >
            <article className="grid gap-3 py-8 md:grid-cols-12 md:gap-10 md:py-9">
              <div className="md:col-span-4 lg:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 tabular-nums">
                  {entry.period}
                </p>
                <p className="mt-2 text-sm text-ink-3">{entry.location}</p>
              </div>
              <div className="md:col-span-8 lg:col-span-9">
                <h3 className="font-serif text-lg leading-snug text-ink sm:text-xl lg:text-2xl">
                  {entry.institution}
                </h3>
                <p className="mt-2 text-[15px] text-ink-2">{entry.qualification}</p>
                <p className="mt-3 font-mono text-[12px] tracking-wide text-accent tabular-nums">
                  {entry.result}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
