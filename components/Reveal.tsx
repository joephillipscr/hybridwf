'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scroll reveal that can never leave content stranded.
 *
 * This site is a document people are meant to read and cite, so the animation
 * is decorative only: if IntersectionObserver is unsupported, never fires, or
 * the element is in a viewport that is not being observed, a timer reveals the
 * content anyway. Reduced-motion users skip straight to visible.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);

    // Safety net: nothing stays hidden because an observer did not fire.
    const fallback = window.setTimeout(() => setShown(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(14px)',
        transition: `opacity .55s cubic-bezier(.16,1,.3,1) ${delay}s, transform .55s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
