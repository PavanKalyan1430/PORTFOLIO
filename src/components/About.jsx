import { motion } from 'framer-motion';
import { Lightbulb, Terminal, BrainCircuit, BookOpen } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      title: 'Problem Solving',
      desc: 'Obsessed with writing clean, optimized algorithms to crack complex bottlenecks.',
      icon: <Lightbulb className="w-6 h-6 text-brand-400" />,
      delay: 0.1,
    },
    {
      title: 'Competitive Programming',
      desc: 'Top 5% globally on LeetCode with 500+ problems solved. Mastery in runtime optimization.',
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      delay: 0.2,
    },
    {
      title: 'AI Projects',
      desc: 'Building intelligent systems using NLP and Machine Learning for real-world impact.',
      icon: <BrainCircuit className="w-6 h-6 text-pink-400" />,
      delay: 0.3,
    },
    {
      title: 'Continuous Learning',
      desc: 'Always exploring the bleeding edge of web technologies and system architectures.',
      icon: <BookOpen className="w-6 h-6 text-green-400" />,
      delay: 0.4,
    },
  ];

  return (
    <section id="about" className="py-24 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-2">My Story</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">About <span className="text-gray-500">Me</span></h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          I bridge the gap between heavy computational logic and intuitive user experiences. With a strong foundation in <span className="text-white font-semibold">Data Structures & Algorithms</span> and hands-on experience in building scalable web platforms and AI-driven applications, I don't just write code—I engineer solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: item.delay }}
            className="glass-card rounded-2xl p-6 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
