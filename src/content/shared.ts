/**
 * Locale-invariant facts. These must never differ between languages, so they live
 * here rather than being duplicated (and eventually contradicting each other) in
 * `en.ts` and `ja.ts`.
 */

export const contactDetails = {
  email: "parthapsarmah14@gmail.com",
  resumePath: "/Partha_Protim_Sarmah_CV.pdf",
  resumeFileName: "Partha_Protim_Sarmah_CV.pdf",
} as const;

export const socials = [
  { label: "GitHub", handle: "TBug014", href: "https://github.com/TBug014" },
  {
    label: "LinkedIn",
    handle: "parthaps14",
    href: "https://www.linkedin.com/in/parthaps14",
  },
] as const;

export const caseStudies = {
  userApp:
    "https://drive.google.com/file/d/1IHZAC-El3Jo5vn6qFVs09m_YU5UCsa92/view?usp=sharing",
  driverApp:
    "https://drive.google.com/file/d/1Ton5fyakUJXup4biVr2Y6FIW3zADtE9x/view?usp=sharing",
} as const;
