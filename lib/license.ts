import type { T } from './i18n';

export const LICENSE = {
  id: 'CC-BY-SA-4.0',
  name: {
    en: 'Creative Commons Attribution-ShareAlike 4.0 International',
    es: 'Creative Commons Atribución-CompartirIgual 4.0 Internacional',
  } satisfies T,
  short: { en: 'CC BY-SA 4.0', es: 'CC BY-SA 4.0' } satisfies T,
  url: 'https://creativecommons.org/licenses/by-sa/4.0/',
  deedUrl: {
    en: 'https://creativecommons.org/licenses/by-sa/4.0/',
    es: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
  } satisfies T,
  legalUrl: {
    en: 'https://creativecommons.org/licenses/by-sa/4.0/legalcode',
    es: 'https://creativecommons.org/licenses/by-sa/4.0/legalcode.es',
  } satisfies T,
};

export const LEDE: T = {
  en: 'The standard is published openly so it can be read, cited, translated and built on without asking permission. The one condition that matters: if you modify it, your version stays open too.',
  es: 'El estándar se publica abiertamente para que pueda leerse, citarse, traducirse y construirse encima sin pedir permiso. La única condición que importa: si lo modificás, tu versión también queda abierta.',
};

/* --- The two obligations ------------------------------------------- */

export const TERMS: { title: T; body: T }[] = [
  {
    title: { en: 'Attribution (BY)', es: 'Atribución (BY)' },
    body: {
      en: 'Credit the author, link to the licence, and indicate whether you made changes. You may do so in any reasonable manner, but not in a way that suggests the author endorses you or your use.',
      es: 'Dale crédito al autor, enlazá la licencia e indicá si hiciste cambios. Podés hacerlo de cualquier forma razonable, pero no de un modo que sugiera que el autor te respalda a vos o a tu uso.',
    },
  },
  {
    title: { en: 'ShareAlike (SA)', es: 'CompartirIgual (SA)' },
    body: {
      en: 'If you remix, transform or build upon the material, you must distribute your contribution under the same licence. This is the clause that keeps a modified version of this standard from becoming a closed one.',
      es: 'Si remezclás, transformás o construís sobre el material, debés distribuir tu contribución bajo la misma licencia. Esta es la cláusula que impide que una versión modificada de este estándar se convierta en una cerrada.',
    },
  },
];

/* --- What you can do without asking -------------------------------- */

export const PERMITTED: T[] = [
  {
    en: 'Quote or cite any clause, by identifier, anywhere, including in commercial work.',
    es: 'Citar cualquier cláusula, por identificador, donde sea, incluido trabajo comercial.',
  },
  {
    en: 'Reproduce the standard inside a larger document, such as a policy manual or a vendor evaluation. Including this work in a collection does not make the whole collection an adaptation, so ShareAlike does not reach the rest of your document.',
    es: 'Reproducir el estándar dentro de un documento mayor, como un manual de políticas o una evaluación de proveedores. Incluir esta obra en una colección no convierte a la colección entera en una adaptación, así que CompartirIgual no alcanza al resto de tu documento.',
  },
  {
    en: 'Run the HWFS assessment and use its output however you like. The results describe your responsibilities rather than ours, so they belong to you with no licence obligation attached.',
    es: 'Ejecutar la evaluación HWFS y usar su resultado como quieras. Los resultados describen tus responsabilidades y no las nuestras, así que son tuyos y no arrastran ninguna obligación de licencia.',
  },
  {
    en: 'Teach it, train on it, and use it inside a product. Commercial use costs nothing and needs no separate agreement.',
    es: 'Enseñarlo, entrenar con él y usarlo dentro de un producto. El uso comercial no cuesta nada y no requiere un acuerdo aparte.',
  },
  {
    en: 'Translate it into another language, provided the translation carries the same licence and is marked as an unofficial translation.',
    es: 'Traducirlo a otro idioma, siempre que la traducción lleve la misma licencia y se marque como traducción no oficial.',
  },
];

/* --- Boundaries ----------------------------------------------------- */

export const BOUNDARIES: { title: T; body: T }[] = [
  {
    title: { en: 'The name is not licensed', es: 'El nombre no está licenciado' },
    body: {
      en: 'A Creative Commons licence covers copyright, never trademarks. “Hybrid Workforce Standard”, “HybridWF”, “WRM — Work Resource Management”, “HWFS” and the mark are reserved. You may state that your work is based on or conforms to the standard; you may not publish a modified version under the same name, or present it as an official edition.',
      es: 'Una licencia Creative Commons cubre derechos de autor, nunca marcas. «Hybrid Workforce Standard», «HybridWF», «WRM — Administración de Recursos de Trabajo», «HWFS» y el símbolo quedan reservados. Podés declarar que tu trabajo se basa en el estándar o que conforma con él; no podés publicar una versión modificada con el mismo nombre ni presentarla como edición oficial.',
    },
  },
  {
    title: { en: 'Conformance is a claim about you', es: 'La conformidad es una afirmación sobre vos' },
    body: {
      en: 'The licence lets you use the text. It does not let you claim endorsement. Saying “this deployment conforms to the Hybrid Workforce Standard v1.0” is a self-declaration about your own system, which the standard invites. Saying the standard certifies, approves or endorses your product is not permitted. No product is certified here.',
      es: 'La licencia te permite usar el texto. No te permite afirmar respaldo. Decir «este deployment conforma con el Hybrid Workforce Standard v1.0» es una autodeclaración sobre tu propio sistema, que el estándar invita. Decir que el estándar certifica, aprueba o respalda tu producto no está permitido. Acá no se certifica ningún producto.',
    },
  },
  {
    title: { en: 'Site code is separate', es: 'El código del sitio es aparte' },
    body: {
      en: 'This licence covers the standard and its supporting text: the clauses, the framework, the matrix, the glossary and the playbooks. The source code that renders this site is licensed separately in the repository. Do not assume one licence from the other.',
      es: 'Esta licencia cubre el estándar y su texto de apoyo: las cláusulas, el marco, la matriz, el glosario y los playbooks. El código fuente que renderiza este sitio se licencia por separado en el repositorio. No asumas una licencia a partir de la otra.',
    },
  },
];

/* --- Why this licence ------------------------------------------------ */

export const RATIONALE: { title: T; body: T[] } = {
  title: { en: 'Why ShareAlike', es: 'Por qué CompartirIgual' },
  body: [
    {
      en: 'A standard is worth what its adoption is worth, so the licence has to permit almost everything: citation, commercial use, embedding, teaching. All of that is permitted without cost.',
      es: 'Un estándar vale lo que vale su adopción, así que la licencia tiene que permitir casi todo: citar, uso comercial, embeber, enseñar. Todo eso está permitido sin costo.',
    },
    {
      en: 'The one thing worth preventing is a fork that closes. A vendor could take this text, alter the clauses to fit what their product happens to do, and publish the result as a proprietary standard. That is the failure this project exists to avoid, and ShareAlike prevents it: a modified version must stay as open as this one.',
      es: 'Lo único que vale la pena impedir es un fork que se cierre. Un proveedor podría tomar este texto, alterar las cláusulas para que encajen con lo que su producto hace, y publicar el resultado como estándar propietario. Esa es la falla que este proyecto existe para evitar, y CompartirIgual la impide: una versión modificada debe quedar tan abierta como esta.',
    },
    {
      en: 'The cost is real and worth naming: a third-party translation or adaptation inherits the licence, and some organisations will not accept that. We take the trade deliberately, because an openness a competitor could revoke would not be worth much.',
      es: 'El costo es real y vale nombrarlo: una traducción o adaptación de terceros hereda la licencia, y algunas organizaciones no lo van a aceptar. Tomamos el intercambio deliberadamente, porque una apertura que un competidor pudiera revocar no valdría mucho.',
    },
  ],
};

/* --- Attribution strings people can copy ----------------------------- */

export function attributionHtml(url: string, author: string): string {
  return `<a href="${url}" rel="cite-as">Hybrid Workforce Standard</a> by <a href="https://masterjoephillips.com" rel="author">${author}</a> is licensed under <a href="${LICENSE.url}" rel="license">CC BY-SA 4.0</a>.`;
}

export function attributionPlain(url: string, author: string, lang: 'en' | 'es'): string {
  return lang === 'en'
    ? `Hybrid Workforce Standard by ${author}, ${url} — licensed under CC BY-SA 4.0 (${LICENSE.url}).`
    : `Hybrid Workforce Standard de ${author}, ${url} — bajo licencia CC BY-SA 4.0 (${LICENSE.url}).`;
}

export const ATTRIBUTION_NOTE: T = {
  en: 'Copy one of these when you reuse the material. Add “Changes were made.” if you modified it. The licence requires you to say so.',
  es: 'Copiá uno de estos cuando reutilices el material. Agregá «Se hicieron cambios.» si lo modificaste. La licencia exige decirlo.',
};
