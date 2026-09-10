/**
 * A hanko-style seal used once, in the hero. Decorative, hidden from
 * assistive technology.
 */
export default function Seal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        opacity="0.9"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="52"
        fill="currentColor"
        fontFamily="var(--font-jp)"
      >
        作
      </text>
    </svg>
  );
}
