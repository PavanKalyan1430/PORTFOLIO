import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const educationData = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science & Engineering',
    score: 'CGPA: 8.72',
    date: 'Aug 2023 – Present',
    location: 'Phagwara, Punjab',
    color: 'from-brand-500 to-blue-500',
  },
  {
    institution: 'Jawahar Navodaya Vidyalaya',
    degree: 'Intermediate (Class 12) - PCM',
    score: 'Percentage: 81%',
    date: 'Apr 2022 – Mar 2023',
    location: 'Visakhapatnam, Andhra Pradesh',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    institution: 'Jawahar Navodaya Vidyalaya',
    degree: 'Matriculation (Class 10)',
    score: 'Percentage: 75%',
    date: 'Apr 2020 – Mar 2021',
    location: 'Visakhapatnam, Andhra Pradesh',
    color: 'from-cyan-500 to-teal-500',
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-2">Background</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Academic <span className="text-gray-500">Journey</span></h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} blur-[30px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl -z-10`} />
            
            <div className="glass h-full p-8 rounded-3xl border border-white/5 group-hover:border-white/20 transition-all overflow-hidden relative">
              
              {/* Decorative gradient orb */}
              <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full bg-gradient-to-br ${edu.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-xl text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white leading-tight">{edu.institution}</h4>
              </div>
              
              <p className="text-lg text-brand-300 font-semibold mb-2">{edu.degree}</p>
              
              <div className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full text-sm font-mono text-gray-300 mb-6 border border-white/5 shadow-inner">
                {edu.score}
              </div>
              
              <div className="space-y-3 pb-2 pt-4 border-t border-white/10 mt-auto">
                <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                  <Calendar className="w-4 h-4 text-brand-400/70" />
                  <span>{edu.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                  <MapPin className="w-4 h-4 text-blue-400/70" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
