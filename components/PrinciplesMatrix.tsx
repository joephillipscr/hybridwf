'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { UI } from '@/lib/i18n';
import { COUNTS, PRINCIPLES, P_DOMAINS, type PClass } from '@/lib/principles';
import type { Locale } from '@/lib/site';

const CLASS_STYLE: Record<PClass, string> = {
  U: 'text-universal',
  A: 'text-adapted',
  H: 'text-human',
};

const CLASS_LABEL: Record<PClass, keyof typeof UI> = {
  U: 'universal',
  A: 'adapted',
  H: 'humanOnly',
};

export default function PrinciplesMatrix({ lang }: { lang: Locale }) {
  const [cls, setCls] = useState<PClass | 'all'>('all');
  const [domain, setDomain] = useState<number | 'all'>('all');
  const [q, setQ] = useState('');

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PRINCIPLES.filter((p) => {
      if (cls !== 'all' && p.cls !== cls) return false;
      if (domain !== 'all' && p.domain !== domain) return false;
      if (!needle) return true;
      return (
        p.principle[lang].toLowerCase().includes(needle) ||
        p.human[lang].toLowerCase().includes(needle) ||
        p.artificial[lang].toLowerCase().includes(needle)
      );
    });
  }, [cls, domain, q, lang]);

  const filterBtn = (active: boolean) =>
    `rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
      active
        ? 'border-accent bg-accent/10 text-brand'
        : 'border-border text-muted hover:border-accent hover:text-brand'
    }`;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setCls('all')} className={filterBtn(cls === 'all')}>
          {lang === 'en' ? `All ${PRINCIPLES.length}` : `Todos (${PRINCIPLES.length})`}
        </button>
        {(['U', 'A', 'H'] as PClass[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCls(cls === c ? 'all' : c)}
            className={filterBtn(cls === c)}
          >
            <span className={CLASS_STYLE[c]}>●</span> {UI[CLASS_LABEL[c]][lang]} ({COUNTS[c]})
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setDomain('all')}
          className={filterBtn(domain === 'all')}
        >
          {lang === 'en' ? 'All domains' : 'Todos los dominios'}
        </button>
        {P_DOMAINS.map((d) => (
          <button
            key={d.n}
            type="button"
            onClick={() => setDomain(domain === d.n ? 'all' : d.n)}
            className={filterBtn(domain === d.n)}
          >
            {d.n}. {d.name[lang]}
          </button>
        ))}
      </div>

      <label className="mt-4 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5">
        <Search size={15} className="shrink-0 text-muted" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={lang === 'en' ? 'Search principles…' : 'Buscar principios…'}
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
        />
      </label>

      <p className="mt-4 font-mono text-xs text-muted">
        {rows.length} / {PRINCIPLES.length}
      </p>

      <div className="mt-3 overflow-x-auto">
        <table className="table-x min-w-[52rem]">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th className="w-1/4">{lang === 'en' ? 'Principle' : 'Principio'}</th>
              <th className="w-1/3">{lang === 'en' ? 'Human resource' : 'Recurso humano'}</th>
              <th className="w-1/3">
                {lang === 'en' ? 'Artificial resource' : 'Recurso artificial'}
              </th>
              <th className="w-16">{lang === 'en' ? 'Class' : 'Clase'}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.n}>
                <td className="font-mono text-xs">{p.n}</td>
                <td className="font-medium text-fg">{p.principle[lang]}</td>
                <td>{p.human[lang]}</td>
                <td>{p.artificial[lang]}</td>
                <td>
                  <span
                    className={`font-mono text-xs font-bold ${CLASS_STYLE[p.cls]}`}
                    title={UI[CLASS_LABEL[p.cls]][lang]}
                  >
                    {p.cls}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rows.length === 0 && (
        <p className="mt-6 text-sm text-muted">
          {lang === 'en' ? 'No principles match that filter.' : 'Ningún principio coincide con ese filtro.'}
        </p>
      )}
    </div>
  );
}
