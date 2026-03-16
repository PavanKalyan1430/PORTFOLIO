import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C++', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'Frontend & UI',
    items: [
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    category: 'Backend & Data/AI',
    items: [
      { name: 'FastAPI', level: 80 },
      { name: 'Flask', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Machine Learning', level: 70 },
      { name: 'Pandas / NumPy', level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-2">Expertise</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-gray-500">Arsenal</span></h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A combination of high-level full-stack development tools and deep data-processing languages.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            className="glass rounded-3xl p-8 border border-white/5 hover:border-brand-500/30 transition-colors"
          >
            <h4 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">
              {category.category}
            </h4>
            <div className="flex flex-col gap-5">
              {category.items.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-brand-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-brand-500 to-blue-500 rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/30 blur-[4px]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
