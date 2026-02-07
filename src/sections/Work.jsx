import { useRef } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { useRevealOnScroll } from "../animations/scrollAnimations.js";

const workItems = [
  {
    title: "Aurora Commerce",
    description: "Luxury commerce launch with interactive product storytelling.",
    tags: ["E-commerce", "3D", "Motion"]
  },
  {
    title: "Horizon Mobility",
    description: "Automotive configurator with cinematic transitions and ambient UI.",
    tags: ["Automotive", "Configurator", "WebGL"]
  },
  {
    title: "Nimbus OS",
    description: "SaaS platform redesign with storytelling onboarding flow.",
    tags: ["SaaS", "Product", "UX"]
  }
];

const Work = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef, { stagger: 0.2 });

  return (
    <section id="work" className="px-6 py-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Portfolio stories that mix minimal product clarity with experimental polish."
          subtitle="Each case study blends narrative structure, premium motion, and responsive interaction patterns."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {workItems.map((item) => (
            <div
              key={item.title}
              className="hover-shift group flex h-full flex-col justify-between rounded-3xl border border-mist/10 bg-graphite/60 p-6 shadow-card"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-mist/50">Case study</p>
                <h3 className="mt-4 text-xl font-semibold text-mist group-hover:text-neon">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-mist/60">{item.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-mist/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-mist/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
