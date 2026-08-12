import Header from './Header';
import Footer from './Footer';
import { UI } from '@/lib/i18n';
import type { Locale } from '@/lib/site';

/** Runs before paint so the theme never flashes. Light is the default. */
const themeScript = `(function(){try{var s=localStorage.getItem('hwf-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

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
