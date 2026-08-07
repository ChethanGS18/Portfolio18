import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    tx: -100, ty: -100,
    dx: -100, dy: -100,
    rx: -100, ry: -100,
    hovering: false,
    clicking: false,
    visible: false,
  });

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    const s = stateRef.current;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      s.tx = e.clientX;
      s.ty = e.clientY;
      if (!s.visible) {
        s.visible = true;
        s.dx = e.clientX; s.dy = e.clientY;
        s.rx = e.clientX; s.ry = e.clientY;
      }
      const el = e.target as HTMLElement;
      const interactive = el.closest('a, button, [data-cursor], input, textarea, [role="button"]');
      s.hovering = !!interactive;
    };
    const onDown = () => { s.clicking = true; };
    const onUp = () => { s.clicking = false; };
    const onLeave = () => { s.visible = false; };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup', onUp, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    const tick = () => {
      // Dot follows quickly (snappy)
      s.dx += (s.tx - s.dx) * 0.5;
      s.dy += (s.ty - s.dy) * 0.5;
      // Ring trails smoothly (eased)
      s.rx += (s.tx - s.rx) * 0.14;
      s.ry += (s.ty - s.ry) * 0.14;

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${s.dx - 4}px, ${s.dy - 4}px, 0)`;
        dot.style.opacity = s.visible ? '1' : '0';
        dot.style.scale = s.clicking ? '0.4' : '1';
      }
      if (ring) {
        const size = s.hovering ? 52 : 34;
        ring.style.transform = `translate3d(${s.rx - size / 2}px, ${s.ry - size / 2}px, 0)`;
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        ring.style.opacity = s.visible ? '1' : '0';
        ring.style.borderColor = s.hovering
          ? 'rgba(79,142,247,0.7)'
          : 'rgba(255,255,255,0.25)';
        ring.style.borderWidth = s.hovering ? '1.5px' : '1px';
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block w-2 h-2 rounded-full bg-white will-change-transform"
        style={{ transition: 'opacity 0.25s ease, scale 0.18s ease' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block rounded-full border will-change-transform"
        style={{
          width: '34px',
          height: '34px',
          transition:
            'opacity 0.3s ease, border-color 0.3s ease, width 0.25s ease, height 0.25s ease, border-width 0.25s ease',
        }}
      />
    </>
  );
}
