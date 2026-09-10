import { SectionLabel } from "./Readout";
import type { Dictionary } from "@/content";

export default function CoreDirectives({ d }: { d: Dictionary }) {
  const { directives, sectionLabels } = d.aboutPage;

  return (
    <section id="directives" aria-labelledby="directives-label" className="scroll-mt-28">
      <SectionLabel index="04" id="directives-label">
        {sectionLabels.directives}
      </SectionLabel>
      <p className="mt-5 text-[15px] text-ink-3">{directives.lead}</p>

      <ul className="mt-6 grid gap-px border border-rule bg-rule md:grid-cols-3">
        {directives.items.map((item) => (
          <li key={item.romaji} className="flex flex-col bg-paper-2 p-6 sm:p-8">
            <div className="flex items-baseline gap-3">
              <span
                lang="ja"
                aria-hidden="true"
                className="font-serif text-3xl leading-none text-accent"
              >
                {item.glyph}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                {item.romaji}
              </span>
            </div>
            <h3 className="mt-5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink">
              {item.name}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-ink-2">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
