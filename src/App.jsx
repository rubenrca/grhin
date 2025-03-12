import Navbar from './components/layout/Navbar.jsx';
import FloatingNav from './components/layout/FloatingNav.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Features from './components/sections/Features.jsx';
import Contact from './components/sections/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <FloatingNav />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;