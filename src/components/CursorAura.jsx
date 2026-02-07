import useMousePosition from "../hooks/useMousePosition.js";

const CursorAura = () => {
  const { x, y, intensity } = useMousePosition();

  const translateX = x * 120;
  const translateY = y * 120;
  const opacity = 0.2 + intensity * 0.4;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="gradient-ring absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          transform: `translate3d(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px), 0)`,
          opacity
        }}
      />
    </div>
  );
};

export default CursorAura;
