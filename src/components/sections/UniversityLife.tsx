import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { otherLocale, type Dictionary } from "@/content";

/**
 * Renders only when `universityLife.entries` has confirmed content. An empty
 * array removes the section and its nav item rather than shipping filler.
 */
export default function UniversityLife({ d, index }: { d: Dictionary; index: string }) {
  if (d.universityLife.entries.length === 0) return null;
  const h = d.heading["university-life"];

  return (
    <Section id="university-life" labelledBy="university-life-heading">
      <SectionHeading
        id="university-life-heading"
        index={index}
        alt={h.alt}
        altLang={otherLocale(d.locale)}
        title={h.title}
        lead={h.lead}
      />

      <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {d.universityLife.entries.map((entry, i) => (
          <Reveal as="li" key={entry.title} delay={i * 80} className="bg-paper">
            <article className="flex h-full flex-col p-6 sm:p-8">
              <span
                lang="ja"
                aria-hidden="true"
                className="font-serif text-2xl leading-none text-accent"
              >
                {entry.glyph}
              </span>
              <h3 className="mt-5 font-serif text-lg leading-snug text-ink sm:mt-6 sm:text-xl">
                {entry.title}
              </h3>
              {entry.period ? (
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                  {entry.period}
                </p>
              ) : null}
              <p className="mt-4 text-[15px] leading-[1.75] text-ink-2">{entry.body}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
