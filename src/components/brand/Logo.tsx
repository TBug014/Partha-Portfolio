export type Brand = { latin: string; kana: string };

/**
 * Identity mark.
 *
 * パ (pa) is ハ plus the handakuten, the small circle that voices it. Latin "P"
 * and Japanese "パ" are the same initial for the same name, so the monogram is a
 * P carrying that circle: legible as a letter to any reader, and specifically as
 * パ to a Japanese one. Drawn as geometry rather than set in a typeface so it is
 * identical at 16px in a browser tab and at 200px on a title slide.
 *
 * Everything is `currentColor`, so light and dark variants are the same file
 * inheriting the surrounding text colour.
 */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* Single continuous stroke: stem, shoulder, bowl. */}
      <path
        d="M14 52V12h12a10 10 0 0 1 0 20H14"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* Handakuten. Solid rather than outlined so it survives favicon sizes. */}
      <circle cx="48" cy="13" r="5" fill="currentColor" />
    </svg>
  );
}

/**
 * Primary horizontal wordmark: the Latin name, a hairline, then the katakana.
 * The rule echoes the `01 / LABEL` divider used throughout the site, so the
 * identity reads as part of the same system rather than applied on top of it.
 */
export function Wordmark({
  brand,
  className = "inline-flex",
}: {
  brand: Brand;
  /**
   * Must include a display utility. It is not baked in because Tailwind resolves
   * `display` by stylesheet order, not class order, so a hardcoded `flex` here
   * would fight a caller's `hidden xs:inline-flex` unpredictably.
   */
  className?: string;
}) {
  return (
    <span className={`items-baseline gap-2.5 ${className}`}>
      <span className="font-extrabold tracking-[-0.03em] text-ink">{brand.latin}</span>
      <span
        aria-hidden="true"
        className="h-[0.85em] w-px shrink-0 translate-y-[0.06em] bg-rule-strong"
      />
      <span lang="ja" className="text-[0.78em] font-medium text-ink-2">
        {brand.kana}
      </span>
    </span>
  );
}

/**
 * The lockup used in the header: monogram plus wordmark, with the wordmark
 * dropping away on the narrowest screens where only the mark fits.
 */
export default function Logo({
  brand,
  className = "",
}: {
  brand: Brand;
  className?: string;
}) {
  return (
    <span className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <Monogram className="h-6 w-6 shrink-0 text-ink transition-colors sm:h-[26px] sm:w-[26px]" />
      <Wordmark brand={brand} className="hidden text-[15px] xs:flex sm:text-base" />
    </span>
  );
}
