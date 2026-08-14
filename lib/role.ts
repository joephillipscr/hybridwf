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
  en: 'In large organisations this can grow into a Director of Hybrid Workforce. It belongs inside HR / People & Workforce, with a strong matrix relationship to the COO and the CIO or CTO. Not every company needs to create the title tomorrow — but any organisation granting role stewardship to artificial resources needs someone exercising these functions.',
  es: 'En organizaciones grandes puede evolucionar a Director of Hybrid Workforce. Debe ubicarse dentro de RR. HH./People & Workforce, con relación matricial fuerte con el COO y el CIO/CTO. No toda empresa necesita crear el cargo mañana — pero cualquier organización que conceda role stewardship a recursos artificiales necesita que alguien ejerza estas funciones.',
};

export const RESPONSIBILITIES: T[] = [
  { en: 'Maintain human–AI operational harmony: eliminate contradictory ownership, define handoffs and escalation lines.', es: 'Armonía operacional humano-IA: eliminar ownership contradictorio, definir handoffs y líneas de escalamiento.' },
  { en: 'Periodically reassess which work should be Human, Artificial or Hybrid.', es: 'Evaluar periódicamente qué trabajo debe ser Human, Artificial o Hybrid.' },
  { en: 'Direct Human → Artificial and Artificial → Human transitions.', es: 'Dirigir transiciones Human → Artificial y Artificial → Human.' },
  { en: 'Design hybrid posts with an explicit split of responsibilities.', es: 'Diseñar puestos híbridos y reparto explícito de responsabilidades.' },
  { en: 'Manage human impact: clarity, communication, reassignment and development.', es: 'Administrar el impacto humano: claridad, comunicación, reasignación y desarrollo.' },
  { en: 'Guarantee every AI Employee has a Role Contract, manager, KPIs, permissions, limits, audit trail, performance review, and a kill switch exercised on a stated cadence (HWF-26).', es: 'Garantizar que todo AI Employee tenga Role Contract, manager, KPIs, permisos, límites, audit trail, performance review, y un kill switch ejercitado con cadencia declarada (HWF-26).' },
  { en: 'Coordinate with IT and Security on access, runtime, observability and incidents.', es: 'Coordinar con IT/Security para accesos, runtime, observabilidad e incidentes.' },
  { en: 'Stay neutral about resource type within the boundary of HWF-20: the goal is neither “use more AI” nor “protect posts” — it is to optimise the work inside the space that rights, dignity, safety and labour protections leave open.', es: 'Mantener neutralidad respecto al tipo de recurso dentro de la frontera de HWF-20: no tiene como meta «usar más IA» ni «proteger puestos»; tiene como meta optimizar el trabajo dentro del espacio que dejan abierto los derechos, la dignidad, la seguridad y las protecciones laborales.' },
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
  { name: 'AI Exception Rate', measures: { en: 'Escalated cases over processed cases — a health signal, never a target: what matters is not how many escalations, but whether they were the right ones.', es: 'Casos escalados sobre casos procesados — una señal de salud, nunca un objetivo: lo que importa no es cuántas escalaciones, sino si fueron las correctas.' } },
  { name: 'Human Intervention Rate', measures: { en: 'Executions requiring human correction. Rising means the autonomy on paper is not real; falling with a rising Missed Escalation Rate means the system learned to stop asking.', es: 'Ejecuciones que requieren corrección humana. Al alza significa que la autonomía del papel no es real; a la baja con un Missed Escalation Rate al alza significa que el sistema aprendió a dejar de preguntar.' }, ceo: true },
  { name: 'Missed Escalation Rate', measures: { en: 'Cases that should have escalated and did not, found in audit or after the harm. The dangerous direction.', es: 'Casos que debieron escalar y no lo hicieron, encontrados en auditoría o después del daño. La dirección peligrosa.' }, ceo: true },
  { name: 'Unnecessary Escalation Rate', measures: { en: 'Escalations a human resolved trivially — noise that erodes the reviewer’s attention. Appropriate escalation is the residue of these two.', es: 'Escalaciones que un humano resolvió trivialmente — ruido que erosiona la atención del revisor. La escalación apropiada es el residuo de estas dos.' } },
  { name: 'Correction Severity', measures: { en: 'When a human corrected, how bad was what they caught. Ties the review burden to what it actually prevents.', es: 'Cuando un humano corrigió, qué tan grave era lo atrapado. Ata la carga de revisión a lo que realmente previene.' } },
  { name: 'Human Review Burden by Risk Class', measures: { en: 'Review hours per risk class. Overload in Critical is the signature problem of HWF-23 taking shape.', es: 'Horas de revisión por clase de riesgo. La sobrecarga en Crítico es el problema de la firma de HWF-23 tomando forma.' } },
  { name: 'Unresolved High-Risk Exceptions', measures: { en: 'Ageing queue of High and Critical exceptions without resolution.', es: 'Cola envejecida de excepciones Altas y Críticas sin resolución.' } },
  { name: 'Harmful Outcome Severity', measures: { en: 'Severity-weighted harm that reached customers or workers.', es: 'Daño ponderado por severidad que llegó a clientes o trabajadores.' }, ceo: true },
  { name: 'Workforce Clarity Score', measures: { en: 'Clarity of roles, ownership and escalation.', es: 'Claridad de roles, ownership y escalamiento.' } },
  { name: 'Human Capacity Reallocation Rate', measures: { en: 'Released hours that moved to higher-value work over total released hours.', es: 'Horas liberadas que pasan a trabajo de mayor valor sobre horas liberadas.' } },
  { name: 'Hybrid Workforce Incident Rate', measures: { en: 'Incidents attributable to human/AI design.', es: 'Incidentes atribuibles a diseño humano/IA.' }, ceo: true },
  { name: 'Role Conflict Rate', measures: { en: 'Ownership conflicts per period.', es: 'Conflictos de ownership por período.' } },
  { name: 'AI Employee SLA Compliance', measures: { en: 'Compliance with the SLA of the artificial role.', es: 'Cumplimiento de SLA del rol artificial.' } },
  { name: 'Workforce ROI', measures: { en: '(Incremental value − workforce cost) / workforce cost.', es: '(Valor incremental − costo workforce) / costo workforce.' } },
];

export const DIRECTION_NOTE: T = {
  en: 'Escalation metrics are health signals, not targets. A system rewarded for fewer escalations learns silence — the exact failure HWF-09 exists to prevent — so escalation is judged by quality, never by volume: the pair that matters is missed versus unnecessary, appropriate escalation is the residue of the two, and no metric on this scorecard may carry an incentive toward silence.',
  es: 'Las métricas de escalación son señales de salud, no objetivos. Un sistema premiado por escalar menos aprende silencio — la falla exacta que HWF-09 existe para impedir — así que la escalación se juzga por calidad, nunca por volumen: el par que importa es perdidas versus innecesarias, la escalación apropiada es el residuo de las dos, y ninguna métrica de este scorecard puede cargar un incentivo hacia el silencio.',
};

export const CEO_NOTE: T = {
  en: 'Six of these carry the executive flag: whether the work functions better than before, what a correct result costs, how much autonomy is real, what should have escalated and did not, what harm got through, and what incidents the design produced. And the dashboard is not only this scorecard — it also shows what other clauses already generate: complaints and appeals from affected persons (HWF-25), residual risk against the declared class (HWF-22), drift since the last revalidation (HWF-27), and the labour consequences the impact assessments recorded (HWF-24). A dashboard showing only performance and cost is the one a CFO wants; this is the one a board needs.',
  es: 'Seis de estos llevan la bandera ejecutiva: si el trabajo funciona mejor que antes, cuánto cuesta un resultado correcto, cuánta autonomía es real, qué debió escalar y no escaló, qué daño pasó, y qué incidentes produjo el diseño. Y el dashboard no es solo este scorecard — también muestra lo que otras cláusulas ya generan: quejas y apelaciones de personas afectadas (HWF-25), riesgo residual contra la clase declarada (HWF-22), drift desde la última revalidación (HWF-27), y las consecuencias laborales que las evaluaciones de impacto registraron (HWF-24). Un dashboard que solo muestra performance y costo es el que quiere un CFO; este es el que necesita un board.',
};

export const CAPACITY_ELEVATION: { title: T; body: T } = {
  title: { en: 'Capacity Elevation Rate', es: 'Capacity Elevation Rate' },
  body: {
    en: 'The share of human capacity released by automation that moved to higher-value work. The metric exists to stop “productivity” from hiding what actually happened. Released hours can become analysis, service, innovation, leadership, elimination of waste — or a real headcount reduction. Those are different decisions and must be counted separately. Technology can free hours; it cannot decide what they are for.',
    es: 'La proporción de capacidad humana liberada por automatización que se trasladó a trabajo de mayor valor. La métrica existe para impedir que la palabra «productividad» esconda lo que realmente pasó. Las horas liberadas pueden convertirse en análisis, servicio, innovación, liderazgo, eliminación de desperdicio — o en una reducción real de headcount. Son decisiones distintas y deben contarse por separado. La tecnología puede liberar horas; no puede decidir para qué son.',
  },
};
