import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

let lenisInstance: Lenis | null = null;

export function scrollTo(target: string | number) {
  if (lenisInstance) {
    const resolved = typeof target === 'string' && !target.startsWith('#') ? `#${target}` : target;
    lenisInstance.scrollTo(resolved, { offset: -100, duration: 1.2 });
  } else if (typeof target === 'string') {
    const sel = target.startsWith('#') ? target : `#${target}`;
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: target, behavior: 'smooth' });
  }
}

export function useSmoothScroll() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      lerp: 0.1,
    });
    lenisInstance = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
