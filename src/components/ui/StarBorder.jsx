import React from 'react';

const StarBorder = ({
  as: Component = "div",
  className = "",
  color = "white",
  speed = "6s",
  children,
  containerClassName = "",
  ...rest
}) => {
  return (
    <Component className={`relative inline-block overflow-hidden rounded-lg ${className}`} {...rest}>
      <div
        className="absolute w-[300%] h-[50%] opacity-30 bottom-[-15px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-30 top-[-15px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className={`relative z-1 rounded-lg h-full ${containerClassName}`}>
        {children}
      </div>
    </Component>
  );
};

export default StarBorder; 