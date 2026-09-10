import type { Metadata } from "next";
import Link from "next/link";

import { getDictionary } from "@/content";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const d = getDictionary("en");

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-[76rem] flex-col justify-center px-5 py-32 sm:px-8 lg:px-12">
      <p lang="ja" aria-hidden="true" className="font-serif text-sm text-ink-3">
        見つかりません
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-[-0.03em] text-ink sm:text-6xl">
        404
      </h1>
      <p className="mt-6 max-w-md text-[17px] leading-[1.8] text-ink-2">
        {d.ui.notFoundLead}
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex min-h-11 w-fit items-center gap-2 border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        {d.ui.notFoundReturn}
      </Link>
    </div>
  );
}
