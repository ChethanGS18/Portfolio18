import { useState, useRef, useEffect } from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  eager?: boolean;
};

export default function LazyImage({ src, alt, className = '', aspect, eager = false }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(eager);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [eager]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspect ? `aspect-[${aspect}]` : ''} ${className}`}>
      {!loaded && <div className="absolute inset-0 bg-white/[0.04] animate-pulse" />}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105'
          }`}
        />
      )}
    </div>
  );
}
