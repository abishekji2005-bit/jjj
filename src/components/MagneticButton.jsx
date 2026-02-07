import { useRef } from "react";
import useMousePosition from "../hooks/useMousePosition.js";

const MagneticButton = ({ label }) => {
  const buttonRef = useRef(null);
  const { x, y } = useMousePosition();

  const translateX = x * 12;
  const translateY = y * 12;

  return (
    <button
      ref={buttonRef}
      className="group relative hidden overflow-hidden rounded-full border border-mist/30 px-5 py-2 text-xs uppercase tracking-[0.3em] text-mist/80 transition-all duration-300 hover:border-neon hover:text-neon lg:inline-flex"
      style={{ transform: `translate3d(${translateX}px, ${translateY}px, 0)` }}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 -z-0 scale-x-0 bg-neon/10 transition-transform duration-300 group-hover:scale-x-100" />
    </button>
  );
};

export default MagneticButton;
