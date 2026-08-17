import { Eyebrow } from "@/components/brochure";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Set on dark slate bands so the eyebrow and text stay legible. */
  onDark?: boolean;
};

export function SectionTitle({ eyebrow, title, description, onDark = false }: Props) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          onDark ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-3xl text-base leading-7 sm:text-lg ${
            onDark ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
