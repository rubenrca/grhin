import { Cloud } from 'lucide-react';
import LoginForm from '../auth/LoginForm';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <div className="pt-16">
      <div className="relative bg-gradient-to-r from-[#20535F] to-[#0F766E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <Cloud className="h-12 w-12" />
                <h1 className="ml-4 text-4xl font-bold">GHRIN</h1>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Gestión de Recursos Humanos Integrada en la Nube
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Simplifica la gestión de documentos, optimiza procesos y mantén toda la información de tus empleados de forma segura y accesible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="white" 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Contacto
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50"></div>
      </div>
    </div>
  );
}