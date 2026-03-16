import { motion } from 'framer-motion';
import { Trophy, Code, Medal, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Global Rank: 7522 (Top 5%)',
    organization: 'LeetCode Weekly Contest',
    date: 'December 2025',
    desc: 'Attained a prominent global rating of 1610 in highly competitive algorithms contests.',
    icon: <Trophy className="w-5 h-5" />,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  },
  {
    title: 'Merit Certificate - Cloud Computing',
    organization: 'NPTEL',
    date: 'December 2025',
    desc: 'Secured a top 5% rank at the national level in Cloud Computing fundamentals.',
    icon: <Medal className="w-5 h-5" />,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: "Dean's List Recognition",
    organization: 'Lovely Professional University',
    date: 'October 2025',
    desc: 'Earned recognition for academic excellence (Top 10%).',
    icon: <Star className="w-5 h-5" />,
    color: 'text-brand-400',
    bg: 'bg-brand-400/10'
  },
  {
    title: '500+ Algorithmic Problems Solved',
    organization: 'LeetCode & GeeksforGeeks',
    date: 'Jun 2025 – Jul 2025',
    desc: 'Improved global ranking by 65% focusing on time/space complexity optimization.',
    icon: <Code className="w-5 h-5" />,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-2">Milestones</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Key <span className="text-gray-500">Achievements</span></h3>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Animated Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-brand-500/50 to-transparent -translate-x-1/2 rounded-full hidden md:block" />
        <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-brand-500/50 to-transparent -translate-x-1/2 rounded-full md:hidden" />

        <div className="flex flex-col gap-12">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative flex items-center justify-between w-full flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-brand-500 -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>

              {/* Empty Space for Grid Alignment */}
              <div className="hidden md:block w-[45%]" />

              {/* Content Card */}
              <div className="w-full pl-20 pr-4 md:p-0 md:w-[45%]">
                <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-brand-400 font-semibold uppercase tracking-wider block mb-1">
                        {item.date}
                      </span>
                      <span className="text-sm text-gray-400 font-medium">
                        {item.organization}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 leading-tight">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
