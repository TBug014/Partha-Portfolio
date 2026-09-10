import { GitHub, LinkedIn, Mail } from "@/components/ui/Icons";
import { contactDetails, socials, type Dictionary, type Locale } from "@/content";

const iconFor: Record<string, typeof GitHub> = { GitHub, LinkedIn };

export default function Footer({ d, locale }: { d: Dictionary; locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-rule">
      <div className="mx-auto w-full max-w-[76rem] px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-lg text-ink">{d.person.fullName}</p>
            <p
              lang={locale === "en" ? "ja" : "en"}
              className="mt-1 font-serif text-xs tracking-widest text-ink-3"
              aria-hidden="true"
            >
              {d.person.nameAlt}
            </p>
            <p className="mt-5 max-w-sm font-serif text-[15px] leading-[1.7] text-ink-2">
              {d.ui.credo}
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:items-end">
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  aria-label={`Email ${d.person.fullName}`}
                  className="inline-flex h-11 w-11 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-ink hover:text-ink"
                >
                  <Mail width={16} height={16} />
                </a>
              </li>
              {socials.map((social) => {
                const Icon = iconFor[social.label];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${social.label}, ${social.handle}${d.ui.opensInNewTab}`}
                      className="inline-flex h-11 w-11 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-ink hover:text-ink"
                    >
                      {Icon ? <Icon width={16} height={16} /> : social.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <p className="text-xs text-ink-3">
              © {year} {d.person.fullName}. {d.ui.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
