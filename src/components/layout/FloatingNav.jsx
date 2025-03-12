import { useState, useEffect } from 'react';
import { Home, Users, Phone, LogIn, ArrowUp } from 'lucide-react';

export default function FloatingNav() {
  const [showNav, setShowNav] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <div className="bg-slate-800/90 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-emerald-800/30">
        <div className="flex items-center space-x-1 sm:space-x-3">
          <a 
            href="#home" 
            onClick={(e) => handleScrollToSection(e, 'home')}
            className="p-2 text-emerald-100 hover:text-emerald-400 transition-colors duration-200 flex flex-col items-center text-xs"
            title="Inicio"
          >
            <Home size={20} />
            <span className="hidden sm:inline mt-1">Inicio</span>
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleScrollToSection(e, 'features')}
            className="p-2 text-emerald-100 hover:text-emerald-400 transition-colors duration-200 flex flex-col items-center text-xs"
            title="Características"
          >
            <Users size={20} />
            <span className="hidden sm:inline mt-1">Características</span>
          </a>
          <a 
            href="#contactanos" 
            onClick={(e) => handleScrollToSection(e, 'contactanos')}
            className="p-2 text-emerald-100 hover:text-emerald-400 transition-colors duration-200 flex flex-col items-center text-xs"
            title="Contacto"
          >
            <Phone size={20} />
            <span className="hidden sm:inline mt-1">Contacto</span>
          </a>
          <a 
            href="#login" 
            onClick={(e) => handleScrollToSection(e, 'login')}
            className="p-2 text-emerald-100 hover:text-emerald-400 transition-colors duration-200 flex flex-col items-center text-xs"
            title="Login"
          >
            <LogIn size={20} />
            <span className="hidden sm:inline mt-1">Login</span>
          </a>
          <button
            onClick={(e) => handleScrollToSection(e, 'home')}
            className="p-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200 bg-slate-700 rounded-full"
            title="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
} 