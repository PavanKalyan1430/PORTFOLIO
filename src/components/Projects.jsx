import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Vehicle Tracking & Geofence System',
    desc: 'Developed a robust geofence-based backend automation system designed to track live trip monitoring. By engineering an advanced event-driven logic architecture using Node.js and MongoDB, this platform successfully reduced manual monitoring dependency by 70%. Integrated REST APIs handle high-frequency geolocation data processing in real time.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Geofencing'],
    link: '#',
    github: 'https://github.com/PavanKalyan1430',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Resume Ranker: AI Platform',
    desc: 'Built a comprehensive NLP-based pipeline evaluating candidate-job fit. The platform leverages TF-IDF vectorization and Cosine Similarity to deeply analyze resumes against job descriptions. This intelligent matching system improved recruitment screening turnaround time by 2x, providing an intuitive React frontend and a powerful Python Flask backend.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'NLP', 'React'],
    link: '#',
    github: 'https://github.com/PavanKalyan1430',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=1000',
    color: 'from-brand-500/20 to-pink-500/20',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-2">Showcase</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured <span className="text-gray-500">Work</span></h3>
      </motion.div>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              index % 2 !== 0 ? 'lg:rtl' : ''
            }`}
          >
            {/* Image Section */}
            <div className={`lg:col-span-7 relative rounded-3xl overflow-hidden aspect-video ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="absolute inset-0 bg-brand-900/40 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-multiply z-[5] opacity-60`}></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Content Section */}
            <div className={`lg:col-span-5 relative z-20 ${index % 2 !== 0 ? 'lg:order-1 text-left lg:text-right' : 'text-left'}`}>
              <p className="text-brand-400 font-mono text-sm mb-2">Featured Project</p>
              <h4 className="text-3xl font-bold text-white mb-6 hover:text-brand-300 transition-colors cursor-pointer">
                {project.title}
              </h4>
              
              <div className="glass-card p-6 md:p-8 rounded-2xl mb-6 lg:w-[120%] relative lg:-ml-[20%] z-30 shadow-2xl">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {project.desc}
                </p>
              </div>

              <ul className={`flex flex-wrap gap-3 mb-8 text-sm font-mono text-gray-400 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className={`flex items-center gap-6 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                <a href={project.github} className="text-white hover:text-brand-400 transition-colors flex items-center gap-2 font-medium">
                  <Github className="w-5 h-5" />
                  Code
                </a>
                <a href={project.link} className="text-white hover:text-brand-400 transition-colors flex items-center gap-2 font-medium group/link">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
