import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import LoginForm from '../auth/LoginForm';
import Button from '../ui/Button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  // Crear datos para las burbujas de fondo
  const bubbles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 5, // Entre 5 y 20px (tamaños más grandes)
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 15, // Entre 15 y 35 segundos
    delay: Math.random() * 5,
  }));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Variante para animación de "typewriter" en texto destacado
  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.98 }
  };

  const chevronVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      opacity: [0.8, 1, 0.8],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const cloudText = "integrado en la nube";

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative pt-20" id="home">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Capa de burbujas sutiles */}
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute rounded-full bg-emerald-400/15 backdrop-blur-sm"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: bubble.left,
                top: bubble.top,
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.2)'
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: [0, 0.6, 0.3], 
                y: [0, -100, -200],
                x: [`${Math.sin(bubble.id) * 20}px`, `${Math.cos(bubble.id) * 30}px`, `${Math.sin(bubble.id) * 10}px`]
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Formas decorativas en el fondo con movimiento paralaje suave */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-emerald-600/20 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.7,
          rotate: [-5, 5, -5],
          y: [0, -15, 0]
        }}
        transition={{ 
          opacity: { duration: 2 },
          rotate: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-40 left-20 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.7,
          rotate: [5, -5, 5],
          x: [0, -10, 0]
        }}
        transition={{ 
          opacity: { duration: 2, delay: 0.5 },
          rotate: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-40 w-80 h-80 bg-green-500/20 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.7,
          rotate: [0, -3, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          opacity: { duration: 2, delay: 0.8 },
          rotate: { duration: 22, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 22, repeat: Infinity, ease: "easeInOut" }
        }}
      ></motion.div>
      
      {/* Efecto de partículas muy sutiles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-tr from-emerald-300/30 to-teal-300/20"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 5px rgba(16, 185, 129, 0.4)'
            }}
            animate={{
              y: [0, -Math.random() * 150],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.7, 0],
              scale: [1, Math.random() + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div 
          className="text-center"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <motion.div variants={item} className="mx-auto max-w-5xl">
            <motion.h1 
              variants={item} 
              className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.5, duration: 1.2 }}
              >
                Gestor de recursos humanos
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-16 leading-tight"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
            >
              {cloudText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants} className={char === " " ? "mr-4" : ""}>
                  {char}
                </motion.span>
              ))}
            </motion.h2>
            
            <motion.div 
              variants={item}
              className="mt-16"
            >
              <motion.a 
                href="#contactanos" 
                onClick={(e) => handleScrollToSection(e, 'contactanos')}
                className="inline-block text-slate-900 bg-emerald-400 hover:bg-emerald-300 px-10 py-4 rounded-md text-lg font-medium transition-all duration-300 tracking-wide shadow-md hover:shadow-lg hover:shadow-emerald-500/30"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Comenzar ahora
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center w-full mt-12 mb-4"
            variants={chevronVariants}
            initial="initial"
            animate="animate"
            onClick={(e) => handleScrollToSection(e, 'features')}
          >
            <ChevronDown className="w-10 h-10 text-emerald-300 cursor-pointer" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}