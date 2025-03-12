import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300";
  const variants = {
    primary: "bg-emerald-400 text-slate-900 hover:bg-emerald-300 shadow-md hover:shadow-lg hover:shadow-emerald-400/20",
    secondary: "bg-slate-700 text-white hover:bg-slate-600 shadow-md",
    outline: "border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10",
    dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg",
    ghost: "text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}