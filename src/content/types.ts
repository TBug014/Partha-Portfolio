/**
 * The bilingual contract.
 *
 * `Dictionary` is the single shape every locale must satisfy. Because `en.ts` and
 * `ja.ts` are both typed as `Dictionary`, a missing or misspelled key is a build
 * error rather than a blank space on the page. There is no silent fallback and
 * no runtime key lookup that can miss.
 *
 * Anything that does not change between languages (email, URLs, handles) lives in
 * `shared.ts` instead, so it can never drift between the two files.
 */

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type SectionId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "major-project"
  | "university-life"
  | "japan"
  | "interests"
  | "contact";

export type Heading = {
  /** The other language's word for this section, shown small beside the index. */
  alt: string;
  title: string;
  lead?: string;
};

export type QuickFact = { label: string; value: string };

export type Principle = {
  /** Kanji shown as a display glyph, identical in both locales. */
  glyph: string;
  romaji: string;
  title: string;
  body: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  kind: string;
  location: string;
  period: string;
  highlights: string[];
  links?: { label: string; href: string }[];
};

export type Project = {
  name: string;
  glyph: string;
  role: string;
  context: string;
  summary: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
};

/**
 * The capstone / major project, shown as a single detailed card rather than a
 * grid tile. `null` until every field below is confirmed from the project report
 * The section and its nav item stay hidden while it is, so no part of it can
 * ship as invented detail.
 */
export type MajorProjectDetail = {
  name: string;
  /** Japanese label used as a typographic accent, as elsewhere on the site. */
  glyph: string;
  role: string;
  period?: string;
  context: string;
  /** Two or three sentences: what it is and what it does. */
  summary: string;
  stack: string[];
  /** The problem the project set out to solve. */
  problem: string;
  /** Specific engineering work done personally, not team-level description. */
  contributions: string[];
  /** Results. `metric` is rendered as a display figure when present. */
  outcomes: { metric?: string; body: string }[];
  /**
   * GitHub repository for the project. Leave as "" until the repo is public,
   * the card omits the link entirely rather than shipping a dead one.
   */
  repoUrl: string;
  links?: { label: string; href: string }[];
};

export type SkillGroup = { glyph: string; title: string; items: string[] };
export type LanguageSkill = { name: string; level: string };

export type EducationItem = {
  institution: string;
  qualification: string;
  location: string;
  period: string;
  result: string;
};

export type UniversityEntry = {
  glyph: string;
  title: string;
  period?: string;
  body: string;
};

export type InterestItem = { glyph: string; title: string; body: string };
/** A kanji, its reading, and what it stands for in this context. */
export type JapanNote = { glyph: string; romaji: string; gloss: string };
export type NavItem = { id: SectionId; label: string; alt: string };

/** Top-level page links in the centre of the navbar. */
export type PageLink = { href: string; label: string };

/**
 * Exactly what the client-side chrome (header, theme toggle, language switcher)
 * needs. Passing the whole `Dictionary` to a client component makes React
 * serialize every string in it into the RSC payload, so the page ships each
 * paragraph twice: once as HTML, once as flight data.
 */
export type ChromeStrings = {
  fullName: string;
  brand: { latin: string; kana: string };
  /** Projects / About / Resume, the centre of the navbar. */
  pages: { projects: string; about: string; resume: string };
  ui: {
    backToTop: string;
    sections: string;
    letsTalk: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    siteNavigation: string;
    resumeShort: string;
    viewResume: string;
    downloadResume: string;
    switchToLight: string;
    switchToDark: string;
    switchTheme: string;
    languageLabel: string;
    switchLanguage: string;
  };
};

/** Copy for the resume viewer dialog. */
export type ResumeStrings = {
  title: string;
  download: string;
  openInNewTab: string;
  close: string;
  /** Shown where the browser cannot render a PDF inline (most mobile browsers). */
  fallback: string;
};

export interface Dictionary {
  locale: Locale;

  seo: {
    title: string;
    description: string;
    keywords: string[];
    /** Human-readable name of this language, for the switcher and hreflang UI. */
    languageName: string;
  };

  /** Identity mark. Same in both locales: a name is not translated. */
  brand: { latin: string; kana: string };

  person: {
    /** Display name split across lines so each language controls its own break. */
    nameLines: string[];
    fullName: string;
    /** The name in the *other* script, used as a small typographic accent. */
    nameAlt: string;
    title: string;
    target: string;
    location: string;
    /**
     * Portrait for the About page. Drop the file in `public/` and set the path
     * here (e.g. "/partha.jpg"). While it is "", the slot renders a composed
     * placeholder rather than a broken image or an empty hole in the grid.
     */
    photo: string;
    photoAlt: string;
  };

  hero: {
    kanji: string;
    kanjiMeaning: string;
    statement: string;
    /** Compact skills line under the intro. */
    coreSkills: { label: string; items: string[] };
    support: string;
  };

  quickFacts: QuickFact[];
  heading: Record<SectionId, Heading>;

  about: {
    paragraphs: string[];
    principlesLabel: string;
    principles: Principle[];
  };

  /**
   * The /about page, rendered as an instrument panel. Content is grouped by the
   * five readouts it displays rather than by prose order.
   */
  aboutPage: {
    sectionLabels: {
      identity: string;
      telemetry: string;
      modules: string;
      directives: string;
      trajectory: string;
    };
    identity: {
      statement: string;
      readout: { key: string; value: string }[];
    };
    telemetry: {
      lead: string;
      nodes: {
        id: string;
        label: string;
        period: string;
        summary: string;
        detail: string[];
      }[];
    };
    modules: {
      lead: string;
      clusters: { id: string; label: string; items: string[] }[];
    };
    directives: {
      lead: string;
      items: { glyph: string; romaji: string; name: string; body: string }[];
    };
    trajectory: {
      lead: string;
      items: { index: string; label: string; body: string }[];
    };
  };

  experience: ExperienceItem[];

  projects: {
    items: Project[];
  };

  skills: {
    groups: SkillGroup[];
    languagesGlyph: string;
    languagesTitle: string;
    languages: LanguageSkill[];
  };

  education: EducationItem[];

  majorProject: {
    roleLabel: string;
    stackLabel: string;
    problemLabel: string;
    contributionsLabel: string;
    outcomesLabel: string;
    repoLabel: string;
    project: MajorProjectDetail | null;
  };

  universityLife: { entries: UniversityEntry[] };

  japan: {
    /** The card: the goal itself, shown in both scripts. */
    goalLabel: string;
    goal: string;
    goalAlt: string;
    /**
     * Language study framed as an ongoing commitment. No proficiency level or
     * certification is claimed here. None has been earned yet.
     */
    languageNote: string;
    paragraphs: string[];
    aimsLabel: string;
    aims: JapanNote[];
  };

  interests: { items: InterestItem[] };

  contact: {
    body: string;
    responseNote: string;
    locationLabel: string;
  };

  nav: NavItem[];

  pages: {
    projects: string;
    about: string;
    resume: string;
  };

  ui: {
    skipToContent: string;
    backToTop: string;
    letsTalk: string;
    availableForWork: string;
    viewResume: string;
    openInNewTab: string;
    close: string;
    resumeFallback: string;
    expand: string;
    collapse: string;
    onThisPage: string;
    resumeShort: string;
    downloadResume: string;
    downloadResumePdf: string;
    viewWork: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    siteNavigation: string;
    sections: string;
    switchToLight: string;
    switchToDark: string;
    switchTheme: string;
    opensInNewTab: string;
    languageLabel: string;
    /** Label shown on the switcher for the language it switches *to*. */
    switchLanguage: string;
    /** Short personal line in the footer. */
    credo: string;
    rights: string;
    notFoundAlt: string;
    notFoundLead: string;
    notFoundReturn: string;
  };
}
