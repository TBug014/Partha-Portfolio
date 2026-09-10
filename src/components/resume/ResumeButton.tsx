"use client";

import { contactDetails } from "@/content";
import { useResumeViewer } from "./ResumeViewer";
import { asset } from "@/lib/asset";

/**
 * Opens the resume dialog. Rendered as a real link to the PDF so that it still
 * works with JavaScript disabled, middle-click, and "open in new tab". The
 * click handler only intercepts the plain left-click.
 */
export default function ResumeButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const open = useResumeViewer();

  return (
    <a
      href={asset(contactDetails.resumePath)}
      target="_blank"
      rel="noreferrer noopener"
      onClick={(e) => {
        if (!open) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        open();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
