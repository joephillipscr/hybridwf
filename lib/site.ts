export const SITE_URL = 'https://hybridwf.com';

/** The brand is not translated. */
export const SITE_NAME = 'Hybrid Workforce Standard';
export const SITE_SHORT = 'HybridWF';

export const STANDARD_VERSION = '1.0';
export const STANDARD_LABEL = 'Candidate 1.0'; // becomes 'v1.0' only when a Board constituted under the governance rules ratifies it
export const STANDARD_STATUS = 'candidate'; // candidate → ratified
export const STANDARD_DATE = '2026-08-12';

export const AUTHOR = {
  name: 'Master Joe Phillips',
  url: 'https://masterjoephillips.com',
};

/** Declared, everywhere, on purpose. See /governance/. */
export const PLATFORM_DISCLOSURE = {
  name: 'AIEmpl.com',
  url: 'https://aiempl.com',
};

export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const TAGLINE: Record<Locale, string> = {
  en: 'An administrative standard for AI Employees.',
  es: 'Un estándar administrativo para AI Employees.',
};

/* ------------------------------------------------------------------ */
/* Routes — English at the root, Spanish under /es/ with translated    */
/* slugs. Every page is declared once here and consumed everywhere.    */
/* ------------------------------------------------------------------ */

export type RouteKey =
  | 'home'
  | 'standard'
  | 'definition'
  | 'maturity'
  | 'framework'
  | 'principles'
  | 'hwfa'
  | 'role'
  | 'transitions'
  | 'glossary'
  | 'governance'
  | 'license'
  | 'sources'
  | 'changelog';

export const ROUTES: Record<RouteKey, Record<Locale, string>> = {
  home: { en: '/', es: '/es/' },
  standard: { en: '/standard/', es: '/es/estandar/' },
  definition: { en: '/definition/', es: '/es/definicion/' },
  maturity: { en: '/maturity/', es: '/es/madurez/' },
  framework: { en: '/framework/', es: '/es/marco/' },
  principles: { en: '/framework/principles/', es: '/es/marco/principios/' },
  hwfa: { en: '/hwfa/', es: '/es/hwfa/' },
  role: { en: '/role/', es: '/es/rol/' },
  transitions: { en: '/transitions/', es: '/es/transiciones/' },
  glossary: { en: '/glossary/', es: '/es/glosario/' },
  governance: { en: '/governance/', es: '/es/gobierno/' },
  license: { en: '/license/', es: '/es/licencia/' },
  sources: { en: '/sources/', es: '/es/fuentes/' },
  changelog: { en: '/changelog/', es: '/es/cambios/' },
};

export const ROUTE_TITLES: Record<RouteKey, Record<Locale, string>> = {
  home: { en: 'Home', es: 'Inicio' },
  standard: { en: 'The Standard', es: 'El Estándar' },
  definition: { en: 'Definition', es: 'Definición' },
  maturity: { en: 'Maturity', es: 'Madurez' },
  framework: { en: 'WRM Framework', es: 'Marco WRM' },
  principles: { en: '120 Principles', es: '120 Principios' },
  hwfa: { en: 'HWFA', es: 'HWFA' },
  role: { en: 'The Role', es: 'El Rol' },
  transitions: { en: 'Transitions', es: 'Transiciones' },
  glossary: { en: 'Glossary', es: 'Glosario' },
  governance: { en: 'Governance', es: 'Gobierno' },
  license: { en: 'Licence', es: 'Licencia' },
  sources: { en: 'Sources', es: 'Fuentes' },
  changelog: { en: 'Changelog', es: 'Cambios' },
};

/** Primary navigation. Everything else lives in the footer. */
export const NAV: RouteKey[] = [
  'standard',
  'definition',
  'framework',
  'hwfa',
  'role',
  'governance',
];

export const FOOTER_NAV: { title: Record<Locale, string>; items: RouteKey[] }[] = [
  {
    title: { en: 'The standard', es: 'El estándar' },
    items: ['standard', 'definition', 'maturity', 'changelog'],
  },
  {
    title: { en: 'The framework', es: 'El marco' },
    items: ['framework', 'principles', 'transitions', 'role'],
  },
  {
    title: { en: 'Use it', es: 'Usarlo' },
    items: ['hwfa', 'glossary', 'governance', 'license', 'sources'],
  },
];

export function route(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale];
}

/** Given a pathname, return its twin in the other language. */
export function counterpart(pathname: string, to: Locale): string {
  const from: Locale = to === 'en' ? 'es' : 'en';
  const clean = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const hit = (Object.keys(ROUTES) as RouteKey[]).find(
    (k) => ROUTES[k][from] === clean,
  );
  return hit ? ROUTES[hit][to] : ROUTES.home[to];
}
