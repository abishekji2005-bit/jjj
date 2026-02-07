import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useRevealOnScroll = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          ...options
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
};

export const usePinnedStory = (ref, panelRefs) => {
  useEffect(() => {
    if (!ref.current || panelRefs.length === 0) return;

    const ctx = gsap.context(() => {
      panelRefs.forEach((panel, index) => {
        gsap.fromTo(
          panel,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
              end: "bottom 40%",
              scrub: true
            }
          }
        );
      });

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".story-visual",
        pinSpacing: true
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, panelRefs]);
};
