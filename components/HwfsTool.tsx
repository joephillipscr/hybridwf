'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, ArrowRight, Check, Copy, RotateCcw } from 'lucide-react';
import {
  ALLOCATION_LABEL,
  AUTONOMY,
  AUTONOMY_NOTE,
  DIMENSIONS,
  evaluate,
  riskLabel,
  type Answers,
} from '@/lib/hwfs';
import { UI } from '@/lib/i18n';
import { SITE_URL, STANDARD_VERSION, type Locale } from '@/lib/site';

const COPY = {
  responsibility: {
    en: 'Name the responsibility you are assessing',
    es: 'Nombrá la responsabilidad que estás evaluando',
  },
  placeholder: {
    en: 'e.g. Chasing overdue invoices under 30 days',
    es: 'p. ej. Seguimiento de facturas vencidas a menos de 30 días',
  },
  hint: {
    en: 'One responsibility — not a department, not a whole post. A post contains repetitive work, complex decisions, relationships and exceptions; assessing it as a single block forces a clumsy answer.',
    es: 'Una responsabilidad — no un departamento, no un puesto completo. Un puesto contiene trabajo repetitivo, decisiones complejas, relaciones y excepciones; evaluarlo como un solo bloque obliga a una respuesta torpe.',
  },
  progress: { en: 'answered', es: 'respondidas' },
  result: { en: 'Result', es: 'Resultado' },
  allocation: { en: 'Allocation', es: 'Asignación' },
  risk: { en: 'Risk class', es: 'Clase de riesgo' },
  autonomy: { en: 'Starting autonomy', es: 'Autonomía inicial' },
  drove: { en: 'What drove this', es: 'Qué determinó esto' },
  controls: { en: 'Controls this requires', es: 'Controles que exige' },
  change: { en: 'What would change the answer', es: 'Qué cambiaría la respuesta' },
  incomplete: {
    en: 'Answer every dimension to get a result. The instrument is designed to make you look at all twelve, including the ones you would rather skip.',
    es: 'Respondé todas las dimensiones para obtener un resultado. El instrumento está diseñado para obligarte a mirar las doce, incluidas las que preferirías saltarte.',
  },
  noScore: {
    en: 'This instrument returns no number. A score would let the decision be laundered through arithmetic — the point is to make the judgement visible, not to replace it.',
    es: 'Este instrumento no devuelve ningún número. Un puntaje permitiría lavar la decisión a través de la aritmética — el punto es hacer visible el criterio, no reemplazarlo.',
  },
  export: { en: 'Copy as Markdown', es: 'Copiar como Markdown' },
  reset: { en: 'Start over', es: 'Empezar de nuevo' },
};

export default function HwfsTool({ lang }: { lang: Locale }) {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState<Answers>({});
  const [copied, setCopied] = useState(false);

  const complete = Object.keys(answers).length === DIMENSIONS.length;
  const result = useMemo(() => (complete ? evaluate(answers) : null), [answers, complete]);

  const markdown = useMemo(() => {
    if (!result) return '';
    const L = (o: { en: string; es: string }) => o[lang];
    const rung = AUTONOMY.find((a) => a.rung === result.startingRung)!;
    return [
      `# HWFS — ${name || (lang === 'en' ? 'Untitled responsibility' : 'Responsabilidad sin título')}`,
      '',
      `**${COPY.allocation[lang]}:** ${L(ALLOCATION_LABEL[result.allocation])}`,
      `**${COPY.risk[lang]}:** ${L(riskLabel(result.risk))}`,
      `**${COPY.autonomy[lang]}:** ${result.startingRung} — ${L(rung.name)}. ${L(rung.detail)}`,
      '',
      `## ${COPY.drove[lang]}`,
      ...result.determinative.map((d) => `- **${L(d.name)}** — ${L(d.reason)}`),
      '',
      `## ${COPY.controls[lang]}`,
      ...result.controls.map((c) => `- ${L(c)}`),
      '',
      `## ${COPY.change[lang]}`,
      ...result.wouldChange.map((c) => `- ${L(c)}`),
      '',
      '---',
      `${lang === 'en' ? 'Produced with the Hybrid Workforce Fit Score' : 'Producido con el Hybrid Workforce Fit Score'}, ${SITE_URL}/hwfs/ · Hybrid Workforce Standard v${STANDARD_VERSION}`,
    ].join('\n');
  }, [result, name, lang]);

  async function copyResult() {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-start">
      <div>
        <label className="block">
          <span className="text-sm font-semibold text-fg">{COPY.responsibility[lang]}</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={COPY.placeholder[lang]}
            className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
          />
          <span className="mt-2 block text-xs leading-relaxed text-muted">{COPY.hint[lang]}</span>
        </label>

        <div className="mt-10 space-y-8">
          {DIMENSIONS.map((d, i) => (
            <fieldset key={d.key}>
              <legend className="flex items-baseline gap-3">
                <span className="clause-id">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-lg font-semibold">{d.name[lang]}</span>
              </legend>
              <p className="mt-1.5 text-sm text-muted">{d.question[lang]}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {d.options.map((o, idx) => {
                  const active = answers[d.key] === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setAnswers((a) => ({ ...a, [d.key]: idx }))}
                      aria-pressed={active}
                      className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                        active
                          ? 'border-accent bg-accent/10 font-medium text-fg'
                          : 'border-border bg-surface text-muted hover:border-accent/60 hover:text-fg'
                      }`}
                    >
                      {o[lang]}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>
      </div>

      {/* --- Result panel ------------------------------------------- */}
      <aside className="lg:sticky lg:top-24">
        <div className="card">
          <div className="flex items-center justify-between gap-3">
            <h2 className="eyebrow">{COPY.result[lang]}</h2>
            <span className="font-mono text-xs text-muted">
              {Object.keys(answers).length}/{DIMENSIONS.length} {COPY.progress[lang]}
            </span>
          </div>

          {!result && (
            <p className="mt-4 text-sm leading-relaxed text-muted">{COPY.incomplete[lang]}</p>
          )}

          {result && (
            <div className="mt-4">
              <p className="font-display text-xl font-semibold leading-snug">
                {result.headline[lang]}
              </p>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
                  <dt className="text-muted">{COPY.allocation[lang]}</dt>
                  <dd className="font-semibold text-brand">
                    {ALLOCATION_LABEL[result.allocation][lang]}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-border pb-3">
                  <dt className="text-muted">{COPY.risk[lang]}</dt>
                  <dd className="font-semibold text-fg">{riskLabel(result.risk)[lang]}</dd>
                </div>
                <div className="border-b border-border pb-3">
                  <dt className="text-muted">{COPY.autonomy[lang]}</dt>
                  <dd className="mt-1 font-semibold text-fg">
                    {result.startingRung} ·{' '}
                    {AUTONOMY.find((a) => a.rung === result.startingRung)!.name[lang]}
                  </dd>
                  <dd className="mt-1 text-xs leading-relaxed text-muted">
                    {AUTONOMY.find((a) => a.rung === result.startingRung)!.detail[lang]}
                  </dd>
                </div>
              </dl>

              <Block title={COPY.drove[lang]}>
                {result.determinative.map((d) => (
                  <li key={d.dimension}>
                    <span className="font-semibold text-fg">{d.name[lang]}</span> — {d.reason[lang]}
                  </li>
                ))}
              </Block>

              {result.controls.length > 0 && (
                <Block title={COPY.controls[lang]}>
                  {result.controls.map((c, i) => (
                    <li key={i}>{c[lang]}</li>
                  ))}
                </Block>
              )}

              <Block title={COPY.change[lang]}>
                {result.wouldChange.map((c, i) => (
                  <li key={i}>{c[lang]}</li>
                ))}
              </Block>

              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={copyResult}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-muted transition hover:border-accent hover:text-brand"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  {copied ? UI.copied[lang] : COPY.export[lang]}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAnswers({});
                    setName('');
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-muted transition hover:border-accent hover:text-brand"
                >
                  <RotateCcw size={13} />
                  {COPY.reset[lang]}
                </button>
              </div>
            </div>
          )}

          <p className="mt-6 flex gap-2 border-t border-border pt-4 text-xs leading-relaxed text-muted">
            <AlertTriangle size={14} className="mt-0.5 shrink-0 text-adapted" />
            <span>{COPY.noScore[lang]}</span>
          </p>
        </div>

        <p className="mt-4 flex gap-2 px-1 text-xs leading-relaxed text-muted">
          <ArrowRight size={13} className="mt-0.5 shrink-0" />
          <span>{AUTONOMY_NOTE[lang]}</span>
        </p>
      </aside>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand">
        {title}
      </h3>
      <ul className="mt-2 space-y-2 text-xs leading-relaxed text-muted">{children}</ul>
    </div>
  );
}
