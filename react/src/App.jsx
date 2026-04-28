import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import Hero from './Hero';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CustomCursor from './components/CustomCursor';
import FilmGrain from './components/FilmGrain';
import CinematicNav from './components/CinematicNav';

gsap.registerPlugin(ScrollTrigger);

function AppLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => { lenis.destroy(); };
  }, []);

  return (
    <>
      <CustomCursor />
      <FilmGrain />
      <CinematicNav />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/upcoming" element={<ProjectsPage defaultTab="upcoming" />} />
        <Route path="/projects/released" element={<ProjectsPage defaultTab="released" />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/film-production" element={<ServicesPage defaultService="film-production" />} />
        <Route path="/services/regional-film-production" element={<ServicesPage defaultService="regional-film-production" />} />
        <Route path="/services/documentary-films" element={<ServicesPage defaultService="documentary-films" />} />
        <Route path="/services/video-solution" element={<ServicesPage defaultService="video-solution" />} />
        <Route path="/services/video-editing" element={<ServicesPage defaultService="video-editing" />} />
        <Route path="/services/short-films" element={<ServicesPage defaultService="short-films" />} />
        <Route path="/services/ad-films" element={<ServicesPage defaultService="ad-films" />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}