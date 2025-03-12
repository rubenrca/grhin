import { FileText, Users, CheckSquare, Cloud, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCard from '../ui/FeatureCard';

const features = [
  {
    icon: FileText,
    title: 'Gestión de Documentos',
    description: 'Almacenamiento seguro y organizado de documentos de empleados'
  },
  {
    icon: Users,
    title: 'Gestión de Personal',
    description: 'Control eficiente de información y expedientes de empleados'
  },
  {
    icon: CheckSquare,
    title: 'Solicitudes',
    description: 'Sistema integrado de solicitudes y aprobaciones'
  },
  {
    icon: Cloud,
    title: 'En la Nube',
    description: 'Acceso seguro desde cualquier lugar y dispositivo'
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Protección avanzada de datos sensibles'
  },
  {
    icon: Clock,
    title: 'Automatización',
    description: 'Procesos automatizados para mayor eficiencia'
  }
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Formas decorativas */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-emerald-600/10 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-semibold text-white mb-2">Características Principales</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto my-6"></div>
          <p className="mt-4 text-xl text-emerald-100 max-w-3xl mx-auto font-light">
            Todo lo que necesitas para gestionar tus recursos humanos en un solo lugar
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}