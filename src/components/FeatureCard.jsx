const FeatureCard = ({ title, description, tag }) => {
  return (
    <div className="hover-shift group rounded-2xl border border-mist/10 bg-graphite/60 p-6 shadow-card backdrop-blur">
      <p className="text-xs uppercase tracking-[0.35em] text-neon/70">{tag}</p>
      <h3 className="mt-4 text-lg font-semibold text-mist group-hover:text-neon">
        {title}
      </h3>
      <p className="mt-3 text-sm text-mist/60">{description}</p>
    </div>
  );
};

export default FeatureCard;
