import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-2">Get In Touch</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's <span className="text-gray-500">Connect</span></h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 flex flex-col gap-8"
        >
          <div className="glass p-8 rounded-3xl h-full border border-white/5">
            <h4 className="text-2xl font-bold text-white mb-8">Contact Information</h4>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:pavankalyanreddy2525@gmail.com" className="flex items-start gap-4 text-gray-400 hover:text-brand-400 transition-colors group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-500/10 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Email</span>
                  <span className="text-sm">pavankalyanreddy2525@gmail.com</span>
                </div>
              </a>
              
              <div className="flex items-start gap-4 text-gray-400">
                <div className="p-3 bg-white/5 rounded-xl">
                  <MapPin className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Location</span>
                  <span className="text-sm">India</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10">
              <span className="block text-white font-medium mb-4">Follow Me</span>
              <div className="flex gap-4">
                <a href="https://github.com/pavankalyan" target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl transition-all hover:scale-110 border border-white/5">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/kalyan6565" target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-blue-400 rounded-xl transition-all hover:scale-110 border border-white/5">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-2/3"
        >
          <div className="glass p-8 md:p-12 rounded-3xl border border-white/5">
            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Form submission goes here!"); }}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe"
                    required
                    className="p-4 rounded-xl text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com"
                    required
                    className="p-4 rounded-xl text-sm"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Project Inquiry"
                  required
                  className="p-4 rounded-xl text-sm"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  placeholder="Hello, I'd like to talk about..."
                  required
                  className="p-4 rounded-xl text-sm resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="group relative mt-4 px-8 py-4 w-full rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-500 hover:to-blue-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[gradient-x_1.5s_ease-out]"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
