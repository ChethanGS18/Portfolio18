import { lazy, Suspense } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import Hero from '@/components/sections/Hero';

const About = lazy(() => import('@/components/sections/About'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Process = lazy(() => import('@/components/sections/Process'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const Footer = lazy(() => import('@/components/sections/Footer'));

function SectionFallback() {
  return <div className="section-pad" aria-hidden />;
}

export default function App() {
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <Loader onComplete={() => {}} />

      <Background />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Process />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
        <Footer />
      </main>
    </>
  );
}
