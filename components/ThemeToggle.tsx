'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { UI } from '@/lib/i18n';
import type { Locale } from '@/lib/site';

export default function ThemeToggle({ lang }: { lang: Locale }) {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(!document.documentElement.classList.contains('light'));
    setReady(true);
  }, []);

  function toggle() {
    // The class on <html> is the source of truth, not React state: the theme
    // script sets it before hydration, so reading it here keeps the toggle
    // correct even when clicks land faster than a re-render.
    const root = document.documentElement;
    const nextIsDark = root.classList.contains('light');

    root.classList.toggle('light', !nextIsDark);
    setDark(nextIsDark);
    try {
      localStorage.setItem('hwf-theme', nextIsDark ? 'dark' : 'light');
    } catch {
      /* private mode — the choice simply does not persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={UI.theme[lang]}
      title={UI.theme[lang]}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-brand"
    >
      {ready && dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
