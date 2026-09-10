"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  /** Optional: the `line` variant draws a rule and has no content. */
  children?: ReactNode;
  /** Element to render. Keeps the animation from forcing extra wrapper divs. */
  as?: ElementType;
  className?: string;
  /** Stagger in milliseconds. */
  delay?: number;
  /** `up` fades and lifts; `line` draws a hairline from left to right. */
  variant?: "up" | "line";
};

/**
 * Scroll-triggered entrance. Uses IntersectionObserver and two CSS keyframes
 * rather than an animation library. The whole effect costs no extra bytes of
 * JavaScript beyond this file, and `prefers-reduced-motion` disables it in CSS.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined
      }
      className={`${variant === "line" ? "line-draw" : "reveal"} ${className}`}
    >
      {children}
    </Tag>
  );
}
