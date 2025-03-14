import StarBorder from './StarBorder';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <StarBorder 
      as="div" 
      className="w-full h-full" 
      color="#10b981"
      speed="12s"
      containerClassName="relative p-6 rounded-lg transition-all duration-300 bg-slate-800/60 backdrop-blur-md hover:bg-slate-700/70 border border-emerald-900/20 hover:border-emerald-800/30 hover:shadow-xl hover:shadow-emerald-900/5 h-full"
    >
      <div className="flex items-center mb-5">
        <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-md p-3 mr-4 shadow-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-medium text-white transition-all duration-300">{title}</h3>
      </div>
      <p className="text-emerald-100/80 group-hover:text-emerald-100 transition-colors duration-300 font-light">{description}</p>
    </StarBorder>
  );
}