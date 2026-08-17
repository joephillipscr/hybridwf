import type { T } from './i18n';

export interface Level {
  n: number;
  name: T;
  definition: T;
}

/** Seven levels. Level 4 names where a deployment can exhibit the nine properties; membership is decided by the definition test, never by the level. */
export const LEVELS: Level[] = [
  {
    n: 0,
    name: { en: 'Tool', es: 'Herramienta' },
    definition: {
      en: 'Generates content or responds. Does not act.',
      es: 'Genera contenido o responde. No actúa.',
    },
  },
  {
    n: 1,
    name: { en: 'Assistant', es: 'Asistente' },
    definition: {
      en: 'Uses context to help a human.',
      es: 'Usa contexto para ayudar a un humano.',
    },
  },
  {
    n: 2,
    name: { en: 'Agent', es: 'Agente' },
    definition: {
      en: 'Executes bounded tasks with tools.',
      es: 'Ejecuta tareas acotadas con herramientas.',
    },
  },
  {
    n: 3,
    name: { en: 'Role agent', es: 'Agente de rol' },
    definition: {
      en: 'Owns the recurring workflows of a defined role.',
      es: 'Posee los workflows recurrentes de un rol definido.',
    },
  },
  {
    n: 4,
    name: { en: 'AI Employee', es: 'AI Employee' },
    definition: {
      en: 'The nine properties of the definition, exhibited in operation.',
      es: 'Las nueve propiedades de la definición, exhibidas en operación.',
    },
  },
  {
    n: 5,
    name: { en: 'AI Team', es: 'AI Team' },
    definition: {
      en: 'Multiple AI Employees coordinated with shared context.',
      es: 'Múltiples AI Employees coordinados con contexto compartido.',
    },
  },
  {
    n: 6,
    name: { en: 'Hybrid Enterprise', es: 'Empresa Híbrida' },
    definition: {
      en: 'Humans and AI Employees under one integrated model of organisation, permissions and governance.',
      es: 'Humanos y AI Employees bajo un modelo integrado de organización, permisos y gobierno.',
    },
  },
];

export const THRESHOLD = 4;

export const MATURITY_NOTE: T = {
  en: 'The ladder maps evolution of capacity and scale; it does not decide membership. Level 4 names the point where a deployment can exhibit the nine properties of the definition — whether it actually does is decided by the test, never by the level. Levels 0 to 3 are legitimate destinations, not failures — a well-placed assistant can produce more value than a supposed AI Employee nobody supervises.',
  es: 'La escalera mapea la evolución de capacidad y escala; no decide la membresía. El nivel 4 nombra el punto donde un deployment puede exhibir las nueve propiedades de la definición — si de verdad las exhibe lo decide el test, nunca el nivel. Los niveles 0 a 3 son destinos legítimos, no fracasos — un asistente bien ubicado puede producir más valor que un supuesto AI Employee al que nadie supervisa.',
};

/** Self-diagnosis prompts, one per level boundary. */
export const DIAGNOSTIC: { q: T }[] = [
  { q: { en: 'Does it act, or only produce output?', es: '¿Actúa, o solo produce output?' } },
  { q: { en: 'Does it hold a recurring role, or only discrete tasks?', es: '¿Sostiene un rol recurrente, o solo tareas discretas?' } },
  { q: { en: 'Following its supervision chain upward, does it reach a named human?', es: '¿Siguiendo su cadena de supervisión hacia arriba, se llega a un humano con nombre?' } },
  { q: { en: 'Can you reconstruct what it did last Tuesday and under whose authority?', es: '¿Puede reconstruir qué hizo el martes pasado y bajo qué autoridad?' } },
  { q: { en: 'Can it be suspended today, by someone who knows they own that decision?', es: '¿Puede suspenderse hoy, por alguien que sabe que esa decisión es suya?' } },
];
