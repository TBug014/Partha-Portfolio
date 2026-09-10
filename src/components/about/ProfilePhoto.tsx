import Image from "next/image";

import { asset } from "@/lib/asset";
import type { Dictionary } from "@/content";

/**
 * Portrait slot. Holds its aspect ratio whether or not a file exists, so adding
 * the photo later cannot reflow the grid around it. Empty state is a composed
 * frame using the site's own kanji motif, not a grey box.
 */
export default function ProfilePhoto({ d }: { d: Dictionary }) {
  const { photo, photoAlt, fullName, nameAlt } = d.person;

  return (
    <figure className="m-0">
      <div className="relative aspect-4/5 w-full overflow-hidden border border-rule bg-paper-2">
        {photo ? (
          <Image
            src={asset(photo)}
            alt={photoAlt}
            fill
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-4"
            aria-hidden="true"
          >
            <span lang="ja" className="font-serif text-4xl text-ink-3">
              人
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">
              portrait
            </span>
          </div>
        )}
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[11px] text-ink-3">
        <span className="font-mono uppercase tracking-[0.16em]">{fullName}</span>
        <span lang="ja" className="font-serif">
          {nameAlt}
        </span>
      </figcaption>
    </figure>
  );
}
