"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import ResumeButton from "@/components/resume/ResumeButton";
import { Close, Download, Menu } from "@/components/ui/Icons";
import { pathForLocale, type ChromeStrings, type Locale } from "@/content";

export default function Header({ c, locale }: { c: ChromeStrings; locale: Locale }) {
  const pathname = usePathname();
  const base = pathForLocale(locale);
  const home = base === "/" ? "" : base;

  const pages = [
    { href: `${home}/projects`, label: c.pages.projects },
    { href: `${home}/about`, label: c.pages.about },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Condensed header + reading-progress hairline. */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 24);
        setProgress(max > 0 ? Math.min(1, y / max) : 0);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  /* Mobile panel: escape to close, scroll lock, focus moved into the panel. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  const isCurrent = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-rule bg-paper/85 backdrop-blur-md supports-[backdrop-filter]:bg-paper/70"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />

        {/* Three zones. The 1fr / auto / 1fr grid keeps the page links optically
            centred regardless of how wide the identity or controls become. */}
        <div className="mx-auto flex h-16 w-full max-w-[76rem] items-center gap-3 px-5 sm:px-8 lg:grid lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-12">
          {/* ------------------------------------------------ left: identity */}
          <Link
            href={base}
            className="group flex min-h-11 min-w-0 flex-1 items-center gap-3 lg:flex-none"
            aria-label={`${c.fullName}, ${c.ui.backToTop}`}
          >
            <span className="shrink-0 border border-rule px-1.5 py-0.5 font-mono text-[11px] tracking-[0.1em] text-ink-2 transition-colors group-hover:border-ink group-hover:text-ink">
              {c.monogram}
            </span>
            <span className="flex min-w-0 items-baseline gap-2.5">
              <span className="hidden truncate font-serif text-[15px] tracking-tight text-ink xs:inline">
                {c.fullName}
              </span>
              <span
                lang={locale === "en" ? "ja" : "en"}
                aria-hidden="true"
                className="hidden shrink-0 font-serif text-[11px] text-ink-3 transition-colors group-hover:text-accent sm:inline lg:hidden xl:inline"
              >
                {c.nameAlt}
              </span>
            </span>
          </Link>

          {/* ------------------------------------------- centre: page links */}
          <nav aria-label={c.ui.sections} className="hidden lg:flex lg:justify-center">
            <ul className="flex items-center gap-8">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    aria-current={isCurrent(page.href) ? "page" : undefined}
                    className={`tap relative whitespace-nowrap py-1 text-[13px] tracking-wide transition-colors ${
                      isCurrent(page.href) ? "text-ink" : "text-ink-3 hover:text-ink"
                    }`}
                  >
                    {page.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                        isCurrent(page.href) ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <ResumeButton className="tap relative whitespace-nowrap py-1 text-[13px] tracking-wide text-ink-3 transition-colors hover:text-ink">
                  {c.pages.resume}
                </ResumeButton>
              </li>
            </ul>
          </nav>

          {/* -------------------------------------------- right: controls */}
          <div className="flex shrink-0 items-center gap-2 lg:justify-end">
            <Link
              href={`${base}#contact`}
              className="hidden min-h-11 items-center gap-2 border border-ink px-4 text-[13px] font-medium text-ink transition-colors hover:bg-ink hover:text-paper lg:inline-flex"
            >
              {c.ui.letsTalk}
            </Link>
            <LanguageSwitcher ui={c.ui} locale={locale} />
            <ThemeToggle ui={c.ui} />
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={c.ui.openMenu}
              className="inline-flex h-11 w-11 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-rule-strong hover:text-ink lg:hidden"
            >
              <Menu width={16} height={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Rendered as a sibling of <header>, never inside it: once the header is
          scrolled it carries a backdrop-filter, which establishes a containing
          block for fixed-position descendants and would collapse this overlay to
          the height of the bar. */}
      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={c.ui.siteNavigation}
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-paper lg:hidden"
        >
          <div className="flex h-16 items-center justify-between px-5 sm:px-8">
            <span className="font-serif text-[15px] text-ink">{c.ui.menu}</span>
            <button
              type="button"
              onClick={close}
              aria-label={c.ui.closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center border border-rule text-ink-2 hover:text-ink"
            >
              <Close width={16} height={16} />
            </button>
          </div>

          <nav aria-label={c.ui.sections} className="px-5 pb-16 sm:px-8">
            <ul className="divide-y divide-rule border-y border-rule">
              {pages.map((page, i) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    onClick={close}
                    aria-current={isCurrent(page.href) ? "page" : undefined}
                    className="flex min-h-14 items-baseline gap-4 py-4 font-serif text-xl text-ink sm:text-2xl"
                  >
                    <span className="font-mono text-[11px] text-ink-3 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {page.label}
                  </Link>
                </li>
              ))}
              <li>
                <ResumeButton className="flex min-h-14 items-baseline gap-4 py-4 font-serif text-xl text-ink sm:text-2xl">
                  <span className="font-mono text-[11px] text-ink-3 tabular-nums">
                    {String(pages.length + 1).padStart(2, "0")}
                  </span>
                  {c.pages.resume}
                  <Download width={15} height={15} className="self-center text-ink-3" />
                </ResumeButton>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={`${base}#contact`}
                onClick={close}
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-4 py-3 text-sm font-medium text-paper"
              >
                {c.ui.letsTalk}
              </Link>
              <LanguageSwitcher ui={c.ui} locale={locale} variant="panel" />
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
