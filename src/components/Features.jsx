import { FileText, Users, CheckSquare, Cloud, Shield, Clock } from 'lucide-react';

export default function Features() {
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

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Características Principales</h2>
          <p className="mt-4 text-xl text-gray-600">
            Todo lo que necesitas para gestionar tus recursos humanos en un solo lugar
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 left-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="mt-8 text-xl font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}