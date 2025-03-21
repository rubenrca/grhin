import { Cloud } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Cloud className="h-8 w-8 text-[#20535F]" />
            <span className="ml-2 text-2xl font-bold text-gray-800">GHRIN</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#20535F]">Características</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#20535F]">Beneficios</a>
            <a href="#contact" className="text-gray-600 hover:text-[#20535F]">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}