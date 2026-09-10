import PageAnchor from "@/components/about/PageAnchor";
import SystemIdentity from "@/components/about/SystemIdentity";
import ExecutionTelemetry from "@/components/about/ExecutionTelemetry";
import ModuleMatrix from "@/components/about/ModuleMatrix";
import CoreDirectives from "@/components/about/CoreDirectives";
import TrajectoryMatrix from "@/components/about/TrajectoryMatrix";
import type { Dictionary } from "@/content";

/**
 * /about, structured as five readouts. Uses the site's own palette and type
 * scale throughout: the precision comes from the hairline grid, the mono
 * micro-labels and the density of the copy, not from a separate skin.
 */
export default function AboutPage({ d }: { d: Dictionary }) {
  return (
    <div className="bg-paper text-ink">
      <div className="mx-auto w-full max-w-[76rem] px-5 pb-24 pt-24 sm:px-8 lg:px-12 lg:pb-32 lg:pt-32">
        <header className="mb-10 lg:mb-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-3">
            {d.heading.about.alt} / {d.person.fullName}
          </p>
          <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.03em] text-ink">
            {d.heading.about.title}
          </h1>
          {d.heading.about.lead ? (
            <p className="mt-5 max-w-2xl text-[15px] leading-[1.7] text-ink-2">
              {d.heading.about.lead}
            </p>
          ) : null}
        </header>

        <div className="lg:grid lg:grid-cols-[13rem_1fr] lg:items-start lg:gap-12">
          <PageAnchor d={d} />

          <div className="mt-10 space-y-16 lg:mt-0 lg:space-y-24">
            <SystemIdentity d={d} />
            <ExecutionTelemetry d={d} />
            <ModuleMatrix d={d} />
            <CoreDirectives d={d} />
            <TrajectoryMatrix d={d} />
          </div>
        </div>
      </div>
    </div>
  );
}
