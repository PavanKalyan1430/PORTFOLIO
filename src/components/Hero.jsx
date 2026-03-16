import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center relative pt-20">
      
      {/* Main Content Container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-500/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium text-brand-200">Available for Opportunities</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
            Hi, I'm <br className="hidden lg:block" />
            <span className="text-gradient">Pavan Kalyan</span>
          </h1>
          
          <div className="text-xl md:text-3xl font-medium text-gray-300 mb-6 h-[40px]">
            <TypeAnimation
              sequence={[
                'AI & Data Explorer', 1000,
                'Problem Solver', 1000,
                'ML Enthusiast', 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-brand-400"
            />
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
            I craft visually stunning, high-performance web applications and intelligent systems that solve real-world problems. Modern design meets deep engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <Link 
              to="projects" 
              smooth={true} 
              duration={800}
              className="relative px-8 py-4 w-full sm:w-auto text-center rounded-xl font-semibold bg-white text-black hover:bg-gray-200 transition-all cursor-pointer group overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-300/0 via-brand-400/30 to-brand-300/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
            <a 
              href="/resume.pdf"
              download="Pavan_Kalyan_Resume.pdf"
              className="relative px-8 py-4 w-full sm:w-auto text-center rounded-xl font-semibold bg-brand-600/20 text-brand-300 hover:bg-brand-500 hover:text-white border border-brand-500/50 transition-all cursor-pointer group overflow-hidden"
            >
              Download Resume
            </a>
            
            <Link 
              to="contact" 
              smooth={true} 
              duration={800}
              className="px-8 py-4 w-full sm:w-auto text-center rounded-xl font-semibold text-white glass hover:bg-white/10 border border-white/10 hover:border-brand-500/50 transition-all cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Contact Me
            </Link>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-5">
            {[
              { icon: <Github />, href: 'https://github.com/PavanKalyan1430' },
              { icon: <Linkedin />, href: 'https://linkedin.com/in/kalyan6565' },
              { icon: <Mail />, href: 'mailto:pavankalyanreddy2525@gmail.com' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass text-gray-400 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/50 hover:-translate-y-1 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Right Image/Avatar Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative"
        >
          {/* Animated Glow Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-blue-500 rounded-full blur-[80px] opacity-40 animate-pulse-slow"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-br from-brand-400/30 to-blue-500/30 backdrop-blur-3xl border border-white/20 animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-brand-950 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-blue-600 opacity-20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src="/avatar.jpg" 
                alt="Pavan Kalyan" 
                className="w-full h-full object-cover object-top scale-125 group-hover:scale-150 transition-all duration-700"
              />
            </div>
            
            {/* Floating Tags */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 border-brand-400/40 shadow-[0_0_15px_rgba(139,92,246,0.3)] text-brand-100"
            >
              <span>⚛️</span> React
            </motion.div>
            <motion.div 
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-8 glass px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.3)] text-blue-100"
            >
              <span>🐍</span> Python
            </motion.div>
          </div>
        </motion.div>
        
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
