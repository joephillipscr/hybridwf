/**
 * HybridWF mark — one role, two possible occupants.
 *
 * A single rounded cell (the post) split down the middle: the left half is
 * continuous, the right half is segmented. Same shape, same boundary, two
 * different kinds of resource inside it. Reads at 16px.
 */
export default function Mark({ className = 'h-8 w-8' }: { className?: string }) {
  const id = 'hwf-gloss';
  return (
    <svg viewBox="0 0 32 32" className={className} role="img" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor="rgb(var(--gloss))" />
          <stop offset="45%" stopColor="rgb(var(--accent))" />
          <stop offset="100%" stopColor="rgb(var(--primary))" />
        </linearGradient>
      </defs>

      {/* the post — the boundary that exists before any occupant */}
      <rect
        x="1.25"
        y="1.25"
        width="29.5"
        height="29.5"
        rx="9"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="2.5"
      />

      {/* left occupant — continuous */}
      <rect x="7.5" y="7.5" width="7" height="17" rx="3.5" fill={`url(#${id})`} />

      {/* right occupant — segmented */}
      <rect x="17.5" y="7.5" width="7" height="4.6" rx="2.3" fill={`url(#${id})`} />
      <rect x="17.5" y="13.7" width="7" height="4.6" rx="2.3" fill={`url(#${id})`} />
      <rect x="17.5" y="19.9" width="7" height="4.6" rx="2.3" fill={`url(#${id})`} />
    </svg>
  );
}
