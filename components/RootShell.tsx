import Header from './Header';
import Footer from './Footer';
import { UI } from '@/lib/i18n';
import type { Locale } from '@/lib/site';

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
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
