import type { T } from './i18n';

export interface Clause {
  id: string;
  /** The normative sentence. This is the citable text. */
  text: T;
  /** Why the clause exists. Explanatory, not normative. */
  note: T;
}

/**
 * The Hybrid Workforce Standard v1.0 — seventeen normative clauses.
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
      en: 'An AI identity must never be used to deceive customers or colleagues about its nature as software.',
      es: 'La identidad de IA nunca debe utilizarse para engañar a clientes o compañeros sobre su naturaleza de software.',
    },
    note: {
      en: 'Giving a system a role, a name and a manager improves coordination. Letting a person believe they are talking to a human being is a different act, and this standard does not permit it.',
      es: 'Darle a un sistema un rol, un nombre y un manager mejora la coordinación. Permitir que una persona crea que habla con un ser humano es otro acto, y este estándar no lo permite.',
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
];

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
