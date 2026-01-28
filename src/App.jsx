import { useState, useLayoutEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeCanvas from './components/ThreeCanvas';
import LoadingOverlay from './components/LoadingOverlay';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);

    // Trigger content animations after loading is done
    // We use a slight delay to ensure the loading overlay fade out is smooth
    setTimeout(() => {
      initContentAnimations();
    }, 100);
  }, []);

  const initContentAnimations = () => {
    // Nav Fade In
    gsap.to('.nav-fade', { opacity: 1, duration: 1 });

    // Hero Elements
    gsap.to('.animate-in', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Batch Reveal Sections for staggered animations
    ScrollTrigger.batch('.gs-reveal', {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.2)', // Pop-up effect
        overwrite: true
      }),
      onLeave: batch => gsap.set(batch, { opacity: 0, y: 40, scale: 0.9, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.2)',
        overwrite: true
      }),
      onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 40, scale: 0.9, overwrite: true }),
      start: 'top 85%',
    });

    // Initialize hidden state for batch elements to avoid FOUC
    gsap.set('.gs-reveal', { y: 40, opacity: 0, scale: 0.9 });
  };

  return (
    <div className="antialiased selection:bg-stone-300 selection:text-stone-900">
      <ThreeCanvas onLoadComplete={handleLoadComplete} />
      <LoadingOverlay isVisible={loading} />

      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
