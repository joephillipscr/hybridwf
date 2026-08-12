import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import {
  ART_DEFINITION,
  ART_PREMISE,
  BOUNDARY_WARNING,
  DOMAINS,
  LIFECYCLE,
  PRINCIPLE_LAYERS,
  RULES,
  STACK,
} from '@/lib/art';
import { COUNTS } from '@/lib/principles';
import { route, type Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Framework', es: 'Marco' },
  title: { en: 'ART — Work Resource Administration', es: 'ART — Administración de Recursos de Trabajo' },
  lede: {
    en: 'Design the work first. Decide whether a human, an artificial resource or a hybrid should do it second. The post exists before its occupant.',
    es: 'Primero se diseña el trabajo. Después se decide si lo ejecuta un humano, un recurso artificial o un híbrido. El puesto existe antes que su ocupante.',
  },
  stackTitle: { en: 'Where ART sits', es: 'Dónde se ubica ART' },
  stackLede: {
    en: 'Human resources and artificial resources should not be designed as isolated disciplines. Both live inside a higher one.',
    es: 'Recursos humanos y recursos artificiales no deberían diseñarse como disciplinas aisladas. Ambos viven dentro de una superior.',
  },
  layersTitle: { en: 'Three classes of principle', es: 'Tres clases de principio' },
  layersLede: {
    en: 'This separation avoids two errors: anthropomorphising software unnecessarily, and managing powerful agents as if they were simple tools.',
    es: 'Esta separación evita dos errores: antropomorfizar software innecesariamente y administrar agentes poderosos como si fueran simples herramientas.',
  },
  domainsTitle: { en: 'The ten domains', es: 'Los diez dominios' },
  lifecycleTitle: { en: 'The lifecycle of a work resource', es: 'El ciclo de vida del recurso de trabajo' },
  lifecycleLede: {
    en: 'Automating does not remove management. It makes it continuous.',
    es: 'Automatizar no elimina el management. Lo vuelve continuo.',
  },
  rulesTitle: { en: 'Ten non-negotiable rules', es: 'Diez reglas no negociables' },
  matrix: { en: 'The 120-principle matrix', es: 'La matriz de 120 principios' },
};

export default function FrameworkPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <Reveal>
          <blockquote className="max-w-4xl border-l-2 border-accent pl-6 font-display text-xl leading-relaxed sm:text-2xl">
            {ART_DEFINITION[lang]}
          </blockquote>
          <p className="prose-x mt-8">{ART_PREMISE[lang]}</p>
        </Reveal>
      </Section>

      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Architecture' : 'Arquitectura'}
          title={C.stackTitle[lang]}
          lede={C.stackLede[lang]}
        />
        <div className="mt-10 space-y-3">
          {STACK.map((l, i) => (
            <Reveal key={l.key} delay={i * 0.05}>
              <div
                className={`grid gap-3 rounded-2xl border p-6 sm:grid-cols-3 sm:gap-6 ${
                  l.key === 'art' ? 'border-accent bg-accent/5' : 'border-border bg-surface'
                }`}
              >
                <h3
                  className={`font-display text-lg font-semibold ${
                    l.key === 'art' ? 'text-brand' : ''
                  }`}
                >
                  {l.name[lang]}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{l.manages[lang]}</p>
                <p className="text-sm leading-relaxed text-muted">{l.outcome[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Classification' : 'Clasificación'}
          title={C.layersTitle[lang]}
          lede={C.layersLede[lang]}
        />
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
                <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-muted">
                  {l.examples[lang]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="card-raised mt-8 max-w-3xl border-l-2 border-l-adapted">
            <p className="text-[1.0625rem] leading-relaxed">{BOUNDARY_WARNING[lang]}</p>
          </div>
          <Link href={route('principles', lang)} className="btn-ghost mt-8 text-sm">
            {C.matrix[lang]}
            <ArrowRight size={15} />
          </Link>
        </Reveal>
      </Section>

      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Scope' : 'Alcance'}
          title={C.domainsTitle[lang]}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {DOMAINS.map((d, i) => (
            <Reveal key={d.n} delay={(i % 2) * 0.06}>
              <div className="flex gap-4">
                <span className="clause-id">{String(d.n).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{d.name[lang]}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{d.scope[lang]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Lifecycle' : 'Ciclo de vida'}
          title={C.lifecycleTitle[lang]}
          lede={C.lifecycleLede[lang]}
        />
        <div className="mt-10 overflow-x-auto">
          <table className="table-x min-w-[36rem]">
            <thead>
              <tr>
                <th className="w-14">#</th>
                <th className="w-40">{lang === 'en' ? 'Stage' : 'Etapa'}</th>
                <th>{lang === 'en' ? 'Objective' : 'Objetivo'}</th>
              </tr>
            </thead>
            <tbody>
              {LIFECYCLE.map((s) => (
                <tr key={s.n}>
                  <td className="font-mono text-xs">{String(s.n).padStart(2, '0')}</td>
                  <td className="font-medium text-fg">{s.name[lang]}</td>
                  <td>{s.objective[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="border-t border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Non-negotiable' : 'No negociable'}
          title={C.rulesTitle[lang]}
        />
        <ol className="mt-10 max-w-4xl space-y-5">
          {RULES.map((r, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <li className="flex gap-4">
                <span className="clause-id">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[1.0625rem] leading-relaxed text-fg">{r[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
