import { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setHidden(true)
    });

    tl.to(".loader-progress", {
      width: "100%",
      duration: 1.6,
      ease: "power2.inOut"
    }).to(
      ".loader",
      {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
        pointerEvents: "none"
      },
      ">-0.3"
    );
  }, []);

  if (hidden) return null;

  return (
    <div className="loader fixed inset-0 z-50 flex items-center justify-center bg-midnight">
      <div className="text-center space-y-6">
        <p className="font-display text-sm uppercase tracking-wide text-mist/60">
          Calibrating immersive flow
        </p>
        <div className="loader-bar h-1 w-64 rounded-full bg-graphite">
          <div className="loader-progress h-1 w-0 rounded-full bg-neon" />
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-neon/70">
          JJJ Collective
        </p>
      </div>
    </div>
  );
};

export default Loader;
