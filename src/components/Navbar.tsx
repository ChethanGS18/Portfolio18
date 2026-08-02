import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personal } from '@/data/portfolio';
import { useActiveSection, useScrollProgress } from '@/hooks/useInteractions';
import { scrollTo as lenisScrollTo } from '@/hooks/useSmoothScroll';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));
  const progress = useScrollProgress();

  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 200);
      setScrolled(y > 50);
      lastY = y;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    lenisScrollTo(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-center px-4 pt-4"
      >
        <div
          className={`flex items-center gap-1 rounded-full transition-all duration-500 ${
            scrolled ? 'glass-strong py-2 px-2' : 'glass py-3 px-3'
          }`}
          style={{ width: scrolled ? 'auto' : 'auto' }}
        >
          {/* Logo */}
          <Magnetic strength={0.4}>
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-xs font-bold text-white">
                C
              </div>
              <span className="text-sm font-medium hidden sm:block">{personal.name.split(' ')[0]}</span>
            </button>
          </Magnetic>

          {/* Links */}
          <div className="hidden md:flex items-center gap-0.5 ml-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-3 py-1.5 text-sm rounded-full transition-colors"
                data-cursor
              >
                <span className={active === link.id ? 'text-white' : 'text-white/50 hover:text-white/80'}>
                  {link.label}
                </span>
                {active === link.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Magnetic strength={0.3}>
            <a
              href={personal.resumeUrl}
              download
              className="ml-2 hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-white text-neutral-950 hover:bg-white/90 transition-colors"
              data-cursor
            >
              Resume
            </a>
          </Magnetic>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-1 p-2 rounded-full"
            data-cursor
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block h-0.5 w-full bg-white rounded-full" />
              <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block h-0.5 w-full bg-white rounded-full" />
              <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block h-0.5 w-full bg-white rounded-full" />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[999] h-0.5 bg-transparent">
        <div className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-emerald" style={{ width: `${progress * 100}%` }} />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-[999] md:hidden glass-strong rounded-3xl p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-2xl text-sm transition-colors ${
                    active === link.id ? 'bg-white/10 text-white' : 'text-white/60'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={personal.resumeUrl}
                download
                className="mt-2 px-4 py-3 rounded-2xl text-sm font-medium bg-white text-neutral-950 text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
