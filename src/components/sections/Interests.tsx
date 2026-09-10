import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { otherLocale, type Dictionary } from "@/content";

/** Hidden until `interests.items` holds confirmed content. */
export default function Interests({ d, index }: { d: Dictionary; index: string }) {
  if (d.interests.items.length === 0) return null;
  const h = d.heading.interests;

  return (
    <Section id="interests" labelledBy="interests-heading">
      <SectionHeading
        id="interests-heading"
        index={index}
        alt={h.alt}
        altLang={otherLocale(d.locale)}
        title={h.title}
        lead={h.lead}
      />

      <ul className="border-t border-rule">
        {d.interests.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 80}
            className="border-b border-rule last:border-b-0"
          >
            <div className="grid gap-3 py-7 md:grid-cols-12 md:gap-10 md:py-8">
              <div className="flex items-baseline gap-4 md:col-span-4 lg:col-span-3">
                <span
                  lang="ja"
                  aria-hidden="true"
                  className="font-serif text-2xl leading-none text-accent"
                >
                  {item.glyph}
                </span>
                <h3 className="font-serif text-lg text-ink sm:text-xl">{item.title}</h3>
              </div>
              <p className="text-[15px] leading-[1.75] text-ink-2 md:col-span-8 lg:col-span-9">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
