"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "@/components/ui/Icons";
import type { ChromeStrings } from "@/content";

export default function ThemeToggle({
  ui,
  className = "",
}: {
  ui: ChromeStrings["ui"];
  className?: string;
}) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage can be unavailable in private mode. The toggle still works */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? (dark ? ui.switchToLight : ui.switchToDark) : ui.switchTheme}
      aria-pressed={mounted ? dark : undefined}
      className={`inline-flex h-11 w-11 items-center justify-center border border-rule text-ink-2 transition-colors hover:border-rule-strong hover:text-ink ${className}`}
    >
      {/* Both icons render; visibility is CSS-driven so there is no hydration mismatch. */}
      <Sun className="hidden dark:block" width={16} height={16} />
      <Moon className="block dark:hidden" width={16} height={16} />
    </button>
  );
}
