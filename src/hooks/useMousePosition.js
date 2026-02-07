import { useEffect, useState } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, intensity: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = event.clientX / innerWidth - 0.5;
      const y = event.clientY / innerHeight - 0.5;
      const intensity = clamp(Math.hypot(x, y) * 2.4, 0, 1);
      setPosition({ x, y, intensity });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
};

export default useMousePosition;
