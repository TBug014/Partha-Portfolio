/* eslint-disable @next/next/no-html-link-for-pages --
   This route renders its own document outside both root layouts, so there is no
   router context for <Link> and navigation must be a full document load. */
import type { Metadata } from "next";

import { fontVariables } from "@/lib/fonts";
import { getDictionary } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Partha Protim Sarmah",
  robots: { index: false, follow: false },
};

/**
 * Unmatched URLs sit outside both root layouts, so this route renders its own
 * document. It is bilingual-neutral: English copy with the Japanese label kept
 * as an accent, and links into both locales.
 */
export default function GlobalNotFound() {
  const d = getDictionary("en");

  return (
    <html lang="en" className={fontVariables}>
      <body className="font-sans antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-[76rem] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
          <p lang="ja" aria-hidden="true" className="font-serif text-sm text-ink-3">
            見つかりません
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.03em] text-ink sm:text-6xl">
            404
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-[1.8] text-ink-2">
            {d.ui.notFoundLead}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/"
              className="inline-flex min-h-11 items-center gap-2 border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {d.ui.notFoundReturn}
            </a>
            <a
              href="/ja"
              hrefLang="ja"
              lang="ja"
              className="inline-flex min-h-11 items-center gap-2 border border-rule px-6 py-3.5 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
            >
              日本語のページへ
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
