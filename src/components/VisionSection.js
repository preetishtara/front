import React from "react";
import visionImg from '../assets/vision.avif'; 

const VisionSection = () => (
  <section className="w-full min-h-screen bg-[#18171c] px-10 py-24 flex flex-col md:flex-row items-center justify-center gap-16">
    {/* Left: Vision text */}
    <div className="md:w-2/3 w-full flex flex-col justify-center items-start md:pr-20 text-white">
      <h2 className="text-5xl font-extrabold mb-6 tracking-wide">Our Vision </h2>
      <p className="text-xl mb-6 leading-relaxed text-gray-300">
        Elluzion aims to create a future where every person has an AI that understands them across both online and offline worlds. By learning how people browse, search, pick, try, and interact with products, this AI makes shopping effortless, personal, and perfectly timed.
      </p>
      <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-8">
        <li>Unify all customer behavior into one intelligent system.</li>
        <li>Transform retail into a seamless, intuitive, and deeply personalized experience for everyone.</li>
        <li>Bridge online and offline shopping journeys for total personalization.</li>
        <li>Leverage AI and real-time data to enhance shopper engagement and satisfaction.</li>
        <li>Empower retailers with actionable insights for smarter decision-making.</li>
      </ul>
      <p className="text-lg font-semibold text-pink-400 tracking-wide">
        Our vision is not just to improve retail but to reinvent how humans and stores understand each other.
      </p>
    </div>
    {/* Right: Larger vision image */}
    <div className="md:w-1/3 w-full flex justify-center items-center">
      <img
        src={visionImg}
        alt="Elluzion Vision"
        className="max-w-md md:max-w-lg rounded-xl shadow-3xl border-4 border-pink-500"
      />
    </div>
  </section>
);

export default VisionSection;
