import type { Metadata } from 'next';
import {
  ROUTES,
  SITE_NAME,
  SITE_URL,
  STANDARD_LABEL,
  type Locale,
  type RouteKey,
} from './site';

const DESCRIPTIONS: Record<RouteKey, Record<Locale, string>> = {
  home: {
    en: 'A chatbot answers. A copilot helps. An agent executes a task. An AI Employee holds a role. A human answers for it. An open administrative standard for designing, staffing, governing and retiring work across human and artificial resources.',
    es: 'Un chatbot responde. Un copiloto ayuda. Un agente ejecuta una tarea. Un AI Employee ocupa un rol. Un humano responde por él. Un estándar administrativo abierto para diseñar, asignar, gobernar y retirar trabajo entre recursos humanos y artificiales.',
  },
  standard: {
    en: `The Hybrid Workforce Standard, ${STANDARD_LABEL} — twenty-seven normative clauses that separate a governable work resource from a commercial metaphor.`,
    es: `El Hybrid Workforce Standard, ${STANDARD_LABEL} — veintisiete cláusulas normativas que separan un recurso de trabajo gobernable de una metáfora comercial.`,
  },
  definition: {
    en: 'The formal definition of an AI Employee and the nine-property test a system must pass to qualify.',
    es: 'La definición formal de AI Employee y el test de nueve propiedades que un sistema debe superar para calificar.',
  },
  maturity: {
    en: 'Seven levels from Tool to Hybrid Enterprise. Not every agent deserves to be called an AI Employee.',
    es: 'Siete niveles, de Herramienta a Empresa Híbrida. No todo agente merece llamarse AI Employee.',
  },
  framework: {
    en: 'WRM — Work Resource Management. Design the work first; decide whether a human, an artificial resource or a hybrid should do it second.',
    es: 'WRM — Administración de Recursos de Trabajo. Primero se diseña el trabajo; después se decide si lo ejecuta un humano, un recurso artificial o un híbrido.',
  },
  principles: {
    en: '120 administrative principles classified as Universal, Adapted or Exclusively Human, with their human and artificial expressions side by side.',
    es: '120 principios administrativos clasificados como Universal, Adaptado o Exclusivamente Humano, con su expresión humana y artificial lado a lado.',
  },
  hwfa: {
    en: 'Hybrid Workforce Fit Assessment — a structured self-assessment in three stages: eligibility, risk, economics. Decide whether a responsibility should be Human, Deterministic automation, Artificial or Hybrid.',
    es: 'Hybrid Workforce Fit Assessment — una autoevaluación estructurada en tres etapas: elegibilidad, riesgo, economía. Decidí si una responsabilidad debe ser Humana, Automatización determinista, Artificial o Híbrida.',
  },
  role: {
    en: 'The Hybrid Workforce Manager — mission, responsibilities, scorecard, and the anti-KPI that must never be used.',
    es: 'El Gerente de Fuerza Laboral Híbrida — misión, responsabilidades, scorecard y el anti-KPI que nunca debe usarse.',
  },
  transitions: {
    en: 'Human to Artificial in twelve controlled steps, and the seven triggers that send work back to people. The road runs both ways.',
    es: 'De Humano a Artificial en doce pasos controlados, y los siete disparadores que devuelven el trabajo a las personas. La carretera tiene dos direcciones.',
  },
  glossary: {
    en: 'Canonical bilingual glossary. One term, two languages, one numbered definition.',
    es: 'Glosario canónico bilingüe. Un término, dos idiomas, una definición numerada.',
  },
  governance: {
    en: 'Who wrote this standard, what commercial interest the author holds, how the Standard Review Board works, and how anyone can propose a change.',
    es: 'Quién escribió este estándar, qué interés comercial tiene el autor, cómo funciona el Standard Review Board y cómo cualquiera puede proponer un cambio.',
  },
  license: {
    en: 'The standard is published under CC BY-SA 4.0 — free to cite, embed, teach and use commercially. Modify it and your version stays open too.',
    es: 'El estándar se publica bajo CC BY-SA 4.0 — libre para citar, embeber, enseñar y usar comercialmente. Si lo modificás, tu versión también queda abierta.',
  },
  sources: {
    en: 'Sources, methodological notes and the limits of what this document claims.',
    es: 'Fuentes, notas metodológicas y los límites de lo que este documento afirma.',
  },
  changelog: {
    en: 'Version history and the amendment process. A standard without a changelog is not a standard.',
    es: 'Historial de versiones y proceso de enmienda. Un estándar sin changelog no es un estándar.',
  },
};

const TITLES: Record<RouteKey, Record<Locale, string>> = {
  home: { en: SITE_NAME, es: SITE_NAME },
  standard: { en: 'The Standard', es: 'El Estándar' },
  definition: { en: 'What counts as an AI Employee', es: 'Qué califica como AI Employee' },
  maturity: { en: 'Maturity model', es: 'Modelo de madurez' },
  framework: { en: 'WRM — Work Resource Management', es: 'WRM — Administración de Recursos de Trabajo' },
  principles: { en: '120 principles', es: '120 principios' },
  hwfa: { en: 'Hybrid Workforce Fit Assessment', es: 'Hybrid Workforce Fit Assessment' },
  role: { en: 'The Hybrid Workforce Manager', es: 'El Gerente de Fuerza Laboral Híbrida' },
  transitions: { en: 'Transitions', es: 'Transiciones' },
  glossary: { en: 'Glossary', es: 'Glosario' },
  governance: { en: 'Governance', es: 'Gobierno' },
  license: { en: 'Licence', es: 'Licencia' },
  sources: { en: 'Sources', es: 'Fuentes' },
  changelog: { en: 'Changelog', es: 'Cambios' },
};

export function buildMetadata(locale: Locale, key: RouteKey = 'home'): Metadata {
  const path = ROUTES[key][locale];
  const title = TITLES[key][locale];
  const description = DESCRIPTIONS[key][locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: key === 'home' ? `${SITE_NAME} · HybridWF` : `${title} · ${SITE_NAME}`,
    description,
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        en: `${SITE_URL}${ROUTES[key].en}`,
        es: `${SITE_URL}${ROUTES[key].es}`,
        'x-default': `${SITE_URL}${ROUTES[key].en}`,
      },
    },
    openGraph: {
      type: 'article',
      siteName: SITE_NAME,
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      url: `${SITE_URL}${path}`,
      title: key === 'home' ? SITE_NAME : title,
      description,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}
