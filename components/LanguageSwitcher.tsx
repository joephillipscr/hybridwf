'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { counterpart, type Locale } from '@/lib/site';

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname() ?? '/';
  const other: Locale = lang === 'en' ? 'es' : 'en';

  return (
    <Link
      href={counterpart(pathname, other)}
      hrefLang={other}
      className="inline-flex h-9 items-center rounded-full border border-border px-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted transition hover:border-accent hover:text-brand"
    >
      {other}
    </Link>
  );
}
