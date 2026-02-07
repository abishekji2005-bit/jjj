import MagneticButton from "./MagneticButton.jsx";

const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" }
];

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-40 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-neon shadow-glow" />
          <span className="font-display text-sm uppercase tracking-[0.3em] text-mist">
            JJJ
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-mist/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-neon after:transition-all after:duration-300 hover:text-mist hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <MagneticButton label="Start a project" />
      </div>
    </header>
  );
};

export default Navbar;
