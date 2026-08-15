import type { T } from './i18n';

/* --- Disclosure. Stated first, on purpose. -------------------------- */

export const DISCLOSURE: { title: T; body: T[] } = {
  title: { en: 'Disclosure', es: 'Divulgación' },
  body: [
    {
      en: 'This standard was written by Master Joe Phillips, who also builds AIEmpl.com, a commercial platform in this category. That is a real conflict of interest and it is stated here rather than discovered later.',
      es: 'Este estándar fue escrito por Master Joe Phillips, quien también construye AIEmpl.com, una plataforma comercial en esta categoría. Eso es un conflicto de interés real y se declara aquí en lugar de descubrirse después.',
    },
    {
      en: 'Three commitments follow from it, and all three are structural rather than promised. This standard does not certify products and does not score vendors, and under HWF-71 the author’s platform can never claim conformance — a deployment can, a platform cannot. The licence is irrevocable, so the text cannot be pulled back behind a product. And the normative text moves without the author’s vote: the Editor drafts and argues, and does not vote. Independence is demonstrated by structure, not asserted by a sentence.',
      es: 'De ahí se derivan tres compromisos, y los tres son estructurales y no prometidos. Este estándar no certifica productos ni puntúa proveedores, y bajo HWF-71 la plataforma del autor no puede jamás reclamar conformidad — un deployment puede, una plataforma no. La licencia es irrevocable, así que el texto no puede retirarse detrás de un producto. Y el texto normativo se mueve sin el voto del autor: el Editor redacta y argumenta, y no vota. La independencia se demuestra con estructura, no se afirma con una frase.',
    },
    {
      en: 'A standard authored by a vendor and judged by nobody is a specification sheet with a formal name. The mechanism below is what is meant to keep this one from becoming that.',
      es: 'Un estándar escrito por un vendor y juzgado por nadie es una hoja de especificaciones con nombre formal. El mecanismo de abajo es lo que debería impedir que este se convierta en eso.',
    },
  ],
};

/* --- The model ------------------------------------------------------ */

export const MODEL: { title: T; rule: T; body: T } = {
  title: { en: 'Editor and Review Board', es: 'Editor y Review Board' },
  rule: {
    en: 'The Editor writes, proposes and decides everything editorial. The normative text changes only by vote of the Board — and the Editor has a voice, not a vote.',
    es: 'El Editor escribe, propone y decide todo lo editorial. El texto normativo cambia solo por votación del Board — y el Editor tiene voz, mas no voto.',
  },
  body: {
    en: 'That single rule is what makes the disclosure above worth anything: the author holds the largest commercial interest in the room, and the author cannot move the standard at all — only persuade the people who can.',
    es: 'Esa única regla es la que le da valor a la divulgación anterior: el autor tiene el mayor interés comercial de la sala, y el autor no puede mover el estándar en absoluto — solo persuadir a quienes sí pueden.',
  },
};

/* --- The nine seats -------------------------------------------------- */

export interface Seat {
  n: number;
  discipline: T;
  protects: T;
  /** null while the seat is open. */
  holder: string | null;
}

export const SEATS: Seat[] = [
  {
    n: 1,
    discipline: { en: 'HR / People', es: 'RR. HH. / People' },
    protects: {
      en: 'That the HR-to-AI translation is not a caricature, and that the Human and Adapted layers of the matrix stay honest.',
      es: 'Que la traducción RR. HH.→IA no sea caricatura, y que las capas Humana y Adaptada de la matriz se mantengan honestas.',
    },
    holder: null,
  },
  {
    n: 2,
    discipline: { en: 'Operations or finance executive who has deployed AI', es: 'Ejecutivo de operaciones o finanzas que haya desplegado IA' },
    protects: {
      en: 'That the standard is something a real company can actually comply with, not only something elegant to read.',
      es: 'Que el estándar sea algo que una empresa real pueda cumplir, no solo algo elegante de leer.',
    },
    holder: null,
  },
  {
    n: 3,
    discipline: { en: 'AI engineering', es: 'Ingeniería de IA' },
    protects: {
      en: 'That the nine properties and the controls are technically honest and implementable.',
      es: 'Que las nueve propiedades y los controles sean técnicamente honestos e implementables.',
    },
    holder: null,
  },
  {
    n: 4,
    discipline: { en: 'Security and risk', es: 'Seguridad y riesgo' },
    protects: {
      en: 'Least privilege, auditability, incident handling and the kill switch: the governance domain.',
      es: 'Least privilege, auditabilidad, manejo de incidentes y kill switch: el dominio de gobierno.',
    },
    holder: null,
  },
  {
    n: 5,
    discipline: { en: 'Legal and labour', es: 'Legal y laboral' },
    protects: {
      en: 'The boundary that says this is not an employee in any legal sense. It is the line where the category is most likely to burn.',
      es: 'La frontera que dice que esto no es un empleado en sentido jurídico. Es la línea donde la categoría tiene más probabilidad de quemarse.',
    },
    holder: null,
  },
  {
    n: 6,
    discipline: { en: 'Workers’ representation', es: 'Representación de trabajadores' },
    protects: {
      en: 'The floor of HWF-02 and HWF-03: that reserved decisions stay human and that impact assessments consult workers before the transformation, not after it. Works-council or union floor experience, not a theorist.',
      es: 'El piso de HWF-02 y HWF-03: que las decisiones reservadas sigan humanas y que las evaluaciones de impacto consulten a los trabajadores antes de la transformación, no después. Experiencia de piso en comités o sindicatos, no un teórico.',
    },
    holder: null,
  },
  {
    n: 7,
    discipline: { en: 'Affected persons and civil society', es: 'Personas afectadas y sociedad civil' },
    protects: {
      en: 'That the rights of HWF-04 work as mechanisms rather than words: explanation, correction, contest and redress. Someone who operates recourse in the real world — ombudsman, consumer protection, appeals practice.',
      es: 'Que los derechos de HWF-04 funcionen como mecanismos y no como palabras: explicación, corrección, impugnación y reparación. Alguien que opere recursos en el mundo real — ombudsman, protección al consumidor, práctica de apelaciones.',
    },
    holder: null,
  },
  {
    n: 8,
    discipline: { en: 'Accessibility and inclusion', es: 'Accesibilidad e inclusión' },
    protects: {
      en: 'The accessibility constraint of HWF-01 and the vulnerable-people factor of HWF-51 and HWF-02. A practitioner of accessible systems, not an auditor of documents.',
      es: 'La restricción de accesibilidad de HWF-01 y el factor de personas vulnerables de HWF-51 y HWF-02. Un practicante de sistemas accesibles, no un auditor de documentos.',
    },
    holder: null,
  },
  {
    n: 9,
    discipline: { en: 'Independent academic', es: 'Académico independiente' },
    protects: {
      en: 'The evidence base: that the standard’s claims survive contact with research, and that its sources stay honest. Organisational theory, labour economics or human-computer interaction, with no commercial stake in the category.',
      es: 'La base de evidencia: que las afirmaciones del estándar sobrevivan el contacto con la investigación, y que sus fuentes se mantengan honestas. Teoría organizacional, economía laboral o interacción humano-computadora, sin interés comercial en la categoría.',
    },
    holder: null,
  },
];

/* --- The hard rules -------------------------------------------------- */

export const RULES: T[] = [
  {
    en: 'A majority of the Board must be people currently operating in the field — deploying, building or governing hybrid workforces. Skin in the game is a requirement for this Board, not a disqualifier: what disqualifies is hidden interest, never interest.',
    es: 'La mayoría del Board deben ser personas operando hoy en el campo — desplegando, construyendo o gobernando fuerzas laborales híbridas. El skin in the game es un requisito de este Board, no un descalificador: lo que descalifica es el interés oculto, nunca el interés.',
  },
  {
    en: 'Commercial interest in the category — the author’s competitors included — may hold at most two of the nine seats, each with a published disclosure and recusal from any vote where the interest is direct — directness judged by the non-conflicted seats, never by the member. The Board is neither a vendor lobby nor a vendor blacklist.',
    es: 'El interés comercial en la categoría — competidores del autor incluidos — puede ocupar como máximo dos de los nueve asientos, cada uno con divulgación publicada y recusación en todo voto donde el interés sea directo — la direccionalidad la juzgan los asientos no conflictuados, nunca el propio miembro. El Board no es un lobby de vendors ni una lista negra de vendors.',
  },
  {
    en: 'Compensated transparently or not at all: an identical, published honorarium from disclosed sources. Unpaid seats select for people who can afford to donate time; hidden pay selects for people someone else is paying. Both are capture — transparency is the control.',
    es: 'Compensación transparente o ninguna: un honorario idéntico, publicado y de fuentes divulgadas. Los asientos sin pago seleccionan a quienes pueden donar su tiempo; el pago oculto selecciona a quienes alguien más les paga. Ambos son captura — la transparencia es el control.',
  },
  {
    en: 'Each member publishes their own disclosure, exactly as the Editor does.',
    es: 'Cada miembro publica su propia divulgación, exactamente como lo hace el Editor.',
  },
  {
    en: 'Twelve-month renewable terms, so that leaving is ordinary rather than a scandal.',
    es: 'Términos de doce meses renovables, para que salir sea algo ordinario y no un escándalo.',
  },
  {
    en: 'A vote is valid only with two thirds of the filled seats participating, and no vote is valid with fewer than five seats filled. Normative changes carry with a majority of all seats, not of those present, and ratification of a version requires two thirds of all seats. Minutes are published, and a minority opinion is published in full in the changelog — a dissent the public can read is worth more than a unanimity it cannot check.',
    es: 'Un voto es válido solo con dos tercios de los asientos ocupados participando, y ningún voto es válido con menos de cinco asientos ocupados. Los cambios normativos se aprueban con mayoría de todos los asientos, no de los presentes, y la ratificación de una versión exige dos tercios de todos los asientos. Las actas se publican, y una opinión minoritaria se publica íntegra en el changelog — un disenso que el público puede leer vale más que una unanimidad que no puede verificar.',
  },
  {
    en: 'Seats are filled by public nomination: candidacies and their disclosures are published for at least thirty days before seating. Until five seats are filled, an unopposed published candidacy is seated after its thirty days; from the sixth seat on, seating requires majority approval of the sitting Board. The Editor may propose candidates; the Editor appoints nobody.',
    es: 'Los asientos se llenan por nominación pública: las candidaturas y sus divulgaciones se publican por al menos treinta días antes de sentar a alguien. Hasta llenar cinco asientos, una candidatura publicada sin oposición se sienta tras sus treinta días; del sexto asiento en adelante, sentar exige mayoría del Board en funciones. El Editor puede proponer candidatos; el Editor no nombra a nadie.',
  },
  {
    en: 'Note and doctrine revisions made between versions are tabled at each Board meeting, and any of them may be reversed by simple majority. The notes are the Editor’s channel; the Board holds the door.',
    es: 'Las revisiones de notas y doctrina hechas entre versiones se presentan en cada reunión del Board, y cualquiera puede revertirse por mayoría simple. Las notas son el canal del Editor; el Board sostiene la puerta.',
  },
  {
    en: 'The Editor serves until resignation or removal by two thirds of all seats, and the Board appoints the successor. The founder wrote the standard; the office outlives him.',
    es: 'El Editor sirve hasta su renuncia o remoción por dos tercios de todos los asientos, y el Board nombra al sucesor. El fundador escribió el estándar; el cargo lo sobrevive.',
  },
];

/* --- Amendment process ------------------------------------------------ */

export const PROCESS: { n: number; step: T }[] = [
  { n: 1, step: { en: 'Anyone proposes a change, publicly, with the reasoning and the case that motivated it.', es: 'Cualquiera propone un cambio, públicamente, con el razonamiento y el caso que lo motivó.' } },
  { n: 2, step: { en: 'The Editor responds within ninety days: a drafted amendment or a reasoned decline, both published.', es: 'El Editor responde en noventa días: un borrador de enmienda o una negativa razonada, ambos publicados.' } },
  { n: 3, step: { en: 'A decline is not a veto. Any three Board members may sponsor a proposal directly to consultation and vote, without an Editor draft.', es: 'La negativa no es veto. Tres miembros del Board pueden patrocinar una propuesta directo a consulta y voto, sin borrador del Editor.' } },
  { n: 4, step: { en: 'Public consultation runs for at least thirty days before any vote on normative text.', es: 'La consulta pública corre al menos treinta días antes de cualquier voto sobre texto normativo.' } },
  { n: 5, step: { en: 'The Board votes under the Board rules: normative changes carry with a majority of all seats — and the Editor has a voice, not a vote.', es: 'El Board vota bajo las reglas del Board: los cambios normativos se aprueban con mayoría de todos los asientos — y el Editor tiene voz, mas no voto.' } },
  { n: 6, step: { en: 'The changelog records what changed, who proposed it, the vote count, and any minority opinion in full.', es: 'El changelog registra qué cambió, quién lo propuso, el conteo del voto, y toda opinión minoritaria íntegra.' } },
];

/* --- Current status ---------------------------------------------------- */

export const STATUS_NOTE: { title: T; body: T } = {
  title: { en: 'Where this stands today', es: 'En qué punto está esto hoy' },
  body: {
    en: 'Candidate 1.0 is a proposal by a single author. The Standard Review Board is forming and every one of the nine seats is currently open. Publishing that honestly is a deliberate choice: a standard that admits to being a proposal is more credible than one that implies an institution it does not yet have. And it stays a candidate until a Board constituted under these rules ratifies it as version 1.0 — the author cannot ratify his own standard. If one of the nine seats describes you, the invitation is open.',
    es: 'La Candidate 1.0 es una propuesta de un solo autor. El Standard Review Board está en formación y cada uno de los nueve asientos está abierto. Publicarlo así es una decisión deliberada: un estándar que admite ser una propuesta es más creíble que uno que insinúa una institución que todavía no tiene. Y sigue siendo candidata hasta que un Board constituido bajo estas reglas la ratifique como versión 1.0 — el autor no puede ratificar su propio estándar. Si alguno de los nueve asientos lo describe, la invitación está abierta.',
  },
};

/* --- Open findings: confirmed-in-part, held for the Board -------------- */

export const OPEN_FINDINGS: { title: T; intro: T; items: T[] } = {
  title: { en: 'Open findings — held for the Board', es: 'Hallazgos abiertos — en espera del Board' },
  intro: {
    en: 'Findings from the Candidate 1.0 adversarial review that survived verification in part but were not amended by the Editor alone. They are published rather than filed, because a standard that hides its known gaps is marketing: each is Board agenda, and each stays listed here until a version resolves it.',
    es: 'Hallazgos de la revisión adversarial de Candidate 1.0 que sobrevivieron la verificación en parte pero no fueron enmendados por el Editor en solitario. Se publican en vez de archivarse, porque un estándar que esconde sus huecos conocidos es marketing: cada uno es agenda del Board, y cada uno sigue listado aquí hasta que una versión lo resuelva.',
  },
  items: [
    {
      en: 'A legal floor for the risk classification: uses prohibited or enumerated as high-risk by applicable law should enter the corresponding tier as a floor the seven factors may raise but never lower.',
      es: 'Un piso legal para la clasificación de riesgo: los usos prohibidos o enumerados como de alto riesgo por la ley aplicable deberían entrar al nivel correspondiente como un piso que los siete factores pueden subir pero nunca bajar.',
    },
    {
      en: 'Independent balancing of explanation withholdings: where data-protection law applies, trade-secret material goes to an authority or court for balancing (CJEU C-203/22) — the recorded withholding of HWF-04 is this standard’s mechanism, not a discharge of that law.',
      es: 'Ponderación independiente de las retenciones de explicación: donde aplica la ley de protección de datos, el material de secreto comercial va a una autoridad o corte para ponderarse (CJEU C-203/22) — la retención registrada de HWF-04 es el mecanismo de este estándar, no un cumplimiento de esa ley.',
    },
    {
      en: 'A materiality test with worked examples for the reserved subjects of HWF-02, so that routine operations touching reserved accounts are distinguishable from reserved decisions.',
      es: 'Una prueba de materialidad con ejemplos resueltos para las materias reservadas de HWF-02, para distinguir operaciones rutinarias que tocan cuentas reservadas de decisiones reservadas.',
    },
    {
      en: 'An intake clause: a complaint channel, a response window and a severity-graded incident process with a named owner, as preconditions of go-live — the rights of HWF-04 need a door to knock on.',
      es: 'Una cláusula de recepción: un canal de quejas, una ventana de respuesta y un proceso de incidentes graduado por severidad con dueño con nombre, como precondiciones del go-live — los derechos de HWF-04 necesitan una puerta donde tocar.',
    },
    {
      en: 'A defined source for the escalation-quality metrics: a sampled review of non-escalated cases with a minimum rate and a named reviewer set by risk class, so that zero reported misses means something.',
      es: 'Una fuente definida para las métricas de calidad de escalación: una revisión por muestreo de casos no escalados con tasa mínima y revisor con nombre fijados por clase de riesgo, para que cero fallas reportadas signifique algo.',
    },
    {
      en: 'Cross-references to statutory impact assessments — EU AI Act Article 27’s fundamental-rights assessment and analogous regimes — stating expressly that HWF-03 does not discharge them.',
      es: 'Referencias cruzadas a las evaluaciones de impacto legales — la de derechos fundamentales del Artículo 27 del EU AI Act y regímenes análogos — declarando expresamente que HWF-03 no las satisface.',
    },
    {
      en: 'Missed Escalation Rate normalised by audit sampling depth, reported as a pair, with severity grading by a party independent of the review budget it justifies.',
      es: 'Missed Escalation Rate normalizado por profundidad de muestreo de auditoría, reportado como par, con la graduación de severidad a cargo de una parte independiente del presupuesto de revisión que justifica.',
    },
    {
      en: 'Aggregate-only computation of scorecard metrics that touch named humans, with individual-level access gated under HWF-42’s new-purpose test.',
      es: 'Cómputo solo agregado de las métricas del scorecard que tocan humanos con nombre, con el acceso a nivel individual compuertado bajo la prueba de propósito nuevo de HWF-42.',
    },
  ],
};

/* --- Changelog --------------------------------------------------------- */

export interface Release {
  version: string;
  date: string;
  status: T;
  notes: T[];
}

export const RELEASES: Release[] = [
  {
    version: '1.0',
    date: '2026-08-12',
    status: { en: 'Candidate — pending Board ratification', es: 'Candidata — pendiente de ratificación del Board' },
    notes: [
      { en: 'Candidate 1.0: twenty-seven normative clauses in eight blocks — 0x human foundation to 7x conformance — plus the nine-property test, the WRM framework with its 120-principle matrix, the maturity model, the HWFA allocation instrument, the five-tier risk classification, the Hybrid Workforce Manager role, the transition playbooks and a forty-one-term glossary. Published bilingually, with the complete text as one machine-readable file per language.', es: 'Candidate 1.0: veintisiete cláusulas normativas en ocho bloques — 0x fundamento humano a 7x conformidad — más el test de nueve propiedades, el marco WRM con su matriz de 120 principios, el modelo de madurez, el instrumento de asignación HWFA, la clasificación de riesgo de cinco niveles, el rol de Gerente de Fuerza Laboral Híbrida, los playbooks de transición y un glosario de cuarenta y un términos. Publicado bilingüe, con el texto completo como un archivo legible por máquinas por idioma.' },
      { en: 'Certification is deliberately outside the scope and does not return: the author holds a commercial interest in the category, so the standard scores no products, issues no seals, and makes conformance a self-declaration anyone can verify or refute — the public as auditor, structure instead of trust.', es: 'La certificación está deliberadamente fuera del alcance y no regresa: el autor tiene un interés comercial en la categoría, así que el estándar no puntúa productos, no emite sellos, y convierte la conformidad en una autodeclaración que cualquiera puede verificar o refutar — el público como auditor, estructura en vez de confianza.' },
      { en: 'The front matter carries the preamble — the document’s own declaration — the author’s signed motivation and strategic objective, the thesis corrected during drafting so that it ends where every chain ends (an AI Employee holds a role; a human answers for it), and the invariant formula: the AI executes, the organisation answers, a human governs.', es: 'El frente carga el preámbulo — la declaración del documento mismo —, la motivación y el objetivo estratégico firmados por el autor, la tesis corregida durante la redacción para que termine donde termina toda cadena (un AI Employee ocupa un rol; un humano responde por él), y la fórmula invariante: la IA ejecuta, la organización responde, un humano gobierna.' },
      { en: 'Governance was reformed before any seat was filled: nine seats with a practitioner majority and a single academic; commercial interest capped at two seats, with disclosure and recusal judged by the non-conflicted; a transparent, identical, published honorarium; public nomination in which the Editor proposes and appoints nobody; two-thirds quorum over filled seats and normative majorities counted over all seats; Board reversal of note revisions; Editor succession and removal — and the deepest rule: the Editor has a voice, not a vote. The publication remains a candidate until a Board constituted under these rules ratifies it; the author cannot ratify his own standard.', es: 'La gobernanza se reformó antes de llenar asiento alguno: nueve asientos con mayoría practicante y un solo académico; interés comercial con tope de dos asientos, con divulgación y recusación juzgada por los no conflictuados; honorario transparente, idéntico y publicado; nominación pública donde el Editor propone y no nombra a nadie; quorum de dos tercios sobre asientos ocupados y mayorías normativas contadas sobre todos los asientos; reversión por el Board de revisiones de notas; sucesión y remoción del Editor — y la regla más profunda: el Editor tiene voz, mas no voto. La publicación sigue siendo candidata hasta que un Board constituido bajo estas reglas la ratifique; el autor no puede ratificar su propio estándar.' },
      { en: 'The allocation instrument is the HWFA — formerly the Fit Score, renamed because an instrument that deliberately refuses to produce a number should not be called a Score. It runs in three stages embodying HWF-01’s order (eligibility, then risk, then economics), can answer deterministic automation — you do not need an AI Employee — and returns an argument rather than a number, because a score would let a decision already taken be laundered through arithmetic.', es: 'El instrumento de asignación es el HWFA — antes Fit Score, renombrado porque un instrumento que deliberadamente se niega a producir un número no debería llamarse Score. Corre en tres etapas que encarnan el orden de HWF-01 (elegibilidad, luego riesgo, luego economía), puede responder automatización determinista — no se necesita un AI Employee — y devuelve un argumento en vez de un número, porque un puntaje permitiría lavar por aritmética una decisión ya tomada.' },
      { en: 'Clause numbers carry the architecture: the first digit names the block, block 0 is the human foundation, and HWF-01 is the supreme clause — number and rank aligned. A new clause takes the next free number in its block’s decade; a block that reaches nine clauses is asking to be split at a major version, not extended.', es: 'Los números de cláusula cargan la arquitectura: el primer dígito nombra el bloque, el bloque 0 es el fundamento humano, y HWF-01 es la cláusula suprema — número y rango alineados. Una cláusula nueva toma el siguiente número libre en la decena de su bloque; un bloque que llega a nueve cláusulas está pidiendo partirse en una versión mayor, no extenderse.' },
      { en: 'Candidate 1.0 was reviewed adversarially before any Board existed: twenty external recommendations and a five-advisor council with anonymous peer refutation — forty findings. Everything confirmed was amended; seven attacks died against existing text; and eight findings confirmed in part are published as open findings, Board agenda until a version resolves them — because a standard that hides its known gaps is marketing. The per-clause considerations that survived this process are recorded below.', es: 'Candidate 1.0 se revisó adversarialmente antes de que existiera Board alguno: veinte recomendaciones externas y un concilio de cinco asesores con refutación de pares anónima — cuarenta hallazgos. Todo lo confirmado se enmendó; siete ataques murieron contra texto existente; y ocho hallazgos confirmados en parte se publican como hallazgos abiertos, agenda del Board hasta que una versión los resuelva — porque un estándar que esconde sus huecos conocidos es marketing. Las consideraciones por cláusula que sobrevivieron ese proceso quedan registradas abajo.' },
    ],
  },
];

/* --- Per-clause considerations: the record a Board will need ---------- */

export const RATIONALE: { title: T; intro: T; blocks: { numeral: string; title: T; items: { id: string; note: T }[] }[] } = {
  title: { en: 'Considerations by clause', es: 'Consideraciones por cl\u00e1usula' },
  intro: {
    en: 'One entry per clause: the considerations that produced it, kept after the drafting noise was stripped. This is why each clause says what it says \u2014 the part of the record a future Board will actually need.',
    es: 'Una entrada por cl\u00e1usula: las consideraciones que la produjeron, conservadas despu\u00e9s de quitar el ruido de redacci\u00f3n. Esto es por qu\u00e9 cada cl\u00e1usula dice lo que dice \u2014 la parte del registro que un Board futuro va a necesitar.',
  },
  blocks: [
    { numeral: '0', title: { en: 'Human foundation', es: 'Fundamento humano' }, items: [
      { id: 'HWF-01', note: { en: 'People are ends; software is a means. Resource neutrality is an allocation discipline, not a moral stance, so the constraints are lexically prior: cost optimises inside the space that rights, dignity, safety, agency, accessibility and labour protections leave open, and never trades against them. The clause does not promise that displacement will not happen; it governs the terms, as labour law did with the tractor — and it takes precedence over every other clause.', es: 'Las personas son fines; el software es un medio. La neutralidad de recurso es disciplina de asignación, no postura moral, así que las restricciones son léxicamente prioritarias: el costo optimiza dentro del espacio que dejan abierto los derechos, la dignidad, la seguridad, la agencia, la accesibilidad y las protecciones laborales, y nunca se intercambia contra ellas. La cláusula no promete que el desplazamiento no ocurrirá; gobierna los términos, como hizo la legislación laboral con el tractor — y tiene precedencia sobre toda otra cláusula.' } },
      { id: 'HWF-02', note: { en: 'Reserved decisions are a floor by subject matter, because classification is judgement and judgement can be motivated. Artificial participation — analysis, drafting, recommendation — stays legal; the decision does not. The test of deciding is operational: a human who cannot restate the case and decide otherwise is signing, not deciding. A reserved decision is Critical by definition.', es: 'Las decisiones reservadas son un piso por materia, porque clasificar es juicio y el juicio puede estar motivado. La participación artificial — análisis, redacción, recomendación — sigue siendo legal; la decisión no. La prueba de decidir es operativa: un humano que no puede reformular el caso y decidir distinto está firmando, no decidiendo. Una decisión reservada es Crítica por definición.' } },
      { id: 'HWF-03', note: { en: 'No material transformation without a recorded human impact assessment, consulted before, not after. Its least-volunteered dimensions: deskilling — automate the junior work and stop producing seniors — and the exception load left to humans when automation absorbs the easy cases. Consultation is not consent, and no favourable conclusion is required: an assessment obliged to bless the transition would be theatre.', es: 'Ninguna transformación material sin evaluación de impacto humano registrada, consultada antes, no después. Sus dimensiones menos reportadas: el deskilling — automatizar el trabajo junior y dejar de producir seniors — y la carga de excepciones que queda en humanos cuando la automatización absorbe los casos fáciles. La consulta no es consentimiento, y no se exige conclusión favorable: una evaluación obligada a bendecir la transición sería teatro.' } },
      { id: 'HWF-04', note: { en: 'Affected persons hold seven rights against the deployment. The explanation owed is operational evidence — policy, data, tools, authority — never a reasoning transcript: operational evidence is disputable, and nobody can contest a vibe. Release runs through human judgement, every withholding is recorded, and confidentiality narrows an explanation but never cancels the duty to give one the person can act on.', es: 'Las personas afectadas tienen siete derechos frente al deployment. La explicación debida es evidencia operacional — política, datos, herramientas, autoridad — nunca una transcripción de razonamiento: la evidencia operacional es disputable, y nadie puede impugnar una vibra. La entrega corre por criterio humano, toda retención se registra, y la confidencialidad estrecha una explicación pero nunca cancela el deber de dar una accionable.' } },
    ] },
    { numeral: '1', title: { en: 'The category', es: 'La categoría' }, items: [
      { id: 'HWF-11', note: { en: 'A role, not a persona: the post exists before its occupant, with result, authority and measurement. Before does not mean frozen — occupants reshape posts legitimately, and every reshaping is declared, because the declared post is the interface: a human colleague reads an undeclared role from the corridor; an artificial one can only read the graph.', es: 'Un rol, no una personalidad: el puesto existe antes que su ocupante, con resultado, autoridad y medición. Antes no significa congelado — los ocupantes remodelan puestos legítimamente, y toda remodelación se declara, porque el puesto declarado es la interfaz: un colega humano lee un rol no declarado desde el pasillo; uno artificial solo puede leer el grafo.' } },
      { id: 'HWF-12', note: { en: 'The test is conjunctive in both directions. Missing one property, the system is an agent — respectable, but not an AI Employee. Exhibiting all nine in operation, it is one whatever it is called, with the burden of non-qualification on the deployer: an unwritten role contract is a governance failure, not a category exit. And breach stays inside the category — a definition that expelled violators would leave the standard with nothing to bind.', es: 'El test es conjuntivo en ambas direcciones. Faltando una propiedad, el sistema es un agente — respetable, pero no un AI Employee. Exhibiendo las nueve en operación, lo es se llame como se llame, con la carga de la no-calificación en el deployer: un contrato de rol sin escribir es una falla de gobierno, no una salida de la categoría. Y el incumplimiento se queda dentro de la categoría — una definición que expulsara infractores dejaría al estándar sin nada que obligar.' } },
      { id: 'HWF-13', note: { en: 'The status clause practises epistemic modesty: no personhood, employment relationship, consciousness or moral status is recognised — and none is denied. Non-recognition in the posture of corporate law. Every clause holds however the philosophy of mind is one day resolved, because none depends on the answer.', es: 'La cláusula de estatus practica modestia epistémica: no se reconoce personería, relación laboral, conciencia ni estatus moral — y nada se niega. No-reconocimiento en la postura del derecho societario. Cada cláusula se sostiene como sea que algún día se resuelva la filosofía de la mente, porque ninguna depende de la respuesta.' } },
      { id: 'HWF-14', note: { en: 'Deception is prohibited by observable results, not intentions, because intent is not auditable: passing as human; claiming feelings; signals reasonably capable of inducing false belief; optimisation against recorded objectives for emotional dependency; concealed artificial involvement. Disclosure at the outset, renewed at material points. Courtesy and personalisation stay legal — nothing here requires an AI Employee to write badly.', es: 'El engaño se prohíbe por resultados observables, no intenciones, porque la intención no es auditable: hacerse pasar por humano; declarar sentimientos; señales razonablemente capaces de inducir creencia falsa; optimización contra objetivos registrados de dependencia emocional; intervención artificial ocultada. Divulgación al inicio, renovada en puntos materiales. La cortesía y la personalización siguen siendo legales — nada exige que un AI Employee escriba mal.' } },
    ] },
    { numeral: '2', title: { en: 'Accountability', es: 'Accountability' }, items: [
      { id: 'HWF-21', note: { en: 'Exactly one accountable owner — primary, not exclusive. Supervision may be delegated, even to another AI Employee; accountability may not, because answering for an outcome requires the capacity to bear a consequence. System, data, security, vendor and director obligations survive intact, and a governance body qualifies as terminus only with an identified chair, stated decision rules and emergency capacity.', es: 'Exactamente un accountable owner — primario, no exclusivo. La supervisión puede delegarse, incluso a otro AI Employee; la accountability no, porque responder por un resultado exige capacidad de cargar una consecuencia. Las obligaciones de sistema, datos, seguridad, proveedor y directores sobreviven intactas, y un cuerpo de gobierno califica como terminus solo con presidente identificado, reglas de decisión declaradas y capacidad de emergencia.' } },
      { id: 'HWF-22', note: { en: 'Chains may be deep, but they must be traversable, observable and interruptible without passing through themselves: an accountable party who must ask the pyramid for permission holds a request, not control. Scale grows only against tooling — a thousand resources without instruments is an organisational chart, not accountability.', es: 'Las cadenas pueden ser profundas, pero deben ser recorribles, observables e interrumpibles sin pasar por sí mismas: quien responde y debe pedirle permiso a la pirámide tiene una petición, no control. La escala solo crece contra tooling — mil recursos sin instrumentos son un organigrama, no accountability.' } },
      { id: 'HWF-23', note: { en: 'Ownership is a resourced capability, not a name in a field: competence, authority, time for the span, evidence access, independence from the pressures that own the outcome, the power to suspend, training against automation bias. The kill switch is exercised on a stated cadence — never pulled is decoration — and the crumple zone is prohibited: blame follows the determinants, not the proximity.', es: 'La ownership es una capacidad dotada, no un nombre en un campo: competencia, autoridad, tiempo para el alcance, acceso a evidencia, independencia de las presiones dueñas del resultado, poder de suspender, entrenamiento contra el sesgo de automatización. El kill switch se ejercita con cadencia declarada — nunca jalado es decoración — y la zona de absorción queda prohibida: la culpa sigue a los determinantes, no a la proximidad.' } },
    ] },
    { numeral: '3', title: { en: 'Authority and operational control', es: 'Autoridad y control operativo' }, items: [
      { id: 'HWF-31', note: { en: 'Authority must be explicit, limited and revocable — written before the resource operates, never inferred afterwards from what it happened to do.', es: 'La autoridad debe ser explícita, limitada y revocable — escrita antes de que el recurso opere, nunca inferida después a partir de lo que hizo.' } },
      { id: 'HWF-32', note: { en: 'Least privilege, because access is capability and risk surface at once: more access is not more competence; it is a larger blast radius.', es: 'Mínimo privilegio, porque el acceso es capacidad y superficie de riesgo a la vez: más acceso no es más competencia; es un radio de daño más grande.' } },
      { id: 'HWF-33', note: { en: 'High-risk actions support human approval, with proportionality and separation of duties — whoever initiates does not approve. What counts as high-risk resolves against the classification of HWF-51, not against taste.', es: 'Las acciones de alto riesgo soportan aprobación humana, con proporcionalidad y separación de funciones — quien inicia no aprueba. Qué cuenta como alto riesgo se resuelve contra la clasificación de HWF-51, no contra el gusto.' } },
      { id: 'HWF-34', note: { en: 'Escalate rather than improvise: a convincing answer where there should have been a raised doubt is the most dangerous failure. Every exception needs a destination — and no metric may punish the journey, because a system rewarded for fewer escalations learns silence.', es: 'Escalar en vez de improvisar: una respuesta convincente donde debía haber una duda escalada es la falla más peligrosa. Toda excepción necesita un destino — y ninguna métrica puede castigar el viaje, porque un sistema premiado por escalar menos aprende silencio.' } },
      { id: 'HWF-35', note: { en: 'Withholding context is a legitimate design decision in both directions — protecting the information, or preventing measurable degradation of the decision (anchoring, contamination, saturation) — and every restriction is a recorded, versioned context boundary record. Responsibility for a decision degraded by withheld context lies with whoever withheld it.', es: 'Retener contexto es una decisión de diseño legítima en ambas direcciones — proteger la información, o prevenir la degradación medible de la decisión (anclaje, contaminación, saturación) — y toda restricción es un registro de frontera de contexto, versionado y auditable. La responsabilidad por una decisión degradada por contexto retenido recae en quien lo retuvo.' } },
    ] },
    { numeral: '4', title: { en: 'Evidence and data', es: 'Evidencia y datos' }, items: [
      { id: 'HWF-41', note: { en: 'Audit reconstructs the determinants of a decision — policy, knowledge, tool results, authority, versions — not only its outcome, because a what-only audit leaves five different failures looking identical. A model’s account of its own reasoning may support the reconstruction and never substitutes for it. Materiality scales by risk class: log correlation against the version manifest is conformant for Low and Moderate posts.', es: 'La auditoría reconstruye los determinantes de una decisión — política, conocimiento, resultados de herramientas, autoridad, versiones — y no solo su resultado, porque una auditoría de solo-qué deja cinco fallas distintas viendo idénticas. El relato del modelo sobre su propio razonamiento puede apoyar la reconstrucción y nunca la sustituye. La materialidad escala por clase de riesgo: correlacionar logs contra el manifiesto de versiones es conforme para puestos Bajos y Moderados.' } },
      { id: 'HWF-42', note: { en: 'Memory is one data system among several: inputs, outputs, tool results and derived inferences are governed whole — purpose, basis, minimisation, transfers, vendor use including training, isolation, verifiable deletion. An inference the person never handed over is still their data. And the audit trail is itself such a system, governed with the same severity as the operation it audits: mining it to score employees is a new purpose requiring its own basis.', es: 'La memoria es un sistema de datos entre varios: inputs, outputs, resultados de herramientas e inferencias derivadas se gobiernan enteros — finalidad, base, minimización, transferencias, uso del proveedor incluido el entrenamiento, aislamiento, eliminación verificable. Una inferencia que la persona nunca entregó sigue siendo su dato. Y el registro de auditoría es él mismo uno de estos sistemas, gobernado con la misma severidad que la operación que audita: minarlo para puntuar empleados es un propósito nuevo que exige base propia.' } },
      { id: 'HWF-43', note: { en: 'An identifiable version of model, policies, tools and knowledge — because without it, neither the reconstruction of HWF-41 nor the revalidation of HWF-52 has an object.', es: 'Una versión identificable de modelo, políticas, herramientas y conocimiento — porque sin ella, ni la reconstrucción de HWF-41 ni la revalidación de HWF-52 tienen objeto.' } },
      { id: 'HWF-44', note: { en: 'Performance is measured by outcomes, quality, risk and cost — never activity, hours, tokens or message volume: speed can make motion look like value.', es: 'El desempeño se mide por outcomes, calidad, riesgo y costo — nunca actividad, horas, tokens ni volumen de mensajes: la velocidad puede hacer que el movimiento parezca valor.' } },
    ] },
    { numeral: '5', title: { en: 'Risk and validation', es: 'Riesgo y validación' }, items: [
      { id: 'HWF-51', note: { en: 'Five tiers judged on inherent risk across seven factors — never cost of error alone, because a cheap error at scale against vulnerable people is not a cheap error. Controls lower the residual, never the class: a guardrail cannot buy a better tier. Critical always ends in a final human decision; Prohibited cannot be made conformant by any control. Interoperates with risk-based law without claiming equivalence.', es: 'Cinco niveles juzgados sobre riesgo inherente con siete factores — nunca solo el costo del error, porque un error barato a escala contra personas vulnerables no es un error barato. Los controles bajan el residual, nunca la clase: un guardrail no puede comprar un mejor nivel. Crítico termina siempre en decisión humana final; Prohibido no puede volverse conforme con ningún control. Interopera con la ley basada en riesgo sin afirmar equivalencia.' } },
      { id: 'HWF-52', note: { en: 'A version is a record, not a proof: every material change revalidates before operating, at class-scaled depth — the playbook gates birth; this clause keeps the transition earned. Deterministic automation is untouched because the category excludes it. Teams add systemic risks, correlated failure above all: a hundred humans err a hundred different ways; a hundred instances of one model err identically and at once.', es: 'Una versión es un registro, no una prueba: todo cambio material se revalida antes de operar, a profundidad escalada por clase — el playbook compuerta el nacimiento; esta cláusula mantiene ganada la transición. La automatización determinista no se toca porque la categoría la excluye. Los equipos agregan riesgos sistémicos, la falla correlacionada ante todo: cien humanos se equivocan de cien maneras; cien instancias de un mismo modelo se equivocan idénticamente y a la vez.' } },
    ] },
    { numeral: '6', title: { en: 'Lifecycle', es: 'Ciclo de vida' }, items: [
      { id: 'HWF-61', note: { en: 'The commonest defect of a role contract is not bad drafting but abandonment: review carries a twelve-month ceiling, and every clocked obligation lives in one governance calendar with one named owner. Independent monitoring against the contract is the primary control; the resource’s self-report supplements it — a system whose configuration is the problem shares the blind spot. Changing the contract is always a human decision.', es: 'El defecto más común de un contrato de rol no es la mala redacción sino el abandono: la revisión carga techo de doce meses, y toda obligación con reloj vive en un calendario de gobernanza con un solo dueño. El monitoreo independiente contra el contrato es el control primario; el auto-reporte del recurso lo complementa — un sistema cuya configuración es el problema comparte el punto ciego. Cambiar el contrato es siempre decisión humana.' } },
      { id: 'HWF-62', note: { en: 'Every transition is evaluable against a baseline recorded before the change — otherwise the organisation celebrates an improvement it never made — and rollback criteria are written before the results are known, because criteria written after are justification.', es: 'Toda transición es evaluable contra un baseline registrado antes del cambio — de lo contrario la organización celebra una mejora que nunca ocurrió — y los criterios de rollback se escriben antes de conocer los resultados, porque los criterios escritos después son justificación.' } },
      { id: 'HWF-63', note: { en: 'No post outlives its justification: existence is re-justified on cadence, prior to and separate from performance, because meeting every KPI in a post nobody needs is the usual anaesthetic. The weak triggers that sometimes prune human posts — a salary line, a resignation — do not exist for artificial ones, which is what accumulates digital zombies. A lapsed review restricts or suspends in proportion; retirement follows a failed justification, never a missed calendar.', es: 'Ningún puesto sobrevive a su justificación: la existencia se re-justifica con cadencia, antes y aparte del desempeño, porque cumplir todos los KPIs en un puesto que nadie necesita es el anestésico habitual. Los disparadores débiles que a veces podan puestos humanos — una línea de salario, una renuncia — no existen para los artificiales, y eso es lo que acumula zombis digitales. Una revisión vencida restringe o suspende en proporción; el retiro sigue a una justificación fallida, nunca a un calendario perdido.' } },
      { id: 'HWF-64', note: { en: 'Offboarding is as important as onboarding and almost always skipped: revoke, disable, rotate, transfer, preserve evidence — a retired post whose access survives it is risk surface with no return.', es: 'El offboarding es tan importante como el onboarding y casi siempre se omite: revocar, deshabilitar, rotar, transferir, preservar evidencia — un puesto retirado cuyos accesos lo sobreviven es superficie de riesgo sin retorno.' } },
    ] },
    { numeral: '7', title: { en: 'Conformance', es: 'Conformidad' }, items: [
      { id: 'HWF-71', note: { en: 'Conformance belongs to a deployment — never a product, platform or organisation in the abstract, and the first platform bound is the author’s own. Nine published fields; full-scope assessment or the claim is styled partial; twelve-month maximum validity; the enabling claim requires a live, publicly linked customer declaration. A published declaration is an actionable commercial representation: substantiate before publishing, withdraw promptly on lapse.', es: 'La conformidad pertenece a un deployment — nunca a un producto, plataforma ni organización en abstracto, y la primera plataforma atada es la del propio autor. Nueve campos publicados; evaluación de alcance completo o el claim se rotula parcial; validez máxima de doce meses; el claim de habilitación exige una declaración de cliente viva y enlazada públicamente. Una declaración publicada es una representación comercial accionable: sustanciar antes de publicar, retirar pronto al vencer.' } },
    ] },
  ],
};

export const VERSIONING_POLICY: T = {
  en: 'Clause text changes require a version bump and a Board vote. Notes, examples and commentary may be corrected between versions without amending the standard. Every published version stays at its own permanent address so that a citation made today still resolves in five years. The first digit of a clause number names its block, so a new clause takes the next free number inside its block’s decade — thematic order and citation stability no longer trade against each other. A block that reaches nine clauses is not asking for a tenth; it is asking to be split, and splitting blocks is major-version work for the Board. Within a version, changelog entries are drafting history in reverse chronological order: where several touch the same clause, the newest account governs and the older ones stand as record.',
  es: 'Cambiar el texto de una cláusula exige subir de versión y una votación del Board. Notas, ejemplos y comentario pueden corregirse entre versiones sin enmendar el estándar. Toda versión publicada permanece en su propia dirección permanente para que una cita hecha hoy siga resolviendo en cinco años. El primer dígito del número de una cláusula nombra su bloque, así que una cláusula nueva toma el siguiente número libre dentro de la decena de su bloque — el orden temático y la estabilidad de citas ya no se intercambian. Un bloque que llega a nueve cláusulas no está pidiendo una décima; está pidiendo partirse, y partir bloques es trabajo de versión mayor para el Board. Dentro de una versión, las entradas del changelog son historia de redacción en orden cronológico inverso: donde varias tocan la misma cláusula, gobierna el relato más nuevo y las anteriores quedan como registro.',
};
