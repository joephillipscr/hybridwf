import PrinciplesMatrix from '../PrinciplesMatrix';
import Reveal from '../Reveal';
import { PageHeader, Section } from '../Section';
import { COUNTS, MATRIX_CAVEAT } from '@/lib/principles';
import type { Locale } from '@/lib/site';

const C = {
  eyebrow: { en: 'Appendix', es: 'Apéndice' },
  title: { en: '120 principles, side by side', es: '120 principios, lado a lado' },
  lede: {
    en: 'Each administrative principle with its human expression, its artificial equivalent, and a classification: universal, adapted, or exclusively human.',
    es: 'Cada principio administrativo con su expresión humana, su equivalente artificial y una clasificación: universal, adaptado o exclusivamente humano.',
  },
  reading: {
    en: `The consequence matters more than the count. ${COUNTS.U} of 120 principles survive the change of occupant untouched — most of the administrative discipline does not disappear with AI. ${COUNTS.A} keep their intent and change mechanism. Only ${COUNTS.H} belong to the human condition and must never be transferred to software by a naive metaphor.`,
    es: `La consecuencia importa más que el conteo. ${COUNTS.U} de 120 principios sobreviven intactos al cambio de ocupante — la mayor parte de la disciplina administrativa no desaparece con IA. ${COUNTS.A} conservan su intención y cambian de mecanismo. Solo ${COUNTS.H} pertenecen a la condición humana y nunca deben trasladarse al software por una metáfora ingenua.`,
  },
};

export default function PrinciplesPage({ lang }: { lang: Locale }) {
  return (
    <>
      <PageHeader eyebrow={C.eyebrow[lang]} title={C.title[lang]} lede={C.lede[lang]} />

      <Section>
        <Reveal>
          <p className="prose-x max-w-3xl">{C.reading[lang]}</p>
        </Reveal>
        <div className="mt-10">
          <PrinciplesMatrix lang={lang} />
        </div>
        <Reveal>
          <p className="mt-10 max-w-3xl border-t border-border pt-6 text-sm leading-relaxed text-muted">
            {MATRIX_CAVEAT[lang]}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
