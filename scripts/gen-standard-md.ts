/**
 * Generates the machine-readable edition of the standard.
 *
 *   public/standard.md      full standard, English
 *   public/estandar.md      full standard, Spanish
 *   public/llms.txt         index for LLM crawlers (llmstxt.org convention)
 *
 * Everything is derived from lib/ — the same source the site renders. There is
 * deliberately no hand-written copy of the standard anywhere: two versions that
 * can drift apart would destroy the one property that makes a standard worth
 * citing.
 *
 *   npx tsx scripts/gen-standard-md.ts
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import type { T } from '../lib/i18n';
import { LOCALES, ROUTES, SITE_NAME, SITE_URL, STANDARD_DATE, STANDARD_LABEL, STANDARD_VERSION, AUTHOR, type Locale } from '../lib/site';
import { BLOCKS, CLAUSES, CONFORMANCE, DECLARATION, MOTIVATION, OBJECTIVE, PREAMBLE, RISK_CLASSES, RISK_INTRO, RISK_NOTE } from '../lib/standard';
import { DEFINITION, FORMULA, GOVERNING_PRINCIPLE, LADDER, OWNERSHIP_BOUNDARY, PROPERTIES, PROPERTIES_CAVEAT, THESIS } from '../lib/definition';
import { LEVELS, MATURITY_NOTE, THRESHOLD, DIAGNOSTIC } from '../lib/maturity';
import { BOUNDARY_WARNING, DOMAINS, LIFECYCLE, PRINCIPLE_LAYERS, RULES as WRM_RULES, STACK, WRM_DEFINITION, WRM_PREMISE } from '../lib/wrm';
import { COUNTS, MATRIX_CAVEAT, PRINCIPLES, P_DOMAINS } from '../lib/principles';
import { AUTONOMY, AUTONOMY_NOTE, DIMENSIONS } from '../lib/hwfa';
import { ANTI_KPI, CAPACITY_ELEVATION, CEO_NOTE, DIRECTION_NOTE, KPIS, MISSION, PLACEMENT, RESPONSIBILITIES, ROLE_NAME } from '../lib/role';
import { BACK, BACK_INTRO, BACK_NOTE, FORWARD, FORWARD_INTRO, FORWARD_PRECONDITION, FORWARD_RULE } from '../lib/transitions';
import { ACRONYM_RULE, GLOSSARY_NOTE, TERMS as GLOSSARY_TERMS } from '../lib/glossary';
import { DISCLOSURE, MAPPING, MODEL, OPEN_FINDINGS, PROCESS, RELEASES, RULES as GOV_RULES, SEATS, STATUS_NOTE, VERSIONING_POLICY } from '../lib/governance';
import { LICENSE, attributionPlain } from '../lib/license';
import { CONCEPTUAL, KIND_LABEL, METHOD_NOTES, SOURCES, type Source } from '../lib/sources';

/* ------------------------------------------------------------------ */

const L = (v: T, l: Locale) => v[l];

/** Markdown table from a header row plus body rows. */
const table = (head: string[], rows: string[][]) =>
  [
    `| ${head.join(' | ')} |`,
    `| ${head.map(() => '---').join(' | ')} |`,
    ...rows.map((r) => `| ${r.map((c) => c.replace(/\|/g, '\\|')).join(' | ')} |`),
  ].join('\n');

const S = {
  contents: { en: 'Contents', es: 'Contenido' },
  howToCite: { en: 'How to cite', es: 'Cómo citar' },
  risk: { en: 'Risk classification', es: 'Clasificación de riesgo' },
  colRegime: { en: 'Operating regime', es: 'Régimen operativo' },
  citeBody: {
    en: 'Cite clauses by identifier, never by page or section number. The clause text is the citable unit; the notes beneath each clause are commentary and may be revised between versions without amending the standard.',
    es: 'Citá las cláusulas por identificador, nunca por página ni número de sección. El texto de la cláusula es la unidad citable; las notas bajo cada cláusula son comentario y pueden revisarse entre versiones sin enmendar el estándar.',
  },
  thesis: { en: 'Thesis', es: 'Tesis' },
  governing: { en: 'Governing principle', es: 'Principio rector' },
  definition: { en: 'Definition', es: 'Definición' },
  nineTest: { en: 'The nine-property test', es: 'El test de nueve propiedades' },
  ladder: { en: 'The vocabulary ladder', es: 'La escalera de vocabulario' },
  ownership: { en: 'Task execution versus role stewardship', es: 'Task execution frente a role stewardship' },
  clauses: { en: 'The normative clauses', es: 'Las cláusulas normativas' },
  reading: { en: 'Reading this standard', es: 'Cómo leer este estándar' },
  note: { en: 'Note', es: 'Nota' },
  maturity: { en: 'Maturity model', es: 'Modelo de madurez' },
  threshold: { en: 'Category threshold', es: 'Umbral de la categoría' },
  diagnostic: { en: 'Self-diagnosis', es: 'Autodiagnóstico' },
  framework: { en: 'WRM — the framework', es: 'WRM — el marco' },
  stack: { en: 'Where WRM sits', es: 'Dónde se ubica WRM' },
  classes: { en: 'Three classes of principle', es: 'Tres clases de principio' },
  domains: { en: 'The ten domains', es: 'Los diez dominios' },
  lifecycle: { en: 'Lifecycle of a work resource', es: 'Ciclo de vida del recurso de trabajo' },
  rules: { en: 'Ten non-negotiable rules', es: 'Diez reglas no negociables' },
  matrix: { en: 'The 120-principle matrix', es: 'La matriz de 120 principios' },
  hwfa: { en: 'HWFA — Hybrid Workforce Fit Assessment', es: 'HWFA — Hybrid Workforce Fit Assessment' },
  hwfaIntro: {
    en: 'A structured instrument in three stages — eligibility, then risk, then economics — for deciding whether a responsibility should be Human, Deterministic automation, Artificial or Hybrid. Constraints come first: reserved subjects and prohibited uses gate the answer, fully enumerable rule-following work exits to conventional software, risk caps what survives, and only then does the cost profile choose among the remainder. It returns an argument, not a number: an allocation, a risk class, a starting autonomy rung, the answers that decided it, and the conditions that would change it — a numeric score would let a decision already taken be laundered through arithmetic.',
    es: 'Instrumento estructurado en tres etapas — elegibilidad, luego riesgo, luego economía — para decidir si una responsabilidad debe ser Humana, Automatización determinista, Artificial o Híbrida. Las restricciones van primero: las materias reservadas y los usos prohibidos compuertan la respuesta, el trabajo por reglas completamente enumerable sale hacia software convencional, el riesgo topa lo que sobrevive, y solo entonces el perfil de costos escoge entre lo restante. Devuelve un argumento, no un número: una asignación, una clase de riesgo, un peldaño inicial de autonomía, las respuestas que lo decidieron y las condiciones que lo cambiarían — un puntaje numérico permitiría lavar a través de la aritmética una decisión ya tomada.',
  },
  dimensions: { en: 'The thirteen dimensions', es: 'Las trece dimensiones' },
  autonomy: { en: 'The autonomy ladder', es: 'La escalera de autonomía' },
  role: { en: 'The role', es: 'El rol' },
  mission: { en: 'Mission', es: 'Misión' },
  responsibilities: { en: 'Responsibilities', es: 'Responsabilidades' },
  antiKpi: { en: 'The anti-KPI', es: 'El anti-KPI' },
  scorecard: { en: 'Scorecard', es: 'Scorecard' },
  toCeo: { en: 'to CEO', es: 'al CEO' },
  transitions: { en: 'Transitions', es: 'Transiciones' },
  forward: { en: 'Human → Artificial', es: 'Humano → Artificial' },
  back: { en: 'Artificial → Human', es: 'Artificial → Humano' },
  glossary: { en: 'Glossary', es: 'Glosario' },
  governance: { en: 'Governance', es: 'Gobierno' },
  disclosure: { en: 'Disclosure', es: 'Divulgación' },
  seats: { en: 'The nine seats', es: 'Los nueve asientos' },
  open: { en: 'Open', es: 'Abierto' },
  process: { en: 'Amendment process', es: 'Proceso de enmienda' },
  status: { en: 'Current status', es: 'Estado actual' },
  licence: { en: 'Licence', es: 'Licencia' },
  sources: { en: 'Sources', es: 'Fuentes' },
  limits: { en: 'Methodological limits', es: 'Límites metodológicos' },
  lineage: { en: 'Conceptual lineage', es: 'Linaje conceptual' },
  changelog: { en: 'Changelog', es: 'Cambios' },
  versioning: { en: 'Versioning policy', es: 'Política de versionado' },
  colTerm: { en: 'Term', es: 'Término' },
  colPromise: { en: 'Core promise', es: 'Promesa principal' },
  colBehaviour: { en: 'Typical behaviour', es: 'Comportamiento típico' },
  colLimit: { en: 'Main limit', es: 'Límite principal' },
  colLevel: { en: 'Level', es: 'Nivel' },
  colName: { en: 'Name', es: 'Nombre' },
  colDefinition: { en: 'Definition', es: 'Definición' },
  colLayer: { en: 'Layer', es: 'Capa' },
  colManages: { en: 'Manages', es: 'Administra' },
  colOutcome: { en: 'Outcome', es: 'Resultado' },
  colClass: { en: 'Class', es: 'Clase' },
  colCount: { en: 'Count', es: 'Cantidad' },
  colMeaning: { en: 'Meaning', es: 'Significado' },
  colDomain: { en: 'Domain', es: 'Dominio' },
  colScope: { en: 'Scope', es: 'Alcance' },
  colStage: { en: 'Stage', es: 'Etapa' },
  colObjective: { en: 'Objective', es: 'Objetivo' },
  colPrinciple: { en: 'Principle', es: 'Principio' },
  colHuman: { en: 'Human resource', es: 'Recurso humano' },
  colArtificial: { en: 'Artificial resource', es: 'Recurso artificial' },
  colDimension: { en: 'Dimension', es: 'Dimensión' },
  colQuestion: { en: 'Question', es: 'Pregunta' },
  colOptions: { en: 'Options, least to most suited to an artificial resource', es: 'Opciones, de menos a más apta para un recurso artificial' },
  colRung: { en: 'Rung', es: 'Peldaño' },
  colDetail: { en: 'Detail', es: 'Detalle' },
  colKpi: { en: 'KPI', es: 'KPI' },
  colMeasures: { en: 'What it measures', es: 'Qué mide' },
  colStep: { en: 'Step', es: 'Paso' },
  colControl: { en: 'Control', es: 'Control' },
  colSeat: { en: 'Seat', es: 'Asiento' },
  colProtects: { en: 'Protects', es: 'Protege' },
  colHolder: { en: 'Holder', es: 'Titular' },
  colId: { en: 'ID', es: 'ID' },
  colSource: { en: 'Source', es: 'Fuente' },
} satisfies Record<string, T>;

/* ------------------------------------------------------------------ */

function build(lang: Locale): string {
  const o: string[] = [];
  const p = (...lines: string[]) => o.push(...lines, '');
  const h = (level: number, text: string) => p(`${'#'.repeat(level)} ${text}`);
  const t = (k: keyof typeof S) => L(S[k], lang);

  const canonical = `${SITE_URL}${ROUTES.home[lang]}`;

  /* --- Front matter: machine-readable provenance ------------------- */
  p(
    '---',
    `title: ${SITE_NAME}`,
    `version: "${STANDARD_VERSION}"`,
    `label: "${STANDARD_LABEL}"`,
    `status: candidate`,
    `date: ${STANDARD_DATE}`,
    `language: ${lang}`,
    `canonical: ${canonical}`,
    `author: ${AUTHOR.name}`,
    `author_url: ${AUTHOR.url}`,
    `license: ${LICENSE.id}`,
    `license_url: ${LICENSE.url}`,
    `attribution: "${attributionPlain(canonical, AUTHOR.name, lang)}"`,
    'disclosure: "The author also builds AIEmpl.com, a commercial platform in this category. This standard certifies no products and issues no seals."',
    '---',
  );

  h(1, SITE_NAME);
  p(`**${L(THESIS, lang)}**`);
  p(`> ${L(GOVERNING_PRINCIPLE, lang)}`);
  p(`**${L(PREAMBLE.label, lang)}.** ${L(PREAMBLE.text, lang)}`);
  p(`**${L(MOTIVATION.label, lang)}.** ${L(MOTIVATION.text, lang)}`);
  p(`**${L(OBJECTIVE.label, lang)}.** ${L(OBJECTIVE.text, lang)} — ${AUTHOR.name}`);

  h(2, t('howToCite'));
  p(t('citeBody'));
  p('`' + `Phillips, J. (2026). ${SITE_NAME}, ${STANDARD_LABEL}, ${lang === 'en' ? 'clause' : 'cláusula'} HWF-nn.` + '`');
  p('```', attributionPlain(canonical, AUTHOR.name, lang), '```');

  /* --- Definition -------------------------------------------------- */
  h(2, t('definition'));
  p(`> ${L(DEFINITION, lang)}`);

  h(3, t('nineTest'));
  p(table(['#', t('colName'), t('colDefinition')], PROPERTIES.map((x) => [String(x.n), L(x.name, lang), L(x.criterion, lang)])));
  p(L(PROPERTIES_CAVEAT, lang));

  h(3, t('ladder'));
  p(table([t('colTerm'), t('colPromise'), t('colBehaviour'), t('colLimit')], LADDER.map((r) => [r.term, L(r.promise, lang), L(r.behaviour, lang), L(r.limit, lang)])));

  h(3, t('ownership'));
  p(L(OWNERSHIP_BOUNDARY, lang));
  p(`**${L(FORMULA, lang)}**`);

  /* --- Clauses ----------------------------------------------------- */
  h(2, t('clauses'));
  h(3, t('reading'));
  CONFORMANCE.body.forEach((b) => p(L(b, lang)));
  h(3, L(DECLARATION.title, lang));
  p(L(DECLARATION.intro, lang));
  DECLARATION.fields.forEach((f, i) => o.push(`${i + 1}. ${L(f, lang)}`));
  o.push('');
  p(`*${L(DECLARATION.example, lang)}*`);
  BLOCKS.forEach((b) => {
    h(3, `${b.numeral} · ${L(b.title, lang)}`);
    CLAUSES.slice(b.from - 1, b.to).forEach((c) => {
      h(4, c.id);
      p(`**${L(c.text, lang)}**`);
      p(`*${t('note')}:* ${L(c.note, lang)}`);
    });
  });

  /* --- Risk classification ------------------------------------------ */
  h(2, t('risk'));
  p(L(RISK_INTRO, lang));
  p(table([t('colClass'), t('colMeaning'), t('colRegime')], RISK_CLASSES.map((r) => [L(r.name, lang), L(r.meaning, lang), L(r.regime, lang)])));
  p(L(RISK_NOTE, lang));

  /* --- Maturity ---------------------------------------------------- */
  h(2, t('maturity'));
  p(table([t('colLevel'), t('colName'), t('colDefinition')], LEVELS.map((l) => [String(l.n), L(l.name, lang), L(l.definition, lang)])));
  p(`**${t('threshold')}: ${THRESHOLD} — ${L(LEVELS[THRESHOLD].name, lang)}.**`);
  p(L(MATURITY_NOTE, lang));
  h(3, t('diagnostic'));
  DIAGNOSTIC.forEach((d, i) => o.push(`${i + 1}. ${L(d.q, lang)}`));
  o.push('');

  /* --- WRM --------------------------------------------------------- */
  h(2, t('framework'));
  p(`> ${L(WRM_DEFINITION, lang)}`);
  p(L(WRM_PREMISE, lang));

  h(3, t('stack'));
  p(table([t('colLayer'), t('colManages'), t('colOutcome')], STACK.map((l) => [L(l.name, lang), L(l.manages, lang), L(l.outcome, lang)])));

  h(3, t('classes'));
  p(table([t('colClass'), t('colCount'), t('colMeaning')], PRINCIPLE_LAYERS.map((l) => [`${l.code} — ${L(l.name, lang)}`, String(COUNTS[l.code]), L(l.definition, lang)])));
  p(`**${L(BOUNDARY_WARNING, lang)}**`);

  h(3, t('domains'));
  p(table(['#', t('colDomain'), t('colScope')], DOMAINS.map((d) => [String(d.n), L(d.name, lang), L(d.scope, lang)])));

  h(3, t('lifecycle'));
  p(table(['#', t('colStage'), t('colObjective')], LIFECYCLE.map((s) => [String(s.n), L(s.name, lang), L(s.objective, lang)])));

  h(3, t('rules'));
  WRM_RULES.forEach((r, i) => o.push(`${i + 1}. ${L(r, lang)}`));
  o.push('');

  /* --- 120 principles ---------------------------------------------- */
  h(2, t('matrix'));
  p(L(MATRIX_CAVEAT, lang));
  P_DOMAINS.forEach((d) => {
    h(3, `${d.n}. ${L(d.name, lang)}`);
    p(table(['#', t('colPrinciple'), t('colHuman'), t('colArtificial'), t('colClass')],
      PRINCIPLES.filter((x) => x.domain === d.n).map((x) => [String(x.n), L(x.principle, lang), L(x.human, lang), L(x.artificial, lang), x.cls])));
  });

  /* --- HWFA -------------------------------------------------------- */
  h(2, t('hwfa'));
  p(t('hwfaIntro'));
  h(3, t('dimensions'));
  p(table([t('colDimension'), t('colQuestion'), t('colOptions')],
    DIMENSIONS.map((d) => [L(d.name, lang), L(d.question, lang), d.options.map((x) => L(x, lang)).join(' · ')])));
  h(3, t('autonomy'));
  p(table([t('colRung'), t('colName'), t('colDetail')], AUTONOMY.map((a) => [String(a.rung), L(a.name, lang), L(a.detail, lang)])));
  p(`**${L(AUTONOMY_NOTE, lang)}**`);

  /* --- Role -------------------------------------------------------- */
  h(2, `${t('role')}: ${L(ROLE_NAME, lang)}`);
  h(3, t('mission'));
  p(`> ${L(MISSION, lang)}`);
  p(L(PLACEMENT, lang));
  h(3, t('responsibilities'));
  RESPONSIBILITIES.forEach((r, i) => o.push(`${i + 1}. ${L(r, lang)}`));
  o.push('');
  h(3, t('antiKpi'));
  p(`**${L(ANTI_KPI, lang)}**`);
  h(3, t('scorecard'));
  p(table([t('colKpi'), t('colMeasures'), ''], KPIS.map((k) => [k.name, L(k.measures, lang), k.ceo ? `**${t('toCeo')}**` : ''])));
  p(`**${L(DIRECTION_NOTE, lang)}**`);
  p(L(CEO_NOTE, lang));
  h(3, L(CAPACITY_ELEVATION.title, lang));
  p(L(CAPACITY_ELEVATION.body, lang));

  /* --- Transitions ------------------------------------------------- */
  h(2, t('transitions'));
  h(3, t('forward'));
  p(L(FORWARD_INTRO, lang));
  p(`**${L(FORWARD_PRECONDITION, lang)}**`);
  p(table(['#', t('colStep'), t('colControl')], FORWARD.map((s) => [String(s.n), L(s.name, lang), L(s.control, lang)])));
  p(`**${L(FORWARD_RULE, lang)}**`);
  h(3, t('back'));
  p(L(BACK_INTRO, lang));
  BACK.forEach((b, i) => o.push(`${i + 1}. ${L(b, lang)}`));
  o.push('');
  p(L(BACK_NOTE, lang));

  /* --- Glossary ---------------------------------------------------- */
  h(2, t('glossary'));
  p(L(GLOSSARY_NOTE, lang));
  p(`**${L(ACRONYM_RULE, lang)}**`);
  GLOSSARY_TERMS.forEach((x) => {
    p(`**${x.id} · ${L(x.term, lang)}** — ${L(x.definition, lang)}`);
  });

  /* --- Governance -------------------------------------------------- */
  h(2, t('governance'));
  h(3, t('disclosure'));
  DISCLOSURE.body.forEach((b) => p(L(b, lang)));
  h(3, L(MODEL.title, lang));
  p(`> ${L(MODEL.rule, lang)}`);
  p(L(MODEL.body, lang));
  h(3, t('seats'));
  p(table(['#', t('colSeat'), t('colProtects'), t('colHolder')],
    SEATS.map((s) => [String(s.n), L(s.discipline, lang), L(s.protects, lang), s.holder ?? `*${t('open')}*`])));
  GOV_RULES.forEach((r, i) => o.push(`${i + 1}. ${L(r, lang)}`));
  o.push('');
  h(3, t('process'));
  PROCESS.forEach((x) => o.push(`${x.n}. ${L(x.step, lang)}`));
  o.push('');
  h(3, t('status'));
  p(L(STATUS_NOTE.body, lang));
  h(3, L(OPEN_FINDINGS.title, lang));
  p(L(OPEN_FINDINGS.intro, lang));
  OPEN_FINDINGS.items.forEach((f, i) => o.push(`${i + 1}. ${L(f, lang)}`));
  o.push('');

  /* --- Licence ----------------------------------------------------- */
  h(2, t('licence'));
  p(`${L(LICENSE.name, lang)} (\`${LICENSE.id}\`) — ${LICENSE.url}`);
  p(
    lang === 'en'
      ? 'You may quote, embed, teach, translate and commercially use this material with attribution. A modified version must carry the same licence. The names "Hybrid Workforce Standard", "HybridWF", "HWF", "WRM" and "HWFA" (formerly HWFS) and the HWF-/G- identifier schemes are reserved and are not licensed: you may state that your work conforms to the standard, but you may not publish a modified version under the same name, operate a certification or badge program invoking it, or reuse its clause identifiers for altered text — a modified version renumbers its clauses.'
      : 'Podés citar, embeber, enseñar, traducir y usar comercialmente este material con atribución. Una versión modificada debe llevar la misma licencia. Los nombres «Hybrid Workforce Standard», «HybridWF», «HWF», «WRM» y «HWFA» (antes HWFS) y los esquemas de identificadores HWF-/G- quedan reservados y no están licenciados: podés declarar que tu trabajo conforma con el estándar, pero no publicar una versión modificada con el mismo nombre, operar un programa de certificación o insignias invocándolo, ni reutilizar sus identificadores de cláusula para texto alterado — una versión modificada renumera sus cláusulas.',
  );

  /* --- Sources ----------------------------------------------------- */
  h(2, t('sources'));
  (['market', 'standards', 'academic', 'books'] as Source['kind'][]).forEach((kind) => {
    h(3, L(KIND_LABEL[kind], lang));
    p(table([t('colId'), t('colSource')], SOURCES.filter((s) => s.kind === kind).map((s) => [s.id, `[${s.label}](${s.url})`])));
  });
  h(3, t('limits'));
  METHOD_NOTES.forEach((n, i) => o.push(`${i + 1}. ${L(n, lang)}`));
  o.push('');
  h(3, t('lineage'));
  CONCEPTUAL.forEach((c) => o.push(`- ${L(c, lang)}`));
  o.push('');

  /* --- Changelog --------------------------------------------------- */
  h(2, t('changelog'));
  RELEASES.forEach((r) => {
    h(3, `v${r.version} · ${r.date} · ${L(r.status, lang)}`);
    r.notes.forEach((n) => o.push(`- ${L(n, lang)}`));
    o.push('');
  });
  p(L(VERSIONING_POLICY, lang));
  h(3, L(MAPPING.title, lang));
  p(L(MAPPING.intro, lang));
  p(MAPPING.rows.map((r) => `${r.now} ← ${r.was}`).join(' · '));

  return o.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

/* --- llms.txt ------------------------------------------------------ */

function llmsTxt(): string {
  return [
    `# ${SITE_NAME}`,
    '',
    `> An open administrative standard for AI Employees: twenty-seven normative clauses, a nine-property test, the WRM (Work Resource Management) framework, a 120-principle matrix, a maturity model, and the HWFA decision instrument. Published under ${LICENSE.id}. ${STANDARD_LABEL}, ${STANDARD_DATE}.`,
    '',
    'A chatbot answers. A copilot helps. An agent executes a task. An AI Employee holds a role. A human answers for it.',
    '',
    'This standard certifies no products, scores no vendors and issues no seals. Conformance is self-declared by the organisation running the deployment. The author also builds AIEmpl.com, a commercial platform in this category; that interest is disclosed on every page.',
    '',
    '## Full text',
    '',
    `- [The standard, complete (English)](${SITE_URL}/standard.md): every clause, framework, matrix, instrument and glossary entry in one file.`,
    `- [El estándar, completo (Spanish)](${SITE_URL}/estandar.md): the same document in Spanish. Acronyms (WRM, HWFA, HWF-nn) are identical in both editions.`,
    '',
    '## Pages',
    '',
    ...(Object.keys(ROUTES) as (keyof typeof ROUTES)[])
      .filter((k) => k !== 'home')
      .map((k) => `- [${k}](${SITE_URL}${ROUTES[k].en})`),
    '',
    '## Citing',
    '',
    'Cite clauses by identifier (HWF-44), glossary entries by identifier (G-13) and principles by number (#44). Never cite by page or section number. Clause text is frozen between versions; the notes beneath each clause are commentary and may change without amending the standard.',
    '',
  ].join('\n');
}

/* ------------------------------------------------------------------ */

const out = join(import.meta.dirname, '..', 'public');
mkdirSync(out, { recursive: true });

const files: Record<Locale, string> = { en: 'standard.md', es: 'estandar.md' };
for (const lang of LOCALES) {
  const md = build(lang);
  writeFileSync(join(out, files[lang]), md);
  console.log(`wrote public/${files[lang]} (${(md.length / 1024).toFixed(1)} KB)`);
}

writeFileSync(join(out, 'llms.txt'), llmsTxt());
console.log('wrote public/llms.txt');
