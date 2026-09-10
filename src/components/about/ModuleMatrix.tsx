"use client";

import { useRef, useState } from "react";

import { SectionLabel } from "./Readout";
import type { Dictionary } from "@/content";

/**
 * Tabbed stack clusters. Implements the ARIA tabs pattern properly: roving
 * tabindex, arrow/Home/End keys, and one tabpanel labelled by its tab. Only the
 * active panel is in the accessibility tree.
 */
export default function ModuleMatrix({ d }: { d: Dictionary }) {
  const { modules, sectionLabels } = d.aboutPage;
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent) {
    const last = modules.clusters.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <section id="modules" aria-labelledby="modules-label" className="scroll-mt-28">
      <SectionLabel index="03" id="modules-label">
        {sectionLabels.modules}
      </SectionLabel>
      <p className="mt-5 text-[15px] text-ink-3">{modules.lead}</p>

      <div className="mt-6 border border-rule">
        <div
          role="tablist"
          aria-label={sectionLabels.modules}
          onKeyDown={onKeyDown}
          className="flex flex-wrap border-b border-rule bg-paper"
        >
          {modules.clusters.map((cluster, i) => {
            const selected = i === active;
            return (
              <button
                key={cluster.id}
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
                role="tab"
                id={`tab-${cluster.id}`}
                aria-selected={selected}
                aria-controls={`panel-${cluster.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative min-h-11 flex-1 whitespace-nowrap px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors sm:px-6 ${
                  selected ? "text-ink" : "text-ink-3 hover:text-ink-2"
                }`}
              >
                {cluster.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
                    selected ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {modules.clusters.map((cluster, i) => (
          <div
            key={cluster.id}
            role="tabpanel"
            id={`panel-${cluster.id}`}
            aria-labelledby={`tab-${cluster.id}`}
            hidden={i !== active}
            tabIndex={0}
            className="bg-paper p-5 sm:p-8"
          >
            <ul className="grid grid-cols-2 gap-px bg-rule sm:grid-cols-3 lg:grid-cols-4">
              {cluster.items.map((item) => (
                <li key={item} className="bg-paper px-4 py-4 text-[13px] text-ink-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
