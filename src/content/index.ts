import en from "./en";
import ja from "./ja";
import {
  defaultLocale,
  locales,
  type Dictionary,
  type Locale,
  type ChromeStrings,
  type ResumeStrings,
  type SectionId,
} from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** `/` serves the default locale; other locales are prefixed (`/ja`). */
export function pathForLocale(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ja" : "en";
}

/**
 * Section numbering is per page: each page passes the sections it actually
 * renders, so the sequence never gaps when an optional section is hidden.
 */
export function numbering(ids: SectionId[]) {
  return (id: SectionId) => String(ids.indexOf(id) + 1).padStart(2, "0");
}

/** Sections rendered on the home page, in order. About lives on /about. */
export function homeSections(d: Dictionary): SectionId[] {
  return [
    "projects",
    "experience",
    "skills",
    "education",
    ...(d.majorProject.project ? (["major-project"] as SectionId[]) : []),
    "japan",
    ...(d.interests.items.length > 0 ? (["interests"] as SectionId[]) : []),
    "contact",
  ];
}

export { defaultLocale, locales };
export type { ChromeStrings, Dictionary, Locale, ResumeStrings, SectionId };
export { contactDetails, socials } from "./shared";

/** Narrow slice of the dictionary handed to the client-side chrome. */
export function chromeStrings(d: Dictionary): ChromeStrings {
  const u = d.ui;
  return {
    fullName: d.person.fullName,
    brand: { ...d.brand },
    pages: { ...d.pages },
    ui: {
      backToTop: u.backToTop,
      sections: u.sections,
      letsTalk: u.letsTalk,
      menu: u.menu,
      openMenu: u.openMenu,
      closeMenu: u.closeMenu,
      siteNavigation: u.siteNavigation,
      resumeShort: u.resumeShort,
      viewResume: u.viewResume,
      downloadResume: u.downloadResume,
      switchToLight: u.switchToLight,
      switchToDark: u.switchToDark,
      switchTheme: u.switchTheme,
      languageLabel: u.languageLabel,
      switchLanguage: u.switchLanguage,
    },
  };
}

/** Copy handed to the resume dialog, which lives in the client shell. */
export function resumeStrings(d: Dictionary): ResumeStrings {
  return {
    title: d.pages.resume,
    download: d.ui.downloadResume,
    openInNewTab: d.ui.openInNewTab,
    close: d.ui.close,
    fallback: d.ui.resumeFallback,
  };
}
