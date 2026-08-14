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
      { en: 'First publication: twenty-one normative clauses, the nine-property test, the WRM framework, the 120-principle matrix, the maturity model, the HWFS instrument, the Hybrid Workforce Manager role and the transition playbooks.', es: 'Primera publicación: veintiuna cláusulas normativas, el test de nueve propiedades, el marco WRM, la matriz de 120 principios, el modelo de madurez, el instrumento HWFS, el rol de Gerente de Fuerza Laboral Híbrida y los playbooks de transición.' },
      { en: 'Certification was deliberately excluded from scope. This standard scores no products and issues no seals.', es: 'La certificación se excluyó deliberadamente del alcance. Este estándar no puntúa productos ni emite sellos.' },
      { en: 'The HWFS returns a structured argument rather than a 0–100 score, resolving a contradiction present in the source research.', es: 'El HWFS devuelve un argumento estructurado en lugar de un puntaje 0–100, resolviendo una contradicción presente en la investigación de origen.' },
      { en: 'The nine-property test became conjunctive. The caveat said a system “missing several” properties may still be an agent, which implied one or two absences were tolerable — indefensible for defining properties, all nine of which the clauses already require individually, and an open invitation to seven-of-nine marketing. Qualification now requires all nine, with presence binary and depth graded by the maturity model. The proposal’s second half — tying qualification to satisfying the clauses as well — was rejected for vacuity: if violating a clause removed the category, no deployment could ever violate the standard, because violators would exit it instead of breaching it. A deployment in breach is a non-conformant AI Employee, not a non-AI-Employee.', es: 'El test de nueve propiedades se volvió conjuntivo. La advertencia decía que un sistema al que le «faltan varias» propiedades puede seguir siendo un agente, lo que implicaba que una o dos ausencias eran tolerables — indefendible para propiedades definitorias, cuyas nueve las cláusulas ya exigen individualmente, y una invitación abierta al marketing de siete-de-nueve. La calificación ahora exige las nueve, con presencia binaria y profundidad graduada por el modelo de madurez. La segunda mitad de la propuesta — atar la calificación también al cumplimiento de las cláusulas — se rechazó por vacuidad: si violar una cláusula quitara la categoría, ningún deployment podría jamás violar el estándar, porque los infractores saldrían de él en vez de incumplirlo. Un deployment en falta es un AI Employee no conforme, no un no-AI-Employee.' },
      { en: 'HWF-21 defines the unit of conformance: a deployment, never a product, platform or organisation in the abstract. Every claim publishes nine fields — organisation and deployment, role and contract version, accountable owner, risk class, clauses assessed, assessment period, evidence, known limitations, expiry — so that self-declaration stays falsifiable instead of decaying into a marketing phrase. A vendor may state that its platform enables conformant deployments and may never state that the platform conforms; the first platform bound is the author’s own. The declaration template names the standard in full: “HWFS conformance” was considered and rejected because HWFS already names the Hybrid Workforce Fit Score, and a conformance claim must not be confusable with the allocation instrument. Adds G-34 and the nine-field declaration template.', es: 'HWF-21 define la unidad de conformidad: un deployment, nunca un producto, plataforma ni organización en abstracto. Toda declaración publica nueve campos — organización y deployment, rol y versión de contrato, accountable owner, clase de riesgo, cláusulas evaluadas, periodo de evaluación, evidencia, limitaciones conocidas, expiración — para que la autodeclaración siga siendo falsificable en vez de degenerar en frase de marketing. Un proveedor puede declarar que su plataforma habilita deployments conformes y nunca que la plataforma conforma; la primera plataforma atada es la del propio autor. La plantilla de declaración nombra el estándar completo: se consideró y rechazó «HWFS conformance» porque HWFS ya nombra el Hybrid Workforce Fit Score, y una declaración de conformidad no debe confundirse con el instrumento de asignación. Agrega G-34 y la plantilla de declaración de nueve campos.' },
      { en: 'A proposal to split the document into five separately governed pieces — core standard, conformance specification, WRM framework, HWFS instrument, playbooks — and to rename it the Hybrid Workforce Governance Standard was declined. The editorial-regime separation it asked for already exists as layers under one cover, and is now stated explicitly in the reading section; five documents would multiply versions, citations and cross-reference drift for a one-editor project while fragmenting the single machine-readable file the standard is delivered as. The rename was declined on scope and position: clauses concentrate on AI Employees by subsidiarity — the human side of the workforce is already governed by labour law and existing HR standards — while the doctrine, the matrix, the transitions and HWF-20 govern the whole hybrid workforce; and “governance” would both narrow the document and shelve it against general AI-governance frameworks, the exact competition it does not seek. Extraction into separate pieces remains available to a future version and its Board if an ecosystem of auditors ever requires it.', es: 'Se declinó una propuesta de dividir el documento en cinco piezas gobernadas por separado — estándar central, especificación de conformidad, marco WRM, instrumento HWFS, playbooks — y de renombrarlo Hybrid Workforce Governance Standard. La separación de régimen editorial que pedía ya existe como capas bajo una sola portada, y ahora queda declarada explícitamente en la sección de lectura; cinco documentos multiplicarían versiones, citas y deriva de referencias cruzadas para un proyecto de un solo editor, fragmentando además el único archivo legible por máquinas en que el estándar se entrega. El renombre se declinó por alcance y posicionamiento: las cláusulas se concentran en AI Employees por subsidiariedad — el lado humano de la fuerza laboral ya está gobernado por el derecho laboral y los estándares de RR. HH. existentes — mientras la doctrina, la matriz, las transiciones y HWF-20 gobiernan la fuerza laboral híbrida completa; y «governance» estrecharía el documento y lo pondría en el estante de los marcos generales de gobernanza de IA, exactamente la competencia que no busca. La extracción en piezas separadas queda disponible para una versión futura y su Board si algún día un ecosistema de auditores la exige.' },
      { en: 'HWF-20 declares the ethical hierarchy and takes precedence over every other clause: people are ends, software is a means, and optimisation of cost, speed or capacity never overrides human rights, dignity, safety, meaningful human agency, accessibility or applicable labour protections — resource neutrality begins only after those constraints are satisfied. Adopted nearly as proposed, with a supremacy sentence added so that its position in the list is not read as its rank. It does not promise that displacement will not happen; it draws the line between displacement and abuse, naming the hierarchy the anti-KPI and the HWFS hard gates already obeyed. Adds G-33, bounds the Hybrid Workforce Manager’s neutrality mandate, and adds the OECD AI Principles to the sources.', es: 'HWF-20 declara la jerarquía ética y tiene precedencia sobre toda otra cláusula: las personas son fines, el software es un medio, y la optimización de costo, velocidad o capacidad nunca pasa por encima de los derechos humanos, la dignidad, la seguridad, la agencia humana significativa, la accesibilidad ni las protecciones laborales aplicables — la neutralidad de recurso comienza solo después de satisfechas esas restricciones. Adoptada casi como fue propuesta, con una oración de supremacía agregada para que su posición en la lista no se lea como su rango. No promete que el desplazamiento no ocurrirá; traza la línea entre desplazamiento y abuso, nombrando la jerarquía que el anti-KPI y las compuertas duras del HWFS ya obedecían. Agrega G-33, acota el mandato de neutralidad del Gerente de Fuerza Laboral Híbrida, y agrega los Principios de IA de la OCDE a las fuentes.' },
      { en: 'The WRM premise and the HWF-01 note now answer the Taylorism objection directly. A proposed rewrite would have replaced “the post exists before its occupant” with an authority-gating sentence plus co-evolution reserved for human roles. It was not adopted: the gating sentence restates HWF-03 and WRM rules 3–4, restricting co-evolution to human roles contradicts HWF-17, and deleting the premise would dissolve the allocation framework the HWFS depends on. What was adopted is the distinction the objection actually needed: the declaration governs the order of birth, not the rest of the life. Job crafting is legitimate and expected — Taylor fixed the person to the box; this standard versions the box — and every reshaping must be declared, because in a hybrid organisation the declared post is the interface: a human colleague can read an undeclared role from the corridor, an artificial one can only read the graph. No clause text changed.', es: 'La premisa del WRM y la nota de HWF-01 ahora responden directamente la objeción de taylorismo. Una reescritura propuesta habría reemplazado «el puesto existe antes que su ocupante» por una oración de compuerta de autoridad más co-evolución reservada a los roles humanos. No se adoptó: la compuerta reformula HWF-03 y las reglas 3–4 del WRM, restringir la co-evolución a roles humanos contradice HWF-17, y borrar la premisa disolvería el marco de asignación del que depende el HWFS. Se adoptó la distinción que la objeción realmente necesitaba: la declaración gobierna el orden del nacimiento, no el resto de la vida. El job crafting es legítimo y esperado — Taylor fijaba a la persona a la caja; este estándar versiona la caja — y toda remodelación debe declararse, porque en una organización híbrida el puesto declarado es la interfaz: un colega humano puede leer un rol no declarado desde el pasillo, uno artificial solo puede leer el grafo. Ningún texto de cláusula cambió.' },
      { en: 'HWF-10 and HWF-11 were rewritten for epistemic modesty. HWF-10’s citable text ended by asserting that the system “does not have” the interior states it simulates — a metaphysical thesis presented as technical fact. The rider was removed: “simulate” already carries the falsity, and the prohibition now survives any resolution of the philosophy of mind, because performing unverifiable interior states to influence a person is deception regardless. HWF-11 now states the standard’s position explicitly: it recognises no personhood, employment relationship, consciousness or moral status in an artificial system and does not claim to settle what future systems may warrant — non-recognition in the posture of corporate law, not denial. Supporting text moved to the same footing: the status line rather than the ontological line, no recognised interests rather than no interests, analogies rejected as operationally empty rather than metaphysically false.', es: 'HWF-10 y HWF-11 se reescribieron por modestia epistémica. El texto citable de HWF-10 cerraba afirmando que el sistema «no tiene» los estados interiores que simula — una tesis metafísica presentada como hecho técnico. El remate se eliminó: «simular» ya carga la falsedad, y la prohibición ahora sobrevive a cualquier resolución de la filosofía de la mente, porque actuar estados interiores inverificables para influir en una persona es engaño de todos modos. HWF-11 ahora declara explícitamente la posición del estándar: no reconoce personería, relación laboral, conciencia ni estatus moral en un sistema artificial y no pretende resolver lo que sistemas futuros puedan ameritar — no-reconocimiento en la postura del derecho societario, no negación. El texto de apoyo pasó al mismo pie: la línea de estatus en vez de la línea ontológica, sin intereses reconocidos en vez de sin intereses, analogías rechazadas por vacías operativamente y no por falsas metafísicamente.' },
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
