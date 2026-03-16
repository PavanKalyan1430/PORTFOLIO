import { Link } from 'react-scroll';
import { ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full relative z-10 border-t border-white/10 bg-background/50 backdrop-blur-md mt-12 py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-500/50 transition-colors">
            <Code2 className="w-4 h-4 text-brand-400" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white/90">
            Pavan<span className="text-brand-400 text-sm">.dev</span>
          </span>
        </div>
        
        {/* Copyright */}
        <p className="text-gray-500 text-sm font-medium text-center md:text-left">
          &copy; {new Date().getFullYear()} Boyi Pavan Kalyan Reddy. All rights reserved.
        </p>
        
        {/* Back to Top */}
        <Link 
          to="home" 
          smooth={true} 
          duration={800}
          className="p-3 rounded-xl bg-white/5 hover:bg-brand-500 hover:text-white border border-white/10 hover:border-brand-400 text-gray-400 transition-all cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0)] hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Link>
        
      </div>
    </footer>
  );
};

export default Footer;
