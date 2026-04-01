import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroPage() {
  const comp = useRef(null);
  const canvasRef = useRef(null);

  // GSAP Entry Animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ensure elements are hidden before animation starts
      gsap.set(['.nav-el', '.hero-label', '.hero-title', '.hero-desc', '.hero-btn', '.footer-el'], { opacity: 0, y: 30 });
      gsap.set('.glass-pane', { opacity: 0, scale: 0.9 });

      tl.to('.nav-el', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' })
        .to('.hero-label', { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, "-=0.4")
        .to('.hero-title', { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, "-=0.4")
        .to('.hero-desc', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6")
        .to('.hero-btn', { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.5)' }, "-=0.4")
        .to('.glass-pane', { opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' }, "-=0.8")
        .to('.footer-el', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, "-=0.5");
        
    }, comp);

    return () => ctx.revert();
  }, []);

  // Canvas Particle System Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray = [];
      for (let i = 0; i < 50; i++) {
        particlesArray.push(new Particle());
      }
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main ref={comp} className="relative min-h-screen w-full flex flex-col overflow-hidden font-sans bg-black">
      
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <img alt="Cinematic background" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4bDOcu1Zs9Z5hQ6ps1Z1Vh_RGeRi4lmKu1fRlcIq43tuBoHoZiesa7QtwmlPyirjaCQJQNWVvCY3ojOUx-TnoGl5ceqtAvUrV0D-HbggNuoT0biR5HLuFZWw2MwfudVxqhnkiJd6jYTOtukYJWxM8ltRVaHXu09VHxxbJcDEQahY9BU_YHDCW3Kc_3G2BXolusHKm6FNncxcsP-IFbZVQ6FPYlDe9VqKmzCOUshbJNViqlvz4LNwRZUXliy0IlLIlKQoFoq5UoSc" />
        <div className="absolute inset-0 cinematic-overlay"></div>
        <div className="absolute inset-0 particles-bg opacity-30"></div>
        
        {/* Floating Glass Panes */}
        <div className="glass-pane absolute top-[20%] right-[10%] w-64 h-80 rounded-lg animate-float hidden lg:block" style={{ animationDelay: '0s' }}>
          <div className="w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=400')] bg-cover"></div>
        </div>
        <div className="glass-pane absolute bottom-[15%] left-[5%] w-48 h-64 rounded-lg animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=400')] bg-cover"></div>
        </div>
        
        {/* Lens Flares */}
        <div className="lens-flare top-[-100px] left-[-100px]"></div>
        <div className="lens-flare bottom-[-100px] right-[-100px] opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 lg:px-16">
        <div className="nav-el flex items-center">
          <span className="text-3xl font-serif font-black tracking-tighter text-white">BARNAURA</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-widest uppercase text-gray-300">
          <a className="nav-el hover:text-[#E50914] transition-colors duration-300" href="#">Work</a>
          <a className="nav-el hover:text-[#E50914] transition-colors duration-300" href="#">Services</a>
          <a className="nav-el hover:text-[#E50914] transition-colors duration-300" href="#">About</a>
        </div>
        <div className="nav-el">
          <a className="bg-[#E50914] hover:bg-red-700 text-white px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 transform hover:scale-105" href="#">
            Start a Project
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <span className="hero-label inline-block text-[#E50914] font-bold tracking-[0.3em] text-xs uppercase mb-6 animate-pulse-slow">
            Award Winning Studio
          </span>
          <h1 className="hero-title text-5xl md:text-8xl lg:text-9xl font-serif font-black mb-8 leading-tight tracking-tight">
            WE BRING <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">VISIONS TO LIFE</span>
          </h1>
          <p className="hero-desc text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Crafting high-end cinematic experiences for the world's most ambitious brands. From script to screen, we redefine visual storytelling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="hero-btn w-full sm:w-auto px-10 py-4 bg-[#E50914] hover:bg-red-700 text-white font-bold rounded-sm flex items-center justify-center gap-3 transition-all duration-300 group">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path></svg>
              VIEW SHOWREEL
            </button>
            <button className="hero-btn w-full sm:w-auto px-10 py-4 border border-white/30 hover:bg-white hover:text-black text-white font-bold rounded-sm transition-all duration-300">
              OUR SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* Footer Elements */}
      <footer className="relative z-10 p-8 flex flex-col md:flex-row justify-between items-end md:items-center text-[10px] tracking-[0.2em] uppercase text-gray-500 font-semibold">
        <div className="footer-el mb-4 md:mb-0">
          © 2024 BARNAURA FILMS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          <a className="footer-el hover:text-white transition-colors" href="#">Instagram</a>
          <a className="footer-el hover:text-white transition-colors" href="#">Vimeo</a>
          <a className="footer-el hover:text-white transition-colors" href="#">Twitter</a>
        </div>
      </footer>

      {/* Particle Canvas Engine */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[1]" id="particleCanvas"></canvas>
    
    </main>
  );
}