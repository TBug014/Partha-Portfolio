"use client";

import { useEffect, useState } from "react";

import type { Dictionary } from "@/content";

const IDS = ["identity", "telemetry", "modules", "directives", "trajectory"] as const;

/**
 * Persistent section anchor. Sticky rail on wide screens, sticky strip under the
 * header on narrow ones. Plain in-page links, so it works before hydration; the
 * observer only adds the current-section highlight.
 */
export default function PageAnchor({ d }: { d: Dictionary }) {
  const labels = d.aboutPage.sectionLabels;
  const items = IDS.map((id, i) => ({
    id,
    index: String(i + 1).padStart(2, "0"),
    label: labels[id],
  }));
  const [active, setActive] = useState<string>(IDS[0]);

  useEffect(() => {
    const nodes = IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={d.ui.onThisPage}
      className="sticky top-16 z-20 -mx-5 border-y border-rule bg-paper/90 backdrop-blur-sm px-5 sm:-mx-8 sm:px-8 lg:top-28 lg:mx-0 lg:border-y-0 lg:border-l lg:bg-transparent lg:px-0 lg:backdrop-blur-none"
    >
      <ul className="flex gap-5 overflow-x-auto py-3 lg:flex-col lg:gap-0 lg:overflow-visible lg:py-0">
        {items.map((item) => {
          const current = active === item.id;
          return (
            <li key={item.id} className="lg:border-l lg:border-transparent">
              <a
                href={`#${item.id}`}
                aria-current={current ? "true" : undefined}
                className={`flex min-h-11 items-center gap-2.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] transition-colors lg:-ml-px lg:border-l lg:py-2.5 lg:pl-4 ${
                  current
                    ? "border-accent text-ink lg:border-l"
                    : "border-transparent text-ink-3 hover:text-ink"
                }`}
              >
                <span className="tabular-nums text-accent">{item.index}</span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
