import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

// Required for `output: export`: emit this once at build time.
export const dynamic = "force-static";

const pages = [
  { en: "", ja: "/ja", priority: 1 },
  { en: "/projects", ja: "/ja/projects", priority: 0.9 },
  { en: "/about", ja: "/ja/about", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap(({ en, ja, priority }) => {
    const alternates = {
      languages: { en: `${siteUrl}${en}`, ja: `${siteUrl}${ja}` },
    };
    return [
      {
        url: `${siteUrl}${en}` || siteUrl,
        lastModified,
        changeFrequency: "monthly" as const,
        priority,
        alternates,
      },
      {
        url: `${siteUrl}${ja}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: priority - 0.1,
        alternates,
      },
    ];
  });
}
