import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { fontVariables } from "@/lib/fonts";
import ResumeViewer from "@/components/resume/ResumeViewer";
import { chromeStrings, getDictionary, resumeStrings, type Locale } from "@/content";
import { personJsonLd } from "@/lib/site";

/**
 * The document shell, shared by both root layouts. Each locale renders its own
 * <html lang="…"> so the language is a real document property, correct for
 * screen readers, for search engines, and for the CSS that gives Japanese its
 * own line-height and font stack.
 */

const bootScript = (locale: Locale) => `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
  ${
    locale === "en"
      ? `try {
    // Honour a previously chosen language, but only from the site root so the
    // reader is never trapped away from the page they asked for.
    if (localStorage.getItem("lang") === "ja" && location.pathname === "/") {
      location.replace("/ja");
    }
  } catch (e) {}`
      : ""
  }
})();
`;

export default function RootHtml({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const d = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning className={fontVariables}>
      <head>
        {/* Noto Sans JP is requested only by the Japanese document, and as a plain
            stylesheet rather than through next/font. next/font hoists a CJK family
            into the shared chunk and emits <link rel="preload"> for all ~245
            unicode-range slices on every route, which downloads the whole family
            whether or not a glyph in it is ever painted. A stylesheet keeps the
            unicode-range gating intact: the browser fetches only the slices this
            page actually renders, and the English route requests nothing. */}
        {locale === "ja" ? (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
            />
          </>
        ) : null}
        <script dangerouslySetInnerHTML={{ __html: bootScript(locale) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale)) }}
        />
        {/* Entrance animations start at opacity 0. Without JavaScript nothing would
            ever reveal them, so pin everything visible in that case. */}
        <noscript>
          <style>
            {".reveal,.line-draw{opacity:1!important;transform:none!important}"}
          </style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
        >
          {d.ui.skipToContent}
        </a>
        <ResumeViewer strings={resumeStrings(d)}>
          <Header c={chromeStrings(d)} locale={locale} />
          <main id="main" className="relative z-10">
            {children}
          </main>
          <Footer d={d} locale={locale} />
        </ResumeViewer>
      </body>
    </html>
  );
}
