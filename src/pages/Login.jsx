import { useState } from 'react';
import { motion } from 'framer-motion';
import LoginForm from '../components/auth/LoginForm';
import { ArrowLeft } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden py-12">
      {/* Formas decorativas en el fondo */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-600/20 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-80 h-80 bg-green-500/20 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/" className="flex items-center text-emerald-300 hover:text-emerald-200 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Volver al inicio</span>
            </a>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Acceso a GRHIN
              </h1>
              <p className="text-xl text-emerald-100 mb-8 font-light">
                Accede a tu panel de control para administrar todos los recursos humanos de tu empresa desde un solo lugar.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-400 flex items-center justify-center mr-3 mt-1">
                    <span className="text-slate-900 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-emerald-100">Acceso seguro a todos tus documentos</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-400 flex items-center justify-center mr-3 mt-1">
                    <span className="text-slate-900 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-emerald-100">Gestión centralizada de empleados</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-400 flex items-center justify-center mr-3 mt-1">
                    <span className="text-slate-900 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-emerald-100">Panel de datos analíticos avanzados</p>
                </li>
              </ul>
            </motion.div>
            
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
} 