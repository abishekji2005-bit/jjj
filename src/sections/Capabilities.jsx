import { useRef } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import { useRevealOnScroll } from "../animations/scrollAnimations.js";

const capabilities = [
  {
    tag: "Navigation",
    title: "Hover-led mega navigation",
    description:
      "Adaptive menus that react to cursor intent and reveal a layered preview grid."
  },
  {
    tag: "Motion",
    title: "Cinematic scroll choreography",
    description:
      "Scroll-triggered reveals with parallax depth and contextual micro-animations."
  },
  {
    tag: "Typography",
    title: "Dynamic type system",
    description:
      "Responsive type scales that pulse, stretch, and shift weight as you move."
  },
  {
    tag: "Product",
    title: "Minimalist product storytelling",
    description:
      "Gallery sections that balance negative space with high-definition detail."
  }
];

const Capabilities = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="capabilities" className="px-6 py-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="A unified interaction system that merges agency artistry and product clarity."
          subtitle="We distill the finest UI patterns from award-winning sites into a consistent, modular toolkit."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
