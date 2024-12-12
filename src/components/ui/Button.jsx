import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-[#20535F] text-white hover:bg-[#164149] shadow-sm",
    outline: "border-2 border-[#20535F] text-[#20535F] hover:bg-[#20535F] hover:text-white shadow-sm",
    white: "bg-white text-[#20535F] hover:bg-gray-100 shadow-sm"
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