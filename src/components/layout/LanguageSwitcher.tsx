"use client";

import Link from "next/link";

import { otherLocale, pathForLocale, type ChromeStrings, type Locale } from "@/content";

/**
 * Language is a real route (`/` and `/ja`), so switching is a normal link: it
 * works without JavaScript, is crawlable, and can be bookmarked or shared. The
 * click handler only records the preference for the next visit.
 */
function remember(locale: Locale) {
  try {
    localStorage.setItem("lang", locale);
  } catch {
    /* private mode. The choice simply is not remembered */
  }
}

const CODE: Record<Locale, string> = { en: "EN", ja: "JA" };

export default function LanguageSwitcher({
  ui,
  locale,
  variant = "bar",
}: {
  ui: ChromeStrings["ui"];
  locale: Locale;
  /** `bar` sits in the header; `panel` is the wider control in the mobile menu. */
  variant?: "bar" | "panel";
}) {
  const other = otherLocale(locale);

  if (variant === "bar") {
    return (
      <>
        {/* Compact single toggle on small screens: one 44x44 target instead of two
            cramped ones, which keeps the brand name readable at 360px. */}
        <Link
          href={pathForLocale(other)}
          hrefLang={other}
          onClick={() => remember(other)}
          aria-label={`${ui.languageLabel}: ${ui.switchLanguage}`}
          className="inline-flex h-11 w-11 items-center justify-center border border-rule font-mono text-[11px] tracking-[0.08em] text-ink-2 transition-colors hover:border-rule-strong hover:text-ink lg:hidden"
        >
          {CODE[other]}
        </Link>

        {/* Segmented control once there is room for it. */}
        <div
          role="group"
          aria-label={ui.languageLabel}
          className="tap hidden items-stretch border border-rule lg:inline-flex"
        >
          <span
            aria-current="true"
            className="flex items-center bg-ink px-2.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-paper"
          >
            {CODE[locale]}
          </span>
          <Link
            href={pathForLocale(other)}
            hrefLang={other}
            onClick={() => remember(other)}
            aria-label={ui.switchLanguage}
            className="flex items-center px-2.5 py-1.5 font-mono text-[11px] tracking-[0.08em] text-ink-3 transition-colors hover:text-ink"
          >
            {CODE[other]}
          </Link>
        </div>
      </>
    );
  }

  return (
    <Link
      href={pathForLocale(other)}
      hrefLang={other}
      onClick={() => remember(other)}
      className="inline-flex min-h-11 items-center gap-3 border border-rule px-4 py-3 text-sm text-ink transition-colors hover:border-ink"
    >
      <span className="font-mono text-[11px] tracking-[0.08em] text-ink-3">
        {CODE[other]}
      </span>
      <span lang={other}>{ui.switchLanguage}</span>
    </Link>
  );
}
