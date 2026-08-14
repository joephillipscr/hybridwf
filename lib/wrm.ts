import type { T } from './i18n';

export const WRM_DEFINITION: T = {
  en: 'WRM — Work Resource Management — is the discipline that designs, assigns, governs and optimises work regardless of whether the resource executing it is human, artificial or hybrid.',
  es: 'WRM — Administración de Recursos de Trabajo — es la disciplina que diseña, asigna, gobierna y optimiza el trabajo independientemente de si el recurso que lo ejecuta es humano, artificial o híbrido.',
};

export const WRM_PREMISE: T = {
  en: 'The founding idea is to separate the post from its occupant. First there is an organisational need; from it a post or responsibility is born, with purpose, ownership, results, KPIs, authority, limits, relationships, tools and escalation. Only then do you decide which resource should fill it.',
  es: 'La idea fundacional es separar el puesto del ocupante. Primero existe una necesidad organizacional; de ella nace un puesto o responsabilidad, con propósito, ownership, resultados, KPIs, autoridad, límites, relaciones, herramientas y escalamiento. Después se decide cuál es el recurso correcto para ocuparlo.',
};

/* --- The stack ---------------------------------------------------- */

export interface Layer {
  key: 'wrm' | 'hrm' | 'arm' | 'hwm';
  name: T;
  manages: T;
  outcome: T;
}

export const STACK: Layer[] = [
  {
    key: 'wrm',
    name: { en: 'WRM — Work Resource Management', es: 'WRM — Administración de Recursos de Trabajo' },
    manages: { en: 'The work, its posts, results, authority and controls', es: 'El trabajo, sus puestos, resultados, autoridad y controles' },
    outcome: { en: 'Optimal workforce architecture', es: 'Arquitectura óptima del workforce' },
  },
  {
    key: 'hrm',
    name: { en: 'Human Resource Management', es: 'Human Resource Management' },
    manages: { en: 'People who execute work', es: 'Personas que ejecutan trabajo' },
    outcome: { en: 'Performance + rights + human development', es: 'Desempeño + derechos + desarrollo humano' },
  },
  {
    key: 'arm',
    name: { en: 'Artificial Resource Management', es: 'Artificial Resource Management' },
    manages: { en: 'AI systems that execute work', es: 'Sistemas de IA que ejecutan trabajo' },
    outcome: { en: 'Performance + safety + technical control', es: 'Desempeño + seguridad + control técnico' },
  },
  {
    key: 'hwm',
    name: { en: 'Hybrid Workforce Management', es: 'Hybrid Workforce Management' },
    manages: { en: 'Interaction and allocation between both', es: 'Interacción y asignación entre ambos' },
    outcome: { en: 'Coordination, transition and optimisation', es: 'Coordinación, transición y optimización' },
  },
];

/* --- The three classes of principle ------------------------------- */

export interface PrincipleLayer {
  code: 'U' | 'A' | 'H';
  name: T;
  definition: T;
  examples: T;
  count: number;
}

export const PRINCIPLE_LAYERS: PrincipleLayer[] = [
  {
    code: 'U',
    name: { en: 'Universal', es: 'Universales' },
    definition: {
      en: 'Principles of work administration that hold regardless of who executes.',
      es: 'Principios de administración del trabajo que deben respetarse sin importar quién ejecuta.',
    },
    examples: {
      en: 'Role, responsibilities, KPIs, manager, authority, escalation, audit.',
      es: 'Rol, responsabilidades, KPIs, manager, autoridad, escalamiento, auditoría.',
    },
    count: 87,
  },
  {
    code: 'A',
    name: { en: 'Adapted', es: 'Adaptados' },
    definition: {
      en: 'Human principles that keep an equivalent function but change mechanism.',
      es: 'Principios humanos que conservan una función equivalente pero cambian de mecanismo.',
    },
    examples: {
      en: 'Probation → shadow mode; coaching → configuration feedback; promotion → wider scope.',
      es: 'Probation → shadow mode; coaching → feedback de configuración; promoción → mayor scope.',
    },
    count: 20,
  },
  {
    code: 'H',
    name: { en: 'Exclusively human', es: 'Exclusivamente humanos' },
    definition: {
      en: 'Rights, needs and experiences that follow from the human condition.',
      es: 'Derechos, necesidades y experiencias derivadas de la condición humana.',
    },
    examples: {
      en: 'Health, rest, freedom of association, belonging, satisfaction, wellbeing.',
      es: 'Salud, descanso, libertad sindical, pertenencia, satisfacción, bienestar.',
    },
    count: 13,
  },
];

export const BOUNDARY_WARNING: T = {
  en: 'AI does not “need holidays” and does not “feel engagement”. Forcing those analogies degrades the framework. Equivalence must be operational, never anthropomorphic.',
  es: 'La IA no «necesita vacaciones» y no «siente engagement». Forzar esas analogías degrada el framework. La equivalencia debe ser operacional, nunca antropomórfica.',
};

/* --- The ten domains ---------------------------------------------- */

export interface Domain {
  n: number;
  name: T;
  scope: T;
}

export const DOMAINS: Domain[] = [
  {
    n: 1,
    name: { en: 'Organisational and job design', es: 'Diseño organizacional y de puestos' },
    scope: {
      en: 'Purpose, responsibilities, authority, ownership, unity of command and interdependencies.',
      es: 'Propósito, responsabilidades, autoridad, ownership, unidad de mando e interdependencias.',
    },
  },
  {
    n: 2,
    name: { en: 'Selection and allocation', es: 'Selección y asignación' },
    scope: {
      en: 'Define the post first, then assess fit, competencies, cost, risk and prior testing.',
      es: 'Definir el puesto primero, evaluar fit, competencias, costo, riesgo y prueba previa.',
    },
  },
  {
    n: 3,
    name: { en: 'Onboarding and enablement', es: 'Onboarding y habilitación' },
    scope: {
      en: 'Company knowledge, SOPs, policies, org chart, tools and access.',
      es: 'Conocimiento de empresa, SOPs, políticas, organigrama, herramientas y accesos.',
    },
  },
  {
    n: 4,
    name: { en: 'Direction, collaboration and communication', es: 'Dirección, colaboración y comunicación' },
    scope: {
      en: 'Delegation, escalation, handoffs, channels, context and interaction rules.',
      es: 'Delegación, escalamiento, handoffs, canales, contexto y reglas de interacción.',
    },
  },
  {
    n: 5,
    name: { en: 'Objectives and performance', es: 'Objetivos y desempeño' },
    scope: {
      en: 'KPIs, quality standards, feedback, review, underperformance and improvement.',
      es: 'KPIs, estándares de calidad, feedback, revisión, underperformance y mejora.',
    },
  },
  {
    n: 6,
    name: { en: 'Learning and development', es: 'Aprendizaje y desarrollo' },
    scope: {
      en: 'Gaps, training, updates, memory, knowledge and capability evolution.',
      es: 'Brechas, entrenamiento, actualización, memoria, conocimiento y evolución de capacidades.',
    },
  },
  {
    n: 7,
    name: { en: 'Human experience and rewards', es: 'Experiencia humana y recompensas' },
    scope: {
      en: 'Motivation, compensation, health, rest, rights and labour relations — when the resource is human.',
      es: 'Motivación, compensación, salud, descanso, derechos y relaciones laborales — cuando el recurso es humano.',
    },
  },
  {
    n: 8,
    name: { en: 'Governance, security and risk', es: 'Gobierno, seguridad y riesgo' },
    scope: {
      en: 'Least privilege, segregation, auditability, privacy, incidents and compliance.',
      es: 'Least privilege, segregación, auditabilidad, privacidad, incidentes y cumplimiento.',
    },
  },
  {
    n: 9,
    name: { en: 'Mobility, continuity and exit', es: 'Movilidad, continuidad y salida' },
    scope: {
      en: 'Promotion and scope, succession and fallback, transfer, offboarding and knowledge retention.',
      es: 'Promoción/scope, sucesión/fallback, transferencia, offboarding y conservación de conocimiento.',
    },
  },
  {
    n: 10,
    name: { en: 'Workforce planning and analytics', es: 'Workforce planning y analytics' },
    scope: {
      en: 'Capacity, make-vs-buy, human/AI mix, costs, productivity, quality and continuous improvement.',
      es: 'Capacidad, make-vs-buy, mix humano/IA, costos, productividad, calidad y mejora continua.',
    },
  },
];

/* --- Lifecycle ----------------------------------------------------- */

export interface Stage {
  n: number;
  name: T;
  objective: T;
}

export const LIFECYCLE: Stage[] = [
  { n: 1, name: { en: 'Design', es: 'Diseñar' }, objective: { en: 'Define result, responsibilities, KPIs, authority, limits and risk.', es: 'Definir resultado, responsabilidades, KPIs, autoridad, límites y riesgo.' } },
  { n: 2, name: { en: 'Allocate', es: 'Asignar' }, objective: { en: 'Decide Human / Artificial / Hybrid.', es: 'Decidir Human / Artificial / Hybrid.' } },
  { n: 3, name: { en: 'Select', es: 'Seleccionar' }, objective: { en: 'Person, model, agent, vendor or architecture with demonstrable fit.', es: 'Persona, modelo, agente, vendor o arquitectura con fit demostrable.' } },
  { n: 4, name: { en: 'Onboard', es: 'Incorporar' }, objective: { en: 'Knowledge, SOPs, culture and policies, relationships and escalation.', es: 'Onboarding de conocimiento, SOPs, cultura/políticas, relaciones y escalamiento.' } },
  { n: 5, name: { en: 'Enable', es: 'Habilitar' }, objective: { en: 'Tools, access, credentials, budget and authority.', es: 'Herramientas, accesos, credenciales, presupuesto y autoridad.' } },
  { n: 6, name: { en: 'Prove', es: 'Probar' }, objective: { en: 'Probation or shadow mode, simulations, evaluations and intensive approval.', es: 'Probation o shadow mode, simulaciones, evaluaciones y aprobación intensiva.' } },
  { n: 7, name: { en: 'Operate', es: 'Operar' }, objective: { en: 'Recurring work with observability and management by exception.', es: 'Trabajo recurrente con observabilidad y management by exception.' } },
  { n: 8, name: { en: 'Measure', es: 'Medir' }, objective: { en: 'KPIs, quality, cost, incidents, interventions and outcomes.', es: 'KPIs, calidad, costo, incidentes, intervenciones y outcomes.' } },
  { n: 9, name: { en: 'Develop', es: 'Desarrollar' }, objective: { en: 'Coaching or updates to instructions, knowledge, models and tools. The signal may originate with the manager or with the resource reporting divergence from its own data.', es: 'Coaching o actualización de instrucciones, conocimiento, modelos y herramientas. La señal puede originarse en el manager o en el recurso reportando divergencia a partir de sus propios datos.' } },
  { n: 10, name: { en: 'Reassign', es: 'Reasignar' }, objective: { en: 'Change scope, move Human ↔ Artificial, redesign the hybrid split.', es: 'Cambiar scope, mover Human ↔ Artificial, rediseñar reparto híbrido.' } },
  { n: 11, name: { en: 'Suspend', es: 'Suspender' }, objective: { en: 'Stop work or access on risk, incident or unacceptable performance.', es: 'Detener trabajo o accesos ante riesgo, incidente o desempeño inaceptable.' } },
  { n: 12, name: { en: 'Retire', es: 'Retirar' }, objective: { en: 'Offboarding, revocation, knowledge transfer and retention or deletion.', es: 'Offboarding, revocación, transferencia de conocimiento y retención/borrado.' } },
];

/* --- The ten non-negotiable rules ---------------------------------- */

export const RULES: T[] = [
  {
    en: 'Every post must exist before its occupant, with purpose, responsibilities, results and KPIs — and no post may outlive its purpose.',
    es: 'Todo puesto debe existir antes que su ocupante, con propósito, responsabilidades, resultados y KPIs — y ningún puesto debe sobrevivir a su propósito.',
  },
  {
    en: 'Every work resource must have exactly one accountable owner, even when it collaborates with many people or areas and even when its supervision is delegated.',
    es: 'Todo recurso de trabajo debe tener exactamente un accountable owner, aunque colabore con múltiples personas o áreas y aunque su supervisión esté delegada.',
  },
  {
    en: 'Responsibility and authority must travel together: no result is demanded without granting the necessary faculties.',
    es: 'Responsabilidad y autoridad deben estar alineadas: no se exige un resultado sin entregar las facultades necesarias.',
  },
  { en: 'All authority must be explicit, limited and revocable.', es: 'Toda autoridad debe ser explícita, limitada y revocable.' },
  { en: 'Every resource must know its limits, its handoffs and when to escalate.', es: 'Todo recurso debe conocer sus límites, sus handoffs y cuándo escalar.' },
  {
    en: 'Access is granted under least privilege and is separated from the identity of the model or the prompt. Context is provisioned on the same basis: what is granted and what is withheld are both recorded design decisions.',
    es: 'Los accesos se otorgan bajo least privilege y se separan de la identidad del modelo o del prompt. El contexto se aprovisiona sobre la misma base: lo que se concede y lo que se retiene son ambas decisiones de diseño registradas.',
  },
  { en: 'Every material action executed by an AI Employee must be traceable and auditable.', es: 'Toda acción material ejecutada por un AI Employee debe ser trazable y auditable.' },
  {
    en: 'Performance is measured by outcomes, quality, risk and cost — not by activity, hours, tokens or message count.',
    es: 'El desempeño se mide por outcomes, calidad, riesgo y costo; no por actividad, horas, tokens o cantidad de mensajes.',
  },
  {
    en: 'A Human ↔ Artificial transition must remain reversible until stable performance is demonstrated.',
    es: 'Una transición Human ↔ Artificial debe ser reversible hasta demostrar performance estable.',
  },
  {
    en: 'Final responsibility for an AI Employee stays with an identified person or human governance body, however many artificial supervisors sit between them.',
    es: 'La responsabilidad final sobre un AI Employee permanece en una persona identificada o cuerpo humano de gobierno, sin importar cuántos supervisores artificiales haya en el medio.',
  },
];
