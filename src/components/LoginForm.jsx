import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-[#20535F] mb-8">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#20535F]">Correo Electrónico</label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-[#20535F]" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 block w-full rounded-md border border-[#20535F] shadow-sm focus:border-[#20535F] focus:ring-emerald-500"
              placeholder="ejemplo@empresa.com"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-emerald-700">Contraseña</label>
          <div className="mt-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-emerald-500" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 block w-full rounded-md border border-emerald-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <a href="#" className="text-sm text-emerald-600 hover:text-emerald-500">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
}