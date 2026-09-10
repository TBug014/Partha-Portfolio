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
      <Reveal className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.2em] text-ink-3 tabular-nums">
          {index}
        </span>
        <span className="h-px w-8 bg-rule-strong" aria-hidden="true" />
        <span lang={altLang} className="font-serif text-sm text-ink-3" aria-hidden="true">
          {alt}
        </span>
      </Reveal>

      <Reveal delay={60}>
        <h2
          id={id}
          className="mt-5 font-serif text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl"
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
