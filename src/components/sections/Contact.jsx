import Button from '../ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#115E59]">¿Listo para empezar?</h2>
          <p className="mt-4 text-xl text-[#0D9488]">
            Contáctanos para conocer más sobre cómo GHRIN puede ayudar a tu empresa
          </p>
          <Button className="mt-8">Contactar</Button>
        </div>
      </div>
    </section>
  );
}
