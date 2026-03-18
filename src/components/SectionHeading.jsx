function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
