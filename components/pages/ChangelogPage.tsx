import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import { MAPPING, RELEASES, VERSIONING_POLICY } from '@/lib/governance';
import type { Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Versions', es: 'Versiones' },
  title: { en: 'Changelog', es: 'Cambios' },
  lede: {
    en: 'A standard without a changelog is not a standard. Every version stays at its own permanent address so a citation made today still resolves years from now.',
    es: 'Un estándar sin changelog no es un estándar. Toda versión permanece en su propia dirección permanente para que una cita hecha hoy siga resolviendo dentro de años.',
  },
  policyTitle: { en: 'Versioning policy', es: 'Política de versionado' },
};

export default function ChangelogPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <div className="space-y-12">
          {RELEASES.map((r) => (
            <Reveal key={r.version}>
              <article className="border-t border-border pt-6">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h2 className="font-display text-2xl font-semibold">v{r.version}</h2>
                  <span className="font-mono text-sm text-muted">{r.date}</span>
                  <span className="chip border-accent/40 text-brand">{r.status[lang]}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {r.notes.map((n, i) => (
                    <li key={i} className="flex gap-3 text-[1.0625rem] leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {n[lang]}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Policy' : 'Política'}
          title={C.policyTitle[lang]}
        />
        <Reveal>
          <p className="prose-x mt-6">{VERSIONING_POLICY[lang]}</p>

        <div className="mt-10 max-w-2xl">
          <p className="eyebrow">{MAPPING.title[lang]}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{MAPPING.intro[lang]}</p>
          <div className="mt-4 grid grid-cols-3 gap-x-6 gap-y-1.5 font-mono text-xs text-muted sm:grid-cols-4 md:grid-cols-5">
            {MAPPING.rows.map((r) => (
              <span key={r.now}>
                <span className="text-fg">{r.now}</span> ← {r.was}
              </span>
            ))}
          </div>
        </div>
        </Reveal>
      </Section>
    </>
  );
}
