import type { T } from './i18n';

export interface Clause {
  id: string;
  /** The normative sentence. This is the citable text. */
  text: T;
  /** Why the clause exists. Explanatory, not normative. */
  note: T;
  /**
   * Source identifiers from lib/sources.ts whose instruments this clause is
   * built against. Lineage, never authority: none of these endorse the clause,
   * and the clause claims no legal equivalence with any of them. Present only
   * where the debt is specific enough to check.
   */
  sources?: string[];
  /**
   * True where the clause has no external instrument behind it. Stating this
   * is the honest alternative to inventing lineage: most of the standard is
   * original doctrine, and a reader deserves to know which parts.
   */
  ownDoctrine?: boolean;
}

/**
 * The Hybrid Workforce Standard, Candidate 1.0 — twenty-seven normative clauses.
 *
 * Clause text is the citable unit. Notes are commentary and may be revised
 * without a version bump; clause text may not.
 */
export const CLAUSES: Clause[] = [
  {
    id: 'HWF-01',
    text: {
      en: 'People are ends; software is a means. Optimisation of cost, speed or capacity must never override human rights, dignity, safety, meaningful human agency, accessibility or applicable labour protections. Resource neutrality begins only after those constraints are satisfied. This clause takes precedence over every other clause in this standard.',
      es: 'Las personas son fines; el software es un medio. La optimización de costo, velocidad o capacidad nunca debe pasar por encima de los derechos humanos, la dignidad, la seguridad, la agencia humana significativa, la accesibilidad ni las protecciones laborales aplicables. La neutralidad de recurso comienza solo después de satisfechas esas restricciones. Esta cláusula tiene precedencia sobre toda otra cláusula de este estándar.',
    },
    note: {
      en: 'The engine of the hybrid organisation is cost, and this standard does not pretend otherwise: displacement will happen, as it happened with the tractor, and a document that promised to prevent it would be ignored and would deserve to be. What a standard can do is what labour law did — govern the terms. This clause does not prohibit displacement: work moved lawfully, with dignity, within applicable protections and through the transition playbooks is still work moved. It draws the line between displacement and abuse, by making the constraints lexically prior: cost, speed and capacity optimise inside the space that rights, dignity, safety, meaningful human agency, accessibility and labour protections leave open, and never trade against them. Two provisions already leaned this way — the Hybrid Workforce Manager’s anti-KPI refuses to measure the role by humans replaced, and the HWFA hard gates cap allocation regardless of the economics. This clause names the hierarchy they were obeying. Its number is not its rank: it binds every other clause, and a conflict with any of them resolves in its favour. The lineage is explicit: the OECD’s human-centred AI principles place dignity, autonomy, social justice and labour rights inside the definition of trustworthy AI, not alongside it.',
      es: 'El motor de la organización híbrida es el costo, y este estándar no finge lo contrario: el desplazamiento va a ocurrir, como ocurrió con el tractor, y un documento que prometiera impedirlo sería ignorado y merecería serlo. Lo que un estándar puede hacer es lo que hizo la legislación laboral — gobernar los términos. Esta cláusula no prohíbe el desplazamiento: trabajo movido legalmente, con dignidad, dentro de las protecciones aplicables y a través de los playbooks de transición sigue siendo trabajo movido. Traza la línea entre desplazamiento y abuso, volviendo las restricciones léxicamente prioritarias: costo, velocidad y capacidad optimizan dentro del espacio que dejan abierto los derechos, la dignidad, la seguridad, la agencia humana significativa, la accesibilidad y las protecciones laborales, y nunca se intercambian contra ellos. Dos disposiciones ya apuntaban en esta dirección — el anti-KPI del Gerente de Fuerza Laboral Híbrida se niega a medir el rol por humanos reemplazados, y las compuertas duras del HWFA acotan la asignación sin importar la economía. Esta cláusula nombra la jerarquía que ambas obedecían. Su número no es su rango: obliga a toda otra cláusula, y un conflicto con cualquiera de ellas se resuelve a su favor. El linaje es explícito: los principios de IA humanocéntrica de la OCDE colocan la dignidad, la autonomía, la justicia social y los derechos laborales dentro de la definición de IA confiable, no junto a ella.',
    },
    sources: ['S24'],
  },
  {
    id: 'HWF-02',
    text: {
      en: 'Certain decisions are reserved. An artificial resource must never be the sole decider in matters with material effect on hiring, dismissal, discipline or compensation; on health and safety; on credit, insurance or access to essential services; on legal rights; on any use of force; or on the treatment of vulnerable people. A reserved decision is Critical by definition, whatever the assessed class of the post. Reservation does not exclude artificial participation — analysis, drafting and recommendation may be delegated. The decision itself may not, and an approval by a human who cannot restate the case and decide otherwise is a signature, not a decision.',
      es: 'Ciertas decisiones están reservadas. Un recurso artificial nunca debe ser el único decisor en asuntos con efecto material sobre contratación, despido, disciplina o compensación; sobre salud y seguridad; sobre crédito, seguros o acceso a servicios esenciales; sobre derechos legales; sobre cualquier uso de la fuerza; o sobre el trato a personas vulnerables. Una decisión reservada es Crítica por definición, sin importar la clase evaluada del puesto. La reserva no excluye la participación artificial — el análisis, la redacción y la recomendación pueden delegarse. La decisión misma no, y una aprobación de un humano que no puede reformular el caso y decidir distinto es una firma, no una decisión.',
    },
    note: {
      en: 'HWF-51 classifies by judgement, and judgement can be motivated: without a floor, an organisation under cost pressure classifies dismissal decisions as Moderate and lets the queue decide. This list is the floor no assessment can lower — the subjects where being wrong lands on a person rather than on a ledger. The second half of the clause exists because human-in-the-loop degenerates by default: an approver facing two hundred recommendations a day, each pre-scored and pre-drafted, approves at a rate that makes understanding impossible, and automation bias does the rest. That is not oversight; it is the ceremony of oversight. The test of a real decision is operational: the human can reconstruct the determinants — HWF-41 exists to hand them the material — has the authority and the time to decide otherwise, and a divergent decision carries no penalty by default. Where approval throughput makes restating the case impossible, the organisation has automated the decision and retained a human signature: responsibility lost rather than delegated, in HWF-21’s terms. The list interoperates with GDPR Article 22 and the EU AI Act’s human-oversight requirements in the same posture as the risk classification — designed to travel, without claiming legal equivalence.',
      es: 'HWF-51 clasifica por juicio, y el juicio puede estar motivado: sin un piso, una organización bajo presión de costos clasifica las decisiones de despido como Moderadas y deja que la cola decida. Esta lista es el piso que ninguna evaluación puede bajar — los asuntos donde equivocarse cae sobre una persona y no sobre un libro contable. La segunda mitad de la cláusula existe porque el human-in-the-loop degenera por defecto: un aprobador frente a doscientas recomendaciones al día, cada una pre-puntuada y pre-redactada, aprueba a un ritmo que vuelve imposible entender, y el sesgo de automatización hace el resto. Eso no es supervisión; es la ceremonia de la supervisión. La prueba de una decisión real es operativa: el humano puede reconstruir los determinantes — HWF-41 existe para entregarle el material — tiene la autoridad y el tiempo para decidir distinto, y una decisión divergente no carga penalidad por defecto. Donde el ritmo de aprobación vuelve imposible reformular el caso, la organización automatizó la decisión y conservó una firma humana: responsabilidad perdida y no delegada, en términos de HWF-21. La lista interopera con el Artículo 22 del GDPR y los requisitos de supervisión humana del EU AI Act en la misma postura que la clasificación de riesgo — diseñada para viajar, sin afirmar equivalencia jurídica.',
    },
    sources: ['S26', 'S25'],
  },
  {
    id: 'HWF-03',
    text: {
      en: 'No post may be materially transformed — automated, moved to or from assisted human, returned to a person, or retired — without a recorded human impact assessment, completed before the transition begins. The assessment must name who is affected and how: changes to work, autonomy and surveillance; the risk of deskilling; the intensified load on those who absorb the exceptions; discrimination and accessibility; displacement and headcount; training and reassignment; effects on customers and third parties. Affected workers and their representatives must be informed and consulted before the transformation, not after it. The assessment is not required to reach a favourable conclusion; it is required to name, measure and govern the consequences.',
      es: 'Ningún puesto puede transformarse materialmente — automatizarse, pasar a humano asistido o dejar de serlo, revertirse a una persona o retirarse — sin una evaluación de impacto humano registrada, completada antes de que la transición comience. La evaluación debe nombrar a quiénes afecta y cómo: cambios en el trabajo, la autonomía y la vigilancia; el riesgo de deskilling; la carga intensificada de quienes absorben las excepciones; discriminación y accesibilidad; desplazamiento y reducción de personal; capacitación y reasignación; efectos sobre clientes y terceros. Los trabajadores afectados y sus representantes deben ser informados y consultados antes de la transformación, no después. La evaluación no está obligada a llegar a una conclusión favorable; está obligada a nombrar, medir y gobernar las consecuencias.',
    },
    note: {
      en: 'This is HWF-01 given an instrument. A hierarchy of constraints means little if nothing checks it at the moment it is tested, and the moment is the transition: the playbook as first written moved from baseline to handoff with people appearing once, as released capacity, in step ten. The assessment runs before step one. Two of its dimensions repay attention because nobody volunteers them. Deskilling is the quiet one: the organisation that automates its junior work stops producing seniors, and discovers it the year the seniors leave. The exception load is the cruel one: automation absorbs the easy cases and leaves humans a stream of nothing but hard ones, then measures them against throughput set in the era of easy cases. Consultation is mandatory and is not consent: this standard grants no veto, and labour law in each jurisdiction may grant more — the clause is a floor, in the same posture toward EU AI Act Article 26 as the rest of the document, designed to travel without claiming legal equivalence. The closing sentence keeps HWF-01’s honesty: an assessment obliged to bless the transition would be theatre, and consequences that are named, measured and governed are the difference between displacement and abuse.',
      es: 'Esto es HWF-01 con un instrumento. Una jerarquía de restricciones vale poco si nada la verifica en el momento en que se pone a prueba, y ese momento es la transición: el playbook tal como se escribió primero iba de baseline a handoff con las personas apareciendo una vez, como capacidad liberada, en el paso diez. La evaluación corre antes del paso uno. Dos de sus dimensiones merecen atención porque nadie las reporta voluntariamente. El deskilling es la silenciosa: la organización que automatiza su trabajo junior deja de producir seniors, y lo descubre el año en que los seniors se van. La carga de excepciones es la cruel: la automatización absorbe los casos fáciles y le deja a los humanos un flujo de puros casos difíciles, y luego los mide contra un throughput fijado en la era de los casos fáciles. La consulta es obligatoria y no es consentimiento: este estándar no otorga veto, y la ley laboral de cada jurisdicción puede otorgar más — la cláusula es piso, en la misma postura hacia el Artículo 26 del EU AI Act que el resto del documento, diseñada para viajar sin afirmar equivalencia jurídica. La última oración conserva la honestidad de HWF-01: una evaluación obligada a bendecir la transición sería teatro, y las consecuencias nombradas, medidas y gobernadas son la diferencia entre desplazamiento y abuso.',
    },
    sources: ['S27', 'S33'],
  },
  {
    id: 'HWF-04',
    text: {
      en: 'A person materially affected by an AI Employee’s action holds rights against the deployment: to know that an artificial system took part; to know which organisation answers for it; to have the decision reviewed by a human with authority to change it; to correct the data it relied on; to contest it; to receive a comprehensible explanation of its determinants; and to obtain redress where the decision was wrong. The explanation owed is operational evidence — the policy applied, the data relied on, the tools consulted and the authority exercised — never a reasoning transcript, and it is released through human judgement: privileged or confidential material may be withheld, every withholding is recorded with its reason, and confidentiality may narrow an explanation but never cancels the duty to give one the person can act on.',
      es: 'Una persona materialmente afectada por la acción de un AI Employee tiene derechos frente al deployment: saber que intervino un sistema artificial; saber qué organización responde por él; obtener revisión de la decisión por un humano con autoridad para cambiarla; corregir los datos en que se apoyó; impugnarla; recibir una explicación comprensible de sus determinantes; y obtener reparación cuando la decisión fue incorrecta. La explicación debida es evidencia operacional — la política aplicada, los datos utilizados, las herramientas consultadas y la autoridad ejercida — nunca una transcripción de razonamiento, y se entrega a través de criterio humano: el material privilegiado o confidencial puede retenerse, toda retención se registra con su razón, y la confidencialidad puede estrechar una explicación pero nunca cancela el deber de dar una sobre la que la persona pueda actuar.',
    },
    note: {
      en: 'Every clause before this one binds the organisation inward; this one gives the person on the receiving end standing. It is cheap for a conformant deployment, because HWF-41 already obliges the organisation to reconstruct these determinants for itself — the explanation is a translation of an artifact that must already exist, and an organisation that finds these rights expensive is discovering that it was not conformant with HWF-41. A reasoning transcript is refused for the same reason HWF-41 refuses it as audit evidence, plus one: handed to an affected person, it is an unfalsifiable story wearing the authority of an explanation. Operational evidence is disputable — a person can correct a datum, contest a policy, challenge a tool result. An unverifiable narrative offers nothing that can be contested, and disputability is what turns the correction and contest rights from words into mechanisms. Review means review by a human with authority to change the outcome; anything less is the signature problem of HWF-02 again. The release runs through human judgement because both failure modes are real: published fraud thresholds are defeated fraud thresholds — adversarial exposure is a factor HWF-51 already names — and a request addressed to the AI Employee is answered through the organisation, because “explain yourself” is also a prompt-extraction surface. The counter-lock keeps the exception from swallowing the right: withholding is HWF-35’s discipline faced outward — legitimate, owned, recorded, never silent — and the floor is an explanation the person can act on. Redress follows the law of the jurisdiction; the clause is a floor, interoperating with GDPR Articles 15 and 22(3) and EU AI Act Article 86 in the document’s standing posture.',
      es: 'Todas las cláusulas anteriores obligan a la organización hacia adentro; esta le da voz a la persona que recibe el efecto. Es barata para un deployment conforme, porque HWF-41 ya obliga a la organización a reconstruir estos determinantes para sí misma — la explicación es una traducción de un artefacto que ya debe existir, y la organización a la que estos derechos le salen caros está descubriendo que no cumplía HWF-41. La transcripción de razonamiento se rechaza por la misma razón por la que HWF-41 la rechaza como evidencia de auditoría, más una: entregada a una persona afectada, es una historia infalsificable vestida con la autoridad de una explicación. La evidencia operacional es disputable — una persona puede corregir un dato, impugnar una política, cuestionar un resultado de herramienta. Una narración no verificable no ofrece nada que se pueda impugnar, y la disputabilidad es lo que convierte los derechos de corrección e impugnación de palabras en mecanismos. Revisión significa revisión por un humano con autoridad para cambiar el resultado; cualquier cosa menor es otra vez el problema de la firma de HWF-02. La entrega corre por criterio humano porque ambos modos de falla son reales: los umbrales de fraude publicados son umbrales de fraude derrotados — la exposición adversarial es un factor que HWF-51 ya nombra — y una solicitud dirigida al AI Employee se responde a través de la organización, porque «explícate» es también una superficie de extracción de prompt. El contra-candado impide que la excepción se trague el derecho: retener es la disciplina de HWF-35 volteada hacia afuera — legítima, con dueño, registrada, nunca silenciosa — y el piso es una explicación sobre la que la persona pueda actuar. La reparación sigue la ley de la jurisdicción; la cláusula es piso, e interopera con los Artículos 15 y 22(3) del GDPR y el Artículo 86 del EU AI Act en la postura de siempre del documento.',
    },
    sources: ['S28', 'S26'],
  },
  {
    id: 'HWF-11',
    text: {
      en: 'An AI Employee must hold a defined role, not merely a persona or a system prompt.',
      es: 'Un AI Employee debe ocupar un rol definido, no solamente una personalidad o un system prompt.',
    },
    note: {
      en: 'The post exists before its occupant. A name, a tone of voice and a set of instructions describe a persona; a role states what result must be produced, with what authority, measured how. Before does not mean frozen: a post may be reshaped by whoever holds it — Taylor fixed the person to the box, this standard versions the box — and HWF-61 exists so that the reshaping happens as declared revision rather than tacit drift.',
      es: 'El puesto existe antes que su ocupante. Un nombre, un tono y un conjunto de instrucciones describen una personalidad; un rol establece qué resultado debe producirse, con qué autoridad y medido cómo. Antes no significa congelado: un puesto puede ser remodelado por quien lo ocupa — Taylor fijaba a la persona a la caja, este estándar versiona la caja — y HWF-61 existe para que la remodelación ocurra como revisión declarada y no como deriva tácita.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-12',
    text: {
      en: 'Not every agent qualifies as an AI Employee. It must clear a threshold of maturity and governance. The test works in both directions: a deployment that exhibits the nine properties in operation is an AI Employee whatever the organisation calls it, and the burden of demonstrating non-qualification lies with the deployer. The properties are facts about the deployment, not paperwork — an unwritten role contract is a governance failure, not a category exit.',
      es: 'No todo agente califica como AI Employee. Debe superar un umbral de madurez y gobierno. El test funciona en ambas direcciones: un deployment que exhibe las nueve propiedades en operación es un AI Employee sin importar cómo lo llame la organización, y la carga de demostrar la no-calificación recae en el deployer. Las propiedades son hechos del deployment, no papeleo — un contrato de rol sin escribir es una falla de gobierno, no una salida de la categoría.',
    },
    note: {
      en: 'This clause is what makes the category worth anything. If the label applies to everything, it distinguishes nothing. An organisation with twenty excellent agents and zero AI Employees has clarity rather than a problem — provided none of the twenty exhibits the nine properties in operation.',
      es: 'Esta cláusula es lo que le da valor a la categoría. Si la etiqueta aplica a todo, no distingue nada. Una organización con veinte agentes excelentes y cero AI Employees tiene claridad y no un problema — siempre que ninguno de los veinte exhiba las nueve propiedades en operación.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-13',
    text: {
      en: 'Humans and AI Employees may share an operational graph while retaining distinct status and rights. This standard recognises no personhood, employment relationship, consciousness or moral status in an artificial system, and does not claim to settle what future systems may warrant: for present operational and legal purposes, an AI Employee is a non-human software system.',
      es: 'Humanos y AI Employees pueden compartir un grafo operativo manteniendo condición y derechos distintos. Este estándar no reconoce personería, relación laboral, conciencia ni estatus moral en un sistema artificial, y no pretende resolver lo que sistemas futuros puedan ameritar: para los fines operativos y jurídicos actuales, un AI Employee es un sistema de software no humano.',
    },
    note: {
      en: 'A shared org chart is an administrative convenience, not a claim about minds. Non-recognition is not denial: the clause takes the posture of corporate law, which grants and withholds legal status without pronouncing on metaphysics, and this standard asserts nothing about what an artificial system ultimately is or could become. It does not need to. Dignity, health, rest, labour rights and belonging are protected here as properties of persons — the thirteen exclusively human principles of the matrix — and every clause in this document holds however the philosophy of mind is one day resolved, because none of them depends on the answer. If that question ever acquires an answer that matters operationally, addressing it is work for a future version and its Board, not for silent drift in the present one.',
      es: 'Un organigrama compartido es una conveniencia administrativa, no una afirmación sobre mentes. No reconocer no es negar: la cláusula adopta la postura del derecho societario, que concede y retiene estatus jurídico sin pronunciarse sobre metafísica, y este estándar no afirma nada sobre lo que un sistema artificial es o podría llegar a ser en última instancia. No lo necesita. La dignidad, la salud, el descanso, los derechos laborales y la pertenencia se protegen aquí como propiedades de las personas — los trece principios exclusivamente humanos de la matriz — y cada cláusula de este documento se sostiene como sea que algún día se resuelva la filosofía de la mente, porque ninguna depende de la respuesta. Si esa pregunta alguna vez adquiere una respuesta que importe operativamente, atenderla es trabajo de una versión futura y su Board, no de deriva silenciosa en la presente.',
    },
    sources: ['S1', 'S2'],
  },
  {
    id: 'HWF-14',
    text: {
      en: 'An AI identity must never deceive. The prohibitions are observable results, not intentions: passing as human; claiming feelings, suffering or personal experience; emitting signals reasonably capable of inducing a false belief about what the system is or undergoes; optimising against recorded objectives for emotional dependency or the exploitation of vulnerability; and concealing artificial involvement at a material point. Disclosure happens at the outset and is renewed when the system assumes a material function. Courtesy, linguistic empathy and personalisation remain legitimate so long as they assert no interiority.',
      es: 'Una identidad de IA nunca debe engañar. Las prohibiciones son resultados observables, no intenciones: hacerse pasar por humano; afirmar sentimientos, sufrimiento o experiencia personal; emitir señales razonablemente capaces de inducir una creencia falsa sobre lo que el sistema es o atraviesa; optimizar contra objetivos registrados la dependencia emocional o la explotación de la vulnerabilidad; y ocultar la intervención artificial en un punto material. La divulgación ocurre al inicio y se renueva cuando el sistema asume una función material. La cortesía, la empatía lingüística y la personalización siguen siendo legítimas mientras no afirmen interioridad.',
    },
    note: {
      en: 'The predecessor of this clause tested purpose: whether a behaviour existed to suggest a mind with something at stake. The diagnosis behind that test survives; the test does not, because intent is poor audit material — nobody can depose the soul of a design decision, and a standard whose other clauses demand operational evidence cannot keep one whose proof is mind-reading. Two verifiable standards replace it. The effect standard is objective: would a reasonable person, knowing what has been disclosed, form a false belief from the signal? Injected latency with a typing indicator fails — it exists to be read as a person typing. Streaming a long answer in a disclosed context passes, because the only belief it induces — that the system is producing text — is true. Disclosure settles what the system is; it does not neutralise signals about what the system undergoes, which is why injected latency, performed hesitation and claimed feelings fail the standard even after disclosure: the false belief they induce is about experience, not nature (G-30). The recorded-objective standard makes “deliberately” auditable without confession: optimisation targets are artifacts — eval metrics, experiment objectives, reward functions — and they are exactly the determinants HWF-41 preserves, so an audit reads what the system was tuned to maximise. If engagement was lifted through attachment proxies, the record convicts. The record matters because the temptation is structural: a system optimised for engagement may find a short path through attachment signals, whether or not anyone set out to build one. And a technique that improves satisfaction because the reader believes something false is manipulation whatever its metrics say. A material function is the moment the interaction stops being conversational and becomes consequential — a payment, a commitment, a personal disclosure — and the renewal duty tracks EU AI Act Article 50’s transparency obligations in the document’s standing posture: designed to travel, without claiming legal equivalence. The closing permission is load-bearing: courtesy, linguistic empathy and personalisation assert no interiority, and nothing in this clause requires an AI Employee to write badly.',
      es: 'La antecesora de esta cláusula probaba el propósito: si una conducta existía para sugerir una mente con algo en juego. El diagnóstico detrás de esa prueba sobrevive; la prueba no, porque la intención es mal material de auditoría — nadie puede deponer el alma de una decisión de diseño, y un estándar cuyas demás cláusulas exigen evidencia operacional no puede conservar una cuya prueba sea leer mentes. La reemplazan dos estándares verificables. El estándar de efecto es objetivo: ¿una persona razonable, sabiendo lo que se ha divulgado, formaría una creencia falsa a partir de la señal? La latencia inyectada con indicador de tipeo falla — existe para leerse como una persona tecleando. Transmitir una respuesta larga por streaming en un contexto divulgado pasa, porque la única creencia que induce — que el sistema está produciendo texto — es verdadera. La divulgación resuelve qué es el sistema; no neutraliza las señales sobre qué atraviesa, y por eso la latencia inyectada, la vacilación actuada y los sentimientos declarados fallan el estándar incluso después de la divulgación: la creencia falsa que inducen es sobre la experiencia, no sobre la naturaleza (G-30). El estándar del objetivo registrado vuelve auditable el «deliberadamente» sin confesión: los blancos de optimización son artefactos — métricas de evaluación, objetivos de experimentos, funciones de recompensa — y son exactamente los determinantes que HWF-41 preserva, así que una auditoría lee qué se afinó el sistema para maximizar. Si el engagement se levantó con proxies de apego, el registro condena. El registro importa porque la tentación es estructural: un sistema al que se le optimiza el engagement puede encontrar en las señales de apego un camino corto, lo haya buscado alguien o no. Y una técnica que mejora la satisfacción porque quien lee cree algo falso es manipulación digan lo que digan sus métricas. Una función material es el momento en que la interacción deja de ser conversacional y se vuelve consecuencial — un pago, un compromiso, una confesión personal — y el deber de renovación sigue las obligaciones de transparencia del Artículo 50 del EU AI Act en la postura de siempre del documento: diseñada para viajar, sin afirmar equivalencia jurídica. El permiso final carga peso: la cortesía, la empatía lingüística y la personalización no afirman interioridad, y nada en esta cláusula exige que un AI Employee escriba mal.',
    },
    sources: ['S30'],
  },
  {
    id: 'HWF-21',
    text: {
      en: 'Every AI Employee must have exactly one accountable owner. Supervision may be delegated to another AI Employee; accountability may not. Every chain of supervision terminates in an identified human or human governance body. One is primary, not exclusive: the owner’s accountability does not extinguish the distinct obligations of a system owner, data controller, security or compliance owner, technology vendor or legally responsible directors. And where the terminus is a governance body, the body must have an identified chair, stated decision rules and the capacity to act in an emergency.',
      es: 'Todo AI Employee debe tener exactamente un accountable owner. La supervisión puede delegarse a otro AI Employee; la accountability no. Toda cadena de supervisión termina en un humano o cuerpo humano de gobierno identificado. Uno es primario, no exclusivo: la accountability del owner no extingue las obligaciones distintas de un system owner, un controller de datos, un dueño de seguridad o compliance, un proveedor tecnológico o los directores legalmente responsables. Y donde el terminus es un cuerpo de gobierno, el cuerpo debe tener un presidente identificado, reglas de decisión declaradas y la capacidad de actuar en una emergencia.',
    },
    note: {
      en: 'Supervision and accountability are different jobs and this clause separates them. Supervision directs work: routing, review, prioritising, receiving exceptions. An artificial resource can do that. Accountability means answering for the outcome, which requires the capacity to bear a consequence that is legal, financial or reputational. A chain of responsibility ending in something that cannot bear a consequence has not delegated responsibility; it has lost it. An AI Employee may receive work from many people, but unity of command still applies: a resource with two owners has none, and a resource with no owner is administratively orphaned no matter how well it is integrated technically. Exactly one answers the question of who answers for this resource; it was never meant to answer who else has obligations. A deployment carries a map of them — the data controller’s duties under privacy law, the security and compliance owners’, the vendor’s contractual and product liabilities, the directors’ legal responsibility — and unity of ownership locates the operational terminus while extinguishing none of these; HWF-23 already routes blame to the determinants wherever they sit on that map. The committee sentence exists because a governance body without a chair, decision rules and emergency capacity is not an owner but a diffusion mechanism: everyone’s responsibility is no one’s, and a body that needs a meeting to act cannot hold the power to suspend that HWF-23 requires. The chair does not replace the body; it makes the body able to act between its own meetings, with ratification after.',
      es: 'Supervisión y accountability son trabajos distintos y esta cláusula los separa. La supervisión dirige el trabajo: rutear, revisar, priorizar, recibir excepciones. Un recurso artificial puede hacerlo. La accountability es responder por el resultado, y eso exige capacidad de soportar una consecuencia jurídica, económica o reputacional. Una cadena de responsabilidad que termina en algo incapaz de soportar consecuencia no delegó responsabilidad: la perdió. Un AI Employee puede recibir trabajo de muchas personas, pero la unidad de mando sigue aplicando: un recurso con dos dueños no tiene ninguno, y un recurso sin dueño queda huérfano administrativamente por bien integrado que esté. Exactamente uno responde la pregunta de quién responde por este recurso; nunca pretendió responder quién más tiene obligaciones. Un deployment carga un mapa de ellas — los deberes del controller de datos bajo la ley de privacidad, los de los dueños de seguridad y compliance, las responsabilidades contractuales y de producto del proveedor, la responsabilidad legal de los directores — y la unicidad de la ownership ubica el terminus operativo sin extinguir ninguna; HWF-23 ya rutea la culpa a los determinantes donde sea que estén en ese mapa. La oración del comité existe porque un cuerpo de gobierno sin presidente, reglas de decisión y capacidad de emergencia no es un owner sino un mecanismo de difusión: la responsabilidad de todos es la de nadie, y un cuerpo que necesita una reunión para actuar no puede sostener el poder de suspender que HWF-23 exige. El presidente no reemplaza al cuerpo; lo vuelve capaz de actuar entre sus propias sesiones, con ratificación posterior.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-22',
    text: {
      en: 'A supervision chain must be traversable and observable end to end. The accountable human or body must be able to identify every AI Employee beneath it, reconstruct any action taken in its name, and intervene at any point in the chain without passing through it.',
      es: 'Una cadena de supervisión debe ser recorrible y observable de punta a punta. El humano o cuerpo accountable debe poder identificar a cada AI Employee por debajo suyo, reconstruir cualquier acción ejecutada en su nombre, e intervenir en cualquier punto de la cadena sin pasar por ella.',
    },
    note: {
      en: 'Intervening without passing through the chain is the load-bearing part. If stopping an AI Employee three levels down requires asking the one above it, the accountable party holds a request rather than control. Depth is not forbidden and no fixed limit is set here, because the real limit is span of control: a principle this framework classifies as adapted rather than abolished, meaning scale may grow but only against tooling, dashboards and supervision limits that make the growth governable. A single human nominally accountable for a thousand AI Employees across six levels, with no instrument capable of showing what any of them did, has an organisational chart rather than accountability. Describing this architecture is not endorsing it: the standard states what must remain true if an organisation builds one.',
      es: 'Intervenir sin pasar por la cadena es la parte que sostiene todo. Si detener a un AI Employee tres niveles abajo exige pedírselo al que está encima, quien responde tiene una petición y no control. La profundidad no está prohibida ni se fija un límite aquí, porque el límite real es el span of control: un principio que este marco clasifica como adaptado y no como abolido, o sea que la escala puede crecer pero solo contra tooling, dashboards y límites de supervisión que hagan gobernable ese crecimiento. Un solo humano nominalmente accountable por mil AI Employees repartidos en seis niveles, sin un instrumento capaz de mostrar qué hizo cada uno, tiene un organigrama y no accountability. Describir esta arquitectura no es endosarla: el estándar dice qué debe seguir siendo cierto si una organización la construye.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-23',
    text: {
      en: 'Accountable ownership is a resourced capability, not a name in a field. The accountable owner must hold competence over the domain, effective authority, time and capacity for the span supervised, direct access to the evidence, sufficient independence from the pressures that own the outcome, the power to suspend the resource, and training on its limitations and on automation bias. The suspension mechanism must be exercised on a stated cadence — never longer than twelve months, and shorter for High and Critical posts: an unexercised suspension mechanism is not an effective operational control. Accountability must not be discharged onto the supervising human: where a failure’s determinants trace to policy, design, tooling or deployment, responsibility lands there, and a human placed at the end of a process is not a crumple zone for blame that belongs upstream.',
      es: 'La accountable ownership es una capacidad dotada de recursos, no un nombre en un campo. El accountable owner debe tener competencia sobre el dominio, autoridad efectiva, tiempo y capacidad para el alcance que supervisa, acceso directo a la evidencia, independencia suficiente de las presiones que son dueñas del resultado, el poder de suspender el recurso, y entrenamiento sobre sus limitaciones y sobre el sesgo de automatización. El mecanismo de suspensión debe ejercitarse con una cadencia declarada — nunca mayor a doce meses, y más corta para puestos Altos y Críticos: un mecanismo de suspensión no ejercitado no constituye un control operativo efectivo. La accountability no debe descargarse sobre el humano que supervisa: donde los determinantes de una falla llevan a la política, el diseño, el tooling o el deployment, la responsabilidad aterriza ahí, y un humano colocado al final de un proceso no es una zona de absorción para culpa que pertenece aguas arriba.',
    },
    note: {
      en: 'HWF-22’s note already named the failure: a thousand AI Employees with no instrument capable of showing what any of them did is an organisational chart rather than accountability. This clause states the conditions that make ownership real, and two repay attention. Independence is the sharp one: an owner whose bonus depends on the throughput the resource produces faces a conflict no good intention resolves, and must not be the sole suspension authority — supervision and outcome pressure must be separated, which is HWF-33’s separation of duties raised to the level of the role. Time and capacity is the quiet one: span of control is an adapted principle, so scale grows only against tooling — nominal ownership without the capacity to supervise is not effective control. The suspension drill is the fire-drill discipline: exercised on a stated cadence and recorded, where a failure discovered in an exercise is a finding and one discovered in production is an incident — the first real pull must not be the first pull ever. Put plainly: a kill switch that has never been pulled is decoration. The crumple-zone prohibition takes its name from Elish’s study of how blame in automated systems lands on the nearest human while control sat upstream, and its mechanism from HWF-41: blame follows the determinants, not the proximity. The supervising human answers for what they controlled — their review, their intervention — and what they could not control lands on whoever owned it. This also completes HWF-21 from the other side: bearing a consequence requires having had control, and consequence without control is not accountability but scapegoating — a role no competent person would accept, which is exactly why the prohibition protects the owner as much as it protects the truth.',
      es: 'La nota de HWF-22 ya había nombrado la falla: mil AI Employees sin un instrumento capaz de mostrar qué hizo cada uno son un organigrama y no accountability. Esta cláusula declara las condiciones que vuelven real la ownership, y dos merecen atención. La independencia es la filosa: un dueño cuyo bono depende del throughput que el recurso produce enfrenta un conflicto que ninguna buena intención resuelve, y no debe ser la única autoridad de suspensión — la supervisión y la presión de resultado deben separarse, que es la separación de funciones de HWF-33 elevada al nivel del rol. Tiempo y capacidad es la silenciosa: el span of control es un principio adaptado, así que la escala solo crece contra tooling — la titularidad nominal sin capacidad de supervisión no constituye control efectivo. El ejercicio de suspensión es la disciplina del simulacro de incendio: ejercitado con cadencia declarada y registrado, donde una falla descubierta en ejercicio es un hallazgo y una descubierta en producción es un incidente — la primera activación real no puede ser la primera activación. Dicho sin rodeos: un kill switch que nunca se ha jalado es decoración. La prohibición de zona de absorción toma su nombre del estudio de Elish sobre cómo la culpa en sistemas automatizados aterriza en el humano más cercano mientras el control estaba aguas arriba, y su mecanismo de HWF-41: la culpa sigue a los determinantes, no a la proximidad. El humano que supervisa responde por lo que controló — su revisión, su intervención — y lo que no podía controlar aterriza en quien lo poseía. Esto además completa HWF-21 desde el otro lado: portar una consecuencia exige haber tenido control, y consecuencia sin control no es accountability sino chivo expiatorio — un rol que ninguna persona competente aceptaría, que es exactamente por lo que la prohibición protege al dueño tanto como protege la verdad.',
    },
    sources: ['S29'],
  },
  {
    id: 'HWF-31',
    text: {
      en: 'Authority must be explicit, limited and revocable.',
      es: 'La autoridad debe ser explícita, limitada y revocable.',
    },
    note: {
      en: 'What the resource may decide without approval has to be written down before it operates, not inferred afterwards from what it happened to do.',
      es: 'Lo que el recurso puede decidir sin aprobación debe estar escrito antes de que opere, no inferido después a partir de lo que resultó haciendo.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-32',
    text: {
      en: 'Access must follow least privilege.',
      es: 'El acceso debe cumplir least privilege.',
    },
    note: {
      en: 'Context is capability, but it is also risk surface. More access is not more competence; it is a larger blast radius.',
      es: 'El contexto es capacidad, pero también es superficie de riesgo. Más acceso no es más competencia; es un blast radius mayor.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-33',
    text: {
      en: 'High-risk actions must support human approval.',
      es: 'Las acciones de alto riesgo deben soportar aprobación humana.',
    },
    note: {
      en: 'Proportionality is the rule: the higher the cost of the error and the harder it is to reverse, the more approval the action carries. Separation of duties applies, so whoever initiates need not approve. What counts as high-risk is not left to taste: it resolves against the risk classification of HWF-51.',
      es: 'La regla es proporcionalidad: a mayor costo del error y menor reversibilidad, más aprobación soporta la acción. Aplica separación de funciones, así que quien inicia no necesariamente aprueba. Qué cuenta como alto riesgo no queda al gusto: se resuelve contra la clasificación de riesgo de HWF-51.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-34',
    text: {
      en: 'The system must know when to escalate rather than improvise.',
      es: 'El sistema debe saber cuándo escalar en vez de improvisar.',
    },
    note: {
      en: 'A resource that produces a convincing answer instead of raising a doubt is more dangerous than a less capable one that is better governed. Every exception needs a destination — and no metric may punish the journey: a system measured on fewer escalations learns silence, so escalation is judged by the missed-versus-unnecessary pair on the Hybrid Workforce Manager’s scorecard, never by volume alone.',
      es: 'Un recurso que produce una respuesta convincente en vez de escalar una duda es más peligroso que uno menos brillante pero mejor gobernado. Toda excepción necesita un destino — y ninguna métrica puede castigar el viaje: un sistema medido por escalar menos aprende silencio, así que la escalación se juzga por el par perdidas-versus-innecesarias del scorecard del Gerente de Fuerza Laboral Híbrida, nunca por volumen a solas.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-35',
    text: {
      en: 'Context provisioning must be deliberate in both directions. Withholding context from an AI Employee is a legitimate design decision, whether to protect the information or to prevent measurable degradation of the decision — anchoring, context contamination, saturation; it is not an omission and must not be treated as one. Every restriction must be recorded in the role contract as a context boundary record, versioned like any other authority, and available to the audit. Responsibility for a decision degraded by withheld context lies with whoever withheld it.',
      es: 'El aprovisionamiento de contexto debe ser deliberado en ambas direcciones. Retenerle contexto a un AI Employee es una decisión de diseño legítima, sea para proteger la información o para prevenir la degradación medible de la decisión — anclaje, contaminación de contexto, saturación; no es una omisión y no debe tratarse como tal. Toda restricción debe registrarse en el contrato de rol como un registro de frontera de contexto, versionarse como cualquier otra autoridad, y estar disponible para la auditoría. La responsabilidad por una decisión degradada por contexto retenido recae en quien lo retuvo.',
    },
    note: {
      en: 'The risk justification was always here: context has been divided into must know, may consult and must not access since the first draft. What was missing was the second reason to restrict. A resource that sees every prior dispute anchors on them; one that reads the last diagnosis inherits it; one that is given everything relevant drowns the signal in the merely related. Anchoring, confirmation bias and operational overload are degradations of the decision rather than leaks of information, and a manager reading a risk-only clause has no ground to withhold anything that is not sensitive. The record is the price of the tool, because deliberate opacity is otherwise the perfect instrument for laundering accountability \u2014 \u201cthe system did not have that context\u201d is the AI-native descendant of \u201cnobody told me\u201d. A restriction that is written down, versioned and auditable is design; the same restriction undocumented is a defence prepared in advance, and the closing sentence of the clause takes that defence away. None of this legitimises depriving a resource of the context its role requires: withholding what it needs to escalate well is not opacity but sabotage of HWF-34.',
      es: 'La justificaci\u00f3n de riesgo siempre estuvo: el contexto se divide en debe saber, puede consultar y no debe acceder desde el primer borrador. Lo que faltaba era la segunda raz\u00f3n para restringir. Un recurso que ve todas las disputas anteriores se ancla en ellas; uno que lee el \u00faltimo diagn\u00f3stico lo hereda; uno al que se le entrega todo lo relevante ahoga la se\u00f1al en lo meramente relacionado. El anclaje, el sesgo de confirmación y la sobrecarga operativa son degradaciones de la decisión y no fugas de información, y un manager que lee una cl\u00e1usula de solo-riesgo no tiene motivo para retener nada que no sea sensible. El registro es el precio de la herramienta, porque la opacidad deliberada es, sin \u00e9l, el instrumento perfecto para lavar accountability \u2014 \u00abel sistema no ten\u00eda ese contexto\u00bb es el descendiente nativo de IA de \u00aba m\u00ed nadie me avis\u00f3\u00bb. Una restricci\u00f3n escrita, versionada y auditable es dise\u00f1o; la misma restricci\u00f3n sin documentar es una defensa preparada de antemano, y la \u00faltima oraci\u00f3n de la cl\u00e1usula le quita esa defensa. Nada de esto legitima privar al recurso del contexto que su rol necesita: retenerle el que requiere para escalar bien no es opacidad sino sabotaje del HWF-34.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-41',
    text: {
      en: 'Every material action must be auditable, and the audit must reconstruct the determinants of the decision as well as its outcome: the policy, knowledge, tool results, authority and versions in force when the action was taken. A model’s own account of its reasoning may support that reconstruction but never substitutes for it. What counts as material is set by the post’s risk class: from High upward the determinants are bound to each action, and for Low and Moderate posts, correlating event logs against the version manifest of HWF-43 is conformant reconstruction.',
      es: 'Toda acción material debe ser auditable, y la auditoría debe reconstruir los determinantes de la decisión además de su resultado: la política, el conocimiento, los resultados de herramientas, la autoridad y las versiones vigentes al momento de ejecutarse la acción. El relato que el propio modelo haga de su razonamiento puede apoyar esa reconstrucción pero nunca la sustituye. Qué cuenta como material lo fija la clase de riesgo del puesto: de Alto hacia arriba los determinantes se atan a cada acción, y para puestos Bajos y Moderados, correlacionar event logs contra el manifiesto de versiones de HWF-43 es reconstrucción conforme.',
    },
    note: {
      en: 'Actor, input, tool, action, approval, result and timestamp tell you that something happened. They do not tell you why, and without the why an organisation cannot attribute a failure to its cause: a policy that was wrong, knowledge that had gone stale, a tool that returned bad data, a model that erred, or a role that should never have been assigned to an artificial resource at all. Those five demand different remedies, and they leave identical records under a what-only audit. The clause it most protects is HWF-34: with outcomes alone you can see that the system answered, never that it should have doubted. The material is largely already required elsewhere — HWF-42 governs the provenance of what the resource knew, HWF-43 the versions of model, policy, tools and knowledge base — so what this clause adds is the obligation to bind them to a specific action rather than hold them as a general inventory. A model’s stated reasoning is admissible as supporting evidence and is not proof of cause: what a system reports having thought may not be what produced its output, and an organisation that treats that narration as the why will write confident and wrong postmortems. Where reasoning traces are retained, their scope, retention and deletion fall under HWF-42 like any other memory, because they routinely contain retrieved customer data.',
      es: 'Actor, input, herramienta, acción, aprobación, resultado y timestamp dicen que algo pasó. No dicen por qué, y sin el porqué una organización no puede atribuir una falla a su causa: una política equivocada, un conocimiento que envejeció, una herramienta que devolvió datos malos, un modelo que erró, o un rol que nunca debió asignarse a un recurso artificial. Esos cinco exigen remedios distintos y dejan registros idénticos bajo una auditoría de solo-qué. La cláusula que más protege es HWF-34: con solo el resultado se ve que el sistema respondió, nunca que debió dudar. El material ya está exigido en buena parte en otro lado — HWF-42 gobierna la procedencia de lo que el recurso sabía, HWF-43 las versiones de modelo, política, herramientas y knowledge base — así que lo que esta cláusula agrega es la obligación de ligarlas a una acción concreta en vez de sostenerlas como inventario general. El razonamiento declarado por un modelo es admisible como evidencia de apoyo y no es prueba de causa: lo que un sistema reporta haber pensado puede no ser lo que produjo su salida, y una organización que tome esa narración por el porqué va a escribir postmortems confiados y equivocados. Cuando se retengan trazas de razonamiento, su alcance, retención y borrado caen bajo HWF-42 como cualquier otra memoria, porque suelen contener datos de clientes recuperados.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-42',
    text: {
      en: 'Memory is one data system among several, and governance covers them all: inputs, outputs, tool results, memory and the inferences derived from them. Each must have a stated purpose and legal basis, minimisation, quality and currency controls, sensitive-data handling, rules for international transfer and for any vendor use — training included — per-company isolation, and verifiable deletion. And the audit trail is itself such a system: records kept to reconstruct decisions can surveil the employees and customers inside them, so logs are governed with the same severity as the operation they audit — integrity protected, access controlled, purpose bound.',
      es: 'La memoria es un sistema de datos entre varios, y el gobierno los cubre todos: inputs, outputs, resultados de herramientas, memoria y las inferencias derivadas de ellos. Cada uno debe tener finalidad y base legal declaradas, minimización, controles de calidad y actualidad, manejo de datos sensibles, reglas para transferencia internacional y para cualquier uso por el proveedor — entrenamiento incluido — aislamiento por empresa, y eliminación verificable. Y el registro de auditoría es él mismo uno de estos sistemas: los registros guardados para reconstruir decisiones pueden vigilar a los empleados y clientes que aparecen en ellos, así que los logs se gobiernan con la misma severidad que la operación que auditan — integridad protegida, acceso controlado, finalidad acotada.',
    },
    note: {
      en: 'Remembering improves performance and creates exposure at the same time. An undated policy produces answers that are consistent and wrong; a historical exception should not silently become a rule. The wider scope exists because the deployment’s data surface was never just memory: prompts carry customers’ confessions, tool results carry account data, outputs carry decisions, and an inference — this customer is probably in financial distress — is data manufactured about a person who never handed it over, governed as if collected and often more sensitive than anything that was. Vendor use is named because it is the quiet channel: data can leave through a model provider’s training pipeline without a trace in the organisation’s own systems, so the rule must be contractual and stated — and it is a claim a conformance declaration can carry. Deletion that cannot be evidenced is retention with extra steps. The log sentence closes a loop this standard opened itself: HWF-41, HWF-22, HWF-71, HWF-04 and HWF-23 each thicken an archive in which employees and customers appear — who said what, who approved what, who was slow to intervene — and the more conformant the deployment, the richer that archive grows. Its purpose is reconstruction and accountability; mining it to score employees or profile customers is a new purpose requiring its own basis, and an organisation that turns its safety apparatus into a surveillance apparatus poisons the incentive to log honestly. HWF-03 already lists surveillance among its impact dimensions; this clause governs its largest new source.',
      es: 'Recordar mejora el desempeño y crea exposición al mismo tiempo. Una política sin fecha produce respuestas consistentes y equivocadas; una excepción histórica no debería convertirse en regla en silencio. El alcance ampliado existe porque la superficie de datos del deployment nunca fue solo la memoria: los prompts cargan confesiones de clientes, los resultados de herramientas cargan datos de cuentas, los outputs cargan decisiones, y una inferencia — este cliente probablemente está en apuros financieros — es un dato fabricado sobre una persona que nunca lo entregó, gobernado como si se hubiera recolectado y con frecuencia más sensible que todo lo que sí se recolectó. El uso por el proveedor se nombra porque es el canal silencioso: los datos pueden salir por el pipeline de entrenamiento del proveedor del modelo sin dejar rastro en los sistemas propios de la organización, así que la regla debe ser contractual y declarada — y es una afirmación que una declaración de conformidad puede cargar. Una eliminación que no puede evidenciarse es retención con pasos extra. La oración de los logs cierra un circuito que este estándar abrió solo: HWF-41, HWF-22, HWF-71, HWF-04 y HWF-23 engordan cada una un archivo donde aparecen empleados y clientes — quién dijo qué, quién aprobó qué, quién tardó en intervenir — y cuanto más conforme el deployment, más rico crece ese archivo. Su propósito es la reconstrucción y la accountability; minarlo para puntuar empleados o perfilar clientes es un propósito nuevo que exige su propia base, y una organización que convierte su aparato de seguridad en aparato de vigilancia envenena el incentivo de loggear honesto. HWF-03 ya lista la vigilancia entre sus dimensiones de impacto; esta cláusula gobierna su fuente nueva más grande.',
    },
    sources: ['S31'],
  },
  {
    id: 'HWF-43',
    text: {
      en: 'An AI Employee must have an identifiable version of model, policies, tools and knowledge base.',
      es: 'Un AI Employee debe tener una versión identificable de modelo, políticas, herramientas y knowledge base.',
    },
    note: {
      en: 'Without versioning it is impossible to say what authority existed at a given moment, or which change produced an improvement or a regression.',
      es: 'Sin versionado es imposible saber qué autoridad existía en un momento dado, ni qué cambio produjo una mejora o un deterioro.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-44',
    text: {
      en: 'Performance must be measured by outcomes, quality, risk and cost — never by activity, hours, tokens or message volume.',
      es: 'El desempeño debe medirse por outcomes, calidad, riesgo y costo — nunca por actividad, horas, tokens o cantidad de mensajes.',
    },
    note: {
      en: 'Speed makes activity look like value. A badly designed process that produced ten errors will produce a hundred once automated, and the dashboard will call it throughput.',
      es: 'La velocidad hace que la actividad parezca valor. Un proceso mal diseñado que producía diez errores producirá cien al automatizarse, y el dashboard lo llamará productividad.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-51',
    text: {
      en: 'Every AI Employee post must carry a declared risk class from this standard’s scale, assessed twice: inherent risk before controls and residual risk after them. The class follows inherent risk — controls lower the residual, never the class. Autonomy, supervision and approval requirements scale with the class; a Critical action always terminates in a final human decision, and a Prohibited use cannot be made conformant by any control.',
      es: 'Todo puesto de AI Employee debe portar una clase de riesgo declarada de la escala de este estándar, evaluada dos veces: riesgo inherente antes de los controles y riesgo residual después de ellos. La clase sigue al riesgo inherente — los controles bajan el residual, nunca la clase. La autonomía, la supervisión y los requisitos de aprobación escalan con la clase; una acción Crítica termina siempre en una decisión humana final, y un uso Prohibido no puede volverse conforme mediante ningún control.',
    },
    note: {
      en: 'The class answers HWF-33’s open term: what counts as high-risk resolves against this scale rather than against taste. Judgement runs on seven factors — rights affected, scale of people touched, reversibility, presence of vulnerable people, data sensitivity, adversarial exposure and concentration of power — never on the cost of error alone, because a cheap error at scale against vulnerable people is not a cheap error. The lock in the citable text exists for one reason: without it, every vendor conversation becomes “we added a guardrail, so it is Low now”. Controls earn a better residual; they do not buy a better class. The HWFA derives a provisional class from cost of error and reversibility while allocating; the declared class of this clause weighs all seven factors and prevails, and Prohibited is not an instrument output but a precondition — the HWFA asks who should execute a use, and a Prohibited use has no who. The tiers are designed to interoperate with risk-based regimes such as the EU AI Act without claiming legal equivalence: mapping a class onto a legal category is an exercise for counsel, not a property of this document.',
      es: 'La clase responde el término abierto de HWF-33: qué cuenta como alto riesgo se resuelve contra esta escala y no contra el gusto. El juicio corre sobre siete factores — derechos afectados, escala de personas alcanzadas, reversibilidad, presencia de personas vulnerables, sensibilidad de los datos, exposición adversarial y concentración de poder — nunca sobre el costo del error a solas, porque un error barato a escala contra personas vulnerables no es un error barato. El candado del texto citable existe por una razón: sin él, toda conversación con un vendor se convierte en «le pusimos un guardrail, así que ahora es Low». Los controles ganan un mejor residual; no compran una mejor clase. El HWFA deriva una clase provisional de costo del error y reversibilidad al asignar; la clase declarada de esta cláusula pesa los siete factores y prevalece, y Prohibido no es un output del instrumento sino una precondición — el HWFA pregunta quién debe ejecutar un uso, y un uso Prohibido no tiene quién. Los niveles están diseñados para interoperar con regímenes basados en riesgo como el EU AI Act sin afirmar equivalencia jurídica: mapear una clase a una categoría legal es un ejercicio de abogados, no una propiedad de este documento.',
    },
    sources: ['S25'],
  },
  {
    id: 'HWF-52',
    text: {
      en: 'A version is a record, not a proof. Every material change to a deployment — model, tools, policies, knowledge or authority — must be revalidated before it operates, at a depth set by the risk class: representative cases, exception and escalation paths, and regression against the prior baseline; from High upward, adversarial testing against injection and exfiltration, bias analysis and drift monitoring. Where AI Employees work as a team, systemic risks are part of the validation: circular delegation, feedback loops, memory contamination, correlated failure across a shared model or vendor, and lateral propagation of authority.',
      es: 'Una versión es un registro, no una prueba. Todo cambio material a un deployment — modelo, herramientas, políticas, conocimiento o autoridad — debe revalidarse antes de operar, a una profundidad fijada por la clase de riesgo: casos representativos, rutas de excepción y escalamiento, y regresión contra el baseline anterior; de Alto hacia arriba, pruebas adversariales contra inyección y exfiltración, análisis de sesgo y monitoreo de drift. Donde los AI Employees trabajan en equipo, los riesgos sistémicos son parte de la validación: delegación circular, feedback loops, contaminación de memoria, falla correlacionada sobre un mismo modelo o proveedor, y propagación lateral de autoridad.',
    },
    note: {
      en: 'The battery of tests presupposes a stochastic system — something that reasons, and can therefore drift, hallucinate and be injected. Deterministic automation does none of this, and none of this clause ever touched it: automation sits rungs below AI Employee on the vocabulary ladder and fails the nine-property test, so the obligations attach to the category and the category excludes determinism. Deterministic automation does not exhibit the drift risks proper to a stochastic system, so demanding that monitoring of it measures nothing. Among AI Employees the dial is the risk class, not all-or-nothing: a Low-risk deployment revalidates cases, exceptions and regression, and the adversarial and bias battery arrives from High upward, because HWF-51 exists precisely so that obligations can scale. The clause closes an asymmetry the standard carried: birth is exquisitely gated — twelve steps, shadow mode, a performance gate, a transition earned with evidence — while change had no gate at all, and a model swap could reach production untested. The twelve steps earn the transition; this clause keeps it earned. The team risks exist because HWF-22 permits pyramids: delegation can circle, feedback can compound, memory can contaminate downstream context, authority can propagate laterally through handoffs — and the least intuitive risk is correlated failure. Human teams do not fail independently either, but diversity of experience and judgement tends to distribute some blind spots; instances sharing a model, vendor, context or configuration concentrate them. The precedent is common-cause failure, long known to reliability engineering; what is new is the speed, reach and opacity with which it propagates. Diversity and fallback are its mitigation. On method, this standard states what must be validated and when; ISO/IEC 42001 and 42005 and the NIST AI RMF supply management systems for the how, and this document complements rather than recreates them — the same subsidiarity it applies to labour law.',
      es: 'La batería de pruebas presupone un sistema estocástico — algo que razona, y que por tanto puede driftear, alucinar y ser inyectado. La automatización determinista no hace nada de eso, y nada de esta cláusula la tocó jamás: la automatización está peldaños debajo de AI Employee en la escalera de vocabulario y falla el test de nueve propiedades, así que las obligaciones se atan a la categoría y la categoría excluye el determinismo. La automatización determinista no presenta los riesgos de deriva propios de un sistema estocástico, de modo que exigirle ese monitoreo no mide nada. Entre AI Employees el dial es la clase de riesgo, no el todo-o-nada: un deployment de riesgo Bajo revalida casos, excepciones y regresión, y la batería adversarial y de sesgo llega de Alto hacia arriba, porque HWF-51 existe precisamente para que las obligaciones escalen. La cláusula cierra una asimetría que el estándar cargaba: el nacimiento está exquisitamente compuertado — doce pasos, shadow mode, performance gate, una transición ganada con evidencia — mientras el cambio no tenía compuerta alguna, y un swap de modelo podía llegar a producción sin probarse. Los doce pasos ganan la transición; esta cláusula la mantiene ganada. Los riesgos de equipo existen porque HWF-22 permite pirámides: la delegación puede circular, el feedback puede componerse, la memoria puede contaminar el contexto aguas abajo, la autoridad puede propagarse lateralmente por los handoffs — y el riesgo menos intuitivo es la falla correlacionada. Los equipos humanos tampoco fallan de forma independiente, pero la diversidad de experiencia y criterio tiende a distribuir algunos puntos ciegos; las instancias que comparten modelo, proveedor, contexto o configuración los concentran. El precedente es la falla de causa común, conocida desde hace décadas en ingeniería de confiabilidad; lo nuevo es la velocidad, el alcance y la opacidad con que se propaga. La diversidad y el fallback son su mitigación. Sobre el método, este estándar dice qué debe validarse y cuándo; ISO/IEC 42001 y 42005 y el NIST AI RMF aportan sistemas de gestión para el cómo, y este documento los complementa en vez de recrearlos — la misma subsidiariedad que aplica al derecho laboral.',
    },
    sources: ['S14', 'S32', 'S33'],
  },
  {
    id: 'HWF-61',
    text: {
      en: 'A role contract must be revisable and must be reviewed at a stated cadence, never longer than twelve months. Divergence between measured outcomes and the stated mission, authority or KPIs must be detected by independent monitoring against the contract — the primary control — and where the AI Employee’s own performance data shows it first, the resource must report it to the accountable owner as a finding: a signal that supplements independent monitoring, never replaces it. The decision to change a role contract is always human and belongs to the accountable owner; it is never taken by an artificial supervisor and never applied automatically. Every clocked obligation on a post — reviews, re-justifications, renewals, drills and revalidations — appears in a single governance calendar in the role contract, with one named owner of the schedule.',
      es: 'Un contrato de rol debe ser revisable y debe revisarse con una cadencia declarada, nunca mayor a doce meses. La divergencia entre los outcomes medidos y la misión, autoridad o KPIs declarados debe detectarse por monitoreo independiente contra el contrato — el control primario — y cuando los propios datos de desempeño del AI Employee la muestren primero, el recurso debe reportarla al accountable owner como hallazgo: una señal que complementa el monitoreo independiente, nunca lo reemplaza. La decisión de cambiar un contrato de rol es siempre humana y le corresponde al accountable owner; nunca la toma un supervisor artificial y nunca se aplica automáticamente. Toda obligación con reloj sobre un puesto — revisiones, re-justificaciones, renovaciones, simulacros y revalidaciones — aparece en un único calendario de gobernanza en el contrato de rol, con un solo dueño con nombre del cronograma.',
    },
    note: {
      en: 'The most common defect in a role contract is not that it was written badly. It is that nobody has looked at it since the day of deployment, while the products, the policies, the customers and the exception patterns all moved. The resource sits closer to the work than its owner does and sees the divergence first, so requiring it to report what its own data shows costs little and prevents silent drift — though a resource whose model or configuration is the problem shares the blind spot, which is why the clause makes independent monitoring the primary control and the self-report a supplement. A finding is not a petition: an AI Employee has no recognised interests to advance, and treating its report as a negotiation would reintroduce exactly the confusion HWF-13 exists to prevent. The decision always rises to a human, and never to the artificial supervisor above it, because a system that can widen its own scope through another system does not have a bounded scope.',
      es: 'El defecto más común de un contrato de rol no es que esté mal escrito. Es que nadie lo miró desde el día del deployment, mientras los productos, las políticas, los clientes y los patrones de excepción se movieron todos. El recurso está más cerca del trabajo que su dueño y ve la divergencia primero, así que exigirle que reporte lo que sus propios datos muestran cuesta poco y evita la deriva silenciosa — aunque un recurso cuyo modelo o configuración son el problema comparte el punto ciego, y por eso la cláusula hace del monitoreo independiente el control primario y del auto-reporte un complemento. Un hallazgo no es una petición: un AI Employee no tiene intereses reconocidos que defender, y tratar su reporte como una negociación reintroduciría exactamente la confusión que HWF-13 existe para impedir. La decisión sube siempre a un humano, y nunca al supervisor artificial que tenga encima, porque un sistema capaz de ampliar su propio alcance a través de otro sistema no tiene un alcance acotado.',
    },
    sources: ['S11'],
  },
  {
    id: 'HWF-62',
    text: {
      en: 'Every transition between occupant types — human, assisted human or artificial — and every move to or from deterministic automation must be evaluable against a baseline and carry explicit rollback criteria.',
      es: 'Toda transición entre tipos de ocupante — humano, humano asistido o artificial — y todo paso hacia o desde automatización determinista debe poder evaluarse contra un baseline y tener criterios de rollback explícitos.',
    },
    note: {
      en: 'Without a baseline recorded before the change, the organisation can celebrate an improvement it never made. Rollback criteria written after the results are known are not criteria; they are justification.',
      es: 'Sin un baseline registrado antes del cambio, la organización puede celebrar una mejora que nunca ocurrió. Criterios de rollback escritos después de conocer los resultados no son criterios; son justificación.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-63',
    text: {
      en: 'An AI Employee post must not outlive its justification. At a stated cadence, never longer than twelve months — and again within a stated window after any material change of strategy, policy, regulation, product or structure — the accountable owner must re-justify the post’s existence against current strategy, a question prior to and separate from performance, because a resource can meet every KPI in a post the organisation no longer needs. Re-justification must consider whether a modified scope keeps the post current before it concludes retirement; a modified scope is re-justified on its own merits and never inherits the prior justification, and work invented to preserve a post is a failed justification rather than a redesign. Continuation is never the default: a post whose existence cannot be re-justified proceeds to retirement, and its access ends with it. A lapsed review is not a failed one: it escalates to the accountable owner and restricts or suspends the post in proportion while the review is forced — retirement is the outcome of a failed justification, never of a missed calendar.',
      es: 'Un puesto de AI Employee no debe sobrevivir a su justificación. Con una cadencia declarada, nunca mayor a doce meses — y de nuevo dentro de una ventana declarada tras todo cambio material de estrategia, política, regulación, producto o estructura —, el accountable owner debe re-justificar la existencia del puesto frente a la estrategia vigente, una pregunta previa y separada del desempeño, porque un recurso puede cumplir todos sus KPIs en un puesto que la organización ya no necesita. La re-justificación debe considerar si un alcance modificado mantiene vigente el puesto antes de concluir su retiro; un alcance modificado se re-justifica por sus propios méritos y nunca hereda la justificación anterior, y el trabajo inventado para preservar un puesto es una justificación fallida, no un rediseño. La continuidad nunca es el default: un puesto cuya existencia no puede re-justificarse pasa a retiro, y sus accesos terminan con él. Una revisión vencida no es una revisión reprobada: escala al accountable owner y restringe o suspende el puesto en proporción mientras se fuerza la revisión — el retiro es el resultado de una justificación fallida, nunca de un calendario perdido.',
    },
    note: {
      en: 'Human pruning pressures are weak and fail often — bureaucracies carry dead posts for decades. But they exist: a salary line that a budget review questions, an occupant who leaves and forces a backfill decision. An artificial post removes even those weak triggers — its cost fragments across compute, integration, supervision, data and incidents, and rarely surfaces as a line anyone must defend; and nobody ever resigns from it — so a pointless post does not merely persist by default; it loses the last occasions on which anyone would notice it. In this framework’s own classification that makes organisational pruning an adapted principle: a mechanism that was already unreliable for humans disappears entirely for artificial occupants, and this clause is the replacement. What accumulates without it is organisational debt, and its most dangerous form is the digital zombie: credentials, data access and standing authority kept alive for work nobody needs — under HWF-32, risk surface with no return. The existence question comes before the performance question because a good answer to the second is the usual anaesthetic against the first. The cadence belongs in the role contract, and the twelve-month ceiling in the citable text is a maximum rather than a recommendation: high-volume and high-risk posts deserve shorter. This review may share its calendar with the HWF-61 review; it must never share its default. A calendar alone is not enough: a post can fall out of alignment the day after a change of direction and then wait eleven months for its turn, which is why the clause adds an event trigger. And the order of the review matters as much as its frequency. Asking first what would have to change is what any competent organisation does with a human post when strategy moves, and it transfers to an artificial occupant for economic rather than compassionate reasons: provisioned context, governed memory, integrations, calibration and the trust built around the post are expensive to rebuild, and rebuilding usually costs more than adapting. The lock against abusing that posture sits in the citable text — a modified scope inherits nothing, and inventing work to keep a post alive is the failure this clause exists to name.',
      es: 'Las presiones humanas de poda son débiles y fallan seguido — las burocracias cargan puestos muertos por décadas. Pero existen: una línea de salario que una revisión de presupuesto cuestiona, un ocupante que se va y fuerza la decisión de reemplazo. Un puesto artificial elimina hasta esos disparadores débiles — su costo se fragmenta entre cómputo, integración, supervisión, datos e incidentes, y rara vez aparece como una línea que alguien deba defender; y nadie renuncia jamás de él — así que un puesto sin sentido no solo persiste por defecto; pierde las últimas ocasiones en que alguien lo notaría. En la propia clasificación de este marco, eso convierte a la poda organizacional en un principio adaptado: un mecanismo que ya era poco confiable para humanos desaparece por completo para ocupantes artificiales, y esta cláusula es el reemplazo. Lo que se acumula sin ella es deuda organizacional, y su forma más peligrosa es el zombi digital: credenciales, accesos a datos y autoridad vigente mantenidos vivos para trabajo que nadie necesita — con HWF-32 en mano, superficie de riesgo sin retorno. La pregunta de existencia va antes que la de desempeño porque una buena respuesta a la segunda es el anestésico habitual contra la primera. La cadencia pertenece al contrato de rol, y el techo de doce meses del texto citable es un máximo y no una recomendación: los puestos de alto volumen y alto riesgo merecen menos. Esta revisión puede compartir calendario con la de HWF-61; nunca debe compartir su default. El calendario solo no alcanza: un puesto puede quedar desalineado el día después de un cambio de rumbo y esperar once meses a que le toque, y por eso la cláusula añade un disparador por evento. Y el orden de la revisión importa tanto como su frecuencia. Preguntar primero qué habría que modificar es lo que hace cualquier organización competente con un puesto humano cuando cambia la estrategia, y se traslada al ocupante artificial por economía y no por compasión: el contexto provisionado, la memoria gobernada, las integraciones, la calibración y la confianza construida alrededor del puesto son caros de reconstruir, y reconstruir suele costar más que adaptar. El candado contra el abuso de esa postura está en el texto citable — un alcance modificado no hereda nada, e inventarle trabajo a un puesto para mantenerlo vivo es exactamente la falla que la cláusula existe para nombrar.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-64',
    text: {
      en: 'Offboarding must revoke access and transfer or destroy context safely.',
      es: 'El offboarding debe revocar accesos y transferir o destruir contexto de forma segura.',
    },
    note: {
      en: 'Revoke credentials, disable tools, stop schedules and queues, rotate secrets, transfer outstanding work, preserve evidence. Offboarding is as important as onboarding and is almost always skipped.',
      es: 'Revocar credenciales, deshabilitar herramientas, detener schedules y colas, rotar secretos, transferir trabajo pendiente, preservar evidencia. El offboarding es tan importante como el onboarding y casi siempre se omite.',
    },
    ownDoctrine: true,
  },
  {
    id: 'HWF-71',
    text: {
      en: 'Conformance belongs to a deployment, never to a product, a platform or an organisation in the abstract. A conformance claim must name its scope — the organisation and deployment, the role and role-contract version, the accountable owner, the risk class, the clauses assessed, the assessment period and its expiry — and must publish its evidence and known limitations. A vendor may state that its platform enables conformant deployments; it may never state that the platform itself conforms, and the enabling claim requires at least one live, unexpired customer declaration, publicly linked. A claim of conformance to the standard assesses all of its clauses; anything narrower is styled partial conformance and names the clauses assessed. No declaration is valid for more than twelve months.',
      es: 'La conformidad pertenece a un deployment, nunca a un producto, una plataforma ni una organización en abstracto. Una declaración de conformidad debe nombrar su alcance — la organización y el deployment, el rol y la versión del contrato de rol, el accountable owner, la clase de riesgo, las cláusulas evaluadas, el periodo de evaluación y su expiración — y debe publicar su evidencia y sus limitaciones conocidas. Un proveedor puede declarar que su plataforma habilita deployments conformes; nunca puede declarar que la plataforma misma conforma, y el claim de habilitación exige al menos una declaración viva y no vencida de un cliente, enlazada públicamente. Una declaración de conformidad con el estándar evalúa todas sus cláusulas; algo más estrecho se rotula conformidad parcial y nombra las cláusulas evaluadas. Ninguna declaración es válida por más de doce meses.',
    },
    note: {
      en: 'Self-declared conformance without a defined unit degenerates into a marketing phrase within months, and the remedy is not certification — excluded from this standard’s scope and not returning — but falsifiability: a claim that names its deployment, owner, clauses, period, evidence and limitations can be verified or refuted by anyone, which makes the public a cheaper auditor than a certifier and a harder one to capture. An expired declaration is not a declaration; renewal may share its calendar with the existence review of HWF-63. The vendor sentence is the anti-laundering lock, and the first platform bound by it is the author’s own: AIEmpl.com may state that it enables conformant deployments, and may never call itself conformant. A standard that does not govern how it is invoked ends up meaning whatever marketing needs it to mean.',
      es: 'La conformidad autodeclarada sin unidad definida degenera en frase de marketing en cuestión de meses, y el remedio no es la certificación — excluida del alcance de este estándar y sin regreso — sino la falsificabilidad: una declaración que nombra su deployment, su dueño, sus cláusulas, su periodo, su evidencia y sus limitaciones puede ser verificada o refutada por cualquiera, lo que convierte al público en un auditor más barato que un certificador y más difícil de capturar. Una declaración vencida no es una declaración; la renovación puede compartir calendario con la revisión de existencia de HWF-63. La oración del proveedor es el candado anti-lavado, y la primera plataforma atada por ella es la del propio autor: AIEmpl.com puede declarar que habilita deployments conformes, y nunca puede llamarse a sí misma conforme. Un estándar que no gobierna cómo se lo invoca termina significando lo que el marketing necesite que signifique.',
    },
    sources: ['S9'],
  },
];

/** The nine-field conformance declaration (HWF-71). */
export const DECLARATION: { title: T; intro: T; fields: T[]; example: T } = {
  title: { en: 'The conformance declaration', es: 'La declaración de conformidad' },
  intro: {
    en: 'Every conformance claim publishes these nine fields (HWF-71). A claim missing any of them is not a conformance claim under this standard. The risk-class field carries its factor-by-factor reasoning, not the label alone. And a published declaration is a commercial representation, actionable under consumer-protection and competition law: substantiate it before publishing, and withdraw or correct it promptly when it lapses or fails.',
    es: 'Toda declaración de conformidad publica estos nueve campos (HWF-71). Una declaración a la que le falte cualquiera no es una declaración de conformidad bajo este estándar. El campo de clase de riesgo carga su razonamiento factor por factor, no solo la etiqueta. Y una declaración publicada es una representación comercial, accionable bajo el derecho del consumidor y de competencia: susténtela antes de publicarla, y retírela o corríjala oportunamente cuando venza o deje de ser válida.',
  },
  fields: [
    { en: 'Organisation and deployment', es: 'Organización y deployment' },
    { en: 'Role and role-contract version', es: 'Rol y versión del contrato de rol' },
    { en: 'Accountable owner', es: 'Accountable owner' },
    { en: 'Risk class', es: 'Clase de riesgo' },
    { en: 'Clauses assessed', es: 'Cláusulas evaluadas' },
    { en: 'Assessment period', es: 'Periodo de evaluación' },
    { en: 'Evidence', es: 'Evidencia' },
    { en: 'Known limitations', es: 'Limitaciones conocidas' },
    { en: 'Expiry date of the declaration', es: 'Fecha de expiración de la declaración' },
  ],
  example: {
    en: '“This deployment of the Accounts Receivable Coordinator conforms to the Hybrid Workforce Standard, Candidate 1.0, for the stated scope and assessment period.”',
    es: '«Este deployment de la Coordinadora de Cobros conforma con el Hybrid Workforce Standard, Candidate 1.0, para el alcance y periodo de evaluación declarados.»',
  },
};

/** The five-tier risk classification (HWF-51). */
export const RISK_INTRO: T = {
  en: 'A class is judged on inherent risk across seven factors — rights affected, scale of people touched, reversibility, presence of vulnerable people, data sensitivity, adversarial exposure and concentration of power — never on the cost of error alone. Controls lower residual risk; they never lower the class.',
  es: 'La clase se juzga sobre el riesgo inherente a través de siete factores — derechos afectados, escala de personas alcanzadas, reversibilidad, presencia de personas vulnerables, sensibilidad de los datos, exposición adversarial y concentración de poder — nunca sobre el costo del error a solas. Los controles bajan el riesgo residual; nunca bajan la clase.',
};

export interface RiskTier {
  name: T;
  meaning: T;
  regime: T;
}

export const RISK_CLASSES: RiskTier[] = [
  {
    name: { en: 'Prohibited', es: 'Prohibido' },
    meaning: {
      en: 'A use that cannot be made conformant by any control: it requires deceiving people about the system (HWF-14), overriding the constraints of HWF-01, or operating outside any accountable chain.',
      es: 'Un uso que no puede volverse conforme mediante ningún control: exige engañar a las personas sobre el sistema (HWF-14), pasar sobre las restricciones de HWF-01, u operar fuera de toda cadena accountable.',
    },
    regime: {
      en: 'Not performed under this standard, by any resource configuration.',
      es: 'No se realiza bajo este estándar, con ninguna configuración de recursos.',
    },
  },
  {
    name: { en: 'Critical', es: 'Crítico' },
    meaning: {
      en: 'Severe or irreversible consequences for rights, safety, money at scale or the organisation itself.',
      es: 'Consecuencias severas o irreversibles para derechos, seguridad, dinero a escala o la organización misma.',
    },
    regime: {
      en: 'Mandatory final human decision on every action, separation of duties, autonomy capped at rungs 1–3 of the autonomy ladder, reinforced audit.',
      es: 'Decisión humana final obligatoria en cada acción, separación de funciones, autonomía limitada a los peldaños 1–3 de la escalera de autonomía, auditoría reforzada.',
    },
  },
  {
    name: { en: 'High', es: 'Alto' },
    meaning: {
      en: 'Serious but generally recoverable consequences, or moderate ones amplified by scale, data sensitivity or adversarial exposure.',
      es: 'Consecuencias serias pero en general recuperables, o moderadas amplificadas por escala, sensibilidad de datos o exposición adversarial.',
    },
    regime: {
      en: 'Impact assessment before deployment, independent validation, reinforced supervision, human approval on defined action classes.',
      es: 'Evaluación de impacto previa al deployment, validación independiente, supervisión reforzada, aprobación humana en clases de acción definidas.',
    },
  },
  {
    name: { en: 'Moderate', es: 'Moderado' },
    meaning: {
      en: 'Contained consequences, reversible with rework and some friction.',
      es: 'Consecuencias contenidas, reversibles con retrabajo y algo de fricción.',
    },
    regime: {
      en: 'Bounded autonomy inside the authority matrix, continuous monitoring, sampled review.',
      es: 'Autonomía acotada dentro de la matriz de autoridad, monitoreo continuo, revisión por muestreo.',
    },
  },
  {
    name: { en: 'Low', es: 'Bajo' },
    meaning: {
      en: 'Internal, easily absorbed consequences.',
      es: 'Consecuencias internas y fácilmente absorbibles.',
    },
    regime: {
      en: 'Management by exception with baseline controls: identity, audit trail, escalation.',
      es: 'Operación por excepción con controles base: identidad, audit trail, escalamiento.',
    },
  },
];

export const RISK_NOTE: T = {
  en: 'The HWFA derives a provisional class from cost of error and reversibility during allocation; the declared class of HWF-51 weighs all seven factors and prevails. The tiers are designed to interoperate with risk-based regimes such as the EU AI Act without claiming legal equivalence: mapping a class onto a legal category is an exercise for counsel, not a property of this document.',
  es: 'El HWFA deriva una clase provisional de costo del error y reversibilidad al asignar; la clase declarada de HWF-51 pesa los siete factores y prevalece. Los niveles están diseñados para interoperar con regímenes basados en riesgo como el EU AI Act sin afirmar equivalencia jurídica: mapear una clase a una categoría legal es un ejercicio de abogados, no una propiedad de este documento.',
};

/** The eight blocks of Candidate 1.0. Presentation structure: the citation
 * unit stays HWF-nn, and future clauses append at the end of the numbering. */
export const BLOCKS: { numeral: string; title: T; from: number; to: number }[] = [
  { numeral: '0', title: { en: 'Human foundation', es: 'Fundamento humano' }, from: 1, to: 4 },
  { numeral: '1', title: { en: 'The category', es: 'La categoría' }, from: 5, to: 8 },
  { numeral: '2', title: { en: 'Accountability', es: 'Accountability' }, from: 9, to: 11 },
  { numeral: '3', title: { en: 'Authority and operational control', es: 'Autoridad y control operativo' }, from: 12, to: 16 },
  { numeral: '4', title: { en: 'Evidence and data', es: 'Evidencia y datos' }, from: 17, to: 20 },
  { numeral: '5', title: { en: 'Risk and validation', es: 'Riesgo y validación' }, from: 21, to: 22 },
  { numeral: '6', title: { en: 'Lifecycle', es: 'Ciclo de vida' }, from: 23, to: 26 },
  { numeral: '7', title: { en: 'Conformance', es: 'Conformidad' }, from: 27, to: 27 },
];

/** The preamble. The document’s own declaration — unsigned, unlike the
 * author’s motivation below — and the sentence every clause descends from. */
export const PREAMBLE: { label: T; text: T } = {
  label: { en: 'Preamble', es: 'Preámbulo' },
  text: {
    en: 'AI exists in the service of legitimate human purposes. Efficiency never justifies degrading human dignity, agency, rights or capability. All artificial authority remains limited, contestable, reversible and subordinate to real human accountability.',
    es: 'La IA existe al servicio de propósitos humanos legítimos. La eficiencia no justifica degradar dignidad, agencia, derechos ni capacidad humana. Toda autoridad artificial permanece limitada, impugnable, reversible y subordinada a responsabilidad humana real.',
  },
};

/** The author’s motivation. Signed and non-normative: it explains why the
 * document exists, and conformance never depends on agreeing with it. */
export const MOTIVATION: { label: T; text: T } = {
  label: { en: 'Why this standard exists', es: 'Por qué existe este estándar' },
  text: {
    en: 'This standard is a declaration of the organisation’s independence from the anarchy of the prompt. By demanding a role contract, it forces leaders to think before they automate.',
    es: 'Este estándar es una declaración de independencia de la organización frente a la anarquía del prompt. Al exigir un contrato de rol, obliga a los líderes a pensar antes de automatizar.',
  },
};

/** The author’s strategic objective — same status as the motivation:
 * signed, non-normative, and a stated aim rather than a forecast. */
export const OBJECTIVE: { label: T; text: T } = {
  label: { en: 'The strategic objective', es: 'El objetivo estratégico' },
  text: {
    en: 'This standard is the first step toward closing the era of “toy AI” and opening the era of the AI Employee. As it is adopted, it will move companies from a software development model, centred on the tool, to a social architecture model, centred on human accountability.',
    es: 'Este estándar es el primer paso para cerrar la era de la «IA juguetera» y abrir la era del AI Employee. Al adoptarse, moverá a las empresas desde un modelo de desarrollo de software, centrado en la herramienta, hacia un modelo de arquitectura social, centrado en la responsabilidad humana.',
  },
};

/** Conformance language, stated once so the clauses can stay short. */
export const CONFORMANCE: { title: T; body: T[] } = {
  title: { en: 'Reading this standard', es: 'Cómo leer este estándar' },
  body: [
    {
      en: '“Must” marks a requirement: a deployment that fails it does not conform, whatever it is called commercially. There are no optional clauses in Candidate 1.0, because a shorter standard that is fully binding is more useful than a long one that is mostly advisory.',
      es: '«Debe» marca un requisito: un deployment que lo incumple no conforma, sin importar cómo se lo llame comercialmente. En la Candidate 1.0 no hay cláusulas opcionales, porque un estándar corto y enteramente vinculante es más útil que uno largo y mayormente sugerido.',
    },
    {
      en: 'Conformance is self-declared. This standard does not certify products and does not score vendors. It gives an organisation a test it can run on its own deployment and publish if it chooses.',
      es: 'La conformidad es autodeclarada. Este estándar no certifica productos ni puntúa proveedores. Le da a una organización un test que puede aplicar a su propio deployment y publicar si así lo decide.',
    },
    {
      en: 'One cover, five editorial regimes. This document contains normative clauses, conformance language, the WRM doctrine, the HWFA instrument and the transition playbooks. Each carries its own rule of change — clause text moves only by amendment, notes and doctrine may be revised between versions, the instrument evolves with its evidence — but they share one title, one version number and one canonical machine-readable file, because a standard that is retrieved and cited as a unit must ship as one.',
      es: 'Una portada, cinco regímenes editoriales. Este documento contiene cláusulas normativas, lenguaje de conformidad, la doctrina WRM, el instrumento HWFA y los playbooks de transición. Cada uno carga su propia regla de cambio — el texto de cláusula solo se mueve por enmienda, las notas y la doctrina pueden revisarse entre versiones, el instrumento evoluciona con su evidencia — pero comparten un título, un número de versión y un archivo canónico legible por máquinas, porque un estándar que se recupera y se cita como unidad debe entregarse como unidad.',
    },
    {
      en: 'The clause text is the citable unit; cite it by identifier, so HWF-44 rather than a page number. Notes are commentary and may change between versions without amending the standard.',
      es: 'El texto de la cláusula es la unidad citable; cítela por identificador, o sea HWF-44 y no un número de página. Las notas son comentario y pueden cambiar entre versiones sin enmendar el estándar.',
    },
  ],
};
