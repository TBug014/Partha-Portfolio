import Reveal from "@/components/ui/Reveal";
import Seal from "@/components/ui/Seal";
import ResumeButton from "@/components/resume/ResumeButton";
import { ArrowUpRight, Download } from "@/components/ui/Icons";
import type { Dictionary } from "@/content";

export default function Hero({ d }: { d: Dictionary }) {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative">
      <div className="mx-auto w-full max-w-[76rem] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28 lg:pt-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ------------------------------------------------ primary column */}
          <div className="lg:col-span-9">
            <Reveal>
              {/* Availability badge: the only element above the name. */}
              <span className="inline-flex items-center gap-2.5 border border-rule px-3 py-1.5 text-[11px] tracking-wide text-ink-2">
                <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                  <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-status opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-status" />
                </span>
                {d.ui.availableForWork}
              </span>
            </Reveal>

            <h1 id="hero-heading" className="mt-7 sm:mt-8">
              {d.person.nameLines.map((line, i) => (
                <Reveal
                  key={line}
                  as="span"
                  delay={80 + i * 80}
                  className={`block font-serif text-[clamp(1.9rem,5.6vw,3.5rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-ink ${
                    i > 0 ? "mt-1" : ""
                  }`}
                >
                  {line}
                </Reveal>
              ))}
              <span className="sr-only">, {d.person.target}</span>
            </h1>

            <Reveal
              variant="line"
              delay={260}
              className="mt-8 h-px w-full max-w-xl bg-rule-strong sm:mt-10"
            />

            <Reveal delay={320}>
              <p className="mt-8 max-w-2xl font-serif text-[1.2rem] leading-[1.55] text-ink sm:mt-10 sm:text-[1.6rem]">
                {d.hero.statement}
              </p>
            </Reveal>

            {/* Core skills: a labelled hairline row rather than a sentence, so the
                stack is scannable without competing with the intro. */}
            <Reveal delay={380}>
              <div className="mt-8 flex flex-col gap-3 border-t border-rule pt-5 sm:mt-9 sm:flex-row sm:items-baseline sm:gap-6">
                <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
                  {d.hero.coreSkills.label}
                </p>
                <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                  {d.hero.coreSkills.items.map((skill, i) => (
                    <li
                      key={skill}
                      className="flex items-baseline gap-3 text-[15px] text-ink"
                    >
                      {i > 0 ? (
                        <span aria-hidden="true" className="text-ink-3">
                          ·
                        </span>
                      ) : null}
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-ink-2">
                {d.hero.support}
              </p>
            </Reveal>

            <Reveal delay={470}>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-11">
                <a
                  href="#selected-work"
                  className="group inline-flex min-h-11 items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                >
                  {d.ui.viewWork}
                  <ArrowUpRight
                    width={15}
                    height={15}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <ResumeButton className="inline-flex min-h-11 items-center gap-2.5 border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper">
                  <Download width={15} height={15} className="shrink-0" />
                  {d.ui.viewResume}
                </ResumeButton>
              </div>
            </Reveal>
          </div>

          {/* ---------------------------------------------- vertical caption */}
          <div className="hidden lg:col-span-3 lg:flex lg:justify-end">
            <Reveal delay={560} className="flex items-start gap-6 pt-4">
              <div className="flex flex-col items-center gap-6">
                <span className="h-24 w-px bg-rule-strong" aria-hidden="true" />
                <Seal className="h-11 w-11 text-seal" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <p
                  lang="ja"
                  className="text-vertical font-serif text-[1.65rem] leading-[1.9] tracking-[0.32em] text-ink-2"
                >
                  {d.hero.kanji}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
                  {d.hero.kanjiMeaning}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ------------------------------------------------------ quick facts */}
        <Reveal delay={620} className="mt-16 lg:mt-28">
          {/* Row hairlines plus column gutters: reads cleanly at one, two or three
              columns without any nth-child arithmetic per breakpoint. */}
          <dl className="grid grid-cols-1 border-t border-rule xs:grid-cols-2 md:grid-cols-3">
            {d.quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="border-b border-rule py-4 pr-6 sm:py-5 md:pr-10"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-[15px] leading-snug text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
