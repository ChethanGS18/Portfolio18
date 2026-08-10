import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FileText, FolderOpen } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { scrollTo as lenisScrollTo } from '@/hooks/useSmoothScroll';
import Magnetic from '../Magnetic';

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: EASE as never },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const bgWordY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 28 });
  const sy = useSpring(my, { stiffness: 50, damping: 28 });

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
      className="relative h-[100dvh] min-h-[660px] w-full flex items-center justify-center overflow-hidden pt-24 pb-24"
    >
      {/* Ambient blue/white atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_38%,rgba(79,142,247,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_82%_78%,rgba(56,189,248,0.05),transparent_65%)]" />

        <motion.div
          className="absolute w-[min(72vw,960px)] h-[min(62vh,740px)] rounded-full"
          style={{
            left: lightX,
            top: lightY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(79,142,247,0.1) 0%, transparent 68%)',
            filter: 'blur(52px)',
            willChange: 'transform',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2.4, ease: EASE as never }}
        />

        <motion.div
          className="absolute top-[16%] right-[-10%] w-[48vw] max-w-[560px] h-[48vw] max-h-[560px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
            filter: 'blur(64px)',
            willChange: 'transform',
          }}
          animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
          transition={{ duration: 52, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="absolute inset-0 bg-noise opacity-[0.018] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(8,8,8,0.6)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-neutral-950/85 to-transparent" />
      </div>

      {/* Background word: PORTFOLIO */}
      <motion.h1
        style={{ y: bgWordY, willChange: 'transform' }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 select-none"
        aria-hidden
      >
        <motion.span
          initial={{ opacity: 0, scale: 1.04, filter: 'blur(14px)' }}
          animate={{ opacity: 0.06, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: EASE as never, delay: 0.15 }}
          className="font-black tracking-[-0.08em] leading-none text-white text-[clamp(5rem,22vw,18rem)] whitespace-nowrap"
        >
          PORTFOLIO
        </motion.span>
      </motion.h1>

      {/* Foreground content */}
      <motion.div
        style={{ y: parallaxY, opacity: contentOpacity, willChange: 'transform, opacity' }}
        className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 text-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Foreground title: Full Stack Developer */}
          <motion.div variants={item} className="mb-10 sm:mb-12">
            <motion.h2
              className="font-bold tracking-[-0.04em] leading-[0.9] text-[clamp(2rem,7vw,5rem)] whitespace-nowrap bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1E3A8A 0%, #60A5FA 100%)',
                textShadow: '0 12px 48px rgba(79,142,247,0.28)',
              }}
            >
              Full Stack Developer
            </motion.h2>
          </motion.div>

          {/* Concise description */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-14 sm:mb-16 max-w-lg text-balance"
            style={{ color: 'rgba(190,205,230,0.72)' }}
          >
            Java Full Stack engineer building scalable web apps with{' '}
            <span style={{ color: '#4F8EF7' }}>Spring Boot</span>, React, and clean REST APIs.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <Magnetic strength={0.25}>
              <button
                onClick={() => lenisScrollTo('projects')}
                className="group relative px-8 py-4 rounded-full bg-white text-neutral-950 font-medium text-sm overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(79,142,247,0.55)] active:scale-[0.97]"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F8EF7] to-[#38BDF8] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
              </button>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href={personal.resumeUrl}
                download
                className="group flex items-center gap-2.5 px-8 py-4 rounded-full glass text-white/90 font-medium text-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_20px_50px_-12px_rgba(56,189,248,0.4)] active:scale-[0.97]"
                data-cursor
              >
                <FileText className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" />
                Download Resume
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.9, ease: EASE as never }}
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
