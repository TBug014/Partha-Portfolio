import { SectionLabel } from "./Readout";
import type { Dictionary } from "@/content";

export default function TrajectoryMatrix({ d }: { d: Dictionary }) {
  const { trajectory, sectionLabels } = d.aboutPage;

  return (
    <section id="trajectory" aria-labelledby="trajectory-label" className="scroll-mt-28">
      <SectionLabel index="05" id="trajectory-label">
        {sectionLabels.trajectory}
      </SectionLabel>
      <p className="mt-5 text-[15px] text-ink-3">{trajectory.lead}</p>

      <ol className="mt-6 grid gap-px border border-rule bg-rule sm:grid-cols-3">
        {trajectory.items.map((item) => (
          <li key={item.index} className="bg-paper p-6 sm:p-8">
            <span className="font-mono text-[11px] tabular-nums text-accent">
              {item.index}
            </span>
            <h3 className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-ink">
              {item.label}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-ink-2">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
