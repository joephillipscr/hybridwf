# HybridWF — Hybrid Workforce Standard

The site for the **Hybrid Workforce Standard**: an open administrative standard for
AI Employees, plus the WRM framework, the 120-principle matrix and the HWFS
self-assessment instrument.

English at the root, Spanish under `/es/` with translated slugs.

## Stack

Next.js 16 (static export) · React 19 · Tailwind 3 · TypeScript.
No runtime dependencies beyond `lucide-react`.

```bash
npm install
npm run dev      # http://localhost:3430
npm run build    # static export to out/
```

## Deployment — Cloudflare Pages

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `out` |
| Node version | 20+ |

Set `NEXT_PUBLIC_GA_ID` to enable Google Analytics. Absent, the component renders nothing.

## How it is organised

Content lives in `lib/` as typed bilingual data, never inside components. Every string
is `{ en, es }`, so the two language trees cannot drift apart.

| File | Holds |
| --- | --- |
| `lib/site.ts` | Identity, version, routes, navigation, locale counterparts |
| `lib/standard.ts` | The twenty-one normative clauses — the citable text |
| `lib/definition.ts` | Formal definition, nine-property test, vocabulary ladder |
| `lib/wrm.ts` | WRM framework: layers, ten domains, lifecycle, ten rules |
| `lib/principles.ts` | The 120-principle matrix (87 U / 20 A / 13 H) |
| `lib/maturity.ts` | Levels 0–6 and the category threshold |
| `lib/hwfs.ts` | The twelve dimensions and the evaluation logic |
| `lib/role.ts` | Hybrid Workforce Manager, scorecard, anti-KPI |
| `lib/transitions.ts` | Human → Artificial and Artificial → Human playbooks |
| `lib/glossary.ts` | Canonical bilingual glossary |
| `lib/governance.ts` | Disclosure, Review Board, amendment process, changelog |
| `lib/sources.ts` | The 23 sources and the methodological limits |

Page bodies are locale-agnostic components in `components/pages/`. The route files in
`app/(en)/` and `app/(es)/` are generated from one table:

```bash
node scripts/gen-routes.mjs
```

Add a page there, not by hand, so both languages stay in parity.

## Two decisions worth not reversing by accident

**The HWFS returns no score.** `lib/hwfs.ts` produces an allocation, a risk class, a
starting autonomy rung and the reasoning behind them — never a 0–100 number. A score
lets a manager who has already decided pick weights until the arithmetic agrees. The
hard gates in `evaluate()` (critical risk, relationship-as-product, undocumented
criteria, unverifiable output, strategic judgement) cap the allocation regardless of
how automatable everything else looks.

**This standard certifies nothing.** No product is scored, no seal is issued, and the
site is not a funnel for AIEmpl.com. The link to the platform exists once, in the
disclosure, because the author's commercial interest belongs stated rather than found.
See `/governance/`.

## Licensing — two licences, one repository

| What | Licence | File |
| --- | --- | --- |
| **The standard and its text** (the content in `lib/`, and the pages that render it) | **CC BY-SA 4.0** | `LICENSE-CONTENT.md` |
| **The site's source code** (components, config, build scripts, HWFS evaluation logic) | ⚠️ **Not yet decided** — see below | `LICENSE` |

Do not infer one from the other. The content licence is deliberate and settled:
anyone may cite, embed, translate, teach or commercially use the standard, and any
*modified* version must stay open under the same terms. A fork can exist; a closed fork
cannot. Full reasoning at `/license/` and in `LICENSE-CONTENT.md`.

**Open decision — the code licence.** The repository ships no `LICENSE` file yet, which
means the code is under default copyright (all rights reserved). Pick one before the
repo goes public:

- **MIT** — anyone can reuse the site's components. Fine if the code has no strategic value.
- **All rights reserved** — the standard is open, the implementation is not. Also fine, and
  the more common posture for a reference site.

Either is defensible; leaving it unstated in a public repo is not.

## Authorship

Written by Master Joe Phillips, who also builds AIEmpl.com. The conflict of interest is
declared on every page footer and in full at `/governance/`. The normative text changes
only by majority of the Standard Review Board.
