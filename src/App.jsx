import { useEffect } from "react";
import gsap from "gsap";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import CursorAura from "./components/CursorAura.jsx";
import Hero from "./sections/Hero.jsx";
import Capabilities from "./sections/Capabilities.jsx";
import Story from "./sections/Story.jsx";
import Showcase from "./sections/Showcase.jsx";
import Work from "./sections/Work.jsx";
import Lab from "./sections/Lab.jsx";
import CTA from "./sections/CTA.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  useEffect(() => {
    gsap.to(".page-transition", {
      scaleX: 0,
      transformOrigin: "right",
      duration: 1.2,
      ease: "power3.inOut",
      delay: 0.4
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="page-transition fixed inset-0 z-40 origin-left scale-x-100 bg-midnight" />
      <Loader />
      <CursorAura />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Capabilities />
        <Story />
        <Showcase />
        <Work />
        <Lab />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
