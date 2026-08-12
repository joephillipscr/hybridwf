'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Mark from './Mark';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { UI } from '@/lib/i18n';
import {
  NAV,
  ROUTE_TITLES,
  SITE_SHORT,
  STANDARD_VERSION,
  route,
  type Locale,
} from '@/lib/site';

export default function Header({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? '/';

  const isActive = (href: string) =>
    href === route('home', lang) ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link
          href={route('home', lang)}
          className="flex items-center gap-2.5"
          aria-label={SITE_SHORT}
        >
          <Mark className="h-7 w-7" />
          <span className="font-display text-[1.05rem] font-semibold tracking-tight">
            {SITE_SHORT}
          </span>
          <span className="hidden font-mono text-[0.68rem] font-semibold text-muted sm:inline">
            v{STANDARD_VERSION}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((key) => {
            const href = route(key, lang);
            return (
              <Link
                key={key}
                href={href}
                className={`text-sm font-medium transition hover:text-brand ${
                  isActive(href) ? 'text-brand' : 'text-muted'
                }`}
              >
                {ROUTE_TITLES[key][lang]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher lang={lang} />
          <ThemeToggle lang={lang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? UI.close[lang] : UI.menu[lang]}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-brand lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-2">
            {NAV.map((key) => (
              <Link
                key={key}
                href={route(key, lang)}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-fg last:border-0"
              >
                {ROUTE_TITLES[key][lang]}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
