import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { SectionHeader, reveal, staggerContainer, viewportOnce } from '../SectionHeader';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Career Journey" title="Experience & Leadership" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-20 md:space-y-28"
        >
          {experiences.map((exp, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={exp.id}
                variants={reveal}
                className="relative grid md:grid-cols-2 gap-6 lg:gap-12 items-center"
              >
                {/* Icon side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, x: isReversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.55, ease: EASE as never }}
                  className={`group relative rounded-3xl overflow-hidden glass-strong glass-reflection p-10 flex items-center justify-center ${isReversed ? 'md:order-2' : ''}`}
                >
                  <div
                    className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${exp.accent}20, transparent 70%)` }}
                  />
                  <div className="relative flex flex-col items-center gap-4 text-center">
                    <div
                      className="w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: `${exp.accent}15`, color: exp.accent }}
                    >
                      <Briefcase className="w-9 h-9" />
                    </div>
                    <span className="text-5xl font-bold" style={{ color: 'rgba(255,255,255,0.06)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.55, delay: 0.12, ease: EASE as never }}
                  className={isReversed ? 'md:order-1' : ''}
                >
                  <div className="glass-strong rounded-3xl p-6 glass-reflection">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${exp.accent}15`, color: exp.accent }}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-sm" style={{ color: exp.accent }}>{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.duration}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-white/50 font-light leading-relaxed flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: exp.accent }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full text-xs glass text-white/50 font-light">{t}</span>
                      ))}
                    </div>
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
