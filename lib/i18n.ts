import type { Locale } from './site';

/** A string that exists in both languages. */
export type T = Record<Locale, string>;

export const t = (v: T, l: Locale) => v[l];

/** Small UI strings shared across pages. */
export const UI = {
  skipToContent: { en: 'Skip to content', es: 'Ir al contenido' },
  menu: { en: 'Menu', es: 'Menú' },
  close: { en: 'Close', es: 'Cerrar' },
  theme: { en: 'Toggle theme', es: 'Cambiar tema' },
  onThisPage: { en: 'On this page', es: 'En esta página' },
  version: { en: 'Version', es: 'Versión' },
  status: { en: 'Status', es: 'Estado' },
  statusProposal: { en: 'Candidate — pending Board ratification', es: 'Candidata — pendiente de ratificación del Board' },
  published: { en: 'Published', es: 'Publicado' },
  citeThis: { en: 'How to cite', es: 'Cómo citar' },
  copy: { en: 'Copy', es: 'Copiar' },
  copied: { en: 'Copied', es: 'Copiado' },
  readMore: { en: 'Read more', es: 'Leer más' },
  next: { en: 'Next', es: 'Siguiente' },
  back: { en: 'Back', es: 'Volver' },
  human: { en: 'Human', es: 'Humano' },
  artificial: { en: 'Artificial', es: 'Artificial' },
  hybrid: { en: 'Hybrid', es: 'Híbrido' },
  universal: { en: 'Universal', es: 'Universal' },
  adapted: { en: 'Adapted', es: 'Adaptado' },
  humanOnly: { en: 'Exclusively human', es: 'Exclusivamente humano' },
  disclosureShort: {
    en: 'Written by an author who also builds a commercial platform in this category.',
    es: 'Escrito por un autor que también construye una plataforma comercial en esta categoría.',
  },
} satisfies Record<string, T>;
