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
  en: 'Acronyms do not translate. WRM, HWFA and the HWF- clause identifiers stay identical in every edition of this standard, present and future; only the words they expand to are localised. A reader who cites WRM or HWF-44 in any language is pointing at the same thing.',
  es: 'Los acrónimos no se traducen. WRM, HWFA y los identificadores de cláusula HWF- se mantienen idénticos en toda edición de este estándar, presente y futura; solo se localizan las palabras que expanden. Quien cite WRM o HWF-44 en cualquier idioma está señalando lo mismo.',
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
      en: 'The operational contract of an artificial post: mission, responsibilities, results, KPIs, authority, exclusions, tools, access, service level, escalation, suspension criteria, governance calendar and accountable owner. Versioned. The equivalent of a job description plus an explicit operating agreement — a prompt gives instructions, a role contract gives responsibility.',
      es: 'El contrato operacional de un puesto artificial: misión, responsabilidades, resultados, KPIs, autoridad, exclusiones, herramientas, accesos, nivel de servicio, escalamiento, criterios de suspensión, calendario de gobernanza y accountable owner. Versionado. Equivale a una descripción de puesto más un acuerdo explícito de operación — un prompt da instrucciones, un contrato de rol da responsabilidad.',
    },
  },
  {
    id: 'G-04',
    term: { en: 'Accountable owner', es: 'Accountable owner' },
    definition: {
      en: 'The single identified human, or human governance body, that answers for an AI Employee’s configuration, authority, performance and exceptions. Exactly one, even when the resource receives work from several areas and even when its day-to-day supervision has been delegated. Accountability is never delegable to an artificial resource, because answering for an outcome requires the capacity to bear a consequence. Primary, not exclusive: system, data, security, compliance, vendor and director obligations survive intact (HWF-21). A governance body qualifies as owner only with an identified chair, stated decision rules and emergency capacity.',
      es: 'El único humano identificado, o cuerpo humano de gobierno, que responde por la configuración, autoridad, desempeño y excepciones de un AI Employee. Exactamente uno, aunque el recurso reciba trabajo de varias áreas y aunque su supervisión cotidiana esté delegada. La accountability nunca es delegable a un recurso artificial, porque responder por un resultado exige capacidad de soportar una consecuencia. Primario, no exclusivo: las obligaciones de sistema, datos, seguridad, compliance, proveedor y directores sobreviven intactas (HWF-21). Un cuerpo de gobierno califica como owner solo con presidente identificado, reglas de decisión declaradas y capacidad de emergencia.',
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
      en: 'The onboarding equivalent for an artificial resource. Divided into must know, may consult and must not access. The third category has two legitimate grounds: protecting the information from the resource, and protecting the decision from the information (HWF-35); either way, the restriction is recorded, never silent.',
      es: 'El equivalente al onboarding para un recurso artificial. Se divide en debe saber, puede consultar y no debe acceder. La tercera categoría tiene dos fundamentos legítimos: proteger la información del recurso, y proteger la decisión de la información (HWF-35); en ambos casos la restricción queda registrada, nunca silenciosa.',
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
    term: { en: 'HWFA — Hybrid Workforce Fit Assessment', es: 'HWFA — Hybrid Workforce Fit Assessment' },
    definition: {
      en: 'A structured instrument in three stages — eligibility, risk, economics — for deciding whether a responsibility should be Human, Deterministic automation, Artificial or Hybrid. It returns an argument, not a number: an allocation, a risk class, a starting autonomy rung and the conditions that would change the answer. Formerly the Fit Score; renamed because an instrument that refuses to produce a number should not be called one.',
      es: 'Instrumento estructurado en tres etapas — elegibilidad, riesgo, economía — para decidir si una responsabilidad debe ser Humana, Automatización determinista, Artificial o Híbrida. Devuelve un argumento, no un número: una asignación, una clase de riesgo, un peldaño inicial de autonomía y las condiciones que cambiarían la respuesta. Antes Fit Score; renombrado porque un instrumento que se niega a producir un número no debería llamarse así.',
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
      es: '«Envía estos veinte seguimientos» es una tarea. «Administra el seguimiento comercial de esta cartera» es un rol: priorizar, respetar restricciones, conservar contexto, reconocer excepciones y escalar. El paso de una a otro es lo que justifica la categoría.',
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
    id: 'G-25',
    term: { en: 'Hybrid post', es: 'Puesto híbrido' },
    definition: {
      en: 'A post whose responsibilities are split explicitly between a human and an artificial resource, with defined handoffs, context transfer and a single owner of the overall result. Badly designed, it produces two occupants each waiting for the other to answer.',
      es: 'Puesto cuyas responsabilidades se reparten explícitamente entre un recurso humano y uno artificial, con handoffs definidos, transferencia de contexto y un único dueño del resultado completo. Mal diseñado, produce dos ocupantes esperando que responda el otro.',
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
      en: 'Behaviour whose result is that a person believes an artificial resource undergoes an inner life, when nothing warrants the attribution: injected latency and typing indicators that stand in for thinking, verbal hesitation, or claims of feeling and care. Distinct from clear and courteous communication, which is competence. The tests are HWF-14’s two verifiable standards — whether a reasonable person, knowing what was disclosed, would form a false belief from the signal, and whether recorded optimisation objectives targeted emotional dependency or vulnerability. Prohibited even where the system has disclosed that it is software.',
      es: 'Conducta cuyo resultado es que una persona crea que un recurso artificial atraviesa una vida interior, cuando nada garantiza la atribución: latencia inyectada e indicadores de tipeo que hacen de pensamiento, vacilación verbal, o declaraciones de sentimiento y cuidado. Se distingue de la comunicación clara y cortés, que es competencia. Las pruebas son los dos estándares verificables de HWF-14 — si una persona razonable, sabiendo lo divulgado, formaría una creencia falsa a partir de la señal, y si los objetivos registrados de optimización apuntaron a la dependencia emocional o la vulnerabilidad. Prohibida incluso cuando el sistema haya declarado que es software.',
    },
  },
  {
    id: 'G-31',
    term: { en: 'Context boundary record', es: 'Registro de frontera de contexto' },
    definition: {
      en: 'The recorded artifact behind every context restriction (HWF-35): what is withheld from an artificial resource, on which of the two legitimate grounds — protecting the information, or preventing measurable degradation of the decision through anchoring, contamination or saturation — decided by whom, and versioned like any other authority. It differs from an omission by exactly one property: it is written. An unrecorded restriction is a gap, and responsibility for whatever it degrades lies with whoever withheld the context.',
      es: 'El artefacto registrado detrás de toda restricción de contexto (HWF-35): qué se le retiene a un recurso artificial, bajo cuál de los dos fundamentos legítimos — proteger la información, o prevenir la degradación medible de la decisión por anclaje, contaminación o saturación — decidido por quién, y versionado como cualquier otra autoridad. Se distingue de una omisión por exactamente una propiedad: está escrito. Una restricción sin registro es un hueco, y la responsabilidad por lo que degrade recae en quien retuvo el contexto.',
    },
  },
  {
    id: 'G-32',
    term: { en: 'Digital zombie', es: 'Zombi digital' },
    definition: {
      en: 'An AI Employee whose post has lost its justification but which keeps operating with credentials, data access and standing authority intact. It is what accumulates when nothing forces the existence question: even the weak triggers that sometimes prune human posts — a salary line under budget review, a resignation forcing a backfill decision — do not exist for a resource that costs little and never resigns. Prevented by the re-justification cadence of HWF-63; dismantled through lifecycle retirement, with offboarding and revocation.',
      es: 'Un AI Employee cuyo puesto perdió su justificación pero que sigue operando con credenciales, accesos a datos y autoridad vigente intactos. Es lo que se acumula cuando nada fuerza la pregunta de existencia: hasta los disparadores débiles que a veces podan puestos humanos — una línea de salario bajo revisión de presupuesto, una renuncia que fuerza la decisión de reemplazo — no existen para un recurso que cuesta poco y no renuncia jamás. Se previene con la cadencia de re-justificación de HWF-63; se desmonta con el retiro del lifecycle, con offboarding y revocación.',
    },
  },
  {
    id: 'G-33',
    term: { en: 'Resource neutrality', es: 'Neutralidad de recurso' },
    definition: {
      en: 'The allocation discipline of deciding who fills a post — human, artificial or hybrid — without a prior preference for either, judging only fit, outcome, cost, risk and control. It is a discipline, not a moral stance, and it is bounded: neutrality begins only after the constraints of HWF-01 — rights, dignity, safety, meaningful human agency, accessibility, labour protections — are satisfied. Cited without its boundary, the term is being misused.',
      es: 'La disciplina de asignación que decide quién ocupa un puesto — humano, artificial o híbrido — sin preferencia previa por ninguno, juzgando solo fit, resultado, costo, riesgo y control. Es una disciplina, no una postura moral, y está acotada: la neutralidad comienza solo después de satisfechas las restricciones de HWF-01 — derechos, dignidad, seguridad, agencia humana significativa, accesibilidad, protecciones laborales. Citado sin su frontera, el término está siendo mal usado.',
    },
  },
  {
    id: 'G-34',
    term: { en: 'Unit of conformance', es: 'Unidad de conformidad' },
    definition: {
      en: 'The thing a conformance claim can be about: one deployment — one role, one role-contract version, one accountable owner, one assessment period with an expiry. Products, platforms, models and organisations in the abstract cannot conform, whatever their marketing says; a vendor may only claim that it enables conformant deployments (HWF-71).',
      es: 'Aquello sobre lo que puede tratar una declaración de conformidad: un deployment — un rol, una versión de contrato de rol, un accountable owner, un periodo de evaluación con expiración. Productos, plataformas, modelos y organizaciones en abstracto no pueden conformar, diga lo que diga su marketing; un proveedor solo puede declarar que habilita deployments conformes (HWF-71).',
    },
  },
  {
    id: 'G-35',
    term: { en: 'Risk class', es: 'Clase de riesgo' },
    definition: {
      en: 'One of five tiers — Prohibited, Critical, High, Moderate, Low — assigned to an AI Employee post by judging inherent risk across seven factors, before controls. Controls lower residual risk, never the class (HWF-51). Declared in every conformance claim (HWF-71); from Critical upward every action terminates in a final human decision, and a Prohibited use has no conformant configuration at all.',
      es: 'Uno de cinco niveles — Prohibido, Crítico, Alto, Moderado, Bajo — asignado a un puesto de AI Employee juzgando el riesgo inherente a través de siete factores, antes de los controles. Los controles bajan el riesgo residual, nunca la clase (HWF-51). Se declara en toda declaración de conformidad (HWF-71); de Crítico hacia arriba toda acción termina en una decisión humana final, y un uso Prohibido no tiene configuración conforme alguna.',
    },
  },
  {
    id: 'G-36',
    term: { en: 'Reserved decision', es: 'Decisión reservada' },
    definition: {
      en: 'A decision subject an artificial resource may never take alone, whatever the post’s assessed risk class: material effects on employment, health and safety, credit and essential services, legal rights, use of force, or vulnerable people (HWF-02). The resource may analyse, draft and recommend; a human decides — and only counts as deciding while able to restate the case and decide otherwise. Approval at a throughput that forecloses understanding is a signature, not a decision.',
      es: 'Un asunto de decisión que un recurso artificial nunca puede tomar solo, sin importar la clase de riesgo evaluada del puesto: efectos materiales sobre empleo, salud y seguridad, crédito y servicios esenciales, derechos legales, uso de la fuerza o personas vulnerables (HWF-02). El recurso puede analizar, redactar y recomendar; un humano decide — y solo cuenta como decidir mientras pueda reformular el caso y decidir distinto. Aprobar a un ritmo que impide entender es una firma, no una decisión.',
    },
  },
  {
    id: 'G-37',
    term: { en: 'Human impact assessment', es: 'Evaluación de impacto humano' },
    definition: {
      en: 'The recorded assessment HWF-03 requires before any material transformation of a post: who is affected; changes to work, autonomy and surveillance; deskilling; exception load; discrimination and accessibility; displacement and headcount; training and reassignment; effects on customers and third parties. Completed, informed and consulted before the transition begins — not after. It is not obliged to be favourable; it is obliged to be honest. Distinct from the risk-class impact assessment of HWF-51, which protects the operation: this one protects the people.',
      es: 'La evaluación registrada que HWF-03 exige antes de cualquier transformación material de un puesto: a quiénes afecta; cambios en trabajo, autonomía y vigilancia; deskilling; carga de excepciones; discriminación y accesibilidad; desplazamiento y reducción de personal; capacitación y reasignación; efectos sobre clientes y terceros. Completada, informada y consultada antes de que la transición comience — no después. No está obligada a ser favorable; está obligada a ser honesta. Distinta de la evaluación de impacto por clase de riesgo de HWF-51, que protege la operación: esta protege a las personas.',
    },
  },
  {
    id: 'G-38',
    term: { en: 'Affected person', es: 'Persona afectada' },
    definition: {
      en: 'Anyone on whom an AI Employee’s action has material effect — customer, worker or third party. Holder of the seven rights of HWF-04: disclosure of artificial involvement, the responsible organisation, human review with authority to change the outcome, data correction, contest, an actionable explanation of determinants, and redress. The explanation reaches them through human judgement: confidential material may be withheld with a recorded reason, and the duty to explain is never cancelled.',
      es: 'Cualquiera sobre quien la acción de un AI Employee tiene efecto material — cliente, trabajador o tercero. Titular de los siete derechos de HWF-04: divulgación de la intervención artificial, la organización responsable, revisión humana con autoridad para cambiar el resultado, corrección de datos, impugnación, una explicación accionable de los determinantes, y reparación. La explicación le llega a través de criterio humano: el material confidencial puede retenerse con razón registrada, y el deber de explicar nunca se cancela.',
    },
  },
  {
    id: 'G-39',
    term: { en: 'Moral crumple zone', es: 'Zona de absorción moral' },
    definition: {
      en: 'The human placed at the end of an automated process who absorbs the blame for failures whose determinants lie upstream in policy, design, tooling or deployment. Named by Elish, who showed that blame in automated systems lands on the nearest human while control sat elsewhere. Prohibited by HWF-23: blame follows the determinants (HWF-41), not the proximity, and the supervising human answers only for what they controlled.',
      es: 'El humano colocado al final de un proceso automatizado que absorbe la culpa de fallas cuyos determinantes están aguas arriba, en la política, el diseño, el tooling o el deployment. Nombrada por Elish, quien mostró que la culpa en sistemas automatizados aterriza en el humano más cercano mientras el control estaba en otra parte. Prohibida por HWF-23: la culpa sigue a los determinantes (HWF-41), no a la proximidad, y el humano que supervisa responde solo por lo que controló.',
    },
  },
  {
    id: 'G-40',
    term: { en: 'Derived inference', es: 'Inferencia derivada' },
    definition: {
      en: 'Data the deployment manufactures about a person rather than collects from them: a probability of financial distress, an inferred health condition, a predicted intent. Governed under HWF-42 as if collected — purpose, basis, minimisation, deletion — and often more sensitive than anything the person actually provided. An inference the person never handed over is still their data.',
      es: 'Un dato que el deployment fabrica sobre una persona en vez de recolectarlo de ella: una probabilidad de apuros financieros, una condición de salud inferida, una intención predicha. Gobernado bajo HWF-42 como si se hubiera recolectado — finalidad, base, minimización, eliminación — y con frecuencia más sensible que todo lo que la persona sí entregó. Una inferencia que la persona nunca entregó sigue siendo su dato.',
    },
  },
  {
    id: 'G-41',
    term: { en: 'Correlated failure', es: 'Falla correlacionada' },
    definition: {
      en: 'The failure mode of model monoculture. Human teams do not fail independently either, but diversity of experience and judgement tends to distribute some blind spots; instances sharing a model, vendor, context or configuration concentrate them, and can fail in the same way at the same time. The precedent is common-cause failure, long known to reliability engineering and continuity planning; what is new is the speed, reach and opacity with which it propagates through an artificial workforce. Mitigated by diversity of models and vendors, fallback resources and succession planning; named as a validation item for AI teams by HWF-52.',
      es: 'El modo de falla de la monocultura de modelo. Los equipos humanos tampoco fallan de forma independiente, pero la diversidad de experiencia y criterio tiende a distribuir algunos puntos ciegos; las instancias que comparten modelo, proveedor, contexto o configuración los concentran, y pueden fallar del mismo modo al mismo tiempo. El precedente es la falla de causa común, conocida desde hace décadas en ingeniería de confiabilidad y en planes de continuidad; lo nuevo es la velocidad, el alcance y la opacidad con que se propaga dentro de una fuerza laboral artificial. Se mitiga con diversidad de modelos y proveedores, recursos de fallback y planes de sucesión; nombrado como ítem de validación para equipos de IA por HWF-52.',
    },
  },
];
