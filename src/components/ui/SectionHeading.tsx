import Reveal from "./Reveal";

type SectionHeadingProps = {
  id: string;
  /** Two-digit index, e.g. "01". */
  index: string;
  /** The section's name in the *other* language, shown small beside the index. */
  alt: string;
  altLang: string;
  title: string;
  lead?: string;
};

export default function SectionHeading({
  id,
  index,
  alt,
  altLang,
  title,
  lead,
}: SectionHeadingProps) {
  return (
    <header className="mb-12 md:mb-16 lg:mb-20">
      {/* 01 / LABEL, then a rule to the edge: the wayfinding index reads as a
          technical label, distinct from the heading it introduces. */}
      <Reveal className="flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2 tabular-nums">
          {index}
          <span aria-hidden="true" className="mx-2 text-rule-strong">
            /
          </span>
          <span lang={altLang}>{alt}</span>
        </span>
        <span className="h-px flex-1 bg-rule" aria-hidden="true" />
      </Reveal>

      <Reveal delay={60}>
        <h2
          id={id}
          className="mt-5 font-serif text-[2rem] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-2 sm:mt-6 sm:text-lg">
            {lead}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
