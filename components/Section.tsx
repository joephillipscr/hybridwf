import Reveal from './Reveal';

export function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal>
      <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
        {lede && <p className="lede mt-4">{lede}</p>}
      </div>
    </Reveal>
  );
}

/** Page header used at the top of every inner page. */
export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="aurora border-b border-border">
      <div className="container-x py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[1.1] sm:text-5xl">
          {title}
        </h1>
        <p className="lede mt-5 max-w-3xl">{lede}</p>
      </div>
    </div>
  );
}
