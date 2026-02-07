const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.4em] text-neon/70">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-mist md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="max-w-2xl text-sm text-mist/60 md:text-base">{subtitle}</p> : null}
    </div>
  );
};

export default SectionHeading;
