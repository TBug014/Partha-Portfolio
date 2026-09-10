import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Draws the hairline that separates this section from the one above. */
  divided?: boolean;
  labelledBy?: string;
};

export default function Section({
  id,
  children,
  className = "",
  divided = true,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-heading`}
      className={`scroll-mt-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-[76rem] px-5 sm:px-8 lg:px-12">
        {divided ? <div className="rule-x h-px w-full" aria-hidden="true" /> : null}
        <div className="py-14 sm:py-16 md:py-24 lg:py-section">{children}</div>
      </div>
    </section>
  );
}
