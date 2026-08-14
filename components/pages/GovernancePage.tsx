import Link from 'next/link';
import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import {
  DISCLOSURE,
  MODEL,
  PROCESS,
  RULES,
  SEATS,
  STATUS_NOTE,
} from '@/lib/governance';
import { AUTHOR, PLATFORM_DISCLOSURE, route, type Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Governance', es: 'Gobierno' },
  title: { en: 'Who writes this, and who can change it', es: 'Quién escribe esto, y quién puede cambiarlo' },
  lede: {
    en: 'A standard is only worth what its governance is worth. Here is the conflict of interest, stated first, and the mechanism meant to contain it.',
    es: 'Un estándar vale lo que vale su gobierno. Acá está el conflicto de interés, declarado primero, y el mecanismo que debería contenerlo.',
  },
  seatsTitle: { en: 'The five seats', es: 'Los cinco asientos' },
  seatsLede: {
    en: 'One per discipline, and each one blocks a different way this standard could fail.',
    es: 'Uno por disciplina, y cada uno bloquea una forma distinta en que este estándar podría fallar.',
  },
  open: { en: 'Open', es: 'Abierto' },
  protects: { en: 'Protects', es: 'Protege' },
  rulesTitle: { en: 'The hard rules', es: 'Las reglas duras' },
  processTitle: { en: 'How the standard changes', es: 'Cómo cambia el estándar' },
};

export default function GovernancePage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      {/* ---------- Disclosure ---------- */}
      <Section>
        <Reveal>
          <div className="card-raised max-w-3xl border-l-2 border-l-accent">
            <h2 className="eyebrow">{DISCLOSURE.title[lang]}</h2>
            <div className="prose-x mt-4">
              {DISCLOSURE.body.map((p, i) => (
                <p key={i} className={i > 0 ? 'mt-4' : ''}>
                  {p[lang]}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
              <a href={AUTHOR.url} className="chip hover:border-accent hover:text-brand" rel="author">
                {AUTHOR.name}
              </a>
              <a
                href={PLATFORM_DISCLOSURE.url}
                className="chip hover:border-accent hover:text-brand"
                rel="nofollow"
              >
                {PLATFORM_DISCLOSURE.name}
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Model ---------- */}
      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Model' : 'Modelo'}
          title={MODEL.title[lang]}
        />
        <Reveal>
          <blockquote className="mt-8 max-w-4xl border-l-2 border-accent pl-6 font-display text-xl leading-relaxed sm:text-2xl">
            {MODEL.rule[lang]}
          </blockquote>
          <p className="prose-x mt-6">{MODEL.body[lang]}</p>
          <p className="prose-x mt-4">
            {lang === 'en'
              ? 'The second guarantee is the licence. The standard is published under CC BY-SA 4.0: anyone may cite, embed, translate or build on it, and any modified version must stay open under the same terms. A fork can exist; a closed fork cannot. '
              : 'La segunda garantía es la licencia. El estándar se publica bajo CC BY-SA 4.0: cualquiera puede citarlo, embeberlo, traducirlo o construir sobre él, y toda versión modificada debe quedar abierta bajo los mismos términos. Un fork puede existir; un fork cerrado no. '}
            <Link
              href={route('license', lang)}
              className="font-medium text-brand underline underline-offset-2"
            >
              {lang === 'en' ? 'Licence terms' : 'Términos de la licencia'}
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      {/* ---------- Seats ---------- */}
      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Standard Review Board' : 'Standard Review Board'}
          title={C.seatsTitle[lang]}
          lede={C.seatsLede[lang]}
        />
        <div className="mt-10 space-y-3">
          {SEATS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="grid gap-3 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-[3rem_1fr_1.4fr] sm:items-start sm:gap-6">
                <span className="clause-id w-fit">{String(s.n).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{s.discipline[lang]}</h3>
                  <p className="mt-1.5">
                    {s.holder ? (
                      <span className="text-sm font-medium text-brand">{s.holder}</span>
                    ) : (
                      <span className="chip border-dashed">{C.open[lang]}</span>
                    )}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-brand">
                    {C.protects[lang]}
                  </span>
                  <br />
                  {s.protects[lang]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Rules ---------- */}
      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Constraints' : 'Restricciones'}
          title={C.rulesTitle[lang]}
        />
        <ol className="mt-10 max-w-4xl space-y-5">
          {RULES.map((r, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <li className="flex gap-4">
                <span className="clause-id">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[1.0625rem] leading-relaxed text-fg">{r[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------- Process ---------- */}
      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Amendment' : 'Enmienda'}
          title={C.processTitle[lang]}
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <li className="card h-full">
                <span className="clause-id">{String(p.n).padStart(2, '0')}</span>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.step[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------- Status ---------- */}
      <Section className="border-t border-border bg-raised">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{STATUS_NOTE.title[lang]}</p>
            <p className="prose-x mt-4">{STATUS_NOTE.body[lang]}</p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
