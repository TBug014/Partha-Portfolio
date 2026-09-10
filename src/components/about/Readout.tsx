import type { ReactNode } from "react";

/** Monospace section label with an index and a rule that runs to the edge. */
export function SectionLabel({
  index,
  children,
  id,
}: {
  index: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <h2
        id={id}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2 tabular-nums"
      >
        {index}
        <span aria-hidden="true" className="mx-2 text-rule-strong">
          /
        </span>
        {children}
      </h2>
      <span className="h-px flex-1 bg-rule" aria-hidden="true" />
    </div>
  );
}
