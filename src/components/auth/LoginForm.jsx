import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <motion.div 
      id="login"
      className="bg-slate-800/60 backdrop-blur-md p-8 rounded-lg border border-emerald-900/20 shadow-xl w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-medium text-center text-white mb-6">Iniciar Sesión</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-emerald-100 mb-2">Correo Electrónico</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-emerald-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 block w-full rounded-md bg-slate-700/50 border border-emerald-900/20 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 text-white py-3"
              placeholder="ejemplo@empresa.com"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-100 mb-2">Contraseña</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-emerald-400" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 block w-full rounded-md bg-slate-700/50 border border-emerald-900/20 shadow-sm focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 text-white py-3"
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-sm font-medium tracking-wide text-slate-900 bg-emerald-400 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <a href="#" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </motion.div>
  );
}