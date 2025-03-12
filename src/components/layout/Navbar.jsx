import { useState, useEffect } from 'react';

export default function Navbar() {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleScrollToSection(e, 'home')}
              className="text-2xl font-semibold uppercase tracking-wide text-white"
            >
              GRHIN
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="#login" 
              onClick={(e) => handleScrollToSection(e, 'login')}
              className="font-normal transition-colors duration-200 px-4 py-2 text-emerald-100 hover:text-white"
            >
              Login
            </a>
            <a 
              href="#contactanos" 
              onClick={(e) => handleScrollToSection(e, 'contactanos')}
              className="text-slate-900 bg-emerald-400 hover:bg-emerald-300 font-medium px-6 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}