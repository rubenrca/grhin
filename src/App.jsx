import Navbar from './components/layout/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import Features from './components/sections/Features.jsx';
import Contact from './components/sections/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
    </div>
  );
}

export default App;