"use client";

import { useState } from "react";

import { SectionLabel } from "./Readout";
import type { Dictionary } from "@/content";

/**
 * Career milestones as disclosure nodes. Native button + region semantics rather
 * than <details>, so the open state can be controlled and the summary row can
 * carry its own layout. The first node is open on load: the page never reads as
 * a wall of collapsed rows.
 */
export default function ExecutionTelemetry({ d }: { d: Dictionary }) {
  const { telemetry, sectionLabels } = d.aboutPage;
  const [open, setOpen] = useState<string | null>(telemetry.nodes[0]?.id ?? null);

  return (
    <section id="telemetry" aria-labelledby="telemetry-label" className="scroll-mt-28">
      <SectionLabel index="02" id="telemetry-label">
        {sectionLabels.telemetry}
      </SectionLabel>
      <p className="mt-5 text-[15px] text-ink-3">{telemetry.lead}</p>

      <ul className="mt-6 border border-rule">
        {telemetry.nodes.map((node, i) => {
          const isOpen = open === node.id;
          return (
            <li key={node.id} className={i > 0 ? "border-t border-rule" : undefined}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : node.id)}
                  aria-expanded={isOpen}
                  aria-controls={`node-${node.id}`}
                  className="group flex w-full items-start gap-4 bg-paper-2 px-5 py-5 text-left transition-colors hover:bg-accent-soft sm:gap-6 sm:px-8"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 font-mono text-[11px] tabular-nums text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-ink">
                        {node.label}
                      </span>
                      <span className="font-mono text-[11px] tabular-nums text-ink-3">
                        {node.period}
                      </span>
                    </span>
                    <span className="mt-2 block text-[14px] leading-[1.7] text-ink-2">
                      {node.summary}
                    </span>
                  </span>

                  {/* Plus/minus drawn from two rules: no icon font, no glyph shift. */}
                  <span
                    aria-hidden="true"
                    className="relative mt-1 h-3 w-3 shrink-0 text-ink-3 transition-colors group-hover:text-ink"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                    <span
                      className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>
              </h3>

              <div
                id={`node-${node.id}`}
                role="region"
                aria-label={node.label}
                hidden={!isOpen}
                className="border-t border-rule bg-paper-2 px-5 py-5 sm:px-8"
              >
                <ul className="space-y-2.5">
                  {node.detail.map((line) => (
                    <li key={line} className="flex gap-3.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-px w-3 shrink-0 bg-rule-strong"
                      />
                      <span className="text-[14px] leading-[1.7] text-ink-2">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
