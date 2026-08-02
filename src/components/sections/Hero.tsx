import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, FolderOpen } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { scrollTo as lenisScrollTo } from '@/hooks/useSmoothScroll';
import Magnetic from '../Magnetic';

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

const item = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: EASE as never },
  },
};

const nameParts = personal.name.split(' ');
const firstName = nameParts[0];
const lastName = nameParts.slice(1).join(' ');

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 28 });
  const sy = useSpring(my, { stiffness: 50, damping: 28 });

  const contentX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const contentY = useTransform(sy, [-0.5, 0.5], [-6, 6]);
  const lightX = useTransform(sx, [-0.5, 0.5], ['42%', '58%']);
  const lightY = useTransform(sy, [-0.5, 0.5], ['38%', '52%']);

  useEffect(() => {
    let pending = false;
    const handler = (e: MouseEvent) => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
        pending = false;
      });
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [mx, my]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-[100dvh] min-h-[640px] w-full flex items-center overflow-hidden pt-24 pb-20"
    >
      {/* Subtle editorial atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(79,142,247,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(56,189,248,0.04),transparent_65%)]" />

        <motion.div
          className="absolute w-[min(70vw,900px)] h-[min(60vh,700px)] rounded-full opacity-[0.35]"
          style={{
            left: lightX,
            top: lightY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 68%)',
            filter: 'blur(48px)',
            willChange: 'transform',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 2.2, ease: EASE as never }}
        />

        <motion.div
          className="absolute top-[18%] right-[-8%] w-[45vw] max-w-[520px] h-[45vw] max-h-[520px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)',
            filter: 'blur(56px)',
            willChange: 'transform',
          }}
          animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
          transition={{ duration: 48, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="absolute inset-0 bg-noise opacity-[0.018] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(8,8,8,0.55)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950/80 to-transparent" />
      </div>

      {/* Vertical social rail */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.15, duration: 0.9, ease: EASE as never }}
        className="hidden lg:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-20"
      >
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        {[
          { Icon: Github, href: personal.github, label: 'GitHub' },
          { Icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
          { Icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
        ].map(({ Icon, href, label }) => (
          <Magnetic key={label} strength={0.35}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-500"
              data-cursor
            >
              <Icon className="w-4 h-4" />
            </a>
          </Magnetic>
        ))}
        <div className="w-px h-14 bg-gradient-to-b from-white/15 via-white/8 to-transparent" />
      </motion.div>

      {/* Main editorial content */}
      <motion.div
        style={{ x: contentX, y: contentY, willChange: 'transform' }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl mx-auto lg:mx-0 lg:ml-[min(8vw,6rem)]"
        >
          <motion.p
            variants={item}
            className="text-[11px] sm:text-xs text-white/35 font-light tracking-[0.28em] uppercase mb-8 sm:mb-10"
          >
            {personal.status}
          </motion.p>

          <motion.div variants={item} className="mb-6 sm:mb-8">
            <h1 className="font-bold tracking-[-0.04em] leading-[0.88] text-[clamp(3.25rem,12vw,8.5rem)]">
              <motion.span
                className="block gradient-text origin-left"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.5, ease: EASE as never }}
              >
                {firstName}
              </motion.span>
              {lastName && (
                <motion.span
                  className="block mt-1 sm:mt-2 font-light text-white/85 tracking-[-0.02em] text-[0.72em] sm:text-[0.68em]"
                  whileHover={{ x: 6, color: 'rgba(255,255,255,1)' }}
                  transition={{ duration: 0.5, ease: EASE as never }}
                >
                  {lastName}
                </motion.span>
              )}
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl lg:text-2xl font-light text-white/70 tracking-[0.01em] mb-4"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={item}
            className="text-sm sm:text-base text-white/45 font-light leading-relaxed max-w-md mb-12 sm:mb-14 text-balance"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5"
          >
            <Magnetic strength={0.2}>
              <button
                onClick={() => lenisScrollTo('projects')}
                className="group relative px-7 sm:px-8 py-3.5 rounded-full bg-white text-neutral-950 font-medium text-sm overflow-hidden transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98]"
                data-cursor
              >
                <span className="relative z-10 flex items-center gap-2.5 transition-opacity duration-300 group-hover:opacity-0">
                  <FolderOpen className="w-4 h-4" />
                  View Projects
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2.5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <FolderOpen className="w-4 h-4" />
                  Explore Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
              </button>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href={personal.resumeUrl}
                download
                className="group flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full glass text-white/90 font-medium text-sm transition-all duration-500 hover:bg-white/[0.08] hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                data-cursor
              >
                <FileText className="w-4 h-4 transition-transform duration-500 group-hover:scale-105" />
                Download Resume
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Minimal editorial scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.45, duration: 0.9, ease: EASE as never }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.32em] text-white/25 font-light">
          Scroll
        </span>
        <div className="relative w-px h-14 overflow-hidden bg-white/[0.08]">
          <motion.div
            className="absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ y: ['-100%', '280%'] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
