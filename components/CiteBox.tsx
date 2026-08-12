'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { UI } from '@/lib/i18n';
import type { Locale } from '@/lib/site';

export default function CiteBox({
  lang,
  citation,
}: {
  lang: Locale;
  citation: string;
}) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(citation);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      /* clipboard blocked — the text is selectable on screen anyway */
    }
  }

  return (
    <div className="card-raised">
      <div className="flex items-start justify-between gap-4">
        <h2 className="eyebrow">{UI.citeThis[lang]}</h2>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition hover:border-accent hover:text-brand"
        >
          {done ? <Check size={13} /> : <Copy size={13} />}
          {done ? UI.copied[lang] : UI.copy[lang]}
        </button>
      </div>
      <p className="mt-3 select-all font-mono text-[0.8rem] leading-relaxed text-muted">
        {citation}
      </p>
    </div>
  );
}
