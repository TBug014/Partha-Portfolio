import ProfilePhoto from "./ProfilePhoto";
import { SectionLabel } from "./Readout";
import type { Dictionary } from "@/content";

export default function SystemIdentity({ d }: { d: Dictionary }) {
  const { identity, sectionLabels } = d.aboutPage;

  return (
    <section id="identity" aria-labelledby="identity-label" className="scroll-mt-28">
      <SectionLabel index="01" id="identity-label">
        {sectionLabels.identity}
      </SectionLabel>

      {/* Portrait, summary and readout share one hairline grid, so the photo is
          part of the structure rather than an image dropped beside it. */}
      <div className="mt-6 grid gap-px border border-rule bg-rule lg:grid-cols-[19rem_1fr]">
        <div className="bg-paper p-6 sm:p-8">
          <ProfilePhoto d={d} />
        </div>

        <div className="grid gap-px bg-rule">
          <div className="bg-paper p-6 sm:p-8 lg:p-10">
            <p className="max-w-2xl text-[19px] leading-[1.55] text-ink sm:text-[21px]">
              {identity.statement}
            </p>
          </div>

          {/* An odd number of rows would leave the grid's background showing through
              the empty cell, so the last one spans the row instead. */}
          <dl className="grid gap-px bg-rule sm:grid-cols-2">
            {identity.readout.map((row, i) => (
              <div
                key={row.key}
                className={`bg-paper px-6 py-4 sm:px-8 ${
                  i === identity.readout.length - 1 && identity.readout.length % 2 === 1
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                  {row.key}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-snug text-ink-2">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
