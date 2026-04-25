import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Hero from './Hero';
import CustomCursor from './components/CustomCursor';
import FilmGrain from './components/FilmGrain';
import CinematicNav from './components/CinematicNav'; // <-- IMPORTED HERE!

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <FilmGrain />
      
      {/* Placing CinematicNav here guarantees it is connected 
        and sits above ALL other components!
      */}
      <CinematicNav /> 
      
      <Hero />
    </>
  );
}