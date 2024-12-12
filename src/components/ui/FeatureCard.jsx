export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="absolute -top-4 left-4">
        <div className="bg-[#20535F] rounded-full p-3">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <h3 className="mt-8 text-xl font-medium text-[#20535F]">{title}</h3>
      <p className="mt-2 text-[#20535F]">{description}</p>
    </div>
  );
}