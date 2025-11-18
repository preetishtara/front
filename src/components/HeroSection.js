import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import main from '../assets/main.jpeg';

const HeroSection = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1.2,
        duration: 4.2,
        ease: "power3.out",
      }
    );
  }, []);

return (
<section
      className="w-full min-h-screen flex flex-col items-center justify-start pt-32"
      style={{
        background: `url(${main}) center center / cover no-repeat`,
      }}
    >
      <h1
        ref={logoRef}
        className="text-9xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent tracking-tight mb-6 mt-[7rem]"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Elluzion Ai
      </h1>
      <div className="text-2xl text-white opacity-80 tracking-wider text-center mt-4">
        India's First <b>Hyper personalised </b> AI-AI Marketplace
      </div>
    </section>
  );
};


export default HeroSection;

        // "url('/your-image-name.jpg') center center/cover no-repeat",
