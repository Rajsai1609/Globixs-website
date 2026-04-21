type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}

