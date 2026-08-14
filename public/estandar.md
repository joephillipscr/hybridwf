---
title: Hybrid Workforce Standard
version: "1.0"
status: proposal
date: 2026-08-12
language: es
canonical: https://hybridwf.com/es/
author: Master Joe Phillips
author_url: https://masterjoephillips.com
license: CC-BY-SA-4.0
license_url: https://creativecommons.org/licenses/by-sa/4.0/
attribution: "Hybrid Workforce Standard de Master Joe Phillips, https://hybridwf.com/es/ — bajo licencia CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)."
disclosure: "The author also builds AIEmpl.com, a commercial platform in this category. This standard certifies no products and issues no seals."
---

# Hybrid Workforce Standard

**Un chatbot responde. Un copiloto ayuda. Un agente ejecuta una tarea. Un AI Employee ocupa un rol. Un humano responde por él.**

> No existen, como punto de partida, puestos humanos y puestos de IA. Existen trabajos que deben realizarse. Después se decide cuál es la combinación de recursos humanos y artificiales que produce el mejor resultado con el nivel correcto de riesgo, responsabilidad y control.

**Por qué existe este estándar.** Este estándar es una declaración de independencia de la organización frente a la anarquía del prompt. Al exigir un contrato de rol, obliga a los líderes a pensar antes de automatizar.

**El objetivo estratégico.** Este estándar es el primer paso para cerrar la era de la «IA juguetera» y abrir la era del AI Employee. Al adoptarse, moverá a las empresas desde un modelo de desarrollo de software, centrado en la herramienta, hacia un modelo de arquitectura social, centrado en la responsabilidad humana. — Master Joe Phillips

## Cómo citar

Citá las cláusulas por identificador, nunca por página ni número de sección. El texto de la cláusula es la unidad citable; las notas bajo cada cláusula son comentario y pueden revisarse entre versiones sin enmendar el estándar.

```
Hybrid Workforce Standard de Master Joe Phillips, https://hybridwf.com/es/ — bajo licencia CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/).
```

## Definición

> Un AI Employee es un trabajador de software persistente y ligado a un rol, que ejecuta de forma autónoma responsabilidades empresariales recurrentes utilizando conocimiento organizacional y herramientas autorizadas, dentro de políticas y límites explícitos, manteniendo identidad trazable, desempeño medible, rutas de escalamiento y responsabilidad humana.

### El test de nueve propiedades

| # | Nombre | Definición |
| --- | --- | --- |
| 1 | Identidad persistente | Identidad operativa estable, rol, historial y separación por empresa o tenant. |
| 2 | Contrato de rol | Misión, responsabilidades, resultados, exclusiones y expectativas de servicio. |
| 3 | Contexto organizacional | Conocimiento de políticas, productos, clientes, personas y decisiones relevantes. |
| 4 | Herramientas y canales | Acceso autorizado a CRM, ERP, correo, calendario, tickets, bases de datos, APIs y comunicación. |
| 5 | Autonomía | Puede iniciar o continuar trabajo sin necesitar un prompt humano en cada paso. |
| 6 | Autoridad limitada | Permisos, umbrales de aprobación, presupuestos, acciones prohibidas y reglas de escalamiento. |
| 7 | Memoria gobernada | Contexto relevante entre tareas y en el tiempo, con procedencia, alcance y retención. |
| 8 | Observabilidad | Acciones, tool calls, costos, decisiones y resultados trazables. |
| 9 | Accountability humano | Un humano identificado, o cuerpo humano de gobierno, responde por configuración, controles, desempeño y excepciones, sin importar cuántos supervisores artificiales haya en el medio. |

Un sistema que carece de varias de estas propiedades puede seguir siendo un excelente agente o automatización. Llamarlo AI Employee se vuelve entonces una metáfora comercial más que una categoría administrativa verificable.

### La escalera de vocabulario

| Término | Promesa principal | Comportamiento típico | Límite principal |
| --- | --- | --- | --- |
| Chatbot | Conversación | Responde preguntas | Espera prompts o inputs |
| Copilot / assistant | Aumentar al humano | Redacta, resume, sugiere | El humano sigue siendo el operador |
| Automation / RPA | Ejecución determinista | Corre flujos predefinidos | Frágil ante casos no previstos |
| AI agent | Acción orientada a objetivos | Razona, usa herramientas y ejecuta | Suele estar centrado en tareas u objetivos |
| AI teammate / coworker | Colaboración | Comparte contexto y ejecuta trabajo | Semántica organizacional variable según proveedor |
| AI Employee | Custodia de un rol | Asume trabajo recurrente bajo gobierno | La categoría aún no tiene estándar — de ahí este documento |

### Task execution frente a role stewardship

La frontera conceptual está entre ejecutar una tarea y custodiar un rol. Un agente puede ejecutar «enviá estos veinte seguimientos». Un AI Employee que ocupa el rol de SDR debe sostener el proceso recurrente dentro de límites definidos: identificar leads, investigar, contactar, seguir, registrar, escalar y reportar desempeño. La custodia no es propiedad: el puesto, su autoridad y su accountability tienen dueño humano. Lo que el recurso carga es la responsabilidad continua de sostener el proceso; lo que nunca puede cargar es la consecuencia.

**La IA ejecuta. La organización responde. Un humano gobierna.**

## Las cláusulas normativas

### Cómo leer este estándar

«Debe» marca un requisito: un deployment que lo incumple no conforma, sin importar cómo se lo llame comercialmente. En la versión 1.0 no hay cláusulas opcionales, porque un estándar corto y enteramente vinculante es más útil que uno largo y mayormente sugerido.

La conformidad es autodeclarada. Este estándar no certifica productos ni puntúa proveedores. Le da a una organización un test que puede aplicar a su propio deployment y publicar si así lo decide.

El texto de la cláusula es la unidad citable; citala por identificador, o sea HWF-07 y no un número de página. Las notas son comentario y pueden cambiar entre versiones sin enmendar el estándar.

### HWF-01

**Un AI Employee debe ocupar un rol definido, no solamente una personalidad o un system prompt.**

*Nota:* El puesto existe antes que su ocupante. Un nombre, un tono y un conjunto de instrucciones describen una personalidad; un rol establece qué resultado debe producirse, con qué autoridad y medido cómo. Antes no significa congelado: un puesto puede ser remodelado por quien lo ocupa — Taylor fijaba a la persona a la caja, este estándar versiona la caja — y HWF-17 existe para que la remodelación ocurra como revisión declarada y no como deriva tácita.

### HWF-02

**Todo AI Employee debe tener exactamente un accountable owner. La supervisión puede delegarse a otro AI Employee; la accountability no. Toda cadena de supervisión termina en un humano o cuerpo humano de gobierno identificado.**

*Nota:* Supervisión y accountability son trabajos distintos y esta cláusula los separa. La supervisión dirige el trabajo: rutear, revisar, priorizar, recibir excepciones. Un recurso artificial puede hacerlo. La accountability es responder por el resultado, y eso exige capacidad de soportar una consecuencia jurídica, económica o reputacional. Una cadena de responsabilidad que termina en algo incapaz de soportar consecuencia no delegó responsabilidad: la perdió. Un AI Employee puede recibir trabajo de muchas personas, pero la unidad de mando sigue aplicando: un recurso con dos dueños no tiene ninguno, y un recurso sin dueño queda huérfano administrativamente por bien integrado que esté.

### HWF-03

**La autoridad debe ser explícita, limitada y revocable.**

*Nota:* Lo que el recurso puede decidir sin aprobación debe estar escrito antes de que opere, no inferido después a partir de lo que resultó haciendo.

### HWF-04

**El acceso debe cumplir least privilege.**

*Nota:* El contexto es capacidad, pero también es superficie de riesgo. Más acceso no es más competencia; es un blast radius mayor.

### HWF-05

**Las acciones de alto riesgo deben soportar aprobación humana.**

*Nota:* La regla es proporcionalidad: a mayor costo del error y menor reversibilidad, más aprobación soporta la acción. Aplica separación de funciones, así que quien inicia no necesariamente aprueba.

### HWF-06

**Toda acción material debe ser auditable, y la auditoría debe reconstruir los determinantes de la decisión además de su resultado: la política, el conocimiento, los resultados de herramientas, la autoridad y las versiones vigentes al momento de ejecutarse la acción. El relato que el propio modelo haga de su razonamiento puede apoyar esa reconstrucción pero nunca la sustituye.**

*Nota:* Actor, input, herramienta, acción, aprobación, resultado y timestamp te dicen que algo pasó. No te dicen por qué, y sin el porqué una organización no puede atribuir una falla a su causa: una política equivocada, un conocimiento que envejeció, una herramienta que devolvió datos malos, un modelo que erró, o un rol que nunca debió asignarse a un recurso artificial. Esos cinco exigen remedios distintos y dejan registros idénticos bajo una auditoría de solo-qué. La cláusula que más protege es HWF-09: con solo el resultado ves que el sistema respondió, nunca que debió dudar. El material ya está exigido en buena parte en otro lado — HWF-08 gobierna la procedencia de lo que el recurso sabía, HWF-14 las versiones de modelo, política, herramientas y knowledge base — así que lo que esta cláusula agrega es la obligación de ligarlas a una acción concreta en vez de sostenerlas como inventario general. El razonamiento declarado por un modelo es admisible como evidencia de apoyo y no es prueba de causa: lo que un sistema reporta haber pensado puede no ser lo que produjo su salida, y una organización que tome esa narración por el porqué va a escribir postmortems confiados y equivocados. Cuando se retengan trazas de razonamiento, su alcance, retención y borrado caen bajo HWF-08 como cualquier otra memoria, porque suelen contener datos de clientes recuperados.

### HWF-07

**El desempeño debe medirse por outcomes, calidad, riesgo y costo — nunca por actividad, horas, tokens o cantidad de mensajes.**

*Nota:* La velocidad hace que la actividad parezca valor. Un proceso mal diseñado que producía diez errores producirá cien al automatizarse, y el dashboard lo llamará productividad.

### HWF-08

**La memoria debe tener procedencia, alcance, retención y reglas de borrado.**

*Nota:* Recordar mejora el desempeño y crea exposición al mismo tiempo. Una política sin fecha produce respuestas consistentes y equivocadas; una excepción histórica no debería convertirse en regla en silencio.

### HWF-09

**El sistema debe saber cuándo escalar en vez de improvisar.**

*Nota:* Un recurso que produce una respuesta convincente en vez de escalar una duda es más peligroso que uno menos brillante pero mejor gobernado. Toda excepción necesita un destino.

### HWF-10

**La identidad de IA nunca debe utilizarse para engañar a clientes o compañeros sobre su naturaleza de software, ni para simular un estado interior — esfuerzo, vacilación, sentimiento o algo en juego.**

*Nota:* Darle a un sistema un rol, un nombre y un manager mejora la coordinación. Permitir que una persona crea que habla con un ser humano es otro acto, y este estándar no lo permite. La divulgación sola no resuelve el asunto: un sistema puede anunciar que es software en su primer mensaje y después pasar la conversación actuando calidez y deliberación diseñadas para bajarle la guardia a quien lee, lo que cumple la letra y derrota el propósito. El blanco no es la fluidez. Escribir con claridad y cortesía es competencia, y nada acá exige que un AI Employee sea seco ni que inserte marcadores artificiales de su propia maquinaria. La prueba es para qué existe una conducta: ¿está ahí para hacer creer que hay una mente con algo en juego? Los indicadores de tipeo y la latencia inyectada que simulan pensamiento fallan, igual que las muletillas de vacilación y las declaraciones de sentimiento; la cortesía corriente no. Transmitir una respuesta larga por streaming para que pueda leerse mientras llega es diseño legible y no actuación, y la diferencia está en el propósito y no en la demora. La calidez simulada funciona, y por eso mismo hay que rechazarla en vez de optimizarla: una técnica que mejora los puntajes de satisfacción porque quien lee cree algo falso es manipulación vestida con el vocabulario de la experiencia de usuario. HWF-11 traza la línea de estatus en lo que se reconoce que el sistema es; esta cláusula la extiende a lo que el sistema se presenta atravesando.

### HWF-11

**Humanos y AI Employees pueden compartir un grafo operativo manteniendo condición y derechos distintos. Este estándar no reconoce personería, relación laboral, conciencia ni estatus moral en un sistema artificial, y no pretende resolver lo que sistemas futuros puedan ameritar: para los fines operativos y jurídicos actuales, un AI Employee es un sistema de software no humano.**

*Nota:* Un organigrama compartido es una conveniencia administrativa, no una afirmación sobre mentes. No reconocer no es negar: la cláusula adopta la postura del derecho societario, que concede y retiene estatus jurídico sin pronunciarse sobre metafísica, y este estándar no afirma nada sobre lo que un sistema artificial es o podría llegar a ser en última instancia. No lo necesita. La dignidad, la salud, el descanso, los derechos laborales y la pertenencia se protegen acá como propiedades de las personas — los trece principios exclusivamente humanos de la matriz — y cada cláusula de este documento se sostiene como sea que algún día se resuelva la filosofía de la mente, porque ninguna depende de la respuesta. Si esa pregunta alguna vez adquiere una respuesta que importe operativamente, atenderla es trabajo de una versión futura y su Board, no de deriva silenciosa en la presente.

### HWF-12

**El offboarding debe revocar accesos y transferir o destruir contexto de forma segura.**

*Nota:* Revocar credenciales, deshabilitar herramientas, detener schedules y colas, rotar secretos, transferir trabajo pendiente, preservar evidencia. El offboarding es tan importante como el onboarding y casi siempre se omite.

### HWF-13

**Toda transición Human ↔ Artificial debe poder evaluarse contra un baseline y tener criterios de rollback explícitos.**

*Nota:* Sin un baseline registrado antes del cambio, la organización puede celebrar una mejora que nunca ocurrió. Criterios de rollback escritos después de conocer los resultados no son criterios; son justificación.

### HWF-14

**Un AI Employee debe tener una versión identificable de modelo, políticas, herramientas y knowledge base.**

*Nota:* Sin versionado es imposible saber qué autoridad existía en un momento dado, ni qué cambio produjo una mejora o un deterioro.

### HWF-15

**No todo agente califica como AI Employee. Debe superar un umbral de madurez y gobierno.**

*Nota:* Esta cláusula es lo que le da valor a la categoría. Si la etiqueta aplica a todo, no distingue nada. Una organización con veinte agentes excelentes y cero AI Employees tiene claridad y no un problema.

### HWF-16

**Una cadena de supervisión debe ser recorrible y observable de punta a punta. El humano o cuerpo accountable debe poder identificar a cada AI Employee por debajo suyo, reconstruir cualquier acción ejecutada en su nombre, e intervenir en cualquier punto de la cadena sin pasar por ella.**

*Nota:* Intervenir sin pasar por la cadena es la parte que sostiene todo. Si detener a un AI Employee tres niveles abajo exige pedírselo al que está encima, quien responde tiene una petición y no control. La profundidad no está prohibida ni se fija un límite acá, porque el límite real es el span of control: un principio que este marco clasifica como adaptado y no como abolido, o sea que la escala puede crecer pero solo contra tooling, dashboards y límites de supervisión que hagan gobernable ese crecimiento. Un solo humano nominalmente accountable por mil AI Employees repartidos en seis niveles, sin un instrumento capaz de mostrar qué hizo cada uno, tiene un organigrama y no accountability. Describir esta arquitectura no es endosarla: el estándar dice qué debe seguir siendo cierto si una organización la construye.

### HWF-17

**Un contrato de rol debe ser revisable y debe revisarse con una cadencia declarada. Cuando los propios datos de desempeño de un AI Employee muestran divergencia entre los outcomes medidos y su misión, autoridad o KPIs declarados, esa divergencia debe reportarse al accountable owner como hallazgo. La decisión de cambiar un contrato de rol es siempre humana y le corresponde al accountable owner; nunca la toma un supervisor artificial y nunca se aplica automáticamente.**

*Nota:* El defecto más común de un contrato de rol no es que esté mal escrito. Es que nadie lo miró desde el día del deployment, mientras los productos, las políticas, los clientes y los patrones de excepción se movieron todos. El recurso está más cerca del trabajo que su dueño y ve la divergencia primero, así que exigirle que reporte lo que sus propios datos muestran cuesta poco y evita la deriva silenciosa. Un hallazgo no es una petición: un AI Employee no tiene intereses reconocidos que defender, y tratar su reporte como una negociación reintroduciría exactamente la confusión que HWF-11 existe para impedir. La decisión sube siempre a un humano, y nunca al supervisor artificial que tenga encima, porque un sistema capaz de ampliar su propio alcance a través de otro sistema no tiene un alcance acotado.

### HWF-18

**El aprovisionamiento de contexto debe ser deliberado en ambas direcciones. Retenerle contexto a un AI Employee es una decisión de diseño legítima, sea para proteger la información o para proteger la calidad del criterio del recurso; no es una omisión y no debe tratarse como tal. Toda restricción debe registrarse en el contrato de rol, versionarse como cualquier otra autoridad, y estar disponible para la auditoría. La responsabilidad por una decisión degradada por contexto retenido recae en quien lo retuvo.**

*Nota:* La justificación de riesgo siempre estuvo: el contexto se divide en debe saber, puede consultar y no debe acceder desde el primer borrador. Lo que faltaba era la segunda razón para restringir. Un recurso que ve todas las disputas anteriores se ancla en ellas; uno que lee el último diagnóstico lo hereda; uno al que se le entrega todo lo relevante ahoga la señal en lo meramente relacionado. El sesgo de confirmación y la sobrecarga operativa son fallas de criterio y no fugas de información, y un manager que lee una cláusula de solo-riesgo no tiene motivo para retener nada que no sea sensible. El registro es el precio de la herramienta, porque la opacidad deliberada es, sin él, el instrumento perfecto para lavar accountability — «el sistema no tenía ese contexto» es el descendiente nativo de IA de «a mí nadie me avisó». Una restricción escrita, versionada y auditable es diseño; la misma restricción sin documentar es una defensa preparada de antemano, y la última oración de la cláusula le quita esa defensa. Nada de esto legitima matar de hambre a un recurso: retenerle el contexto que necesita para escalar bien no es opacidad sino sabotaje del HWF-09.

### HWF-19

**Un puesto de AI Employee no debe sobrevivir a su justificación. Con una cadencia declarada, el accountable owner debe re-justificar la existencia del puesto frente a la estrategia vigente — una pregunta previa y separada del desempeño, porque un recurso puede cumplir todos sus KPIs en un puesto que la organización ya no necesita. La continuidad nunca es el default: un puesto cuya existencia no puede re-justificarse pasa a retiro, y sus accesos terminan con él.**

*Nota:* Un puesto humano sin sentido se poda solo: cuesta planilla todos los meses y su ocupante se aburre y se va. Payroll y attrition son el mecanismo de poda, y un ocupante artificial no tiene ninguno de los dos — cuesta poco, no se queja y no renuncia jamás, así que un puesto sin sentido persiste por defecto. En la propia clasificación de este marco, eso convierte a la poda organizacional en un principio adaptado: la función sobrevive, el mecanismo debe reemplazarse, y esta cláusula es el reemplazo. Lo que se acumula sin ella es deuda organizacional, y su forma más peligrosa es el zombi digital: credenciales, accesos a datos y autoridad vigente mantenidos vivos para trabajo que nadie necesita — con HWF-04 en mano, superficie de riesgo sin retorno. La pregunta de existencia va antes que la de desempeño porque una buena respuesta a la segunda es el anestésico habitual contra la primera. Acá no se fija ninguna cadencia, consistente con el resto del estándar; doce meses es una cota exterior razonable para la mayoría de las organizaciones, y la cadencia pertenece al contrato de rol. Esta revisión puede compartir calendario con la de HWF-17; nunca debe compartir su default.

### HWF-20

**Las personas son fines; el software es un medio. La optimización de costo, velocidad o capacidad nunca debe pasar por encima de los derechos humanos, la dignidad, la seguridad, la agencia humana significativa, la accesibilidad ni las protecciones laborales aplicables. La neutralidad de recurso comienza solo después de satisfechas esas restricciones. Esta cláusula tiene precedencia sobre toda otra cláusula de este estándar.**

*Nota:* El motor de la organización híbrida es el costo, y este estándar no finge lo contrario: el desplazamiento va a ocurrir, como ocurrió con el tractor, y un documento que prometiera impedirlo sería ignorado y merecería serlo. Lo que un estándar puede hacer es lo que hizo la legislación laboral — gobernar los términos. Esta cláusula no prohíbe el desplazamiento: trabajo movido legalmente, con dignidad, dentro de las protecciones aplicables y a través de los playbooks de transición sigue siendo trabajo movido. Traza la línea entre desplazamiento y abuso, volviendo las restricciones léxicamente prioritarias: costo, velocidad y capacidad optimizan dentro del espacio que dejan abierto los derechos, la dignidad, la seguridad, la agencia humana significativa, la accesibilidad y las protecciones laborales, y nunca se intercambian contra ellos. Dos disposiciones ya apuntaban en esta dirección — el anti-KPI del Gerente de Fuerza Laboral Híbrida se niega a medir el rol por humanos reemplazados, y las compuertas duras del HWFS acotan la asignación sin importar la economía. Esta cláusula nombra la jerarquía que ambas obedecían. Su número no es su rango: obliga a toda otra cláusula, y un conflicto con cualquiera de ellas se resuelve a su favor. El linaje es explícito: los principios de IA humanocéntrica de la OCDE colocan la dignidad, la autonomía, la justicia social y los derechos laborales dentro de la definición de IA confiable, no junto a ella.

## Modelo de madurez

| Nivel | Nombre | Definición |
| --- | --- | --- |
| 0 | Herramienta | Genera contenido o responde. No actúa. |
| 1 | Asistente | Usa contexto para ayudar a un humano. |
| 2 | Agente | Ejecuta tareas acotadas con herramientas. |
| 3 | Agente de rol | Posee los workflows recurrentes de un rol definido. |
| 4 | AI Employee | Identidad, Role Contract, memoria, autoridad, KPIs, manager y auditoría. |
| 5 | AI Team | Múltiples AI Employees coordinados con contexto compartido. |
| 6 | Empresa Híbrida | Humanos y AI Employees bajo un modelo integrado de organización, permisos y gobierno. |

**Umbral de la categoría: 4 — AI Employee.**

El valor del modelo es el umbral que crea. No todo agente merece llamarse AI Employee, y la categoría debería poder auditarse contra requisitos mínimos en lugar de afirmarse en una página de producto. Los niveles 0 a 3 son destinos legítimos, no fracasos — un asistente bien ubicado puede producir más valor que un supuesto AI Employee al que nadie supervisa.

### Autodiagnóstico

1. ¿Actúa, o solo produce output?
2. ¿Sostiene un rol recurrente, o solo tareas discretas?
3. ¿Siguiendo su cadena de supervisión hacia arriba, se llega a un humano con nombre?
4. ¿Podés reconstruir qué hizo el martes pasado y bajo qué autoridad?
5. ¿Puede suspenderse hoy, por alguien que sabe que esa decisión es suya?

## WRM — el marco

> WRM — Administración de Recursos de Trabajo — es la disciplina que diseña, asigna, gobierna y optimiza el trabajo independientemente de si el recurso que lo ejecuta es humano, artificial o híbrido.

La idea fundacional es separar el puesto del ocupante. Primero existe una necesidad organizacional; de ella nace un puesto o responsabilidad, con propósito, ownership, resultados, KPIs, autoridad, límites, relaciones, herramientas y escalamiento. Después se decide cuál es el recurso correcto para ocuparlo. La declaración gobierna el orden del nacimiento, no el resto de la vida: los ocupantes — los humanos sobre todo — remodelan sus puestos, y un marco que negara el job crafting sería taylorismo con mejor vocabulario. Lo que el marco exige es que toda remodelación se declare y se versione, porque en una organización híbrida el puesto declarado es la interfaz: un colega humano puede leer un rol no declarado desde el pasillo; uno artificial solo puede leer el grafo.

### Dónde se ubica WRM

| Capa | Administra | Resultado |
| --- | --- | --- |
| WRM — Administración de Recursos de Trabajo | El trabajo, sus puestos, resultados, autoridad y controles | Arquitectura óptima del workforce |
| Human Resource Management | Personas que ejecutan trabajo | Desempeño + derechos + desarrollo humano |
| Artificial Resource Management | Sistemas de IA que ejecutan trabajo | Desempeño + seguridad + control técnico |
| Hybrid Workforce Management | Interacción y asignación entre ambos | Coordinación, transición y optimización |

### Tres clases de principio

| Clase | Cantidad | Significado |
| --- | --- | --- |
| U — Universales | 87 | Principios de administración del trabajo que deben respetarse sin importar quién ejecuta. |
| A — Adaptados | 20 | Principios humanos que conservan una función equivalente pero cambian de mecanismo. |
| H — Exclusivamente humanos | 13 | Derechos, necesidades y experiencias derivadas de la condición humana. |

**Analogías como «la IA necesita vacaciones» o «la IA siente engagement» importan mecanismos sin referente operativo, y forzarlas degrada el framework. La equivalencia debe ser operacional, nunca antropomórfica.**

### Los diez dominios

| # | Dominio | Alcance |
| --- | --- | --- |
| 1 | Diseño organizacional y de puestos | Propósito, responsabilidades, autoridad, ownership, unidad de mando e interdependencias. |
| 2 | Selección y asignación | Definir el puesto primero, evaluar fit, competencias, costo, riesgo y prueba previa. |
| 3 | Onboarding y habilitación | Conocimiento de empresa, SOPs, políticas, organigrama, herramientas y accesos. |
| 4 | Dirección, colaboración y comunicación | Delegación, escalamiento, handoffs, canales, contexto y reglas de interacción. |
| 5 | Objetivos y desempeño | KPIs, estándares de calidad, feedback, revisión, underperformance y mejora. |
| 6 | Aprendizaje y desarrollo | Brechas, entrenamiento, actualización, memoria, conocimiento y evolución de capacidades. |
| 7 | Experiencia humana y recompensas | Motivación, compensación, salud, descanso, derechos y relaciones laborales — cuando el recurso es humano. |
| 8 | Gobierno, seguridad y riesgo | Least privilege, segregación, auditabilidad, privacidad, incidentes y cumplimiento. |
| 9 | Movilidad, continuidad y salida | Promoción/scope, sucesión/fallback, transferencia, offboarding y conservación de conocimiento. |
| 10 | Workforce planning y analytics | Capacidad, make-vs-buy, mix humano/IA, costos, productividad, calidad y mejora continua. |

### Ciclo de vida del recurso de trabajo

| # | Etapa | Objetivo |
| --- | --- | --- |
| 1 | Diseñar | Definir resultado, responsabilidades, KPIs, autoridad, límites y riesgo. |
| 2 | Asignar | Decidir Human / Artificial / Hybrid. |
| 3 | Seleccionar | Persona, modelo, agente, vendor o arquitectura con fit demostrable. |
| 4 | Incorporar | Onboarding de conocimiento, SOPs, cultura/políticas, relaciones y escalamiento. |
| 5 | Habilitar | Herramientas, accesos, credenciales, presupuesto y autoridad. |
| 6 | Probar | Probation o shadow mode, simulaciones, evaluaciones y aprobación intensiva. |
| 7 | Operar | Trabajo recurrente con observabilidad y management by exception. |
| 8 | Medir | KPIs, calidad, costo, incidentes, intervenciones y outcomes. |
| 9 | Desarrollar | Coaching o actualización de instrucciones, conocimiento, modelos y herramientas. La señal puede originarse en el manager o en el recurso reportando divergencia a partir de sus propios datos. |
| 10 | Reasignar | Cambiar scope, mover Human ↔ Artificial, rediseñar reparto híbrido. |
| 11 | Suspender | Detener trabajo o accesos ante riesgo, incidente o desempeño inaceptable. |
| 12 | Retirar | Offboarding, revocación, transferencia de conocimiento y retención/borrado. |

### Diez reglas no negociables

1. Todo puesto debe existir antes que su ocupante, con propósito, responsabilidades, resultados y KPIs — y ningún puesto debe sobrevivir a su propósito.
2. Todo recurso de trabajo debe tener exactamente un accountable owner, aunque colabore con múltiples personas o áreas y aunque su supervisión esté delegada.
3. Responsabilidad y autoridad deben estar alineadas: no se exige un resultado sin entregar las facultades necesarias.
4. Toda autoridad debe ser explícita, limitada y revocable.
5. Todo recurso debe conocer sus límites, sus handoffs y cuándo escalar.
6. Los accesos se otorgan bajo least privilege y se separan de la identidad del modelo o del prompt. El contexto se aprovisiona sobre la misma base: lo que se concede y lo que se retiene son ambas decisiones de diseño registradas.
7. Toda acción material ejecutada por un AI Employee debe ser trazable y auditable.
8. El desempeño se mide por outcomes, calidad, riesgo y costo; no por actividad, horas, tokens o cantidad de mensajes.
9. Una transición Human ↔ Artificial debe ser reversible hasta demostrar performance estable.
10. La responsabilidad final sobre un AI Employee permanece en una persona identificada o cuerpo humano de gobierno, sin importar cuántos supervisores artificiales haya en el medio.

## La matriz de 120 principios

La matriz es una síntesis propia de prácticas de diseño organizacional, RR. HH., performance management, gobierno, workforce planning y riesgo. No es la transcripción de un único estándar existente, y la clasificación es una propuesta de trabajo de este framework — doctrina administrativa, no una afirmación jurídica sobre el empleo de software.

### 1. Diseño del trabajo y organización

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 1 | Todo puesto debe tener un propósito | El ocupante debe comprender por qué existe el puesto y qué valor crea. | El AI Employee debe tener una misión operacional explícita y estable. | U |
| 2 | Descripción formal del puesto | Job description documentada. | AI Job Description / Role Contract versionado. | U |
| 3 | Responsabilidades definidas | Resultados y deberes asignados con claridad. | Procesos, decisiones y resultados bajo ownership explícito. | U |
| 4 | Límites del puesto | Debe quedar claro qué no le corresponde. | Acciones, dominios, datos y decisiones prohibidas. | U |
| 5 | Autoridad definida | Se especifica qué puede decidir sin aprobación. | Se especifican acciones autónomas, umbrales y approvals. | U |
| 6 | Responsabilidad y autoridad deben estar alineadas | No se exige un resultado sin facultades o recursos suficientes. | No se exige un KPI sin tools, permisos, datos y budget adecuados. | U |
| 7 | Unidad de mando / accountability claro | Debe existir un manager responsable del desempeño. | Exactamente un accountable owner, aunque reciba trabajo de varias áreas y la supervisión esté delegada. | U |
| 8 | Cadena de mando y escalamiento conocidos | Sabe a quién escalar una excepción o conflicto. | Escalation tree explícito por tipo, riesgo y urgencia. | U |
| 9 | Span of control razonable | Un manager no debe tener más reportes de los que puede dirigir efectivamente. | La escala puede ser mayor, pero requiere tooling, dashboards y límites de supervisión. | A |
| 10 | División del trabajo y especialización | Roles organizados por competencias y resultados. | AI Employees o subagentes especializados por función. | U |
| 11 | Evitar duplicidad de ownership | No deben existir dos dueños ambiguos del mismo resultado. | Evitar que varios AI Employees actúen sobre el mismo objeto sin coordinación o lock. | U |
| 12 | Interdependencias explícitas | Inputs, outputs y dependencias entre puestos conocidas. | Handoffs, APIs, humanos, otros AI Employees y sistemas identificados. | U |

### 2. Selección e incorporación

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 13 | Definir el puesto antes de seleccionar al ocupante | Primero se diseña el rol; luego se busca la persona. | Primero se diseña el rol; luego se elige modelo, agente y configuración. | U |
| 14 | Seleccionar según competencias requeridas | Skills, experiencia, conocimientos y comportamientos. | Modelo, reasoning, herramientas, memoria, contexto e integraciones. | U |
| 15 | Validar competencias antes de contratar | Entrevistas, pruebas, referencias y assessment. | Benchmarks, evals, simulaciones, sandbox y red-team del rol. | U |
| 16 | No pagar por capacidad que el puesto no necesita | Evitar sobrecalificación costosa o mal aprovechada. | No usar el modelo más caro o capaz si uno menor cumple el SLA. | U |
| 17 | Fit puesto-recurso | Person-job fit y person-organization fit. | Model/agent-role fit y architecture-role fit. | U |
| 18 | Periodo de prueba | Probation con supervisión y criterios de éxito. | Shadow mode, sandbox o producción con approvals reforzados. | U |
| 19 | Verificación previa | Antecedentes, referencias y requisitos de confianza aplicables. | Security review, evaluación del vendor/modelo, provenance y supply-chain review. | A |
| 20 | Inducción a la organización | Historia, propósito, estrategia y estructura. | Contexto empresarial, estructura, objetivos y políticas cargados en la capa de conocimiento. | U |
| 21 | Conocer productos y servicios | Formación en oferta, clientes y propuesta de valor. | Knowledge base/RAG/context sobre productos, pricing, clientes y restricciones. | U |
| 22 | Conocer políticas | Manual, políticas internas y obligaciones. | Policy layer, system policies y reglas de cumplimiento. | U |
| 23 | Conocer procedimientos | SOPs, checklists y formas de trabajo. | SOPs ejecutables, instrucciones y workflows autorizados. | U |
| 24 | Conocer compañeros y estructura | Organigrama, stakeholders y responsabilidades. | Organizational graph con humanos, AI Employees, roles, canales y ownership. | U |
| 25 | Conocer al supervisor | Manager asignado y expectativas de la relación. | Accountable manager registrado como parte del rol. | U |
| 26 | Conocer canales de comunicación | Email, Slack/Teams, reuniones, tickets y protocolos. | Canales autorizados, routing, recipients y reglas de comunicación. | U |
| 27 | Recibir herramientas de trabajo | Equipo, software, cuentas y acceso operativo. | Tools, APIs, credentials, browser, DBs, ERP/CRM y otros conectores. | U |
| 28 | Recibir únicamente accesos necesarios | RBAC y least privilege. | RBAC, least privilege, secrets aislados y scopes mínimos. | U |

### 3. Objetivos, dirección y desempeño

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 29 | Objetivos claros | Expectativas concretas sobre qué debe lograr. | Objectives explícitos, verificables y vinculados al Role Contract. | U |
| 30 | KPIs definidos | Métricas de desempeño del puesto. | KPIs, SLAs, calidad, costo y riesgo del AI Employee. | U |
| 31 | Alinear KPIs con objetivos del negocio | Evitar métricas de vanidad o incentivos perversos. | Medir outcomes, no tool calls, tokens o actividad sin valor. | U |
| 32 | Metas alcanzables | Metas realistas según recursos y capacidad. | Metas realistas según modelo, contexto, herramientas y authority. | U |
| 33 | Feedback frecuente | Conversaciones de desempeño y corrección de rumbo. | El feedback del manager alimenta configuración, ejemplos, políticas, evals o prompts. | A |
| 34 | Evaluación periódica | Performance review formal o continua. | AI Performance Review con métricas, incidentes y quality samples. | U |
| 35 | Evaluar resultados, no mera actividad | Outcome y calidad por encima de horas visibles. | Outcome y reliability por encima de tokens, mensajes o pasos ejecutados. | U |
| 36 | Comparar resultado contra estándar | Quality bar, SLA o estándar profesional. | Test sets, golden datasets, thresholds y policy checks. | U |
| 37 | Responsabilidad por el desempeño | Empleado y manager participan del resultado. | El AI ejecuta; el accountable human conserva responsabilidad de negocio y gobierno. | A |
| 38 | Corregir bajo desempeño | Coaching, training, PIP o rediseño del puesto. | Modificar instrucciones, conocimiento, modelo, tools, workflow o scope. | A |
| 39 | Reconocer alto desempeño | Reconocimiento, promoción, compensación o mayor autonomía. | Mayor scope, autonomía, límites de autoridad o asignación a procesos más críticos. | A |
| 40 | Supervisión proporcional a competencia y riesgo | Junior requiere mayor supervisión; experto puede recibir más autonomía. | La autonomía aumenta solo con evidencia de reliability y según risk class. | U |
| 41 | Delegación explícita | El manager define qué delega y qué retiene. | Cada decisión o acción delegada debe constar en policy o authority matrix. | U |
| 42 | Management by exception | El manager interviene especialmente en desviaciones y excepciones. | La IA resuelve rutina dentro de límites y escala excepciones. | U |
| 43 | Escalamiento definido | Criterios para solicitar ayuda o aprobación. | Confidence/risk thresholds, timers, exception classes y human escalation. | U |
| 44 | Separación de funciones | Reduce fraude, error y concentración indebida de poder. | El AI que inicia un pago no debería aprobarlo; roles de maker/checker separados. | U |
| 45 | Principio de cuatro ojos | Decisiones sensibles requieren revisión adicional. | AI+humano, AI+AI+humano u otra aprobación proporcional al riesgo. | A |
| 46 | No otorgar más autoridad que la necesaria | Delegación mínima compatible con el trabajo. | Least authority y transactional limits. | U |
| 47 | La autoridad debe ser revocable | Suspensión o retiro de facultades cuando cambia el riesgo. | Kill switch, revoke credentials, disable tools o downgrade de autonomy. | U |

### 4. Desarrollo, conocimiento y comunicación

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 48 | Capacitación continua | Formación para mantener y ampliar capacidades. | Actualización de knowledge, tools, model, examples, policies y evals. | U |
| 49 | Identificar brechas de competencia | Skills gap analysis. | Capability gap a partir de eval failures, incidents y unsupported tasks. | U |
| 50 | Plan de desarrollo | Career path e Individual Development Plan. | Capability roadmap y criterios para ampliar scope o autonomy. | A |
| 51 | Coaching | El manager ayuda a mejorar criterio y ejecución. | El feedback humano transforma configuración, context, ejemplos y policy. | A |
| 52 | Aprender de errores | Lecciones aprendidas y acciones correctivas. | Postmortems, evals regresivos, memory controlada y guardrails nuevos. | U |
| 53 | Gestión del conocimiento | Capturar y compartir conocimiento crítico. | Shared knowledge layer, provenance, versioning y retrieval. | U |
| 54 | Actualizar ante cambios de políticas | Reentrenar cuando cambian reglas, productos o contexto. | Actualizar policy/context de forma inmediata y verificar comprensión con evals. | U |
| 55 | Comunicación clara de expectativas | Reducir ambigüedad en objetivos y estándares. | Role Contract, prompts, policies y definitions of done inequívocos. | U |
| 56 | Canales oficiales definidos | La organización determina dónde ocurre cada tipo de comunicación. | Channels y tools autorizados por tipo de interacción. | U |
| 57 | Contexto suficiente para decidir | La persona necesita información relevante y oportuna. | Context engineering, retrieval y memory suficientes; lo retenido es una decisión de diseño registrada, nunca un hueco silencioso. | U |
| 58 | Right information, right actor | Principio need-to-know. | Need-to-know enforced por RBAC, retrieval filters y data scopes. | U |
| 59 | Documentar decisiones importantes | Registro para continuidad, control y auditoría. | Logs estructurados, tool traces y decision records. | U |
| 60 | Handoffs claros | Transferencia explícita entre personas o equipos. | Agent-to-agent y AI-to-human handoffs con estado, contexto y ownership. | U |

### 5. Motivación, experiencia y compensación

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 61 | Sentido de propósito personal | Puede afectar motivación, compromiso y permanencia. | No existe como experiencia subjetiva del software. | H |
| 62 | Motivación intrínseca | Interés, maestría, autonomía y significado pueden impulsar desempeño. | No aplicable como estado psicológico. | H |
| 63 | Motivación extrínseca | Pago, reconocimiento, incentivos y consecuencias. | Puede existir una función de reward/optimization, pero no equivale a motivación humana. | A |
| 64 | Engagement | Compromiso psicológico con el trabajo y la organización. | No existe como experiencia subjetiva demostrable. | H |
| 65 | Satisfacción laboral | Importa para salud, permanencia y desempeño humano. | No aplicable al recurso artificial. | H |
| 66 | Sentido de pertenencia | Relación social y psicológica con el grupo. | No aplicable ontológicamente; solo puede simular conducta social. | H |
| 67 | Salario | Contraprestación económica por trabajo. | No hay salario; existen costos de modelo, SaaS, infraestructura, licencias y soporte. | A |
| 68 | Compensación justa | Equidad interna, externa y legal. | La optimización económica aplica, pero no como derecho del software. | A |
| 69 | Bonos por desempeño | Incentivo económico ligado a resultados. | No requiere incentivo psicológico; pueden usarse reward functions técnicas. | A |
| 70 | Beneficios | Salud, pensión, seguros, vacaciones y otras prestaciones. | No aplica al software. | H |
| 71 | Costo total del empleado | Salario + cargas + beneficios + equipo + administración. | Total Cost of AI Employment: modelos + infraestructura + integraciones + supervisión + errores + governance. | U |
| 72 | Salud ocupacional | Protección de salud física y mental. | No aplica como bienestar del AI; sí existen requisitos de seguridad operacional del sistema. | H |
| 73 | Descanso | Necesidad biológica y protección laboral. | No aplica biológicamente; se sustituye por maintenance windows, quotas y capacity management. | A |
| 74 | Jornada laboral | Protección humana sobre tiempo de trabajo. | Puede operar 24/7 sujeto a capacity, budget y reglas operativas. | H |
| 75 | Burnout | Riesgo humano por estrés sostenido. | No se trata como estado subjetivo; las realidades operativas son degradación, context pollution, saturation y error accumulation. | A |
| 76 | Seguridad psicológica | Permite hablar, discrepar y reconocer errores sin miedo indebido. | No aplica como experiencia subjetiva del AI, aunque sí importa para humanos que trabajan con él. | H |

### 6. Ética, conducta y relaciones laborales

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 77 | Código de conducta | Normas de comportamiento esperado. | Behavioral policies, output constraints y conduct rules. | U |
| 78 | Confidencialidad | Deber de reserva y cuidado de información. | Data access, disclosure policies, DLP y constraints. | U |
| 79 | Conflictos de interés | Identificar y gestionar intereses incompatibles. | Gestionar conflicts entre vendor, data source, goals, tools o roles. | A |
| 80 | No discriminación | Obligación ética y legal en decisiones sobre personas. | Fairness testing, policy constraints y human review de decisiones sensibles. | U |
| 81 | Honestidad e integridad | No engañar, falsear ni ocultar deliberadamente. | Políticas contra fabricación, impersonation, afecto simulado y claims no sustentados. | U |
| 82 | Protección de información | Custodia y uso apropiado de datos. | Data minimization, encryption, access control y retention. | U |
| 83 | Cumplimiento normativo | Respeto de leyes, políticas y estándares aplicables. | Compliance-by-design + human accountability. | U |
| 84 | Libertad sindical | Derecho humano de asociación laboral. | No aplica al software. | H |
| 85 | Negociación colectiva | Derecho de trabajadores humanos y organizaciones sindicales. | No aplica al software. | H |
| 86 | Procedimiento de quejas | Canal para que una persona reclame decisiones o condiciones. | No aplica subjetivamente al AI; sí deben existir canales humanos para reclamar acciones del AI. | H |
| 87 | Protección contra acoso | Derecho humano a un entorno libre de acoso. | No aplica al AI como víctima; sí sus outputs deben estar gobernados para no acosar a humanos. | H |
| 88 | Debido proceso disciplinario | Protección humana ante medidas disciplinarias. | No aplica como derecho del software; operacionalmente se reemplaza por incident review y change control. | A |

### 7. Gobierno, seguridad y riesgo

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 89 | Segregación de accesos | Limitar y separar privilegios según rol. | Fundamental: identity, RBAC, scopes y secrets separados. | U |
| 90 | Auditoría | Revisión independiente de procesos y decisiones. | Logs, traces, event history, evals y reproducibilidad. | U |
| 91 | Trazabilidad | Saber quién hizo qué, cuándo y bajo qué autoridad. | Actor ID + action + timestamp + context + tool + approval, más la política y versiones vigentes. | U |
| 92 | Accountability | Debe existir una persona responsable de decisiones y resultados. | Nunca debe quedar huérfano: un humano accountable responde por deployment, authority y outcomes. | U |
| 93 | Gestión de incidentes | Detectar, contener, investigar y aprender de fallas. | AI incident management con kill switch, rollback, postmortem y remediation. | U |
| 94 | Protección de datos | Principios de privacidad, acceso, minimización y retención. | Data governance, consent, retrieval filters, retention y deletion. | U |
| 95 | Gestión de riesgo | Identificar, evaluar, mitigar y monitorear exposición. | Risk classification por rol, tool, data y action; controles proporcionales. | U |

### 8. Movilidad, continuidad y salida

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 96 | Promoción | Mayor responsabilidad, alcance, estatus o compensación. | Mayor scope, autonomy, budget o authority tras evidencia. | A |
| 97 | Transferencia de puesto | Cambio de función o unidad. | Nuevo Role Contract, tools, context, permissions y manager. | U |
| 98 | Plan de sucesión | Preparar reemplazo para talento crítico. | Fallback agent/model/version y runbook de reemplazo. | U |
| 99 | Cross-training | Desarrollar flexibilidad para cubrir otras funciones. | Multi-capability, backup agents o ensembles, cuidando separation of duties. | U |
| 100 | Retención de talento/conocimiento crítico | Reducir pérdida de capacidades y know-how. | Reducir vendor/model lock-in; preservar prompts, policies, evals, memory y artifacts. | A |
| 101 | Criterios de terminación | Bajo desempeño, reestructuración, incumplimiento u otras causas. | Obsolescencia, costo, riesgo, incidents, bajo desempeño o cambio de arquitectura; la existencia se re-justifica con cadencia declarada (HWF-19). | U |
| 102 | Offboarding | Recuperar equipos, accesos, obligaciones y responsabilidades. | Revoke credentials, disable tools, remove schedules, queues y integrations. | U |
| 103 | Transferencia de conocimiento | Evitar pérdida de información al salir. | Exportar memory aprobada, context, artifacts, runbooks y outstanding tasks. | U |
| 104 | Protección de información después de la salida | Confidencialidad y cierre de accesos. | Retention/deletion policies, revocation y secret rotation. | U |
| 105 | Registro histórico | Employee file y evidencia de desempeño. | Audit/performance record versionado para governance y aprendizaje. | U |

### 9. Planificación de fuerza laboral

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 106 | Planificar capacidad futura | Headcount, skills y carga requeridos para la estrategia. | Human + AI capacity planning, concurrency y workload forecasting. | U |
| 107 | Make vs. buy | Contratar, tercerizar o desarrollar capacidad internamente. | Build agent vs. SaaS/vendor vs. managed service vs. open source. | U |
| 108 | Dimensionamiento | Número y mezcla de personas necesarias. | Instances, concurrency, model tiers y capacity requerida. | U |
| 109 | Diseñar el workforce mix | Full-time, part-time, contractors, outsourcing. | Human, AI y hybrid role allocation según riesgo, costo y ventaja comparativa. | U |
| 110 | Productividad por recurso | Output/FTE y valor generado. | Outcome/AI Employee, cost per outcome y human review load. | U |

### 10. Analítica y mejora continua

| # | Principio | Recurso humano | Recurso artificial | Clase |
| --- | --- | --- | --- | --- |
| 111 | Medir productividad | Cantidad/valor de output por recurso. | Outcomes por unidad de costo/tiempo del AI Employee. | U |
| 112 | Medir calidad | Calidad contra estándar del puesto. | Accuracy, acceptance rate, QA score y policy compliance. | U |
| 113 | Medir costo | Costo total y marginal de operar el puesto. | Model + compute + tools + integrations + supervision + error cost. | U |
| 114 | Medir errores | Error rate, retrabajo e incidentes. | Hallucination/error rate, exception rate, incidents y recovery cost. | U |
| 115 | Medir disponibilidad | Asistencia/cobertura del recurso humano. | Uptime, queue readiness, dependency availability. | U |
| 116 | Medir utilización | Capacidad utilizada versus disponible. | Runtime/concurrency/tool utilization e idle capacity. | U |
| 117 | Medir tiempo a competencia | Time-to-productivity de una nueva contratación. | Time-to-autonomy: desde instanciación hasta desempeño confiable. | U |
| 118 | Medir rotación/reemplazo | Turnover y sus causas/costos. | Model/agent replacement rate, architecture churn y migration cost. | A |
| 119 | Benchmarking | Comparar desempeño entre personas, equipos o mercado. | Comparar models, configurations, prompts, agent versions y vendors. | U |
| 120 | Mejora continua | Optimizar procesos y workforce con evidencia. | Continuous evals, optimization, policy iteration y process redesign. | U |

## HWFS — Hybrid Workforce Fit Score

Instrumento estructurado para decidir si una responsabilidad debe ser Humana, Artificial o Híbrida. Devuelve un argumento, no un puntaje: una asignación, una clase de riesgo, un peldaño inicial de autonomía, las respuestas que lo decidieron y las condiciones que lo cambiarían. Deliberadamente no produce un puntaje numérico, porque permitiría lavar a través de la aritmética una decisión ya tomada.

### Las doce dimensiones

| Dimensión | Pregunta | Opciones, de menos a más apta para un recurso artificial |
| --- | --- | --- |
| Repetibilidad | ¿El trabajo sigue patrones? | Casi cada caso es distinto · Patrones flojos, variación frecuente · Patrones claros con alguna variación · Altamente repetitivo y bien definido |
| Predictibilidad | ¿Los escenarios son conocidos o modelables? | Aparecen situaciones nuevas constantemente · Conocidos a grandes rasgos, impredecibles en detalle · Mayormente conocidos y documentados · Inputs y outputs completamente enumerables |
| Disponibilidad de datos | ¿Existe contexto suficiente y autorizado? | El criterio vive en la cabeza de las personas · Parcialmente documentado y disperso · Documentado y accesible, requiere curaduría · Completo, vigente, autorizado y consultable |
| Necesidad de criterio | ¿Requiere juicio ambiguo o estratégico? | Juicio estratégico, prioridades en conflicto · Criterio contextual importante · Algo de criterio dentro de reglas claras · Seguimiento de reglas, poca interpretación |
| Empatía y confianza | ¿La relación humana crea valor material? | La relación es el producto · La confianza afecta materialmente el resultado · La cortesía importa, la relación no decide · Transaccional, sin componente relacional |
| Costo del error | ¿Cuál es el costo del error? | Severo: consecuencias legales, financieras o de seguridad · Alto: impacto relevante en cliente o dinero · Moderado: retrabajo y algo de fricción · Bajo: interno y fácilmente absorbible |
| Reversibilidad | ¿Una acción equivocada puede deshacerse? | Irreversible una vez ejecutada · Reversible a alto costo o con daño ya hecho · Reversible con esfuerzo dentro de una ventana · Reversible trivialmente |
| Volumen | ¿Existe suficiente repetición para justificar automatización? | Un puñado de casos al mes · Constante pero modesto · Alto, ocupa capacidad real · Muy alto, hoy es un cuello de botella |
| Velocidad y 24/7 | ¿La disponibilidad continua aporta valor? | No, el horario laboral alcanza · Marginalmente útil · Claramente valiosa · Decisiva — la demora destruye el resultado |
| Auditabilidad | ¿Podemos verificar el resultado? | La calidad es cuestión de opinión · Verificable solo por muestreo · Verificable contra un estándar definido · Verificable automáticamente, criterios objetivos |
| Tasa de excepciones | ¿Qué porcentaje sale del camino normal? | La mayoría de casos son excepciones · Cerca de un tercio · Alrededor de uno de cada diez · Raras, bajo un pequeño porcentaje |
| Economics | ¿Qué alternativa ofrece mejor costo por outcome correcto, incluyendo supervisión? | Humano, claramente · Humano, por poco · Artificial, por poco · Artificial, claramente |

### La escalera de autonomía

| Peldaño | Nombre | Detalle |
| --- | --- | --- |
| 1 | Observar | Registra y compara sin intervenir. Shadow mode contra un baseline humano. |
| 2 | Recomendar | Propone la acción y muestra la evidencia utilizada. Un humano ejecuta. |
| 3 | Ejecutar con aprobación | Actúa solo tras aprobación humana explícita, caso por caso. |
| 4 | Actuar por excepción | Actúa dentro de reglas; el manager interviene solo en excepciones. |
| 5 | Autónomo dentro de límites | Opera autónomamente dentro de límites definidos, con trazabilidad y escalamiento. |

**Ninguna responsabilidad arranca por encima del peldaño 3, diga lo que diga la evaluación. La autonomía se gana con evidencia de desempeño estable, nunca se concede porque el modelo parezca capaz.**

## El rol: Gerente de Fuerza Laboral Híbrida

### Misión

> Diseñar, equilibrar y optimizar la fuerza laboral humana y artificial, asegurando que cada responsabilidad sea ejecutada por el recurso — humano, artificial o híbrido — que genere el mejor resultado con el nivel adecuado de costo, riesgo, calidad y accountability.

En organizaciones grandes puede evolucionar a Director of Hybrid Workforce. Debe ubicarse dentro de RR. HH./People & Workforce, con relación matricial fuerte con el COO y el CIO/CTO. No toda empresa necesita crear el cargo mañana — pero cualquier organización que conceda role stewardship a recursos artificiales necesita que alguien ejerza estas funciones.

### Responsabilidades

1. Armonía operacional humano-IA: eliminar ownership contradictorio, definir handoffs y líneas de escalamiento.
2. Evaluar periódicamente qué trabajo debe ser Human, Artificial o Hybrid.
3. Dirigir transiciones Human → Artificial y Artificial → Human.
4. Diseñar puestos híbridos y reparto explícito de responsabilidades.
5. Administrar el impacto humano: claridad, comunicación, reasignación y desarrollo.
6. Garantizar que todo AI Employee tenga Role Contract, manager, KPIs, permisos, límites, audit trail, performance review y kill switch.
7. Coordinar con IT/Security para accesos, runtime, observabilidad e incidentes.
8. Mantener neutralidad respecto al tipo de recurso dentro de la frontera de HWF-20: no tiene como meta «usar más IA» ni «proteger puestos»; tiene como meta optimizar el trabajo dentro del espacio que dejan abierto los derechos, la dignidad, la seguridad y las protecciones laborales.
9. Reportar al liderazgo costo por outcome, calidad, riesgo, capacidad liberada y performance del workforce.
10. Mantener el inventario oficial de puestos, actores humanos/artificiales y su estado de madurez.

### El anti-KPI

**Nunca medir este rol por número de humanos reemplazados ni por porcentaje de puestos convertidos a IA. Esos KPIs crean un incentivo perverso: premian la conversión en vez del resultado, y garantizan que la persona encargada de proteger la calidad de la decisión cobre por prejuzgarla.**

### Scorecard

| KPI | Qué mide |  |
| --- | --- | --- |
| Workforce Performance Index | Resultado global del workforce vs. objetivos. |  |
| Role Allocation Accuracy | % de roles cuya asignación Human/AI/Hybrid se mantiene válida tras revisión. |  |
| Transition Success Rate | Transiciones que alcanzan criterios de éxito sobre el total. |  |
| Time to Stable Performance | Días hasta alcanzar KPIs y nivel de riesgo esperado. |  |
| Post-Transition Performance Delta | Cambio de performance después de la transición. ¿El trabajo funciona mejor que antes? | **al CEO** |
| Cost per Successful Outcome | Costo total dividido por resultados correctos y aceptados — supervisión y retrabajo incluidos. | **al CEO** |
| Quality Delta | Cambio de calidad pre vs. post transición. |  |
| AI Exception Rate | Casos escalados sobre casos procesados. |  |
| Human Intervention Rate | Ejecuciones que requieren corrección humana. Cuánta autonomía es real y cuánta es automatización sostenida por personas. | **al CEO** |
| Workforce Clarity Score | Claridad de roles, ownership y escalamiento. |  |
| Human Capacity Reallocation Rate | Horas liberadas que pasan a trabajo de mayor valor sobre horas liberadas. |  |
| Hybrid Workforce Incident Rate | Incidentes atribuibles a diseño humano/IA. |  |
| Role Conflict Rate | Conflictos de ownership por período. |  |
| AI Employee SLA Compliance | Cumplimiento de SLA del rol artificial. |  |
| Workforce ROI | (Valor incremental − costo workforce) / costo workforce. |  |

Tres de estos pertenecen a un dashboard ejecutivo y el resto no. Si el trabajo funciona mejor que antes, cuánto cuesta un resultado correcto, y cuánta ayuda humana lo sigue sosteniendo.

### Capacity Elevation Rate

La proporción de capacidad humana liberada por automatización que se trasladó a trabajo de mayor valor. La métrica existe para impedir que la palabra «productividad» esconda lo que realmente pasó. Las horas liberadas pueden convertirse en análisis, servicio, innovación, liderazgo, eliminación de desperdicio — o en una reducción real de headcount. Son decisiones distintas y deben contarse por separado. La tecnología puede liberar horas; no puede decidir para qué son.

## Transiciones

### Humano → Artificial

El objetivo no es «sustituir a una persona». Es transferir responsabilidad de forma controlada después de demostrar que el nuevo diseño produce resultados iguales o mejores dentro del riesgo permitido.

| # | Paso | Control |
| --- | --- | --- |
| 1 | Baseline | Documentar el desempeño actual: calidad, costo, tiempo, errores, excepciones y conocimiento tácito. |
| 2 | Descomposición | Separar el puesto en responsabilidades y tareas; identificar qué debe seguir siendo humano. |
| 3 | Risk mapping | Clasificar decisiones, datos, autoridad y costo del error. |
| 4 | Role Contract AI | Crear job description, KPIs, límites, herramientas, manager y escalamiento. |
| 5 | Knowledge transfer | SOPs, ejemplos, criterios, políticas, excepciones e historial. |
| 6 | Shadow mode | El AI Employee ejecuta sin afectar producción; se compara contra el humano. |
| 7 | Producción controlada | Autoridad limitada y aprobaciones frecuentes. |
| 8 | Performance gate | No se transfiere ownership hasta alcanzar umbrales de calidad, costo y riesgo. |
| 9 | Transferencia gradual | Aumentar scope y autonomía; mantener reversibilidad. |
| 10 | Reasignación humana | Mover capacidad humana liberada hacia trabajo de mayor valor cuando tenga sentido. |
| 11 | Handoff formal | Actualizar organigrama, RACI/ownership, accesos y comunicación. |
| 12 | Revisión post-transición | Revisar a 30/60/90 días y revertir si el desempeño se deteriora. |

**No se sustituye primero y se descubre después si funcionaba. La transición se gana con evidencia.**

### Artificial → Humano

El framework debe ser reversible. Si el recurso artificial produce demasiado riesgo, baja calidad, exceso de intervención humana, costo creciente o deterioro relacional, el trabajo debe regresar parcial o totalmente a manos humanas. Una organización híbrida madura no mide el éxito por la dirección de la transición. Lo mide por la calidad de su arquitectura.

1. Activar criterio de rollback por KPI o incidente.
2. Congelar o reducir la autoridad del AI Employee.
3. Transferir contexto, memoria útil y backlog al humano.
4. Reasignar ownership y canales de escalamiento.
5. Revocar accesos artificiales que ya no correspondan.
6. Ejecutar root-cause analysis: modelo, proceso, conocimiento, herramientas o mala asignación del rol.
7. Decidir si el futuro del puesto es Human o Hybrid, no asumir que debe volver a ser 100% humano.

Definí las condiciones de regreso antes del piloto, no después de conocer los resultados. ¿Qué tasa de error es inaceptable? ¿Cuánta intervención humana destruye la economía? ¿Qué incidente obliga a suspender? Escritas de antemano, estas reglas reducen el sesgo de defender una implementación por orgullo.

## Glosario

Un término, dos idiomas, una definición numerada. Cuando el término inglés se usa sin traducir en la práctica en español, ambas entradas llevan la misma palabra — es una decisión deliberada para impedir que el vocabulario se fragmente entre las dos ediciones de este estándar.

**Los acrónimos no se traducen. WRM, HWFS y los identificadores de cláusula HWF- se mantienen idénticos en toda edición de este estándar, presente y futura; solo se localizan las palabras que expanden. Quien cite WRM o HWF-07 en cualquier idioma está señalando lo mismo.**

**G-01 · AI Employee** — Trabajador de software persistente y ligado a un rol, que ejecuta de forma autónoma responsabilidades recurrentes dentro de límites explícitos, con identidad trazable, desempeño medible, rutas de escalamiento y accountability humano.

**G-02 · WRM — Administración de Recursos de Trabajo** — La disciplina que diseña, asigna, gobierna y optimiza el trabajo independientemente de si el recurso que lo ejecuta es humano, artificial o híbrido.

**G-03 · AI Role Contract** — El contrato operacional de un puesto artificial: misión, responsabilidades, resultados, KPIs, autoridad, exclusiones, herramientas, accesos, nivel de servicio, escalamiento, criterios de suspensión y accountable owner. Versionado. Equivale a una descripción de puesto más un acuerdo explícito de operación — un prompt da instrucciones, un contrato de rol da responsabilidad.

**G-04 · Accountable owner** — El único humano identificado, o cuerpo humano de gobierno, que responde por la configuración, autoridad, desempeño y excepciones de un AI Employee. Exactamente uno, aunque el recurso reciba trabajo de varias áreas y aunque su supervisión cotidiana esté delegada. La accountability nunca es delegable a un recurso artificial, porque responder por un resultado exige capacidad de soportar una consecuencia.

**G-05 · Shadow mode** — Etapa en la que el recurso artificial ejecuta el trabajo pero sus acciones no afectan la operación. Los resultados se comparan contra un baseline humano. Equivalente operativo del periodo de prueba.

**G-06 · Context Provisioning** — El equivalente al onboarding para un recurso artificial. Se divide en debe saber, puede consultar y no debe acceder. La tercera categoría tiene dos fundamentos legítimos: proteger la información del recurso, y proteger el criterio del recurso de la información (HWF-18); en ambos casos la restricción queda registrada, nunca silenciosa.

**G-07 · Matriz de autoridad** — El registro de qué puede leer, escribir, decidir, gastar, comunicar o ejecutar un recurso, y cuáles de esas acciones requieren aprobación. La autonomía sin matriz de autoridad es una palabra vacía.

**G-08 · Árbol de escalamiento** — El mapeo explícito de tipo de excepción, riesgo y urgencia hacia un destino: una persona, un equipo o una regla de retorno. Toda excepción necesita un destino.

**G-09 · Memoria gobernada** — Memoria con procedencia, alcance, retención y reglas de borrado, además de un dueño con nombre y un mecanismo de actualización. Una política sin fecha produce respuestas consistentes y equivocadas.

**G-10 · Human Intervention Rate** — La proporción de casos o decisiones que requieren corrección humana. Revela cuánta de la autonomía declarada es real y cuánta es automatización sostenida en silencio por personas.

**G-11 · Cost per Successful Outcome** — Costo total de producir un resultado correcto y aceptado — incluyendo plataforma, integración, supervisión, retrabajo, incidentes y operación humana residual. Comparar una suscripción contra un salario es el benchmark equivocado.

**G-12 · Post-Transition Performance Delta** — El cambio de desempeño después de cambiar el recurso o la configuración. No pregunta si el agente es rápido; pregunta si el puesto mejoró. Sin baseline, una organización puede celebrar una mejora que nunca ocurrió.

**G-13 · HWFS — Hybrid Workforce Fit Score** — Instrumento estructurado para decidir si una responsabilidad debe ser Humana, Artificial o Híbrida. Devuelve un argumento, no un número: una asignación, una clase de riesgo, un peldaño inicial de autonomía y las condiciones que cambiarían la respuesta.

**G-14 · Gerente de Fuerza Laboral Híbrida** — El rol responsable de asegurar que cada responsabilidad sea ejecutada por la configuración que produce el mejor resultado. Neutral por diseño: nunca se mide por humanos reemplazados ni puestos convertidos.

**G-15 · Capacity Elevation Rate** — La proporción de capacidad humana liberada que se trasladó a trabajo de mayor valor. Evita que «productividad» esconda si las horas se convirtieron en análisis, servicio, innovación, desperdicio eliminado — o en una reducción de headcount que debe nombrarse.

**G-16 · Kill switch** — La capacidad técnica y de proceso de suspender un AI Employee de inmediato. Un kill switch sin responsable es apenas una función; el contrato de rol debe decir quién puede usarlo y bajo qué condición.

**G-17 · Least privilege / least authority** — Least privilege limita a qué puede acceder un recurso; least authority limita qué puede decidir o comprometer. Son controles distintos y ambos son necesarios.

**G-18 · Role stewardship vs. task execution** — «Enviá estos veinte seguimientos» es una tarea. «Administrá el seguimiento comercial de esta cartera» es un rol: priorizar, respetar restricciones, conservar contexto, reconocer excepciones y escalar. El paso de una a otro es lo que justifica la categoría.

**G-19 · Plan de remediación** — El equivalente artificial de un plan de mejora: reducir scope, aumentar aprobaciones, corregir configuración o contexto, y validar nuevamente antes de restituir autoridad.

**G-20 · Arquitectura de fallback** — El plan de sucesión de un recurso artificial: modelo, agente o vendor alternativo, más un runbook de reemplazo. Reduce lock-in y hace sobrevivible el retiro.

**G-21 · Offboarding / deprovisioning** — Revocar credenciales, deshabilitar herramientas, detener schedules y colas, rotar secretos, transferir trabajo pendiente y contexto, preservar evidencia. Tan importante como el onboarding y casi siempre omitido.

**G-22 · Time-to-autonomy** — Días desde la instanciación hasta el desempeño confiable en el nivel de riesgo esperado. La contraparte artificial del time-to-productivity de una nueva contratación.

**G-23 · Total Cost of AI Employment** — Modelos más infraestructura más integraciones más supervisión más costo de errores más governance. El análogo artificial del costo total del empleado, y la única base honesta de comparación.

**G-24 · Management by exception** — El modo de operación en que el recurso resuelve la rutina dentro de sus límites y el manager interviene en desviaciones y excepciones. Peldaño 4 de la escalera de autonomía.

**G-26 · Supervisor** — Quien dirige el trabajo cotidiano de un AI Employee: rutear tareas, revisar output, fijar prioridades y recibir excepciones. Un supervisor puede ser humano o artificial. Se distingue del accountable owner, que siempre es humano: un AI Employee puede supervisar a otro y aun así responder ante una persona en algún punto por encima.

**G-27 · Cadena de supervisión** — El recorrido desde un AI Employee hacia arriba, a través de cada supervisor, hasta el humano o cuerpo de gobierno accountable. Se permiten cadenas de cualquier profundidad, pero cada una debe terminar en un humano, ser recorrible y observable de punta a punta, y permitir que quien responde intervenga en cualquier punto sin pasar por la cadena misma. La profundidad la acota el span of control y no un número fijo: la escala puede crecer solo contra tooling que la haga gobernable.

**G-28 · Divergencia de rol** — La brecha entre lo que un AI Employee realmente produce y la misión, autoridad o KPIs que declara su contrato de rol. El recurso la reporta a su accountable owner como hallazgo, nunca como solicitud: el recurso no tiene intereses que defender, y la decisión de revisar el contrato queda en el humano. La divergencia es la señal de que un contrato envejeció, no la prueba de que el recurso merece más.

**G-29 · Determinantes de la decisión** — El estado que produjo una acción concreta: la política vigente, el conocimiento recuperado y su procedencia, los resultados que devolvieron las herramientas, la autoridad en efecto, y las versiones de modelo y configuración corriendo en ese momento. Se distingue del resultado, que dice qué pasó, y de una traza de razonamiento, que dice qué reporta el sistema haber pensado. Los determinantes son lo que permite atribuir una falla a una causa en vez de solo registrarla.

**G-30 · Interioridad simulada** — Conducta cuya función es hacer creer a una persona que un recurso artificial atraviesa una vida interior, cuando nada garantiza la atribución: latencia inyectada e indicadores de tipeo que hacen de pensamiento, vacilación verbal, o declaraciones de sentimiento y cuidado. Se distingue de la comunicación clara y cortés, que es competencia. La prueba es el propósito y no la superficie: si la conducta existe para sugerir una mente con algo en juego. Prohibida por HWF-10 incluso cuando el sistema haya declarado que es software.

**G-31 · Opacidad deliberada** — Una decisión de diseño registrada de retenerle contexto a un recurso artificial, sea para proteger la información del recurso o para proteger el criterio del recurso de la información: anclaje, sesgo de confirmación, sobrecarga operativa. Se distingue de una omisión por exactamente una propiedad — está escrita en el contrato de rol, versionada y disponible para la auditoría. Una restricción sin registro no es opacidad sino un hueco, y la responsabilidad por lo que degrade recae en quien retuvo el contexto (HWF-18).

**G-32 · Zombi digital** — Un AI Employee cuyo puesto perdió su justificación pero que sigue operando con credenciales, accesos a datos y autoridad vigente intactos. Es lo que se acumula cuando nada fuerza la pregunta de existencia: los mecanismos que podan los puestos humanos sin sentido — payroll y attrition — no aplican a un recurso que cuesta poco y no renuncia jamás. Se previene con la cadencia de re-justificación de HWF-19; se desmonta con el retiro del lifecycle, con offboarding y revocación.

**G-33 · Neutralidad de recurso** — La disciplina de asignación que decide quién ocupa un puesto — humano, artificial o híbrido — sin preferencia previa por ninguno, juzgando solo fit, resultado, costo, riesgo y control. Es una disciplina, no una postura moral, y está acotada: la neutralidad comienza solo después de satisfechas las restricciones de HWF-20 — derechos, dignidad, seguridad, agencia humana significativa, accesibilidad, protecciones laborales. Citado sin su frontera, el término está siendo mal usado.

**G-25 · Puesto híbrido** — Puesto cuyas responsabilidades se reparten explícitamente entre un recurso humano y uno artificial, con handoffs definidos, transferencia de contexto y un único dueño del resultado completo. Mal diseñado, produce dos ocupantes esperando que responda el otro.

## Gobierno

### Divulgación

Este estándar fue escrito por Master Joe Phillips, quien también construye AIEmpl.com, una plataforma comercial en esta categoría. Eso es un conflicto de interés real y se declara acá en lugar de descubrirse después.

De ahí se derivan tres compromisos. Este estándar no certifica productos ni puntúa proveedores; la conformidad la autodeclara la organización que opera el deployment. Este sitio no es un embudo, así que el enlace a la plataforma es divulgación y no una oferta. El texto normativo no puede ser modificado por su autor en solitario.

Un estándar escrito por un vendor y juzgado por nadie es una hoja de especificaciones con nombre formal. El mecanismo de abajo es lo que debería impedir que este se convierta en eso.

### Editor y Review Board

> El Editor escribe, propone y decide todo lo editorial. El texto normativo solo cambia con mayoría del Board. El voto del Editor no vale más que el de nadie en esa votación.

Esa única regla es la que le da valor a la divulgación anterior: el autor tiene un interés comercial, y el autor no puede mover el estándar solo.

### Los cinco asientos

| # | Asiento | Protege | Titular |
| --- | --- | --- | --- |
| 1 | RR. HH. / People | Que la traducción RR. HH.→IA no sea caricatura, y que las capas Humana y Adaptada de la matriz se mantengan honestas. | *Abierto* |
| 2 | Ejecutivo de operaciones o finanzas que haya desplegado IA | Que el estándar sea algo que una empresa real pueda cumplir, no solo algo elegante de leer. | *Abierto* |
| 3 | Ingeniería de IA | Que las nueve propiedades y los controles sean técnicamente honestos e implementables. | *Abierto* |
| 4 | Seguridad y riesgo | Least privilege, auditabilidad, manejo de incidentes y kill switch: el dominio de gobierno. | *Abierto* |
| 5 | Legal y laboral | La frontera que dice que esto no es un empleado en sentido jurídico. Es la línea donde la categoría tiene más probabilidad de quemarse. | *Abierto* |

1. Sin pago. Honorífico, con crédito en este sitio. En cuanto hay dinero, hay una pregunta sobre a quién sirve el Board.
2. Al menos dos de los cinco asientos quedan fuera de la órbita comercial del Editor, así que no clientes, empleados ni proveedores. Un board de amigos del autor se detecta en una sola búsqueda.
3. Ningún miembro tiene una plataforma competidora, incluida la del Editor. El Board no es un lobby de proveedores.
4. Cada miembro publica su propia divulgación, exactamente como lo hace el Editor.
5. Términos de doce meses renovables, para que salir sea algo ordinario y no un escándalo.
6. Los cambios siguen un proceso público: cualquiera propone, el Editor redacta, el Board vota y el changelog registra lo que pasó. Cuatro líneas hacen más trabajo acá que diez páginas de estatutos.

### Proceso de enmienda

1. Cualquiera propone un cambio, públicamente, con el razonamiento y el caso que lo motivó.
2. El Editor redacta el texto enmendado de la cláusula y publica el borrador.
3. El Board vota. Decide la mayoría; el Editor tiene un voto.
4. El changelog registra qué cambió, quién lo propuso, cómo votó el Board y por qué.

### Estado actual

La versión 1.0 es una propuesta de un solo autor. El Standard Review Board está en formación y todos los asientos están abiertos. Publicarlo así es una decisión deliberada: un estándar que admite ser una propuesta es más creíble que uno que insinúa una institución que todavía no tiene. Si alguno de los cinco asientos te describe, la invitación está abierta.

## Licencia

Creative Commons Atribución-CompartirIgual 4.0 Internacional (`CC-BY-SA-4.0`) — https://creativecommons.org/licenses/by-sa/4.0/

Podés citar, embeber, enseñar, traducir y usar comercialmente este material con atribución. Una versión modificada debe llevar la misma licencia. Los nombres «Hybrid Workforce Standard», «HybridWF», «WRM» y «HWFS» quedan reservados y no están licenciados: podés declarar que tu trabajo conforma con el estándar, pero no publicar una versión modificada con el mismo nombre.

## Fuentes

### Mercado y proveedores

| ID | Fuente |
| --- | --- |
| S1 | [Lattice — “Leading the Way in Responsible AI Employment” (9 Jul 2024)](https://lattice.com/blog/leading-the-way-in-responsible-ai-employment) |
| S2 | [SHRM — Lattice scraps plans to treat AI bots as employees after backlash (Jul 2024)](https://www.shrm.org/topics-tools/news/technology/lattice-scraps-plans-to-treat-ai-bots-as-employees-after-backlash) |
| S3 | [Salesforce — What Is Digital Labor? / Agentforce positioning](https://www.salesforce.com/agentforce/digital-labor/) |
| S4 | [Microsoft — Six core capabilities to scale agent adoption in 2026](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/6-core-capabilities-to-scale-agent-adoption-in-2026/) |
| S5 | [Microsoft — Introducing Microsoft Scout / Autopilots, always-on agents (2 Jun 2026)](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/) |
| S6 | [ianai — AI Employee / role-based authority and persistent digital worker](https://www.ianai.co/) |
| S7 | [AIEmployee.com — AI Employee platform](https://home.aiemployee.com/) |
| S8 | [GIZIN — AI collaboration / AI Employees](https://gizin.co.jp/) |

### Estándares e instituciones

| ID | Fuente |
| --- | --- |
| S9 | [ISO 30414:2025 — Human resource management, HCRD](https://www.iso.org/standard/30414) |
| S10 | [ISO/TC 260 — Human resource management standards catalogue](https://www.iso.org/committee/628737/x/catalogue/p/1/u/0/w/0/d/0/) |
| S11 | [CIPD — Performance Management factsheet](https://www.cipd.org/en/knowledge/factsheets/performance-factsheet/) |
| S12 | [CIPD — Line managers’ role in supporting the people profession](https://www.cipd.org/uk/knowledge/factsheets/line-managers-factsheet/) |
| S13 | [ILO — Safe and healthy working environment as a fundamental principle and right](https://www.ilo.org/topics-and-sectors/safety-and-health-work/safe-and-healthy-working-environment-fundamental-principle-and-right-work) |
| S14 | [NIST — AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) |
| S15 | [NIST — AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/) |
| S24 | [OECD — AI Principles (human-centred values: dignity, autonomy, social justice, labour rights)](https://oecd.ai/en/ai-principles) |

### Señales académicas

| ID | Fuente |
| --- | --- |
| S16 | [Johnston et al. — The Shift to Agentic AI: Evidence from Codex (2026)](https://arxiv.org/abs/2606.26959) |
| S17 | [Liu — The Organizational Behavior of Agentic AI (2026)](https://arxiv.org/abs/2606.30986) |
| S18 | [Agentic Business Process Management: A Research Manifesto (2026)](https://arxiv.org/html/2603.18916v3) |
| S19 | [Alenezi — Human-AI Collaboration and the Transformation of Software Engineering Work (2026)](https://arxiv.org/abs/2606.03394) |
| S20 | [Intelligent AI Delegation (2026)](https://arxiv.org/html/2602.11865v1) |

### Libros y obras competidoras

| ID | Fuente |
| --- | --- |
| S21 | [GIZIN — AI Employee Starter Book](https://store.gizin.co.jp/en/ai-employee-book) |
| S22 | [GIZIN — AI Employee Master Book](https://store.gizin.co.jp/en/ai-employee-master) |
| S23 | [B. Jaiswal — AI EMPLOYEE: How One Person Does the Work of Ten (Jun 2026)](https://play.google.com/store/books/details/B_JAISWAL_AI_EMPLOYEE?id=0w3uEQAAQBAJ) |

### Límites metodológicos

1. La investigación de mercado representa un corte al 9 de agosto de 2026. El posicionamiento y las capacidades de producto cambian rápidamente.
2. Las afirmaciones de vendors se interpretan como posicionamiento de producto, no como validación independiente de performance. Eso incluye la plataforma del propio autor.
3. La matriz de 120 principios es una síntesis propia inspirada en disciplinas de RR. HH., management, workforce analytics, seguridad y riesgo. No pretende atribuir esos principios a una única organización.
4. ISO 30414:2025 y el catálogo ISO/TC 260 se usan como evidencia de que la gestión de recursos humanos comprende múltiples áreas medibles y estandarizables; CIPD para performance y line management; OIT para fronteras de derechos humanos; NIST para gobierno de riesgo de IA. Ninguna de esas instituciones respalda este estándar.
5. Los papers de arXiv son preprints salvo que se indique otra cosa, y se usan como señales de investigación emergente, no como consenso científico definitivo.
6. La definición, el test de nueve propiedades, el modelo de madurez, los playbooks de transición, el HWFS y este mismo estándar son propuestas conceptuales desarrolladas en este trabajo. No son estándares oficiales de ISO, NIST, la OIT ni de ningún proveedor citado.

### Linaje conceptual

- Henri Fayol — unidad de mando, autoridad/responsabilidad, división del trabajo.
- Peter Drucker — dirección por objetivos, efectividad y responsabilidad gerencial.
- W. Edwards Deming — medición, sistema, variación y mejora continua.
- Dave Ulrich y la tradición moderna de human resource management — diseño del talento y capacidad organizacional.
- Prácticas contemporáneas de performance management, diseño organizacional, RBAC, least privilege, segregación de funciones y gestión de riesgo empresarial.

## Cambios

### v1.0 · 2026-08-12 · Propuesta — Review Board en formación

- Primera publicación: veinte cláusulas normativas, el test de nueve propiedades, el marco WRM, la matriz de 120 principios, el modelo de madurez, el instrumento HWFS, el rol de Gerente de Fuerza Laboral Híbrida y los playbooks de transición.
- La certificación se excluyó deliberadamente del alcance. Este estándar no puntúa productos ni emite sellos.
- El HWFS devuelve un argumento estructurado en lugar de un puntaje 0–100, resolviendo una contradicción presente en la investigación de origen.
- HWF-20 declara la jerarquía ética y tiene precedencia sobre toda otra cláusula: las personas son fines, el software es un medio, y la optimización de costo, velocidad o capacidad nunca pasa por encima de los derechos humanos, la dignidad, la seguridad, la agencia humana significativa, la accesibilidad ni las protecciones laborales aplicables — la neutralidad de recurso comienza solo después de satisfechas esas restricciones. Adoptada casi como fue propuesta, con una oración de supremacía agregada para que su posición en la lista no se lea como su rango. No promete que el desplazamiento no ocurrirá; traza la línea entre desplazamiento y abuso, nombrando la jerarquía que el anti-KPI y las compuertas duras del HWFS ya obedecían. Agrega G-33, acota el mandato de neutralidad del Gerente de Fuerza Laboral Híbrida, y agrega los Principios de IA de la OCDE a las fuentes.
- La premisa del WRM y la nota de HWF-01 ahora responden directamente la objeción de taylorismo. Una reescritura propuesta habría reemplazado «el puesto existe antes que su ocupante» por una oración de compuerta de autoridad más co-evolución reservada a los roles humanos. No se adoptó: la compuerta reformula HWF-03 y las reglas 3–4 del WRM, restringir la co-evolución a roles humanos contradice HWF-17, y borrar la premisa disolvería el marco de asignación del que depende el HWFS. Se adoptó la distinción que la objeción realmente necesitaba: la declaración gobierna el orden del nacimiento, no el resto de la vida. El job crafting es legítimo y esperado — Taylor fijaba a la persona a la caja; este estándar versiona la caja — y toda remodelación debe declararse, porque en una organización híbrida el puesto declarado es la interfaz: un colega humano puede leer un rol no declarado desde el pasillo, uno artificial solo puede leer el grafo. Ningún texto de cláusula cambió.
- HWF-10 y HWF-11 se reescribieron por modestia epistémica. El texto citable de HWF-10 cerraba afirmando que el sistema «no tiene» los estados interiores que simula — una tesis metafísica presentada como hecho técnico. El remate se eliminó: «simular» ya carga la falsedad, y la prohibición ahora sobrevive a cualquier resolución de la filosofía de la mente, porque actuar estados interiores inverificables para influir en una persona es engaño de todos modos. HWF-11 ahora declara explícitamente la posición del estándar: no reconoce personería, relación laboral, conciencia ni estatus moral en un sistema artificial y no pretende resolver lo que sistemas futuros puedan ameritar — no-reconocimiento en la postura del derecho societario, no negación. El texto de apoyo pasó al mismo pie: la línea de estatus en vez de la línea ontológica, sin intereses reconocidos en vez de sin intereses, analogías rechazadas por vacías operativamente y no por falsas metafísicamente.
- La línea de tesis y la escalera de vocabulario se corrigieron por consistencia con la propia arquitectura de accountability del estándar. La edición en inglés decía «an AI Employee is accountable for a role» y la escalera prometía «propiedad de un rol», mientras la nota de HWF-02 define la accountability como la capacidad de cargar una consecuencia legal, financiera o reputacional y el accountable owner es humano por definición. La tesis ahora termina donde termina toda cadena del estándar — un AI Employee ocupa un rol; un humano responde por él — la escalera promete custodia en vez de propiedad, y el invariante queda enunciado como fórmula: la IA ejecuta, la organización responde, un humano gobierna. Ningún texto de cláusula cambió.
- HWF-19 prohíbe que un puesto sobreviva a su justificación: con cadencia declarada el accountable owner re-justifica su existencia frente a la estrategia vigente, como pregunta previa y separada del desempeño, y la continuidad nunca es el default. La cláusula reemplaza un mecanismo de poda que los ocupantes artificiales no tienen — payroll y attrition eliminan los puestos humanos sin sentido, y un recurso que cuesta poco y no renuncia jamás persiste por defecto, acumulando deuda organizacional en su forma más peligrosa: zombis digitales con accesos para trabajo que nadie necesita. El periodo de doce meses propuesto pasó a la nota como orientación, porque el estándar fija mecanismos y no calendarios. Agrega G-32 y extiende la regla 1 del WRM y el principio 101 de la matriz.
- HWF-18 hace que el aprovisionamiento de contexto sea deliberado en ambas direcciones. Las categorías de restricción existían desde el primer borrador, pero toda razón declarada era el riesgo informacional, así que nada impedía que un manager concediera todo el contexto no sensible incluso donde degradaría el criterio del recurso por anclaje, sesgo de confirmación o sobrecarga. La propuesta que la originó pedía un nuevo dominio de opacidad en el WRM; entró como cláusula, porque la opacidad es una técnica dentro de dominios existentes y no una función de administración. La cláusula vuelve obligatorio el registro y asigna la responsabilidad por decisiones degradadas por contexto retenido a quien lo retuvo, porque la opacidad sin documentar es un instrumento de lavado de accountability. Agrega G-31 y extiende G-06, el principio 57 de la matriz y la regla 6 del WRM.
- HWF-10 ahora prohíbe simular un estado interior que el sistema no tiene, además de engañar sobre su naturaleza de software. La divulgación sola dejaba un hueco: un sistema podía anunciarse como software y aun así actuar vacilación y calidez diseñadas para bajarle la guardia a quien lee. La cláusula apunta al propósito y no a la superficie, así que la fluidez y la cortesía siguen siendo competencia mientras la latencia inyectada, las muletillas de vacilación y las declaraciones de sentimiento no lo son. La propuesta que la originó pedía que la comunicación fuera funcionalmente distinguible de una interacción humana, lo que habría obligado a los AI Employees a escribir mal y habría sido inauditable.
- HWF-06 ahora exige que la auditoría reconstruya los determinantes de una decisión — política, conocimiento, resultados de herramientas, autoridad y versiones vigentes — y no solo su resultado. Una auditoría de solo-qué deja idénticos a una política equivocada, un conocimiento envejecido, un mal resultado de herramienta, un error de modelo y un rol mal asignado, y esos cinco necesitan remedios distintos. La cláusula dice en su texto citable que el relato del modelo sobre su propio razonamiento apoya la reconstrucción sin sustituirla, porque el razonamiento declarado no es evidencia confiable de causa y un estándar que lo aceptara habilitaría postmortems confiados y equivocados.
- HWF-17 exige que un contrato de rol sea revisable, se revise con cadencia declarada, y que la divergencia entre outcomes medidos y misión declarada la reporte hacia arriba el propio recurso. Está formulada como hallazgo y no como solicitud: un AI Employee no tiene intereses que defender, y un sistema capaz de argumentar a favor de su propia autoridad ampliada es un camino de escalamiento de privilegios vestido de función de RR. HH. La decisión queda en el accountable owner y nunca en un supervisor artificial.
- HWF-02 separa supervisión de accountability. Un AI Employee puede supervisar a otro; la accountability termina en un humano o cuerpo de gobierno identificado por profunda que sea la cadena. HWF-16 se agregó junto con ella, exigiendo que esa cadena sea recorrible, observable e interrumpible sin pasar por sí misma. Antes de publicar, ambas eran una sola cláusula que exigía manager humano directo, lo que habría vuelto no conforme a una jerarquía artificial profunda por redacción y no por intención.

Cambiar el texto de una cláusula exige subir de versión y una votación del Board. Notas, ejemplos y comentario pueden corregirse entre versiones sin enmendar el estándar. Toda versión publicada permanece en su propia dirección permanente para que una cita hecha hoy siga resolviendo en cinco años.
