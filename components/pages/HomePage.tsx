import Link from 'next/link';
import { ArrowRight, Ban, ScrollText, SlidersHorizontal } from 'lucide-react';
import Reveal from '../Reveal';
import { Section, SectionHeading } from '../Section';
import { DEFINITION, LADDER, PROPERTIES, THESIS } from '@/lib/definition';
import { WRM_DEFINITION, PRINCIPLE_LAYERS } from '@/lib/wrm';
import { CLAUSES } from '@/lib/standard';
import { COUNTS } from '@/lib/principles';
import { LEVELS, THRESHOLD } from '@/lib/maturity';
import { UI } from '@/lib/i18n';
import { STANDARD_VERSION, route, type Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Open administrative standard · v', es: 'Estándar administrativo abierto · v' },
  lede: {
    en: 'The category already exists in the market. What is missing is the administrative layer: what turns an agent into a governable member of the workforce, who answers for it, what it may decide, and how anyone can tell a work resource apart from a commercial metaphor.',
    es: 'La categoría ya existe en el mercado. Lo que falta es la capa administrativa: qué convierte a un agente en un miembro gobernable de la fuerza laboral, quién responde por él, qué puede decidir, y cómo distinguir un recurso de trabajo de una metáfora comercial.',
  },
  readStandard: { en: 'Read the standard', es: 'Leer el estándar' },
  runAssessment: { en: 'Run the assessment', es: 'Hacer la evaluación' },
  ladderTitle: { en: 'Where the boundary falls', es: 'Dónde cae la frontera' },
  ladderLede: {
    en: 'Each rung is a legitimate destination. The category only becomes useful once it stops applying to everything.',
    es: 'Cada peldaño es un destino legítimo. La categoría solo se vuelve útil cuando deja de aplicar a todo.',
  },
  whatTitle: { en: 'What this is, and what it refuses to be', es: 'Qué es esto, y qué se niega a ser' },
  isTitle: { en: 'It is', es: 'Es' },
  isNotTitle: { en: 'It is not', es: 'No es' },
  is: {
    en: [
      'A test an organisation can run on its own deployment.',
      'Seventeen normative clauses, cited by identifier.',
      'A framework for deciding Human, Artificial or Hybrid before choosing a tool.',
      'Self-declared conformance, published if the organisation chooses.',
    ],
    es: [
      'Un test que una organización puede aplicar a su propio deployment.',
      'Diecisiete cláusulas normativas, citables por identificador.',
      'Un marco para decidir Humano, Artificial o Híbrido antes de elegir herramienta.',
      'Conformidad autodeclarada, publicable si la organización lo decide.',
    ],
  },
  isNot: {
    en: [
      'A certification. No product is scored, no seal is issued.',
      'A vendor ranking or a maturity assessment sold to competitors.',
      'A funnel for the author’s platform — which, under HWF-71, can never claim conformance with this standard.',
      'A legal claim that software can be employed.',
    ],
    es: [
      'Una certificación. Ningún producto se puntúa, ningún sello se emite.',
      'Un ranking de vendors ni un assessment vendido a competidores.',
      'Un embudo hacia la plataforma del autor — que, bajo HWF-71, no puede jamás reclamar conformidad con este estándar.',
      'Una afirmación jurídica de que el software puede ser empleado.',
    ],
  },
  defTitle: { en: 'The definition', es: 'La definición' },
  ninePoints: {
    en: 'Nine properties. Miss one and it is an agent, which is fine as long as nobody calls it an employee.',
    es: 'Nueve propiedades. Si falta una es un agente, lo cual está bien mientras nadie lo llame empleado.',
  },
  clausesTitle: { en: 'The standard', es: 'El estándar' },
  clausesLede: {
    en: 'Seventeen clauses, none of them optional. A short standard that fully binds is more useful than a long one that mostly suggests.',
    es: 'Diecisiete cláusulas, ninguna opcional. Un estándar corto que obliga del todo es más útil que uno largo que mayormente sugiere.',
  },
  allClauses: { en: 'All twenty-seven clauses', es: 'Las veintisiete cláusulas' },
  artTitle: { en: 'The framework underneath', es: 'El marco que lo sostiene' },
  artLede: {
    en: 'The standard governs the occupant. WRM governs the work, and the work comes first.',
    es: 'El estándar gobierna al ocupante. WRM gobierna el trabajo, y el trabajo va primero.',
  },
  toolTitle: { en: 'The instrument', es: 'El instrumento' },
  toolLede: {
    en: 'Twelve dimensions, one responsibility at a time. It returns an argument you can defend in a meeting rather than a number you can hide behind.',
    es: 'Doce dimensiones, una responsabilidad por vez. Devuelve un argumento que podés defender en una reunión, no un número detrás del cual esconderte.',
  },
  levelNote: { en: 'The category threshold sits at level', es: 'El umbral de la categoría está en el nivel' },
};

export default function HomePage({ lang }: { lang: Locale }) {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <div className="aurora border-b border-border">
        <div className="container-x py-20 sm:py-28">
          <p className="eyebrow">
            {C.eyebrow[lang]}
            {STANDARD_VERSION} · {UI.statusProposal[lang]}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-6xl">
            {THESIS[lang]}
          </h1>
          <p className="lede mt-6 max-w-2xl">{C.lede[lang]}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={route('standard', lang)} className="btn-primary">
              <ScrollText size={17} />
              {C.readStandard[lang]}
            </Link>
            <Link href={route('hwfa', lang)} className="btn-outline">
              <SlidersHorizontal size={17} />
              {C.runAssessment[lang]}
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Vocabulary ladder ---------- */}
      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Vocabulary' : 'Vocabulario'}
          title={C.ladderTitle[lang]}
          lede={C.ladderLede[lang]}
        />
        <div className="mt-10 overflow-x-auto">
          <table className="table-x min-w-[44rem]">
            <thead>
              <tr>
                <th className="w-44">{lang === 'en' ? 'Term' : 'Término'}</th>
                <th>{lang === 'en' ? 'Core promise' : 'Promesa principal'}</th>
                <th>{lang === 'en' ? 'Typical behaviour' : 'Comportamiento típico'}</th>
                <th>{lang === 'en' ? 'Main limit' : 'Límite principal'}</th>
              </tr>
            </thead>
            <tbody>
              {LADDER.map((r, i) => (
                <tr key={r.term} className={i === LADDER.length - 1 ? 'bg-accent/5' : ''}>
                  <td
                    className={
                      i === LADDER.length - 1
                        ? 'font-semibold text-brand'
                        : 'font-medium text-fg'
                    }
                  >
                    {r.term}
                  </td>
                  <td>{r.promise[lang]}</td>
                  <td>{r.behaviour[lang]}</td>
                  <td>{r.limit[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ---------- Definition ---------- */}
      <Section className="border-y border-border bg-raised">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="eyebrow">{C.defTitle[lang]}</p>
            <blockquote className="mt-4 border-l-2 border-accent pl-5 font-display text-xl leading-relaxed sm:text-2xl">
              {DEFINITION[lang]}
            </blockquote>
            <Link
              href={route('definition', lang)}
              className="btn-ghost mt-6 text-sm"
            >
              {lang === 'en' ? 'The nine-property test' : 'El test de nueve propiedades'}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm leading-relaxed text-muted">{C.ninePoints[lang]}</p>
            <ol className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {PROPERTIES.map((p) => (
                <li key={p.n} className="flex items-baseline gap-2.5">
                  <span className="clause-id">{String(p.n).padStart(2, '0')}</span>
                  <span className="text-sm font-medium text-fg">{p.name[lang]}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Is / is not ---------- */}
      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Scope' : 'Alcance'}
          title={C.whatTitle[lang]}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <h3 className="font-display text-lg font-semibold">{C.isTitle[lang]}</h3>
              <ul className="mt-4 space-y-3">
                {C.is[lang].map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <ArrowRight size={15} className="mt-0.5 shrink-0 text-brand" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card h-full">
              <h3 className="font-display text-lg font-semibold">{C.isNotTitle[lang]}</h3>
              <ul className="mt-4 space-y-3">
                {C.isNot[lang].map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <Ban size={15} className="mt-0.5 shrink-0 text-adapted" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Clauses preview ---------- */}
      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={`v${STANDARD_VERSION}`}
          title={C.clausesTitle[lang]}
          lede={C.clausesLede[lang]}
        />
        <ul className="mt-10 space-y-4">
          {CLAUSES.slice(0, 5).map((c) => (
            <li key={c.id} className="flex gap-4">
              <span className="clause-id">{c.id}</span>
              <p className="text-[1.0625rem] leading-relaxed text-fg">{c.text[lang]}</p>
            </li>
          ))}
        </ul>
        <Link href={route('standard', lang)} className="btn-ghost mt-8 text-sm">
          {C.allClauses[lang]}
          <ArrowRight size={15} />
        </Link>
      </Section>

      {/* ---------- WRM ---------- */}
      <Section>
        <SectionHeading
          eyebrow="WRM"
          title={C.artTitle[lang]}
          lede={C.artLede[lang]}
        />
        <Reveal>
          <p className="prose-x mt-8">{WRM_DEFINITION[lang]}</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PRINCIPLE_LAYERS.map((l, i) => (
            <Reveal key={l.code} delay={i * 0.07}>
              <div className="card h-full">
                <div className="flex items-baseline justify-between">
                  <span className="clause-id">{l.code}</span>
                  <span className="font-display text-2xl font-semibold text-brand">
                    {COUNTS[l.code]}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">{l.name[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{l.definition[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span>
              {C.levelNote[lang]} <strong className="text-brand">{THRESHOLD}</strong> —{' '}
              {LEVELS[THRESHOLD].name[lang]}
            </span>
            <Link href={route('framework', lang)} className="btn-ghost">
              {lang === 'en' ? 'The WRM framework' : 'El marco WRM'}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Tool ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <div className="aurora rounded-3xl border border-border p-10 sm:p-14">
            <p className="eyebrow">HWFA</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              {C.toolTitle[lang]}
            </h2>
            <p className="lede mt-4 max-w-2xl">{C.toolLede[lang]}</p>
            <Link href={route('hwfa', lang)} className="btn-primary mt-8">
              <SlidersHorizontal size={17} />
              {C.runAssessment[lang]}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
