import { motion } from 'framer-motion';
import { Award, ShieldCheck, Database, Layout } from 'lucide-react';

const certificates = [
  {
    title: 'Fundamentals of Cloud Computing',
    issuer: 'NPTEL',
    date: 'Sep 2025',
    icon: <Database className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Networking Fundamentals',
    issuer: 'Cisco',
    date: 'Sep 2025',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'from-brand-500 to-pink-500'
  },
  {
    title: 'Data Structure and Algorithm',
    issuer: 'GeeksforGeeks',
    date: 'Jul 2025',
    icon: <Award className="w-8 h-8" />,
    color: 'from-emerald-500 to-teal-400'
  },
  {
    title: 'Object Oriented Programming | C++',
    issuer: 'NeoColab',
    date: 'Dec 2024',
    icon: <Layout className="w-8 h-8" />,
    color: 'from-orange-500 to-yellow-400'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-2">Credentials</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Licenses & <span className="text-gray-500">Certifications</span></h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${cert.color} opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 rounded-2xl blur-xl -z-10`} />
            
            <div className="glass p-6 rounded-2xl h-full border border-white/5 group-hover:border-white/20 transition-all flex flex-col items-center text-center">
              
              <div className="w-20 h-20 rounded-full bg-background border flex items-center justify-center border-white/10 mb-6 shadow-inner relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <div className={`absolute inset-0 bg-gradient-to-tr ${cert.color} opacity-20 rounded-full blur-md`} />
                <div className="relative text-white z-20">
                  {cert.icon}
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2 leading-snug">{cert.title}</h4>
              <p className="text-sm font-medium text-gray-400 mb-4">{cert.issuer}</p>
              
              <div className="mt-auto pt-4 w-full border-t border-white/10 text-xs font-mono text-gray-500 uppercase tracking-widest">
                Issued: {cert.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
