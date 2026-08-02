import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { processSteps } from '@/data/portfolio';
import { viewportOnce } from '../SectionHeader';

const EASE = [0.22, 1, 0.36, 1] as const;

const iconMap: Record<string, typeof Search> = {
  search: Search,
  pen: PenTool,
  code: Code,
  rocket: Rocket,
};

// All four steps: Research → Design → Develop → Deploy
const steps = processSteps;

// Card absolute positions matching the reference composition:
// Research: upper-right, Design: lower-left, Develop: lower-right, Deploy: upper-left
const cardLayouts = [
  {
    // Research — upper right
    wrapper: 'absolute top-[6%] right-[2%] w-[300px] sm:w-[320px]',
    dot: 'bottom-[-8px] left-1/2 -translate-x-1/2',
  },
  {
    // Design — lower left
    wrapper: 'absolute top-[38%] left-[8%] w-[280px] sm:w-[300px]',
    dot: 'top-[-8px] right-[20%]',
  },
  {
    // Develop — lower right
    wrapper: 'absolute top-[64%] right-[6%] w-[280px] sm:w-[300px]',
    dot: 'top-[-8px] left-[20%]',
  },
  {
    // Deploy — upper-left (completes the flow loop)
    wrapper: 'absolute top-[86%] left-[10%] w-[280px] sm:w-[300px]',
    dot: 'top-[-8px] right-[14%]',
  },
];

// Connection point pairs for SVG curved dotted lines (percent-based on 100x100 canvas)
// Line 1: Research → Design
// Line 2: Design → Develop
// Line 3: Develop → Deploy
const connectors = [
  { x1: 62, y1: 26, cx1: 55, cy1: 42, cx2: 28, cy2: 42, x2: 14, y2: 52 },
  { x1: 38, y1: 60, cx1: 48, cy1: 62, cx2: 48, cy2: 66, x2: 58, y2: 66 },
  { x1: 58, y1: 74, cx1: 48, cy1: 82, cx2: 38, cy2: 82, x2: 28, y2: 88 },
];

// Connector dots at all path endpoints
const connectorDots = [
  { cx: 62, cy: 26 },
  { cx: 14, cy: 52 },
  { cx: 38, cy: 60 },
  { cx: 58, cy: 66 },
  { cx: 58, cy: 74 },
  { cx: 28, cy: 88 },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="process" ref={sectionRef} className="relative section-pad">
      {/* Subtle background decorative circle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(79,142,247,0.15), transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Desktop layout — ref split */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[1fr_1fr] gap-0 items-start min-h-[860px] relative">
            {/* LEFT — heading + description */}
            <motion.div
              style={{ y: headingY }}
              className="sticky top-32 pt-8 pr-12"
            >
              <motion.p
                className="text-sm text-white/40 font-light tracking-widest uppercase mb-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, ease: EASE as never }}
              >
                My Process
              </motion.p>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold gradient-text leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.05, ease: EASE as never }}
              >
                Here's how I turn ideas into real-world applications
              </motion.h2>
              <motion.p
                className="text-white/50 font-light leading-relaxed max-w-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: 0.12, ease: EASE as never }}
              >
                I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.
              </motion.p>

              {/* Decorative small circles */}
              <div className="mt-10 flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-accent-primary/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary/30" />
                <div className="w-1 h-1 rounded-full bg-accent-emerald/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-warning/30" />
              </div>
            </motion.div>

            {/* RIGHT — scattered cards + SVG connectors */}
            <div className="relative" style={{ height: '860px' }}>
              {/* SVG curved dotted connectors */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                {connectors.map((c, i) => (
                  <motion.path
                    key={i}
                    d={`M ${c.x1},${c.y1} C ${c.cx1},${c.cy1} ${c.cx2},${c.cy2} ${c.x2},${c.y2}`}
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.4, ease: EASE as never }}
                  />
                ))}
                {/* Connector dots at path endpoints */}
                {connectorDots.map((pt, i) => (
                  <motion.circle
                    key={i}
                    cx={pt.cx} cy={pt.cy} r="0.8"
                    fill="rgba(255,255,255,0.3)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }}
                  />
                ))}
              </svg>

              {/* Cards */}
              {steps.map((step, i) => {
                const layout = cardLayouts[i];
                const Icon = iconMap[step.icon];
                return (
                  <motion.div
                    key={step.id}
                    className={`${layout.wrapper} z-10`}
                    initial={{ opacity: 0, y: 32, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: i * 0.15, ease: EASE as never }}
                  >
                    {/* Connector dot on card edge */}
                    <div
                      className={`absolute ${layout.dot} w-3 h-3 rounded-full z-20 border-2 border-neutral-950`}
                      style={{
                        background: step.accent,
                        boxShadow: `0 0 12px ${step.accent}80`,
                      }}
                    />
                    <div className="glass-strong rounded-3xl p-6 glass-reflection">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center"
                          style={{ background: `${step.accent}15`, color: step.accent }}
                        >
                          {Icon && <Icon className="w-5 h-5" />}
                        </div>
                        <span className="text-4xl font-bold"
                          style={{ color: 'rgba(255,255,255,0.06)' }}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: step.accent }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/50 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / tablet — stacked storytelling */}
        <div className="block md:hidden">
          <motion.p
            className="text-sm text-white/40 font-light tracking-widest uppercase mb-4 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, ease: EASE as never }}
          >
            My Process
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold gradient-text leading-[1.15] mb-4 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE as never }}
          >
            Here's how I turn ideas into real-world applications
          </motion.h2>
          <motion.p
            className="text-white/50 font-light leading-relaxed text-center mb-12 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, delay: 0.12, ease: EASE as never }}
          >
            I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.
          </motion.p>

          <div className="relative flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  {/* Vertical dotted connector between cards */}
                  {i < steps.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-px h-10 z-0"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 4px, transparent 4px, transparent 10px)',
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    />
                  )}
                  <motion.div
                    className="w-full max-w-sm mb-10 z-10"
                    initial={{ opacity: 0, y: 28, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: EASE as never }}
                  >
                    <div className="glass-strong rounded-3xl p-6 glass-reflection relative">
                      {/* Accent left border accent */}
                      <div
                        className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                        style={{ background: step.accent }}
                      />
                      <div className="flex items-center justify-between mb-4 pl-3">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center"
                          style={{ background: `${step.accent}15`, color: step.accent }}
                        >
                          {Icon && <Icon className="w-5 h-5" />}
                        </div>
                        <span className="text-4xl font-bold" style={{ color: 'rgba(255,255,255,0.06)' }}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 pl-3" style={{ color: step.accent }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/50 font-light leading-relaxed pl-3">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
