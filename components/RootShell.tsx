import Header from './Header';
import Footer from './Footer';
import { UI } from '@/lib/i18n';
import { LICENSE } from '@/lib/license';
import {
  AUTHOR,
  ROUTES,
  SITE_NAME,
  SITE_URL,
  STANDARD_DATE,
  STANDARD_LABEL,
  type Locale,
} from '@/lib/site';

/**
 * Runs before paint so the theme never flashes. Dark is the default and lives
 * on :root, so this only ever adds the opt-in light override.
 */
const themeScript = `(function(){try{if(localStorage.getItem('hwf-theme')==='light')document.documentElement.classList.add('light');}catch(e){}})();`;

export default function RootShell({
  lang,
  fontVars,
  children,
}: {
  lang: Locale;
  fontVars: string;
  children: React.ReactNode;
}) {
  /* Machine-readable licence, so crawlers and reuse tools can see the terms
     without parsing the footer prose. */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: SITE_NAME,
    version: STANDARD_LABEL,
    datePublished: STANDARD_DATE,
    inLanguage: lang,
    url: `${SITE_URL}${ROUTES.home[lang]}`,
    license: LICENSE.url,
    creditText: SITE_NAME,
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
    copyrightHolder: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="license" href={LICENSE.url} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontVars} font-sans`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          {UI.skipToContent[lang]}
        </a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
