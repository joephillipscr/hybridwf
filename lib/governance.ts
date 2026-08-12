import type { T } from './i18n';

/* --- Disclosure. Stated first, on purpose. -------------------------- */

export const DISCLOSURE: { title: T; body: T[] } = {
  title: { en: 'Disclosure', es: 'Divulgación' },
  body: [
    {
      en: 'This standard was written by Master Joe Phillips, who also builds AIEmpl.com, a commercial platform in this category. That is a real conflict of interest and it is stated here rather than discovered later.',
      es: 'Este estándar fue escrito por Master Joe Phillips, quien también construye AIEmpl.com, una plataforma comercial en esta categoría. Eso es un conflicto de interés real y se declara acá en lugar de descubrirse después.',
    },
    {
      en: 'Three commitments follow from it. This standard does not certify products and does not score vendors — conformance is self-declared by the organisation running the deployment. This site is not a funnel: the link to the platform above is disclosure, not an offer. And the normative text cannot be changed by its author alone.',
      es: 'De ahí se derivan tres compromisos. Este estándar no certifica productos ni puntúa proveedores — la conformidad la autodeclara la organización que opera el deployment. Este sitio no es un embudo: el enlace a la plataforma es divulgación, no una oferta. Y el texto normativo no puede ser modificado por su autor en solitario.',
    },
    {
      en: 'A standard authored by a vendor and judged by nobody is a specification sheet with a formal name. The mechanism below is what is meant to keep this one from becoming that.',
      es: 'Un estándar escrito por un vendor y juzgado por nadie es una hoja de especificaciones con nombre formal. El mecanismo de abajo es lo que debería impedir que este se convierta en eso.',
    },
  ],
};

/* --- The model ------------------------------------------------------ */

export const MODEL: { title: T; rule: T; body: T } = {
  title: { en: 'Editor and Review Board', es: 'Editor y Review Board' },
  rule: {
    en: 'The Editor writes, proposes and decides everything editorial. The normative text changes only with a majority of the Board. The Editor’s vote is worth no more than anyone else’s in that vote.',
    es: 'El Editor escribe, propone y decide todo lo editorial. El texto normativo solo cambia con mayoría del Board. El voto del Editor no vale más que el de nadie en esa votación.',
  },
  body: {
    en: 'That single rule is what makes the disclosure above worth anything: the author has a commercial interest, and the author cannot move the standard alone.',
    es: 'Esa única regla es la que le da valor a la divulgación anterior: el autor tiene un interés comercial, y el autor no puede mover el estándar solo.',
  },
};

/* --- The five seats -------------------------------------------------- */

export interface Seat {
  n: number;
  discipline: T;
  protects: T;
  /** null while the seat is open. */
  holder: string | null;
}

export const SEATS: Seat[] = [
  {
    n: 1,
    discipline: { en: 'HR / People', es: 'RR. HH. / People' },
    protects: {
      en: 'That the HR-to-AI translation is not a caricature, and that the Human and Adapted layers of the matrix stay honest.',
      es: 'Que la traducción RR. HH.→IA no sea caricatura, y que las capas Humana y Adaptada de la matriz se mantengan honestas.',
    },
    holder: null,
  },
  {
    n: 2,
    discipline: { en: 'Operations or finance executive who has deployed AI', es: 'Ejecutivo de operaciones o finanzas que haya desplegado IA' },
    protects: {
      en: 'That the standard is something a real company can actually comply with, not only something elegant to read.',
      es: 'Que el estándar sea algo que una empresa real pueda cumplir, no solo algo elegante de leer.',
    },
    holder: null,
  },
  {
    n: 3,
    discipline: { en: 'AI engineering', es: 'Ingeniería de IA' },
    protects: {
      en: 'That the nine properties and the controls are technically honest and implementable.',
      es: 'Que las nueve propiedades y los controles sean técnicamente honestos e implementables.',
    },
    holder: null,
  },
  {
    n: 4,
    discipline: { en: 'Security and risk', es: 'Seguridad y riesgo' },
    protects: {
      en: 'Least privilege, auditability, incident handling and the kill switch — the governance domain.',
      es: 'Least privilege, auditabilidad, manejo de incidentes y kill switch — el dominio de gobierno.',
    },
    holder: null,
  },
  {
    n: 5,
    discipline: { en: 'Legal and labour', es: 'Legal y laboral' },
    protects: {
      en: 'The boundary that says this is not an employee in any legal sense — the line where the category is most likely to burn.',
      es: 'La frontera que dice que esto no es un empleado en sentido jurídico — la línea donde la categoría tiene más probabilidad de quemarse.',
    },
    holder: null,
  },
];

/* --- The hard rules -------------------------------------------------- */

export const RULES: T[] = [
  {
    en: 'Unpaid. Honorary, credited on this site. The moment there is money, there is a question about whom the Board serves.',
    es: 'Sin pago. Honorífico, con crédito en este sitio. En cuanto hay dinero, hay una pregunta sobre a quién sirve el Board.',
  },
  {
    en: 'At least two of the five seats sit outside the Editor’s commercial orbit — not customers, not employees, not suppliers. A board of the author’s friends is detectable in one search.',
    es: 'Al menos dos de los cinco asientos fuera de la órbita comercial del Editor: no clientes, no empleados, no proveedores. Un board de amigos del autor se detecta en una sola búsqueda.',
  },
  {
    en: 'No member holds a competing platform. Not the Editor’s, not anyone’s. The Board is not a vendor lobby.',
    es: 'Ningún miembro tiene una plataforma competidora. Ni la del Editor ni la de nadie. El Board no es un lobby de proveedores.',
  },
  {
    en: 'Each member publishes their own disclosure, exactly as the Editor does.',
    es: 'Cada miembro publica su propia divulgación, exactamente como lo hace el Editor.',
  },
  {
    en: 'Twelve-month renewable terms, so that leaving is ordinary rather than a scandal.',
    es: 'Términos de doce meses renovables, para que salir sea algo ordinario y no un escándalo.',
  },
  {
    en: 'Changes follow a public process: anyone proposes, the Editor drafts, the Board votes, the changelog records. Four lines that are worth more than ten pages of bylaws.',
    es: 'Los cambios siguen un proceso público: cualquiera propone, el Editor redacta, el Board vota, el changelog registra. Cuatro líneas que valen más que diez páginas de estatutos.',
  },
];

/* --- Amendment process ------------------------------------------------ */

export const PROCESS: { n: number; step: T }[] = [
  { n: 1, step: { en: 'Anyone proposes a change, publicly, with the reasoning and the case that motivated it.', es: 'Cualquiera propone un cambio, públicamente, con el razonamiento y el caso que lo motivó.' } },
  { n: 2, step: { en: 'The Editor drafts the amended clause text and publishes the draft.', es: 'El Editor redacta el texto enmendado de la cláusula y publica el borrador.' } },
  { n: 3, step: { en: 'The Board votes. A majority carries; the Editor holds one vote.', es: 'El Board vota. Decide la mayoría; el Editor tiene un voto.' } },
  { n: 4, step: { en: 'The changelog records what changed, who proposed it, how the Board voted and why.', es: 'El changelog registra qué cambió, quién lo propuso, cómo votó el Board y por qué.' } },
];

/* --- Current status ---------------------------------------------------- */

export const STATUS_NOTE: { title: T; body: T } = {
  title: { en: 'Where this stands today', es: 'En qué punto está esto hoy' },
  body: {
    en: 'Version 1.0 is a proposal by a single author. The Standard Review Board is forming and every seat is currently open. Publishing that honestly is a deliberate choice: a standard that admits to being a proposal is more credible than one that implies an institution it does not yet have. If one of the five seats describes you, the invitation is open.',
    es: 'La versión 1.0 es una propuesta de un solo autor. El Standard Review Board está en formación y todos los asientos están abiertos. Publicarlo así es una decisión deliberada: un estándar que admite ser una propuesta es más creíble que uno que insinúa una institución que todavía no tiene. Si alguno de los cinco asientos te describe, la invitación está abierta.',
  },
};

/* --- Changelog --------------------------------------------------------- */

export interface Release {
  version: string;
  date: string;
  status: T;
  notes: T[];
}

export const RELEASES: Release[] = [
  {
    version: '1.0',
    date: '2026-08-12',
    status: { en: 'Proposal — Review Board forming', es: 'Propuesta — Review Board en formación' },
    notes: [
      { en: 'First publication: fifteen normative clauses, the nine-property test, the ART framework, the 120-principle matrix, the maturity model, the HWFS instrument, the Hybrid Workforce Manager role and the transition playbooks.', es: 'Primera publicación: quince cláusulas normativas, el test de nueve propiedades, el marco ART, la matriz de 120 principios, el modelo de madurez, el instrumento HWFS, el rol de Gerente de Fuerza Laboral Híbrida y los playbooks de transición.' },
      { en: 'Certification was deliberately excluded from scope. This standard scores no products and issues no seals.', es: 'La certificación se excluyó deliberadamente del alcance. Este estándar no puntúa productos ni emite sellos.' },
      { en: 'The HWFS returns a structured argument rather than a 0–100 score, resolving a contradiction present in the source research.', es: 'El HWFS devuelve un argumento estructurado en lugar de un puntaje 0–100, resolviendo una contradicción presente en la investigación de origen.' },
    ],
  },
];

export const VERSIONING_POLICY: T = {
  en: 'Clause text changes require a version bump and a Board vote. Notes, examples and commentary may be corrected between versions without amending the standard. Every published version stays at its own permanent address so that a citation made today still resolves in five years.',
  es: 'Cambiar el texto de una cláusula exige subir de versión y una votación del Board. Notas, ejemplos y comentario pueden corregirse entre versiones sin enmendar el estándar. Toda versión publicada permanece en su propia dirección permanente para que una cita hecha hoy siga resolviendo en cinco años.',
};
