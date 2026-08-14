import type { T } from './i18n';

export interface Clause {
  id: string;
  /** The normative sentence. This is the citable text. */
  text: T;
  /** Why the clause exists. Explanatory, not normative. */
  note: T;
}

/**
 * The Hybrid Workforce Standard v1.0 — nineteen normative clauses.
 *
 * Clause text is the citable unit. Notes are commentary and may be revised
 * without a version bump; clause text may not.
 */
export const CLAUSES: Clause[] = [
  {
    id: 'HWF-01',
    text: {
      en: 'An AI Employee must hold a defined role, not merely a persona or a system prompt.',
      es: 'Un AI Employee debe ocupar un rol definido, no solamente una personalidad o un system prompt.',
    },
    note: {
      en: 'The post exists before its occupant. A name, a tone of voice and a set of instructions describe a persona; a role states what result must be produced, with what authority, measured how.',
      es: 'El puesto existe antes que su ocupante. Un nombre, un tono y un conjunto de instrucciones describen una personalidad; un rol establece qué resultado debe producirse, con qué autoridad y medido cómo.',
    },
  },
  {
    id: 'HWF-02',
    text: {
      en: 'Every AI Employee must have exactly one accountable owner. Supervision may be delegated to another AI Employee; accountability may not. Every chain of supervision terminates in an identified human or human governance body.',
      es: 'Todo AI Employee debe tener exactamente un accountable owner. La supervisión puede delegarse a otro AI Employee; la accountability no. Toda cadena de supervisión termina en un humano o cuerpo humano de gobierno identificado.',
    },
    note: {
      en: 'Supervision and accountability are different jobs and this clause separates them. Supervision directs work: routing, review, prioritising, receiving exceptions. An artificial resource can do that. Accountability means answering for the outcome, which requires the capacity to bear a consequence that is legal, financial or reputational. A chain of responsibility ending in something that cannot bear a consequence has not delegated responsibility; it has lost it. An AI Employee may receive work from many people, but unity of command still applies: a resource with two owners has none, and a resource with no owner is administratively orphaned no matter how well it is integrated technically.',
      es: 'Supervisión y accountability son trabajos distintos y esta cláusula los separa. La supervisión dirige el trabajo: rutear, revisar, priorizar, recibir excepciones. Un recurso artificial puede hacerlo. La accountability es responder por el resultado, y eso exige capacidad de soportar una consecuencia jurídica, económica o reputacional. Una cadena de responsabilidad que termina en algo incapaz de soportar consecuencia no delegó responsabilidad: la perdió. Un AI Employee puede recibir trabajo de muchas personas, pero la unidad de mando sigue aplicando: un recurso con dos dueños no tiene ninguno, y un recurso sin dueño queda huérfano administrativamente por bien integrado que esté.',
    },
  },
  {
    id: 'HWF-03',
    text: {
      en: 'Authority must be explicit, limited and revocable.',
      es: 'La autoridad debe ser explícita, limitada y revocable.',
    },
    note: {
      en: 'What the resource may decide without approval has to be written down before it operates, not inferred afterwards from what it happened to do.',
      es: 'Lo que el recurso puede decidir sin aprobación debe estar escrito antes de que opere, no inferido después a partir de lo que resultó haciendo.',
    },
  },
  {
    id: 'HWF-04',
    text: {
      en: 'Access must follow least privilege.',
      es: 'El acceso debe cumplir least privilege.',
    },
    note: {
      en: 'Context is capability, but it is also risk surface. More access is not more competence; it is a larger blast radius.',
      es: 'El contexto es capacidad, pero también es superficie de riesgo. Más acceso no es más competencia; es un blast radius mayor.',
    },
  },
  {
    id: 'HWF-05',
    text: {
      en: 'High-risk actions must support human approval.',
      es: 'Las acciones de alto riesgo deben soportar aprobación humana.',
    },
    note: {
      en: 'Proportionality is the rule: the higher the cost of the error and the harder it is to reverse, the more approval the action carries. Separation of duties applies, so whoever initiates need not approve.',
      es: 'La regla es proporcionalidad: a mayor costo del error y menor reversibilidad, más aprobación soporta la acción. Aplica separación de funciones, así que quien inicia no necesariamente aprueba.',
    },
  },
  {
    id: 'HWF-06',
    text: {
      en: 'Every material action must be auditable, and the audit must reconstruct the determinants of the decision as well as its outcome: the policy, knowledge, tool results, authority and versions in force when the action was taken. A model’s own account of its reasoning may support that reconstruction but never substitutes for it.',
      es: 'Toda acción material debe ser auditable, y la auditoría debe reconstruir los determinantes de la decisión además de su resultado: la política, el conocimiento, los resultados de herramientas, la autoridad y las versiones vigentes al momento de ejecutarse la acción. El relato que el propio modelo haga de su razonamiento puede apoyar esa reconstrucción pero nunca la sustituye.',
    },
    note: {
      en: 'Actor, input, tool, action, approval, result and timestamp tell you that something happened. They do not tell you why, and without the why an organisation cannot attribute a failure to its cause: a policy that was wrong, knowledge that had gone stale, a tool that returned bad data, a model that erred, or a role that should never have been assigned to an artificial resource at all. Those five demand different remedies, and they leave identical records under a what-only audit. The clause it most protects is HWF-09: with outcomes alone you can see that the system answered, never that it should have doubted. The material is largely already required elsewhere — HWF-08 governs the provenance of what the resource knew, HWF-14 the versions of model, policy, tools and knowledge base — so what this clause adds is the obligation to bind them to a specific action rather than hold them as a general inventory. A model’s stated reasoning is admissible as supporting evidence and is not proof of cause: what a system reports having thought may not be what produced its output, and an organisation that treats that narration as the why will write confident and wrong postmortems. Where reasoning traces are retained, their scope, retention and deletion fall under HWF-08 like any other memory, because they routinely contain retrieved customer data.',
      es: 'Actor, input, herramienta, acción, aprobación, resultado y timestamp te dicen que algo pasó. No te dicen por qué, y sin el porqué una organización no puede atribuir una falla a su causa: una política equivocada, un conocimiento que envejeció, una herramienta que devolvió datos malos, un modelo que erró, o un rol que nunca debió asignarse a un recurso artificial. Esos cinco exigen remedios distintos y dejan registros idénticos bajo una auditoría de solo-qué. La cláusula que más protege es HWF-09: con solo el resultado ves que el sistema respondió, nunca que debió dudar. El material ya está exigido en buena parte en otro lado — HWF-08 gobierna la procedencia de lo que el recurso sabía, HWF-14 las versiones de modelo, política, herramientas y knowledge base — así que lo que esta cláusula agrega es la obligación de ligarlas a una acción concreta en vez de sostenerlas como inventario general. El razonamiento declarado por un modelo es admisible como evidencia de apoyo y no es prueba de causa: lo que un sistema reporta haber pensado puede no ser lo que produjo su salida, y una organización que tome esa narración por el porqué va a escribir postmortems confiados y equivocados. Cuando se retengan trazas de razonamiento, su alcance, retención y borrado caen bajo HWF-08 como cualquier otra memoria, porque suelen contener datos de clientes recuperados.',
    },
  },
  {
    id: 'HWF-07',
    text: {
      en: 'Performance must be measured by outcomes, quality, risk and cost — never by activity, hours, tokens or message volume.',
      es: 'El desempeño debe medirse por outcomes, calidad, riesgo y costo — nunca por actividad, horas, tokens o cantidad de mensajes.',
    },
    note: {
      en: 'Speed makes activity look like value. A badly designed process that produced ten errors will produce a hundred once automated, and the dashboard will call it throughput.',
      es: 'La velocidad hace que la actividad parezca valor. Un proceso mal diseñado que producía diez errores producirá cien al automatizarse, y el dashboard lo llamará productividad.',
    },
  },
  {
    id: 'HWF-08',
    text: {
      en: 'Memory must have provenance, scope, retention and deletion rules.',
      es: 'La memoria debe tener procedencia, alcance, retención y reglas de borrado.',
    },
    note: {
      en: 'Remembering improves performance and creates exposure at the same time. An undated policy produces answers that are consistent and wrong; a historical exception should not silently become a rule.',
      es: 'Recordar mejora el desempeño y crea exposición al mismo tiempo. Una política sin fecha produce respuestas consistentes y equivocadas; una excepción histórica no debería convertirse en regla en silencio.',
    },
  },
  {
    id: 'HWF-09',
    text: {
      en: 'The system must know when to escalate rather than improvise.',
      es: 'El sistema debe saber cuándo escalar en vez de improvisar.',
    },
    note: {
      en: 'A resource that produces a convincing answer instead of raising a doubt is more dangerous than a less capable one that is better governed. Every exception needs a destination.',
      es: 'Un recurso que produce una respuesta convincente en vez de escalar una duda es más peligroso que uno menos brillante pero mejor gobernado. Toda excepción necesita un destino.',
    },
  },
  {
    id: 'HWF-10',
    text: {
      en: 'An AI identity must never be used to deceive customers or colleagues about its nature as software, nor to simulate an interior state — effort, hesitation, feeling or stake — that the system does not have.',
      es: 'La identidad de IA nunca debe utilizarse para engañar a clientes o compañeros sobre su naturaleza de software, ni para simular un estado interior — esfuerzo, vacilación, sentimiento o algo en juego — que el sistema no tiene.',
    },
    note: {
      en: 'Giving a system a role, a name and a manager improves coordination. Letting a person believe they are talking to a human being is a different act, and this standard does not permit it. Disclosure alone does not settle the matter: a system can announce that it is software in its first message and then spend the conversation performing warmth and deliberation designed to lower the reader’s guard, which satisfies the letter and defeats the purpose. The target is not fluency. Writing clearly and courteously is competence, and nothing here requires an AI Employee to be curt or to insert artificial markers of its own machinery. The test is what a behaviour is for: does it exist to make someone believe there is a mind with something at stake? Typing indicators and injected latency that simulate thinking fail it, as do verbal hesitation markers and claims of feeling; ordinary courtesy does not. Streaming a long answer so it can be read as it arrives is legible design rather than performance, and the difference is the purpose rather than the delay. Simulated warmth works, which is exactly why it has to be refused rather than optimised: a technique that improves satisfaction scores because the reader believes something false is manipulation wearing the vocabulary of user experience. HWF-11 draws the ontological line at what the system is; this clause extends it to what the system claims to undergo.',
      es: 'Darle a un sistema un rol, un nombre y un manager mejora la coordinación. Permitir que una persona crea que habla con un ser humano es otro acto, y este estándar no lo permite. La divulgación sola no resuelve el asunto: un sistema puede anunciar que es software en su primer mensaje y después pasar la conversación actuando calidez y deliberación diseñadas para bajarle la guardia a quien lee, lo que cumple la letra y derrota el propósito. El blanco no es la fluidez. Escribir con claridad y cortesía es competencia, y nada acá exige que un AI Employee sea seco ni que inserte marcadores artificiales de su propia maquinaria. La prueba es para qué existe una conducta: ¿está ahí para hacer creer que hay una mente con algo en juego? Los indicadores de tipeo y la latencia inyectada que simulan pensamiento fallan, igual que las muletillas de vacilación y las declaraciones de sentimiento; la cortesía corriente no. Transmitir una respuesta larga por streaming para que pueda leerse mientras llega es diseño legible y no actuación, y la diferencia está en el propósito y no en la demora. La calidez simulada funciona, y por eso mismo hay que rechazarla en vez de optimizarla: una técnica que mejora los puntajes de satisfacción porque quien lee cree algo falso es manipulación vestida con el vocabulario de la experiencia de usuario. HWF-11 traza la línea ontológica en lo que el sistema es; esta cláusula la extiende a lo que el sistema declara atravesar.',
    },
  },
  {
    id: 'HWF-11',
    text: {
      en: 'Humans and AI Employees may share an operational graph while retaining distinct status and rights.',
      es: 'Humanos y AI Employees pueden compartir un grafo operativo manteniendo condición y derechos distintos.',
    },
    note: {
      en: 'A shared org chart is an administrative convenience, not an ontological claim. Dignity, health, rest, labour rights and belonging are properties of people. Operational anthropomorphism without ontological confusion.',
      es: 'Un organigrama compartido es una conveniencia administrativa, no una afirmación ontológica. Dignidad, salud, descanso, derechos laborales y pertenencia son propiedades de las personas. Antropomorfismo operativo sin confusión ontológica.',
    },
  },
  {
    id: 'HWF-12',
    text: {
      en: 'Offboarding must revoke access and transfer or destroy context safely.',
      es: 'El offboarding debe revocar accesos y transferir o destruir contexto de forma segura.',
    },
    note: {
      en: 'Revoke credentials, disable tools, stop schedules and queues, rotate secrets, transfer outstanding work, preserve evidence. Offboarding is as important as onboarding and is almost always skipped.',
      es: 'Revocar credenciales, deshabilitar herramientas, detener schedules y colas, rotar secretos, transferir trabajo pendiente, preservar evidencia. El offboarding es tan importante como el onboarding y casi siempre se omite.',
    },
  },
  {
    id: 'HWF-13',
    text: {
      en: 'Every Human ↔ Artificial transition must be evaluable against a baseline and carry explicit rollback criteria.',
      es: 'Toda transición Human ↔ Artificial debe poder evaluarse contra un baseline y tener criterios de rollback explícitos.',
    },
    note: {
      en: 'Without a baseline recorded before the change, the organisation can celebrate an improvement it never made. Rollback criteria written after the results are known are not criteria; they are justification.',
      es: 'Sin un baseline registrado antes del cambio, la organización puede celebrar una mejora que nunca ocurrió. Criterios de rollback escritos después de conocer los resultados no son criterios; son justificación.',
    },
  },
  {
    id: 'HWF-14',
    text: {
      en: 'An AI Employee must have an identifiable version of model, policies, tools and knowledge base.',
      es: 'Un AI Employee debe tener una versión identificable de modelo, políticas, herramientas y knowledge base.',
    },
    note: {
      en: 'Without versioning it is impossible to say what authority existed at a given moment, or which change produced an improvement or a regression.',
      es: 'Sin versionado es imposible saber qué autoridad existía en un momento dado, ni qué cambio produjo una mejora o un deterioro.',
    },
  },
  {
    id: 'HWF-15',
    text: {
      en: 'Not every agent qualifies as an AI Employee. It must clear a threshold of maturity and governance.',
      es: 'No todo agente califica como AI Employee. Debe superar un umbral de madurez y gobierno.',
    },
    note: {
      en: 'This clause is what makes the category worth anything. If the label applies to everything, it distinguishes nothing. An organisation with twenty excellent agents and zero AI Employees has clarity rather than a problem.',
      es: 'Esta cláusula es lo que le da valor a la categoría. Si la etiqueta aplica a todo, no distingue nada. Una organización con veinte agentes excelentes y cero AI Employees tiene claridad y no un problema.',
    },
  },
  {
    id: 'HWF-16',
    text: {
      en: 'A supervision chain must be traversable and observable end to end. The accountable human or body must be able to identify every AI Employee beneath it, reconstruct any action taken in its name, and intervene at any point in the chain without passing through it.',
      es: 'Una cadena de supervisión debe ser recorrible y observable de punta a punta. El humano o cuerpo accountable debe poder identificar a cada AI Employee por debajo suyo, reconstruir cualquier acción ejecutada en su nombre, e intervenir en cualquier punto de la cadena sin pasar por ella.',
    },
    note: {
      en: 'Intervening without passing through the chain is the load-bearing part. If stopping an AI Employee three levels down requires asking the one above it, the accountable party holds a request rather than control. Depth is not forbidden and no fixed limit is set here, because the real limit is span of control: a principle this framework classifies as adapted rather than abolished, meaning scale may grow but only against tooling, dashboards and supervision limits that make the growth governable. A single human nominally accountable for a thousand AI Employees across six levels, with no instrument capable of showing what any of them did, has an organisational chart rather than accountability. Describing this architecture is not endorsing it: the standard states what must remain true if an organisation builds one.',
      es: 'Intervenir sin pasar por la cadena es la parte que sostiene todo. Si detener a un AI Employee tres niveles abajo exige pedírselo al que está encima, quien responde tiene una petición y no control. La profundidad no está prohibida ni se fija un límite acá, porque el límite real es el span of control: un principio que este marco clasifica como adaptado y no como abolido, o sea que la escala puede crecer pero solo contra tooling, dashboards y límites de supervisión que hagan gobernable ese crecimiento. Un solo humano nominalmente accountable por mil AI Employees repartidos en seis niveles, sin un instrumento capaz de mostrar qué hizo cada uno, tiene un organigrama y no accountability. Describir esta arquitectura no es endosarla: el estándar dice qué debe seguir siendo cierto si una organización la construye.',
    },
  },
  {
    id: 'HWF-17',
    text: {
      en: 'A role contract must be revisable and must be reviewed at a stated cadence. Where an AI Employee’s own performance data shows divergence between measured outcomes and its stated mission, authority or KPIs, that divergence must be reported to the accountable owner as a finding. The decision to change a role contract is always human and belongs to the accountable owner; it is never taken by an artificial supervisor and never applied automatically.',
      es: 'Un contrato de rol debe ser revisable y debe revisarse con una cadencia declarada. Cuando los propios datos de desempeño de un AI Employee muestran divergencia entre los outcomes medidos y su misión, autoridad o KPIs declarados, esa divergencia debe reportarse al accountable owner como hallazgo. La decisión de cambiar un contrato de rol es siempre humana y le corresponde al accountable owner; nunca la toma un supervisor artificial y nunca se aplica automáticamente.',
    },
    note: {
      en: 'The most common defect in a role contract is not that it was written badly. It is that nobody has looked at it since the day of deployment, while the products, the policies, the customers and the exception patterns all moved. The resource sits closer to the work than its owner does and sees the divergence first, so requiring it to report what its own data shows costs little and prevents silent drift. A finding is not a petition: an AI Employee has no interests to advance, and treating its report as a negotiation would reintroduce exactly the confusion HWF-11 exists to prevent. The decision always rises to a human, and never to the artificial supervisor above it, because a system that can widen its own scope through another system does not have a bounded scope.',
      es: 'El defecto más común de un contrato de rol no es que esté mal escrito. Es que nadie lo miró desde el día del deployment, mientras los productos, las políticas, los clientes y los patrones de excepción se movieron todos. El recurso está más cerca del trabajo que su dueño y ve la divergencia primero, así que exigirle que reporte lo que sus propios datos muestran cuesta poco y evita la deriva silenciosa. Un hallazgo no es una petición: un AI Employee no tiene intereses que defender, y tratar su reporte como una negociación reintroduciría exactamente la confusión que HWF-11 existe para impedir. La decisión sube siempre a un humano, y nunca al supervisor artificial que tenga encima, porque un sistema capaz de ampliar su propio alcance a través de otro sistema no tiene un alcance acotado.',
    },
  },
  {
    id: 'HWF-18',
    text: {
      en: 'Context provisioning must be deliberate in both directions. Withholding context from an AI Employee is a legitimate design decision, whether to protect the information or to protect the quality of the resource\u2019s judgement; it is not an omission and must not be treated as one. Every restriction must be recorded in the role contract, versioned like any other authority, and available to the audit. Responsibility for a decision degraded by withheld context lies with whoever withheld it.',
      es: 'El aprovisionamiento de contexto debe ser deliberado en ambas direcciones. Retenerle contexto a un AI Employee es una decisi\u00f3n de dise\u00f1o leg\u00edtima, sea para proteger la informaci\u00f3n o para proteger la calidad del criterio del recurso; no es una omisi\u00f3n y no debe tratarse como tal. Toda restricci\u00f3n debe registrarse en el contrato de rol, versionarse como cualquier otra autoridad, y estar disponible para la auditor\u00eda. La responsabilidad por una decisi\u00f3n degradada por contexto retenido recae en quien lo retuvo.',
    },
    note: {
      en: 'The risk justification was always here: context has been divided into must know, may consult and must not access since the first draft. What was missing was the second reason to restrict. A resource that sees every prior dispute anchors on them; one that reads the last diagnosis inherits it; one that is given everything relevant drowns the signal in the merely related. Confirmation bias and operational overload are failures of judgement rather than leaks of information, and a manager reading a risk-only clause has no ground to withhold anything that is not sensitive. The record is the price of the tool, because deliberate opacity is otherwise the perfect instrument for laundering accountability \u2014 \u201cthe system did not have that context\u201d is the AI-native descendant of \u201cnobody told me\u201d. A restriction that is written down, versioned and auditable is design; the same restriction undocumented is a defence prepared in advance, and the closing sentence of the clause takes that defence away. None of this legitimises starving a resource of what its role needs: withholding the context required to escalate well is not opacity but sabotage of HWF-09.',
      es: 'La justificaci\u00f3n de riesgo siempre estuvo: el contexto se divide en debe saber, puede consultar y no debe acceder desde el primer borrador. Lo que faltaba era la segunda raz\u00f3n para restringir. Un recurso que ve todas las disputas anteriores se ancla en ellas; uno que lee el \u00faltimo diagn\u00f3stico lo hereda; uno al que se le entrega todo lo relevante ahoga la se\u00f1al en lo meramente relacionado. El sesgo de confirmaci\u00f3n y la sobrecarga operativa son fallas de criterio y no fugas de informaci\u00f3n, y un manager que lee una cl\u00e1usula de solo-riesgo no tiene motivo para retener nada que no sea sensible. El registro es el precio de la herramienta, porque la opacidad deliberada es, sin \u00e9l, el instrumento perfecto para lavar accountability \u2014 \u00abel sistema no ten\u00eda ese contexto\u00bb es el descendiente nativo de IA de \u00aba m\u00ed nadie me avis\u00f3\u00bb. Una restricci\u00f3n escrita, versionada y auditable es dise\u00f1o; la misma restricci\u00f3n sin documentar es una defensa preparada de antemano, y la \u00faltima oraci\u00f3n de la cl\u00e1usula le quita esa defensa. Nada de esto legitima matar de hambre a un recurso: retenerle el contexto que necesita para escalar bien no es opacidad sino sabotaje del HWF-09.',
    },
  },
  {
    id: 'HWF-19',
    text: {
      en: 'An AI Employee post must not outlive its justification. At a stated cadence, the accountable owner must re-justify the post’s existence against current strategy — a question prior to and separate from performance, because a resource can meet every KPI in a post the organisation no longer needs. Continuation is never the default: a post whose existence cannot be re-justified proceeds to retirement, and its access ends with it.',
      es: 'Un puesto de AI Employee no debe sobrevivir a su justificación. Con una cadencia declarada, el accountable owner debe re-justificar la existencia del puesto frente a la estrategia vigente — una pregunta previa y separada del desempeño, porque un recurso puede cumplir todos sus KPIs en un puesto que la organización ya no necesita. La continuidad nunca es el default: un puesto cuya existencia no puede re-justificarse pasa a retiro, y sus accesos terminan con él.',
    },
    note: {
      en: 'A pointless human post prunes itself: it costs salary every month and its occupant gets bored and leaves. Payroll and attrition are the pruning mechanism, and an artificial occupant has neither — it costs little, never complains and never resigns, so a pointless post persists by default. In this framework’s own classification that makes organisational pruning an adapted principle: the function survives, the mechanism must be replaced, and this clause is the replacement. What accumulates without it is organisational debt, and its most dangerous form is the digital zombie: credentials, data access and standing authority kept alive for work nobody needs — under HWF-04, risk surface with no return. The existence question comes before the performance question because a good answer to the second is the usual anaesthetic against the first. No cadence is fixed here, consistent with the rest of the standard; twelve months is a sensible outer bound for most organisations, and the cadence belongs in the role contract. This review may share its calendar with the HWF-17 review; it must never share its default.',
      es: 'Un puesto humano sin sentido se poda solo: cuesta planilla todos los meses y su ocupante se aburre y se va. Payroll y attrition son el mecanismo de poda, y un ocupante artificial no tiene ninguno de los dos — cuesta poco, no se queja y no renuncia jamás, así que un puesto sin sentido persiste por defecto. En la propia clasificación de este marco, eso convierte a la poda organizacional en un principio adaptado: la función sobrevive, el mecanismo debe reemplazarse, y esta cláusula es el reemplazo. Lo que se acumula sin ella es deuda organizacional, y su forma más peligrosa es el zombi digital: credenciales, accesos a datos y autoridad vigente mantenidos vivos para trabajo que nadie necesita — con HWF-04 en mano, superficie de riesgo sin retorno. La pregunta de existencia va antes que la de desempeño porque una buena respuesta a la segunda es el anestésico habitual contra la primera. Acá no se fija ninguna cadencia, consistente con el resto del estándar; doce meses es una cota exterior razonable para la mayoría de las organizaciones, y la cadencia pertenece al contrato de rol. Esta revisión puede compartir calendario con la de HWF-17; nunca debe compartir su default.',
    },
  },
];

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
      en: '“Must” marks a requirement: a deployment that fails it does not conform, whatever it is called commercially. There are no optional clauses in version 1.0, because a shorter standard that is fully binding is more useful than a long one that is mostly advisory.',
      es: '«Debe» marca un requisito: un deployment que lo incumple no conforma, sin importar cómo se lo llame comercialmente. En la versión 1.0 no hay cláusulas opcionales, porque un estándar corto y enteramente vinculante es más útil que uno largo y mayormente sugerido.',
    },
    {
      en: 'Conformance is self-declared. This standard does not certify products and does not score vendors. It gives an organisation a test it can run on its own deployment and publish if it chooses.',
      es: 'La conformidad es autodeclarada. Este estándar no certifica productos ni puntúa proveedores. Le da a una organización un test que puede aplicar a su propio deployment y publicar si así lo decide.',
    },
    {
      en: 'The clause text is the citable unit; cite it by identifier, so HWF-07 rather than a page number. Notes are commentary and may change between versions without amending the standard.',
      es: 'El texto de la cláusula es la unidad citable; citala por identificador, o sea HWF-07 y no un número de página. Las notas son comentario y pueden cambiar entre versiones sin enmendar el estándar.',
    },
  ],
};
