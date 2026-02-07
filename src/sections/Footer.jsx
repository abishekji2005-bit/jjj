const Footer = () => {
  return (
    <footer className="border-t border-mist/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-mist/60 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-neon/70">JJJ Collective</p>
          <p>Immersive digital experiences built for premium brands.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em]">
          <a className="hover:text-neon" href="#vision">
            Vision
          </a>
          <a className="hover:text-neon" href="#work">
            Work
          </a>
          <a className="hover:text-neon" href="#lab">
            Lab
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
