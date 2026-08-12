import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import { DIAGNOSTIC, LEVELS, MATURITY_NOTE, THRESHOLD } from '@/lib/maturity';
import type { Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Maturity', es: 'Madurez' },
  title: { en: 'Seven levels, one threshold', es: 'Siete niveles, un umbral' },
  lede: {
    en: 'From Tool to Hybrid Enterprise. Levels 0 to 3 are legitimate destinations, not failures — a well-placed assistant can produce more value than a supposed AI Employee nobody supervises.',
    es: 'De Herramienta a Empresa Híbrida. Los niveles 0 a 3 son destinos legítimos, no fracasos — un asistente bien ubicado puede producir más valor que un supuesto AI Employee al que nadie supervisa.',
  },
  threshold: { en: 'Category threshold', es: 'Umbral de la categoría' },
  diagTitle: { en: 'Diagnose what you actually have', es: 'Diagnosticá qué tenés realmente' },
  diagLede: {
    en: 'Take your most important AI implementations and examine them without the name the vendor gave them. Five questions, answered honestly.',
    es: 'Tomá tus implementaciones de IA más importantes y examinálas sin el nombre que les dio el proveedor. Cinco preguntas, respondidas con honestidad.',
  },
  diagClose: {
    en: 'You may find twenty agents and zero AI Employees. That does not invalidate the work done — it shows what is missing before responsibility can be widened: contract, context, authority, metrics, observability or a manager.',
    es: 'Quizá descubras veinte agentes y cero AI Employees. Eso no invalida el trabajo realizado — muestra qué falta antes de ampliar responsabilidad: contrato, contexto, autoridad, métricas, observabilidad o manager.',
  },
};

export default function MaturityPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <ol className="space-y-3">
          {LEVELS.map((l, i) => {
            const atThreshold = l.n === THRESHOLD;
            return (
              <Reveal key={l.n} delay={i * 0.04}>
                <li
                  className={`flex flex-col gap-3 rounded-2xl border p-6 sm:flex-row sm:items-center sm:gap-6 ${
                    atThreshold
                      ? 'border-accent bg-accent/5 shadow-lift'
                      : 'border-border bg-surface'
                  }`}
                >
                  <span
                    className={`font-display text-3xl font-semibold ${
                      atThreshold ? 'text-brand' : 'text-muted'
                    }`}
                  >
                    {l.n}
                  </span>
                  <div className="sm:w-52 sm:shrink-0">
                    <h2
                      className={`font-display text-lg font-semibold ${
                        atThreshold ? 'text-brand' : ''
                      }`}
                    >
                      {l.name[lang]}
                    </h2>
                    {atThreshold && (
                      <p className="mt-0.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
                        {C.threshold[lang]}
                      </p>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{l.definition[lang]}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal>
          <p className="prose-x mt-10 max-w-3xl">{MATURITY_NOTE[lang]}</p>
        </Reveal>
      </Section>

      <Section className="border-t border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Self-diagnosis' : 'Autodiagnóstico'}
          title={C.diagTitle[lang]}
          lede={C.diagLede[lang]}
        />
        <ol className="mt-10 max-w-3xl space-y-4">
          {DIAGNOSTIC.map((d, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <li className="flex gap-4">
                <span className="clause-id">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[1.0625rem] leading-relaxed text-fg">{d.q[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <p className="prose-x mt-10 max-w-3xl">{C.diagClose[lang]}</p>
        </Reveal>
      </Section>
    </>
  );
}
