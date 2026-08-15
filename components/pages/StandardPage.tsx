import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import CiteBox from '../CiteBox';
import Reveal from '../Reveal';
import { PageHeader, Section } from '../Section';
import { BLOCKS, CLAUSES, CONFORMANCE, DECLARATION, MOTIVATION, OBJECTIVE, PREAMBLE, RISK_CLASSES, RISK_INTRO, RISK_NOTE } from '@/lib/standard';
import { UI } from '@/lib/i18n';
import { AUTHOR, SITE_NAME, SITE_URL, STANDARD_LABEL, route, type Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Normative text', es: 'Texto normativo' },
  title: { en: 'The Hybrid Workforce Standard', es: 'El Hybrid Workforce Standard' },
  lede: {
    en: 'Twenty-seven clauses that separate a governable work resource from a commercial metaphor. Conformance is self-declared: no product is scored here and no seal is issued.',
    es: 'Veintisiete cláusulas que separan un recurso de trabajo gobernable de una metáfora comercial. La conformidad es autodeclarada: acá no se puntúa ningún producto ni se emite ningún sello.',
  },
  next: { en: 'How the standard is governed', es: 'Cómo se gobierna el estándar' },
  riskTitle: { en: 'Risk classification', es: 'Clasificación de riesgo' },
  riskClass: { en: 'Class', es: 'Clase' },
  riskMeaning: { en: 'Meaning', es: 'Significado' },
  riskRegime: { en: 'Operating regime', es: 'Régimen operativo' },
  machineTitle: { en: 'Machine-readable', es: 'Legible por máquinas' },
  machineBody: {
    en: 'The whole standard as one Markdown file: every clause, the framework, the 120-principle matrix, the instrument and the glossary. Built for pasting into a model context window or ingesting into a retrieval index.',
    es: 'El estándar entero en un archivo Markdown: cada cláusula, el marco, la matriz de 120 principios, el instrumento y el glosario. Pensado para pegarlo en la ventana de contexto de un modelo o ingerirlo en un índice de recuperación.',
  },
  archTitle: { en: 'Eight blocks, one architecture', es: 'Ocho bloques, una arquitectura' },
  archLede: {
    en: 'The first digit of every clause identifier names its block; the second is its position within it. A short standard is easier to hold in memory when it is also easy to hold in view.',
    es: 'El primer dígito de cada identificador de cláusula nombra su bloque; el segundo es su posición dentro de él. Un estándar corto es más fácil de retener cuando también es fácil de ver de un vistazo.',
  },
  archBlock: { en: 'Block', es: 'Bloque' },
  archClauses: { en: 'Clauses', es: 'Cláusulas' },
};

export default function StandardPage({ lang }: { lang: Locale }) {
  const citation =
    lang === 'en'
      ? `Phillips, J. (2026). ${SITE_NAME}, ${STANDARD_LABEL}, clause HWF-nn. ${SITE_URL}/standard/`
      : `Phillips, J. (2026). ${SITE_NAME}, ${STANDARD_LABEL}, cláusula HWF-nn. ${SITE_URL}/es/estandar/`;

  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{PREAMBLE.label[lang]}</p>
            <p className="mt-3 font-display text-xl leading-snug text-fg sm:text-[1.35rem]">
              {PREAMBLE.text[lang]}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <figure className="mt-12 max-w-3xl border-l-2 border-accent pl-6">
            <figcaption className="eyebrow">{MOTIVATION.label[lang]}</figcaption>
            <blockquote className="mt-3 font-display text-xl leading-snug text-fg sm:text-[1.35rem]">
              {MOTIVATION.text[lang]}
            </blockquote>
            <figcaption className="eyebrow mt-8">{OBJECTIVE.label[lang]}</figcaption>
            <blockquote className="mt-3 font-display text-xl leading-snug text-fg sm:text-[1.35rem]">
              {OBJECTIVE.text[lang]}
            </blockquote>
            <p className="mt-3 text-sm text-muted">
              —{' '}
              <a href={AUTHOR.url} className="underline decoration-border underline-offset-4 hover:text-fg">
                {AUTHOR.name}
              </a>
            </p>
          </figure>
        </Reveal>
      </Section>

      <Section className="border-y border-border bg-raised">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">{C.archTitle[lang]}</h2>
          <p className="prose-x mt-4 max-w-3xl">{C.archLede[lang]}</p>
          <div className="mt-8 overflow-x-auto">
            <table className="table-x min-w-[32rem]">
              <thead>
                <tr>
                  <th>{C.archBlock[lang]}</th>
                  <th>{C.archClauses[lang]}</th>
                </tr>
              </thead>
              <tbody>
                {BLOCKS.map((b) => {
                  const first = CLAUSES[b.from - 1];
                  const last = CLAUSES[b.to - 1];
                  const range = first.id === last.id ? first.id : `${first.id}–${last.id.split('-')[1]}`;
                  return (
                    <tr key={b.numeral}>
                      <td className="font-medium text-fg">
                        <a href={`#${first.id.toLowerCase()}`} className="hover:text-brand">
                          {b.numeral} · {b.title[lang]}
                        </a>
                      </td>
                      <td className="clause-id font-mono">{range}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:items-start">
          <div>
            <div className="space-y-16">
              {BLOCKS.map((b) => (
                <section key={b.numeral}>
                  <h2 className="eyebrow mb-8">{b.numeral} · {b.title[lang]}</h2>
                  <ol className="space-y-10">
                    {CLAUSES.slice(b.from - 1, b.to).map((c) => (
                      <li key={c.id} id={c.id.toLowerCase()} className="scroll-mt-24">
                  <Reveal>
                    <div className="flex items-baseline gap-4">
                      <span className="clause-id">{c.id}</span>
                      <div className="rule-line mt-2" />
                    </div>
                    <p className="mt-4 font-display text-xl leading-snug text-fg sm:text-[1.4rem]">
                      {c.text[lang]}
                    </p>
                    <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-muted">
                      {c.note[lang]}
                    </p>
                  </Reveal>
                </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="card-raised">
              <h2 className="eyebrow">{CONFORMANCE.title[lang]}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                {CONFORMANCE.body.map((p, i) => (
                  <p key={i}>{p[lang]}</p>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="eyebrow">{DECLARATION.title[lang]}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{DECLARATION.intro[lang]}</p>
              <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted">
                {DECLARATION.fields.map((f, i) => (
                  <li key={i}>{f[lang]}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm italic leading-relaxed text-fg">{DECLARATION.example[lang]}</p>
            </div>

            <CiteBox lang={lang} citation={citation} />

            <div className="card">
              <h2 className="eyebrow">{C.machineTitle[lang]}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {C.machineBody[lang]}
              </p>
              <a
                href={lang === 'en' ? '/standard.md' : '/estandar.md'}
                className="btn-ghost mt-4 text-sm"
                download
              >
                <FileText size={15} />
                {lang === 'en' ? 'standard.md' : 'estandar.md'}
              </a>
            </div>

            <div className="card">
              <dl className="space-y-2.5 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">{UI.version[lang]}</dt>
                  <dd className="font-mono font-semibold text-fg">{STANDARD_LABEL}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">{UI.status[lang]}</dt>
                  <dd className="text-right font-medium text-brand">
                    {UI.statusProposal[lang]}
                  </dd>
                </div>
              </dl>
              <Link href={route('governance', lang)} className="btn-ghost mt-4 text-sm">
                {C.next[lang]}
                <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">{C.riskTitle[lang]}</h2>
          <p className="prose-x mt-4 max-w-3xl">{RISK_INTRO[lang]}</p>
          <div className="mt-6 overflow-x-auto">
            <table className="table-x min-w-[40rem]">
              <thead>
                <tr>
                  <th>{C.riskClass[lang]}</th>
                  <th>{C.riskMeaning[lang]}</th>
                  <th>{C.riskRegime[lang]}</th>
                </tr>
              </thead>
              <tbody>
                {RISK_CLASSES.map((r, i) => (
                  <tr key={i}>
                    <td className={i === 0 ? 'font-semibold text-brand' : 'font-medium text-fg'}>{r.name[lang]}</td>
                    <td>{r.meaning[lang]}</td>
                    <td>{r.regime[lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">{RISK_NOTE[lang]}</p>
        </Reveal>
      </Section>
    </>
  );
}
