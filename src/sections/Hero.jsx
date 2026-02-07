import { useEffect, useRef } from "react";
import gsap from "gsap";
import useParallax from "../hooks/useParallax.js";

const Hero = () => {
  const heroRef = useRef(null);
  const orbitRef = useRef(null);

  useParallax(orbitRef, 0.12);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out"
        }
      );
      gsap.to(".hero-pulse", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden px-6 pt-28"
    >
      <div className="noise-layer" />
      <div
        ref={orbitRef}
        className="parallax absolute -left-20 top-24 h-72 w-72 rounded-full border border-neon/20 bg-neon/5 blur-3xl"
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-6">
          <p className="hero-line text-xs uppercase tracking-[0.4em] text-neon/70">
            Unified digital atelier
          </p>
          <h1 className="hero-line font-display text-4xl font-semibold leading-tight text-mist md:text-6xl">
            A premium, story-first web experience blending agency craft, product precision,
            and fashion-grade polish.
          </h1>
          <p className="hero-line text-base text-mist/70 md:text-lg">
            We orchestrate seamless narratives, cinematic scroll, and tactile interactions
            inspired by the world’s most celebrated digital studios.
          </p>
          <div className="hero-line flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-neon px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-midnight">
              Explore the system
            </button>
            <button className="rounded-full border border-mist/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-mist/70">
              View case studies
            </button>
          </div>
        </div>
        <div className="relative flex w-full max-w-md flex-col gap-6">
          <div className="hero-pulse rounded-3xl border border-mist/10 bg-graphite/70 p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.3em] text-mist/50">Live signal</p>
            <p className="mt-4 text-2xl font-semibold text-mist">
              48 active insights
            </p>
            <p className="mt-2 text-sm text-mist/60">
              Blending interaction labs, immersive product stories, and cinematic UI.
            </p>
          </div>
          <div className="rounded-3xl border border-mist/10 bg-midnight/70 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neon/70">Adaptive palette</p>
            <div className="mt-5 flex gap-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="h-10 w-10 rounded-2xl"
                  style={{
                    background: `rgba(124, 240, 255, ${0.1 + index * 0.15})`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
