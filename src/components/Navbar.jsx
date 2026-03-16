import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="cursor-pointer group flex items-center gap-2"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-brand-500 to-blue-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition-all">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-300 transition-colors">
            Pavan<span className="text-brand-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-brand-400 font-medium"
              className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium transition-colors hover:glow"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/pavankalyan"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all text-white backdrop-blur-md"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, h: 0 }}
            animate={{ opacity: 1, h: 'auto' }}
            exit={{ opacity: 0, h: 0 }}
            className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 text-lg hover:text-brand-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
