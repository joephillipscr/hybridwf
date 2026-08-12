/**
 * Generates the thin route files for both locales from a single table.
 * Page bodies live in components/pages and are locale-agnostic, so the
 * two language trees can never drift out of parity.
 *
 *   node scripts/gen-routes.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');

/** [routeKey, component, enDir, esDir] — dir '' means the locale index. */
const PAGES = [
  ['home', 'HomePage', '', ''],
  ['standard', 'StandardPage', 'standard', 'estandar'],
  ['definition', 'DefinitionPage', 'definition', 'definicion'],
  ['maturity', 'MaturityPage', 'maturity', 'madurez'],
  ['framework', 'FrameworkPage', 'framework', 'marco'],
  ['principles', 'PrinciplesPage', 'framework/principles', 'marco/principios'],
  ['hwfs', 'HwfsPage', 'hwfs', 'hwfs'],
  ['role', 'RolePage', 'role', 'rol'],
  ['transitions', 'TransitionsPage', 'transitions', 'transiciones'],
  ['glossary', 'GlossaryPage', 'glossary', 'glosario'],
  ['governance', 'GovernancePage', 'governance', 'gobierno'],
  ['sources', 'SourcesPage', 'sources', 'fuentes'],
  ['changelog', 'ChangelogPage', 'changelog', 'cambios'],
];

const file = (component, key, locale) => `import ${component} from '@/components/pages/${component}';
import { buildMetadata } from '@/lib/meta';

export const metadata = buildMetadata('${locale}', '${key}');

export default function Page() {
  return <${component} lang="${locale}" />;
}
`;

let n = 0;
for (const [key, component, enDir, esDir] of PAGES) {
  const targets = [
    join(ROOT, 'app', '(en)', enDir, 'page.tsx'),
    join(ROOT, 'app', '(es)', 'es', esDir, 'page.tsx'),
  ];
  const locales = ['en', 'es'];

  targets.forEach((target, i) => {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, file(component, key, locales[i]));
    n++;
  });
}

console.log(`wrote ${n} route files`);
