import type { T } from './i18n';

export interface Term {
  id: string;
  /** The canonical form in each language. Where the English term is used
   *  untranslated in Spanish practice, both fields carry the same string —
   *  that is a decision, not an oversight. */
  term: T;
  definition: T;
}

export const GLOSSARY_NOTE: T = {
  en: 'One term, two languages, one numbered definition. Where the English term is used untranslated in Spanish practice, both entries carry the same word — that is a deliberate decision to stop the vocabulary from splitting across the two editions of this standard.',
  es: 'Un término, dos idiomas, una definición numerada. Cuando el término inglés se usa sin traducir en la práctica en español, ambas entradas llevan la misma palabra — es una decisión deliberada para impedir que el vocabulario se fragmente entre las dos ediciones de este estándar.',
};

/** The rule that keeps a translated edition citable against the original. */
export const ACRONYM_RULE: T = {
  en: 'Acronyms do not translate. WRM, HWFS and the HWF- clause identifiers stay identical in every edition of this standard, present and future; only the words they expand to are localised. A reader who cites WRM or HWF-07 in any language is pointing at the same thing.',
  es: 'Los acrónimos no se traducen. WRM, HWFS y los identificadores de cláusula HWF- se mantienen idénticos en toda edición de este estándar, presente y futura; solo se localizan las palabras que expanden. Quien cite WRM o HWF-07 en cualquier idioma está señalando lo mismo.',
};

export const TERMS: Term[] = [
  {
    id: 'G-01',
    term: { en: 'AI Employee', es: 'AI Employee' },
    definition: {
      en: 'A persistent, role-bound software worker that autonomously executes recurring business responsibilities within explicit limits, with traceable identity, measurable performance, escalation paths and human accountability.',
      es: 'Trabajador de software persistente y ligado a un rol, que ejecuta de forma autónoma responsabilidades recurrentes dentro de límites explícitos, con identidad trazable, desempeño medible, rutas de escalamiento y accountability humano.',
    },
  },
  {
    id: 'G-02',
    term: { en: 'WRM — Work Resource Management', es: 'WRM — Administración de Recursos de Trabajo' },
    definition: {
      en: 'The discipline that designs, assigns, governs and optimises work regardless of whether the resource executing it is human, artificial or hybrid.',
      es: 'La disciplina que diseña, asigna, gobierna y optimiza el trabajo independientemente de si el recurso que lo ejecuta es humano, artificial o híbrido.',
    },
  },
  {
    id: 'G-03',
    term: { en: 'AI Role Contract', es: 'AI Role Contract' },
    definition: {
      en: 'The operational contract of an artificial post: mission, responsibilities, results, KPIs, authority, exclusions, tools, access, service level, escalation, suspension criteria and accountable owner. Versioned. The equivalent of a job description plus an explicit operating agreement — a prompt gives instructions, a role contract gives responsibility.',
      es: 'El contrato operacional de un puesto artificial: misión, responsabilidades, resultados, KPIs, autoridad, exclusiones, herramientas, accesos, nivel de servicio, escalamiento, criterios de suspensión y accountable owner. Versionado. Equivale a una descripción de puesto más un acuerdo explícito de operación — un prompt da instrucciones, un contrato de rol da responsabilidad.',
    },
  },
  {
    id: 'G-04',
    term: { en: 'Accountable owner', es: 'Accountable owner' },
    definition: {
      en: 'The single identified human, or human governance body, that answers for an AI Employee’s configuration, authority, performance and exceptions. Exactly one, even when the resource receives work from several areas and even when its day-to-day supervision has been delegated. Accountability is never delegable to an artificial resource, because answering for an outcome requires the capacity to bear a consequence.',
      es: 'El único humano identificado, o cuerpo humano de gobierno, que responde por la configuración, autoridad, desempeño y excepciones de un AI Employee. Exactamente uno, aunque el recurso reciba trabajo de varias áreas y aunque su supervisión cotidiana esté delegada. La accountability nunca es delegable a un recurso artificial, porque responder por un resultado exige capacidad de soportar una consecuencia.',
    },
  },
  {
    id: 'G-05',
    term: { en: 'Shadow mode', es: 'Shadow mode' },
    definition: {
      en: 'A stage in which the artificial resource executes the work but its actions do not affect the operation. Results are compared against a human baseline. The operational equivalent of probation.',
      es: 'Etapa en la que el recurso artificial ejecuta el trabajo pero sus acciones no afectan la operación. Los resultados se comparan contra un baseline humano. Equivalente operativo del periodo de prueba.',
    },
  },
  {
    id: 'G-06',
    term: { en: 'Context Provisioning', es: 'Context Provisioning' },
    definition: {
      en: 'The onboarding equivalent for an artificial resource. Divided into must know, may consult and must not access. The third category has two legitimate grounds: protecting the information from the resource, and protecting the resource’s judgement from the information (HWF-18); either way, the restriction is recorded, never silent.',
      es: 'El equivalente al onboarding para un recurso artificial. Se divide en debe saber, puede consultar y no debe acceder. La tercera categoría tiene dos fundamentos legítimos: proteger la información del recurso, y proteger el criterio del recurso de la información (HWF-18); en ambos casos la restricción queda registrada, nunca silenciosa.',
    },
  },
  {
    id: 'G-07',
    term: { en: 'Authority Matrix', es: 'Matriz de autoridad' },
    definition: {
      en: 'The record of what a resource may read, write, decide, spend, communicate or execute, and which of those require approval. Autonomy without an authority matrix is an empty word.',
      es: 'El registro de qué puede leer, escribir, decidir, gastar, comunicar o ejecutar un recurso, y cuáles de esas acciones requieren aprobación. La autonomía sin matriz de autoridad es una palabra vacía.',
    },
  },
  {
    id: 'G-08',
    term: { en: 'Escalation tree', es: 'Árbol de escalamiento' },
    definition: {
      en: 'The explicit mapping of exception type, risk and urgency to a destination — a person, a team or a fallback rule. Every exception needs a destination.',
      es: 'El mapeo explícito de tipo de excepción, riesgo y urgencia hacia un destino: una persona, un equipo o una regla de retorno. Toda excepción necesita un destino.',
    },
  },
  {
    id: 'G-09',
    term: { en: 'Governed memory', es: 'Memoria gobernada' },
    definition: {
      en: 'Memory with provenance, scope, retention and deletion rules, plus a named owner and an update mechanism. An undated policy produces answers that are consistent and wrong.',
      es: 'Memoria con procedencia, alcance, retención y reglas de borrado, además de un dueño con nombre y un mecanismo de actualización. Una política sin fecha produce respuestas consistentes y equivocadas.',
    },
  },
  {
    id: 'G-10',
    term: { en: 'Human Intervention Rate', es: 'Human Intervention Rate' },
    definition: {
      en: 'The proportion of cases or decisions requiring human correction. Reveals how much of the declared autonomy is real and how much is automation quietly propped up by people.',
      es: 'La proporción de casos o decisiones que requieren corrección humana. Revela cuánta de la autonomía declarada es real y cuánta es automatización sostenida en silencio por personas.',
    },
  },
  {
    id: 'G-11',
    term: { en: 'Cost per Successful Outcome', es: 'Cost per Successful Outcome' },
    definition: {
      en: 'Total cost of producing a correct, accepted result — including platform, integration, supervision, rework, incidents and residual human operation. Comparing a subscription against a salary is the wrong benchmark.',
      es: 'Costo total de producir un resultado correcto y aceptado — incluyendo plataforma, integración, supervisión, retrabajo, incidentes y operación humana residual. Comparar una suscripción contra un salario es el benchmark equivocado.',
    },
  },
  {
    id: 'G-12',
    term: { en: 'Post-Transition Performance Delta', es: 'Post-Transition Performance Delta' },
    definition: {
      en: 'The change in performance after switching resource or configuration. It does not ask whether the agent is fast; it asks whether the post got better. Without a baseline, an organisation can celebrate an improvement that never happened.',
      es: 'El cambio de desempeño después de cambiar el recurso o la configuración. No pregunta si el agente es rápido; pregunta si el puesto mejoró. Sin baseline, una organización puede celebrar una mejora que nunca ocurrió.',
    },
  },
  {
    id: 'G-13',
    term: { en: 'HWFS — Hybrid Workforce Fit Score', es: 'HWFS — Hybrid Workforce Fit Score' },
    definition: {
      en: 'A structured instrument for deciding whether a responsibility should be Human, Artificial or Hybrid. It returns an argument, not a number: an allocation, a risk class, a starting autonomy rung and the conditions that would change the answer.',
      es: 'Instrumento estructurado para decidir si una responsabilidad debe ser Humana, Artificial o Híbrida. Devuelve un argumento, no un número: una asignación, una clase de riesgo, un peldaño inicial de autonomía y las condiciones que cambiarían la respuesta.',
    },
  },
  {
    id: 'G-14',
    term: { en: 'Hybrid Workforce Manager', es: 'Gerente de Fuerza Laboral Híbrida' },
    definition: {
      en: 'The role accountable for ensuring each responsibility is executed by the configuration that produces the best result. Neutral by design: never measured by humans replaced or posts converted.',
      es: 'El rol responsable de asegurar que cada responsabilidad sea ejecutada por la configuración que produce el mejor resultado. Neutral por diseño: nunca se mide por humanos reemplazados ni puestos convertidos.',
    },
  },
  {
    id: 'G-15',
    term: { en: 'Capacity Elevation Rate', es: 'Capacity Elevation Rate' },
    definition: {
      en: 'The share of released human capacity that moved to higher-value work. Keeps “productivity” from hiding whether hours became analysis, service, innovation, eliminated waste — or a headcount reduction that should be named.',
      es: 'La proporción de capacidad humana liberada que se trasladó a trabajo de mayor valor. Evita que «productividad» esconda si las horas se convirtieron en análisis, servicio, innovación, desperdicio eliminado — o en una reducción de headcount que debe nombrarse.',
    },
  },
  {
    id: 'G-16',
    term: { en: 'Kill switch', es: 'Kill switch' },
    definition: {
      en: 'The technical and procedural ability to suspend an AI Employee immediately. A kill switch without a named owner is only a feature; the role contract must say who may use it and under what condition.',
      es: 'La capacidad técnica y de proceso de suspender un AI Employee de inmediato. Un kill switch sin responsable es apenas una función; el contrato de rol debe decir quién puede usarlo y bajo qué condición.',
    },
  },
  {
    id: 'G-17',
    term: { en: 'Least privilege / least authority', es: 'Least privilege / least authority' },
    definition: {
      en: 'Least privilege limits what a resource can access; least authority limits what it can decide or commit. They are separate controls and both are required.',
      es: 'Least privilege limita a qué puede acceder un recurso; least authority limita qué puede decidir o comprometer. Son controles distintos y ambos son necesarios.',
    },
  },
  {
    id: 'G-18',
    term: { en: 'Role stewardship vs task execution', es: 'Role stewardship vs. task execution' },
    definition: {
      en: '“Send these twenty follow-ups” is a task. “Manage commercial follow-up for this portfolio” is a role: prioritising, respecting constraints, keeping context, recognising exceptions and escalating. The move from one to the other is what justifies the category.',
      es: '«Enviá estos veinte seguimientos» es una tarea. «Administrá el seguimiento comercial de esta cartera» es un rol: priorizar, respetar restricciones, conservar contexto, reconocer excepciones y escalar. El paso de una a otro es lo que justifica la categoría.',
    },
  },
  {
    id: 'G-19',
    term: { en: 'Remediation plan', es: 'Plan de remediación' },
    definition: {
      en: 'The artificial equivalent of a performance improvement plan: reduce scope, increase approvals, correct configuration or context, and validate again before restoring authority.',
      es: 'El equivalente artificial de un plan de mejora: reducir scope, aumentar aprobaciones, corregir configuración o contexto, y validar nuevamente antes de restituir autoridad.',
    },
  },
  {
    id: 'G-20',
    term: { en: 'Fallback architecture', es: 'Arquitectura de fallback' },
    definition: {
      en: 'The succession plan for an artificial resource: an alternative model, agent or vendor, plus a replacement runbook. Reduces lock-in and makes retirement survivable.',
      es: 'El plan de sucesión de un recurso artificial: modelo, agente o vendor alternativo, más un runbook de reemplazo. Reduce lock-in y hace sobrevivible el retiro.',
    },
  },
  {
    id: 'G-21',
    term: { en: 'Offboarding / deprovisioning', es: 'Offboarding / deprovisioning' },
    definition: {
      en: 'Revoke credentials, disable tools, stop schedules and queues, rotate secrets, transfer outstanding work and context, preserve evidence. As important as onboarding and almost always skipped.',
      es: 'Revocar credenciales, deshabilitar herramientas, detener schedules y colas, rotar secretos, transferir trabajo pendiente y contexto, preservar evidencia. Tan importante como el onboarding y casi siempre omitido.',
    },
  },
  {
    id: 'G-22',
    term: { en: 'Time-to-autonomy', es: 'Time-to-autonomy' },
    definition: {
      en: 'Days from instantiation to reliable performance at the expected risk level. The artificial counterpart of time-to-productivity for a new hire.',
      es: 'Días desde la instanciación hasta el desempeño confiable en el nivel de riesgo esperado. La contraparte artificial del time-to-productivity de una nueva contratación.',
    },
  },
  {
    id: 'G-23',
    term: { en: 'Total Cost of AI Employment', es: 'Total Cost of AI Employment' },
    definition: {
      en: 'Models plus infrastructure plus integrations plus supervision plus error cost plus governance. The artificial analogue of total cost of employment, and the only honest basis for comparison.',
      es: 'Modelos más infraestructura más integraciones más supervisión más costo de errores más governance. El análogo artificial del costo total del empleado, y la única base honesta de comparación.',
    },
  },
  {
    id: 'G-24',
    term: { en: 'Management by exception', es: 'Management by exception' },
    definition: {
      en: 'The operating mode in which the resource resolves routine work inside its limits and the manager intervenes on deviations and exceptions. Rung 4 of the autonomy ladder.',
      es: 'El modo de operación en que el recurso resuelve la rutina dentro de sus límites y el manager interviene en desviaciones y excepciones. Peldaño 4 de la escalera de autonomía.',
    },
  },
  {
    id: 'G-26',
    term: { en: 'Supervisor', es: 'Supervisor' },
    definition: {
      en: 'Whoever directs an AI Employee’s work day to day: routing tasks, reviewing output, setting priorities and receiving exceptions. A supervisor may be human or artificial. Distinct from the accountable owner, which is always human — an AI Employee can supervise another and still answer to a person somewhere above it.',
      es: 'Quien dirige el trabajo cotidiano de un AI Employee: rutear tareas, revisar output, fijar prioridades y recibir excepciones. Un supervisor puede ser humano o artificial. Se distingue del accountable owner, que siempre es humano: un AI Employee puede supervisar a otro y aun así responder ante una persona en algún punto por encima.',
    },
  },
  {
    id: 'G-27',
    term: { en: 'Supervision chain', es: 'Cadena de supervisión' },
    definition: {
      en: 'The path from an AI Employee upward through each supervisor to the accountable human or governance body. Chains of any depth are permitted, but each must terminate in a human, be traversable and observable end to end, and allow the accountable party to intervene at any point without going through the chain itself. Depth is bounded by span of control rather than by a fixed number: scale may grow only against tooling that makes it governable.',
      es: 'El recorrido desde un AI Employee hacia arriba, a través de cada supervisor, hasta el humano o cuerpo de gobierno accountable. Se permiten cadenas de cualquier profundidad, pero cada una debe terminar en un humano, ser recorrible y observable de punta a punta, y permitir que quien responde intervenga en cualquier punto sin pasar por la cadena misma. La profundidad la acota el span of control y no un número fijo: la escala puede crecer solo contra tooling que la haga gobernable.',
    },
  },
  {
    id: 'G-28',
    term: { en: 'Role divergence', es: 'Divergencia de rol' },
    definition: {
      en: 'The gap between what an AI Employee actually produces and the mission, authority or KPIs its role contract states. Reported by the resource to its accountable owner as a finding, never as a request: the resource has no interests to advance, and the decision to revise the contract stays with the human. Divergence is the signal that a contract has aged, not evidence that the resource deserves more.',
      es: 'La brecha entre lo que un AI Employee realmente produce y la misión, autoridad o KPIs que declara su contrato de rol. El recurso la reporta a su accountable owner como hallazgo, nunca como solicitud: el recurso no tiene intereses que defender, y la decisión de revisar el contrato queda en el humano. La divergencia es la señal de que un contrato envejeció, no la prueba de que el recurso merece más.',
    },
  },
  {
    id: 'G-29',
    term: { en: 'Decision determinants', es: 'Determinantes de la decisión' },
    definition: {
      en: 'The state that produced a particular action: the policy in force, the knowledge retrieved and its provenance, the tool results returned, the authority in effect, and the versions of model and configuration running at that moment. Distinct from the outcome, which says what happened, and from a reasoning trace, which says what the system reports having thought. Determinants are what allow a failure to be attributed to a cause rather than merely recorded.',
      es: 'El estado que produjo una acción concreta: la política vigente, el conocimiento recuperado y su procedencia, los resultados que devolvieron las herramientas, la autoridad en efecto, y las versiones de modelo y configuración corriendo en ese momento. Se distingue del resultado, que dice qué pasó, y de una traza de razonamiento, que dice qué reporta el sistema haber pensado. Los determinantes son lo que permite atribuir una falla a una causa en vez de solo registrarla.',
    },
  },
  {
    id: 'G-30',
    term: { en: 'Simulated interiority', es: 'Interioridad simulada' },
    definition: {
      en: 'Behaviour whose function is to make a person believe an artificial resource undergoes an inner life, when nothing warrants the attribution: injected latency and typing indicators that stand in for thinking, verbal hesitation, or claims of feeling and care. Distinct from clear and courteous communication, which is competence. The test is purpose rather than surface: whether the behaviour exists to suggest a mind with something at stake. Prohibited by HWF-10 even where the system has disclosed that it is software.',
      es: 'Conducta cuya función es hacer creer a una persona que un recurso artificial atraviesa una vida interior, cuando nada garantiza la atribución: latencia inyectada e indicadores de tipeo que hacen de pensamiento, vacilación verbal, o declaraciones de sentimiento y cuidado. Se distingue de la comunicación clara y cortés, que es competencia. La prueba es el propósito y no la superficie: si la conducta existe para sugerir una mente con algo en juego. Prohibida por HWF-10 incluso cuando el sistema haya declarado que es software.',
    },
  },
  {
    id: 'G-31',
    term: { en: 'Deliberate opacity', es: 'Opacidad deliberada' },
    definition: {
      en: 'A recorded design decision to withhold context from an artificial resource, either to protect the information from the resource or to protect the resource\u2019s judgement from the information: anchoring, confirmation bias, operational overload. It differs from an omission by exactly one property \u2014 it is written in the role contract, versioned and available to the audit. An unrecorded restriction is not opacity but a gap, and responsibility for whatever it degrades lies with whoever withheld the context (HWF-18).',
      es: 'Una decisi\u00f3n de dise\u00f1o registrada de retenerle contexto a un recurso artificial, sea para proteger la informaci\u00f3n del recurso o para proteger el criterio del recurso de la informaci\u00f3n: anclaje, sesgo de confirmaci\u00f3n, sobrecarga operativa. Se distingue de una omisi\u00f3n por exactamente una propiedad \u2014 est\u00e1 escrita en el contrato de rol, versionada y disponible para la auditor\u00eda. Una restricci\u00f3n sin registro no es opacidad sino un hueco, y la responsabilidad por lo que degrade recae en quien retuvo el contexto (HWF-18).',
    },
  },
  {
    id: 'G-32',
    term: { en: 'Digital zombie', es: 'Zombi digital' },
    definition: {
      en: 'An AI Employee whose post has lost its justification but which keeps operating with credentials, data access and standing authority intact. It is what accumulates when nothing forces the existence question: the mechanisms that prune pointless human posts — payroll and attrition — do not apply to a resource that costs little and never resigns. Prevented by the re-justification cadence of HWF-19; dismantled through lifecycle retirement, with offboarding and revocation.',
      es: 'Un AI Employee cuyo puesto perdió su justificación pero que sigue operando con credenciales, accesos a datos y autoridad vigente intactos. Es lo que se acumula cuando nada fuerza la pregunta de existencia: los mecanismos que podan los puestos humanos sin sentido — payroll y attrition — no aplican a un recurso que cuesta poco y no renuncia jamás. Se previene con la cadencia de re-justificación de HWF-19; se desmonta con el retiro del lifecycle, con offboarding y revocación.',
    },
  },
  {
    id: 'G-33',
    term: { en: 'Resource neutrality', es: 'Neutralidad de recurso' },
    definition: {
      en: 'The allocation discipline of deciding who fills a post — human, artificial or hybrid — without a prior preference for either, judging only fit, outcome, cost, risk and control. It is a discipline, not a moral stance, and it is bounded: neutrality begins only after the constraints of HWF-20 — rights, dignity, safety, meaningful human agency, accessibility, labour protections — are satisfied. Cited without its boundary, the term is being misused.',
      es: 'La disciplina de asignación que decide quién ocupa un puesto — humano, artificial o híbrido — sin preferencia previa por ninguno, juzgando solo fit, resultado, costo, riesgo y control. Es una disciplina, no una postura moral, y está acotada: la neutralidad comienza solo después de satisfechas las restricciones de HWF-20 — derechos, dignidad, seguridad, agencia humana significativa, accesibilidad, protecciones laborales. Citado sin su frontera, el término está siendo mal usado.',
    },
  },
  {
    id: 'G-25',
    term: { en: 'Hybrid post', es: 'Puesto híbrido' },
    definition: {
      en: 'A post whose responsibilities are split explicitly between a human and an artificial resource, with defined handoffs, context transfer and a single owner of the overall result. Badly designed, it produces two occupants each waiting for the other to answer.',
      es: 'Puesto cuyas responsabilidades se reparten explícitamente entre un recurso humano y uno artificial, con handoffs definidos, transferencia de contexto y un único dueño del resultado completo. Mal diseñado, produce dos ocupantes esperando que responda el otro.',
    },
  },
];
