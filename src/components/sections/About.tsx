import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Star } from 'lucide-react';
import { SiReact, SiSpring, SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { personal } from '@/data/portfolio';
import { reveal, staggerContainer, viewportOnce } from '../SectionHeader';
import LazyImage from '../LazyImage';

const EASE = [0.22, 1, 0.36, 1] as const;

const socials = [
  { Icon: Github, href: personal.github, label: 'GitHub' },
  { Icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { Icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
];

const techIcons = [
  { Icon: FaJava, label: 'Java' },
  { Icon: SiReact, label: 'React' },
  { Icon: SiSpring, label: 'Spring' },
  { Icon: SiPython, label: 'Python' },
];

const stars = [
  { top: '8%', left: '38%' },
  { top: '22%', left: '58%' },
  { top: '62%', left: '18%' },
  { top: '78%', left: '48%' },
  { top: '40%', left: '88%' },
];

export default function About() {
  return (
    <section id="about" className="relative section-pad overflow-hidden pb-0">
      {/* Decorative stars */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <Star className="w-3 h-3 text-white/20 fill-white/10" />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto">
        <div className="relative grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
          {/* Far-left vertical social rail */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: EASE as never }}
            className="hidden lg:flex flex-col items-center gap-5 sticky top-32"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                data-cursor
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <div className="w-px h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
          </motion.div>

          {/* Two-column layout */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* LEFT — hanging photo frame */}
            <motion.div variants={reveal} className="relative flex justify-center">
              <div className="relative" style={{ transform: 'rotate(-3deg)' }}>
                {/* Rope/cable from top */}
                <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/30 via-white/15 to-white/25" />
                <div className="absolute left-1/2 -top-16 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30" />

                {/* Frame */}
                <div className="relative rounded-2xl overflow-hidden glass-strong glass-reflection group w-[220px] h-[280px] sm:w-[260px] sm:h-[330px] shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none z-10" />
                  <div className="w-full h-full">
                    <LazyImage src={personal.photo} alt={personal.photoAlt} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Glow behind frame */}
                <div
                  className="absolute -inset-6 -z-10 rounded-full blur-[60px] opacity-40"
                  style={{ background: 'radial-gradient(circle, rgba(79,142,247,0.25), transparent 70%)' }}
                />
              </div>
            </motion.div>

            {/* RIGHT — greeting, intro, tech icons */}
            <motion.div variants={reveal}>
              <motion.h2
                className="text-4xl sm:text-5xl font-bold gradient-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: EASE as never }}
              >
                Hi, I'm {personal.name.split(' ')[0]}.
              </motion.h2>

              <p className="text-white/50 font-light leading-relaxed mb-8 max-w-md">
                {personal.description}
              </p>

              {/* Tech icons row */}
              <div className="flex items-center gap-8 mb-4">
                {techIcons.map(({ Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: EASE as never }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-white/40 font-light">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Curved wave separator at bottom */}
      <div className="relative w-full mt-24 -mb-1">
        <svg className="w-full h-[80px] block" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="currentColor"
            className="text-neutral-950"
          />
        </svg>
      </div>
    </section>
  );
}
