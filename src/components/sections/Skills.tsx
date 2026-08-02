import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Brain, Cloud, Wrench } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { TiltCard } from '../Magnetic';
import { SectionHeader, staggerContainer, viewportOnce } from '../SectionHeader';

const iconMap: Record<string, typeof Code> = {
  code: Code, layout: Layout, server: Server, database: Database, brain: Brain, cloud: Cloud, wrench: Wrench,
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as never } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Technical Expertise" title="Skills & Tools" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.div key={cat.id} variants={cardVariants}>
                <TiltCard className="group relative glass-strong rounded-3xl p-6 h-full glass-reflection" maxTilt={6}>
                  <div
                    className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${cat.color}30, transparent 60%)`,
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px',
                    }}
                  />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: `${cat.color}15`, color: cat.color }}>
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>
                    <h3 className="text-lg font-semibold">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2 px-3 py-2 rounded-xl glass text-sm group-hover:bg-white/[0.06] transition-colors">
                        <skill.icon className="w-4 h-4 shrink-0" style={{ color: skill.color }} />
                        <span className="text-white/70 font-light">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
