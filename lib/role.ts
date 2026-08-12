import type { T } from './i18n';

export const ROLE_NAME: T = {
  en: 'Hybrid Workforce Manager',
  es: 'Gerente de Fuerza Laboral Híbrida',
};

export const MISSION: T = {
  en: 'Design, balance and optimise the human and artificial workforce, ensuring every responsibility is executed by the resource — human, artificial or hybrid — that produces the best result at the right level of cost, risk, quality and accountability.',
  es: 'Diseñar, equilibrar y optimizar la fuerza laboral humana y artificial, asegurando que cada responsabilidad sea ejecutada por el recurso — humano, artificial o híbrido — que genere el mejor resultado con el nivel adecuado de costo, riesgo, calidad y accountability.',
};

export const PLACEMENT: T = {
  en: 'In large organisations this can grow into a Director of Hybrid Workforce. It belongs inside HR / People & Workforce, with a strong matrix relationship to the COO and the CIO or CTO. Not every company needs to create the title tomorrow — but any organisation granting role ownership to artificial resources needs someone exercising these functions.',
  es: 'En organizaciones grandes puede evolucionar a Director of Hybrid Workforce. Debe ubicarse dentro de RR. HH./People & Workforce, con relación matricial fuerte con el COO y el CIO/CTO. No toda empresa necesita crear el cargo mañana — pero cualquier organización que conceda role ownership a recursos artificiales necesita que alguien ejerza estas funciones.',
};

export const RESPONSIBILITIES: T[] = [
  { en: 'Maintain human–AI operational harmony: eliminate contradictory ownership, define handoffs and escalation lines.', es: 'Armonía operacional humano-IA: eliminar ownership contradictorio, definir handoffs y líneas de escalamiento.' },
  { en: 'Periodically reassess which work should be Human, Artificial or Hybrid.', es: 'Evaluar periódicamente qué trabajo debe ser Human, Artificial o Hybrid.' },
  { en: 'Direct Human → Artificial and Artificial → Human transitions.', es: 'Dirigir transiciones Human → Artificial y Artificial → Human.' },
  { en: 'Design hybrid posts with an explicit split of responsibilities.', es: 'Diseñar puestos híbridos y reparto explícito de responsabilidades.' },
  { en: 'Manage human impact: clarity, communication, reassignment and development.', es: 'Administrar el impacto humano: claridad, comunicación, reasignación y desarrollo.' },
  { en: 'Guarantee every AI Employee has a Role Contract, manager, KPIs, permissions, limits, audit trail, performance review and kill switch.', es: 'Garantizar que todo AI Employee tenga Role Contract, manager, KPIs, permisos, límites, audit trail, performance review y kill switch.' },
  { en: 'Coordinate with IT and Security on access, runtime, observability and incidents.', es: 'Coordinar con IT/Security para accesos, runtime, observabilidad e incidentes.' },
  { en: 'Stay neutral about resource type: the goal is neither “use more AI” nor “protect posts” — it is to optimise the work.', es: 'Mantener neutralidad respecto al tipo de recurso: no tiene como meta «usar más IA» ni «proteger puestos»; tiene como meta optimizar el trabajo.' },
  { en: 'Report to leadership on cost per outcome, quality, risk, capacity released and workforce performance.', es: 'Reportar al liderazgo costo por outcome, calidad, riesgo, capacidad liberada y performance del workforce.' },
  { en: 'Maintain the official inventory of posts, human and artificial actors, and their maturity state.', es: 'Mantener el inventario oficial de puestos, actores humanos/artificiales y su estado de madurez.' },
];

export const ANTI_KPI: T = {
  en: 'Never measure this role by the number of humans replaced or the percentage of posts converted to AI. Those KPIs create a perverse incentive: they reward conversion rather than results, and they guarantee that the person meant to protect the quality of the decision is paid to prejudge it.',
  es: 'Nunca medir este rol por número de humanos reemplazados ni por porcentaje de puestos convertidos a IA. Esos KPIs crean un incentivo perverso: premian la conversión en vez del resultado, y garantizan que la persona encargada de proteger la calidad de la decisión cobre por prejuzgarla.',
};

/* --- Scorecard ------------------------------------------------------ */

export interface Kpi {
  name: string;
  measures: T;
  ceo?: boolean;
}

export const KPIS: Kpi[] = [
  { name: 'Workforce Performance Index', measures: { en: 'Overall workforce result against objectives.', es: 'Resultado global del workforce vs. objetivos.' } },
  { name: 'Role Allocation Accuracy', measures: { en: 'Share of roles whose Human/AI/Hybrid allocation survives review.', es: '% de roles cuya asignación Human/AI/Hybrid se mantiene válida tras revisión.' } },
  { name: 'Transition Success Rate', measures: { en: 'Transitions meeting their success criteria over total attempted.', es: 'Transiciones que alcanzan criterios de éxito sobre el total.' } },
  { name: 'Time to Stable Performance', measures: { en: 'Days until KPIs and expected risk level are reached.', es: 'Días hasta alcanzar KPIs y nivel de riesgo esperado.' } },
  { name: 'Post-Transition Performance Delta', measures: { en: 'Change in performance after the transition. Does the work function better than before?', es: 'Cambio de performance después de la transición. ¿El trabajo funciona mejor que antes?' }, ceo: true },
  { name: 'Cost per Successful Outcome', measures: { en: 'Total cost divided by correct, accepted results — supervision and rework included.', es: 'Costo total dividido por resultados correctos y aceptados — supervisión y retrabajo incluidos.' }, ceo: true },
  { name: 'Quality Delta', measures: { en: 'Change in quality before versus after the transition.', es: 'Cambio de calidad pre vs. post transición.' } },
  { name: 'AI Exception Rate', measures: { en: 'Escalated cases over processed cases.', es: 'Casos escalados sobre casos procesados.' } },
  { name: 'Human Intervention Rate', measures: { en: 'Executions requiring human correction. How much autonomy is real and how much is automation propped up by people.', es: 'Ejecuciones que requieren corrección humana. Cuánta autonomía es real y cuánta es automatización sostenida por personas.' }, ceo: true },
  { name: 'Workforce Clarity Score', measures: { en: 'Clarity of roles, ownership and escalation.', es: 'Claridad de roles, ownership y escalamiento.' } },
  { name: 'Human Capacity Reallocation Rate', measures: { en: 'Released hours that moved to higher-value work over total released hours.', es: 'Horas liberadas que pasan a trabajo de mayor valor sobre horas liberadas.' } },
  { name: 'Hybrid Workforce Incident Rate', measures: { en: 'Incidents attributable to human/AI design.', es: 'Incidentes atribuibles a diseño humano/IA.' } },
  { name: 'Role Conflict Rate', measures: { en: 'Ownership conflicts per period.', es: 'Conflictos de ownership por período.' } },
  { name: 'AI Employee SLA Compliance', measures: { en: 'Compliance with the SLA of the artificial role.', es: 'Cumplimiento de SLA del rol artificial.' } },
  { name: 'Workforce ROI', measures: { en: '(Incremental value − workforce cost) / workforce cost.', es: '(Valor incremental − costo workforce) / costo workforce.' } },
];

export const CEO_NOTE: T = {
  en: 'Three of these belong on an executive dashboard and the rest do not. Does the work function better than before, what does a correct result cost, and how much human help is still holding it up.',
  es: 'Tres de estos pertenecen a un dashboard ejecutivo y el resto no. Si el trabajo funciona mejor que antes, cuánto cuesta un resultado correcto, y cuánta ayuda humana lo sigue sosteniendo.',
};

export const CAPACITY_ELEVATION: { title: T; body: T } = {
  title: { en: 'Capacity Elevation Rate', es: 'Capacity Elevation Rate' },
  body: {
    en: 'The share of human capacity released by automation that moved to higher-value work. The metric exists to stop “productivity” from hiding what actually happened. Released hours can become analysis, service, innovation, leadership, elimination of waste — or a real headcount reduction. Those are different decisions and must be counted separately. Technology can free hours; it cannot decide what they are for.',
    es: 'La proporción de capacidad humana liberada por automatización que se trasladó a trabajo de mayor valor. La métrica existe para impedir que la palabra «productividad» esconda lo que realmente pasó. Las horas liberadas pueden convertirse en análisis, servicio, innovación, liderazgo, eliminación de desperdicio — o en una reducción real de headcount. Son decisiones distintas y deben contarse por separado. La tecnología puede liberar horas; no puede decidir para qué son.',
  },
};
