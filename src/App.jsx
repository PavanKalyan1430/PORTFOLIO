import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Prevent default scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-500 selection:text-white pb-10">
      {/* Dynamic Background Layout */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0f]">
        {/* Glow Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-brand-800/15 blur-[120px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <Navbar />
      
      <main className="flex flex-col items-center w-full px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
