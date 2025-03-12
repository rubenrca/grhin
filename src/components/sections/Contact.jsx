import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contactanos" className="py-24 bg-gradient-to-t from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Formas decorativas */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-semibold text-white mb-2">¿Listo para empezar?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto my-6"></div>
          <p className="mt-4 text-xl text-emerald-100 mb-10 font-light">
            Contáctanos para conocer más sobre cómo GRHIN puede transformar la gestión de recursos humanos en tu empresa
          </p>

          <div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-lg border border-emerald-900/20 shadow-xl mt-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-emerald-100 mb-2 text-left text-sm">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-900/20 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-emerald-100 mb-2 text-left text-sm">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-900/20 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="empresa" className="block text-emerald-100 mb-2 text-left text-sm">Empresa</label>
                <input 
                  type="text" 
                  id="empresa" 
                  className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-900/20 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-emerald-100 mb-2 text-left text-sm">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  rows="4" 
                  className="w-full px-4 py-3 bg-slate-700/50 border border-emerald-900/20 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>
              <Button variant="primary" fullWidth className="mt-4 flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
