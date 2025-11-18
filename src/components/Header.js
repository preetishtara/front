import React from "react";

const Header = () => (
  <header className="w-full flex items-center justify-between px-16 py-4 bg-[#18171c]">
    {/* Left: Logo and Text */}
    <div className="flex flex-col items-center">
      {/* Replace with actual logo file name/path */}
      {/* <img src="/logo.png" alt="LAT Aerospace Logo" className="h-12 mb-1" /> */}
      <span className="text-m tracking-widest opacity-80 text-white hover:text-blue-500 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Elluzion</span>
    </div>
    {/* Right: Navigation */}
    <nav>
      <ul className="flex gap-10 text-white text-base font-semibold">
        <li className="flex items-center gap-2">
          <span className="text-blue-500 font-bold text-lg">/</span>
          <span className="hover:text-blue-400 transition">Home</span>
        </li>
        <li className="hover:text-blue-400 transition">About</li>
        <li className="hover:text-blue-400 transition">Careers</li>
        <li className="hover:text-blue-400 transition">Contact</li>
      </ul>
    </nav>
  </header>
);

export default Header;
