import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionHeader, reveal, staggerContainer, viewportOnce } from '../SectionHeader';
import LazyImage from '../LazyImage';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Selected Work" title="Things I've built" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-20 md:space-y-28"
        >
          {projects.map((project, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                variants={reveal}
                className="relative grid md:grid-cols-2 gap-6 lg:gap-12 items-center"
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, x: isReversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.55, ease: EASE as never }}
                  className={`group relative rounded-3xl overflow-hidden glass-strong glass-reflection ${isReversed ? 'md:order-2' : ''}`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <LazyImage src={project.image} alt={project.title} className="w-full h-full" eager={i === 0} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent pointer-events-none" />
                  <div
                    className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${project.accent}20, transparent 70%)` }}
                  />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-sm font-bold" style={{ color: project.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.55, delay: 0.12, ease: EASE as never }}
                  className={isReversed ? 'md:order-1' : ''}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-4">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
                    <span className="text-xs text-white/50 font-light">{project.tagline}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-xs glass text-white/60 font-light">{tech}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium hover:bg-white/10 transition-colors" data-cursor>
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 text-sm font-medium hover:bg-white/90 transition-colors" data-cursor>
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
