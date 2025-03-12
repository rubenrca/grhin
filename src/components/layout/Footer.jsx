import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-emerald-900/30 py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/10 rounded-full mix-blend-soft-light filter blur-xl opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <h3 className="text-xl font-semibold tracking-wide text-white uppercase">GRHIN</h3>
            </div>
            <p className="text-emerald-100/70 mt-4 font-light">
              Sistema de gestión de recursos humanos integrado en la nube. Simplifica la administración de personal, optimiza procesos y mantén toda la información de forma segura.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 bg-slate-800 rounded-full text-emerald-400 hover:text-emerald-300 hover:bg-slate-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full text-emerald-400 hover:text-emerald-300 hover:bg-slate-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full text-emerald-400 hover:text-emerald-300 hover:bg-slate-700 transition-colors">
                <Github size={18} />
              </a>
              <a href="mailto:info@grhin.com" className="p-2 bg-slate-800 rounded-full text-emerald-400 hover:text-emerald-300 hover:bg-slate-700 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleScrollToSection(e, 'home')}
                  className="text-emerald-100/70 hover:text-emerald-100 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleScrollToSection(e, 'features')}
                  className="text-emerald-100/70 hover:text-emerald-100 transition-colors"
                >
                  Características
                </a>
              </li>
              <li>
                <a 
                  href="#contactanos" 
                  onClick={(e) => handleScrollToSection(e, 'contactanos')}
                  className="text-emerald-100/70 hover:text-emerald-100 transition-colors"
                >
                  Contáctanos
                </a>
              </li>
              <li>
                <a 
                  href="#login" 
                  onClick={(e) => handleScrollToSection(e, 'login')}
                  className="text-emerald-100/70 hover:text-emerald-100 transition-colors"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-emerald-100/70">Av. Principal 123</li>
              <li className="text-emerald-100/70">Madrid, España</li>
              <li className="text-emerald-100/70">+34 912 345 678</li>
              <li><a href="mailto:info@grhin.com" className="text-emerald-100/70 hover:text-emerald-100 transition-colors">info@grhin.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-900/20 mt-12 pt-8 text-center">
          <p className="text-emerald-100/60 text-sm">
            &copy; {year} GRHIN. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 