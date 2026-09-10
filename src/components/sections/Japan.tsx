import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { otherLocale, type Dictionary } from "@/content";

export default function Japan({ d, index }: { d: Dictionary; index: string }) {
  const h = d.heading.japan;

  return (
    <Section id="japan" labelledBy="japan-heading">
      <SectionHeading
        id="japan-heading"
        index={index}
        alt={h.alt}
        altLang={otherLocale(d.locale)}
        title={h.title}
        lead={h.lead}
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* ------------------------------------------------ certification card */}
        <div className="lg:col-span-4">
          <Reveal>
            {/* The goal itself, in both scripts. No proficiency claim. */}
            <div className="flex items-center gap-5 border border-rule bg-paper-2 p-6 sm:gap-8 sm:p-8">
              <p
                lang="ja"
                aria-hidden="true"
                className="text-vertical shrink-0 font-serif text-[1.65rem] leading-[1.35] tracking-[0.2em] text-ink sm:text-[2rem]"
              >
                日本
              </p>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
                  {d.japan.goalLabel}
                </p>
                <p className="mt-2 font-serif text-2xl leading-tight text-accent sm:text-[1.75rem]">
                  {d.japan.goal}
                </p>
                <p lang={otherLocale(d.locale)} className="mt-3 text-[13px] text-ink-3">
                  {d.japan.goalAlt}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 text-[14px] leading-[1.75] text-ink-3 sm:mt-6">
              {d.japan.languageNote}
            </p>
          </Reveal>
        </div>

        {/* --------------------------------------------------------- narrative */}
        <div className="lg:col-span-8">
          {d.japan.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={100 + i * 90} className={i > 0 ? "mt-7" : ""}>
              <p className="text-base leading-[1.8] text-ink-2 sm:text-[17px]">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={320}>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3 sm:mt-12">
              {d.japan.aimsLabel}
            </p>
          </Reveal>

          <dl className="mt-5 border-t border-rule sm:mt-6">
            {d.japan.aims.map((aim, i) => (
              <Reveal key={aim.romaji} delay={380 + i * 80}>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-rule py-4">
                  <dt className="flex items-baseline gap-3">
                    <span lang="ja" className="font-serif text-2xl leading-none text-ink">
                      {aim.glyph}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                      {aim.romaji}
                    </span>
                  </dt>
                  <dd className="text-[15px] text-ink-2">{aim.gloss}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
