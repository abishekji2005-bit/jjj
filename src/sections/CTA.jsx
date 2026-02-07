import { useRef } from "react";
import { useRevealOnScroll } from "../animations/scrollAnimations.js";

const CTA = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section className="px-6 py-24">
      <div
        ref={sectionRef}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl border border-neon/30 bg-gradient-to-r from-neon/10 via-graphite/60 to-ember/10 p-10 md:flex-row md:items-center"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neon/70">
            Ready to build
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-mist">
            Let’s craft your next immersive experience.
          </h2>
        </div>
        <button className="rounded-full bg-neon px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
          Book a discovery
        </button>
      </div>
    </section>
  );
};

export default CTA;
