import type { T } from './i18n';

/** The formal definition. This is the single most citable sentence on the site. */
export const DEFINITION: T = {
  en: 'An AI Employee is a persistent, role-bound software worker that autonomously executes recurring business responsibilities using organisational knowledge and authorised tools, within explicit policies and limits, maintaining traceable identity, measurable performance, escalation paths and human accountability.',
  es: 'Un AI Employee es un trabajador de software persistente y ligado a un rol, que ejecuta de forma autónoma responsabilidades empresariales recurrentes utilizando conocimiento organizacional y herramientas autorizadas, dentro de políticas y límites explícitos, manteniendo identidad trazable, desempeño medible, rutas de escalamiento y responsabilidad humana.',
};

export const THESIS: T = {
  en: 'A chatbot answers. A copilot helps. An agent acts. An AI Employee is accountable for a role.',
  es: 'Un chatbot responde. Un copiloto ayuda. Un agente actúa. Un AI Employee es responsable de un rol.',
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

/** The nine-property test. Fail several and it is an agent, not an employee. */
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
  en: 'A system missing several of these properties may still be an excellent agent or automation. Calling it an AI Employee is then a commercial metaphor rather than a verifiable administrative category.',
  es: 'Un sistema que carece de varias de estas propiedades puede seguir siendo un excelente agente o automatización. Llamarlo AI Employee se vuelve entonces una metáfora comercial más que una categoría administrativa verificable.',
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
    promise: { en: 'Ownership of a role', es: 'Propiedad de un rol' },
    behaviour: { en: 'Holds recurring work under governance', es: 'Asume trabajo recurrente bajo gobierno' },
    limit: { en: 'The category still has no standard — hence this document', es: 'La categoría aún no tiene estándar — de ahí este documento' },
  },
];

export const OWNERSHIP_BOUNDARY: T = {
  en: 'The conceptual boundary is between task ownership and role ownership. An agent can execute “send these twenty follow-ups”. An AI Employee holding an SDR role must sustain the recurring process within defined limits: identify leads, research, contact, follow up, record, escalate and report performance.',
  es: 'La frontera conceptual está entre task ownership y role ownership. Un agente puede ejecutar «enviá estos veinte seguimientos». Un AI Employee que ocupa el rol de SDR debe sostener el proceso recurrente dentro de límites definidos: identificar leads, investigar, contactar, seguir, registrar, escalar y reportar desempeño.',
};
