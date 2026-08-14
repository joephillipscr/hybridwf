import { Ban, Check, ExternalLink } from 'lucide-react';
import CiteBox from '../CiteBox';
import Reveal from '../Reveal';
import { PageHeader, Section, SectionHeading } from '../Section';
import {
  ATTRIBUTION_NOTE,
  BOUNDARIES,
  LEDE,
  LICENSE,
  PERMITTED,
  RATIONALE,
  TERMS,
  attributionHtml,
  attributionPlain,
} from '@/lib/license';
import { AUTHOR, ROUTES, SITE_URL, STANDARD_VERSION, type Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Licence', es: 'Licencia' },
  title: {
    en: 'Free to use, impossible to close',
    es: 'Libre de usar, imposible de cerrar',
  },
  termsTitle: { en: 'Two obligations', es: 'Dos obligaciones' },
  permittedTitle: { en: 'What you can do without asking', es: 'Qué podés hacer sin pedir permiso' },
  boundariesTitle: { en: 'Where the licence stops', es: 'Dónde termina la licencia' },
  attributionTitle: { en: 'Attribution', es: 'Atribución' },
  plain: { en: 'Plain text', es: 'Texto plano' },
  html: { en: 'HTML', es: 'HTML' },
  deed: { en: 'Read the licence summary', es: 'Leer el resumen de la licencia' },
  legal: { en: 'Read the full legal code', es: 'Leer el texto legal completo' },
  covers: { en: 'What this covers', es: 'Qué cubre' },
  coversBody: {
    en: 'The twenty-one clauses, the definition and nine-property test, the WRM framework, the 120-principle matrix, the maturity model, the HWFS dimensions, the Hybrid Workforce Manager role, the transition playbooks and the glossary — in both languages.',
    es: 'Las veintiuna cláusulas, la definición y el test de nueve propiedades, el marco WRM, la matriz de 120 principios, el modelo de madurez, las dimensiones del HWFS, el rol de Gerente de Fuerza Laboral Híbrida, los playbooks de transición y el glosario — en ambos idiomas.',
  },
};

export default function LicensePage({ lang }: { lang: Locale }) {
  const url = `${SITE_URL}${ROUTES.home[lang]}`;

  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={LEDE[lang]} />

      {/* ---------- The badge ---------- */}
      <Section>
        <Reveal>
          <div className="card-raised max-w-3xl border-l-2 border-l-accent">
            <p className="eyebrow">{LICENSE.short[lang]}</p>
            <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
              {LICENSE.name[lang]}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{C.coversBody[lang]}</p>
            <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
              <a
                href={LICENSE.deedUrl[lang]}
                rel="license noopener noreferrer"
                target="_blank"
                className="btn-ghost text-sm"
              >
                {C.deed[lang]}
                <ExternalLink size={14} />
              </a>
              <a
                href={LICENSE.legalUrl[lang]}
                rel="noopener noreferrer"
                target="_blank"
                className="btn-ghost text-sm"
              >
                {C.legal[lang]}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------- The two obligations ---------- */}
      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Terms' : 'Términos'}
          title={C.termsTitle[lang]}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {TERMS.map((t, i) => (
            <Reveal key={t.title.en} delay={i * 0.07}>
              <div className="card h-full">
                <h3 className="font-display text-lg font-semibold text-brand">{t.title[lang]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.body[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Permitted ---------- */}
      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Permitted' : 'Permitido'}
          title={C.permittedTitle[lang]}
        />
        <ul className="mt-10 max-w-4xl space-y-5">
          {PERMITTED.map((p, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <li className="flex gap-3.5">
                <Check size={17} className="mt-1 shrink-0 text-universal" />
                <p className="text-[1.0625rem] leading-relaxed text-fg">{p[lang]}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ---------- Boundaries ---------- */}
      <Section className="border-y border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Limits' : 'Límites'}
          title={C.boundariesTitle[lang]}
        />
        <div className="mt-10 space-y-5">
          {BOUNDARIES.map((b, i) => (
            <Reveal key={b.title.en} delay={i * 0.05}>
              <div className="card">
                <div className="flex items-center gap-2.5">
                  <Ban size={16} className="shrink-0 text-adapted" />
                  <h3 className="font-display text-lg font-semibold">{b.title[lang]}</h3>
                </div>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
                  {b.body[lang]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Attribution strings ---------- */}
      <Section>
        <SectionHeading
          eyebrow={lang === 'en' ? 'Credit' : 'Crédito'}
          title={C.attributionTitle[lang]}
          lede={ATTRIBUTION_NOTE[lang]}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">{C.plain[lang]}</p>
            <CiteBox lang={lang} citation={attributionPlain(url, AUTHOR.name, lang)} />
          </div>
          <div>
            <p className="eyebrow mb-3">{C.html[lang]}</p>
            <CiteBox lang={lang} citation={attributionHtml(url, AUTHOR.name)} />
          </div>
        </div>
      </Section>

      {/* ---------- Rationale ---------- */}
      <Section className="border-t border-border bg-raised">
        <SectionHeading
          eyebrow={lang === 'en' ? 'Reasoning' : 'Razonamiento'}
          title={RATIONALE.title[lang]}
        />
        <div className="prose-x mt-6">
          {RATIONALE.body.map((p, i) => (
            <p key={i} className={i > 0 ? 'mt-4' : ''}>
              {p[lang]}
            </p>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 font-mono text-xs text-muted">
            {LICENSE.id} · v{STANDARD_VERSION} · {AUTHOR.name}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
