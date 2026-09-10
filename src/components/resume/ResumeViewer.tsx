"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { ArrowUpRight, Close, Download } from "@/components/ui/Icons";
import { contactDetails, type ResumeStrings } from "@/content";
import { asset } from "@/lib/asset";

const ResumeContext = createContext<(() => void) | null>(null);

/** Opens the resume dialog. Returns null outside the provider. */
export function useResumeViewer() {
  return useContext(ResumeContext);
}

/**
 * One dialog instance for the whole document, opened from anywhere via context.
 *
 * The PDF is embedded with <object>, which falls back to its own children when
 * the browser cannot render a PDF inline, which is the common case on mobile: where
 * Android Chrome renders nothing and iOS Safari shows only the first page. The
 * fallback is therefore not an error state but the normal small-screen path, and
 * it offers the same two actions the viewer's toolbar does.
 */
export default function ResumeViewer({
  strings,
  children,
}: {
  strings: ResumeStrings;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);

  const openViewer = useCallback(() => {
    restoreTo.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    restoreTo.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("button, a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      // Keep focus inside the dialog while it is modal.
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <ResumeContext.Provider value={openViewer}>
      {children}

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          role="presentation"
        >
          {/* Backdrop: click to dismiss. */}
          <button
            type="button"
            aria-label={strings.close}
            onClick={close}
            className="dialog-backdrop absolute inset-0 h-full w-full cursor-default bg-ink/60 backdrop-blur-sm"
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            className="dialog-panel relative flex h-[92vh] w-full flex-col border border-rule bg-paper shadow-2xl sm:h-[88vh] sm:max-w-4xl"
          >
            {/* ------------------------------------------------------ toolbar */}
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-rule px-4 py-3 sm:px-6">
              <h2
                id="resume-dialog-title"
                className="font-serif text-lg text-ink sm:text-xl"
              >
                {strings.title}
              </h2>

              <div className="flex items-center gap-2">
                <a
                  href={asset(contactDetails.resumePath)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex min-h-11 items-center gap-2 border border-rule px-3 text-[13px] text-ink-2 transition-colors hover:border-ink hover:text-ink"
                >
                  <span className="hidden sm:inline">{strings.openInNewTab}</span>
                  <ArrowUpRight width={14} height={14} className="shrink-0" />
                  <span className="sr-only sm:hidden">{strings.openInNewTab}</span>
                </a>
                <a
                  href={asset(contactDetails.resumePath)}
                  download={contactDetails.resumeFileName}
                  className="inline-flex min-h-11 items-center gap-2 bg-ink px-4 text-[13px] font-medium text-paper transition-colors hover:bg-accent"
                >
                  <Download width={14} height={14} className="shrink-0" />
                  <span className="hidden sm:inline">{strings.download}</span>
                  <span className="sr-only sm:hidden">{strings.download}</span>
                </a>
                <button
                  type="button"
                  onClick={close}
                  aria-label={strings.close}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-ink hover:text-ink"
                >
                  <Close width={16} height={16} />
                </button>
              </div>
            </div>

            {/* -------------------------------------------------------- document */}
            <div className="min-h-0 flex-1 bg-paper-2">
              <object
                data={`${asset(contactDetails.resumePath)}#view=FitH`}
                type="application/pdf"
                aria-label={strings.title}
                className="h-full w-full"
              >
                {/* Rendered whenever the browser declines to display the PDF. */}
                <div className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
                  <p className="max-w-sm text-[15px] leading-relaxed text-ink-2">
                    {strings.fallback}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={asset(contactDetails.resumePath)}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-h-11 items-center gap-2 border border-ink px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                    >
                      {strings.openInNewTab}
                      <ArrowUpRight width={14} height={14} className="shrink-0" />
                    </a>
                    <a
                      href={asset(contactDetails.resumePath)}
                      download={contactDetails.resumeFileName}
                      className="inline-flex min-h-11 items-center gap-2 bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                    >
                      <Download width={14} height={14} className="shrink-0" />
                      {strings.download}
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
      ) : null}
    </ResumeContext.Provider>
  );
}
