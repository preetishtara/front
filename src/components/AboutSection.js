import React from "react";

const AboutSection = () => (
  <section className="w-full px-8 py-20 bg-[#14131a] flex flex-col items-center">
    <h2 className="text-5xl font-bold text-white mb-6 text-center">About Elluzion</h2>
    <p className="text-xl text-gray-300 max-w-3xl mb-10 text-center">
      Elluzion is building the future of retail by connecting how people shop online with how they behave inside real stores. We use AI, RFID, and real-time behavioral signals to create one unified intelligence system for shoppers, retailers, and digital platforms.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
      <div className="bg-[#18171c] rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl text-pink-400 font-semibold mb-3 text-center">For Shoppers</h3>
        <p className="text-gray-200 text-base text-center">
          Elluzion gives every person a personal AI that understands their style, preferences, and needs — making product discovery effortless across both online and offline experiences.
        </p>
      </div>
      <div className="bg-[#18171c] rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl text-blue-400 font-semibold mb-3 text-center">For Retailers</h3>
        <p className="text-gray-200 text-base text-center">
          Elluzion becomes a super-intelligent retail brain that reveals what customers pick, try, compare, and consider inside the store. This helps retailers improve decisions, increase conversions, and deliver deeply personalized experiences.
        </p>
      </div>
      <div className="bg-[#18171c] rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl text-purple-400 font-semibold mb-3 text-center">For Websites & Apps</h3>
        <p className="text-gray-200 text-base text-center">
          Elluzion powers hyper-personalized recommendations using live online and offline data, helping brands show exactly what each user wants at the right moment.
        </p>
      </div>
    </div>
    <div className="mt-12 max-w-3xl text-center">
      <p className="text-lg text-gray-300 mb-2">
        By merging intent and action, Elluzion makes shopping smarter, stores more intelligent, and retail truly personal.
      </p>
      <p className="text-lg text-pink-400 font-bold">
        We’re not just improving retail – we’re reinventing how humans and stores understand each other.
      </p>
    </div>
  </section>
);

export default AboutSection;
