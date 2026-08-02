import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, MapPin } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { TiltCard } from '../Magnetic';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socials = [
    { Icon: Github, href: personal.github, label: 'GitHub' },
    { Icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { Icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
    { Icon: Phone, href: `tel:${personal.phone}`, label: 'Phone' },
  ];

  return (
    <section id="contact" className="relative section-pad overflow-hidden">
      {/* Oversized background typography */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as never }}
        className="absolute inset-x-0 top-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h2 className="text-[22vw] sm:text-[18vw] lg:text-[16vw] font-bold leading-none text-white/[0.04] whitespace-nowrap">
          CONTACT
        </h2>
      </motion.div>

      <div className="relative max-w-6xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/40 font-light tracking-widest uppercase mb-3">Get in touch</p>
          <h3 className="text-4xl sm:text-5xl font-bold gradient-text">Let's build something</h3>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <TiltCard className="glass-strong rounded-3xl p-8 h-full glass-reflection" maxTilt={4}>
              <h4 className="text-xl font-semibold mb-2">Reach out</h4>
              <p className="text-white/50 font-light text-sm leading-relaxed mb-6">
                Whether you have a project in mind, a role to fill, or just want to say hi — my inbox is always open.
              </p>
              <div className="space-y-4">
                <a href={`mailto:${personal.email}`} className="flex items-center gap-3 group" data-cursor>
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-accent-primary" />
                  </div>
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">{personal.email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent-secondary" />
                  </div>
                  <span className="text-sm text-white/60">{personal.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-accent-emerald" />
                  </div>
                  <span className="text-sm text-white/60">{personal.location}</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-xs text-white/30 mb-3">Follow me</p>
                <div className="flex gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all" data-cursor>
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <TiltCard className="glass-strong rounded-3xl p-8 h-full glass-reflection" maxTilt={3}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-2xl glass text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-2xl glass text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-2xl glass text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all resize-none" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" className="group relative w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-neutral-950 font-medium text-sm overflow-hidden" data-cursor>
                  <span className="relative z-10 flex items-center gap-2">
                    {sent ? 'Message Sent!' : 'Send Message'}
                    {!sent && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">Sent!</span>
                </button>
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
