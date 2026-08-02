import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1] as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE as never } },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE as never } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

export const viewportOnce = { once: true, margin: '-80px' } as const;
export const viewportEarly = { once: true, margin: '-120px' } as const;

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerContainer}
      className={`text-center mb-16 ${className}`}
    >
      <motion.p variants={reveal} className="text-sm text-white/40 font-light tracking-widest uppercase mb-3">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={reveal} className="text-4xl sm:text-5xl font-bold gradient-text">
        {title}
      </motion.h2>
    </motion.div>
  );
}

export function ScrollParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  );
}
