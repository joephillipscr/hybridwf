import type { T } from './i18n';

/** The formal definition. This is the single most citable sentence on the site. */
export const DEFINITION: T = {
  en: 'An AI Employee is a persistent, role-bound software worker that autonomously executes recurring business responsibilities using organisational knowledge and authorised tools, within explicit policies and limits, maintaining traceable identity, measurable performance, escalation paths and human accountability.',
  es: 'Un AI Employee es un trabajador de software persistente y ligado a un rol, que ejecuta de forma autónoma responsabilidades empresariales recurrentes utilizando conocimiento organizacional y herramientas autorizadas, dentro de políticas y límites explícitos, manteniendo identidad trazable, desempeño medible, rutas de escalamiento y responsabilidad humana.',
};

export const THESIS: T = {
  en: 'A chatbot answers. A copilot helps. An agent executes a task. An AI Employee holds a role. A human answers for it.',
  es: 'Un chatbot responde. Un copiloto ayuda. Un agente ejecuta una tarea. Un AI Employee ocupa un rol. Un humano responde por él.',
};

/** The invariant. Stated once, in this order, and never varied. */
export const FORMULA: T = {
  en: 'The AI executes. The organisation answers. A human governs.',
  es: 'La IA ejecuta. La organización responde. Un humano gobierna.',
};

export const GOVERNING_PRINCIPLE: T = {
  en: 'There are no human posts and AI posts as a starting point. There is work that needs to be done. Then you decide which combination of human and artificial resources produces the best result at the right level of risk, responsibility and control.',
  es: 'No existen, como punto de partida, puestos humanos y puestos de IA. Existen trabajos que deben realizarse. Después se decide cuál es la combinación de recursos humanos y artificiales que produce el mejor resultado con el nivel correcto de riesgo, responsabilidad y control.',
};

/* ------------------------------------------------------------------ */

export interface Property {
  n: number;
  name: T;
  criterion: T;
}

/** The nine-property test. Conjunctive: fail one and it is an agent, not an employee. */
export const PROPERTIES: Property[] = [
  {
    n: 1,
    name: { en: 'Persistent identity', es: 'Identidad persistente' },
    criterion: {
      en: 'Stable operational identity, role, history and per-company isolation.',
      es: 'Identidad operativa estable, rol, historial y separación por empresa o tenant.',
    },
  },
  {
    n: 2,
    name: { en: 'Role contract', es: 'Contrato de rol' },
    criterion: {
      en: 'Mission, responsibilities, results, exclusions and service expectations.',
      es: 'Misión, responsabilidades, resultados, exclusiones y expectativas de servicio.',
    },
  },
  {
    n: 3,
    name: { en: 'Organisational context', es: 'Contexto organizacional' },
    criterion: {
      en: 'Knowledge of policies, products, customers, people and relevant past decisions.',
      es: 'Conocimiento de políticas, productos, clientes, personas y decisiones relevantes.',
    },
  },
  {
    n: 4,
    name: { en: 'Tools and channels', es: 'Herramientas y canales' },
    criterion: {
      en: 'Authorised access to CRM, ERP, email, calendar, tickets, databases, APIs and communication.',
      es: 'Acceso autorizado a CRM, ERP, correo, calendario, tickets, bases de datos, APIs y comunicación.',
    },
  },
  {
    n: 5,
    name: { en: 'Autonomy', es: 'Autonomía' },
    criterion: {
      en: 'Can start or continue work without a human prompt at every step.',
      es: 'Puede iniciar o continuar trabajo sin necesitar un prompt humano en cada paso.',
    },
  },
  {
    n: 6,
    name: { en: 'Limited authority', es: 'Autoridad limitada' },
    criterion: {
      en: 'Permissions, approval thresholds, budgets, prohibited actions and escalation rules.',
      es: 'Permisos, umbrales de aprobación, presupuestos, acciones prohibidas y reglas de escalamiento.',
    },
  },
  {
    n: 7,
    name: { en: 'Governed memory', es: 'Memoria gobernada' },
    criterion: {
      en: 'Relevant context across tasks and over time, with provenance, scope and retention.',
      es: 'Contexto relevante entre tareas y en el tiempo, con procedencia, alcance y retención.',
    },
  },
  {
    n: 8,
    name: { en: 'Observability', es: 'Observabilidad' },
    criterion: {
      en: 'Actions, tool calls, costs, decisions and results are traceable.',
      es: 'Acciones, tool calls, costos, decisiones y resultados trazables.',
    },
  },
  {
    n: 9,
    name: { en: 'Human accountability', es: 'Accountability humano' },
    criterion: {
      en: 'An identified human, or human governance body, answers for configuration, controls, performance and exceptions, however many artificial supervisors sit in between.',
      es: 'Un humano identificado, o cuerpo humano de gobierno, responde por configuración, controles, desempeño y excepciones, sin importar cuántos supervisores artificiales haya en el medio.',
    },
  },
];

export const PROPERTIES_CAVEAT: T = {
  en: 'The test is conjunctive: a deployment qualifies as an AI Employee only when all nine properties are present. Presence is binary; depth is not — how far each property is developed is measured by the maturity model, not by this test. A system missing any one of them may still be an excellent agent or automation; calling it an AI Employee is a commercial metaphor rather than a verifiable administrative category. Conformance is a separate question: the clauses bind AI Employees, and a deployment that violates them is a non-conformant AI Employee, not a non-AI-Employee — a definition that expelled violators would leave the standard with nothing to bind. And the test binds in both directions: all nine properties present in operation make the deployment an AI Employee whatever it is called, with the burden of demonstrating non-qualification on the deployer (HWF-12).',
  es: 'El test es conjuntivo: un deployment califica como AI Employee solo cuando las nueve propiedades están presentes. La presencia es binaria; la profundidad no — cuánto está desarrollada cada propiedad lo mide el modelo de madurez, no este test. Un sistema al que le falte cualquiera de ellas puede seguir siendo un excelente agente o automatización; llamarlo AI Employee es una metáfora comercial más que una categoría administrativa verificable. La conformidad es una pregunta separada: las cláusulas obligan a los AI Employees, y un deployment que las viola es un AI Employee no conforme, no un no-AI-Employee — una definición que expulsara a los infractores dejaría al estándar sin nada que obligar. Y el test obliga en ambas direcciones: las nueve propiedades presentes en operación hacen del deployment un AI Employee sin importar cómo se lo llame, con la carga de demostrar la no-calificación en el deployer (HWF-12).',
};

/* ------------------------------------------------------------------ */

export interface Rung {
  term: string;
  promise: T;
  behaviour: T;
  limit: T;
}

/** The vocabulary ladder — where the category boundary actually falls. */
export const LADDER: Rung[] = [
  {
    term: 'Chatbot',
    promise: { en: 'Conversation', es: 'Conversación' },
    behaviour: { en: 'Answers questions', es: 'Responde preguntas' },
    limit: { en: 'Waits for prompts or inputs', es: 'Espera prompts o inputs' },
  },
  {
    term: 'Copilot / assistant',
    promise: { en: 'Augment the human', es: 'Aumentar al humano' },
    behaviour: { en: 'Drafts, summarises, suggests', es: 'Redacta, resume, sugiere' },
    limit: { en: 'The human is still the operator', es: 'El humano sigue siendo el operador' },
  },
  {
    term: 'Automation / RPA',
    promise: { en: 'Deterministic execution', es: 'Ejecución determinista' },
    behaviour: { en: 'Runs predefined flows', es: 'Corre flujos predefinidos' },
    limit: { en: 'Brittle against unforeseen cases', es: 'Frágil ante casos no previstos' },
  },
  {
    term: 'AI agent',
    promise: { en: 'Goal-directed action', es: 'Acción orientada a objetivos' },
    behaviour: { en: 'Reasons, uses tools, executes', es: 'Razona, usa herramientas y ejecuta' },
    limit: { en: 'Usually centred on tasks or objectives', es: 'Suele estar centrado en tareas u objetivos' },
  },
  {
    term: 'AI teammate / coworker',
    promise: { en: 'Collaboration', es: 'Colaboración' },
    behaviour: { en: 'Shares context and executes work', es: 'Comparte contexto y ejecuta trabajo' },
    limit: { en: 'Organisational semantics vary by vendor', es: 'Semántica organizacional variable según proveedor' },
  },
  {
    term: 'AI Employee',
    promise: { en: 'Stewardship of a role', es: 'Custodia de un rol' },
    behaviour: { en: 'Holds recurring work under governance', es: 'Asume trabajo recurrente bajo gobierno' },
    limit: { en: 'The category still has no standard — hence this document', es: 'La categoría aún no tiene estándar — de ahí este documento' },
  },
];

export const OWNERSHIP_BOUNDARY: T = {
  en: 'The conceptual boundary is between executing a task and stewarding a role. An agent can execute “send these twenty follow-ups”. An AI Employee holding an SDR role must sustain the recurring process within defined limits: identify leads, research, contact, follow up, record, escalate and report performance. Stewardship is not ownership: the post, its authority and its accountability have a human owner. What the resource carries is the continuing responsibility to sustain the process; what it can never carry is the consequence.',
  es: 'La frontera conceptual está entre ejecutar una tarea y custodiar un rol. Un agente puede ejecutar «enviá estos veinte seguimientos». Un AI Employee que ocupa el rol de SDR debe sostener el proceso recurrente dentro de límites definidos: identificar leads, investigar, contactar, seguir, registrar, escalar y reportar desempeño. La custodia no es propiedad: el puesto, su autoridad y su accountability tienen dueño humano. Lo que el recurso carga es la responsabilidad continua de sostener el proceso; lo que nunca puede cargar es la consecuencia.',
};
