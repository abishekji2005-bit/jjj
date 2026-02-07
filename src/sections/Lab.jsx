import { Suspense, lazy, useRef } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { useRevealOnScroll } from "../animations/scrollAnimations.js";

const OrbitalScene = lazy(() => import("../three/OrbitalScene.jsx"));

const Lab = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="lab" className="px-6 py-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Interaction lab"
              title="A lightweight WebGL vignette with responsive lighting and depth."
              subtitle="Inspired by immersive product microsites and interactive art, reimagined for performance and clarity."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Mouse-reactive lighting",
                "GPU-friendly geometry",
                "Lazy-loaded on demand",
                "Accessible fallback"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-mist/10 bg-graphite/50 p-4 text-sm text-mist/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[360px] overflow-hidden rounded-3xl border border-mist/10 bg-gradient-to-br from-midnight via-graphite to-midnight p-6">
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center text-sm text-mist/60">
                  Loading 3D scene...
                </div>
              }
            >
              <OrbitalScene />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;
