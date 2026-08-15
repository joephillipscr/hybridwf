import { ExternalLink } from 'lucide-react';
import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import { CONCEPTUAL, KIND_LABEL, METHOD_NOTES, SOURCES, type Source } from '@/lib/sources';
import type { Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Sources', es: 'Fuentes' },
  title: { en: 'What this is built on, and what it does not claim', es: 'Sobre qué se construye esto, y qué no afirma' },
  lede: {
    en: 'The sources below were used to validate the state of the market and the adjacent principles. What is proposed here is proposed here — it is not endorsed by any of them.',
    es: 'Las fuentes siguientes se utilizaron para validar el estado del mercado y los principios adyacentes. Lo que se propone aquí se propone aquí — no está respaldado por ninguna de ellas.',
  },
  methodTitle: { en: 'Methodological notes', es: 'Notas metodológicas' },
  conceptualTitle: { en: 'Conceptual lineage', es: 'Linaje conceptual' },
};

const KINDS: Source['kind'][] = ['market', 'standards', 'academic', 'books'];

export default function SourcesPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <div className="space-y-12">
          {KINDS.map((kind) => (
            <div key={kind}>
              <h2 className="eyebrow">{KIND_LABEL[kind][lang]}</h2>
              <ul className="mt-4 space-y-3">
                {SOURCES.filter((s) => s.kind === kind).map((s) => (
                  <Reveal key={s.id}>
                    <li className="flex gap-4 border-t border-border pt-3">
                      <span className="clause-id shrink-0">{s.id}</span>
                      <a
                        href={s.url}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="group inline-flex items-baseline gap-1.5 text-sm leading-relaxed text-muted transition hover:text-brand"
                      >
                        {s.label}
                        <ExternalLink size={12} className="shrink-0 opacity-50" />
                      </a>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Limits' : 'Límites'}
          title={C.methodTitle[lang]}
        />
        <ul className="mt-10 max-w-4xl space-y-5">
          {METHOD_NOTES.map((n, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <li className="flex gap-4">
                <span className="clause-id">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[1.0625rem] leading-relaxed text-fg">{n[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Lineage' : 'Linaje'}
          title={C.conceptualTitle[lang]}
        />
        <ul className="mt-8 max-w-3xl space-y-3">
          {CONCEPTUAL.map((c, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <li className="text-[1.0625rem] leading-relaxed text-muted">{c[lang]}</li>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
