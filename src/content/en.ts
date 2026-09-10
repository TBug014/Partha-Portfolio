import { caseStudies } from "./shared";
import type { Dictionary } from "./types";

const en: Dictionary = {
  locale: "en",
  seo: {
    title: "Partha Protim Sarmah | Data Science Engineer / Software Developer",
    description:
      "Partha Protim Sarmah is a computer science engineer from Assam, India, moving into data science engineering and software development after a year designing and shipping four production applications at Druooz Pvt. Ltd. B.Tech CSE. Actively studying Japanese, with the goal of working in Japan.",
    keywords: [
      "Partha Protim Sarmah",
      "data science engineer",
      "software developer",
      "UI/UX designer",
      "Python developer",
      "Assam",
      "India",
      "CIT Kokrajhar",
      "Japan",
      "software engineer Japan",
      "portfolio",
    ],
    languageName: "English",
  },
  brand: { latin: "Partha", kana: "パルタ" },

  person: {
    nameLines: ["Partha Protim", "Sarmah"],
    fullName: "Partha Protim Sarmah",
    nameAlt: "サルマ",
    title: "UI/UX Designer",
    target: "Data Science Engineer / Software Developer",
    location: "Golaghat, Assam, India",
    photo: "/partha.jpg",
    photoAlt: "Partha Protim Sarmah",
  },
  hero: {
    kanji: "静かに作る",
    kanjiMeaning: "to build, quietly",
    statement:
      "Computer science graduate with professional experience in UI/UX design, contributing to the interfaces of production applications.",
    coreSkills: {
      label: "Core skills",
      items: ["Python", "Java", "JavaScript", "C++", "UI/UX Design"],
    },
    support:
      "Interested in data science, software, and user-centred digital solutions. Currently studying Japanese at the JLPT N3 level.",
  },
  quickFacts: [
    {
      label: "Focus",
      value: "Data Science & Software Development",
    },
    {
      label: "Experience",
      value: "1 year of UI/UX at Druooz Pvt. Ltd.",
    },
    {
      label: "Education",
      value: "B.Tech CSE, CIT Kokrajhar",
    },
    { label: "Japanese", value: "Actively studying" },
    {
      label: "Languages",
      value: "Assamese, English, Hindi",
    },
  ],
  heading: {
    about: {
      alt: "紹介",
      title: "About",
      lead: "Profile, record, stack, and where the next work goes.",
    },
    experience: {
      alt: "職歴",
      title: "Experience",
      lead: "A year at Druooz Pvt. Ltd. in Bangalore, from intern to designer on four shipped products.",
    },
    projects: {
      alt: "制作",
      title: "Selected work",
      lead: "Four products for one platform, designed to feel like one product.",
    },
    skills: {
      alt: "技術",
      title: "Skills",
      lead: "Engineering fundamentals on one side, product design on the other.",
    },
    education: {
      alt: "学歴",
      title: "Education",
      lead: "Six years of computer science and engineering in Assam.",
    },
    "major-project": {
      alt: "主要",
      title: "Major Project",
      lead: "The capstone. One project, in full technical depth.",
    },
    "university-life": {
      alt: "学生時代",
      title: "University life",
      lead: "Six years of technical education in Assam, three at Nalbari Polytechnic and three more at CIT Kokrajhar, shaped how I work long before any job did.",
    },
    japan: {
      alt: "日本",
      title: "Why Japan",
      lead: "Why I want to build my career, and my life, there.",
    },
    interests: {
      alt: "趣味",
      title: "Interests",
      lead: "Away from the screen.",
    },
    contact: {
      alt: "連絡",
      title: "Let's talk",
    },
  },
  about: {
    paragraphs: [
      "My background runs across UI/UX design, IoT and web development. I have designed user interfaces for multiple applications and contributed to real-world projects: a cab application, a library automation system, and an electronic health records system.",
      "The toolkit is Python, Java, C, C++, JavaScript and MySQL on the engineering side; Figma and UI/UX fundamentals on the design side; and Solidity and blockchain from the work that first pulled me toward systems thinking. I work with Git, GitHub and Agile, and I think in terms of the whole software lifecycle rather than isolated tickets.",
      "What I am building toward now is data science engineering and software development. Design taught me to start from the person on the other side of the screen; I want to keep that instinct and point it at data, models and the systems underneath them.",
    ],
    principlesLabel: "How I work",
    principles: [
      {
        glyph: "間",
        romaji: "ma",
        title: "Space is part of the design",
        body: "What you leave out decides how the rest reads. I apply the same edit to interfaces, to code and to explanations.",
      },
      {
        glyph: "改善",
        romaji: "kaizen",
        title: "Small, continuous improvement",
        body: "A year of iterating on four applications with developers and stakeholders taught me that shipping and refining beats waiting for perfect.",
      },
      {
        glyph: "型",
        romaji: "kata",
        title: "Learn the form, then move",
        body: "Fundamentals first: programming paradigms, the software lifecycle, the grammar of a language. Fluency is what comes after the form is solid.",
      },
    ],
  },
  aboutPage: {
    sectionLabels: {
      identity: "System identity",
      telemetry: "Execution telemetry",
      modules: "Module matrix",
      directives: "Core directives",
      trajectory: "Trajectory",
    },
    identity: {
      statement:
        "Computer science and engineering graduate. B.Tech and diploma. Human-centric interface design joined to backend and systems thinking.",
      readout: [
        { key: "Degree", value: "B.Tech CSE, CIT Kokrajhar" },
        { key: "Diploma", value: "CSE, Nalbari Polytechnic" },
        { key: "Shipped", value: "4 production applications" },
        { key: "Trajectory", value: "Data science, software engineering" },
        { key: "Languages", value: "Assamese, English, Hindi, Japanese (studying)" },
      ],
    },
    telemetry: {
      lead: "Production record across interface design and distributed systems.",
      nodes: [
        {
          id: "druooz",
          label: "Druooz Pvt. Ltd.",
          period: "Mar 2024 – Feb 2025",
          summary: "UI/UX designer. Four production applications, intern to designer.",
          detail: [
            "Rider app, driver app, marketing site and internal ERP. One brand system across four surfaces.",
            "Owned the full loop: wireframe, prototype, spec, handoff.",
            "Responsive across desktop, tablet, mobile.",
            "ERP usability work lifted internal workflow throughput.",
          ],
        },
        {
          id: "arogyachain",
          label: "ArogyaChain",
          period: "Capstone, 2023",
          summary: "Electronic health record pipeline on Hyperledger Fabric.",
          detail: [
            "Permissioned network across hospitals, government bodies, MedTech and insurers.",
            "IPFS for off-chain record payloads.",
            "EHR transaction schema built for cross-organization query and verification.",
            "On-chain patient consent, grant and revoke, keyed to Aadhaar onboarding.",
          ],
        },
      ],
    },
    modules: {
      lead: "Stack, grouped by layer.",
      clusters: [
        {
          id: "core",
          label: "Languages",
          items: ["Python", "Java", "C", "C++", "JavaScript", "Solidity"],
        },
        {
          id: "data",
          label: "Data and workflow",
          items: ["MySQL", "Git", "GitHub", "Agile"],
        },
        {
          id: "interface",
          label: "Design",
          items: ["Figma", "UI/UX fundamentals"],
        },
      ],
    },
    directives: {
      lead: "Three operating principles, borrowed and kept.",
      items: [
        {
          glyph: "間",
          romaji: "ma",
          name: "Negative space",
          body: "Precision editing across interfaces, code logic and technical documentation. What is cut decides how the rest reads.",
        },
        {
          glyph: "改善",
          romaji: "kaizen",
          name: "Continuous iteration",
          body: "Rapid prototyping, tight feedback loops, deployment velocity over theoretical perfection.",
        },
        {
          glyph: "型",
          romaji: "kata",
          name: "Foundational mastery",
          body: "Core paradigms and computer science fundamentals before complex abstractions.",
        },
      ],
    },
    trajectory: {
      lead: "Where the next work goes.",
      items: [
        {
          index: "01",
          label: "Intelligent systems at scale",
          body: "Software that holds up under real load, not demo conditions.",
        },
        {
          index: "02",
          label: "Predictive analytics",
          body: "Models that inform decisions rather than decorate dashboards.",
        },
        {
          index: "03",
          label: "Data-driven products",
          body: "Interfaces built on the data underneath, designed for the person reading it.",
        },
      ],
    },
  },

  experience: [
    {
      company: "Druooz Pvt. Ltd.",
      role: "UI/UX Designer",
      kind: "Full-time",
      location: "Bangalore, Karnataka",
      period: "September 2024 – February 2025",
      highlights: [
        "Designed and developed user interfaces for four key applications (a user app, a driver app, the official website and an ERP system), ensuring a cohesive brand experience across platforms.",
        "Led the end-to-end UI/UX process, from wireframing and prototyping through to final design, resulting in intuitive and visually appealing interfaces.",
        "Collaborated closely with cross-functional teams, including developers and stakeholders, to gather requirements and translate business needs into effective design solutions.",
        "Created interactive prototypes and design specifications in Figma, streamlining handoff to the development teams.",
        "Implemented responsive design principles to ensure an optimal experience across desktop, tablet and mobile.",
        "Enhanced the ERP system's usability, enabling efficient management of operations and improving workflow productivity for internal teams.",
      ],
      links: [
        {
          label: "User App case study",
          href: caseStudies.userApp,
        },
        {
          label: "Driver App case study",
          href: caseStudies.driverApp,
        },
      ],
    },
    {
      company: "Druooz Pvt. Ltd.",
      role: "UI/UX Designer (Intern)",
      kind: "Internship",
      location: "Bangalore, Karnataka",
      // Printed exactly as on the CV. NOTE: overlaps the full-time role above and
      // is very likely a typo for "August 2024".
      period: "March 2024 – August 2025",
      highlights: [
        "Designed and developed user interfaces for the user app, ensuring a cohesive brand experience across platforms.",
      ],
      links: [
        {
          label: "User App case study",
          href: caseStudies.userApp,
        },
      ],
    },
  ],
  projects: {
    items: [
      {
        name: "Druooz User App",
        glyph: "乗客アプリ",
        role: "End-to-end UI/UX design",
        context: "Druooz Pvt. Ltd. · Cab-hailing platform",
        summary:
          "The rider-facing side of the cab application: wireframes through to final, responsive screens and an interactive prototype handed to the development team.",
        stack: ["Figma", "Wireframing", "Prototyping", "Responsive design"],
        href: caseStudies.userApp,
        hrefLabel: "Read the case study",
      },
      {
        name: "Druooz Driver App",
        glyph: "ドライバーアプリ",
        role: "End-to-end UI/UX design",
        context: "Druooz Pvt. Ltd. · Cab-hailing platform",
        summary:
          "The driver-facing counterpart, designed to share one brand language with the rider app while serving a completely different job to be done.",
        stack: ["Figma", "Design systems", "Prototyping"],
        href: caseStudies.driverApp,
        hrefLabel: "Read the case study",
      },
      {
        name: "Druooz ERP System",
        glyph: "業務システム",
        role: "UI/UX Design",
        context: "Druooz Pvt. Ltd. · Internal operations",
        summary:
          "Usability work on the internal ERP, enabling efficient management of operations and improving workflow productivity for the teams who use it every day.",
        stack: ["Figma", "Information architecture", "Usability"],
      },
      {
        name: "Druooz Official Website",
        glyph: "コーポレートサイト",
        role: "UI/UX Design",
        context: "Druooz Pvt. Ltd. · Public web",
        summary:
          "The public face of the platform, designed to carry the same brand experience as the two apps across desktop, tablet and mobile.",
        stack: ["Figma", "Responsive design", "Brand consistency"],
      },
    ],
  },
  skills: {
    groups: [
      {
        glyph: "言語",
        title: "Programming Languages",
        items: ["Python", "Java", "C", "C++", "JavaScript", "MySQL"],
      },
      {
        glyph: "ウェブ",
        title: "Web Technologies",
        items: ["HTML", "CSS"],
      },
      {
        glyph: "設計",
        title: "Design & Product",
        items: [
          "Figma",
          "UI/UX Fundamentals",
          "Wireframing",
          "Prototyping",
          "Responsive Design",
        ],
      },
      {
        glyph: "開発",
        title: "Software Development",
        items: [
          "Programming Paradigms",
          "Git",
          "GitHub",
          "Agile Methodology",
          "Software Lifecycle",
        ],
      },
      {
        glyph: "他",
        title: "Miscellaneous",
        items: ["Solidity", "Blockchain", "IoT", "Critical Thinking", "Problem Solving"],
      },
    ],
    languagesGlyph: "言葉",
    languagesTitle: "Languages",
    languages: [
      {
        name: "Assamese",
        level: "Native",
      },
      {
        name: "English",
        level: "Fluent",
      },
      {
        name: "Hindi",
        level: "Fluent",
      },
      {
        name: "Japanese",
        level: "Studying",
      },
    ],
  },
  education: [
    {
      institution: "Central Institute of Technology, Kokrajhar",
      qualification: "B.Tech in Computer Science and Engineering",
      location: "Kokrajhar, Assam",
      period: "September 2020 – June 2023",
      result: "CGPA 7.1 / 10",
    },
    {
      institution: "Nalbari Polytechnic, Chandkuchi",
      qualification: "Diploma in Computer Science and Engineering",
      location: "Nalbari, Assam",
      period: "July 2017 – June 2020",
      result: "CGPA 7.1 / 10",
    },
  ],
  majorProject: {
    roleLabel: "Role",
    stackLabel: "Tech stack",
    problemLabel: "The problem",
    contributionsLabel: "Engineering contributions",
    repoLabel: "View the repository on GitHub",
    outcomesLabel: "Design goals & outcomes",
    // Sourced from the project presentation (CIT Kokrajhar, 14 March 2023).
    // NOTE FOR PARTHA: the deck presents the work of a three-person team and does
    // not attribute tasks per member. The `contributions` below are written at
    // project level. Trim them to what was personally yours before publishing.
    project: {
      name: "ArogyaChain",
      glyph: "電子カルテ",
      role: "Final-year major project · three-person team",
      period: "Presented March 2023",
      context:
        "Central Institute of Technology, Kokrajhar · Guided by Dr. Pranav Kumar Singh",
      summary:
        "An inter-organizational Electronic Health Record system built on Hyperledger Fabric. ArogyaChain pairs centralized servers with a permissioned blockchain network so that hospitals, government institutions, MedTech organizations and insurers can maintain, share and verify a patient's medical records, with the patient holding consent over every access.",
      stack: [
        "Hyperledger Fabric",
        "Blockchain",
        "IPFS",
        "Permissioned network",
        "PKI / Certificate Authorities",
        "Aadhaar-based identity",
        "JSON schema design",
      ],
      problem:
        "Health records in India are fragmented across institutions, which leads to misdiagnosis, inefficient tracking and weak data integrity. Records are difficult to store and maintain at both personal and organizational level, and there is no trustworthy way to share them between organizations without giving up security or patient privacy.",
      contributions: [
        "Designed a permissioned Hyperledger Fabric network linking hospitals, government institutions, MedTech organizations and insurers, with IPFS handling off-chain storage of record payloads.",
        "Defined the EHR transaction schema (record type, issuing doctor and hospital registration numbers, patient identity, diagnosis, severity and prescribed medicines) so records stay queryable and verifiable across organizations.",
        "Built an in-blockchain patient consent system with grant and revoke access flows, keyed to Aadhaar-based onboarding for both patients and medical members.",
        "Designed the mobile interface: certificate and private-key enrolment and login, health records browsable by type, EHR detail views, and the grant/revoke access screens.",
      ],
      outcomes: [
        {
          body: "Met the design goals set for the system: security, patient data privacy, availability, scalability, efficient querying of health records, a flexible access control system, trust, reliability, and a recovery mechanism for registration and enrolment secrets.",
        },
        {
          body: "Built for the Indian health ecosystem specifically: Aadhaar-based patient and medical-member onboarding, an in-blockchain consent system, and integration with government medical databases.",
        },
        {
          body: "Presented at CIT Kokrajhar in March 2023, with a defined roadmap: onboarding further organizations that consume medical data, transparent billing and accounting, and a decentralized identity system to remove the dependency on certificate authorities.",
        },
      ],
      // PLACEHOLDER. Points at the GitHub profile so the link renders and
      // resolves. Replace with the ArogyaChain repository URL when it is public.
      repoUrl: "https://github.com/TBug014",
    },
  },
  // NEEDS INPUT. Nothing on the CV. Empty means the section and its nav item
  // are removed entirely rather than filled with invented copy.
  universityLife: {
    entries: [],
  },
  japan: {
    goalLabel: "The goal",
    goal: "Work and settle in Japan",
    goalAlt: "日本で働き、暮らす",
    // Language is framed as an ongoing commitment. No proficiency level or
    // certification is claimed. None has been earned yet.
    languageNote:
      "I study Japanese daily and am preparing for upcoming JLPT examinations. It is an active commitment, not a finished one.",
    paragraphs: [
      "What first drew me to Japan was recognition rather than novelty. The countryside I kept finding in videos looked remarkably like Assam, where I have lived my whole life: the same green mountains, river valleys and quiet villages. I have always been drawn to that kind of landscape, and the resemblance turned an idle curiosity into a real interest in the country and its culture.",
      "I want to build my career in Japan's technology sector, in software engineering or data science. That is what I studied and what I have kept working at since, and I would rather apply it somewhere I intend to stay than somewhere I am only passing through. The aim is to become an engineer who builds things people actually use.",
      "Outside the work, the plan is straightforward. Keep studying until I can live in the language rather than translate into it. Travel through regional Japan, not only its cities. Settle properly into the culture rather than observe it from the edge. What I am looking for is a long-term life there, not a posting.",
    ],
    aimsLabel: "What I am working toward",
    aims: [
      {
        glyph: "語学",
        romaji: "gogaku",
        gloss:
          "Daily study, toward certification and toward thinking in the language rather than translating into it",
      },
      {
        glyph: "地方",
        romaji: "chihō",
        gloss:
          "Regional Japan, the countryside that started this, not only the major cities",
      },
      {
        glyph: "技術",
        romaji: "gijutsu",
        gloss: "A long career in Japan's tech sector, building software that gets used",
      },
    ],
  },
  // NEEDS INPUT. See universityLife above.
  interests: {
    items: [],
  },
  contact: {
    body: "I am looking for data science engineering and software development roles. If you are hiring, or you just want to compare notes on design, data or Japanese, my inbox is open.",
    responseNote: "Best reached by email.",
    locationLabel: "Location",
  },
  pages: {
    projects: "Projects",
    about: "About",
    resume: "Resume",
  },
  nav: [
    {
      id: "about",
      label: "About",
      alt: "紹介",
    },
    {
      id: "experience",
      label: "Experience",
      alt: "職歴",
    },
    {
      id: "projects",
      label: "Projects",
      alt: "制作",
    },
    {
      id: "skills",
      label: "Skills",
      alt: "技術",
    },
    {
      id: "education",
      label: "Education",
      alt: "学歴",
    },
    {
      id: "major-project",
      label: "Major Project",
      alt: "主要",
    },
    {
      id: "university-life",
      label: "University",
      alt: "学生時代",
    },
    {
      id: "japan",
      label: "Japanese",
      alt: "日本語",
    },
    {
      id: "interests",
      label: "Interests",
      alt: "趣味",
    },
    {
      id: "contact",
      label: "Contact",
      alt: "連絡",
    },
  ],
  ui: {
    skipToContent: "Skip to content",
    backToTop: "back to top",
    letsTalk: "Let's talk",
    availableForWork: "Available for work",
    resumeShort: "Resume",
    viewResume: "View resume",
    openInNewTab: "Open in a new tab",
    close: "Close",
    expand: "Expand",
    collapse: "Collapse",
    onThisPage: "On this page",
    resumeFallback:
      "Your browser cannot display the PDF here. Open it in a new tab or download it below.",
    downloadResume: "Download resume",
    downloadResumePdf: "Download resume (PDF)",
    viewWork: "View selected work",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    siteNavigation: "Site navigation",
    sections: "Sections",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    switchTheme: "Switch theme",
    opensInNewTab: " (opens in a new tab)",
    languageLabel: "Language",
    switchLanguage: "日本語で読む",
    credo: "Become a skilled engineer. Build something useful. Keep exploring.",
    rights: "All rights reserved.",
    notFoundAlt: "見つかりません",
    notFoundLead:
      "This page does not exist. The space where it would have been is, at least, well proportioned.",
    notFoundReturn: "Return home",
  },
};

export default en;
