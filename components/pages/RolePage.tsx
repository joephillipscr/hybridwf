import { AlertTriangle } from 'lucide-react';
import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import {
  ANTI_KPI,
  CAPACITY_ELEVATION,
  CEO_NOTE,
  DIRECTION_NOTE,
  KPIS,
  MISSION,
  PLACEMENT,
  RESPONSIBILITIES,
  ROLE_NAME,
} from '@/lib/role';
import type { Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'The role', es: 'El rol' },
  lede: {
    en: 'Someone has to own the architecture of the work itself — not the technology, not the headcount. This is what that person does and, just as importantly, how they must never be measured.',
    es: 'Alguien tiene que ser dueño de la arquitectura del trabajo en sí — no de la tecnología, no del headcount. Esto es lo que esa persona hace y, con la misma importancia, cómo nunca debe medirse.',
  },
  missionTitle: { en: 'Mission', es: 'Misión' },
  respTitle: { en: 'Responsibilities', es: 'Responsabilidades' },
  antiTitle: { en: 'The anti-KPI', es: 'El anti-KPI' },
  scorecardTitle: { en: 'Scorecard', es: 'Scorecard' },
  scorecardLede: {
    en: 'Twenty-one indicators. Six of them belong on an executive dashboard; the rest belong to the person running the workforce.',
    es: 'Veintiún indicadores. Seis pertenecen a un dashboard ejecutivo; el resto pertenecen a quien dirige el workforce.',
  },
  ceo: { en: 'To the CEO', es: 'Al CEO' },
};

export default function RolePage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={ROLE_NAME[lang]} lede={C.lede[lang]} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="eyebrow">{C.missionTitle[lang]}</p>
            <blockquote className="mt-4 border-l-2 border-accent pl-6 font-display text-xl leading-relaxed sm:text-2xl">
              {MISSION[lang]}
            </blockquote>
            <p className="prose-x mt-8">{PLACEMENT[lang]}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card-raised border-l-2 border-l-adapted">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} className="text-adapted" />
                <p className="eyebrow">{C.antiTitle[lang]}</p>
              </div>
              <p className="mt-3 text-[1.0625rem] leading-relaxed">{ANTI_KPI[lang]}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Scope' : 'Alcance'}
          title={C.respTitle[lang]}
        />
        <ol className="mt-10 max-w-4xl space-y-5">
          {RESPONSIBILITIES.map((r, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <li className="flex gap-4">
                <span className="clause-id">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[1.0625rem] leading-relaxed text-fg">{r[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Measurement' : 'Medición'}
          title={C.scorecardTitle[lang]}
          lede={C.scorecardLede[lang]}
        />
        <div className="mt-10 overflow-x-auto">
          <table className="table-x min-w-[40rem]">
            <thead>
              <tr>
                <th className="w-72">KPI</th>
                <th>{lang === 'en' ? 'What it measures' : 'Qué mide'}</th>
                <th className="w-24" />
              </tr>
            </thead>
            <tbody>
              {KPIS.map((k) => (
                <tr key={k.name} className={k.ceo ? 'bg-accent/5' : ''}>
                  <td className={k.ceo ? 'font-semibold text-brand' : 'font-medium text-fg'}>
                    {k.name}
                  </td>
                  <td>{k.measures[lang]}</td>
                  <td>
                    {k.ceo && (
                      <span className="chip border-accent/40 text-brand">{C.ceo[lang]}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Reveal>
          <p className="prose-x mt-8 max-w-3xl border-l-2 border-accent pl-5">{DIRECTION_NOTE[lang]}</p>
          <p className="prose-x mt-5 max-w-3xl">{CEO_NOTE[lang]}</p>
        </Reveal>
      </Section>

      <Section className="border-t border-border bg-raised">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{CAPACITY_ELEVATION.title[lang]}</p>
            <p className="prose-x mt-4">{CAPACITY_ELEVATION.body[lang]}</p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
