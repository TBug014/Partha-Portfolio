# Partha Protim Sarmah, Portfolio

A personal portfolio and resume site. Minimal, Japanese-influenced typography;
built to let a recruiter understand the profile in under a minute.

**Stack:** Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 · zero runtime UI dependencies.

---

## 1. Prerequisites

| Tool | Version | Check |
| --- | --- | --- |
| Node.js | 18.18+ (20 or 22 LTS recommended) | `node -v` |
| npm | 9+ | `npm -v` |
| Git | any | `git --version` |
| VS Code | latest | n/a |

Node.js: <https://nodejs.org>. Install the LTS build.

---

## 2. Run it locally

Open a terminal in the project folder and run:

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3000>. Saving any file hot-reloads the page.

---

## 3. VS Code setup

Open the folder (`File → Open Folder…`, pick `partha-portfolio`), or from a terminal:

```bash
code partha-portfolio
```

VS Code will prompt to install the recommended extensions listed in
`.vscode/extensions.json`. Accept them; they are what make this project pleasant to edit:

- **ESLint** (`dbaeumer.vscode-eslint`): inline lint errors.
- **Prettier** (`esbenp.prettier-vscode`): format on save, already configured.
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`): autocomplete for the
  custom colour tokens (`text-ink-2`, `bg-paper-2`, `border-rule`, …). It is pointed at
  `src/app/globals.css` in `.vscode/settings.json`, which is where the Tailwind v4 theme lives.

To run the dev server inside VS Code: **Terminal → New Terminal**, then `npm run dev`.
Ctrl/Cmd-click the printed localhost URL to open it.

If TypeScript shows stale errors, run **`TypeScript: Restart TS Server`** from the
command palette (Ctrl/Cmd + Shift + P).

**If the dev server renders unstyled** (plain text, no colours), you have production
build output mixed into `.next`. Running `npm run build` and then `npm run dev` in the
same folder can leave the dev server unable to emit CSS for the route-group layouts 
the stylesheet 404s. Clear it and restart:

```bash
rm -rf .next && npm run dev
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload on :3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build locally (run `build` first) |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript with no emit |

---

## 4. Content and translations

**Every word on the site lives in two files, and they mirror each other exactly:**

- [`src/content/en.ts`](src/content/en.ts): English
- [`src/content/ja.ts`](src/content/ja.ts): Japanese

Both are typed as `Dictionary`, defined in [`src/content/types.ts`](src/content/types.ts).
That type is the whole localization strategy: **if you add a key to one language and
forget the other, `npm run build` fails.** There is no runtime key lookup, no
`t("some.missing.key")` returning an empty string, and no silent English fallback
leaking into the Japanese page. A missing translation is a compile error.

Facts that must never differ between languages, email, resume path, GitHub
and LinkedIn URLs, the case-study links, live once in
[`src/content/shared.ts`](src/content/shared.ts) so they cannot drift apart.

```
src/content/
├─ types.ts     the Dictionary contract, the shape both languages must satisfy
├─ shared.ts    locale-invariant facts (email, URLs, handles)
├─ en.ts        English  ─┐ same keys,
├─ ja.ts        Japanese ─┘ enforced by the compiler
└─ index.ts     getDictionary(), nav filtering, section numbering
```

To change a sentence, edit it in `en.ts` and `ja.ts`. Components contain no copy at all.

### How language switching works

Language is a **route**, not client-side state. Every page exists in both languages:

| Page | English | Japanese |
| --- | --- | --- |
| Home: hero, selected work, and the remaining sections | `/` | `/ja` |
| Projects: full showcase incl. the capstone | `/projects` | `/ja/projects` |
| About | `/about` | `/ja/about` |

`<html lang>` is `en` or `ja` accordingly, and each page cross-declares its
counterpart with `hreflang` (e.g. `/about` ↔ `/ja/about`).

This matters more than it might look. Both pages are statically prerendered with
their real text in the HTML, so Google indexes the Japanese content as Japanese
(declared to each other with `hreflang` and a `x-default`), a recruiter can send
someone the `/ja` link directly, and switching works with JavaScript disabled 
it is an ordinary link. A client-side dictionary swap would have given up all
three.

The switcher additionally writes the choice to `localStorage`. On a later visit to
`/`, a tiny inline script (the same one that prevents the dark-mode flash) redirects
to `/ja` before first paint. It only ever redirects **from the site root**, so a
shared `/` or `/ja` link always lands where it points.

Implementation: `src/app/(en)/` and `src/app/(ja)/` are Next.js route groups, each
with its own root layout. That is what allows a per-language `<html lang>` without
middleware, which in turn keeps the site deployable as pure static files.

### Page structure

Composition lives in `src/components/pages/`, one file per page, so a route file is
three lines and the section order is readable in one place:

- `HomeSections.tsx`: Hero, then **Selected Work** (anchored `#selected-work` for the
  hero CTA), then Experience, Skills, Education, Major Project, Japanese, Contact.
  About is deliberately absent; it lives only on `/about`.
- `ProjectsPage.tsx`: the full showcase: every project plus the capstone card.
- `AboutPage.tsx`: the About section alone.

Section numbering is per page (`numbering(ids)` in `src/content/index.ts`), so the
sequence never gaps when an optional section is hidden.

**Navbar** follows a three-zone grid (`1fr / auto / 1fr`, which keeps the centre
optically centred whatever the sides weigh):

| Zone | Contents |
| --- | --- |
| Left | `PPS` monogram · full name · name in the other script |
| Centre | Projects · About · Resume (direct PDF download) |
| Right | "Let's talk" → `#contact` · language toggle · theme toggle |

Below `lg` the centre and the CTA collapse into the mobile menu.

### The About page

`/about` is structured as five readouts rather than prose. It uses the site's own
palette, type scale and components throughout: the precision comes from the
hairline grid, the mono micro-labels and the density of the copy, not from a
separate skin.

Structure, in `src/components/about/`:

| Readout | Component | Interaction |
| --- | --- | --- |
| 01 System identity | `SystemIdentity.tsx` | Portrait slot, summary, readout grid |
| 02 Execution telemetry | `ExecutionTelemetry.tsx` | Accordion disclosure nodes |
| 03 Module matrix | `ModuleMatrix.tsx` | ARIA tabs, arrow/Home/End keys |
| 04 Core directives | `CoreDirectives.tsx` | Static three-up |
| 05 Trajectory | `TrajectoryMatrix.tsx` | Static three-up |

`PageAnchor.tsx` is the persistent section rail: sticky left column at `lg`, sticky
horizontal strip below the header on narrow screens. The links are plain in-page
anchors and work before hydration; the observer only adds the current-section
highlight.

**Adding the portrait.** Drop the file into `public/` and set `person.photo` in both
`en.ts` and `ja.ts` (for example `"/partha.jpg"`). `ProfilePhoto.tsx` swaps the
placeholder for a `next/image` fill automatically. The slot holds a 4:5 aspect ratio
whether or not the file exists, so adding it later cannot reflow the grid.

Copy lives under `aboutPage` in both dictionaries, grouped by readout rather than by
prose order.

### Japanese typography

Japanese needs different treatment from Latin, handled in
[`src/app/globals.css`](src/app/globals.css) under the `html[lang="ja"]` block:

| | English | Japanese |
| --- | --- | --- |
| Body line-height | 1.5–1.6 | **1.8** |
| Paragraph line-height | 1.75–1.8 | **1.85** |
| Letter-spacing (body) | 0 | **+0.02em** |
| Heading tracking | −0.035em | **+0.01em** (negative tracking crushes kanji) |
| Font | Shippori Mincho / Inter | **Noto Sans JP** |
| Extras |, | `palt`, `line-break: strict`, no `text-wrap: balance` |

The font swap is one CSS custom property: `html[lang="ja"]` reassigns `--stack-serif`
and `--stack-sans`, so every existing `font-serif` / `font-sans` utility re-points
without a single component knowing a second language exists.

`text-wrap: balance` and `pretty` are reset for Japanese, because they are tuned for
word-spaced scripts and produce odd ragged edges where every character is a valid
break point.

**Font loading (measured, not assumed).** Japanese families are enormous, and
`next/font/google` does not narrow them: Shippori Mincho with `subsets: ["latin"]`
still emitted **366 `@font-face` rules and 245 `<link rel="preload">` tags, about
7 MB pulled on every page load**, English included, for glyphs the Latin design
never paints. The fix was to take the three latin-range `.woff2` files directly
(81 KB total, in `src/fonts/`) and serve them with `next/font/local`.

| | Before | After |
| --- | --- | --- |
| Font preload tags | 245 | **5** |
| `@font-face` rules | 388 | **25** |
| `.next/static` | 19 MB | **1.3 MB** |
| `/` total transfer | ~7 MB | **293 KB** (160 KB fonts) |

Noto Sans JP is requested as a plain stylesheet **from the Japanese document only**
(`/` requests nothing), so unicode-range gating works and only the slices actually
painted are fetched. The Japanese page costs about **58 KB more than the English
one**, plus a ~60 KB (gzipped) stylesheet from Google Fonts.

If you would rather have no third-party request at all, delete the three
`fonts.googleapis.com` tags in `src/components/layout/RootHtml.tsx`. The stack in
`globals.css` already falls through to the reader's system Japanese font, Hiragino
Sans on macOS/iOS, Yu Gothic on Windows, Noto Sans CJK on Android, and the page
renders well with zero font downloads.

> **Please have the Japanese proofread.** It is a faithful translation of the English,
> but it is your voice on your portfolio, a native or N2+ reader should check the
> tone before you send this to a Japanese company.

### The Major Project section

`majorProject.project` holds **ArogyaChain**, the final-year capstone: an
inter-organizational Electronic Health Record system on Hyperledger Fabric
(CIT Kokrajhar, presented March 2023). It renders as one standalone card 
summary, tech-stack badges, the problem, engineering contributions and outcomes 
with every division a 1px `--rule` hairline.

Content is drawn from the project presentation. **Two things need your attention:**

1. **`repoUrl` is a placeholder.** It currently points at the GitHub *profile*
   (`https://github.com/TBug014`) so the footer link renders and resolves. Swap it
   for the ArogyaChain repository URL in both `en.ts` and `ja.ts` once the repo is
   public. Setting it back to `""` hides the link entirely.
2. **`contributions` are written at project level.** The presentation is the work of
   a three-person team and does not attribute tasks per member, so trim these to
   what was personally yours. The card already states "three-person team" in the
   role line, so the framing is honest either way.

**The "Also contributed to" list has been removed.** With it went the two stub
entries, "Electronic Health Records" (now the Major Project) and "Library
Automation System", which no longer appears anywhere on the site. To bring the
latter back, add it to `projects.items` in both locales with a real summary and
stack; it would look thin next to the four detailed Druooz cards without them.

```ts
majorProject: {
  // …labels…
  project: {
    name: "…", glyph: "…", role: "…", period: "…", context: "…",
    summary: "…",
    stack: ["…"],
    problem: "…",
    contributions: ["…", "…"],
    outcomes: [{ metric: "40%", body: "…" }, { body: "…" }],
    links: [{ label: "…", href: "…" }],
  },
},
```

### Two sections are still empty on purpose

`universityLife.entries` and `interests.items` are empty arrays **in both languages**.
While they are empty the sections *and their nav links disappear entirely*, nothing
invented ever ships as fact. Fill them in and both light up automatically, with the
section numbering recalculated:

```ts
universityLife: {
  entries: [
    { glyph: "研究", title: "Final-year project", period: "2022, 2023", body: "…" },
  ],
},
```

### One thing to double-check

In `experience`, the internship reads **"March 2024, August 2025"**, copied exactly
from the CV. That overlaps the full-time role that started September 2024 and is
almost certainly meant to be **August 2024**. Fix it in `en.ts`, `ja.ts` and the PDF.

### Replacing the resume PDF

Drop the new file into `public/` keeping the filename `Partha_Protim_Sarmah_CV.pdf`,
or update `contactDetails` in `src/content/shared.ts`.

## 5. Colour palette

Both themes are defined once as CSS custom properties in
[`src/app/globals.css`](src/app/globals.css) and exposed to Tailwind through
`@theme inline`. No component hard-codes a colour, so changing a theme is a
one-block edit.

| Token | Tailwind | Light | Dark |
| --- | --- | --- | --- |
| `--paper` | `bg-paper` | `#FBFAF7` | `#100E0C` |
| `--paper-2` | `bg-paper-2` | `#F3F0E9` | `#191614` |
| `--ink` | `text-ink` | `#17130F` | `#F0EBE3` |
| `--ink-2` | `text-ink-2` | `#4B443C` | `#BDB4A8` |
| `--ink-3` | `text-ink-3` | `#6F675C` | `#948A7D` |
| `--rule` | `border-rule` | `#E4DDD1` | `#2C2723` |
| `--accent` | `text-accent` | `#1C4A4F` | `#8CC4BC` |
| `--seal` | `text-seal` | `#A8372A` | `#E0705A` |

Every text pairing was contrast-checked: body copy ≥ 9:1 and muted text ≥ 4.8:1
against both surface tones, in both themes.

To swap in a different dark scheme, edit only the `.dark` block, and keep
`viewport.themeColor` in [`src/lib/metadata.ts`](src/lib/metadata.ts) in sync with
`--paper`, since that drives the mobile browser chrome.

## 6. Environment variable

One optional variable, used for canonical URLs, `sitemap.xml`, and social preview tags:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Locally, copy `.env.example` to `.env.local` and set it. Without it the site falls back to
`http://localhost:3000`, which is fine for development but should be set in production.

---

## 7. Publish it

### First: put it on GitHub

The project is not a git repo yet. From the project folder:

```bash
git init && git add -A && git commit -m "Portfolio site"
```

```bash
gh repo create partha-portfolio --public --source=. --push
```

No `gh` CLI? Create the repo on github.com, then follow the `git remote add origin ...`
lines it shows you. Make sure the branch is called `main` (`git branch -M main`).

### Option A: GitHub Pages (free, static)

A workflow is already committed at `.github/workflows/deploy.yml`. After the first
push:

1. Repo → **Settings → Pages**
2. **Source** → **GitHub Actions**
3. Push to `main`. The workflow builds and publishes; the URL appears under Actions.

It runs `npm run build:pages`, which sets `GITHUB_PAGES=true` and produces a static
export in `out/`. `actions/configure-pages` supplies the site URL and base path
automatically, so a **user repo** (`<username>.github.io`, served at the domain root)
and a **project repo** (served at `/<repo>`) both work without edits.

**What Pages costs you.** It serves files, with no Node process, so:

| | Server host | GitHub Pages |
| --- | --- | --- |
| `next/image` optimizer | on | off (`unoptimized`) |
| Security headers from `next.config` | applied | ignored |
| `globalNotFound` 404 | on | plain `404.html` |

`next.config.ts` switches those off only when `GITHUB_PAGES=true`, so local
development and any Node deploy keep the full behaviour.

Because the optimizer is off, images in `public/` are served exactly as they sit on
disk. Keep them pre-sized: the portrait is a 67 KB JPEG at 1000 px wide, which is
ample for the largest slot on the page.

### Option B: Vercel (keeps image optimization)

<https://vercel.com/new> → import the repo → deploy. Nothing to configure; it detects
Next.js. Set `NEXT_PUBLIC_SITE_URL` to the final URL under *Environment Variables* so
the sitemap and canonical tags are right. Every push redeploys.

This keeps the image optimizer, the security headers and the styled 404 that Pages
gives up.

### Custom domain

Either host supports one. On Pages: *Settings → Pages → Custom domain*, then point
your registrar at GitHub. A custom domain is served from the root, so no base path is
needed. Update `NEXT_PUBLIC_SITE_URL` (Vercel) — on Pages the workflow derives it.

## 8. Responsive behaviour

Mobile-first, audited by measurement rather than by eye at 360 / 390 / 768 / 1024 /
1440 px, in both languages:

- **No horizontal overflow at any width**, verified by comparing
  `documentElement.scrollWidth` against `clientWidth` at each breakpoint.
- **Touch targets are ≥ 44 px**: checked by enumerating every visible `a[href]`
  and `button` and measuring its rendered box. The remaining question is tablets:
  a 1024 px iPad gets the desktop navigation, so the 44 px minimum is applied with
  `@media (pointer: coarse)` (the `tap` utility) rather than by viewport width.
  Touch devices get large targets; a mouse keeps the compact bar.
- **The language switcher adapts**: one 44×44 toggle below 1024 px, a full `EN | JA`
  segmented control above it. Two 44 px segments plus theme plus menu would not fit
  beside the name at 360 px.
- **Grids** step 1 → 2 → 3 columns; the quick-facts strip uses row rules and column
  gutters instead of per-breakpoint `nth-child` border arithmetic.
- **The email address wraps rather than truncating**: a clipped address is unusable.
- A custom `xs` breakpoint (26 rem / 416 px) separates small phones from large ones.

## 9. What was done for quality

- **Performance**: every route is statically prerendered; ~103 kB first-load JS, of which
  the page itself is under 1 kB. Scroll animations use IntersectionObserver and CSS keyframes
  rather than an animation library. Latin faces are self-hosted with `display: swap`, and the
  Latin-only slicing described above keeps a full page load at 293 KB. Japanese glyphs on the
  English pages fall back to the reader's system mincho rather than downloading a CJK family.
- **Accessibility**: every colour pair was contrast-checked (body text ≥ 9:1, muted ≥ 4.8:1,
  in both themes); skip link; one `h1` and a correct heading order; landmarks and
  `aria-labelledby` on each section; visible focus rings; the mobile menu is a labelled dialog
  that closes on `Escape` and restores focus; external links announce that they open in a new
  tab; `prefers-reduced-motion` disables all motion; content stays visible without JavaScript.
- **SEO**: per-locale metadata, Open Graph and Twitter cards, canonical URLs,
  reciprocal `hreflang` (`en`, `ja`, `x-default`), a bilingual `sitemap.xml` with
  language alternates, `robots.txt`, and schema.org `Person` JSON-LD localized per
  language and built only from verified facts.
- **Localization**: a compiler-enforced translation contract (a missing key breaks
  the build), real per-language URLs and `<html lang>`, and Japanese-specific
  typography rather than the same CSS with different words in it.
- **Dark mode**: respects the system setting, remembers an explicit choice, and applies before
  first paint so there is no flash.
