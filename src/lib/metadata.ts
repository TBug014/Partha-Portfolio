import type { Metadata, Viewport } from "next";

import { getDictionary, type Locale } from "@/content";
import { siteUrl } from "./site";

type Page = "home" | "projects" | "about";

/** Path for a page in a locale: English is unprefixed, Japanese sits under /ja. */
function pathFor(locale: Locale, page: Page): string {
  const base = locale === "en" ? "" : "/ja";
  const leaf = page === "home" ? "" : `/${page}`;
  return `${base}${leaf}` || "/";
}

/** Each page cross-declares its counterpart in the other language. */
function alternatesFor(page: Page) {
  return {
    en: pathFor("en", page),
    ja: pathFor("ja", page),
    "x-default": pathFor("en", page),
  };
}

export function buildMetadata(locale: Locale): Metadata {
  const d = getDictionary(locale);
  const path = pathFor(locale, "home");

  return {
    metadataBase: new URL(siteUrl),
    title: { default: d.seo.title, template: `%s | ${d.person.fullName}` },
    description: d.seo.description,
    applicationName: d.person.fullName,
    authors: [{ name: d.person.fullName, url: siteUrl }],
    creator: d.person.fullName,
    keywords: d.seo.keywords,
    alternates: { canonical: path, languages: alternatesFor("home") },
    openGraph: {
      type: "profile",
      locale: locale === "en" ? "en_IN" : "ja_JP",
      alternateLocale: locale === "en" ? "ja_JP" : "en_IN",
      url: `${siteUrl}${path}`,
      siteName: d.person.fullName,
      title: d.seo.title,
      description: d.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: d.seo.title,
      description: d.seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    category: "technology",
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3eb" },
    { media: "(prefers-color-scheme: dark)", color: "#13100d" },
  ],
  colorScheme: "light dark",
};

/**
 * Per-page metadata for the routes below the root layout. The layout supplies
 * the title template, description and OG defaults; this narrows the title,
 * canonical URL and hreflang set to the page.
 */
export function pageMetadata(locale: Locale, page: Exclude<Page, "home">): Metadata {
  const d = getDictionary(locale);
  const title = page === "projects" ? d.heading.projects.title : d.heading.about.title;
  const description =
    page === "projects" ? d.heading.projects.lead : d.heading.about.lead;
  const path = pathFor(locale, page);

  return {
    title,
    description: description ?? d.seo.description,
    alternates: { canonical: path, languages: alternatesFor(page) },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_IN" : "ja_JP",
      url: `${siteUrl}${path}`,
      siteName: d.person.fullName,
      title: `${title} | ${d.person.fullName}`,
      description: description ?? d.seo.description,
    },
  };
}
