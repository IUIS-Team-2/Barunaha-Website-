import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CinematicNav from './components/CinematicNav';

export default function HeroPage() {
  const heroRef  = useRef(null);
  const bgRef    = useRef(null);
  const canvasRef = useRef(null);

  // Mouse parallax
  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(bgRef.current, { x: x * 22, y: y * 16, duration: 1.2, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Canvas dust particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [], animId;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();

    class Particle {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init ? Math.random() * canvas.height : canvas.height + 5;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.speedY = -(Math.random() * 0.45 + 0.1);
        this.opacity = Math.random() * 0.5 + 0.1;
        this.life = 1;
        this.decay = Math.random() * 0.003 + 0.001;
      }
      update() {
        this.x += this.speedX; this.y += this.speedY; this.life -= this.decay;
        if (this.life <= 0 || this.y < -5) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity * this.life;
        ctx.fillStyle = Math.random() > 0.7 ? '#FFD700' : '#ffffff';
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 90; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from('.h-eyebrow',   { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out' })
        .from('.h-line-1',    { y: 70, opacity: 0, duration: 1.1, ease: 'power4.out' }, '-=0.5')
        .from('.h-line-2',    { y: 70, opacity: 0, duration: 1.1, ease: 'power4.out' }, '-=0.85')
        .from('.h-subtext',   { y: 20, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.65')
        .from('.h-cta',       { y: 18, opacity: 0, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.5')
        .from('.h-scroll',    { opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#0B0B0B]"
    >
      <CinematicNav />

      {/* Background parallax layer */}
      <div ref={bgRef} className="absolute inset-[-4%] z-0 will-change-transform">
        <div
          className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000')" }}
        />
        {/* Light leaks */}
        <div className="light-leak-tl" />
        <div className="light-leak-br" />
      </div>

      {/* Vignette */}
      <div className="vignette absolute inset-0 z-[1] pointer-events-none" />

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[2] pointer-events-none" />

      {/* Red horizontal accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent z-[3]" />

      {/* Main content */}
      <div className="relative z-[4] flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        {/* Eyebrow */}
        <p className="h-eyebrow eyebrow text-[#FFD700] mb-8 opacity-80 tracking-[0.55em]">
          BARUNAHA PRODUCTIONS — EST. 2020
        </p>

        {/* Heading */}
        <h1 className="font-['Bebas_Neue'] leading-[0.9] mb-6 overflow-hidden" style={{ fontSize: 'clamp(58px,11vw,150px)' }}>
          <span className="h-line-1 block text-[#F5F5F1]">STORIES THAT</span>
          <span className="h-line-2 block text-red-gradient">MOVE FRAMES.</span>
        </h1>

        {/* Subtext */}
        <p className="h-subtext text-[#F5F5F1]/55 text-lg md:text-xl max-w-lg mx-auto mb-14 leading-relaxed font-['Space_Grotesk'] font-light">
          Where every frame tells a story that lasts forever.
        </p>

        {/* CTA Buttons */}
        <div className="h-cta flex flex-col sm:flex-row items-center gap-5">
          <button className="projector-btn">
            <span>Enter the Experience</span>
          </button>
          <a href="#now-showing" className="ghost-btn">View Our Work</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="h-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-[4]">
        <span className="eyebrow text-[#F5F5F1]/25 text-[0.6rem] tracking-[0.5em]">SCROLL</span>
        <div className="scroll-line" />
      </div>

      {/* Corner frame decorations */}
      <div className="absolute top-24 left-8 w-10 h-10 border-t border-l border-[#E50914]/25 z-[4]" />
      <div className="absolute top-24 right-8 w-10 h-10 border-t border-r border-[#E50914]/25 z-[4]" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-[#E50914]/25 z-[4]" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-[#E50914]/25 z-[4]" />
    </section>
  );
}