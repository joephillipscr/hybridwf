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
      en: 'Three commitments follow from it. This standard does not certify products and does not score vendors; conformance is self-declared by the organisation running the deployment. This site is not a funnel, so the link to the platform above is disclosure rather than an offer. The normative text cannot be changed by its author alone.',
      es: 'De ahí se derivan tres compromisos. Este estándar no certifica productos ni puntúa proveedores; la conformidad la autodeclara la organización que opera el deployment. Este sitio no es un embudo, así que el enlace a la plataforma es divulgación y no una oferta. El texto normativo no puede ser modificado por su autor en solitario.',
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
      en: 'Least privilege, auditability, incident handling and the kill switch: the governance domain.',
      es: 'Least privilege, auditabilidad, manejo de incidentes y kill switch: el dominio de gobierno.',
    },
    holder: null,
  },
  {
    n: 5,
    discipline: { en: 'Legal and labour', es: 'Legal y laboral' },
    protects: {
      en: 'The boundary that says this is not an employee in any legal sense. It is the line where the category is most likely to burn.',
      es: 'La frontera que dice que esto no es un empleado en sentido jurídico. Es la línea donde la categoría tiene más probabilidad de quemarse.',
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
    en: 'At least two of the five seats sit outside the Editor’s commercial orbit, so not customers, employees or suppliers. A board of the author’s friends is detectable in one search.',
    es: 'Al menos dos de los cinco asientos quedan fuera de la órbita comercial del Editor, así que no clientes, empleados ni proveedores. Un board de amigos del autor se detecta en una sola búsqueda.',
  },
  {
    en: 'No member holds a competing platform, the Editor’s included. The Board is not a vendor lobby.',
    es: 'Ningún miembro tiene una plataforma competidora, incluida la del Editor. El Board no es un lobby de proveedores.',
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
    en: 'Changes follow a public process: anyone proposes, the Editor drafts, the Board votes, and the changelog records what happened. Four lines do more work here than ten pages of bylaws would.',
    es: 'Los cambios siguen un proceso público: cualquiera propone, el Editor redacta, el Board vota y el changelog registra lo que pasó. Cuatro líneas hacen más trabajo acá que diez páginas de estatutos.',
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
      { en: 'First publication: nineteen normative clauses, the nine-property test, the WRM framework, the 120-principle matrix, the maturity model, the HWFS instrument, the Hybrid Workforce Manager role and the transition playbooks.', es: 'Primera publicación: diecinueve cláusulas normativas, el test de nueve propiedades, el marco WRM, la matriz de 120 principios, el modelo de madurez, el instrumento HWFS, el rol de Gerente de Fuerza Laboral Híbrida y los playbooks de transición.' },
      { en: 'Certification was deliberately excluded from scope. This standard scores no products and issues no seals.', es: 'La certificación se excluyó deliberadamente del alcance. Este estándar no puntúa productos ni emite sellos.' },
      { en: 'The HWFS returns a structured argument rather than a 0–100 score, resolving a contradiction present in the source research.', es: 'El HWFS devuelve un argumento estructurado en lugar de un puntaje 0–100, resolviendo una contradicción presente en la investigación de origen.' },
      { en: 'The thesis line and the vocabulary ladder were corrected for consistency with the standard’s own accountability architecture. The English edition read “an AI Employee is accountable for a role” and the ladder promised “ownership of a role”, while HWF-02’s note defines accountability as requiring the capacity to bear a legal, financial or reputational consequence and the accountable owner is human by definition. The thesis now ends where every chain in the standard ends — an AI Employee holds a role; a human answers for it — the ladder promises stewardship rather than ownership, and the invariant is stated as a formula: the AI executes, the organisation answers, a human governs. No clause text changed.', es: 'La línea de tesis y la escalera de vocabulario se corrigieron por consistencia con la propia arquitectura de accountability del estándar. La edición en inglés decía «an AI Employee is accountable for a role» y la escalera prometía «propiedad de un rol», mientras la nota de HWF-02 define la accountability como la capacidad de cargar una consecuencia legal, financiera o reputacional y el accountable owner es humano por definición. La tesis ahora termina donde termina toda cadena del estándar — un AI Employee ocupa un rol; un humano responde por él — la escalera promete custodia en vez de propiedad, y el invariante queda enunciado como fórmula: la IA ejecuta, la organización responde, un humano gobierna. Ningún texto de cláusula cambió.' },
      { en: 'HWF-19 forbids a post from outliving its justification: at a stated cadence the accountable owner re-justifies its existence against current strategy, as a question prior to and separate from performance, and continuation is never the default. The clause replaces a pruning mechanism that artificial occupants lack — payroll and attrition remove pointless human posts, and a resource that costs little and never resigns persists by default, accumulating organisational debt in its most dangerous form: digital zombies holding access for work nobody needs. The proposed twelve-month period moved to the note as guidance, because the standard fixes mechanisms rather than calendars. Adds G-32 and extends WRM rule 1 and matrix principle 101.', es: 'HWF-19 prohíbe que un puesto sobreviva a su justificación: con cadencia declarada el accountable owner re-justifica su existencia frente a la estrategia vigente, como pregunta previa y separada del desempeño, y la continuidad nunca es el default. La cláusula reemplaza un mecanismo de poda que los ocupantes artificiales no tienen — payroll y attrition eliminan los puestos humanos sin sentido, y un recurso que cuesta poco y no renuncia jamás persiste por defecto, acumulando deuda organizacional en su forma más peligrosa: zombis digitales con accesos para trabajo que nadie necesita. El periodo de doce meses propuesto pasó a la nota como orientación, porque el estándar fija mecanismos y no calendarios. Agrega G-32 y extiende la regla 1 del WRM y el principio 101 de la matriz.' },
      { en: 'HWF-18 makes context provisioning deliberate in both directions. The restriction categories existed from the first draft, but every stated reason for them was informational risk, so nothing stopped a manager from granting all non-sensitive context even where it would degrade the resource’s judgement through anchoring, confirmation bias or overload. The proposal behind it asked for a new WRM domain of opacity; it entered as a clause instead, because opacity is a technique inside existing domains rather than a management function. The clause makes the record mandatory and assigns responsibility for decisions degraded by withheld context to whoever withheld it, because undocumented opacity is an accountability-laundering instrument. Adds G-31 and extends G-06, matrix principle 57 and WRM rule 6.', es: 'HWF-18 hace que el aprovisionamiento de contexto sea deliberado en ambas direcciones. Las categorías de restricción existían desde el primer borrador, pero toda razón declarada era el riesgo informacional, así que nada impedía que un manager concediera todo el contexto no sensible incluso donde degradaría el criterio del recurso por anclaje, sesgo de confirmación o sobrecarga. La propuesta que la originó pedía un nuevo dominio de opacidad en el WRM; entró como cláusula, porque la opacidad es una técnica dentro de dominios existentes y no una función de administración. La cláusula vuelve obligatorio el registro y asigna la responsabilidad por decisiones degradadas por contexto retenido a quien lo retuvo, porque la opacidad sin documentar es un instrumento de lavado de accountability. Agrega G-31 y extiende G-06, el principio 57 de la matriz y la regla 6 del WRM.' },
      { en: 'HWF-10 now prohibits simulating an interior state the system does not have, alongside deceiving anyone about its nature as software. Disclosure alone left a gap: a system could announce itself as software and still perform hesitation and warmth designed to lower the reader’s guard. The clause targets purpose rather than surface, so fluency and courtesy remain competence while injected latency, verbal hesitation and claims of feeling do not. The proposal behind it asked for communication to be functionally distinguishable from human interaction, which would have required AI Employees to write badly and would have been unauditable.', es: 'HWF-10 ahora prohíbe simular un estado interior que el sistema no tiene, además de engañar sobre su naturaleza de software. La divulgación sola dejaba un hueco: un sistema podía anunciarse como software y aun así actuar vacilación y calidez diseñadas para bajarle la guardia a quien lee. La cláusula apunta al propósito y no a la superficie, así que la fluidez y la cortesía siguen siendo competencia mientras la latencia inyectada, las muletillas de vacilación y las declaraciones de sentimiento no lo son. La propuesta que la originó pedía que la comunicación fuera funcionalmente distinguible de una interacción humana, lo que habría obligado a los AI Employees a escribir mal y habría sido inauditable.' },
      { en: 'HWF-06 now requires an audit to reconstruct the determinants of a decision — policy, knowledge, tool results, authority and versions in force — and not only its outcome. A what-only audit leaves a wrong policy, stale knowledge, a bad tool result, a model error and a misassigned role looking identical, and those five need different remedies. The clause states in its citable text that a model’s account of its own reasoning supports the reconstruction without substituting for it, because stated reasoning is not reliable evidence of cause and a standard that accepted it would license confidently wrong postmortems.', es: 'HWF-06 ahora exige que la auditoría reconstruya los determinantes de una decisión — política, conocimiento, resultados de herramientas, autoridad y versiones vigentes — y no solo su resultado. Una auditoría de solo-qué deja idénticos a una política equivocada, un conocimiento envejecido, un mal resultado de herramienta, un error de modelo y un rol mal asignado, y esos cinco necesitan remedios distintos. La cláusula dice en su texto citable que el relato del modelo sobre su propio razonamiento apoya la reconstrucción sin sustituirla, porque el razonamiento declarado no es evidencia confiable de causa y un estándar que lo aceptara habilitaría postmortems confiados y equivocados.' },
      { en: 'HWF-17 requires a role contract to be revisable, to be reviewed on a stated cadence, and to have divergence between measured outcomes and stated mission reported upward by the resource itself. It is framed as a finding rather than a request: an AI Employee has no interests to advance, and a system able to argue for its own expanded authority is a privilege-escalation path dressed as an HR feature. The decision stays with the accountable owner and never with an artificial supervisor.', es: 'HWF-17 exige que un contrato de rol sea revisable, se revise con cadencia declarada, y que la divergencia entre outcomes medidos y misión declarada la reporte hacia arriba el propio recurso. Está formulada como hallazgo y no como solicitud: un AI Employee no tiene intereses que defender, y un sistema capaz de argumentar a favor de su propia autoridad ampliada es un camino de escalamiento de privilegios vestido de función de RR. HH. La decisión queda en el accountable owner y nunca en un supervisor artificial.' },
      { en: 'HWF-02 separates supervision from accountability. An AI Employee may supervise another; accountability terminates in an identified human or governance body no matter how deep the chain. HWF-16 was added alongside it, requiring that chain to be traversable, observable, and interruptible without passing through itself. Before publication these read as a single clause requiring a direct human manager, which would have made a deep artificial hierarchy non-conformant by wording rather than by intent.', es: 'HWF-02 separa supervisión de accountability. Un AI Employee puede supervisar a otro; la accountability termina en un humano o cuerpo de gobierno identificado por profunda que sea la cadena. HWF-16 se agregó junto con ella, exigiendo que esa cadena sea recorrible, observable e interrumpible sin pasar por sí misma. Antes de publicar, ambas eran una sola cláusula que exigía manager humano directo, lo que habría vuelto no conforme a una jerarquía artificial profunda por redacción y no por intención.' },
    ],
  },
];

export const VERSIONING_POLICY: T = {
  en: 'Clause text changes require a version bump and a Board vote. Notes, examples and commentary may be corrected between versions without amending the standard. Every published version stays at its own permanent address so that a citation made today still resolves in five years.',
  es: 'Cambiar el texto de una cláusula exige subir de versión y una votación del Board. Notas, ejemplos y comentario pueden corregirse entre versiones sin enmendar el estándar. Toda versión publicada permanece en su propia dirección permanente para que una cita hecha hoy siga resolviendo en cinco años.',
};
