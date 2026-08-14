import type { T } from './i18n';

/**
 * Hybrid Workforce Fit Score.
 *
 * Deliberately NOT a 0–100 number. The framework's own warning is that a blind
 * formula lets a manager launder a decision they had already made. So the
 * instrument returns a *structured argument*: an allocation, a risk class, a
 * starting autonomy rung, the dimensions that actually drove the result, the
 * controls that follow from it, and what would change the answer.
 */

export type Allocation = 'human' | 'hybrid' | 'artificial';
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
    name: { en: 'Empathy and trust', es: 'Empatía y confianza' },
    question: { en: 'Does the human relationship create material value?', es: '¿La relación humana crea valor material?' },
    options: [
      { en: 'The relationship is the product', es: 'La relación es el producto' },
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
    question: { en: 'Is there enough repetition to justify automation?', es: '¿Existe suficiente repetición para justificar automatización?' },
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
    name: { en: 'Economics', es: 'Economics' },
    question: {
      en: 'Which alternative offers a better cost per correct outcome, including supervision?',
      es: '¿Qué alternativa ofrece mejor costo por outcome correcto, incluyendo supervisión?',
    },
    options: [
      { en: 'Human, clearly', es: 'Humano, claramente' },
      { en: 'Human, narrowly', es: 'Humano, por poco' },
      { en: 'Artificial, narrowly', es: 'Artificial, por poco' },
      { en: 'Artificial, clearly', es: 'Artificial, claramente' },
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

  /* Risk class from cost of error and reversibility. */
  const risk: RiskClass =
    v('risk') === 0 && v('reversibility') <= 1
      ? 'critical'
      : v('risk') <= 1 || v('reversibility') === 0
        ? 'high'
        : v('risk') === 2 || v('reversibility') === 1
          ? 'moderate'
          : 'low';

  /* --- Hard gates: these cap the allocation regardless of everything else. */
  let ceiling: Allocation = 'artificial';

  if (risk === 'critical') {
    ceiling = 'hybrid';
    mark('risk', {
      en: 'A severe and irreversible error caps this at hybrid: a human must own the decision even if the artificial resource does the work.',
      es: 'Un error severo e irreversible topa esto en híbrido: un humano debe conservar la decisión aunque el recurso artificial haga el trabajo.',
    });
    controls.push({
      en: 'Mandatory human approval before execution, with separation of duties — whoever initiates does not approve.',
      es: 'Aprobación humana obligatoria antes de ejecutar, con separación de funciones: quien inicia no aprueba.',
    });
  }

  if (v('empathy') === 0) {
    ceiling = 'human';
    mark('empathy', {
      en: 'The relationship is the product. Ownership stays human; an artificial resource may prepare, never conclude.',
      es: 'La relación es el producto. El ownership queda humano; un recurso artificial puede preparar, nunca concluir.',
    });
  } else if (v('empathy') === 1 && ceiling === 'artificial') {
    ceiling = 'hybrid';
    mark('empathy', {
      en: 'Trust materially affects the outcome, so a person keeps the conversation while the artificial resource prepares context.',
      es: 'La confianza afecta materialmente el resultado, así que una persona conserva la conversación mientras el recurso artificial prepara contexto.',
    });
  }

  if (v('data') === 0) {
    ceiling = ceiling === 'human' ? 'human' : 'hybrid';
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
    ceiling = ceiling === 'human' ? 'human' : 'hybrid';
    mark('judgement', {
      en: 'Strategic judgement with competing priorities is not a delegation problem; it is a management one.',
      es: 'El juicio estratégico con prioridades en conflicto no es un problema de delegación; es de dirección.',
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

  /* --- Positive pull toward an artificial resource. */
  const pull =
    (v('repeatability') >= 2 ? 1 : 0) +
    (v('predictability') >= 2 ? 1 : 0) +
    (v('volume') >= 2 ? 1 : 0) +
    (v('speed') >= 2 ? 1 : 0) +
    (v('exceptions') >= 2 ? 1 : 0) +
    (v('auditability') >= 2 ? 1 : 0) +
    (v('economics') >= 2 ? 1 : 0);

  const humanPull =
    (v('repeatability') <= 1 ? 1 : 0) +
    (v('volume') <= 1 ? 1 : 0) +
    (v('judgement') <= 1 ? 1 : 0) +
    (v('empathy') <= 1 ? 1 : 0) +
    (v('economics') <= 1 ? 1 : 0);

  let allocation: Allocation;
  if (ceiling === 'human') {
    allocation = 'human';
  } else if (humanPull >= 4 && pull <= 3) {
    allocation = 'human';
    mark('economics', {
      en: 'Low repetition, low volume and heavy judgement: there is not enough recurring work here to justify designing an artificial occupant.',
      es: 'Poca repetición, poco volumen y mucho criterio: no hay suficiente trabajo recurrente para justificar diseñar un ocupante artificial.',
    });
  } else if (pull >= 6 && ceiling === 'artificial') {
    allocation = 'artificial';
    mark('repeatability', {
      en: 'Repetitive, predictable, high-volume and verifiable work with a low exception rate — the case where an artificial resource can hold role stewardship.',
      es: 'Trabajo repetitivo, predecible, de alto volumen y verificable, con baja tasa de excepciones — el caso donde un recurso artificial puede sostener role stewardship.',
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
      en: 'Every irreversible action needs an explicit approval gate and a named person who owns the kill switch.',
      es: 'Toda acción irreversible necesita un approval gate explícito y una persona con nombre que sea dueña del kill switch.',
    });
  }
  if (allocation !== 'human') {
    controls.push({
      en: 'Record the human baseline — quality, cycle time, cost, error rate, exception volume — before anything changes. Without it you cannot prove improvement or justify rollback.',
      es: 'Registrá el baseline humano — calidad, tiempo de ciclo, costo, tasa de error, volumen de excepciones — antes de cambiar nada. Sin él no podés demostrar mejora ni justificar rollback.',
    });
  }

  /* --- What would change the answer. */
  wouldChange.push({
    en: 'A rising Human Intervention Rate over the first weeks means the autonomy on paper is not real. Drop a rung and find out why.',
    es: 'Un Human Intervention Rate creciente en las primeras semanas significa que la autonomía del papel no es real. Bajá un peldaño y averiguá por qué.',
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
