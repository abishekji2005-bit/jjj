import { useRef } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { useRevealOnScroll } from "../animations/scrollAnimations.js";

const showcaseItems = [
  {
    title: "Ambient UI",
    description: "Soft gradients and layered blur create a premium atmospheric depth.",
    metric: "18ms"
  },
  {
    title: "Gesture-aware cards",
    description: "Hover and focus states respond with light and motion feedback.",
    metric: "96%"
  },
  {
    title: "Adaptive storytelling",
    description: "Content density shifts for mobile, tablet, and cinematic desktop views.",
    metric: "4x"
  }
];

const Showcase = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef, { stagger: 0.2 });

  return (
    <section id="showcase" className="px-6 py-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Interactive components"
          title="Micro-interactions and data moments that reward curiosity."
          subtitle="A blend of dashboard clarity and experimental detail, borrowed from product-led experiences."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {showcaseItems.map((item) => (
            <div
              key={item.title}
              className="hover-shift relative overflow-hidden rounded-3xl border border-mist/10 bg-graphite/60 p-6"
            >
              <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-neon/10 blur-2xl" />
              <p className="text-xs uppercase tracking-[0.3em] text-neon/70">Insight</p>
              <h3 className="mt-4 text-xl font-semibold text-mist">{item.title}</h3>
              <p className="mt-3 text-sm text-mist/60">{item.description}</p>
              <p className="mt-6 text-3xl font-semibold text-neon">{item.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
