import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Background() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 25 });
  const sy = useSpring(my, { stiffness: 60, damping: 25 });

  const layer1X = useTransform(sx, [-0.5, 0.5], [-25, 25]);
  const layer1Y = useTransform(sy, [-0.5, 0.5], [-15, 15]);
  const layer2X = useTransform(sx, [-0.5, 0.5], [15, -15]);
  const layer2Y = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const layer3X = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const layer3Y = useTransform(sy, [-0.5, 0.5], [8, -8]);

  const rafRef = useRef<number>(0);

  useEffect(() => {
    let pending = false;
    const handler = (e: MouseEvent) => {
      if (pending) return;
      pending = true;
      rafRef.current = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        mx.set(x);
        my.set(y);
        pending = false;
      });
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handler);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mx, my]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-neutral-950">
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[80px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(79,142,247,0.10),transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[70px]"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(56,189,248,0.07),transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        className="absolute bottom-[-10%] left-[20%] w-[55%] h-[55%] rounded-full blur-[75px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(52,211,153,0.05),transparent_70%)]" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}
