import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { otherLocale, type Dictionary } from "@/content";

export default function Skills({ d, index }: { d: Dictionary; index: string }) {
  const h = d.heading.skills;

  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        index={index}
        alt={h.alt}
        altLang={otherLocale(d.locale)}
        title={h.title}
        lead={h.lead}
      />

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-12">
        {d.skills.groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="border-t border-rule pt-5 sm:pt-6">
              <div className="flex items-baseline gap-3">
                <span
                  lang="ja"
                  aria-hidden="true"
                  className="font-serif text-lg text-accent"
                >
                  {group.glyph}
                </span>
                <h3 className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-rule px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:border-rule-strong hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal delay={d.skills.groups.length * 80}>
          <div className="border-t border-rule pt-5 sm:pt-6">
            <div className="flex items-baseline gap-3">
              <span
                lang="ja"
                aria-hidden="true"
                className="font-serif text-lg text-accent"
              >
                {d.skills.languagesGlyph}
              </span>
              <h3 className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink">
                {d.skills.languagesTitle}
              </h3>
            </div>
            <dl className="mt-4 sm:mt-5">
              {d.skills.languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-2.5 last:border-b-0"
                >
                  <dt className="text-[14px] text-ink">{language.name}</dt>
                  <dd className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
                    {language.level}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
