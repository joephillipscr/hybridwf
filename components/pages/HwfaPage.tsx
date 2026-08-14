import HwfaTool from '../HwfaTool';
import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import { AUTONOMY, AUTONOMY_NOTE } from '@/lib/hwfa';
import type { Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Instrument', es: 'Instrumento' },
  title: { en: 'Hybrid Workforce Fit Assessment', es: 'Hybrid Workforce Fit Assessment' },
  lede: {
    en: 'Decide whether a responsibility should be Human, Deterministic automation, Artificial or Hybrid — and at what autonomy it should start. Thirteen dimensions in three stages — eligibility, then risk, then economics — one responsibility at a time.',
    es: 'Decidí si una responsabilidad debe ser Humana, Automatización determinista, Artificial o Híbrida — y en qué autonomía debería empezar. Trece dimensiones en tres etapas — elegibilidad, luego riesgo, luego economía — una responsabilidad por vez.',
  },
  whyTitle: { en: 'Why there is no score', es: 'Por qué no hay puntaje' },
  why: {
    en: [
      'A number would be easier to build and easier to abuse. A manager who has already decided can pick weights until the arithmetic agrees, and then present the result as objectivity. The instrument would become the justification rather than the analysis. That is also why the name changed from Score to Assessment: an instrument that refuses to produce a number should not be called a Score.',
      'So this returns a structured argument instead: an allocation, a risk class, a starting autonomy rung, the specific answers that decided it, the controls that follow, and the conditions that would change it. Two managers may reach different conclusions because they operate under different risk — but both should be able to explain theirs.',
      'It does not replace the manager. It improves the quality of the questions the manager has to answer.',
    ],
    es: [
      'Un número sería más fácil de construir y más fácil de abusar. Un manager que ya decidió puede elegir pesos hasta que la aritmética le dé la razón, y después presentar el resultado como objetividad. El instrumento se convertiría en la justificación en vez del análisis. Por eso también cambió el nombre de Score a Assessment: un instrumento que se niega a producir un número no debería llamarse Score.',
      'Por eso esto devuelve un argumento estructurado: una asignación, una clase de riesgo, un peldaño inicial de autonomía, las respuestas concretas que lo decidieron, los controles que se derivan y las condiciones que lo cambiarían. Dos managers pueden llegar a conclusiones distintas porque operan bajo riesgos distintos — pero ambos deberían poder explicar la suya.',
      'No sustituye al manager. Mejora la calidad de las preguntas que el manager debe responder.',
    ],
  },
  ladderTitle: { en: 'The autonomy ladder', es: 'La escalera de autonomía' },
  ladderLede: {
    en: 'The assessment recommends where to start. Movement up the ladder is earned with evidence, and movement back down is a normal management action, not a failure.',
    es: 'La evaluación recomienda dónde empezar. Subir la escalera se gana con evidencia, y bajar es una acción normal de management, no un fracaso.',
  },
};

export default function HwfaPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <HwfaTool lang={lang} />
      </Section>

      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Design note' : 'Nota de diseño'}
          title={C.whyTitle[lang]}
        />
        <div className="prose-x mt-6">
          {C.why[lang].map((p, i) => (
            <p key={i} className={i > 0 ? 'mt-4' : ''}>
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Autonomy' : 'Autonomía'}
          title={C.ladderTitle[lang]}
          lede={C.ladderLede[lang]}
        />
        <ol className="mt-10 space-y-3">
          {AUTONOMY.map((a, i) => (
            <Reveal key={a.rung} delay={i * 0.04}>
              <li className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:gap-6">
                <span className="font-display text-3xl font-semibold text-muted">{a.rung}</span>
                <h3 className="font-display text-lg font-semibold sm:w-56 sm:shrink-0">
                  {a.name[lang]}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{a.detail[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <p className="card-raised mt-8 max-w-3xl border-l-2 border-l-accent text-[1.0625rem] leading-relaxed">
            {AUTONOMY_NOTE[lang]}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
