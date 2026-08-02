import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { scrollTo as lenisScrollTo } from '@/hooks/useSmoothScroll';
import Magnetic from '../Magnetic';

export default function Footer() {
  const scrollTop = () => lenisScrollTo(0);

  return (
    <footer className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col items-center text-center">
            {/* Animated logo */}
            <Magnetic strength={0.3}>
              <button onClick={scrollTop} className="relative mb-6" data-cursor>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-2xl font-bold text-white shadow-glow-blue">
                  C
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/20"
                  animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </button>
            </Magnetic>

            <h3 className="text-2xl font-bold gradient-text">{personal.name}</h3>
            <p className="text-white/40 font-light mt-1">{personal.title}</p>

            <div className="flex items-center gap-4 mt-6">
              {[
                { Icon: Github, href: personal.github },
                { Icon: Linkedin, href: personal.linkedin },
                { Icon: Mail, href: `mailto:${personal.email}` },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  data-cursor
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/30 font-light">
                &copy; {new Date().getFullYear()} {personal.name}. Crafted with precision.
              </p>
              <Magnetic strength={0.3}>
                <button
                  onClick={scrollTop}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-light text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  data-cursor
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  Back to top
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
