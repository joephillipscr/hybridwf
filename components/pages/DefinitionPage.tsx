import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import {
  DEFINITION,
  GOVERNING_PRINCIPLE,
  LADDER,
  OWNERSHIP_BOUNDARY,
  PROPERTIES,
  PROPERTIES_CAVEAT,
} from '@/lib/definition';
import { route, type Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Definition', es: 'Definición' },
  title: { en: 'What counts as an AI Employee', es: 'Qué califica como AI Employee' },
  lede: {
    en: 'The category is worth something only if it excludes things. Nine properties, and a system missing several of them is an agent — a perfectly respectable thing to be.',
    es: 'La categoría vale algo solo si excluye cosas. Nueve propiedades, y un sistema al que le faltan varias es un agente — algo perfectamente respetable.',
  },
  testTitle: { en: 'The nine-property test', es: 'El test de nueve propiedades' },
  ladderTitle: { en: 'The vocabulary ladder', es: 'La escalera de vocabulario' },
  ladderLede: {
    en: 'Every rung below is useful. None of them needs to pretend to a maturity it does not have.',
    es: 'Todos los peldaños de abajo son útiles. Ninguno necesita fingir una madurez que no tiene.',
  },
  ownershipTitle: { en: 'Task ownership versus role ownership', es: 'Task ownership frente a role ownership' },
  maturity: { en: 'The maturity model', es: 'El modelo de madurez' },
};

export default function DefinitionPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <Reveal>
          <blockquote className="max-w-4xl border-l-2 border-accent pl-6 font-display text-2xl leading-snug sm:text-3xl">
            {DEFINITION[lang]}
          </blockquote>
        </Reveal>
      </Section>

      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Minimum test' : 'Test mínimo'}
          title={C.testTitle[lang]}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((p, i) => (
            <Reveal key={p.n} delay={(i % 3) * 0.06}>
              <div className="card h-full">
                <span className="clause-id">{String(p.n).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.name[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.criterion[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="prose-x mt-10 max-w-3xl">{PROPERTIES_CAVEAT[lang]}</p>
        </Reveal>
      </Section>

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
                      i === LADDER.length - 1 ? 'font-semibold text-brand' : 'font-medium text-fg'
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

      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold">{C.ownershipTitle[lang]}</h2>
            <p className="prose-x mt-4">{OWNERSHIP_BOUNDARY[lang]}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-raised">
              <p className="eyebrow">
                {lang === 'en' ? 'Governing principle' : 'Principio rector'}
              </p>
              <p className="mt-3 font-display text-lg leading-relaxed">
                {GOVERNING_PRINCIPLE[lang]}
              </p>
            </div>
            <Link href={route('maturity', lang)} className="btn-ghost mt-6 text-sm">
              {C.maturity[lang]}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
