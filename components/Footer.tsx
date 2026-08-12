import Link from 'next/link';
import Mark from './Mark';
import { UI } from '@/lib/i18n';
import {
  AUTHOR,
  FOOTER_NAV,
  PLATFORM_DISCLOSURE,
  ROUTE_TITLES,
  SITE_NAME,
  STANDARD_DATE,
  STANDARD_VERSION,
  route,
  type Locale,
} from '@/lib/site';

export default function Footer({ lang }: { lang: Locale }) {
  const year = STANDARD_DATE.slice(0, 4);

  return (
    <footer className="mt-24 border-t border-border bg-raised">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark className="h-7 w-7" />
              <span className="font-display text-[1.05rem] font-semibold tracking-tight">
                HybridWF
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{SITE_NAME}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              v{STANDARD_VERSION} · {STANDARD_DATE}
            </p>
          </div>

          {FOOTER_NAV.map((group) => (
            <div key={group.title.en}>
              <h2 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand">
                {group.title[lang]}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((key) => (
                  <li key={key}>
                    <Link
                      href={route(key, lang)}
                      className="text-sm text-muted transition hover:text-brand"
                    >
                      {ROUTE_TITLES[key][lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-surface p-5">
          <p className="text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-fg">
              {lang === 'en' ? 'Disclosure. ' : 'Divulgación. '}
            </strong>
            {UI.disclosureShort[lang]}{' '}
            <a
              href={AUTHOR.url}
              className="font-medium text-brand underline underline-offset-2"
              rel="author"
            >
              {AUTHOR.name}
            </a>{' '}
            ·{' '}
            <a
              href={PLATFORM_DISCLOSURE.url}
              className="font-medium text-brand underline underline-offset-2"
              rel="nofollow"
            >
              {PLATFORM_DISCLOSURE.name}
            </a>
            {'. '}
            <Link
              href={route('governance', lang)}
              className="font-medium text-brand underline underline-offset-2"
            >
              {lang === 'en' ? 'How this standard is governed' : 'Cómo se gobierna este estándar'}
            </Link>
            .
          </p>
        </div>

        <p className="mt-8 text-xs text-muted">
          © {year} {AUTHOR.name}.{' '}
          {lang === 'en'
            ? 'Published openly. This standard certifies no products and issues no seals.'
            : 'Publicado abiertamente. Este estándar no certifica productos ni emite sellos.'}
        </p>
      </div>
    </footer>
  );
}
