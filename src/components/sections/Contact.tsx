import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, Download, GitHub, LinkedIn, MapPin } from "@/components/ui/Icons";
import { contactDetails, otherLocale, socials, type Dictionary } from "@/content";
import { asset } from "@/lib/asset";

const iconFor: Record<string, typeof GitHub> = { GitHub, LinkedIn };

export default function Contact({ d, index }: { d: Dictionary; index: string }) {
  const h = d.heading.contact;

  return (
    <Section id="contact" labelledBy="contact-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-ink-3 tabular-nums">
              {index}
            </span>
            <span className="h-px w-8 bg-rule-strong" aria-hidden="true" />
            <span
              lang={otherLocale(d.locale)}
              aria-hidden="true"
              className="font-serif text-sm text-ink-3"
            >
              {h.alt}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h2
              id="contact-heading"
              className="mt-5 font-serif text-[2rem] leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl"
            >
              {h.title}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-base leading-[1.8] text-ink-2 sm:text-[17px]">
              {d.contact.body}
            </p>
          </Reveal>

          <Reveal delay={200}>
            {/* Wraps rather than truncating. A clipped address is unusable. */}
            <a
              href={`mailto:${contactDetails.email}`}
              className="group mt-8 inline-flex min-h-11 max-w-full items-center gap-3 border-b border-rule-strong pb-2 font-serif text-[clamp(1.1rem,5.2vw,2.25rem)] leading-tight text-ink transition-colors hover:border-accent hover:text-accent sm:mt-10"
            >
              <span className="break-all">{contactDetails.email}</span>
              <ArrowUpRight
                width={20}
                height={20}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-4 text-[13px] text-ink-3">{d.contact.responseNote}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={160}>
            <dl className="border-t border-rule">
              {/* Row rhythm matches the social rows below, whose links are 44px tall. */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                  {d.contact.locationLabel}
                </dt>
                <dd className="inline-flex min-h-11 items-center gap-2 py-2 text-[15px] text-ink">
                  <MapPin width={14} height={14} className="shrink-0" />
                  {d.person.location}
                </dd>
              </div>

              {socials.map((social) => {
                const Icon = iconFor[social.label];
                return (
                  <div
                    key={social.label}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-3"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">
                      {social.label}
                    </dt>
                    <dd>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex min-h-11 items-center gap-2 py-2 text-[15px] text-ink transition-colors hover:text-accent"
                      >
                        {Icon ? (
                          <Icon width={14} height={14} className="shrink-0" />
                        ) : null}
                        {social.handle}
                        <ArrowUpRight
                          width={12}
                          height={12}
                          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                        <span className="sr-only">{d.ui.opensInNewTab}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal delay={240}>
            <a
              href={asset(contactDetails.resumePath)}
              download={contactDetails.resumeFileName}
              className="mt-8 inline-flex w-full min-h-11 items-center justify-center gap-2.5 bg-ink px-6 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              <Download width={15} height={15} className="shrink-0" />
              {d.ui.downloadResumePdf}
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
