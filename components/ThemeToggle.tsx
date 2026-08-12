'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { UI } from '@/lib/i18n';
import type { Locale } from '@/lib/site';

export default function ThemeToggle({ lang }: { lang: Locale }) {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
    setReady(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('hwf-theme', next ? 'dark' : 'light');
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
