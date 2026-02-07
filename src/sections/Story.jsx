import { useRef } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { usePinnedStory } from "../animations/scrollAnimations.js";

const storyPanels = [
  {
    title: "Prelude: Set the tone",
    description:
      "Intro sequences layer typography, gradients, and subtle audio-reactive motion cues."
  },
  {
    title: "Act I: Showcase craft",
    description:
      "Progressive disclosure reveals deep product insights with a cinematic pace."
  },
  {
    title: "Act II: Immersive play",
    description:
      "Scroll-synced vignettes pair WebGL scenes with storytelling captions."
  },
  {
    title: "Finale: Conversion",
    description:
      "A frictionless CTA pathway with confident transitions and micro-feedback."
  }
];

const Story = () => {
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);

  usePinnedStory(sectionRef, panelRefs.current);

  return (
    <section id="story" className="px-6 py-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Scroll narrative"
              title="Story-driven sections that breathe with your scroll."
              subtitle="Borrowed from interactive journalism and experimental studios, adapted to a refined agency cadence."
            />
            <div className="space-y-8">
              {storyPanels.map((panel, index) => (
                <div
                  key={panel.title}
                  ref={(element) => {
                    panelRefs.current[index] = element;
                  }}
                  className="rounded-3xl border border-mist/10 bg-graphite/50 p-6"
                >
                  <h3 className="text-lg font-semibold text-mist">{panel.title}</h3>
                  <p className="mt-3 text-sm text-mist/60">{panel.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="story-visual sticky top-28 h-[520px] rounded-3xl border border-mist/10 bg-gradient-to-br from-neon/10 via-midnight to-ember/10 p-8">
            <div className="flex h-full flex-col justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-mist/60">
                Narrative timeline
              </p>
              <div className="space-y-4">
                {storyPanels.map((panel) => (
                  <div key={panel.title} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-neon" />
                    <span className="text-sm text-mist/70">{panel.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-mist/60">
                Scroll-synced transitions guide attention without losing context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
