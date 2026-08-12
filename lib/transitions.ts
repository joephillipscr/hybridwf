import type { T } from './i18n';

export const FORWARD_INTRO: T = {
  en: 'The objective is not to “replace a person”. It is to transfer responsibility in a controlled way after demonstrating that the new design produces results equal to or better than the old one, within permitted risk.',
  es: 'El objetivo no es «sustituir a una persona». Es transferir responsabilidad de forma controlada después de demostrar que el nuevo diseño produce resultados iguales o mejores dentro del riesgo permitido.',
};

export const FORWARD_RULE: T = {
  en: 'You do not substitute first and find out afterwards whether it was working. The transition is earned with evidence.',
  es: 'No se sustituye primero y se descubre después si funcionaba. La transición se gana con evidencia.',
};

export interface Step {
  n: number;
  name: T;
  control: T;
}

export const FORWARD: Step[] = [
  { n: 1, name: { en: 'Baseline', es: 'Baseline' }, control: { en: 'Document current performance: quality, cost, time, errors, exceptions and tacit knowledge.', es: 'Documentar el desempeño actual: calidad, costo, tiempo, errores, excepciones y conocimiento tácito.' } },
  { n: 2, name: { en: 'Decomposition', es: 'Descomposición' }, control: { en: 'Split the post into responsibilities and tasks; identify what must stay human.', es: 'Separar el puesto en responsabilidades y tareas; identificar qué debe seguir siendo humano.' } },
  { n: 3, name: { en: 'Risk mapping', es: 'Risk mapping' }, control: { en: 'Classify decisions, data, authority and cost of error.', es: 'Clasificar decisiones, datos, autoridad y costo del error.' } },
  { n: 4, name: { en: 'AI Role Contract', es: 'Role Contract AI' }, control: { en: 'Create job description, KPIs, limits, tools, manager and escalation.', es: 'Crear job description, KPIs, límites, herramientas, manager y escalamiento.' } },
  { n: 5, name: { en: 'Knowledge transfer', es: 'Knowledge transfer' }, control: { en: 'SOPs, examples, criteria, policies, exceptions and history.', es: 'SOPs, ejemplos, criterios, políticas, excepciones e historial.' } },
  { n: 6, name: { en: 'Shadow mode', es: 'Shadow mode' }, control: { en: 'The AI Employee executes without affecting production; results are compared against the human.', es: 'El AI Employee ejecuta sin afectar producción; se compara contra el humano.' } },
  { n: 7, name: { en: 'Controlled production', es: 'Producción controlada' }, control: { en: 'Limited authority and frequent approvals.', es: 'Autoridad limitada y aprobaciones frecuentes.' } },
  { n: 8, name: { en: 'Performance gate', es: 'Performance gate' }, control: { en: 'Ownership is not transferred until quality, cost and risk thresholds are met.', es: 'No se transfiere ownership hasta alcanzar umbrales de calidad, costo y riesgo.' } },
  { n: 9, name: { en: 'Gradual transfer', es: 'Transferencia gradual' }, control: { en: 'Increase scope and autonomy; keep reversibility.', es: 'Aumentar scope y autonomía; mantener reversibilidad.' } },
  { n: 10, name: { en: 'Human reallocation', es: 'Reasignación humana' }, control: { en: 'Move released human capacity toward higher-value work where that makes sense.', es: 'Mover capacidad humana liberada hacia trabajo de mayor valor cuando tenga sentido.' } },
  { n: 11, name: { en: 'Formal handoff', es: 'Handoff formal' }, control: { en: 'Update org chart, RACI/ownership, access and communication.', es: 'Actualizar organigrama, RACI/ownership, accesos y comunicación.' } },
  { n: 12, name: { en: 'Post-transition review', es: 'Revisión post-transición' }, control: { en: 'Review at 30/60/90 days and revert if performance deteriorates.', es: 'Revisar a 30/60/90 días y revertir si el desempeño se deteriora.' } },
];

export const BACK_INTRO: T = {
  en: 'The framework must be reversible. If the artificial resource produces too much risk, low quality, excessive human intervention, rising cost or relational damage, the work should return partly or entirely to human hands. A mature hybrid organisation does not measure success by the direction of the transition. It measures it by the quality of its architecture.',
  es: 'El framework debe ser reversible. Si el recurso artificial produce demasiado riesgo, baja calidad, exceso de intervención humana, costo creciente o deterioro relacional, el trabajo debe regresar parcial o totalmente a manos humanas. Una organización híbrida madura no mide el éxito por la dirección de la transición. Lo mide por la calidad de su arquitectura.',
};

export const BACK: T[] = [
  { en: 'Activate the rollback criterion by KPI or incident.', es: 'Activar criterio de rollback por KPI o incidente.' },
  { en: 'Freeze or reduce the AI Employee’s authority.', es: 'Congelar o reducir la autoridad del AI Employee.' },
  { en: 'Transfer context, useful memory and backlog to the human.', es: 'Transferir contexto, memoria útil y backlog al humano.' },
  { en: 'Reassign ownership and escalation channels.', es: 'Reasignar ownership y canales de escalamiento.' },
  { en: 'Revoke artificial access that no longer corresponds.', es: 'Revocar accesos artificiales que ya no correspondan.' },
  { en: 'Run root-cause analysis: model, process, knowledge, tools or bad role allocation.', es: 'Ejecutar root-cause analysis: modelo, proceso, conocimiento, herramientas o mala asignación del rol.' },
  { en: 'Decide whether the future of the post is Human or Hybrid — do not assume it must return to being fully human.', es: 'Decidir si el futuro del puesto es Human o Hybrid, no asumir que debe volver a ser 100% humano.' },
];

export const BACK_NOTE: T = {
  en: 'Define the return conditions before the pilot, not after the results are known. What error rate is unacceptable? How much human intervention destroys the economics? Which incident forces suspension? Written in advance, these rules reduce the bias of defending an implementation out of pride.',
  es: 'Definí las condiciones de regreso antes del piloto, no después de conocer los resultados. ¿Qué tasa de error es inaceptable? ¿Cuánta intervención humana destruye la economía? ¿Qué incidente obliga a suspender? Escritas de antemano, estas reglas reducen el sesgo de defender una implementación por orgullo.',
};
