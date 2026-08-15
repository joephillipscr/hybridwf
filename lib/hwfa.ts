import type { T } from './i18n';

/**
 * Hybrid Workforce Fit Assessment.
 *
 * Deliberately NOT a 0–100 number. The framework's own warning is that a blind
 * formula lets a manager launder a decision they had already made. So the
 * instrument returns a *structured argument*: an allocation, a risk class, a
 * starting autonomy rung, the dimensions that actually drove the result, the
 * controls that follow from it, and what would change the answer.
 */

export type Allocation = 'human' | 'deterministic' | 'hybrid' | 'artificial';
export type RiskClass = 'low' | 'moderate' | 'high' | 'critical';

export interface Dimension {
  key: string;
  name: T;
  question: T;
  /** Index 0 → least suited to an artificial resource, 3 → most. */
  options: T[];
}

export const DIMENSIONS: Dimension[] = [
  {
    key: 'reserved',
    name: { en: 'Reserved subjects', es: 'Materias reservadas' },
    question: { en: 'Does the responsibility decide matters HWF-02 reserves to humans?', es: '¿La responsabilidad decide materias que HWF-02 reserva a humanos?' },
    options: [
      { en: 'Yes — its core decisions are reserved: employment, health and safety, credit or essential services, legal rights, force, vulnerable people', es: 'Sí — sus decisiones centrales son reservadas: empleo, salud y seguridad, crédito o servicios esenciales, derechos legales, fuerza, personas vulnerables' },
      { en: 'Reserved matters appear regularly among its decisions', es: 'Las materias reservadas aparecen con regularidad entre sus decisiones' },
      { en: 'It occasionally touches reserved matters, and they can be routed out', es: 'Toca materias reservadas ocasionalmente, y pueden rutearse fuera' },
      { en: 'It never decides reserved matters', es: 'Nunca decide materias reservadas' },
    ],
  },
  {
    key: 'repeatability',
    name: { en: 'Repeatability', es: 'Repetibilidad' },
    question: { en: 'Does the work follow patterns?', es: '¿El trabajo sigue patrones?' },
    options: [
      { en: 'Almost every case is different', es: 'Casi cada caso es distinto' },
      { en: 'Loose patterns, frequent variation', es: 'Patrones flojos, variación frecuente' },
      { en: 'Clear patterns with some variation', es: 'Patrones claros con alguna variación' },
      { en: 'Highly repetitive, well-defined', es: 'Altamente repetitivo y bien definido' },
    ],
  },
  {
    key: 'predictability',
    name: { en: 'Predictability', es: 'Predictibilidad' },
    question: { en: 'Are the scenarios known or modellable?', es: '¿Los escenarios son conocidos o modelables?' },
    options: [
      { en: 'Novel situations constantly appear', es: 'Aparecen situaciones nuevas constantemente' },
      { en: 'Known in outline, unpredictable in detail', es: 'Conocidos a grandes rasgos, impredecibles en detalle' },
      { en: 'Mostly known, documented cases', es: 'Mayormente conocidos y documentados' },
      { en: 'Fully enumerable inputs and outputs', es: 'Inputs y outputs completamente enumerables' },
    ],
  },
  {
    key: 'data',
    name: { en: 'Data availability', es: 'Disponibilidad de datos' },
    question: { en: 'Is there sufficient and authorised context?', es: '¿Existe contexto suficiente y autorizado?' },
    options: [
      { en: 'The criteria live in people’s heads', es: 'El criterio vive en la cabeza de las personas' },
      { en: 'Partially documented, scattered', es: 'Parcialmente documentado y disperso' },
      { en: 'Documented, accessible, needs curation', es: 'Documentado y accesible, requiere curaduría' },
      { en: 'Complete, current, authorised and queryable', es: 'Completo, vigente, autorizado y consultable' },
    ],
  },
  {
    key: 'judgement',
    name: { en: 'Judgement required', es: 'Necesidad de criterio' },
    question: { en: 'Does it require ambiguous or strategic judgement?', es: '¿Requiere juicio ambiguo o estratégico?' },
    options: [
      { en: 'Strategic judgement, competing priorities', es: 'Juicio estratégico, prioridades en conflicto' },
      { en: 'Significant contextual judgement', es: 'Criterio contextual importante' },
      { en: 'Some judgement inside clear rules', es: 'Algo de criterio dentro de reglas claras' },
      { en: 'Rule-following, little interpretation', es: 'Seguimiento de reglas, poca interpretación' },
    ],
  },
  {
    key: 'empathy',
    name: { en: 'Human significance', es: 'Significancia humana' },
    question: { en: 'What does the interaction mean for the person on the other side?', es: '¿Qué significa la interacción para la persona del otro lado?' },
    options: [
      { en: 'Dignity, vulnerability or power over the person is at stake — or the relationship is the product', es: 'Hay dignidad, vulnerabilidad o poder sobre la persona en juego — o la relación es el producto' },
      { en: 'Trust materially affects the outcome', es: 'La confianza afecta materialmente el resultado' },
      { en: 'Courtesy matters, relationship does not decide', es: 'La cortesía importa, la relación no decide' },
      { en: 'Transactional, no relational component', es: 'Transaccional, sin componente relacional' },
    ],
  },
  {
    key: 'risk',
    name: { en: 'Cost of error', es: 'Costo del error' },
    question: { en: 'What does a wrong decision cost?', es: '¿Cuál es el costo del error?' },
    options: [
      { en: 'Severe: legal, financial or safety consequences', es: 'Severo: consecuencias legales, financieras o de seguridad' },
      { en: 'High: significant customer or money impact', es: 'Alto: impacto relevante en cliente o dinero' },
      { en: 'Moderate: rework and some friction', es: 'Moderado: retrabajo y algo de fricción' },
      { en: 'Low: internal and easily absorbed', es: 'Bajo: interno y fácilmente absorbible' },
    ],
  },
  {
    key: 'reversibility',
    name: { en: 'Reversibility', es: 'Reversibilidad' },
    question: { en: 'Can a wrong action be undone?', es: '¿Una acción equivocada puede deshacerse?' },
    options: [
      { en: 'Irreversible once executed', es: 'Irreversible una vez ejecutada' },
      { en: 'Reversible at high cost or with damage done', es: 'Reversible a alto costo o con daño ya hecho' },
      { en: 'Reversible with effort inside a window', es: 'Reversible con esfuerzo dentro de una ventana' },
      { en: 'Trivially reversible', es: 'Reversible trivialmente' },
    ],
  },
  {
    key: 'volume',
    name: { en: 'Volume', es: 'Volumen' },
    question: { en: 'How many cases flow through this responsibility?', es: '¿Cuántos casos fluyen por esta responsabilidad?' },
    options: [
      { en: 'A handful of cases per month', es: 'Un puñado de casos al mes' },
      { en: 'Steady but modest', es: 'Constante pero modesto' },
      { en: 'High, occupies real capacity', es: 'Alto, ocupa capacidad real' },
      { en: 'Very high, a bottleneck today', es: 'Muy alto, hoy es un cuello de botella' },
    ],
  },
  {
    key: 'speed',
    name: { en: 'Speed and 24/7', es: 'Velocidad y 24/7' },
    question: { en: 'Does continuous availability add value?', es: '¿La disponibilidad continua aporta valor?' },
    options: [
      { en: 'No, business hours are fine', es: 'No, el horario laboral alcanza' },
      { en: 'Marginally useful', es: 'Marginalmente útil' },
      { en: 'Clearly valuable', es: 'Claramente valiosa' },
      { en: 'Decisive — delay destroys the outcome', es: 'Decisiva — la demora destruye el resultado' },
    ],
  },
  {
    key: 'auditability',
    name: { en: 'Auditability', es: 'Auditabilidad' },
    question: { en: 'Can we verify the result?', es: '¿Podemos verificar el resultado?' },
    options: [
      { en: 'Quality is a matter of opinion', es: 'La calidad es cuestión de opinión' },
      { en: 'Verifiable only by sampling', es: 'Verificable solo por muestreo' },
      { en: 'Verifiable against a defined standard', es: 'Verificable contra un estándar definido' },
      { en: 'Automatically verifiable, objective criteria', es: 'Verificable automáticamente, criterios objetivos' },
    ],
  },
  {
    key: 'exceptions',
    name: { en: 'Exception rate', es: 'Tasa de excepciones' },
    question: { en: 'What share of cases leaves the happy path?', es: '¿Qué porcentaje sale del camino normal?' },
    options: [
      { en: 'Most cases are exceptions', es: 'La mayoría de casos son excepciones' },
      { en: 'Roughly a third', es: 'Cerca de un tercio' },
      { en: 'Around one in ten', es: 'Alrededor de uno de cada diez' },
      { en: 'Rare, under a few per cent', es: 'Raras, bajo un pequeño porcentaje' },
    ],
  },
  {
    key: 'economics',
    name: { en: 'Cost profile', es: 'Perfil de costos' },
    question: {
      en: 'Where does the cost of this responsibility sit today?',
      es: '¿Dónde está hoy el costo de esta responsabilidad?',
    },
    options: [
      { en: 'In scarce senior judgement applied case by case', es: 'En criterio senior escaso aplicado caso por caso' },
      { en: 'In relationship time that builds the outcome', es: 'En tiempo de relación que construye el resultado' },
      { en: 'In skilled time consumed by repetitive cases', es: 'En tiempo calificado consumido por casos repetitivos' },
      { en: 'In coverage: queues, waiting and out-of-hours demand', es: 'En cobertura: colas, espera y demanda fuera de horario' },
    ],
  },
];

/* --- Autonomy ladder ---------------------------------------------- */

export const AUTONOMY: { rung: number; name: T; detail: T }[] = [
  {
    rung: 1,
    name: { en: 'Observe', es: 'Observar' },
    detail: { en: 'Records and compares without intervening. Shadow mode against a human baseline.', es: 'Registra y compara sin intervenir. Shadow mode contra un baseline humano.' },
  },
  {
    rung: 2,
    name: { en: 'Recommend', es: 'Recomendar' },
    detail: { en: 'Proposes the action and shows the evidence used. A human executes.', es: 'Propone la acción y muestra la evidencia utilizada. Un humano ejecuta.' },
  },
  {
    rung: 3,
    name: { en: 'Execute on approval', es: 'Ejecutar con aprobación' },
    detail: { en: 'Acts only after explicit human approval, case by case.', es: 'Actúa solo tras aprobación humana explícita, caso por caso.' },
  },
  {
    rung: 4,
    name: { en: 'Act by exception', es: 'Actuar por excepción' },
    detail: { en: 'Acts within rules; the manager intervenes on exceptions only.', es: 'Actúa dentro de reglas; el manager interviene solo en excepciones.' },
  },
  {
    rung: 5,
    name: { en: 'Autonomous within limits', es: 'Autónomo dentro de límites' },
    detail: { en: 'Operates autonomously inside defined limits, with traceability and escalation.', es: 'Opera autónomamente dentro de límites definidos, con trazabilidad y escalamiento.' },
  },
];

export const AUTONOMY_NOTE: T = {
  en: 'No responsibility starts above rung 3, whatever the assessment says. Autonomy is earned with evidence of stable performance, never granted because the model appears capable.',
  es: 'Ninguna responsabilidad arranca por encima del peldaño 3, diga lo que diga la evaluación. La autonomía se gana con evidencia de desempeño estable, nunca se concede porque el modelo parezca capaz.',
};

/* --- Evaluation ---------------------------------------------------- */

export interface Finding {
  dimension: string;
  name: T;
  reason: T;
}

export interface Result {
  allocation: Allocation;
  risk: RiskClass;
  startingRung: number;
  /** The answers that actually decided the outcome. */
  determinative: Finding[];
  /** Controls that follow from the answers. */
  controls: T[];
  /** Conditions that would change the recommendation. */
  wouldChange: T[];
  headline: T;
}

const RISK_LABEL: Record<RiskClass, T> = {
  low: { en: 'Low', es: 'Bajo' },
  moderate: { en: 'Moderate', es: 'Moderado' },
  high: { en: 'High', es: 'Alto' },
  critical: { en: 'Critical', es: 'Crítico' },
};

export const riskLabel = (r: RiskClass) => RISK_LABEL[r];

export const ALLOCATION_LABEL: Record<Allocation, T> = {
  human: { en: 'Human', es: 'Humano' },
  deterministic: { en: 'Deterministic automation', es: 'Automatización determinista' },
  hybrid: { en: 'Hybrid', es: 'Híbrido' },
  artificial: { en: 'Artificial', es: 'Artificial' },
};

export type Answers = Record<string, number>;

export function evaluate(a: Answers): Result {
  const v = (k: string) => a[k] ?? 0;
  const determinative: Finding[] = [];
  const controls: T[] = [];
  const wouldChange: T[] = [];

  const dim = (k: string) => DIMENSIONS.find((d) => d.key === k)!;
  const mark = (k: string, reason: T) =>
    determinative.push({ dimension: k, name: dim(k).name, reason });

  /* ================= Stage 1 · Eligibility =================
     Constraints come first (HWF-01): what may not be delegated,
     and what does not need an AI Employee at all. */

  const reservedCore = v('reserved') === 0;
  let ceiling: Allocation = 'artificial';

  if (reservedCore) {
    ceiling = 'hybrid';
    mark('reserved', {
      en: 'The core decisions are reserved subjects (HWF-02): an artificial resource may analyse, draft and recommend, and a human with authority to decide otherwise takes every decision. Reserved decisions are Critical by definition.',
      es: 'Las decisiones centrales son materias reservadas (HWF-02): un recurso artificial puede analizar, redactar y recomendar, y un humano con autoridad para decidir distinto toma cada decisión. Las decisiones reservadas son Críticas por definición.',
    });
    controls.push({
      en: 'Route every reserved decision to a named human who can restate the case and decide otherwise — approval throughput that forecloses understanding is a signature, not a decision.',
      es: 'Ruteá toda decisión reservada a un humano con nombre que pueda reformular el caso y decidir distinto — aprobar a un ritmo que impide entender es una firma, no una decisión.',
    });
  } else if (v('reserved') === 1) {
    if (ceiling === 'artificial') ceiling = 'hybrid';
    controls.push({
      en: 'Reserved matters appear regularly: define the routing rule that sends them to a human before deployment, and audit that it fires.',
      es: 'Las materias reservadas aparecen con regularidad: defina la regla de ruteo que las envía a un humano antes del deployment, y audite que dispare.',
    });
  }

  /* Deterministic exit: fully enumerable, rule-following work with a thin
     exception tail is software territory, not AI Employee territory. */
  if (!reservedCore && v('predictability') === 3 && v('judgement') === 3 && v('exceptions') >= 2) {
    const detRisk: RiskClass = v('risk') <= 1 ? 'high' : v('risk') === 2 ? 'moderate' : 'low';
    mark('predictability', {
      en: 'Fully enumerable inputs and outputs with rule-following execution is not a case for probabilistic AI: conventional software or RPA does this cheaper, faster and with zero stochastic risk.',
      es: 'Inputs y outputs completamente enumerables con ejecución por reglas no es un caso para IA probabilística: el software convencional o RPA lo hace más barato, más rápido y con cero riesgo estocástico.',
    });
    controls.push({
      en: 'Specify the flow and build it as deterministic software. If a residual exception tail appears in production, assess that tail — and only that tail — separately.',
      es: 'Especificá el flujo y construílo como software determinista. Si aparece una cola residual de excepciones en producción, evaluá esa cola — y solo esa cola — por separado.',
    });
    wouldChange.push({
      en: 'If variation grows — new case types, judgement creeping in, exceptions rising — re-run this assessment: the boundary between a script and an AI Employee is the exception tail.',
      es: 'Si la variación crece — tipos de caso nuevos, criterio filtrándose, excepciones subiendo — repetí esta evaluación: la frontera entre un script y un AI Employee es la cola de excepciones.',
    });
    return {
      allocation: 'deterministic',
      risk: detRisk,
      startingRung: 0,
      determinative,
      controls,
      wouldChange,
      headline: {
        en: 'Automate this deterministically — it does not need an AI Employee.',
        es: 'Automatizá esto de forma determinista — no necesita un AI Employee.',
      },
    };
  }

  if (v('data') === 0) {
    ceiling = 'hybrid';
    mark('data', {
      en: 'The criteria are not written down anywhere. Nothing can be delegated to software that the organisation has never managed to explain to itself.',
      es: 'El criterio no está escrito en ninguna parte. No se puede delegar a software aquello que la organización nunca logró explicarse a sí misma.',
    });
    controls.push({
      en: 'Before any deployment: document the decision criteria, exceptions and precedents that currently live in people’s heads.',
      es: 'Antes de cualquier deployment: documentar criterios de decisión, excepciones y precedentes que hoy viven en la cabeza de las personas.',
    });
    wouldChange.push({
      en: 'If context provisioning is completed and the criteria become queryable, re-run this assessment — the ceiling may lift.',
      es: 'Si se completa el context provisioning y el criterio se vuelve consultable, repetí esta evaluación — el techo puede subir.',
    });
  }

  if (v('judgement') === 0) {
    ceiling = 'hybrid';
    mark('judgement', {
      en: 'Strategic judgement with competing priorities is not a delegation problem; it is a management one.',
      es: 'El juicio estratégico con prioridades en conflicto no es un problema de delegación; es de dirección.',
    });
  }

  /* ================= Stage 2 · Risk =================
     The class caps autonomy and allocation. Volume amplifies it:
     at scale, the same error rate lands on many more people. */

  let risk: RiskClass =
    v('risk') === 0 && v('reversibility') <= 1
      ? 'critical'
      : v('risk') <= 1 || v('reversibility') === 0
        ? 'high'
        : v('risk') === 2 || v('reversibility') === 1
          ? 'moderate'
          : 'low';

  if (v('volume') === 3 && (risk === 'low' || risk === 'moderate')) {
    risk = risk === 'low' ? 'moderate' : 'high';
    mark('volume', {
      en: 'Volume multiplies whatever can go wrong: at this scale the same error rate lands on many more people, so the class rises — scale is one of HWF-51’s seven factors, and it never argues for automation by itself.',
      es: 'El volumen multiplica todo lo que puede salir mal: a esta escala la misma tasa de error alcanza a muchas más personas, así que la clase sube — la escala es uno de los siete factores de HWF-51, y por sí sola nunca es argumento para automatizar.',
    });
  }
  if (reservedCore) risk = 'critical';

  if (risk === 'critical' && ceiling === 'artificial') {
    ceiling = 'hybrid';
    mark('risk', {
      en: 'A severe and irreversible error caps this at hybrid: a human must own the decision even if the artificial resource does the work.',
      es: 'Un error severo e irreversible topa esto en híbrido: un humano debe conservar la decisión aunque el recurso artificial haga el trabajo.',
    });
  }
  if (risk === 'critical') {
    controls.push({
      en: 'Mandatory human approval before execution, with separation of duties — whoever initiates does not approve.',
      es: 'Aprobación humana obligatoria antes de ejecutar, con separación de funciones: quien inicia no aprueba.',
    });
  }

  if (v('empathy') === 0) {
    ceiling = 'human';
    mark('empathy', {
      en: 'Dignity, vulnerability or power over the person is at stake, or the relationship is the product. Ownership stays human; an artificial resource may prepare, never conclude.',
      es: 'Hay dignidad, vulnerabilidad o poder sobre la persona en juego, o la relación es el producto. El ownership queda humano; un recurso artificial puede preparar, nunca concluir.',
    });
  } else if (v('empathy') === 1 && ceiling === 'artificial') {
    ceiling = 'hybrid';
    mark('empathy', {
      en: 'Trust materially affects the outcome, so a person keeps the conversation while the artificial resource prepares context.',
      es: 'La confianza afecta materialmente el resultado, así que una persona conserva la conversación mientras el recurso artificial prepara contexto.',
    });
  }

  if (v('auditability') === 0 && v('risk') <= 1) {
    ceiling = ceiling === 'human' ? 'human' : 'hybrid';
    mark('auditability', {
      en: 'You cannot govern what you cannot verify, and the cost of error here is too high to run unverifiable work.',
      es: 'No se puede gobernar lo que no se puede verificar, y el costo del error acá es demasiado alto para operar trabajo no verificable.',
    });
    controls.push({
      en: 'Define a quality bar and a sampling regime before granting any autonomy.',
      es: 'Definir un estándar de calidad y un régimen de muestreo antes de conceder autonomía.',
    });
  }

  /* ================= Stage 3 · Economics =================
     Only chooses among what survived the first two stages. Volume no
     longer pulls toward automation, and the cost profile is a fact
     about the work, not a verdict about the alternatives. */

  const pull =
    (v('repeatability') >= 2 ? 1 : 0) +
    (v('predictability') >= 2 ? 1 : 0) +
    (v('speed') >= 2 ? 1 : 0) +
    (v('exceptions') >= 2 ? 1 : 0) +
    (v('auditability') >= 2 ? 1 : 0);

  const humanPull =
    (v('repeatability') <= 1 ? 1 : 0) +
    (v('volume') <= 1 ? 1 : 0) +
    (v('judgement') <= 1 ? 1 : 0) +
    (v('empathy') <= 1 ? 1 : 0);

  const econ = v('economics'); // 0-1: judgement/relationship cost · 2-3: repetition/coverage cost

  let allocation: Allocation;
  if (ceiling === 'human') {
    allocation = 'human';
  } else if (humanPull >= 3 && pull <= 2 && econ <= 1) {
    allocation = 'human';
    mark('economics', {
      en: 'The cost sits in judgement and relationships, with little recurring work: there is not enough repetition here to justify designing an artificial occupant.',
      es: 'El costo está en el criterio y las relaciones, con poco trabajo recurrente: no hay suficiente repetición para justificar diseñar un ocupante artificial.',
    });
  } else if (pull >= 4 && econ >= 2 && ceiling === 'artificial') {
    allocation = 'artificial';
    mark('repeatability', {
      en: 'Repetitive, predictable, verifiable work whose cost sits in repetition and coverage — the case where an artificial resource can hold role stewardship.',
      es: 'Trabajo repetitivo, predecible y verificable cuyo costo está en la repetición y la cobertura — el caso donde un recurso artificial puede sostener role stewardship.',
    });
  } else {
    allocation = 'hybrid';
    if (determinative.length === 0) {
      mark('exceptions', {
        en: 'The happy path is automatable but the exception tail is not. Split the responsibility explicitly rather than assigning it whole.',
        es: 'El camino normal es automatizable pero la cola de excepciones no. Repartí la responsabilidad explícitamente en vez de asignarla entera.',
      });
    }
  }

  /* --- Starting autonomy. Never above rung 3. */
  let startingRung: number;
  if (allocation === 'human') startingRung = 2;
  else if (risk === 'critical') startingRung = 1;
  else if (risk === 'high') startingRung = 2;
  else startingRung = 3;

  /* --- Controls that always follow. */
  if (v('exceptions') <= 1) {
    controls.push({
      en: 'Design the escalation path first: with this exception rate, most of the value depends on how the tail is handled, not the happy path.',
      es: 'Diseñá primero la ruta de escalamiento: con esta tasa de excepciones, la mayor parte del valor depende de cómo se maneja la cola, no el camino normal.',
    });
  }
  if (v('reversibility') <= 1) {
    controls.push({
      en: 'Every irreversible action needs an explicit approval gate and a named person who owns the kill switch — exercised on a stated cadence (HWF-23).',
      es: 'Toda acción irreversible necesita un approval gate explícito y una persona con nombre dueña del kill switch — ejercitado con cadencia declarada (HWF-23).',
    });
  }
  if (allocation !== 'human') {
    controls.push({
      en: 'Record the human baseline — quality, cycle time, cost, error rate, exception volume — before anything changes. Without it you cannot prove improvement or justify rollback.',
      es: 'Registre el baseline humano — calidad, tiempo de ciclo, costo, tasa de error, volumen de excepciones — antes de cambiar nada. Sin él no puede demostrarse mejora ni justificarse un rollback.',
    });
  }

  /* --- What would change the answer. */
  wouldChange.push({
    en: 'A rising Human Intervention Rate over the first weeks means the autonomy on paper is not real — drop a rung and find out why. A falling one is not automatically good: check the Missed Escalation Rate before celebrating.',
    es: 'Un Human Intervention Rate creciente en las primeras semanas significa que la autonomía del papel no es real — baje un peldaño y averigüe por qué. Uno decreciente no es automáticamente bueno: revise el Missed Escalation Rate antes de celebrar.',
  });
  if (allocation === 'artificial') {
    wouldChange.push({
      en: 'A single incident with customer or financial impact returns this to hybrid until the cause is understood and the control is added.',
      es: 'Un solo incidente con impacto en cliente o dinero devuelve esto a híbrido hasta entender la causa y agregar el control.',
    });
  }
  if (allocation === 'human' && v('volume') >= 2) {
    wouldChange.push({
      en: 'Volume is already high. If the criteria get documented, the hybrid split becomes worth reassessing.',
      es: 'El volumen ya es alto. Si el criterio se documenta, vale la pena reevaluar el reparto híbrido.',
    });
  }
  wouldChange.push({
    en: 'If cost per successful outcome — including supervision, rework and incidents — stops beating the alternative, the allocation should change regardless of how well the technology performs.',
    es: 'Si el costo por outcome correcto — incluyendo supervisión, retrabajo e incidentes — deja de ganarle a la alternativa, la asignación debe cambiar por bien que funcione la tecnología.',
  });

  const headline: T = {
    en:
      allocation === 'human'
        ? 'Keep this responsibility human.'
        : allocation === 'hybrid'
          ? 'Design this as an explicitly split hybrid responsibility.'
          : 'This responsibility can carry artificial role stewardship within limits.',
    es:
      allocation === 'human'
        ? 'Mantené esta responsabilidad humana.'
        : allocation === 'hybrid'
          ? 'Diseñá esto como una responsabilidad híbrida con reparto explícito.'
          : 'Esta responsabilidad puede sostener role stewardship artificial dentro de límites.',
  };

  return { allocation, risk, startingRung, determinative, controls, wouldChange, headline };
}
