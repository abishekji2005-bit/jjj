import { useEffect } from "react";

const useParallax = (ref, speed = 0.2) => {
  useEffect(() => {
    if (!ref.current) return;

    let frame = null;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const offset = window.scrollY * speed;
        ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
        frame = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, speed]);
};

export default useParallax;
