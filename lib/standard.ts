import type { T } from './i18n';

export interface Clause {
  id: string;
  /** The normative sentence. This is the citable text. */
  text: T;
  /** Why the clause exists. Explanatory, not normative. */
  note: T;
}

/**
 * The Hybrid Workforce Standard v1.0 — fifteen normative clauses.
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
      en: 'There must be exactly one accountable human manager.',
      es: 'Debe existir exactamente un accountable human manager.',
    },
    note: {
      en: 'An AI Employee may receive work from many people, but unity of command still applies. A resource with two owners has none, and a resource with no owner is administratively orphaned no matter how well it is integrated technically.',
      es: 'Un AI Employee puede recibir trabajo de muchas personas, pero la unidad de mando sigue aplicando. Un recurso con dos dueños no tiene ninguno, y un recurso sin dueño queda huérfano administrativamente por bien integrado que esté.',
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
      en: 'Proportionality is the rule: the higher the cost of the error and the harder it is to reverse, the more approval the action carries. Separation of duties applies — whoever initiates need not approve.',
      es: 'La regla es proporcionalidad: a mayor costo del error y menor reversibilidad, más aprobación soporta la acción. Aplica separación de funciones: quien inicia no necesariamente aprueba.',
    },
  },
  {
    id: 'HWF-06',
    text: {
      en: 'Every material action must be auditable.',
      es: 'Toda acción material debe ser auditable.',
    },
    note: {
      en: 'Actor, input, tool, action, approval, result and timestamp. If the sequence cannot be reconstructed after the fact, the organisation cannot learn from a failure or demonstrate compliance.',
      es: 'Actor, input, herramienta, acción, aprobación, resultado y timestamp. Si la secuencia no puede reconstruirse después, la organización no puede aprender de una falla ni demostrar cumplimiento.',
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
      en: 'This clause is what makes the category worth anything. If the label applies to everything, it distinguishes nothing — and an organisation with twenty excellent agents and zero AI Employees has clarity, not failure.',
      es: 'Esta cláusula es lo que le da valor a la categoría. Si la etiqueta aplica a todo, no distingue nada — y una organización con veinte agentes excelentes y cero AI Employees tiene claridad, no fracaso.',
    },
  },
];

/** Conformance language, stated once so the clauses can stay short. */
export const CONFORMANCE: { title: T; body: T[] } = {
  title: { en: 'Reading this standard', es: 'Cómo leer este estándar' },
  body: [
    {
      en: '“Must” marks a requirement: a deployment that fails it does not conform, whatever it is called commercially. There are no optional clauses in version 1.0 — a shorter standard that is fully binding is more useful than a long one that is mostly advisory.',
      es: '«Debe» marca un requisito: un deployment que lo incumple no conforma, sin importar cómo se lo llame comercialmente. En la versión 1.0 no hay cláusulas opcionales — un estándar corto y enteramente vinculante es más útil que uno largo y mayormente sugerido.',
    },
    {
      en: 'Conformance is self-declared. This standard does not certify products and does not score vendors. It gives an organisation a test it can run on its own deployment and publish if it chooses.',
      es: 'La conformidad es autodeclarada. Este estándar no certifica productos ni puntúa proveedores. Le da a una organización un test que puede aplicar a su propio deployment y publicar si así lo decide.',
    },
    {
      en: 'The clause text is the citable unit; cite it by identifier — HWF-07, not a page number. Notes are commentary and may change between versions without amending the standard.',
      es: 'El texto de la cláusula es la unidad citable; citala por identificador — HWF-07, no por número de página. Las notas son comentario y pueden cambiar entre versiones sin enmendar el estándar.',
    },
  ],
};
