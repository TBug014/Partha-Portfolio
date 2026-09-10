import { getDictionary, socials, contactDetails, type Locale } from "@/content";

/**
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment (e.g. https://partha.dev).
 * Falls back to localhost so metadataBase is always valid in development.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

/** schema.org Person. Every field is drawn from the CV or confirmed directly. */
export function personJsonLd(locale: Locale) {
  const d = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: d.person.fullName,
    alternateName: d.person.nameAlt,
    jobTitle: d.person.title,
    description: d.seo.description,
    email: `mailto:${contactDetails.email}`,
    url: locale === "en" ? siteUrl : `${siteUrl}/ja`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Golaghat",
      addressRegion: "Assam",
      addressCountry: "IN",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Central Institute of Technology, Kokrajhar",
      },
      { "@type": "EducationalOrganization", name: "Nalbari Polytechnic, Chandkuchi" },
    ],
    worksFor: { "@type": "Organization", name: "Druooz Pvt. Ltd." },
    knowsLanguage: [
      { "@type": "Language", name: "Assamese" },
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Hindi" },
      { "@type": "Language", name: "Japanese" },
    ],
    knowsAbout: [
      "Data Science",
      "Software Development",
      "UI/UX Design",
      "Python",
      "Java",
      "JavaScript",
      "C++",
      "MySQL",
      "Figma",
      "Blockchain",
      "IoT",
    ],
    sameAs: socials.map((s) => s.href),
  };
}
