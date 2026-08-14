import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import {
  BACK,
  BACK_INTRO,
  BACK_NOTE,
  FORWARD,
  FORWARD_INTRO,
  FORWARD_PRECONDITION,
  FORWARD_RULE,
} from '@/lib/transitions';
import type { Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Playbooks', es: 'Playbooks' },
  title: { en: 'The road runs both ways', es: 'La carretera tiene dos direcciones' },
  lede: {
    en: 'Most AI strategies imagine a one-way street from human to artificial. A serious framework has to describe the return trip with the same precision — and define it before the pilot, not after the results are known.',
    es: 'La mayoría de las estrategias de IA imaginan una calle de un solo sentido, de humano a artificial. Un framework serio debe describir el viaje de vuelta con la misma precisión — y definirlo antes del piloto, no después de conocer los resultados.',
  },
  forwardTitle: { en: 'Human → Artificial', es: 'Humano → Artificial' },
  backTitle: { en: 'Artificial → Human', es: 'Artificial → Humano' },
};

export default function TransitionsPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Twelve steps' : 'Doce pasos'}
          title={C.forwardTitle[lang]}
          lede={FORWARD_INTRO[lang]}
        />
        <p className="mt-8 max-w-3xl border-l-2 border-accent pl-5 text-[0.95rem] leading-relaxed text-fg">
          {FORWARD_PRECONDITION[lang]}
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="table-x min-w-[40rem]">
            <thead>
              <tr>
                <th className="w-14">#</th>
                <th className="w-52">{lang === 'en' ? 'Step' : 'Paso'}</th>
                <th>{lang === 'en' ? 'Control' : 'Control'}</th>
              </tr>
            </thead>
            <tbody>
              {FORWARD.map((s) => (
                <tr key={s.n}>
                  <td className="font-mono text-xs">{String(s.n).padStart(2, '0')}</td>
                  <td className="font-medium text-fg">{s.name[lang]}</td>
                  <td>{s.control[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Reveal>
          <p className="card-raised mt-8 max-w-3xl border-l-2 border-l-accent font-display text-lg leading-relaxed">
            {FORWARD_RULE[lang]}
          </p>
        </Reveal>
      </Section>

      <Section className="border-t border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Seven triggers' : 'Siete disparadores'}
          title={C.backTitle[lang]}
          lede={BACK_INTRO[lang]}
        />
        <ol className="mt-10 max-w-4xl space-y-5">
          {BACK.map((b, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <li className="flex gap-4">
                <span className="clause-id">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[1.0625rem] leading-relaxed text-fg">{b[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <p className="prose-x mt-10 max-w-3xl">{BACK_NOTE[lang]}</p>
        </Reveal>
      </Section>
    </>
  );
}
