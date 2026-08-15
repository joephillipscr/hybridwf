import Reveal from '../Reveal';
import { PageHeader, Section } from '../Section';
import { ACRONYM_RULE, GLOSSARY_NOTE, TERMS } from '@/lib/glossary';
import type { Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Canonical vocabulary', es: 'Vocabulario canónico' },
  title: { en: 'Glossary', es: 'Glosario' },
  lede: {
    en: 'A standard fragments when the same idea travels under two names. Every term is fixed here in both languages with one numbered definition.',
    es: 'Un estándar se fragmenta cuando la misma idea viaja bajo dos nombres. Cada término queda fijado aquí en ambos idiomas con una definición numerada.',
  },
  other: { en: 'Spanish', es: 'English' },
};

export default function GlossaryPage({ lang }: { lang: Locale }) {
  const other: Locale = lang === 'en' ? 'es' : 'en';

  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <Reveal>
          <p className="prose-x max-w-3xl">{GLOSSARY_NOTE[lang]}</p>
          <p className="card-raised mt-6 max-w-3xl border-l-2 border-l-accent text-[1.0625rem] leading-relaxed">
            {ACRONYM_RULE[lang]}
          </p>
        </Reveal>

        <dl className="mt-12 space-y-8">
          {TERMS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 0.04}>
              <div id={t.id.toLowerCase()} className="scroll-mt-24 border-t border-border pt-6">
                <dt className="flex flex-wrap items-baseline gap-3">
                  <span className="clause-id">{t.id}</span>
                  <span className="font-display text-xl font-semibold">{t.term[lang]}</span>
                  {t.term[other] !== t.term[lang] && (
                    <span className="text-sm text-muted">
                      {C.other[lang]}: <em>{t.term[other]}</em>
                    </span>
                  )}
                </dt>
                <dd className="prose-x mt-3">{t.definition[lang]}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>
    </>
  );
}
